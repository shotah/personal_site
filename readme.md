# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Vite. Deployed automatically to Cloudflare Pages via GitHub Actions.

## 🚀 Features

- **React SPA** - Single Page Application built with React 19
- **TypeScript** - Type-safe code for better development experience
- **Vite** - Lightning fast development and optimized production builds
- **Bootstrap 5** - Responsive design with modern UI components
- **EmailJS Integration** - Contact form with email notifications
- **Dark/Light Theme** - Toggle between themes with localStorage persistence
- **Cloudflare Pages** - Automatic deployment via GitHub Actions
- **ESLint** - Code quality and consistency checks

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Bootstrap 5, Custom CSS
- **Email**: EmailJS
- **Deployment**: Cloudflare Pages
- **CI/CD**: GitHub Actions

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/shotah/personal_site.git
cd personal_site
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Configure your EmailJS credentials in `.env`:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Add your credentials to `.env`

## 🏃 Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🔨 Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🧹 Linting

Run ESLint:
```bash
npm run lint
```

Fix linting errors:
```bash
npm run fix
```

## 🚢 Deployment

This project automatically deploys to Cloudflare Pages when you push to the `main` branch.

### Setup GitHub Secrets

Add the following secrets to your GitHub repository:

1. **EmailJS Credentials:**
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

2. **Cloudflare Credentials:**
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`

### Manual Deployment

You can also deploy manually using the Cloudflare Pages dashboard by uploading the `dist` folder.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Christopher Blodgett**
- LinkedIn: [christopherblodgett](https://linkedin.com/in/christopherblodgett)
- GitHub: [@shotah](https://github.com/shotah)
- Website: [chris.bldhosting.com](https://chris.bldhosting.com)

## 🙏 Acknowledgments

- Bootstrap for the UI components
- EmailJS for the contact form functionality
- Cloudflare Pages for hosting
- React Icons for the icon library
