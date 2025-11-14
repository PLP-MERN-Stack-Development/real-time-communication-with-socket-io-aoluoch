import { useEffect, useRef } from 'react';
import Message from './Message';

function MessageList({ messages, currentUsername, selectedUser }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Filter messages based on selected user (for private chat)
  const filteredMessages = selectedUser
    ? messages.filter(
        (msg) =>
          msg.isPrivate &&
          (msg.senderId === selectedUser.id ||
            msg.sender === selectedUser.username)
      )
    : messages.filter((msg) => !msg.isPrivate);

  return (
    <div className="h-full overflow-y-auto px-4 py-6 space-y-4">
      {filteredMessages.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-gray-500">
            <p className="text-lg font-medium">
              {selectedUser
                ? `Start a conversation with ${selectedUser.username}`
                : 'No messages yet'}
            </p>
            <p className="text-sm mt-2">
              {selectedUser
                ? 'Send a message to get started'
                : 'Be the first to send a message!'}
            </p>
          </div>
        </div>
      ) : (
        <>
          {filteredMessages.map((message) => (
            <Message
              key={message.id}
              message={message}
              isOwnMessage={message.sender === currentUsername}
            />
          ))}
          <div ref={messagesEndRef} />
        </>
      )}
    </div>
  );
}

export default MessageList;
