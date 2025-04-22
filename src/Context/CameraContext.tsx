import { createContext, FC, PropsWithChildren, useState } from "react";

type CameraType={
    wAutoEnable: boolean;
    setWAutoEnable:(wAutoEnable: boolean)=> void;
    wIndoorEnable: boolean;
    setWIndoorEnbale: (wIndoorEnable: boolean)=> void;
    wOutdoorEnable: boolean;
    setWOutdoorEnbale: (wOutdoorEnbale: boolean)=> void;
    wManualEnable: boolean;
    setWManualEnbale: (wManualEnable: boolean)=>void;
    irisEnable:boolean;
    setIrisEnable:(irisEnable: boolean)=>void;
    fAutoEnable:boolean;
    setFAutoEnbale:(fAutoEnable: boolean)=> void;
    fOnePushEnable:boolean;
    setFOnePushEnbale:(fOnePushEnable:boolean)=>void;
    freezeEnable:boolean;
    setFreezeEnable:(freezeEnable: boolean)=> void;
    stablizerEnable:boolean;
    setStablizerEnable:(stablizerEnable: boolean)=> void;
    powerEnable:boolean;
    setPowerEnable:(powerEnbale: boolean)=> void;
    analogIrisEnable:boolean;
    setAnalogIrisEnable:(analogIrisEnable: boolean)=> void;
    analogPowerEnable: boolean;
    setAnalogPowerEnable: (analogPowerEnable: boolean)=> void;
    flickerEnable: boolean;
    setFlickerEnable: (flickerEnable: boolean)=> void;
}

export const CameraContext= createContext<CameraType>({
    wAutoEnable: true,
    setWAutoEnable: ()=> {},
    wIndoorEnable: false,
    setWIndoorEnbale:()=> {},
    wOutdoorEnable: false,
    setWOutdoorEnbale:()=>{},
    wManualEnable: false,
    setWManualEnbale:()=>{},
    irisEnable: false,
    setIrisEnable: ()=>{},
    fAutoEnable:true,
    setFAutoEnbale:()=>{},
    fOnePushEnable:false,
    setFOnePushEnbale:()=>{},
    freezeEnable:false,
    setFreezeEnable:()=>{},
    stablizerEnable: false,
    setStablizerEnable:()=>{},
    powerEnable: false,
    setPowerEnable: ()=>{},
    analogIrisEnable: false,
    setAnalogIrisEnable: ()=>{},
    analogPowerEnable: false,
    setAnalogPowerEnable: ()=>{},
    flickerEnable: false,
    setFlickerEnable: ()=>{},
})

export const CameraContextProvider:FC<PropsWithChildren>=({children})=>{
    const [wAutoEnable, setWAutoEnable]= useState(true);
    const [wIndoorEnable, setWIndoorEnbale]= useState(false);
    const [wOutdoorEnable, setWOutdoorEnbale]= useState(false);
    const [wManualEnable, setWManualEnbale]= useState(false);
    const [irisEnable, setIrisEnable]= useState(false);
    const [fAutoEnable, setFAutoEnbale]= useState(true);
    const [fOnePushEnable, setFOnePushEnbale]= useState(false);
    const [freezeEnable, setFreezeEnable]= useState(false);
    const [stablizerEnable, setStablizerEnable]= useState(false);
    const [powerEnable, setPowerEnable]= useState(false);
    const [analogIrisEnable, setAnalogIrisEnable]= useState(false);
    const [analogPowerEnable, setAnalogPowerEnable]= useState(false);
    const [flickerEnable, setFlickerEnable]= useState(false);

    const defaultValue={
        wAutoEnable,
        setWAutoEnable,
        wIndoorEnable,
        setWIndoorEnbale,
        wOutdoorEnable,
        setWOutdoorEnbale,
        wManualEnable,
        setWManualEnbale,
        irisEnable, 
        setIrisEnable,
        fAutoEnable,
        setFAutoEnbale,
        fOnePushEnable,
        setFOnePushEnbale,
        freezeEnable,
        setFreezeEnable,
        stablizerEnable,
        setStablizerEnable,
        powerEnable,
        setPowerEnable,
        analogIrisEnable,
        setAnalogIrisEnable,
        analogPowerEnable,
        setAnalogPowerEnable,
        flickerEnable, 
        setFlickerEnable
    }
    return(
        <CameraContext.Provider value={defaultValue}>
            {children}
        </CameraContext.Provider>
    )
}