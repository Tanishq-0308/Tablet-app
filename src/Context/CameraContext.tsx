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
    setStablizerEnable:()=>{}
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
        setStablizerEnable
    }
    return(
        <CameraContext.Provider value={defaultValue}>
            {children}
        </CameraContext.Provider>
    )
}