# How to Receive Lana's Answer via Email

This website will send you an email notification when Lana clicks either "Yes" or "No".

## Setup Instructions

### Option 1: Formspree (Recommended - Free & Easy)

1. **Sign up for Formspree** (it's free!)
   - Go to https://formspree.io/
   - Sign up with your email
   - Verify your email address

2. **Create a new form**
   - Click "New Form"
   - Give it a name (e.g., "Lana's Response")
   - Copy the form endpoint URL (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

3. **Update the code**
   - Open `script.js`
   - Find the line: `const formspreeEndpoint = 'YOUR_FORMSPREE_ENDPOINT';`
   - Replace `'YOUR_FORMSPREE_ENDPOINT'` with your actual Formspree URL
   - Example: `const formspreeEndpoint = 'https://formspree.io/f/xpzgkqyz';`

4. **Test it!**
   - Deploy to GitHub Pages
   - Click the buttons to test
   - Check your email for the notification

### Option 2: EmailJS (Alternative)

If you prefer EmailJS:

1. Sign up at https://www.emailjs.com/
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Public Key and Service ID
5. Update the code to use EmailJS instead

### Option 3: Webhook.site (For Testing)

For quick testing without signing up:
1. Go to https://webhook.site/
2. Copy your unique webhook URL
3. Replace the endpoint in `script.js`
4. Check the webhook.site page for responses

## Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to Settings > Pages
3. Select your branch and folder
4. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## What You'll Receive

When Lana clicks a button, you'll get an email with:
- Her answer (Yes or No)
- Timestamp
- Browser information

---

**Note:** Make sure to replace `YOUR_FORMSPREE_ENDPOINT` before deploying, or the notifications won't work!

