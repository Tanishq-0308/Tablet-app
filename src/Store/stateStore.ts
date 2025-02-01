import { create } from "zustand";

type StateType={
    states:{
        [key: string]: any;
    };
    setState: (key: string, value: any)=> void;
}

const useStore= create<StateType>((set)=>({
    states:{
        stateIL:'@I01#L',
        stateIR:'@I01#R',
        stateCL:'@C_5#L',
        stateCR:'@C_5#R',
        stateEL:'@E_0#L',
        stateER:'@E_0#R',
        stateLL:'@L_0#L',
        stateLR:'@L_0#R',
        stateDL:'@D_0#L',
        stateDR:'@D_0#R',
        stateFL:'@F_0#L',
        stateFR:'@F_0#R',
        stateML:'@M_0#L',
        stateMR:'@M_0#R',
        stateOL:'@O_0#L',
        stateOR:'@O_0#R',
        stateGL:'@G_0#L',
        stateGR:'@G_0#R',
        stateRL:'@R_0#L',
        stateRR:'@R_0#R',
    },
    setState:(key, value)=>
            {
                console.log('updating zustand', {key, value});
                
                set((state)=>({
                states:{
                    ...state.states,
                    [key]:value,
                }
            }))
            }
}))



export default useStore;