import { create } from "zustand";

type StateType={
    cameraStates:{
        [key:string]:any;
    };
    setCameraState:(key: string, value: any)=>void;
    hdmiEnable:boolean;
    setHdmiEnable:(value:boolean)=>void;
}

export const cameraStore= create<StateType>((set)=>({
    cameraStates:{
        stateW:'$WA1#',
        stateI:'$IB0#',
        stateZ:'',
        stateF:'$F_A#',
        stateS:'',
        stateH:'$H_0#',
        stateR:''
    },
    setCameraState:(key, value)=>{
        set((state)=>({
            cameraStates:{
                ...state.cameraStates,
                [key]:value,
            }
        }))
    },
    hdmiEnable:false,
    setHdmiEnable:(value)=>set({hdmiEnable:value}),
}))