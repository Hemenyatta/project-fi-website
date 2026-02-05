import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const repoRoot = path.resolve(import.meta.dirname, '..');
const scriptPath = path.join(repoRoot, 'talent-tree', 'script.js');

const source = fs.readFileSync(scriptPath, 'utf8');

// Expose the const-scoped data for validation.
const instrumented = `${source}\n;globalThis.__talentTrees = talentTrees;`;

const context = vm.createContext({
  console,
  URLSearchParams,
  window: {
    addEventListener: () => {},
  },
});

try {
  vm.runInContext(instrumented, context, { filename: 'talent-tree/script.js' });
} catch (err) {
  console.error('Failed to evaluate talent-tree/script.js:', err);
  process.exitCode = 1;
  process.exit();
}

const talentTrees = context.__talentTrees;
if (!talentTrees || typeof talentTrees !== 'object') {
  console.error('Could not access talentTrees from script.js');
  process.exitCode = 1;
  process.exit();
}

const EPS = 1e-6;

function within(v, min, max) {
  return v >= min - EPS && v <= max + EPS;
}

let ok = true;
let warnings = 0;

for (const [classKey, tree] of Object.entries(talentTrees)) {
  const talents = tree?.talents ?? [];
  const links = tree?.links ?? [];
  const canvasWidth = tree?.canvas?.width ?? 1200;
  const canvasHeight = tree?.canvas?.height ?? 1500;

  const ids = new Set();
  for (const t of talents) {
    if (typeof t.id !== 'number') {
      console.error(`[${classKey}] talent without numeric id`, t);
      ok = false;
      continue;
    }
    if (ids.has(t.id)) {
      console.error(`[${classKey}] duplicate talent id: ${t.id}`);
      ok = false;
    }
    ids.add(t.id);

    if (!Number.isFinite(t.x) || !Number.isFinite(t.y)) {
      console.error(`[${classKey}] invalid coordinates for id ${t.id}: x=${t.x} y=${t.y}`);
      ok = false;
    } else {
      if (!within(t.x, 0, canvasWidth) || !within(t.y, 0, canvasHeight)) {
        console.error(`[${classKey}] out-of-bounds id ${t.id}: x=${t.x} y=${t.y} (canvas ${canvasWidth}x${canvasHeight})`);
        ok = false;
      }
    }
  }

  if (!ids.has(1)) {
    console.error(`[${classKey}] missing root node id=1`);
    ok = false;
  }

  // Validate links
  const linkSet = new Set(links.map(l => `${l.from}->${l.to}`));
  for (const l of links) {
    if (!ids.has(l.from) || !ids.has(l.to)) {
      console.error(`[${classKey}] link refers to missing node: ${l.from} -> ${l.to}`);
      ok = false;
    }
    if (!linkSet.has(`${l.to}->${l.from}`)) {
      // Not fatal, but usually desired in this project.
      warnings++;
      console.warn(`[${classKey}] warning: missing reverse link for ${l.from} -> ${l.to}`);
    }
  }

  console.log(`[${classKey}] talents=${talents.length} links=${links.length}`);
}

if (warnings > 0) {
  console.warn(`Warnings: ${warnings}`);
}

if (!ok) {
  process.exitCode = 1;
  console.error('Validation failed.');
} else {
  console.log('Validation passed.');
}
