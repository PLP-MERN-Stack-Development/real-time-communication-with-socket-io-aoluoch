import { LogOut, Users, Wifi, WifiOff } from 'lucide-react';

function Header({ username, isConnected, onLogout, onToggleUserList, userCount }) {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            {isConnected ? (
              <Wifi className="w-5 h-5 text-green-500" />
            ) : (
              <WifiOff className="w-5 h-5 text-red-500" />
            )}
            <span className="text-sm font-medium text-gray-600">
              {isConnected ? 'Connected' : 'Disconnected'}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-gray-700">
            <span className="font-semibold">{username}</span>
          </div>

          <button
            onClick={onToggleUserList}
            className="lg:hidden flex items-center space-x-2 px-3 py-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition"
          >
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">{userCount}</span>
          </button>

          <button
            onClick={onLogout}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
