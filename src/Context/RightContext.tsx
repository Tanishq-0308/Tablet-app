import { createContext, FC, PropsWithChildren, useState } from "react";

type RightBtnEnableType = {
    greenEnabled: boolean;
    setGreenEnabled: (greenEnabled:boolean) => void;
    redEnabled: boolean;
    setRedEnabled: (redEnabled:boolean) => void;
    headSensorEnabled: boolean;
    setHeadSensorEnabled: (headSensorEnabled:boolean) => void;
    cameraEnabled: boolean;
    setCameraEnabled: (cameraEnabled: boolean) => void;
    greenValue: number;
    setGreenValue: (greenValue: number) => void;
    redValue: number;
    setRedValue: (greenValue: number) => void;
    headSensor: string;
    setHeadSensor: (headSensor: string)=> void;
    greenEnabledValue: string;
    setGreenEnabledValue: (greenEnabled:string) => void;
    redEnabledValue: string;
    setRedEnabledValue: (redEnabled:string) => void;
    cameraEnabledValue: boolean;
    setCameraEnabledValue: (cameraEnabledValue: boolean) => void;
}

export const RightBtnEnableContext = createContext<RightBtnEnableType>({
    greenEnabled: false,
    setGreenEnabled: () => { },
    redEnabled: false,
    setRedEnabled: () => { },
    headSensorEnabled: false,
    setHeadSensorEnabled: () => { },
    greenValue: 0,
    cameraEnabled: false,
    setCameraEnabled: () => {},
    setGreenValue: ()=> {},
    redValue: 0,
    setRedValue: ()=>{},
    headSensor: '@O_0#TR1',
    setHeadSensor: ()=>{},
    greenEnabledValue: '@G_0#TR1',
    setGreenEnabledValue: () => { },
    redEnabledValue: '@R_0#TL1',
    setRedEnabledValue: () => { },
    cameraEnabledValue: false,
    setCameraEnabledValue: () => {}
})

export const RightBtnEnableProvider: FC<PropsWithChildren> = ({ children }) => {
    const [greenEnabled,setGreenEnabled]= useState(false)
    const [redEnabled,setRedEnabled] = useState(false)
    const [headSensorEnabled,setHeadSensorEnabled]= useState(false)
    const [cameraEnabled, setCameraEnabled]= useState(false)
    const [greenValue, setGreenValue]= useState(0)
    const [redValue, setRedValue] = useState(0)
    const [headSensor, setHeadSensor]= useState('@O_0#TR1')
    const [greenEnabledValue,setGreenEnabledValue]= useState('@G_0#TR1')
    const [redEnabledValue,setRedEnabledValue] = useState('@R_0#TR1')
    const [cameraEnabledValue, setCameraEnabledValue]= useState(false);

    const defaultValue = {
        greenEnabled,
        setGreenEnabled,
        redEnabled,
        setRedEnabled,
        headSensorEnabled,
        setHeadSensorEnabled,
        greenValue,
        setGreenValue,
        redValue,
        setRedValue,
        headSensor,
        setHeadSensor,
        greenEnabledValue,
        setGreenEnabledValue,
        redEnabledValue,
        setRedEnabledValue,
        cameraEnabled,
        setCameraEnabled,
        cameraEnabledValue,
        setCameraEnabledValue
    }
    return (
        <RightBtnEnableContext.Provider value={defaultValue}>
            {children}
        </RightBtnEnableContext.Provider>
    )
}