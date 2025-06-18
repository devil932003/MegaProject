const socketIo = require('socket.io');
const userModel = require('./models/user.model');
const captainModel = require('./models/captain.model');

let io;

function initializeSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: [ 'GET', 'POST' ]
        }
    });

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);

        socket.on('join', async (data) => {
            const { userId, userType } = data;
            try {
                if (userType === 'user') {
                    await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
                } else if (userType === 'captain') {
                    await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
                }
                console.log(`Updated socketId for ${userType} ${userId}: ${socket.id}`);
            } catch (err) {
                console.error('Error updating socketId:', err);
            }
        });

        socket.on('update-location-captain', async (data) => {
            const { userId, location } = data;
            if (!location || !location.ltd || !location.lng) {
                return socket.emit('error', { message: 'Invalid location data' });
            }
            try {
                await captainModel.findByIdAndUpdate(userId, {
                    location: {
                        ltd: location.ltd,
                        lng: location.lng
                    }
                });
            } catch (err) {
                console.error('Error updating captain location:', err);
            }
        });

        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
            // Optionally: clear socketId from DB here
        });
    });
}

const sendMessageToSocketId = (socketId, messageObject) => {
    if (!socketId) {
        console.error('No socketId provided for event:', messageObject.event);
        return;
    }
    if (io) {
        io.to(socketId).emit(messageObject.event, messageObject.data);
        console.log(`Sent event ${messageObject.event} to socketId ${socketId}`);
    } else {
        console.log('Socket.io not initialized.');
    }
}

module.exports = { initializeSocket, sendMessageToSocketId };