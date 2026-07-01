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

<img width="1335" height="632" alt="image" src="https://github.com/user-attachments/assets/1d2f05c2-032c-4a10-9ff1-d84264200f7d" />



### PG Listings

<img width="1335" height="635" alt="image" src="https://github.com/user-attachments/assets/328abe1c-11db-4ac1-b4a8-5735504b0f5d" />


### PG Details

<img width="1330" height="626" alt="image" src="https://github.com/user-attachments/assets/75d80685-bcca-43d7-a04e-2f88b8e472f6" />


### Login & Signup

<img width="1341" height="628" alt="image" src="https://github.com/user-attachments/assets/eb8f8c6f-b759-44b6-8f03-0a8dd86266ed" />
<img width="1326" height="617" alt="image" src="https://github.com/user-attachments/assets/44d2f622-9e32-4dd7-84a3-75131fb48752" />



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
