# NOVA Admin Panel

A responsive admin panel built with React and TypeScript, featuring product and user management, authentication, form validation, and multi-language support.

## Repository

[GitHub Repository](https://github.com/pourghasemi/NovaPanel)

## Live Demo

[View Live Demo](https://pourghasemi.github.io/NovaPanel/)

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version)
- npm

## Installation

Clone the repository:

```bash
git clone https://github.com/pourghasemi/NovaPanel.git
```

Navigate to the project directory:

```bash
cd NovaPanel
```

Install dependencies:

```bash
npm ci
```

## Environment Variables

Create a `.env.local` file in the project root and add:

```env
VITE_API_BASE_URL=https://fakestoreapi.com
```

## Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Production Build

Create a production build:

```bash
npm run build
```

## Preview

Preview the production build locally:

```bash
npm run preview
```

## Tech Stack

- **React** – UI library
- **TypeScript** – Type safety
- **Vite** – Build tool and development server
- **React Router** – Client-side routing
- **Styled Components** – Component-based styling
- **Formik** – Form state management
- **Yup** – Form validation
- **i18next** – Internationalization
- **React Icons** – Icon library
- **Fake Store API** – Product and user data