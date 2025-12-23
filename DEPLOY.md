# Deploy to GitHub Pages - Step by Step Guide

Follow these steps to deploy your website to GitHub Pages so Lana can access it!

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. **Repository name**: Choose something like `lana-date-request` or `something-special`
3. **Visibility**: Choose **Public** (required for free GitHub Pages) or **Private** (if you have GitHub Pro)
4. **DO NOT** check "Initialize this repository with a README" (we already have files)
5. Click **"Create repository"**

## Step 2: Initialize Git in Your Project

Open your terminal/PowerShell in the project folder and run:

```bash
# Navigate to your project folder
cd "C:\Users\cauba\Documents\selwyn dev\2025\lana"

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - date request website"
```

## Step 3: Connect to GitHub and Push

After creating the repository on GitHub, you'll see instructions. Run these commands:

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push your code
git push -u origin main
```

**Example:**
If your username is `selwyn` and repo is `lana-date-request`:
```bash
git remote add origin https://github.com/selwyn/lana-date-request.git
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

## Step 5: Access Your Website

Your website will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Example:**
```
https://selwyn.github.io/lana-date-request/
```

It may take a few minutes to go live (usually 1-2 minutes).

## Step 6: Share with Lana!

Once it's live, just share the URL with Lana. When she clicks "Yes" or "No", you'll get an email notification (since you already set up Formspree)!

---

## Troubleshooting

### If you get authentication errors:
- Use GitHub Desktop (easier for beginners)
- Or set up a Personal Access Token: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

### If Pages doesn't show up:
- Make sure your repository is **Public** (or you have GitHub Pro)
- Wait a few minutes and refresh

### If the site shows 404:
- Make sure `index.html` is in the root folder
- Check that you selected the correct branch in Pages settings

---

## Quick Commands Reference

```bash
# Check status
git status

# Add files
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push

# View your site
# https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

Good luck! 🍀

