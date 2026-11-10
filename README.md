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

## Architecture

The application is organized by responsibility:

- `src/pages/` contains the routed dashboard, users, and products pages.
- `src/components/` contains reusable page layouts, forms, and controls.
- `src/services/` contains the Axios client and API functions for users and products.
- `src/store/` contains the Redux Toolkit store, typed hooks, and feature slices.
- `src/providers/` contains app-wide authentication, language, and theme providers.
- `src/routes/` defines application routes and protected-route behavior.

Pages dispatch Redux thunks for remote data. The service layer makes the HTTP
requests, and the slices store the results and request status for the UI.

## State Management

Redux Toolkit manages the shared user, product, and authentication state. The
store is registered with React Redux in `src/main.tsx`. Components use the
typed `useAppDispatch` and `useAppSelector` hooks to dispatch actions and read
state.

Users and products are fetched with `createAsyncThunk` and stored in their
respective slices. Each slice tracks loading, errors, and whether its initial
fetch has succeeded. After a successful fetch, subsequent visits to the
dashboard, users, or products page reuse the data already in the Redux store
instead of requesting the same list again. A failed request can be retried.
This cache is in memory only; a full page reload creates a fresh store and
fetches the data again.

## FakeStoreAPI POST Behavior

FakeStoreAPI accepts product and user `POST` requests and returns a simulated
created record, but it does not permanently save the record on its server.
Consequently, a later `GET` request (or a full page reload) may not include a
record that was just created.

## Temporary Solution: Adding to the Local List

After a successful `POST`, the corresponding Redux thunk adds the returned
record to the beginning of the users or products list in the local Redux
store. This makes the new item appear immediately in the current app session
even though FakeStoreAPI does not persist it. The item is temporary: it will
be lost on a reload or when the list is fetched again from FakeStoreAPI.