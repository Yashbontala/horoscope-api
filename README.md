# 🔮 Horoscope API

A backend service built using **Node.js** and **Express.js** that provides personalized daily horoscopes for users based on their zodiac sign.

---

## 🚀 Features

- User Signup/Login with JWT
- Auto-detect zodiac sign from birthdate
- Fetch today’s horoscope
- Get history of past 7 days' horoscopes
- Rate limiting (5 requests/min/user)
- Swagger API documentation

---

## 🛠 Tech Stack

- Node.js + Express.js
- MongoDB + Mongoose
- JWT for authentication
- Swagger for API docs
- express-rate-limit for throttling

---

## ⚙️ Setup Instructions


```bash
git clone https://github.com/Yashbontala/horoscope-api.git
cd horoscope-api

### 2. Install dependencies
npm install

### 3.Create .env file
In the root directory, create a .env file with the following content:
PORT=3000
MONGO_URI=mongodb://localhost:27017/horoscope
JWT_SECRET=your_jwt_secret

#### Start the server
npm start

### Swagger api docs
http://localhost:3000/api-docs
