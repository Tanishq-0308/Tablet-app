import React, { createContext, FC, useContext, useEffect, useRef, useState } from "react";
import useStore from "../Store/stateStore";
import { Alert } from "react-native";
import Snackbar from "react-native-snackbar";
import { cameraStore } from "../Store/cameraStore";
import NetInfo from '@react-native-community/netinfo';

type webSocketContextType = {
    // message: string;
    sendMessage: (message: string) => void;
};

export const webSocketContext = createContext<webSocketContextType | undefined>(undefined);

export const WebSocketContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [message, setMessage] = useState<string>('');
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const setState = useStore((state) => state.setState);
    const setCameraState = cameraStore((state) => state.setCameraState)

    const reconnectAttemptRef = useRef(0);
    const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const pingIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const shouldReconnectRef = useRef(true);

    const WS_URL = 'ws://192.168.4.1:80';
    const RECONNECT_INTERVAL = 1000;
    const MAX_RECONNECT_INTERVAL = 30000;
    const RECONNECT_DECAY = 1.5;
    const MAX_RECONNECT_ATTEMPTS = Infinity;


    const connectWebSocket = () => {
        if (socket && socket.readyState === WebSocket.OPEN) return;

        // const ws = new WebSocket('ws://192.168.4.1:80');
        const ws = new WebSocket(WS_URL);
        setSocket(ws);

        ws.onopen = () => {
            console.log('WebSocket connection opened');
            setIsConnected(true);
            reconnectAttemptRef.current = 0;
            Snackbar.show({
                text: 'Connected', 
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: '#5BBD17',
                textColor: 'white'
            });

            // Send a ping message every 30 seconds to keep the connection alive
            pingIntervalRef.current = setInterval(() => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send('TAB');
                }
            }, 30000);
            // const pingInterval = setInterval(() => {
            //     if (ws.readyState === WebSocket.OPEN) {
            //         ws.send('ping');
            //     }
            // }, 30000);

            // ws.onclose = () => {
            //     clearInterval(pingInterval);
            //     setIsConnected(false);

            // };
        };

        ws.onmessage = (e) => {
            const message: string = e.data;
            if (message === 'pong') return;

            setMessage(message);
            if (message[0] === '@') {
                let newStrArray: string[] = message.split("");
                newStrArray[5] = 'T';
                const newStr: string = newStrArray.join('');
                console.log('Received message:', message);
                const component = newStr[1];
                const dome = newStr[6];
                let key = `state${component + dome}`;
                setState(key, newStr);
            }
            else if (message[0] === '$') {
                const component = message[1];
                let key = `state${component}`
                setCameraState(key, message);
            }
        };

        ws.onerror = (error) => {
            console.log('WebSocket error:', error);
            setIsConnected(false);
        };

        ws.onclose = (event) => {
            console.log('WebSocket connection closed:', event);
            setIsConnected(false);
            setSocket(null);
            if (pingIntervalRef.current) clearInterval(pingIntervalRef.current);
            Snackbar.show({
                text:'Trying to connect...',
                duration:Snackbar.LENGTH_SHORT,
                backgroundColor:'red',
                textColor:'white'
            })
            if (shouldReconnectRef.current) {
                console.log('WebSocket connection closed. Trying to reconnect...');
                scheduleReconnect();
            }
        };
    }


    const scheduleReconnect = () => {
        if (reconnectAttemptRef.current >= MAX_RECONNECT_ATTEMPTS) {
            console.log('Max reconnect attempts reached');
            Snackbar.show({
                text: 'Connection failed after max attempts',
                duration: Snackbar.LENGTH_LONG,
            });
            return;
        }
        const delay = Math.min(
            RECONNECT_INTERVAL * Math.pow(RECONNECT_DECAY, reconnectAttemptRef.current),
            MAX_RECONNECT_INTERVAL
        );

        reconnectAttemptRef.current++;

        if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);

        console.log(`Scheduling reconnect attempt ${reconnectAttemptRef.current} in ${delay}ms...`);
        reconnectTimeoutRef.current = setTimeout(() => {
            connectWebSocket();
        }, delay);
    }


    const sendMessage = (message: string) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(message);
        } else {
            console.error('WebSocket is not open. Unable to send message');
            Snackbar.show({
                text: 'No connection',
                duration: Snackbar.LENGTH_SHORT,
            });
        }
    };

    useEffect(() => {
        connectWebSocket();

        //Network status monitoring
        const unsubscribeNetInfo = NetInfo.addEventListener((state) => {
            if (state.isConnected && state.isInternetReachable) {
                console.log('Internet restored');
                if (!isConnected) {
                    console.log('attempting to reconnect websocket...');
                    connectWebSocket();
                }
            } else {
                console.log('internet lost');
                if (socket) {
                    socket.close();
                }
            }
        });

        // cleanup
        return () => {
            console.log('Cleaning up websocket...');
            shouldReconnectRef.current = false;
            if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
            if (pingIntervalRef.current) clearInterval(pingIntervalRef.current);
            if (socket) socket.close();
            unsubscribeNetInfo();

        }
    }, [setState, setCameraState]);

    return (
        <webSocketContext.Provider value={{ sendMessage }}>
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