import MessageList from './MessageList';
import MessageInput from './MessageInput';
import TypingIndicator from './TypingIndicator';
import { X } from 'lucide-react';

function ChatRoom({
  messages,
  currentUsername,
  selectedUser,
  onSendMessage,
  onTyping,
  typingUsers,
  onClearPrivateChat,
}) {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Chat header */}
      {selectedUser && (
        <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-800">
              Private chat with {selectedUser.username}
            </h3>
            <p className="text-sm text-gray-500">
              Only you and {selectedUser.username} can see these messages
            </p>
          </div>
          <button
            onClick={onClearPrivateChat}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-hidden">
        <MessageList
          messages={messages}
          currentUsername={currentUsername}
          selectedUser={selectedUser}
        />
      </div>

      {/* Typing indicator */}
      {typingUsers.length > 0 && (
        <div className="px-4 py-2 bg-white border-t border-gray-200">
          <TypingIndicator users={typingUsers} />
        </div>
      )}

      {/* Message input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <MessageInput onSendMessage={onSendMessage} onTyping={onTyping} />
      </div>
    </div>
  );
}

export default ChatRoom;
