# 🚗 RentalCar

A modern frontend web application for a car rental service. Users can explore available vehicles, search and filter the catalog, view detailed information about each car, and submit a rental request.

**Live demo:** [RentalCar](https://rental-car-two-iota.vercel.app/)

## ✨ Features

- **Home page** — introduces the rental service and provides quick access to the car catalog.
- **Car catalog** — displays available vehicles with filtering options by brand, rental price, and mileage.
- **Car details** — provides complete information about a selected vehicle, including its image, price, specifications, features, and rental conditions.
- **Rental form** — allows users to submit a booking request for the selected car.
- **Notifications** — displays success and error messages after form submission.
- **Loading and error states** — provides feedback while data is loading and handles unavailable or missing content.
- **Responsive design** — the interface is adapted for mobile, tablet, and desktop screens.

## 🛠️ Tech Stack

- **Next.js** — React framework with App Router
- **TypeScript** — static typing and safer development
- **TanStack Query** — server-state management, caching, and data fetching
- **Axios** — communication with the backend API
- **CSS Modules** — component-based styling
- **React Icons** — interface icons
- **React Hot Toast** — notifications
- **Vercel** — deployment

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js 20+
- npm

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Olena3333/rental-car.git
cd rental-car
npm install
```

### Running locally

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

### Available scripts

```bash
npm run dev      # start development server
npm run build    # create production build
npm run start    # run production build
npm run lint     # check code with ESLint
```

## 📁 Project Structure

```text
app/                  # application routes and pages
components/           # reusable UI components
lib/                  # API and application utilities
public/               # static assets
types/                # TypeScript types
```

## 🔌 API

The application communicates with the **Rental Car API** to retrieve vehicle data and send booking requests.

The API provides information about available cars, their specifications, prices, and rental options.

## 📱 Responsive Design

The application is designed to work smoothly across different screen sizes, from mobile devices to large desktop screens.

## 👩‍💻 Author

**Olena Solonikova**

- GitHub: [Olena3333](https://github.com/Olena3333)
