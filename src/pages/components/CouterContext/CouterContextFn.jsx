import React, { createContext, useState } from "react";

export const CouterContext = createContext("");

const CounterContextFn = () => {

    const[count, setCounter] = useState(0);
    return(
        <CouterContext.Provider value = {{count, setCounter}}>
        <CounterDisplay/>
    </CouterContext.Provider>
    )
    
}

const CounterDisplay = ()=> {
    const counterValue = React.useContext(CouterContext);
   return <div>Count: {counterValue.count}  <CounterInc/></div>
}

const CounterInc = ()=> {
   
    const counterValue = React.useContext(CouterContext);
    const handleCounter = ()=>{
        let newCount = counterValue.count + 1;
        counterValue.setCounter(newCount);
    }

    return <div>
        <button onClick = {handleCounter}>Increment</button> <CounterDec/>
    </div>
}

const CounterDec = ()=> {
    let count = 1;
    const counterValue = React.useContext(CouterContext);
    const handleCounter = ()=>{
        if(counterValue.count > 0) {
            let newCount = counterValue.count - 1;
        counterValue.setCounter(newCount);
        }
        
    }

    return <div>
        <button onClick = {handleCounter}>Decrement</button>
    </div>
}

export default CounterContextFn;