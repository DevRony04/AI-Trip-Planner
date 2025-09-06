# ✈️ AI Trip Planner

An **AI-powered travel planning web application** built with **Next.js 14, Tailwind CSS, Clerk Authentication, and Mapbox**.  
Create, visualize, and manage custom itineraries with an AI assistant and interactive maps — all in a modern, responsive interface.

---

## 🚀 Features

- 🔑 **Authentication** – Secure login & user management with Clerk  
- 🤖 **AI Trip Assistant** – Generate itineraries using natural language input  
- 🗺 **Interactive Maps** – Explore destinations via Mapbox integration  
- 📅 **Dynamic Itinerary** – Switch seamlessly between map and trip schedule  
- ⌨️ **Smart Input** – Press **Enter** to send, **Shift+Enter** for line breaks  
- 📱 **Responsive UI** – Optimized for mobile and desktop  
- 🎨 **Modern Design** – Styled with Tailwind CSS + Shadcn UI  

---
🖼 Screenshots 

<img width="1821" height="844" alt="Screenshot 2025-09-06 125029" src="https://github.com/user-attachments/assets/3194fe7c-f3c2-48fe-b8e6-4ebeecfae8c3" />


## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)  
- **Authentication**: [Clerk](https://clerk.com/)  
- **Maps**: [Mapbox](https://mapbox.com/)  
- **AI Integration**: OpenAI API (or other LLM provider)  
- **Icons**: [Lucide React](https://lucide.dev/)  

---

## ⚡ Getting Started

## 1. Clone the repository
-bash
git clone https://github.com/DevRony04/AI-Trip-Planner.git
cd AI-Trip-Planner

## 2. Install dependencies :->
npm install

## 3. Configure environment variables :->
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key,
CLERK_SECRET_KEY=your_clerk_secret_key,
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_token,
OPENAI_API_KEY=your_openai_key

4. Start the development server :->
npm run dev

## 📂 Project Structure
├── app/
│   ├── layout.tsx         # Global layout with Header & Footer
│   ├── page.tsx           # Landing page
│   ├── create-new-trip/   # Trip creation workflow
│   └── my-trips/          # Saved trips
├── components/
│   ├── Header.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer
│   └── ui/                # Reusable UI components
├── public/
│   ├── logo.svg
│   └── screenshots/       # App screenshots
└── ...

## 🚀 Deployment :->
vercel

## 📜 License :->
This project is licensed under the MIT License.

## 🙌 Acknowledgements :->
> Inspired by Travel Hobby.
> Thanks to Clerk,Mapbox,OpenAI and Gemini For their APIs.
