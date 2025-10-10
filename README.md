# KLANS — Pilot Phase

This repository contains the **KLANS pilot application setup**, serving as the foundation for our community-as-a-service platform. This will evolve through multiple phases and updates until the final production-ready version.

---

## Project Overview

KLANS is envisioned as a platform where users can discover, join, and engage with hyperlocal or interest-based communities — powered by real-time updates, events, discussions, member profiles, and seamless onboarding.

Pilot objectives:
- Establish a working backend structure.
- Create core models based on the finalized schema.
- Implement OTP-based authentication.
- Set up MongoDB Atlas for cloud database.
- Prepare for front-end integration (React Native).

---

## Tech Stack

- **Backend**: Node.js (Express)
- **Database**: MongoDB (Atlas for cloud deployment)
- **Authentication**: OTP-based login
- **Version Control**: Git + GitHub

---

## Project Structure

```
klans/
│
├── models/        # MongoDB Mongoose schemas
│   ├── user.js
│   ├── otp.js
│   ├── klan.js
│   ├── category.js
│   ├── cluster.js
│   ├── post.js
│   ├── comment.js
│   ├── event.js
│   └── moderation.js
│
├── routes/        # API endpoints
│   ├── auth.js
│   ├── klan.js
│   ├── category.js
│   └── post.js
│
├── controllers/   # Route logic
│
├── .env           # Environment variables
├── server.js      # Entry point
├── package.json
└── README.md
```

---

## Setup Instructions

### 1. Install Dependencies
```
npm install
```

### 2. Environment Variables
Create `.env` file with:
```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/klans?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
```

### 3. Run Server
```
npx nodemon server.js
```

### 4. GitHub Setup
```
git init
git add .
git commit -m "Initial KLANS pilot setup"
git branch -M main
git remote add origin <github-repo-url>
git push -u origin main
```

---

## Next Steps

1. Implement all models based on finalized schema.
2. Build authentication APIs.
3. Implement CRUD APIs for klans, categories, posts, comments, and events.
4. Integrate admin dashboard and moderation tools.
5. Connect with React Native frontend.

---

## Notes
- This repository will be continuously updated through the KLANS pilot phase.
- MongoDB Atlas free tier is used for development.

---

## Contact
For questions or contributions, contact: **Sumit Kaila**

