# leo Dockerized Application

## Project Overview

This project demonstrates a full-stack application using:

* Frontend: Node.js with Express
* Backend: Flask (Python)
* Containerization: Docker
* Orchestration: Docker Compose

The frontend provides a user registration form and sends the submitted data to the Flask backend for processing.

---

## Project Structure

```text
leo/
│
├── leo_frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── views/
│       └── index.ejs
│
├── leo_backend/
│   ├── Dockerfile
│   ├── app.py
│   ├── requirements.txt
│   └── templates/
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## Technologies Used

### Frontend

* Node.js
* Express.js
* EJS
* Axios

### Backend

* Python
* Flask

### DevOps

* Docker
* Docker Compose
* Docker Hub
* GitHub

---

## Features

* User registration form
* Communication between Express frontend and Flask backend
* Dockerized services
* Multi-container deployment using Docker Compose
* Source code version control with Git and GitHub

---

## Prerequisites

Before running the project, install:

* Docker
* Docker Compose
* Git

Verify installation:

```bash
docker --version
docker compose version
git --version
```

---

## Running the Application

### Build Containers

```bash
docker compose build
```

### Start Containers

```bash
docker compose up
```

### Run in Detached Mode

```bash
docker compose up -d
```

---

## Access the Application

Frontend:

```text
http://localhost:3000
```

Backend:

```text
http://localhost:5000
```

---

## Docker Compose Architecture

```text
User
  |
  v
Frontend (Node.js + Express)
  |
  v
Backend (Flask)
```

The frontend communicates with the backend using the Docker service name:

```javascript
http://backend:5000/process
```

Docker Compose automatically creates a shared network between services.

---

## Docker Hub Deployment

### Login

```bash
docker login
```

### Tag Images

```bash
docker tag frontend <dockerhub-username>/frontend:v1
docker tag backend <dockerhub-username>/backend:v1
```

### Push Images

```bash
docker push <dockerhub-username>/frontend:v1
docker push <dockerhub-username>/backend:v1
```

---

## GitHub Repository Setup

Initialize Git:

```bash
git init
git add .
git commit -m "Initial commit"
```

Add Remote Repository:

```bash
git remote add origin <repository-url>
```

Push Code:

```bash
git branch -M main
git push -u origin main
```

---

## .gitignore

The following files and directories are excluded:

```text
node_modules/
venv/
__pycache__/
.vscode/
.env
*.pyc
```

---

## Stopping the Application

```bash
docker compose down
```

---

## Author

Manoj Chaudhary

---

## Assignment Deliverables

* ✔ Express Frontend
* ✔ Flask Backend
* ✔ Form Submission
* ✔ Dockerfile for Frontend
* ✔ Dockerfile for Backend
* ✔ Docker Compose Configuration
* ✔ Docker Hub Image Upload
* ✔ GitHub Repository Upload
* ✔ Proper .gitignore Configuration
