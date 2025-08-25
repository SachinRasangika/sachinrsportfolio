# 📧 EmailJS Setup Guide

To make your contact form send emails directly to your inbox, follow these steps:

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://emailjs.com) and create a free account
2. Verify your email address

## Step 2: Add Email Service
1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup wizard to connect your Gmail account
5. Note down your **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Portfolio Contact: {{subject}} - {{from_name}}

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Save the template and note down your **Template ID** (e.g., "template_xyz456")

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., "abc123xyz")

## Step 5: Configure Environment Variables
I've already set up placeholder environment variables for you. You need to update them with your actual EmailJS values:

1. **Service ID**: Update with your actual service ID
2. **Template ID**: Update with your actual template ID
3. **Public Key**: Update with your actual public key

**Contact your developer or use the platform's environment variable settings to update these values.**

## Step 6: The Setup is Already Done!
The environment variables are already configured and the development server will automatically use them.

## ✅ Test Your Contact Form
1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox (sachinrasangika@gmail.com)
4. You should receive the contact form submission!

## 🔧 Troubleshooting
- Make sure all environment variables are set correctly
- Check the browser console for any error messages
- Verify your EmailJS service is active
- Ensure your email template variables match: `from_name`, `from_email`, `subject`, `message`

---
**Note**: EmailJS free plan includes 200 emails per month, which is perfect for a portfolio contact form.
