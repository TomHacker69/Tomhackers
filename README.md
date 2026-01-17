# Tomhackers - Professional Hackathon Team Website

A modern, responsive, and visually stunning website for showcasing your hackathon team, achievements, and projects. Built with pure HTML, CSS, and JavaScript - no frameworks required!

![Website Preview](preview.png)

## 🌟 Features

- **Modern Dark Theme** - Sleek dark mode design with cyan/blue gradient accents
- **Fully Responsive** - Perfect viewing experience on mobile, tablet, and desktop
- **Smooth Animations** - Eye-catching scroll animations and hover effects
- **Easy to Customize** - All content stored in simple JavaScript arrays
- **No Dependencies** - Pure HTML/CSS/JS (except Lucide icons CDN)
- **Fast Loading** - Optimized performance with minimal code
- **SEO Friendly** - Semantic HTML structure for better search rankings

## 📂 Project Structure

```
tomhackers-website/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # JavaScript functionality and data
├── logo.png           # Your team logo (optional)
├── README.md          # This file
└── preview.png        # Website preview image (optional)
```

## 🚀 Quick Start

### Local Development

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. That's it! No build process or installation needed.

### Adding Your Logo

1. Save your logo as `logo.png` in the project folder
2. Logo will automatically appear in the navigation bar
3. Adjust logo size in `style.css` (line 90):
   ```css
   .logo-image {
       height: 40px; /* Change this value */
   }
   ```

## ✏️ Customization Guide

### Update Team Members

Edit the `teamMembers` array in `script.js` (starting at line 5):

```javascript
{
    name: "Your Name",
    role: "Your Role",
    avatar: "YN",  // Your initials
    description: "Brief description about you",
    skills: ["Skill1", "Skill2", "Skill3"],
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
}
```

### Update Achievements

Edit the `achievements` array in `script.js` (starting at line 72):

```javascript
{
    title: "Hackathon Name",
    position: "1st Place / Finalist / Winner",
    year: "2025",
    description: "Brief description of the achievement"
}
```

### Update Hackathons

Edit the `hackathons` object in `script.js` (starting at line 103):

**Completed Hackathons:**
```javascript
completed: [
    {
        name: "Hackathon Name",
        theme: "Theme/Track",
        date: "Month Year",
        project: "Your Project Name"
    }
]
```

**Upcoming Hackathons:**
```javascript
upcoming: [
    {
        name: "Hackathon Name",
        theme: "Theme/Track",
        date: "Month Year",
        project: "TBD"
    }
]
```

### Update Projects

Edit the `projects` array in `script.js` (starting at line 177):

```javascript
{
    name: "Project Name",
    problem: "Problem statement you solved",
    description: "Brief project description",
    tech: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/yourusername/project"
}
```

### Customize Colors

Edit CSS variables in `style.css` (lines 11-19):

```css
:root {
    --bg-primary: #111827;      /* Main background */
    --bg-secondary: #1f2937;    /* Secondary background */
    --bg-tertiary: #374151;     /* Card backgrounds */
    --text-primary: #f3f4f6;    /* Main text color */
    --text-secondary: #9ca3af;  /* Secondary text */
    --accent-cyan: #22d3ee;     /* Primary accent */
    --accent-blue: #3b82f6;     /* Secondary accent */
    --accent-purple: #a855f7;   /* Tertiary accent */
    --accent-yellow: #fbbf24;   /* Achievement accent */
}
```

### Update Contact Information

In `index.html`, update social media links (lines 159-174):

```html
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/company/yourcompany">LinkedIn</a>
<a href="https://twitter.com/yourusername">Twitter</a>
<a href="mailto:your-email@example.com">Email</a>
```

## 🌐 Deployment

### Option 1: GitHub Pages (Recommended)

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/tomhackers.git
   git push -u origin main
   ```
3. Enable GitHub Pages:
   - Go to **Settings** → **Pages**
   - Source: **main branch**
   - Click **Save**
4. Your site will be live at: `https://YOUR-USERNAME.github.io/tomhackers`

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Instant deployment! ✨

### Option 3: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Click **Deploy**

### Option 4: Surge.sh

```bash
npm install -g surge
cd tomhackers-website
surge
```

## 📱 Responsive Design

The website is fully responsive and optimized for:

- 📱 **Mobile** (320px - 767px)
- 📱 **Tablet** (768px - 1023px)
- 💻 **Desktop** (1024px+)

## 🎨 Sections Included

1. **Hero Section** - Eye-catching introduction with animated gradients
2. **Team Members** - Showcase your team with avatars, roles, and skills
3. **Achievements** - Display your hackathon wins and recognitions
4. **Hackathons** - List completed and upcoming hackathons
5. **Projects** - Showcase your hackathon projects with tech stacks
6. **Contact** - Social links and contact form
7. **Footer** - Copyright and credits

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Dynamic content rendering
- **Lucide Icons** - Beautiful, customizable icons

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 📸 Adding Screenshots

To add project screenshots:

1. Create an `images` folder in your project
2. Add your screenshots there
3. Update the project cards in `script.js`:
   ```javascript
   image: "images/project-screenshot.png"
   ```
4. Update the HTML template to display images

## 🎯 Performance

- ⚡ **Lighthouse Score**: 95+ Performance
- 🎨 **First Contentful Paint**: < 1s
- 📦 **Total Size**: < 50KB (without images)
- 🚀 **Load Time**: < 2s on 3G

## 🤝 Contributing

Feel free to fork this project and customize it for your team! If you have suggestions or improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 💡 Tips for Best Results

1. **Use high-quality logos** - SVG format recommended
2. **Optimize images** - Compress before uploading
3. **Update regularly** - Keep achievements and projects current
4. **Test responsiveness** - Check on multiple devices
5. **Use real data** - Replace sample content with your actual info
6. **Add meta tags** - Improve SEO in the `<head>` section
7. **Enable analytics** - Add Google Analytics for insights

## 🆘 Troubleshooting

### Icons not showing?
- Check internet connection (Lucide icons load from CDN)
- Ensure `lucide.createIcons()` is called after content loads

### Mobile menu not working?
- Check that `script.js` is properly linked
- Verify JavaScript is enabled in browser

### Smooth scroll not working?
- Ensure all section IDs match navigation links
- Check for JavaScript errors in console

## 📞 Support

If you need help customizing this website:

- 📧 Email: team@tomhackers.dev
- 🐛 Issues: [GitHub Issues](https://github.com/tomhackers/website/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/tomhackers/website/discussions)

## 🌟 Show Your Support

If you found this useful, please consider:

- ⭐ Starring the repository
- 🍴 Forking for your own team
- 📢 Sharing with other hackathon teams
- 💖 Sponsoring the project

---

**Built with ❤️ by Tomhackers**

*Last Updated: January 2026*
