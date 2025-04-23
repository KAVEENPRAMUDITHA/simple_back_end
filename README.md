# 🌐 Node.js REST API – Production-Ready Backend

A fully functional, scalable, and production-ready Node.js REST API backend using Express.js, deployed on **AWS EC2**, managed by **PM2** and **Nginx**, with **GitHub Actions** for CI/CD automation.

---

## 🚀 Features

- ✅ RESTful API architecture (Express.js)
- 🔐 JWT-based authentication
- 📦 MongoDB database integration
- 🔁 GitHub Actions CI/CD pipeline
- 🖥️ Production deployment with EC2 + PM2 + Nginx
- 📄 OpenAPI 3.0 API documentation
- 📦 Dependency caching, security scanning, and changelog automation

---

## 📁 Project Structure

 project-root ├── src/ │ ├── routes/ │ ├── controllers/ │ ├── models/ │ └── middlewares/ ├── .github/ │ └── workflows/ │ └── deploy.yml ├── .env.example ├── swagger.js ├── package.json └── README.md

 
---

## ⚙️ Technologies Used

- Node.js, Express.js
- MongoDB (Mongoose)
- JWT Auth
- PM2 + Nginx (on EC2)
- GitHub Actions (CI/CD)
- Swagger (OpenAPI 3.0)
- AWS (EC2, CloudFront, S3, Backup)

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo



### 2.Install Dependencies
npm install

###3.Setup Environment Variables
Create .env based on .env.example:
PORT=3000
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_jwt_secret>

###4. Start the Application
npm start

🚀 Deployment
🔧 EC2 Setup with PM2 & Nginx
SSH into your EC2 instance

Clone the repo

Install dependencies & PM2

Configure Nginx reverse proxy


🔄 CI/CD via GitHub Actions
.github/workflows/deploy.yml automates:

Code checkout

Matrix testing (Node 14/16/18)

Dependency caching

SSH deploy to EC2

PM2 restart

📄 Documentation
API Docs: /api-docs route (via Swagger UI)

Divio-style docs in /docs:

tutorials/

how-to/

reference/

explanation/

ADRs: /docs/adr/

Incident Playbook: /docs/incident-playbooks.md

Disaster Recovery: /docs/disaster-recovery.md

🔐 Secrets & Security
Secrets managed in GitHub → Settings → Environments

Environment-specific .env files:
env.dev, env.staging, env.prod

🛠️ Future Improvements

Area	Planned Improvements
Security	Add HTTPS (Let's Encrypt), rotate secrets regularly
Monitoring	Integrate PM2 dashboard, health alerts
Logging	Centralize logs (ELK Stack / LogDNA)
API	Rate limiting, API key authentication
Database	Migrate to MongoDB Atlas with IP whitelisting
Scalability	Dockerize app, use Docker Compose
📌 Lessons Learned
GitHub Actions + EC2 offers full CI/CD control

PM2 keeps your app resilient across crashes

Nginx reverse proxy helps scale and secure traffic

Logging, structured docs, and changelogs aid maintainability
