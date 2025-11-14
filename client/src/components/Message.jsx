import { formatDistanceToNow } from '../utils/dateUtils';

function Message({ message, isOwnMessage }) {
  if (message.system) {
    return (
      <div className="flex justify-center">
        <div className="bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm">
          {message.message}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs lg:max-w-md xl:max-w-lg ${
          isOwnMessage ? 'order-2' : 'order-1'
        }`}
      >
        <div className="flex items-baseline space-x-2 mb-1">
          {!isOwnMessage && (
            <span className="text-sm font-semibold text-gray-700">
              {message.sender}
            </span>
          )}
          <span className="text-xs text-gray-500">
            {formatDistanceToNow(message.timestamp)}
          </span>
        </div>
        <div
          className={`rounded-2xl px-4 py-2 ${
            isOwnMessage
              ? 'bg-indigo-600 text-white rounded-br-none'
              : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
          }`}
        >
          <p className="break-words">{message.message}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
