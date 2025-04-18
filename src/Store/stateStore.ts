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
        stateIR:'@I01#RL',
        stateCL:'',
        stateCR:'',
        stateEL:'',
        stateER:'',
        stateLL:'',
        stateLR:'',
        stateDL:'',
        stateDR:'',
        stateFL:'',
        stateFR:'',
        stateML:'',
        stateMR:'',
        stateOL:'',
        stateOR:'',
        stateGL:'',
        stateGR:'',
        stateRL:'',
        stateRR:'',
        stateNL:'',
        // stateNR:''
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