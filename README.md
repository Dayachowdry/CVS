# Mobile CV Portfolio

A responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Modern UI with smooth animations
- Responsive design for all devices
- Dark mode support
- Interactive sections for showcasing skills and experience

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI Components

## Deployment on Netlify

This project is configured for easy deployment on Netlify.

### Automatic Deployment

1. Fork or clone this repository to your GitHub account
2. Log in to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Select your GitHub repository
5. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy site"

Netlify will automatically detect the `netlify.toml` configuration file and use the Netlify Next.js plugin for optimal deployment.

### Manual Deployment

If you prefer to deploy manually:

1. Build the project locally:
   ```
   npm run build
   ```

2. Deploy the `out` directory to Netlify using the Netlify CLI:
   ```
   npx netlify deploy --prod --dir=out
   ```

## Local Development

1. Clone the repository:
   ```
   git clone https://github.com/Dayachowdry/CVS.git
   cd CVS
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app` - Next.js app router pages
- `/components` - Reusable UI components
  - `/sections` - Main page sections
  - `/ui` - UI components
- `/lib` - Utility functions
- `/public` - Static assets
