#!/bin/bash

# Start script for the chat application

echo "🚀 Starting Real-Time Chat Application..."
echo ""

# Check if node_modules exist
if [ ! -d "server/node_modules" ]; then
    echo "📦 Installing server dependencies..."
    cd server && npm install && cd ..
fi

if [ ! -d "client/node_modules" ]; then
    echo "📦 Installing client dependencies..."
    cd client && npm install && cd ..
fi

echo ""
echo "✅ Dependencies installed!"
echo ""
echo "Starting servers..."
echo "- Server will run on http://localhost:5000"
echo "- Client will run on http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Start both servers in parallel
cd server && npm run dev &
SERVER_PID=$!

cd client && npm run dev &
CLIENT_PID=$!

# Wait for both processes
wait $SERVER_PID $CLIENT_PID
