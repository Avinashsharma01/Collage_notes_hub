Here's a well-formatted version of your `README.md` file with proper Markdown structure and readability improvements:

---

# Notes Management System - Server

This project is the server-side of the Notes Management System, built using **Node.js, Express, and MongoDB**. The system allows users to **upload, search, update, and delete notes** with authentication and authorization mechanisms.

---

## 📌 Table of Contents

-   [Installation](#installation)
-   [Environment Variables](#environment-variables)
-   [Scripts](#scripts)
-   [Project Structure](#project-structure)
-   [API Endpoints](#api-endpoints)
-   [Middleware](#middleware)
-   [Models](#models)
-   [Controllers](#controllers)
-   [Routes](#routes)
-   [License](#license)

---

## 🚀 Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/your-repo/notes-management-system.git
    cd notes-management-system/Server
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

---

## 🔧 Environment Variables

Create a `.env` file in the `Server` directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 📜 Scripts

| Command     | Description                       |
| ----------- | --------------------------------- |
| `npm start` | Start the server using `nodemon`. |

---

## 📂 Project Structure

```
Server/
│── .env
│── .gitignore
│── package.json
│── README.md
│
├── Config/
│   ├── cloudinary.js
│   ├── FileAllowType.md
│
├── Controllers/
│   ├── AdminController.js
│   ├── authController.js
│   ├── feedbackController.js
│   ├── noteController.js
│
├── Database/
│   ├── db.js
│
├── Guide/
│   ├── case-sensitive.md
│
├── Middleware/
│   ├── authMiddleware.js
│   ├── authMidExplain.md
│   ├── uploadMiddleware.js
│
├── Models/
│   ├── AdminModel.js
│   ├── Feedback.js
│   ├── Note.js
│   ├── UserModel.js
│
├── Routes/
│   ├── authRoutes.js
│   ├── feedbackRoutes.js
│   ├── noteRoutes.js
│   ├── ExplainednoteRoutes.md
│
├── utils/
│   ├── sendEmail.js
│
└── server.js
```

---

## 📌 API Endpoints

### 🔑 Auth Routes

| Method | Endpoint                | Description           |
| ------ | ----------------------- | --------------------- |
| `POST` | `/api/auth/signup`      | Register a new user.  |
| `POST` | `/api/auth/login`       | Login a user.         |
| `POST` | `/api/auth/signupAdmin` | Register a new admin. |
| `POST` | `/api/auth/loginAdmin`  | Login an admin.       |

### 📝 Notes Routes

| Method   | Endpoint            | Description                                        |
| -------- | ------------------- | -------------------------------------------------- |
| `POST`   | `/api/notes/upload` | Upload a new note (**Admin only**).                |
| `GET`    | `/api/notes`        | Get all notes (**Authenticated users**).           |
| `GET`    | `/api/notes/search` | Search and filter notes (**Authenticated users**). |
| `DELETE` | `/api/notes/:id`    | Delete a note (**Admin only**).                    |
| `PUT`    | `/api/notes/:id`    | Update a note (**Admin only**).                    |

### 💬 Feedback Routes

| Method | Endpoint        | Description                                |
| ------ | --------------- | ------------------------------------------ |
| `POST` | `/api/feedback` | Submit feedback (**Authenticated users**). |
| `GET`  | `/api/feedback` | Get all feedbacks (**Admin only**).        |

---

## 🛡 Middleware

### 🔐 Authentication Middleware

| Middleware         | Description                                                                               |
| ------------------ | ----------------------------------------------------------------------------------------- |
| `authenticateUser` | Ensures that only authenticated users with a valid JWT token can access protected routes. |
| `authorizeAdmin`   | Ensures that only users with an "admin" role can access certain routes.                   |

### 📤 Upload Middleware

| Middleware         | Description                            |
| ------------------ | -------------------------------------- |
| `uploadMiddleware` | Handles file uploads using Cloudinary. |

---

## 🏗 Models

### 👤 Admin Model

-   **AdminModel.js**: Defines the schema for admin users.

### 📝 Note Model

-   **Note.js**: Defines the schema for notes.

### 👥 User Model

-   **UserModel.js**: Defines the schema for regular users.

### 💬 Feedback Model

-   **Feedback.js**: Defines the schema for feedback.

---

## 🎮 Controllers

### 🔑 Auth Controller

-   **authController.js**: Handles user and admin authentication.

### 📝 Note Controller

-   **noteController.js**: Handles note **upload, retrieval, update, and deletion**.

### 💬 Feedback Controller

-   **feedbackController.js**: Handles feedback **submission and retrieval**.

### 👤 Admin Controller

-   **AdminController.js**: Handles **admin registration and login**.

---

## 🌐 Routes

### 🔑 Auth Routes

-   **authRoutes.js**: Defines routes for user and admin authentication.

### 📝 Note Routes

-   **noteRoutes.js**: Defines routes for handling notes.

### 💬 Feedback Routes

-   **feedbackRoutes.js**: Defines routes for handling feedback.

---

## 📜 License

This project is licensed under the **MIT License**.

---

This version improves readability, ensures better formatting, and organizes the content for easy navigation. Let me know if you need any changes! 🚀
