import React, { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react";
import useStore from "../Store/stateStore";

type webSocketContextType={
    message: string;
    sendMessage: (message: string)=> void;
    // sendMessage: ()=>void;
}

export const webSocketContext= createContext<webSocketContextType | undefined>(undefined)

export const WebSocketContextProvider:FC<{children: React.ReactNode}> =({children})=>{
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [message, setMessage]= useState<string>('');
    const setState= useStore((state)=> state.setState);
    useEffect(()=>{
        const ws= new WebSocket('ws://192.168.4.1:81')

        ws.onopen=()=>{
            console.log('webSocket connection opened');
        }

        ws.onmessage=(e)=>{
            const message= e.data;
            console.log(message);
            const component= message[1];
            const dome= message[5];
            let key = `state${component+dome}`
            setState(key, message);
            console.log('message send');
            
        }
        setSocket(ws)
        return()=>{
            ws.close();
        };
    },[setState]);

    const sendMessage= (message: string)=>{
        if(socket && socket.readyState === WebSocket.OPEN){
            socket.send(message)
        } else {
            console.error('WebSocket is not open. Unable to send message');
        }
    }

    return(
        <webSocketContext.Provider value={{message, sendMessage}}>
            {children}
        </webSocketContext.Provider>
    )
}

export const useWebSocket = (): webSocketContextType => {
    const context = useContext(webSocketContext);
    if (!context) {
        throw new Error('useWebSocket must be used within a WebSocketProvider');
    }
    return context;
};
