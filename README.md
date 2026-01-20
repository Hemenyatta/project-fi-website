# Project Fi Website

A fantasy role-playing game website featuring character classes, rules, and equipment compendium. Built with vanilla JavaScript and responsive design.

## Features

- **Home Page**: Parallax scrolling hero section with smooth animations
- **Classes Page**: Interactive class browser with GitHub module integration
- **Rules Page**: Comprehensive game mechanics and rules
- **Equipment Compendium**: Searchable equipment database with filtering

## Design

- **Fonts**: Corben (headings and text)
- **Color Scheme**:
  - Background: #151A32
  - Secondary: #E6D1B4
  - Tertiary: #586DCF
- **Effects**: Scroll-triggered fade-in and slide-up animations
- **Responsive**: Mobile-friendly design with hamburger navigation

## Project Structure

```
project-fi-website/
├── index.html              # Home page
├── pages/
│   ├── classes.html        # Classes page with GitHub iframe
│   ├── rules.html          # Game rules page
│   └── equipment.html      # Equipment compendium
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   ├── main.js         # Core JavaScript (navigation, animations)
│   │   └── equipment.js    # Equipment page functionality
│   └── images/             # Image assets
└── data/
    ├── equipment.json      # Equipment database
    └── races.json          # Character races data
```

## Technologies

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **JSON**: Data storage for equipment and races

## Hosting on GitHub Pages

### Option 1: Using GitHub Settings (Recommended)

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial website setup"
   git push origin main
   ```

2. Go to your repository on GitHub
3. Click on **Settings** tab
4. Scroll down to **Pages** section (in the left sidebar)
5. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
6. Click **Save**
7. Your site will be available at: `https://hemenyatta.github.io/project-fi-website/`

### Option 2: Using GitHub Actions

1. Create `.github/workflows/pages.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: ["main"]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3
         - name: Setup Pages
           uses: actions/configure-pages@v3
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v2
           with:
             path: '.'
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v2
   ```

2. Push the workflow file and your site will automatically deploy

## Local Development

To run locally, you can use any static web server:

### Using Python
```bash
# Python 3
python -m http.server 8000

# Then visit http://localhost:8000
```

### Using Node.js (http-server)
```bash
npm install -g http-server
http-server -p 8000
```

### Using VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## Customization

### Changing Colors
Edit the CSS variables in `assets/css/styles.css`:
```css
:root {
    --primary-bg: #151A32;      /* Background */
    --secondary-color: #E6D1B4; /* Secondary */
    --tertiary-color: #586DCF;  /* Tertiary */
}
```

### Adding Equipment
Add items to `data/equipment.json`:
```json
{
    "name": "Item Name",
    "type": "weapons|armor|potions|magical",
    "category": "Display Category",
    "description": "Item description",
    "damage": "1d8",
    "cost": "10 gold"
}
```

### Integrating GitHub Modules
Update the iframe source in `pages/classes.html`:
```html
<iframe src="YOUR_GITHUB_MODULE_URL" ...>
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Mobile

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Project Fi Website by Hemenyatta