# Task Manager

This is a full stack task manager built using the MERN stack.

## Features

- User authentication and authorization
- Task creation, editing, and deletion
- Task assignment and management
- Real-time updates with WebSockets
- Responsive design

## Technologies Used

- **MongoDB**: Database
- **Express.js**: Backend framework
- **React**: Frontend library
- **Node.js**: Backend runtime
- **Redux**: State management

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Amro145/Task-Manger.git
   cd Task-Manger
   ```

2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

4. Create a `.env` file in the backend directory and add your environment variables:
   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

5. Start the development server:
   ```bash
   cd backend
   npm run dev
   ```

6. Start the frontend development server:
   ```bash
   cd ../frontend
   npm start
   ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to access the application.
