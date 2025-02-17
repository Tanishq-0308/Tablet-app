import { createContext, FC, PropsWithChildren, useState } from "react";

type RightBtnEnableType = {
    greenEnabled: boolean;
    setGreenEnabled: (greenEnabled:boolean) => void;
    redEnabled: boolean;
    setRedEnabled: (redEnabled:boolean) => void;
    headSensorEnabled: boolean;
    setHeadSensorEnabled: (headSensorEnabled:boolean) => void;
    greenValue: number;
    setGreenValue: (greenValue: number) => void;
    redValue: number;
    setRedValue: (greenValue: number) => void;
    headSensor: string;
    setHeadSensor: (headSensor: string)=> void;
    greenEnabledValue: boolean;
    setGreenEnabledValue: (greenEnabled:boolean) => void;
    redEnabledValue: boolean;
    setRedEnabledValue: (redEnabled:boolean) => void;
    cameraEnabled: boolean;
    setCameraEnabled: (cameraEnabled: boolean) => void;
}

export const RightBtnEnableContext = createContext<RightBtnEnableType>({
    greenEnabled: false,
    setGreenEnabled: () => { },
    redEnabled: false,
    setRedEnabled: () => { },
    headSensorEnabled: false,
    setHeadSensorEnabled: () => { },
    greenValue: 0,
    setGreenValue: ()=> {},
    redValue: 0,
    setRedValue: ()=>{},
    headSensor: '@O_0#TR',
    setHeadSensor: ()=>{},
    greenEnabledValue: false,
    setGreenEnabledValue: () => { },
    redEnabledValue: false,
    setRedEnabledValue: () => { },
    cameraEnabled: false,
    setCameraEnabled: () => {},
})

export const RightBtnEnableProvider: FC<PropsWithChildren> = ({ children }) => {
    const [greenEnabled,setGreenEnabled]= useState(false)
    const [greenEnabledValue,setGreenEnabledValue]= useState(false)
    const [redEnabled,setRedEnabled] = useState(false)
    const [redEnabledValue,setRedEnabledValue] = useState(false)
    const [headSensorEnabled,setHeadSensorEnabled]= useState(false)
    const [greenValue, setGreenValue]= useState(0)
    const [redValue, setRedValue] = useState(0)
    const [headSensor, setHeadSensor]= useState('@O_0#TR')
    const [cameraEnabled, setCameraEnabled]= useState(false)

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
        setCameraEnabled
    }
    return (
        <RightBtnEnableContext.Provider value={defaultValue}>
            {children}
        </RightBtnEnableContext.Provider>
    )
}