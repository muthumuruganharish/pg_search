# 🏠 PG Finder

A modern **PG (Paying Guest) Finder** web application built with **Next.js**, **MongoDB**, and **Google Maps Places API**. It helps users discover nearby PG accommodations using their current location or by searching for a city.

---

## 🚀 Features

- 🔍 Search PGs by city
- 📍 Find nearby PGs using current location
- 🏠 View detailed PG information
- ⭐ Real-time ratings and reviews from Google Maps
- 🖼️ Display real-time PG images
- 👤 User Authentication (Signup & Login)
- 💡 Similar PG recommendations
- 📱 Responsive UI for desktop and mobile
- 🎨 Modern UI built with Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- Next.js 16
- React.js
- Tailwind CSS
- JavaScript

### Backend
- Next.js API Routes
- Node.js

### Database
- MongoDB Atlas
- Mongoose

### APIs
- Google Maps JavaScript API
- Google Places API
- Place Details API
- Browser Geolocation API

---

## 📂 Project Structure

```
src
│
├── app
│   ├── api
│   │   ├── auth
│   │   ├── nearby-pg
│   │   ├── search-pg
│   │   └── pg/[id]
│   │
│   ├── (main)
│   │   ├── components
│   │   ├── about
│   │   ├── contact
│   │   ├── pg
│   │   └── cities
│
├── lib
├── models
└── controller
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/pg-finder.git
```

### Navigate to the project

```bash
cd pg-finder
```

### Install dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env.local` file in the root directory.

```env
MONGODB_URI=your_mongodb_connection_string

GOOGLE_MAPS_API_KEY=your_google_maps_api_key

NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### Run the project

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📸 Screenshots

### Home Page

![Uploading image.png…]()


### PG Listings

(Add Screenshot)

### PG Details

(Add Screenshot)

### Login & Signup

(Add Screenshot)

---

## 📌 How It Works

1. User enters a city name or uses the current location.
2. Browser fetches latitude and longitude using the Geolocation API.
3. Backend sends the request to Google Places API.
4. Google returns nearby PG data.
5. User can open a PG to view:
   - Images
   - Ratings
   - Reviews
   - Address
   - Contact Number
6. Users can create an account and log in.

---

## 🔐 Authentication

- User Signup
- User Login
- Password Hashing using bcrypt
- User information stored in MongoDB
- Logged-in user stored in Local Storage

---

## 🌟 Future Improvements

- ❤️ Wishlist / Favorites
- 📅 PG Booking System
- 💳 Online Payment Integration
- 🔎 Advanced Filters
- 📍 Interactive Google Maps
- 📧 Email Verification
- 🔑 JWT Authentication
- 🛡️ Role-based Authentication (Admin/User)

---

## 📚 What I Learned

Through this project I gained hands-on experience with:

- Next.js App Router
- Dynamic Routing
- API Routes
- React Hooks
- MongoDB & Mongoose
- Google Places API
- Authentication
- REST APIs
- Responsive UI Design
- Git & GitHub
- Deployment and Production Builds

---

## 👨‍💻 Author

**Muthumurugan Harish**

- GitHub: https://github.com/muthumuruganharish
- LinkedIn: https://linkedin.com/in/muthumuruganharish

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
