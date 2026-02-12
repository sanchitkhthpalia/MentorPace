# MentorPace

MentorPace is a modern mentorship platform that connects learners with experienced mentors for 1:1, high‑impact career guidance.

It’s built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Firebase**, **Razorpay**, and **Web3Forms**, and is designed from the ground up to look great on mobile and desktop.

Live: [mentor-pace.vercel.app](https://mentor-pace.vercel.app)

---

## ✨ Features

- **Beautiful Landing Experience**
  - Hero, services, testimonials, pricing, and team sections
  - Fully responsive \(320px → 1440px\) with a clean dark UI
  - Smooth scrolling, scroll‑to‑top, preloader, and AOS animations

- **Mentor Directory**
  - Curated mentor cards showing domain, experience, and bio
  - “Book Session” CTA routes directly into the booking flow

- **Secure Authentication**
  - Email/password + Google sign‑in via **Firebase Auth**
  - Protected routes for booking and support
  - Dedicated `/signin` and `/signup` pages, plus modals

- **Booking Flow**
  - Validated form for name, email, phone, domain, and goals
  - Razorpay integration for payments
  - Successful bookings stored in Firestore
  - Clear terms + non‑refundable policy messaging

- **Support & Contact**
  - **Support page** with ticket form powered by **Web3Forms**
  - **“Get Career Guidance”** contact form on the home page, also using Web3Forms
  - Loading and success states with friendly error handling

---

## 🛠 Tech Stack

- **Framework**: Next.js 15 \(App Router\)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Auth & Data**: Firebase \(Auth, Firestore\)
- **Payments**: Razorpay
- **Animations**: AOS
- **Package Manager**: npm \(lockfile included\)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sanchitkhthpalia/MentorPace.git
cd MentorPace
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create a `.env.local` file in the root of the project:

```bash
cp .env.example .env.local
```

Fill in the Firebase, Razorpay values according to your own keys.

### 4. Run the development server

```bash
npm run dev
# or
pnpm dev
```

Then open `http://localhost:3000` in your browser.

---

## 📁 Project Overview

High‑level structure:

- `src/app` – App Router pages and layouts
  - `page.tsx` – home page
  - `(site)/mentors` – mentors listing
  - `(site)/booking` – booking flow
  - `(site)/support` – support ticket form
  - `(site)/how-it-works` – 4‑step onboarding explanation
  - `signin` / `signup` – auth pages
- `src/components` – UI components (layout, home, shared sections, auth, payment)
- `src/context/AuthContext.tsx` – authentication context/provider
- `src/lib/firebase.ts` – Firebase client configuration

---

## 🔐 Auth, Booking & Support

- **Auth**: Firebase Auth handles sign‑up, sign‑in, and Google OAuth. Protected routes use a `ProtectedRoute` wrapper so only signed‑in users can access booking and support pages.
- **Booking**: The booking page collects session details and routes to Razorpay for payment. On success, details are saved to Firestore.
- **Support & Contact**: Both the Support ticket form and the home contact form submit to **Web3Forms** using your public access key, with proper validation and success/error feedback.


---

## 📄 License

All rights reserved.

