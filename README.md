# Openboom 🎵

A dark-themed music crowdfunding platform connecting independent artists directly with listeners. Built with React, TypeScript, and Tailwind CSS.

---

## Overview

Openboom eliminates label middlemen by giving artists a direct platform to fund releases, vinyl pressings, and tours. Listeners can discover emerging talent, pledge backing in real-time, and track funding goals live.

---

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Deployment:** Vercel (SPA routing via `vercel.json`)

---

## Core Architecture

- **`Campaign` Schema:** Typed data models for artist profiles, funding thresholds, and project assets.
- **Interactive State:** Local state management for immediate backer feedback and progress bar recalculations.
- **Responsive Layout:** Mobile-first 3-column grid system tuned for high-DPI displays.

---

## Quick Start

```bash
# Clone the repository
git clone [https://github.com/your-username/openboom.git](https://github.com/your-username/openboom.git)

# Move into the project directory
cd openboom

# Install dependencies
npm install

# Run development server
npm run dev

## bash
npm run build