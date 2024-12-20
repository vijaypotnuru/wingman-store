# Wingman Frontend Coding Challenge

A frontend implementation of the provided Figma design using Next.js and modern web technologies.

## 🚀 Live Demo

[View Live Demo](https://wingman-store-iota.vercel.app/) https://wingman-store-iota.vercel.app/

## 📸 Screenshots

### AI Chat Interface

![AI Chat](/public/screenshots/chat.png)
_Interactive AI chat powered by Gemini API_

### Dashboard Overview

![Dashboard Overview](/public/screenshots/dashboard.png)
_Main dashboard with analytics and insights_

## ✨ Project Specifications Implemented

- **Responsive Design**

  - Mobile-friendly layout
  - Adaptive components
  - Flexible grid system

- **React/Next.js Implementation**

  - Next.js 14 App Router
  - React Components
  - Client-side interactivity

- **Fake Data/APIs**

  - Custom API routes
  - Mock order data
  - Simulated chat responses using Gemini API

- **Styling**
  - Tailwind CSS
  - Consistent design system
  - Custom components

## 🎯 Bonus Tasks Implemented

- **Table Sorting**

  - Column-based sorting
  - Ascending/descending options
  - Multiple field support

- **Interactive Chat**

  - Real-time messaging
  - AI response powered by Gemini API
  - Chat history

- **Pagination**
  - Page navigation
  - Items per page control
  - Total entries display

## 🛠️ Technologies Used

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Gemini API for AI Chatbot
- Next.js API Routes

## 🏃‍♂️ Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/vijaypotnuru/wingman-store.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```env
   NEXTAUTH_SECRET=""
   NEXTAUTH_URL="http://localhost:3000"
   GOOGLE_GENERATIVE_AI_API_KEY=""
   ```

   Notes:

   - Generate a secure NEXTAUTH_SECRET by running: `openssl rand -base64 32`
   - Get your GOOGLE_GENERATIVE_AI_API_KEY from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - NEXTAUTH_URL should be your deployment URL in production

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

This adds clarity about using the Gemini API for the AI chatbot while maintaining a professional and structured format. Let me know if you’d like any further adjustments!
