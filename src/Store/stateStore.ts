import { create } from "zustand";

type StateType={
    states:{
        [key: string]: any;
    };
    setState: (key: string, value: any)=> void;
}

const useStore= create<StateType>((set)=>({
    states:{
        stateIL:'@I01#TL',
        stateIR:'@I01#TR',
        stateCL:'@C_5#TL',
        stateCR:'@C_5#TR',
        stateEL:'@E_0#TL',
        stateER:'@E_0#TR',
        stateLL:'@L_0#TL',
        stateLR:'@L_0#TR',
        stateDL:'@D_0#TL',
        stateDR:'@D_0#TR',
        stateFL:'@F_0#TL',
        stateFR:'@F_0#TR',
        stateML:'@M_0#TL',
        stateMR:'@M_0#TR',
        stateOL:'@O_0#TL',
        stateOR:'@O_0#TR',
        stateGL:'@G_0#TL',
        stateGR:'@G_0#TR',
        stateRL:'@R_0#TL',
        stateRR:'@R_0#TR',
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