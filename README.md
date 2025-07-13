# My Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, and includes a course registration form.

## Features

- 📱 Fully responsive design
- 🌓 Dark mode toggle
- ✨ Smooth animations with Framer Motion
- 📝 Interactive course registration form
- 📬 Contact form
- 🧩 Modular component architecture
- 🔄 Type-safe with TypeScript

## Pages

- **Home**: Introduction with hero section and smooth scrolling
- **About**: Bio, tech stack, and soft skills
- **Projects**: Showcase of past work with project details
- **Register**: Course registration form with local storage functionality
- **Contact**: Form for visitors to send messages

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy this Next.js app is by using [Vercel](https://vercel.com/), the platform created by the creators of Next.js.

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Netlify

You can also deploy to Netlify:

1. Build your app:
   ```bash
   npm run build
   ```

2. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

3. Deploy:
   ```bash
   netlify deploy
   ```

## Project Structure

```
portfolio/
├── public/          # Static assets
├── src/
│   ├── app/         # Next.js app router pages
│   ├── components/  # Reusable components
│   ├── lib/         # Utility functions and custom hooks
│   └── assets/      # Other assets (SVGs, etc.)
├── .eslintrc.json   # ESLint configuration
├── next.config.js   # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json    # TypeScript configuration
```

## Customization

- Update personal information in each page component
- Modify the theme colors in `tailwind.config.js`
- Replace placeholder images in the `public` directory with your own
- Add additional pages as needed

## Future Enhancements

- Blog section
- Portfolio filtering by category
- Animation improvements
- Backend integration for contact form
- Integration with a CMS for easier content updates

## License

This project is open source and available under the [MIT License].
