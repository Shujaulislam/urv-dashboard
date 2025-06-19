This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# URV Dashboard - Implementation Guide

## Project Structure

The project follows a modular structure with the following organization:

```
src/
├── app/                    # Next.js app router pages
│   ├── dashboard/          # Dashboard route
│   ├── members/            # Members management route
│   └── settings/           # Settings route
├── components/             # React components
│   ├── dashboard/          # Dashboard-specific components
│   ├── layout/            # Layout components (Navbar, Sidebar)
│   ├── settings/          # Settings-specific components
│   └── ui/                # Reusable UI components
└── context/               # React context providers
```

## Features Implemented

### Dashboard
- Overview statistics with trend indicators
- Activity chart with weekly data
- Responsive grid layout
- Dark mode support

### Members Management
- Searchable and filterable member table
- Role-based filtering
- Pagination
- Sortable columns

### Settings
- Theme toggle (light/dark)
- Notification preferences
- Responsive form layout

### Common Features
- Loading states for all pages // optional will add
- Error boundaries // optional will add
- Responsive design
- Dark mode support
- Accessibility considerations

## Setup Instructions

Download or copy this project and run the following command:

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Implementation Notes

### Styling
- Uses Tailwind CSS for styling
- Consistent spacing and color schemes
- Responsive design patterns
- Dark mode support with system preference detection

### Components
- Modular and reusable components
- Props validation with TypeScript
- Loading states and error boundaries
- Accessibility features (ARIA labels, semantic HTML)

### State Management
- React hooks for local state
- Context API for theme management
- URL-based navigation state


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
