# TrustDeploy AI

AI-powered DevSecOps platform for detecting software supply chain attacks using blockchain-based deployment verification and AI trust analysis.

---

## 🚀 Project Overview

TrustDeploy AI helps verify whether a software deployment or build has been tampered with during the deployment pipeline.

The system combines:

- SHA256 cryptographic hashing
- Blockchain-based integrity verification
- AI-powered risk analysis

to detect possible software supply chain attacks.

---

## 🔐 Problem Statement

Modern software deployments can be vulnerable to:

- Build tampering
- Artifact modification
- Supply chain attacks
- Unauthorized deployment changes

Traditional deployment systems often trust deployments blindly.

TrustDeploy AI adds a verification layer that checks deployment integrity before trust is established.

---

## ⚙️ How It Works

### 1. Store Deployment Hash
- User provides:
  - Commit ID
  - Deployment/build data
- Backend generates SHA256 hash
- Hash is stored on blockchain

### 2. Verify Deployment
- Deployment data is hashed again
- Stored blockchain hash is fetched
- Both hashes are compared

### 3. AI Analysis

The AI system returns:

- SAFE / TAMPERED status
- Trust score
- Risk level
- Explanation
- Recommendations

---

## 🧠 Features

- Blockchain-based hash verification
- SHA256 deployment integrity validation
- AI-powered trust analysis
- Tamper detection system
- Clean React frontend dashboard
- REST API backend
- Ganache blockchain integration

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Axios

### Backend
- Node.js
- Express.js

### Blockchain
- Ganache
- Web3.js
- Smart Contracts

### Security
- SHA256 Hashing

---

## 📂 Project Structure

```bash
trustdeploy-ai/
│
├── backend/
│   ├── contract/
│   ├── routes/
│   ├── services/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## ▶️ Backend Setup

### 1. Navigate to backend

```bash
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env`

```env
GANACHE_URL=http://127.0.0.1:7545
CONTRACT_ADDRESS=YOUR_CONTRACT_ADDRESS
GANACHE_ACCOUNT=YOUR_GANACHE_ACCOUNT
```

### 4. Start backend server

```bash
npm start
```

Backend runs on:

```bash
http://localhost:5000
```

---

## ▶️ Frontend Setup

### 1. Navigate to frontend

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 🔌 API Endpoints

### Store Hash

```http
POST /api/store
```

### Request Body

```json
{
  "commitId": "commit123",
  "data": "secure deployment build"
}
```

---

### Verify Deployment

```http
POST /api/verify
```

### Request Body

```json
{
  "commitId": "commit123",
  "data": "secure deployment build"
}
```

---

## ✅ Sample Response

```json
{
  "status": "SAFE",
  "trustScore": 98,
  "riskLevel": "LOW",
  "explanation": "Deployment integrity verified successfully.",
  "recommendations": "Deployment is safe to proceed."
}
```

---

## 🎯 Use Cases

- DevSecOps pipelines
- CI/CD verification
- Secure software deployments
- Supply chain attack detection
- Enterprise deployment validation

---

## 👨‍💻 Team

TrustDeploy AI Team  
Hackathon Project 2026

---

## 📜 License

This project is built for educational and hackathon purposes.