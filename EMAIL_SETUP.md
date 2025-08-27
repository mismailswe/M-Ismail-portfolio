# Email Setup Guide for Contact Form

## Current Implementation

The contact form is currently set up to use a `mailto:` link, which opens the user's default email client with a pre-filled message. This works immediately without any additional setup.

## Setting up EmailJS for Direct Email Sending

For a more professional solution that sends emails directly from the website without opening the user's email client, you can set up EmailJS:

### Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

### Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

### Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

```html
Subject: Contact from {{from_name}} Name: {{from_name}} Email: {{from_email}}
Message: {{message}}
```

4. Note down your **Template ID**

### Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### Step 5: Update the Contact Component

1. Open `src/containers/contact/Contact.js`
2. Replace the placeholder values with your actual credentials:

```javascript
const serviceId = "YOUR_ACTUAL_SERVICE_ID";
const templateId = "YOUR_ACTUAL_TEMPLATE_ID";
const publicKey = "YOUR_ACTUAL_PUBLIC_KEY";
```

3. Uncomment the EmailJS implementation code (remove the `/*` and `*/` comments)
4. Comment out or remove the mailto implementation

### Step 6: Test the Form

1. Start your development server: `npm start`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email (m.ismail.swe@gmail.com) for the received message

## Alternative Email Services

If you prefer not to use EmailJS, you can also consider:

- **Formspree**: Simple form handling service
- **Netlify Forms**: If hosting on Netlify
- **Custom Backend**: Create your own email API endpoint

## Security Notes

- Never expose sensitive API keys in client-side code for production
- Consider using environment variables for API keys
- Implement rate limiting to prevent spam
- Add CAPTCHA for additional security

## Environment Variables (Recommended)

For better security, use environment variables:

1. Create a `.env` file in your project root:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update the Contact component to use these variables:

```javascript
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
```

3. Add `.env` to your `.gitignore` file to keep your keys secure
