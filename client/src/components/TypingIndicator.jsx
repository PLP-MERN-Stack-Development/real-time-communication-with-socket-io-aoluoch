function TypingIndicator({ users }) {
  if (users.length === 0) return null;

  const displayText =
    users.length === 1
      ? `${users[0]} is typing...`
      : users.length === 2
      ? `${users[0]} and ${users[1]} are typing...`
      : `${users[0]} and ${users.length - 1} others are typing...`;

  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
      <span>{displayText}</span>
    </div>
  );
}

export default TypingIndicator;
