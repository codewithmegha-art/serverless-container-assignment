# Serverless Container Assignment

## 📜 Objective
Containerize a microservices-based Node.js application using Docker and Docker Compose.

This project includes three Node.js microservices:

- **User Service** (port 3000)
- **Product Service** (port 3001)
- **Gateway Service** (port 3003)

Each service is containerized with Docker, and orchestrated using Docker Compose.

---

## 📁 Folder Structure

serverless-container-assignment/
├── user-service/
│ ├── Dockerfile
│ ├── package.json
│ └── server.js
├── product-service/
│ ├── Dockerfile
│ ├── package.json
│ └── server.js
├── gateway-service/
│ ├── Dockerfile
│ ├── package.json
│ └── server.js
├── docker-compose.yml
└── README.md 



---

## ⚙️ Setup Instructions  

### ✅ 1️⃣ Clone this repository

```bash
git clone https://github.com/codewithmegha-art/serverless-container-assignment.git
cd serverless-container-assignment


✅ 2️⃣ Install Docker
Make sure you have Docker    and Docker Compose installed.

Download Docker Desktop 


✅ 3️⃣ Build and Start the Services 
serverless-container-assignment : 
docker-compose up --build 

✅ 4️⃣ Access the Services
Open your browser or use curl:

User Service: http://localhost:3000

Product Service: http://localhost:3001

Gateway Service: http://localhost:3003 


Expected output:
User Service Running! 


✅ 5️⃣ Stop the Services
docker-compose down

<img width="948" alt="docker-iamge-container" src="https://github.com/user-attachments/assets/54d76ee3-5105-4459-a1cf-973f4c44fb3c" />


![image](https://github.com/user-attachments/assets/d5543932-e28a-4f37-b9f6-726ffacaf857)




