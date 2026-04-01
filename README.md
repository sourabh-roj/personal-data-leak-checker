# 🔐 Personal Data Leak & Password Exposure Checker

A full-stack cybersecurity web application that simulates a mini version of a breach detection service similar to Have I Been Pwned.

This tool analyzes password strength, detects exposure against a local breach database, calculates entropy, assigns risk levels, and provides actionable security recommendations — all built from scratch using secure coding practices.

---

## 🚀 Features
### 🔎 Password Analysis

* SHA-256 hashing
* Per-scan salting
* Entropy calculation
* Strength scoring (0–100)
* Risk classification (LOW / MEDIUM / HIGH / CRITICAL)

### 🛡 Breach Detection

* Local breached password database (SHA-256 hashed)
* Unsalted hash comparison for breach lookup
* Immediate risk escalation if password found

### 🔐 Security Implementation

* No plaintext password storage
* Salted hashing for stored records
* Express rate limiting (brute force mitigation)
* Input validation & sanitization
* Helmet security headers
* Secure MongoDB logging

### 🎨 Frontend

* Clean dark UI
* Live strength bar
* Risk badge indicator
* Security recommendations display
* Loading spinner during scan

---

## 🏗 Tech Stack
### Frontend

* HTML5
* CSS3
* Vanilla JavaScript (no frameworks)

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Security Libraries

* crypto (SHA-256 hashing)
* express-rate-limit
* helmet
* xss

---

## 📁 Project Structure

```
personal-data-leak-checker/
│
├── server/
│   ├── server.js
│   ├── config/
│   ├── middleware/
│   ├── utils/
│   ├── models/
│   └── data/
│
├── client/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup
### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/personal-data-leak-checker.git
cd personal-data-leak-checker
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file inside `/server`:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/leakchecker
```

---

### 4️⃣ Start MongoDB

Make sure MongoDB is running locally:

```bash
mongod
```

---

### 5️⃣ Run the Server

```bash
cd server
node server.js
```

---

### 6️⃣ Open in Browser

```
http://localhost:5000
```

---

## 🔐 How Security Works
### ✅ Hashing & Salting

* Breach detection uses SHA-256(password)
* Stored logs use SHA-256(password + salt)
* Prevents rainbow table attacks
* No plaintext password storage

### ✅ Entropy Calculation

Entropy is calculated using:

```
entropy = password_length × log2(character_set_size)
```

Higher entropy → harder to brute force.

### ✅ Risk Logic

* Breached → CRITICAL
* Score < 50 → HIGH
* Score < 75 → MEDIUM
* Else → LOW

### ✅ Rate Limiting

Prevents automated abuse:

* 25 requests per 15 minutes per IP

---

## 🧠 What This Project Demonstrates

* Secure password handling practices
* Understanding of hashing & salting
* Breach detection logic
* Backend security architecture
* REST API design
* MongoDB data modeling
* Frontend-backend integration
* Defensive coding practices

---

## 📌 Why This Project Matters

Modern systems face:

* Credential stuffing
* Password reuse attacks
* Database leaks
* Brute-force attempts

This project demonstrates practical mitigation strategies used in real-world security systems.

---

## 📈 Future Improvements

* Switch to bcrypt (industry standard password hashing)
* Integrate real breach API
* Deploy to cloud (Render / Railway / AWS)
* Add authentication system
* Add admin dashboard
* Add audit logging system

---

## 💼 Resume Description

> Built a full-stack Password Exposure & Breach Detection application using Node.js, Express, MongoDB, and vanilla JavaScript. Implemented SHA-256 hashing with salting, entropy-based scoring, breach hash comparison, rate limiting, and secure logging. Applied secure coding practices including input validation, XSS protection, and brute-force mitigation.

---

## 👨‍💻 Author

SOURABH ROJ
B.Tech CSE (Cyber Security)

---

