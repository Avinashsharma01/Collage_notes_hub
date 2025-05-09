````markdown
# Notes Management System - Server

This project is the server-side of the Notes Management System, built using Node.js, Express, and MongoDB. The system allows users to upload, search, update, and delete notes. It also includes user authentication and authorization.

## Table of Contents

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

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-repo/notes-management-system.git
    cd notes-management-system/Server
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

## Environment Variables

Create a `.env` file in the `Server` directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
````

## Scripts

-   `start`: Start the server using nodemon.

## Project Structure

```
Server/
├── .env
├── .gitignore
├── Config/
│   └── cloudinary.js
├── FileAllowType.md
├── Controllers/
│   ├── AdminController.js
│   ├── authController.js
│   ├── feedbackController.js
│   └── noteController.js
├── Database/
│   └── db.js
├── Guide/
│   └── case-senstive.md
├── Middleware/
│   ├── authMiddleware.js
│   ├── authMidExplain.md
│   └── uploadMiddleware.js
├── Models/
│   ├── AdminModel.js
│   ├── Feedback.js
│   ├── Note.js
│   └── UserModel.js
├── Routes/
│   ├── authRoutes.js
│   ├── ExplainednoteRoutes.md
│   ├── feedbackRoutes.js
│   └── noteRoutes.js
├── server.js
├── utils/
│   └── sendEmail.js
├── package.json
└── README.md
```

## API Endpoints

### Auth Routes

-   `POST /api/auth/signup`: Register a new user.
-   `POST /api/auth/login`: Login a user.
-   `POST /api/auth/signupAdmin`: Register a new admin.
-   `POST /api/auth/loginAdmin`: Login an admin.

### Notes Routes

-   `POST /api/notes/upload`: Upload a new note (Admin only).
-   `GET /api/notes`: Get all notes (Authenticated users).
-   `GET /api/notes/search`: Search and filter notes (Authenticated users).
-   `DELETE /api/notes/:id`: Delete a note (Admin only).
-   `PUT /api/notes/:id`: Update a note (Admin only).

### Feedback Routes

-   `POST /api/feedback`: Submit feedback (Authenticated users).
-   `GET /api/feedback`: Get all feedbacks (Admin only).

## Middleware

### Authentication Middleware

-   `authenticateUser`: Ensures that only authenticated users with a valid JWT token can access protected routes.
-   `authorizeAdmin`: Ensures that only users with an "admin" role can access certain routes.

### Upload Middleware

-   `uploadMiddleware`: Handles file uploads using Cloudinary.

## Models

### Admin Model

-   `AdminModel`: Defines the schema for admin users.

### Feedback Model

-   `Feedback`: Defines the schema for feedback.

### Note Model

-   `Note`: Defines the schema for notes.

### User Model

-   `UserModel`: Defines the schema for regular users.

## Controllers

### Admin Controller

-   `AdminController`: Handles admin registration and login.

### Auth Controller

-   `authController`: Handles user registration and login.

### Feedback Controller

-   `feedbackController`: Handles feedback submission and retrieval.

### Note Controller

-   `noteController`: Handles note upload, retrieval, update, and deletion.

## Routes

### Auth Routes

-   `authRoutes`: Defines routes for user and admin authentication.

### Note Routes

-   `noteRoutes`: Defines routes for handling notes.

### Feedback Routes

-   `feedbackRoutes`: Defines routes for handling feedback.

## License

This project is licensed under the MIT License.

```

You can copy this content into your `README.md` file in the `Server` directory.
```
