# Comet Browser Referral Landing Page

A modern, professional single-page website for promoting Comet Browser (by Perplexity) through referral links with exclusive freebies.

## 🎨 Features

- **Modern Design**: Clean white/blue/gray palette with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Scrolling**: Parallax effects and fade-in animations
- **Professional UI**: Built with React, TailwindCSS, and Lucide icons
- **Easy Customization**: Simple placeholders for your links and content

## 📋 Sections

1. **Hero Section** - Eye-catching headline with CTA buttons
2. **How It Works** - 3-step process explanation
3. **Freebies Showcase** - Display of all rewards
4. **Disclaimer** - Transparency notice
5. **Google Form Embed** - Claim freebies form
6. **FAQ** - Common questions answered
7. **Footer** - Contact info and links

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Open terminal in the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## ✏️ Customization Guide

### 1. Update Referral Link

Open `src/components/Hero.jsx` and replace:
```jsx
href="YOUR_REFERRAL_LINK_HERE"
```

### 2. Embed Google Form

Open `src/components/FormSection.jsx` and replace the placeholder with your Google Form iframe:
```jsx
<iframe 
  src="YOUR_GOOGLE_FORM_URL" 
  width="100%" 
  height="800" 
  frameBorder="0" 
  marginHeight="0" 
  marginWidth="0"
  className="rounded-lg"
>
  Loading…
</iframe>
```

### 3. Update Contact Information

Open `src/components/Footer.jsx` and update:
- Email address
- Instagram handle
- Twitter handle

Also update in `src/components/FAQ.jsx` (contact email link)

### 4. Customize Colors (Optional)

Edit `tailwind.config.js` to change the primary color:
```js
colors: {
  primary: {
    DEFAULT: '#1e3a8a', // Change this hex code
    light: '#3b82f6',
    dark: '#1e40af',
  },
}
```

## 📱 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify
1. Run `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/comet-web",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🎯 What to Replace

Before publishing, search and replace these placeholders:

- `YOUR_REFERRAL_LINK_HERE` - Your Comet Browser referral link
- `YOUR_GOOGLE_FORM_URL` - Your Google Form embed URL
- `YOUR_EMAIL@example.com` - Your contact email
- `YOUR_HANDLE` - Your social media handles

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Lucide React** - Icons
- **PostCSS** - CSS processing

## 📄 License

This project is created for personal promotional use. Feel free to modify and use as needed.

## 💡 Tips

- Test the referral link before publishing
- Keep the disclaimer section for transparency
- Monitor form submissions regularly
- Update stock availability as needed
- Consider adding Google Analytics for tracking

## 🤝 Support

For issues or questions, contact Tanmay at your.email@example.com

---

**Made with ❤️ for Comet Browser promotion**
