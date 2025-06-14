# Navite Frontend

Navite is a full-stack AI-powered travel planner that leverages the latest in artificial intelligence and modern web technologies to deliver a seamless, intuitive, and delightful travel planning experience. This repository contains the frontend application, built with React, TypeScript, and Tailwind CSS, which interfaces with a robust FastAPI backend powered by Google Gemini, SerpAPI, and MongoDB.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Integration](#api-integration)
- [Subscription & Paywall](#subscription--paywall)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **AI-Powered Travel Planning:**
  - Intelligent destination research, flight search, hotel and restaurant recommendations, and itinerary generation using LLMs and web search.
- **Modern, Responsive UI:**
  - Built with React, TypeScript, and Tailwind CSS for a beautiful, accessible, and mobile-friendly experience.
- **User Authentication & Subscription:**
  - Clerk authentication and Stripe-powered subscription/paywall for premium features.
- **Personalized History:**
  - View and manage your past searches, research, and itineraries.
- **Rate Limiting & Usage Tracking:**
  - Free users have limited POST API calls per month; paid users enjoy unlimited access.

---

## Tech Stack
- **Frontend:**
  - React 18 + TypeScript
  - Tailwind CSS (Brutalist design system)
  - Vite (build tool)
- **Backend:**
  - FastAPI (Python 3.10+)
  - Google Gemini (LLM-powered research & planning)
  - SerpAPI (web search)
  - MongoDB (data storage & caching)
  - Stripe (payments)
  - Clerk (authentication)

---

## Project Structure
```
navite-frontend/
├── public/
├── src/
│   ├── components/           # UI components (Navbar, Footer, etc.)
│   ├── contexts/             # React context providers
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   ├── pages/                # Route-based pages (Home, Profile, etc.)
│   ├── services/             # API service modules (Axios)
│   └── ...
├── index.html
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── ...
```

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or bun

### Installation
1. **Clone the repository:**
   ```powershell
   git clone <your-fork-url>
   cd travel_agent-frontend
   ```
2. **Install dependencies:**
   ```powershell
   npm install
   # or
   bun install
   ```
3. **Configure environment variables:**
   - Create a `.env` file in the root directory.
   - Add your backend API URL:
     ```env
     VITE_BACKEND_URL=https://your-backend-url.com
     ```
4. **Start the development server:**
   ```powershell
   npm run dev
   # or
   bun run dev
   ```
5. **Open in browser:**
   - Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## Environment Variables
- `VITE_BACKEND_URL` — The base URL of your FastAPI backend (e.g., `https://api.navite.com`).
- (Optional) Add other variables as needed for authentication, analytics, etc.

---

## API Integration
All API calls are managed via the `src/services/travelApi.ts` module, which uses Axios and is pre-configured to handle authentication, error handling, and rate limiting. The frontend communicates with the backend for:
- Flight search & history
- Destination research
- Hotel & restaurant recommendations
- Itinerary generation & history
- Subscription status & Stripe payment sessions

See the [backend README](./backend_README.md) for detailed API endpoint documentation.

---

## Subscription & Paywall
- **Basic Explorer (Free):** 15 POST API calls/month, unlimited GET calls.
- **Travel Master (Paid):** Unlimited POST/GET calls. $1.99/month (Stripe).
- The frontend displays usage, handles 429 errors, and provides upgrade flows via Stripe Checkout.

---

## Contributing
1. Fork the repo and create a feature branch.
2. Make your changes and commit with clear messages.
3. Submit a pull request describing your changes.

---

## License
This project is licensed under the MIT License.

---

## Acknowledgements
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Google Gemini](https://deepmind.google/technologies/gemini/)
- [SerpAPI](https://serpapi.com/)
- [MongoDB](https://www.mongodb.com/)
- [Stripe](https://stripe.com/)
- [Clerk](https://clerk.com/)

---
