import React, { createContext, FC, useContext, useEffect, useState } from "react";
import useStore from "../Store/stateStore";

type webSocketContextType = {
    message: string;
    sendMessage: (message: string) => void;
};

export const webSocketContext = createContext<webSocketContextType | undefined>(undefined);

export const WebSocketContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [message, setMessage] = useState<string>('');
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const setState = useStore((state) => state.setState);

    useEffect(() => {
        const ws = new WebSocket('ws://192.168.4.1:80');

        ws.onopen = () => {
            console.log('WebSocket connection opened');
            setIsConnected(true);

            // Send a ping message every 30 seconds to keep the connection alive
            const pingInterval = setInterval(() => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send('ping');
                }
            }, 30000);

            ws.onclose = () => {
                clearInterval(pingInterval);
            };
        };

        ws.onmessage = (e) => {
            let message: string = e.data;
            if (message === 'pong') {
                // Ignore pong messages
                return;
            }
            let newStrArray: string[] = message.split("");
            newStrArray[5] = 'T';
            let newStr: string = newStrArray.join('');
            console.log('Received message:', message);
            const component = message[1];
            const dome = message[6];
            let key = `state${component + dome}`;
            setState(key, newStr);
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        ws.onclose = (event) => {
            console.log('WebSocket connection closed:', event);
            setIsConnected(false);
        };

        setSocket(ws);

        return () => {
            ws.close();
        };
    }, [setState]);

    const sendMessage = (message: string) => {
        if (socket && isConnected) {
            socket.send(message);
        } else {
            console.error('WebSocket is not open. Unable to send message');
        }
    };

    return (
        <webSocketContext.Provider value={{ message, sendMessage }}>
            {children}
        </webSocketContext.Provider>
    );
};

export const useWebSocket = (): webSocketContextType => {
    const context = useContext(webSocketContext);
    if (!context) {
        throw new Error('useWebSocket must be used within a WebSocketProvider');
    }
    return context;
};