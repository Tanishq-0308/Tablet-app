import { createContext, FC, PropsWithChildren, useState } from "react";

type BtnEnableType = {
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
    sdiEnable:boolean;
    setSdiEnable:(sdiEnable:boolean)=>void;
    analogEnable:boolean;
    setAnalogEnable:(analogEnable:boolean)=>void;
    syncEnable: boolean;
    setSyncEnable: (syncEnable: boolean)=>void;
    lampEnable: boolean;
    setlampEnable: (lampEnable: boolean)=> void;
    focusEnable: boolean;
    setFocusEnable: (focusEnable: boolean)=> void;
}

export const BtnEnableContext = createContext<BtnEnableType>({
    greenEnabled: false,
    setGreenEnabled: () => { },
    redEnabled: false,
    setRedEnabled: () => { },
    headSensorEnabled: false,
    setHeadSensorEnabled: () => { },
    cameraEnabled: false,
    setCameraEnabled: () => {},
    greenValue: 0,
    setGreenValue: ()=> {},
    redValue: 0,
    setRedValue: ()=>{},
    headSensor: '@O_0#TL0',
    setHeadSensor: ()=>{},
    greenEnabledValue: '@G_0#TL0',
    setGreenEnabledValue: () => { },
    redEnabledValue: '@R_0#TL0',
    setRedEnabledValue: () => { },
    cameraEnabledValue: false,
    setCameraEnabledValue: () => {},
    sdiEnable:false,
    setSdiEnable:()=>{},
    analogEnable:false,
    setAnalogEnable:()=>{},
    syncEnable:false,
    setSyncEnable:()=>{},
    lampEnable: true,
    setlampEnable:()=>{},
    focusEnable: false,
    setFocusEnable: ()=>{}
})

export const BtnEnableProvider: FC<PropsWithChildren> = ({ children }) => {
    const [greenEnabled,setGreenEnabled]= useState(false)
    const [redEnabled,setRedEnabled] = useState(false)
    const [headSensorEnabled,setHeadSensorEnabled]= useState(false)
    const [cameraEnabled, setCameraEnabled]= useState(false)
    const [greenValue, setGreenValue]= useState(0)
    const [redValue, setRedValue] = useState(0)
    const [headSensor, setHeadSensor]= useState('@O_0#TL0')
    const [greenEnabledValue,setGreenEnabledValue]= useState('@G_0#TL0')
    const [redEnabledValue,setRedEnabledValue] = useState('@R_0#TL0')
    const [cameraEnabledValue, setCameraEnabledValue]= useState(false);
    const [sdiEnable, setSdiEnable]= useState(false);
    const [analogEnable, setAnalogEnable]= useState(false);
    const [syncEnable, setSyncEnable]= useState(false);
    const [lampEnable, setlampEnable]= useState(true);
    const [focusEnable, setFocusEnable]= useState(false);

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
        setCameraEnabledValue,
        sdiEnable,
        setSdiEnable,
        analogEnable,
        setAnalogEnable,
        syncEnable,
        setSyncEnable,
        lampEnable, 
        setlampEnable,
        focusEnable,
        setFocusEnable
    }
    return (
        <BtnEnableContext.Provider value={defaultValue}>
            {children}
        </BtnEnableContext.Provider>
    )
}