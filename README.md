# 🛍️ Next.js Product App

A simple product application built with **Next.js 15** (App Router) and **NextAuth.js** for authentication.  
Public users can explore products, while logged-in users can add new products.
---
Live site: [Vercel Live Link](https://next-js-product-app-five.vercel.app/)

GitHub Repo: [GitHub Repository](https://github.com/azijulhakimbd/NextJS-Product-App)
---

## 🚀 Features
- Landing Page with Hero + Product Highlights
- Login with Google (NextAuth.js)
- Public Product List & Product Details
- Protected Dashboard: Add Product (only logged in users)
- API Routes for fetching & creating products
- Optional: Loading Spinner, Toasts, Theme Toggle

---

## 🛠️ Tech Stack
- Next.js 15 (App Router)
- NextAuth.js
- Tailwind CSS
- React Hot Toast

---
## 🌍 Routes

- `/` → Landing Page

- `/login` → Login Page (Google/Credentials)

- `/products` → Product List

- `/products/[id]` → Product Details

- `/dashboard/add-product` → Protected Add Product Page
---

## 📦 Installation
```bash
git clone https://github.com/azijulhakimbd/NextJS-Product-App.git
cd NextJS-Product-App
npm install
npm run dev
