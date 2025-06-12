# 🧠 AI-Powered Job Match Platform

A full-stack web application that helps users discover jobs tailored to their skills and preferences using AI.

---

## 🚀 Features

### ✅ User Authentication
- Sign up, Login, Logout using JWT
- Secure routes with middleware

### ✅ User Profile Management
- Add profile info: name, location, experience, skills, job type
- View profile after login

### ✅ Job Listings
- Static/Seeded job list fetched from backend
- Shown in card format

### ✅ AI-Powered Job Recommendations
- Button: **"Find My Matches"**
- Uses COHERE API to match jobs based on user profile
- Returns top 3 matches with explanation

---

## 🛠 Tech Stack

### Frontend
- React.js + Tailwind CSS
- JWT stored in localStorage
- Axios for API calls

### Backend
- Node.js + Express
- MongoDB Atlas for data storage
- JWT authentication
- COHERE API for job matching logic

---

## 🌐 Deployment

### ✅ Backend
- Deployed to AWS EC2 (Ubuntu)
- Hosted at: `http://43.204.235.128:3001`

### ✅ Frontend
- Deployed to AWS EC2 (Ubuntu)
- Hosted at: `http://43.204.235.128:3000/signup`

---

## 📦 Installation & Setup

### Backend

```bash
cd ai-job-match-backend
npm install
```

## 🔐 API Endpoints

### Auth

-   `POST /api/auth/signup`
    
-   `POST /api/auth/login`
    

### Profile

-   `POST /api/profile` – Create/Update profile
    
-   `GET /api/profile/me` – Get current user's profile
    

### Jobs

-   `GET /api/jobs` – Get all job listings
    

### AI Recommendations

-   `POST /api/ai/recommend` – Return top 3 job matches (requires auth)

## 🤖 AI Integration Logic

-   When the "Find My Matches" button is clicked:
    
    -   The frontend calls `/api/ai/recommend` with the user’s token.
        
    -   The backend:
        
        -   Fetches the user profile
            
        -   Fetches job listings
            
        -   Sends a prompt to Cohere API with both data
            
        -   Parses the response and sends it back