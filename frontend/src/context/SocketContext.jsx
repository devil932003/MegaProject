import { createContext, useContext, useEffect } from 'react';
import { io } from 'socket.io-client';
import { CaptainDataContext } from './CapatainContext';
import { UserDataContext } from './UserContext';

export const SocketContext = createContext();

const socket = io(`${import.meta.env.VITE_BASE_URL}`, {
    autoConnect: true,
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
});

const SocketProvider = ({ children }) => {
    const { user } = useContext(UserDataContext);
    const { captain } = useContext(CaptainDataContext);

    useEffect(() => {
        socket.on('connect', () => {
            if (user && user._id) {
                socket.emit('join', { userType: 'user', userId: user._id });
            }
            if (captain && captain._id) {
                socket.emit('join', { userType: 'captain', userId: captain._id });
            }
        });

        return () => {
            socket.off('connect');
        };
    }, [user, captain]);

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;