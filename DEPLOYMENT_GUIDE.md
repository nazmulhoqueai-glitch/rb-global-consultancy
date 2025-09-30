# 🚀 Netlify Deployment Guide - R&B Global Consultancy

Complete step-by-step guide to deploy your Next.js website to Netlify.

---

## ✅ Prerequisites

Before starting, make sure you have:
- [x] Git installed on your computer
- [x] GitHub account (free)
- [x] Your project code ready
- [ ] Netlify account (we'll create this)

---

## 📋 Step-by-Step Deployment

### **Step 1: Initialize Git Repository (If Not Done)**

Open your terminal in the project folder (D:\R&B) and run:

```bash
# Check if git is already initialized
git status

# If not initialized, run:
git init
git add .
git commit -m "Initial commit - Ready for deployment"
```

---

### **Step 2: Create GitHub Repository**

1. **Go to GitHub:**
   - Visit: https://github.com
   - Click **"Sign in"** (or **"Sign up"** if you don't have an account)

2. **Create New Repository:**
   - Click the **"+"** icon (top right)
   - Select **"New repository"**

3. **Repository Settings:**
   - **Repository name:** `rb-global-consultancy` (or any name you prefer)
   - **Description:** "R&B Global Consultancy - Immigration & Visa Consulting Website"
   - **Visibility:** Choose **Public** or **Private**
   - **DO NOT** check "Initialize with README" (we already have code)
   - Click **"Create repository"**

4. **Push Your Code to GitHub:**
   
   Copy the commands shown on GitHub and run in your terminal:

   ```bash
   # Add GitHub as remote
   git remote add origin https://github.com/YOUR_USERNAME/rb-global-consultancy.git
   
   # Push your code
   git branch -M main
   git push -u origin main
   ```

   **Note:** Replace `YOUR_USERNAME` with your actual GitHub username

---

### **Step 3: Sign Up on Netlify**

1. **Go to Netlify:**
   - Visit: https://www.netlify.com
   - Click **"Sign up"**

2. **Sign up with GitHub:**
   - Click **"Sign up with GitHub"** (easiest option)
   - Authorize Netlify to access your GitHub account
   - This connects your GitHub repositories to Netlify

---

### **Step 4: Deploy Your Site**

1. **Import Project:**
   - After signing up, you'll see the dashboard
   - Click **"Add new site"** → **"Import an existing project"**

2. **Connect to Git Provider:**
   - Click **"Deploy with GitHub"**
   - Authorize Netlify (if prompted)

3. **Select Repository:**
   - Find and click **"rb-global-consultancy"** (or your repo name)
   - Click **"Select"**

4. **Configure Build Settings:**
   
   Netlify should auto-detect Next.js. Verify these settings:
   
   ```
   Base directory: (leave blank)
   Build command: npm run build
   Publish directory: .next
   ```

   **Advanced settings (Optional):**
   - Click **"Show advanced"**
   - Add environment variables if needed (we don't need any yet)

5. **Deploy:**
   - Click **"Deploy site"**
   - Wait 2-5 minutes for deployment
   - You'll see build logs in real-time

6. **Success! 🎉**
   - Once deployed, you'll see: **"Site is live"**
   - Your site will be at: `random-name-123456.netlify.app`
   - Click the link to see your live website!

---

### **Step 5: Configure Site Settings (Optional but Recommended)**

1. **Change Site Name:**
   - Go to **Site settings** → **General** → **Site details**
   - Click **"Change site name"**
   - Enter: `rb-global-consultancy` (or preferred name)
   - Your URL becomes: `rb-global-consultancy.netlify.app`

2. **Set Build & Deploy Settings:**
   - Go to **Site settings** → **Build & deploy**
   - Verify build settings are correct

---

### **Step 6: Add Custom Domain (YOUR DOMAIN)**

#### **Option A: Use Netlify DNS (Recommended - Easiest)**

1. **Add Domain:**
   - Go to **Site settings** → **Domain management**
   - Click **"Add custom domain"**
   - Enter your domain: `yourdomain.com` (without www)
   - Click **"Verify"**

2. **Add www Subdomain:**
   - Click **"Add domain alias"**
   - Enter: `www.yourdomain.com`
   - Click **"Add domain"**

3. **Configure Netlify DNS:**
   - Netlify will show you nameservers like:
     ```
     dns1.p01.nsone.net
     dns2.p01.nsone.net
     dns3.p01.nsone.net
     dns4.p01.nsone.net
     ```
   - **Note these down!**

4. **Update Nameservers at Your Domain Registrar:**

   **If your domain is at Hostinger:**
   - Log in to Hostinger
   - Go to **Domains** → Select your domain
   - Click **"Nameservers"**
   - Select **"Custom nameservers"**
   - Enter Netlify's nameservers (from step 3)
   - Click **"Save"**

   **Wait 24-48 hours for DNS propagation**

5. **Enable HTTPS:**
   - Once DNS is configured, go to **Domain settings**
   - Click **"Verify DNS configuration"**
   - Netlify will automatically provision SSL certificate
   - Your site will be HTTPS (🔒 secure)

#### **Option B: Use External DNS (Keep Your Registrar's Nameservers)**

1. **Add Domain in Netlify:**
   - Same as Option A, step 1

2. **Get DNS Records:**
   - Netlify will show you DNS records to add:
     ```
     A Record: @ → 75.2.60.5
     CNAME Record: www → your-site-name.netlify.app
     ```

3. **Add Records at Your Domain Registrar:**
   
   **At Hostinger (or your registrar):**
   - Go to **DNS/Zone Editor**
   - Add **A Record:**
     - Type: `A`
     - Name: `@`
     - Value: `75.2.60.5`
     - TTL: `3600`
   
   - Add **CNAME Record:**
     - Type: `CNAME`
     - Name: `www`
     - Value: `your-site-name.netlify.app`
     - TTL: `3600`
   
   - Click **"Save"**

4. **Wait for Propagation:**
   - DNS changes take 1-24 hours
   - Check status at: https://www.whatsmydns.net

5. **Enable HTTPS:**
   - Once DNS is verified, Netlify auto-provisions SSL

---

### **Step 7: Test Your Website**

1. **Check Netlify URL:**
   - Visit: `your-site-name.netlify.app`
   - Verify everything works

2. **Check Custom Domain (after DNS propagation):**
   - Visit: `www.yourdomain.com`
   - Visit: `yourdomain.com`
   - Both should work

3. **Test Features:**
   - ✅ Navigation works
   - ✅ All pages load
   - ✅ WhatsApp buttons work
   - ✅ Images load properly
   - ✅ Mobile responsive
   - ✅ Forms display correctly

---

## 🔄 Automatic Deployments

**Great News!** Every time you push changes to GitHub, Netlify automatically rebuilds and redeploys your site!

```bash
# Make changes to your code
# Then commit and push:
git add .
git commit -m "Updated homepage"
git push

# Netlify automatically detects the change and redeploys
# Wait 2-3 minutes, your site is updated! 🎉
```

---

## 📊 Monitor Your Site

### **Netlify Dashboard:**
- **Analytics:** See visitor stats
- **Deploy log:** Check build history
- **Functions:** Add serverless functions later
- **Forms:** Netlify can handle your contact form!

---

## ⚠️ Troubleshooting

### **Build Failed?**

1. Check build logs in Netlify dashboard
2. Common issues:
   - Missing dependencies: Run `npm install` locally
   - TypeScript errors: Fix linting errors
   - Image optimization: Already handled in `next.config.js`

### **Domain Not Working?**

1. **Check DNS propagation:**
   - Visit: https://www.whatsmydns.net
   - Enter your domain
   - Wait if still propagating

2. **Verify nameservers:**
   - Make sure you entered Netlify nameservers correctly
   - Check at your domain registrar

3. **SSL not working:**
   - Wait 24 hours after DNS is configured
   - Netlify auto-provisions SSL (Let's Encrypt)

### **Images Not Loading?**

- Make sure all images are in `/public/images/` folder
- Check image paths are correct
- Netlify serves the public folder automatically

---

## 🎯 Post-Deployment Checklist

After successful deployment:

- [ ] Site is live at Netlify URL
- [ ] Custom domain is configured (if you have one)
- [ ] HTTPS is enabled (green padlock 🔒)
- [ ] All pages work correctly
- [ ] WhatsApp buttons work
- [ ] Contact form displays (backend API will be added later)
- [ ] Mobile version works
- [ ] Share the URL with your team! 🎉

---

## 💡 Next Steps

### **1. Add Contact Form Backend:**
- Use Netlify Forms (easiest)
- Or integrate with external service (EmailJS, Formspree)

### **2. Add Analytics:**
- Google Analytics
- Netlify Analytics (built-in)

### **3. Performance Optimization:**
- Already optimized with Next.js!
- Netlify CDN provides fast global delivery

### **4. SEO:**
- Add metadata to pages
- Submit sitemap to Google Search Console

---

## 📞 Need Help?

- **Netlify Docs:** https://docs.netlify.com
- **Netlify Support:** https://answers.netlify.com
- **Next.js Docs:** https://nextjs.org/docs

---

## 🎉 Congratulations!

Your R&B Global Consultancy website is now live on the internet! 🚀

Share it with the world:
- **Netlify URL:** `your-site-name.netlify.app`
- **Custom Domain:** `www.yourdomain.com` (once DNS is configured)

---

**Last Updated:** September 30, 2025
**Status:** Ready for Deployment ✅
