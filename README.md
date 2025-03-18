## 💬 Real-Time Chat Application

A modern real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io. This application enables users to communicate in real-time, featuring private messaging, user authentication, and a sleek interface designed with Tailwind CSS.

## ✨ Features

- 🔐 User authentication (signup, login)
- 💬 Real-time messaging
- 👥 User-to-user private chats
- 🌐 Socket.io for real-time communication
- 🔄 Message history persistence
- 🎨 Modern and responsive UI with Tailwind CSS

## 🚀 Tech Stack

### **Frontend**:
- ⚛️ React.js
- 🎨 Tailwind CSS
- 🔌 Socket.io client

### **Backend**:
- 🖥️ Node.js
- 🛠️ Express.js
- 🍃 MongoDB
- 🔌 Socket.io
- 🔑 JWT Authentication

## 📋 Prerequisites

- 📦 Node.js (v14 or higher)
- 🗄️ MongoDB
- 📥 npm or yarn

## 🛠️ Installation

### Clone the repository

```bash
git clone <repository-url>
cd chat-application
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
NODE_ENV=development
```

### Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

## 🏃‍♂️ Running the Application

### Development Mode

```bash
# Run both frontend and backend
npm run dev
```

### Production Build

```bash
# Create production build
npm run build

# Start the server
npm start
```

## 📱 Usage

1. 📝 Register a new account or login with existing credentials
2. 💬 Start chatting with other users in real-time
3. 📜 View your message history when you log back in

## 📸 Screenshots

![Login Screen](screenshots/login.png)
![Chat Interface](screenshots/chat.png)
![Signup Screen](screenshots/signup.png)

*Note: These are sample screenshots. Replace them with actual screenshots of your application.*

## 🔗 API Endpoints

- **POST /api/auth/register** - Register new user
- **POST /api/auth/login** - Login user
- **GET /api/users** - Get all users
- **GET /api/messages/:userId** - Get messages with a specific user

## 👤 About Me

I am a passionate software developer with a strong focus on creating user-friendly and scalable applications. With expertise in full-stack development, I enjoy building solutions that make a positive impact.

### 🛠️ Skills & Technologies

- **Frontend**: ⚛️ React.js, Vue.js, HTML5, CSS3, JavaScript (ES6+)
- **Backend**: 🖥️ Node.js, Express, Python, Django
- **Databases**: 🍃 MongoDB, PostgreSQL, MySQL
- **DevOps**: 🐳 Docker, AWS, CI/CD
- **Tools**: 🔧 Git, VS Code, Postman

### 💼 Experience

- 🚀 Led multiple successful project deployments
- 🔄 Strong background in agile methodologies
- 🌟 Active contributor to open-source projects

### 🎓 Education

- 🎓 Master in Computer Application
- 📜 Various technical certifications in web development and cloud technologies

Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/jagadish-behera-957635217/) or check out my other projects on [GitHub](https://github.com/jagadishBehera)!

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 📞 Contact

- ✉️ Email: jagadishbehera961@gmail.com
- 🐛 GitHub Issues: [Report a bug](https://github.com/jagadishBehera/)

If you have any questions or feedback, please reach out!

## Happy Chatting! 🎉
