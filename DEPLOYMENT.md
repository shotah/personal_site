# Deployment Guide

## Cloudflare Pages Deployment

This project is configured to automatically deploy to Cloudflare Pages via GitHub Actions.

### Prerequisites

1. A Cloudflare account
2. A GitHub repository with this code
3. EmailJS account for contact form functionality

### Setup Steps

#### 1. Configure Cloudflare

1. Log in to your Cloudflare dashboard
2. Go to "Workers & Pages" → "Create application" → "Pages"
3. Note your Account ID (found in the URL or account settings)
4. Create an API token:
   - Go to "My Profile" → "API Tokens" → "Create Token"
   - Use the "Edit Cloudflare Workers" template
   - Grant "Account.Cloudflare Pages" permissions
   - Create the token and save it securely

#### 2. Configure EmailJS

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create a new email template with the following variables:
   - `from_name` - Sender's name
   - `from_email` - Sender's email
   - `message` - Message content
4. Note your:
   - Service ID
   - Template ID
   - Public Key

#### 3. Configure GitHub Secrets

Add the following secrets to your GitHub repository (Settings → Secrets and variables → Actions):

**Cloudflare Credentials:**
- `CLOUDFLARE_API_TOKEN` - Your Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID

**EmailJS Credentials:**
- `VITE_EMAILJS_SERVICE_ID` - Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS public key

#### 4. Update GitHub Actions Workflow

The workflow is already configured in `.github/workflows/deploy.yml`. You only need to update the project name:

```yaml
projectName: personal-site  # Change this to your Cloudflare Pages project name
```

#### 5. Deploy

Push your code to the `main` branch:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

The GitHub Action will automatically:
1. Install dependencies
2. Run ESLint
3. Build the project
4. Deploy to Cloudflare Pages

### Local Development with Environment Variables

For local development, create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Note:** Never commit the `.env` file to version control!

### Manual Deployment

If you prefer to deploy manually:

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to Cloudflare Pages:
   - Go to your Cloudflare Pages project
   - Click "Create deployment"
   - Upload the `dist` folder

### Troubleshooting

**Build fails in GitHub Actions:**
- Check that all secrets are correctly set
- Verify the project name in the workflow matches your Cloudflare Pages project
- Check the Actions logs for specific errors

**Contact form not working:**
- Verify EmailJS credentials are correct
- Check browser console for errors
- Ensure EmailJS template has the correct variable names

**Deployment succeeds but site doesn't work:**
- Check Cloudflare Pages logs
- Verify build output in the `dist` folder
- Check browser console for errors

### Custom Domain

To use a custom domain with Cloudflare Pages:

1. Go to your Pages project in Cloudflare
2. Click "Custom domains"
3. Add your domain
4. Follow the instructions to update your DNS records

## Alternative Deployment Options

### Netlify

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Build: `npm run build`
3. Deploy: `netlify deploy --prod --dir=dist`

### Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Update `vite.config.ts` with base path
2. Build: `npm run build`
3. Deploy the `dist` folder to `gh-pages` branch
