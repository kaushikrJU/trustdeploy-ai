# 🛡️ TrustDeploy AI

### Secure software deployments with blockchain trust

AI-powered DevSecOps platform for detecting **software supply chain attacks** using **blockchain-based deployment verification, SHA256 integrity validation, and intelligent trust analysis**.

> **Trust. Verify. Deploy.**

---

## 🚀 Project Overview

TrustDeploy AI helps verify whether a software deployment or build has been tampered with during the deployment pipeline.

The system combines:

- SHA256 cryptographic hashing
- Blockchain-based integrity verification
- AI-powered risk analysis

to detect possible software supply chain attacks.

---

## 🏗️ System Architecture

```text
Frontend (React + Vite)
            ↓
Backend API (Node.js + Express)
            ↓
Blockchain Verification Layer
   (Web3.js + Ganache + Smart Contract)
            ↓
AI Trust Analysis Engine
```

---

## 🔄 Demo Flow

### Trusted Deployment

1. Store approved deployment hash
2. Verify deployment
3. Result:

```text
🟢 SAFE
LOW RISK
```

---

### Tampered Deployment

1. Modify deployment data
2. Verify again
3. Result:

```text
🔴 TAMPERED
HIGH RISK
```

TrustDeploy AI instantly detects deployment integrity violations.

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

### Jishnu
Blockchain & Smart Contract Integration

### Kaushik
Backend Engineering

### Nischay
Frontend Engineering

---

## 📜 License

This project is built for educational and hackathon purposes.

---

## 🏆 Built For

**IBM Bob Hackathon 2026**
