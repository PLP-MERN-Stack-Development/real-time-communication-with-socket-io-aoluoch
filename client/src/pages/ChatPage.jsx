import { useEffect, useState } from 'react';
import { useSocket } from '../socket/socket';
import ChatRoom from '../components/ChatRoom';
import UserList from '../components/UserList';
import Header from '../components/Header';

function ChatPage({ username, onLogout }) {
  const {
    isConnected,
    messages,
    users,
    typingUsers,
    connect,
    disconnect,
    sendMessage,
    sendPrivateMessage,
    setTyping,
  } = useSocket();

  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserList, setShowUserList] = useState(false);

  useEffect(() => {
    connect(username);

    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }

    return () => {
      disconnect();
    };
  }, [username]);

  // Show browser notification for new messages
  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      
      // Don't notify for own messages or system messages
      if (
        lastMessage.sender !== username &&
        !lastMessage.system &&
        'Notification' in window &&
        Notification.permission === 'granted' &&
        document.hidden
      ) {
        new Notification(`New message from ${lastMessage.sender}`, {
          body: lastMessage.message,
          icon: '/vite.svg',
        });
      }
    }
  }, [messages, username]);

  const handleSendMessage = (message) => {
    if (selectedUser) {
      sendPrivateMessage(selectedUser.id, message);
    } else {
      sendMessage(message);
    }
  };

  const handleLogout = () => {
    disconnect();
    onLogout();
  };

  return (
    <div className="h-screen flex flex-col">
      <Header
        username={username}
        isConnected={isConnected}
        onLogout={handleLogout}
        onToggleUserList={() => setShowUserList(!showUserList)}
        userCount={users.length}
      />

      <div className="flex-1 flex overflow-hidden">
        {/* Main chat area */}
        <div className="flex-1 flex flex-col">
          <ChatRoom
            messages={messages}
            currentUsername={username}
            selectedUser={selectedUser}
            onSendMessage={handleSendMessage}
            onTyping={setTyping}
            typingUsers={typingUsers}
            onClearPrivateChat={() => setSelectedUser(null)}
          />
        </div>

        {/* User list sidebar - desktop */}
        <div className="hidden lg:block w-80 border-l border-gray-200 bg-white">
          <UserList
            users={users}
            currentUsername={username}
            selectedUser={selectedUser}
            onSelectUser={setSelectedUser}
          />
        </div>

        {/* User list sidebar - mobile */}
        {showUserList && (
          <div className="lg:hidden absolute inset-0 bg-black bg-opacity-50 z-40">
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl">
              <UserList
                users={users}
                currentUsername={username}
                selectedUser={selectedUser}
                onSelectUser={(user) => {
                  setSelectedUser(user);
                  setShowUserList(false);
                }}
                onClose={() => setShowUserList(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatPage;
