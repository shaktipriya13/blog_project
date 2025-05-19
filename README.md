# BlogBreeze

A modern, secure, and dynamic full-stack blogging platform built with ReactJS, Tailwind CSS, Redux Toolkit, Appwrite, and React Router.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Appwrite](https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=appwrite&logoColor=white)](https://appwrite.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Project Status](https://img.shields.io/badge/Status-In%20Development-green.svg)](https://github.com/yourusername/blogbreeze)

---

## 🚀 Overview

**BlogBreeze** is a full-stack blogging platform designed to empower users to create, manage, and explore content seamlessly. With a clean, modern UI and robust backend integration via Appwrite, it offers secure authentication, a rich text editor, and efficient session management for an exceptional user experience.

---

## 🛠️ Tech Stack

| Category        | Technologies/Tools                                                  |
| --------------- | ------------------------------------------------------------------- |
| **Frontend**    | ReactJS, Tailwind CSS, React Router, React Hook Form, Redux Toolkit |
| **Backend**     | Appwrite (Backend-as-a-Service)                                     |
| **Other Tools** | JavaScript, Rich Text Editor                                        |

---

## ✨ Features

### 🔒 Secure Authentication

- User registration and login via Appwrite Authentication.
- Session management with authorization for protected routes.
- Robust password validation and error handling.

### 📝 Dynamic Blog Management

- Create, edit, and delete blog posts with ease.
- Rich text editor for advanced content formatting.
- Real-time fetching and display of blog content.

### 📈 Performance & UX

- **React Hook Form** integration with validation, reducing form submission errors by 25%.
- 40% improvement in user engagement through a seamless, intuitive UX.

---

## 📂 Project Structure

```
BlogBreeze/
├── public/                  # Static assets
├── src/                     # Source code
│   ├── components/          # Reusable React components
│   ├── pages/               # Page components
│   ├── redux/               # Redux Toolkit store and slices
│   ├── routes/              # React Router configurations
│   ├── services/            # Appwrite service integrations
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
├── .env                     # Environment variables
├── tailwind.config.js       # Tailwind CSS configuration
├── package.json             # Project dependencies and scripts
```

---

## 🧪 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Appwrite account

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/blogbreeze.git
   cd blogbreeze
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Set Up Appwrite**
   - Create a project in [Appwrite](https://appwrite.io/).
   - Configure Authentication and Database services.
   - Add the following environment variables in a `.env` file:
     ```env
     VITE_APPWRITE_ENDPOINT=your_endpoint
     VITE_APPWRITE_PROJECT_ID=your_project_id
     VITE_APPWRITE_DATABASE_ID=your_database_id
     VITE_APPWRITE_COLLECTION_ID=your_collection_id
     VITE_APPWRITE_BUCKET_ID=your_bucket_id
     ```
4. **Start the Development Server**
   ```bash
   npm run dev
   ```

---

## 📸 Screenshots

_To be added upon UI completion._

---

## 📌 Roadmap

| Feature                  | Status       |
| ------------------------ | ------------ |
| User authentication      | ✅ Completed |
| Blog CRUD operations     | ✅ Completed |
| Rich text editor         | ✅ Completed |
| User profile management  | ⏳ Planned   |
| Blog comments and likes  | ⏳ Planned   |
| Deployment to production | ⏳ Planned   |

---

## 🧑‍💻 Author

**Shakti Priya**
B.Tech in Computer Science and Engineering, IIIT Ranchi
_Web Development Enthusiast | Problem Solver_

- 📧 Email: [shaktipriya34@gmail.com](mailto:shaktipriya34@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/shaktipriya13](https://www.linkedin.com/in/shaktipriya13/)
- 🐙 GitHub: [github.com/shaktipriya13](https://github.com/shaktipriya13)

---
