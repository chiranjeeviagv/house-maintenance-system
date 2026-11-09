# 🏡 House Maintenance System

A production-ready, full-stack micro-portal engineered to manage, prioritize, and log residential home repair workflows. This project serves as a showcase of cloud-native architecture, automated containerization pipelines, and database security best practices for CV portfolio evaluation.

## 🚀 Live Demo
🔗 **Production URL:** [https://house-maintenance-system.onrender.com/](https://house-maintenance-system.onrender.com/)

> ⚠️ **Note on Hosting Tier:** This application is deployed on Render's free cluster runtime instance. If the service has been inactive for more than 15 minutes, the container spins down automatically. The initial page load may require a 30-50 second latency window to wake the web service.

---

## 🛠️ Architecture & Tech Stack

- **Frontend:** Responsive SPA built with optimized vanilla HTML5, CSS3 structural grids, and event-driven JavaScript API selectors.
- **Backend API:** Node.js runtime framework utilizing Express for robust endpoint routing, static distribution, and controller orchestration.
- **Database:** MongoDB Atlas M0 Cloud cluster integrated via Mongoose Object Data Modeling (ODM) with strict schema validation types.
- **Containerization:** Standardized Docker micro-image leveraging lightweight Linux Alpine layers (`node:18-alpine`).
- **CI/CD Pipeline:** Fully automated GitHub Actions workflow engine managing continuous syntactic verification and webhook-triggered updates.

---

## 📦 Container Lifecycle & Local Setup

### System Prerequisites
Ensure you have **Docker Desktop** installed on your workstation environment.

### 1. Environmental Configuration
Clone the repository workspace and create a secure configurations file named `.env` in the root folder directory:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.5wcq9lt.mongodb.net/house_maintenance
```

### 2. Multi-Stage Docker Compilation
Build the isolated runtime container system using the underlying configuration rules:
```bash
docker build -t house-maintenance-system .
```

### 3. Execution Control
Instantiate the local port bindings to launch the system locally at `http://localhost:5000`:
```bash
docker run -p 5000:5000 --env-file .env house-maintenance-system
```

---

## 🔄 Automated Deployment Pipeline (CI/CD)

This ecosystem employs an active developer deployment cycle to guarantee zero manual operational friction:
1. **Local Push:** Code updates are pushed directly to the `main` branch tracking index.
2. **Syntactic Testing:** **GitHub Actions** isolates a virtual runner to check JS structural safety and verify dependencies via `npm ci`.
3. **Webhook Deployment:** Upon successful compilation verification, GitHub securely fires an entry secret to **Render's API Engine** via a `RENDER_DEPLOY_HOOK`.
4. **Isolated Rebuild:** The production server pulls the verified update, builds the updated image layers, and spins up the new version with zero down-time.
