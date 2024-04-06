import React, {  useCallback, useState } from "react";
 
// click on the Increment count button, then it wont console log "Child data" in the futher rendering. 
const ExampleUseCallback = () => {    

    const [count, setCount] = useState(0);
    const handleCount = () => {
     const nCount = count + 1;
        setCount(nCount);

    } 
    
    const onParentFn = () => {
        console.log("Parent without callback ");
    }
    const onParentFnWithCallback = useCallback(() => {
        console.log("Parent With Callback ");
    },[]);
    
    return(
        <div>          
            <div>Count: {count} <button onClick={handleCount}>Increment </button></div>
            <ChildComponent   handleParentFnWithCallback= {onParentFnWithCallback} />
        </div>
      )
}

const ChildComponent = React.memo((props) => {
    const data = "Child Data";
    console.log(data); 
    const handlePassFnWithCallback  = () => {
        props.handleParentFnWithCallback();
    }
    return <div>
        <h1>Child COmponent</h1> 
        <button onClick={handlePassFnWithCallback}>Pass to Parent With Callback</button>
    </div>
});
export default React.memo(ExampleUseCallback);