import React, { useMemo, useState } from "react";
const calculateHightStudent = (name) => {
    const students = [{id: 1, name: "s1", mark: 33},{id: 2, name: "s2", mark: 233},{id: 3, name: "s3", mark: 133}];
    console.log("Calculating"+name);
    return students.find(item => {
            return item.mark > 200;
    });
}
const FeesItem = (props) => {
    let name = "test" + props.name;
    //console.log("fess item" + name);
    const [count, setCount] = useState(0);
    
    const hightStudnet =  useMemo(() => calculateHightStudent(props.name),[props.name]);

    const handleSelect = () => {
        props.handleSelectedName && props.handleSelectedName(name);
    };

    const handleCount = () => {
     const nCount = count + 1;
        setCount(nCount);

    }
    
    return(
        <div>
        <div>High mark: {hightStudnet.mark}</div>
        <div>{props.name}</div>
        <div>{props.month}</div>
        <div>{props.amount}</div>
        {props.children}
        <div><button onClick = {handleSelect}> Select </button></div>
        <div><button onClick={handleCount}>Increment {count}</button></div>
        </div>
      )
}
export default React.memo(FeesItem);