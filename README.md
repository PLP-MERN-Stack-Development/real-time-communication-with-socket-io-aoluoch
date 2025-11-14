# Real-Time Chat Application with Socket.io

A modern, feature-rich real-time chat application built with Socket.io, React, and Express. This application demonstrates bidirectional communication between clients and server with a beautiful, responsive UI.

![Chat Application](https://img.shields.io/badge/Socket.io-v4.6.1-blue)
![React](https://img.shields.io/badge/React-v18.2.0-blue)
![Express](https://img.shields.io/badge/Express-v4.18.2-green)

## ✨ Features Implemented

### Core Features
- ✅ **Real-time messaging** - Instant message delivery using Socket.io
- ✅ **User authentication** - Simple username-based authentication
- ✅ **Online user presence** - See who's currently online
- ✅ **Connection status** - Visual indicator for connection state
- ✅ **Message timestamps** - Relative time display for messages

### Advanced Features
- ✅ **Private messaging** - One-on-one conversations with other users
- ✅ **Typing indicators** - See when other users are typing
- ✅ **Browser notifications** - Desktop notifications for new messages
- ✅ **System messages** - Notifications when users join/leave
- ✅ **Auto-reconnection** - Automatic reconnection on connection loss
- ✅ **Responsive design** - Works seamlessly on desktop and mobile
- ✅ **Modern UI** - Beautiful interface built with Tailwind CSS

## 🏗️ Project Structure

```
socketio-chat/
├── client/                     # React front-end
│   ├── src/
│   │   ├── components/         # UI components
│   │   │   ├── ChatRoom.jsx    # Main chat container
│   │   │   ├── Header.jsx      # App header with status
│   │   │   ├── Message.jsx     # Individual message component
│   │   │   ├── MessageInput.jsx # Message input with typing detection
│   │   │   ├── MessageList.jsx  # Scrollable message list
│   │   │   ├── TypingIndicator.jsx # Typing animation
│   │   │   └── UserList.jsx    # Online users sidebar
│   │   ├── pages/
│   │   │   ├── ChatPage.jsx    # Main chat page
│   │   │   └── LoginPage.jsx   # Login/username entry
│   │   ├── socket/
│   │   │   └── socket.js       # Socket.io client setup & hooks
│   │   ├── utils/
│   │   │   └── dateUtils.js    # Date formatting utilities
│   │   ├── App.jsx             # Root component
│   │   ├── main.jsx            # Entry point
│   │   └── index.css           # Global styles
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── server/                     # Node.js back-end
│   ├── server.js               # Express + Socket.io server
│   ├── package.json
│   └── .env                    # Environment variables
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd real-time-communication-with-socket-io-aoluoch
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start the server** (in the `server` directory)
   ```bash
   npm run dev
   ```
   The server will start on `http://localhost:5000`

2. **Start the client** (in the `client` directory, in a new terminal)
   ```bash
   npm run dev
   ```
   The client will start on `http://localhost:5173`

3. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Enter a username to join the chat
   - Open multiple browser windows to test real-time features

## 🎯 How to Use

### Joining the Chat
1. Enter your desired username on the login page
2. Click "Join Chat" to enter the chat room

### Sending Messages
1. Type your message in the input field at the bottom
2. Press Enter or click the Send button
3. Your message will appear instantly for all users

### Private Messaging
1. Click on any user in the right sidebar
2. A private chat window will open
3. Messages sent here are only visible to you and the selected user
4. Click the X button to return to the global chat

### Notifications
- Browser notifications will appear when you receive messages (if permission granted)
- System messages show when users join or leave
- Typing indicators show when other users are composing messages

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Socket.io Client** - Real-time communication
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Socket.io** - WebSocket library
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📡 Socket.io Events

### Client → Server
- `user_join` - User joins the chat
- `send_message` - Send a message to all users
- `private_message` - Send a private message to a specific user
- `typing` - Notify when user is typing
- `disconnect` - User disconnects

### Server → Client
- `connect` - Connection established
- `disconnect` - Connection lost
- `receive_message` - Receive a public message
- `private_message` - Receive a private message
- `user_list` - Updated list of online users
- `user_joined` - Notification when a user joins
- `user_left` - Notification when a user leaves
- `typing_users` - List of users currently typing

## 🎨 Features Breakdown

### 1. Real-Time Messaging
Messages are instantly delivered to all connected clients using Socket.io's event-based architecture.

### 2. Typing Indicators
When a user types, a typing event is emitted. The indicator automatically disappears after 1 second of inactivity.

### 3. Private Messaging
Users can click on any online user to start a private conversation. Private messages are filtered and only shown in the private chat view.

### 4. Browser Notifications
The app requests notification permission and sends desktop notifications for new messages when the tab is not active.

### 5. Responsive Design
The UI adapts to different screen sizes:
- Desktop: Shows user list sidebar
- Mobile: User list accessible via toggle button

### 6. Connection Management
- Visual connection status indicator
- Automatic reconnection with exponential backoff
- Graceful handling of disconnections

## 🔒 Environment Variables

### Server (.env)
```
PORT=5000
CLIENT_URL=http://localhost:5173
```

### Client (.env)
```
VITE_SOCKET_URL=http://localhost:5000
```

## 📝 Assignment Requirements Checklist

- ✅ **Task 1: Project Setup**
  - ✅ Node.js server with Express
  - ✅ Socket.io configured on server
  - ✅ React front-end application
  - ✅ Socket.io client setup
  - ✅ Basic connection established

- ✅ **Task 2: Core Chat Functionality**
  - ✅ User authentication (username-based)
  - ✅ Global chat room
  - ✅ Messages with sender name and timestamp
  - ✅ Typing indicators
  - ✅ Online/offline status

- ✅ **Task 3: Advanced Chat Features**
  - ✅ Private messaging
  - ✅ Typing indicator
  - ✅ Multiple advanced features implemented

- ✅ **Task 4: Real-Time Notifications**
  - ✅ New message notifications
  - ✅ User join/leave notifications
  - ✅ Browser notifications

- ✅ **Task 5: Performance and UX Optimization**
  - ✅ Reconnection logic
  - ✅ Responsive design
  - ✅ Good error handling

## 🚀 Future Enhancements

Potential features to add:
- [ ] Message persistence with database
- [ ] File and image sharing
- [ ] Message reactions (emoji)
- [ ] Read receipts
- [ ] Multiple chat rooms/channels
- [ ] User profiles and avatars
- [ ] Message search functionality
- [ ] Message editing and deletion
- [ ] Voice/video calling

## 📄 License

This project is part of a PLP assignment.

## 🙏 Acknowledgments

- [Socket.io Documentation](https://socket.io/docs/v4/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/) 