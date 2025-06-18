# MegaProject: Real-Time Ride Booking Platform

A modern, full-stack Uber-like ride booking platform built with **React**, **Node.js**, **Express**, **MongoDB**, and **Socket.IO** for real-time ride matching and notifications.

---

## 🚀 Features

- User & Captain (Driver) Registration/Login
- Live Ride Booking & Matching
- Real-time Ride Requests via Socket.IO
- Captain Dashboard with Ride Popups
- Live Location Tracking
- Responsive, Modern UI (Tailwind CSS + React)
- Secure Authentication (JWT)
- Error Handling with Toast Notifications

---



### User Home & Booking


![User Dashboard](https://github.com/user-attachments/assets/133e7054-e3b6-4cd7-9903-6fb22c4d3729)

![Ride Confirmation Page](https://github.com/user-attachments/assets/fb9e4600-1044-4883-b231-b676d07b4655)

### Captain Dashboard

![Dashboard
](https://github.com/user-attachments/assets/46eb8b71-50a6-409f-85c2-7ed189cea77c)
 
![Captain Dashbord](https://github.com/user-attachments/assets/48befb8b-8935-4a24-88a0-db78ed172215)
---

## 🏗️ Tech Stack

- **Frontend:** React, Tailwind CSS, React Router, React Toastify, Socket.IO Client
- **Backend:** Node.js, Express, MongoDB, Mongoose, Socket.IO
- **Other:** JWT Auth, Google Maps API

---

## ⚙️Setup Backend
cd Backend
npm install
cp .env.example .env   # Add your MongoDB URI and JWT secret
npm run dev

## ⚙️Setup frontend
cd ../frontend
npm install
cp .env.example .env   # Add your backend API base URL
npm run dev

