import { create } from "zustand";

type StateType={
    states:{
        [key: string]: any;
    };
    setState: (key: string, value: any)=> void;
}

const useStore= create<StateType>((set)=>({
    states:{
        stateIL:'@I01#TL1',
        stateIR:'@I01#TR1',
        stateCL:'@C_5#TL1',
        stateCR:'@C_5#TR1',
        stateEL:'@E_0#TL1',
        stateER:'@E_0#TR1',
        stateLL:'@L_0#TL1',
        stateLR:'@L_0#TR1',
        stateDL:'@D_0#TL1',
        stateDR:'@D_0#TR1',
        stateFL:'@F_0#TL1',
        stateFR:'@F_0#TR1',
        stateML:'@M_0#TL1',
        stateMR:'@M_0#TR1',
        stateOL:'@O_0#TL1',
        stateOR:'@O_0#TR1',
        stateGL:'@G_0#TL1',
        stateGR:'@G_0#TR1',
        stateRL:'@R_0#TL1',
        stateRR:'@R_0#TR1',
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