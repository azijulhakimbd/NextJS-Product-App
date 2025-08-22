# 🛍️ Next.js Product App

A simple product application built with **Next.js 15** (App Router) and **NextAuth.js** for authentication.  
Public users can explore products, while logged-in users can add new products.

---

### 🌐 Live Site
[Live Link](https://next-js-product-app-five.vercel.app/)

### 📂 GitHub Repo
[GitHub](https://github.com/azijulhakimbd/NextJS-Product-App)

---

## 🚀 Features
- Landing Page with Hero + Product Highlights
- Login with Google (NextAuth.js)
- Public Product List & Product Details
- Protected Dashboard: Add Product (only logged-in users)
- API Routes for fetching & creating products
- Loading Spinner, Toasts (SweetAlert2)
- Theme Toggle (Light / Dark)
- Framer Motion animations for UI transitions
- React Icons for consistent icons

---

## 🛠️ Tech Stack
- Next.js 15 (App Router)
- NextAuth.js
- Tailwind CSS + DaisyUI
- SweetAlert2
- Framer Motion
- React Icons
- MongoDB

---

## 🌍 Routes

| Route → Description 

- `/` → Landing Page 
- `/login` → Login Page (Google/Credentials) 
- `/products` → Product List 
- `/products/[id]` → Product Details 
- `/dashboard/add-product` → Protected Add Product Page (only for logged-in users) 

---

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/azijulhakimbd/NextJS-Product-App.git
cd NextJS-Product-App
npm install
