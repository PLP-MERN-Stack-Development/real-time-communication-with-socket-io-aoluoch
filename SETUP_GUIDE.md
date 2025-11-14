# Setup Guide

## Quick Start

### Option 1: Using the start script (Linux/Mac)

```bash
chmod +x start.sh
./start.sh
```

### Option 2: Manual start

**Terminal 1 - Start the server:**
```bash
cd server
npm install  # Only needed first time
npm run dev
```

**Terminal 2 - Start the client:**
```bash
cd client
npm install  # Only needed first time
npm run dev
```

## Testing the Application

1. Open your browser and navigate to `http://localhost:5173`
2. Enter a username and click "Join Chat"
3. Open another browser window (or incognito window) and join with a different username
4. Test the following features:

### Features to Test

#### ✅ Real-time Messaging
- Send messages from one user
- Verify they appear instantly for all users

#### ✅ Typing Indicators
- Start typing in one window
- Check if "X is typing..." appears in other windows

#### ✅ Private Messaging
- Click on a user in the user list
- Send a private message
- Verify only you and the selected user can see it

#### ✅ User Presence
- Join with a new user
- Check if they appear in the user list
- Close a browser window
- Verify the user disappears from the list

#### ✅ System Messages
- Watch for "X joined the chat" messages
- Watch for "X left the chat" messages

#### ✅ Connection Status
- Check the connection indicator in the header
- Try disconnecting your internet briefly
- Verify reconnection works

#### ✅ Browser Notifications
- Grant notification permission when prompted
- Switch to another tab
- Have someone send you a message
- Check if you receive a desktop notification

#### ✅ Responsive Design
- Resize your browser window
- Test on mobile device (or use browser dev tools)
- Verify the user list becomes a toggle button on small screens

## Troubleshooting

### Port Already in Use

If you get an error that port 5000 or 5173 is already in use:

**For port 5000 (server):**
```bash
# Find the process
lsof -i :5000

# Kill it
kill -9 <PID>
```

**For port 5173 (client):**
```bash
# Find the process
lsof -i :5173

# Kill it
kill -9 <PID>
```

### Dependencies Not Installing

Make sure you have Node.js v18 or higher:
```bash
node --version
```

If you need to update Node.js, visit: https://nodejs.org/

### Socket Connection Issues

1. Make sure the server is running before starting the client
2. Check that the `.env` files have the correct URLs
3. Check browser console for error messages

### Browser Notifications Not Working

1. Make sure you granted notification permission
2. Notifications only appear when the tab is not active
3. Some browsers block notifications in incognito mode

## Environment Configuration

### Server (.env)
```
PORT=5000
CLIENT_URL=http://localhost:5173
```

### Client (.env)
```
VITE_SOCKET_URL=http://localhost:5000
```

## Development Tips

### Hot Reload
Both the server and client support hot reload:
- Server: Changes to `server.js` will restart the server automatically
- Client: Changes to React components will update in the browser automatically

### Debugging

**Server-side:**
- Check the terminal running the server for logs
- Socket events are logged to the console

**Client-side:**
- Open browser DevTools (F12)
- Check the Console tab for errors
- Check the Network tab for WebSocket connections

### Testing with Multiple Users

**Option 1: Multiple Browser Windows**
- Open multiple windows of the same browser
- Use different usernames in each

**Option 2: Different Browsers**
- Open Chrome, Firefox, Safari, etc.
- Join with different usernames

**Option 3: Incognito/Private Windows**
- Use incognito mode for additional users
- Useful for testing without clearing cookies

## Next Steps

After testing the basic functionality, try:

1. **Stress Testing**
   - Open 10+ browser windows
   - Send many messages quickly
   - Check performance

2. **Network Testing**
   - Disconnect and reconnect your internet
   - Test on slow connections
   - Verify reconnection logic

3. **UI/UX Testing**
   - Test on different screen sizes
   - Test keyboard navigation
   - Test accessibility features

4. **Code Exploration**
   - Read through the Socket.io event handlers
   - Understand the React component structure
   - Explore the custom hooks

## Additional Resources

- [Socket.io Documentation](https://socket.io/docs/v4/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
