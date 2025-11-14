import { Users, X, MessageSquare } from 'lucide-react';

function UserList({ users, currentUsername, selectedUser, onSelectUser, onClose }) {
  const otherUsers = users.filter((user) => user.username !== currentUsername);

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Users className="w-5 h-5 text-indigo-600" />
          <h2 className="font-semibold text-gray-800">
            Online Users ({users.length})
          </h2>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition lg:hidden"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        )}
      </div>

      {/* Current user */}
      <div className="p-4 bg-indigo-50 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
            {currentUsername.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-semibold text-gray-800">{currentUsername}</p>
            <p className="text-sm text-gray-600">You</p>
          </div>
        </div>
      </div>

      {/* Other users */}
      <div className="flex-1 overflow-y-auto">
        {otherUsers.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p>No other users online</p>
          </div>
        ) : (
          <div className="p-2">
            {otherUsers.map((user) => (
              <button
                key={user.id}
                onClick={() => onSelectUser(user)}
                className={`w-full p-3 rounded-lg mb-2 transition hover:bg-gray-50 ${
                  selectedUser?.id === user.id ? 'bg-indigo-50 border-2 border-indigo-200' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold">
                        {user.username.charAt(0).toUpperCase()}
                      </div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-800">
                        {user.username}
                      </p>
                      <p className="text-xs text-gray-500">Online</p>
                    </div>
                  </div>
                  <MessageSquare className="w-5 h-5 text-gray-400" />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 text-center text-xs text-gray-500">
        Click on a user to start a private chat
      </div>
    </div>
  );
}

export default UserList;
