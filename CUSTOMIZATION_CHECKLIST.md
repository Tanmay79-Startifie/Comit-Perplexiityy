# 📝 Customization Checklist

Before publishing your Comet Browser landing page, complete these steps:

## ✅ Essential Updates (Required)

### 1. Referral Link
- [ ] Open `src/components/Hero.jsx`
- [ ] Find line with `href="YOUR_REFERRAL_LINK_HERE"`
- [ ] Replace with your actual Comet Browser referral link
- [ ] Test the link to ensure it works

### 2. Google Form Embed
- [ ] Create your Google Form for collecting user information
- [ ] Get the embed code (Send → Embed icon `<>`)
- [ ] Open `src/components/FormSection.jsx`
- [ ] Replace the placeholder section with your iframe code
- [ ] Adjust height if needed (default: 800px)

### 3. Contact Email
- [ ] Open `src/components/Footer.jsx`
- [ ] Replace `YOUR_EMAIL@example.com` with your email (appears twice)
- [ ] Open `src/components/FAQ.jsx`
- [ ] Replace `YOUR_EMAIL@example.com` in the contact link

### 4. Social Media Links
- [ ] Open `src/components/Footer.jsx`
- [ ] Update Instagram URL and handle
- [ ] Update Twitter URL and handle
- [ ] Remove any social links you don't want to display

## 🎨 Optional Customizations

### 5. Freebie Items
- [ ] Open `src/components/Freebies.jsx`
- [ ] Modify the `freebies` array to match your actual offerings
- [ ] Update values, descriptions, and icons as needed

### 6. FAQ Content
- [ ] Open `src/components/FAQ.jsx`
- [ ] Review and customize FAQ questions/answers
- [ ] Add or remove questions based on your needs

### 7. Brand Colors
- [ ] Open `tailwind.config.js`
- [ ] Change primary color if desired (default: #1e3a8a - deep blue)
- [ ] Update gradient colors in components if needed

### 8. Meta Tags & SEO
- [ ] Open `index.html`
- [ ] Update the `<title>` tag
- [ ] Update meta description
- [ ] Add favicon (replace `/vite.svg` reference)

### 9. Footer Links
- [ ] Open `src/components/Footer.jsx`
- [ ] Add actual Privacy Policy page link
- [ ] Add actual Terms & Conditions page link
- [ ] Or remove these links if not needed

## 🧪 Testing Checklist

Before deployment:
- [ ] Run `npm install` to install dependencies
- [ ] Run `npm run dev` to test locally
- [ ] Test all buttons and links
- [ ] Test form submission
- [ ] Check mobile responsiveness (use browser dev tools)
- [ ] Verify smooth scrolling works
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Check all animations load properly

## 🚀 Deployment Checklist

- [ ] Run `npm run build` to create production build
- [ ] Test the production build with `npm run preview`
- [ ] Choose hosting platform (Vercel, Netlify, GitHub Pages)
- [ ] Deploy the `dist` folder
- [ ] Test the live site
- [ ] Share the URL!

## 📋 Quick Find & Replace

Use your editor's find & replace feature for these:

| Find | Replace With |
|------|--------------|
| `YOUR_REFERRAL_LINK_HERE` | Your actual referral link |
| `YOUR_EMAIL@example.com` | Your contact email |
| `YOUR_HANDLE` | Your social media handle |
| `your_instagram` | Your Instagram username |
| `your_twitter` | Your Twitter username |

## 💡 Pro Tips

1. **Test Referral Link**: Make sure your referral link is valid before publishing
2. **Form Testing**: Submit a test entry to your Google Form to verify it works
3. **Mobile First**: Most users will view on mobile - test thoroughly
4. **Loading Speed**: Keep images optimized for fast loading
5. **Analytics**: Consider adding Google Analytics to track visitors
6. **Backup**: Keep a copy of your customized files

---

**Need Help?** Check the README.md file for detailed instructions.
