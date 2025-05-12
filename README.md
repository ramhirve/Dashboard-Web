```# Dashboard-Web

A modern, responsive web dashboard built with React, Vite, and Tailwind CSS.

## Features

- **Home Page**: Welcome screen with navigation to all main sections.
- **Users Page**: 
  - Paginated user table (10 users per page)
  - Search functionality to filter users by name
  - Responsive, scrollable table for mobile devices
- **Reports Page**:
  - Dynamic summary cards showing total users, active users, and new signups
  - Visually appealing and responsive card layout
- **Dashboard Page**:
  - User growth line chart (visualizes user growth over time)
  - Quick navigation to Users and Reports
  - Table of the 5 most recent users
- **Sidebar Navigation**: Persistent sidebar for easy navigation between sections
- **Dark Mode**: Toggle between light and dark themes
- **Fully Responsive**: Works great on desktop, tablet, and mobile

## Tech Stack
- React 18
- Vite
- Tailwind CSS
- Axios (for API requests)
- React Router DOM (for navigation)
- Recharts (for charts)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

## API
- User data is fetched from [https://dummyjson.com/users](https://dummyjson.com/users)

## Folder Structure
- `src/components/` — All React components (Sidebar, Navbar, UsersTable, SummaryCards, etc.)
- `src/` — Main app entry and routing

---

Feel free to customize and extend this dashboard for your own needs!```