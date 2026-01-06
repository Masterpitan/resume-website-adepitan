# Resume Website - Adepitan Adetunji

A modern, responsive portfolio website showcasing my professional experience, projects, and skills as a DevOps Engineer and AWS Solutions Architect.

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: AWS S3 Static Website Hosting
- **CI/CD**: GitHub Actions
- **Infrastructure**: Terraform

## 📋 Features

- Responsive design optimized for all devices
- Interactive project showcase with GitHub integration
- Professional experience timeline
- Skills and certifications display
- Contact form integration
- Smooth animations and transitions

## 🏗️ Infrastructure

This website is deployed using:
- **AWS S3** for static website hosting
- **Terraform** for infrastructure as code
- **GitHub Actions** for automated deployment

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Certifications.tsx
│   └── Contact.tsx
├── App.tsx
└── main.tsx

terraformIAC/
├── main.tf
├── variables.tf
└── outputs.tf
```

## 🔧 Deployment

The website automatically deploys to AWS S3 when changes are pushed to the main branch via GitHub Actions.

---

**Built with ❤️ by Adepitan Adetunji**
