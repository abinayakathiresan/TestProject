import React, { useMemo, useState } from "react";
const calculateHighRankStudent = (name) => {
    const students = [{id: 1, name: "s1", mark: 33},{id: 2, name: "s2", mark: 233},{id: 3, name: "s3", mark: 133}];
    console.log("Calculating High mark"+name);
    return students.find(item => {
            return item.mark > 200;
    });
}

const calculateLowRankStudent = (name) => {
    const students = [{id: 1, name: "s1", mark: 33},{id: 2, name: "s2", mark: 233},{id: 3, name: "s3", mark: 133}];
    console.log("Calculating Low mark "+name);
    return students.find(item => {
            return item.mark < 100;
    });
}
// if you click on increment button, then "Calculating High mark " wont console log after futher rendering.
const ExampleUseMemo = () => {
    
    const [count, setCount] = useState(0);
    const name = "testname";
    const hightStudentWithMemo =  useMemo(() => calculateHighRankStudent(name),[name]);
    const lowStudent =    calculateLowRankStudent(name) ;

    
    const handleCount = () => {
     const nCount = count + 1;
        setCount(nCount);

    }
    
    return(
        <div>
        <div>High mark with Memo: {hightStudentWithMemo.mark}</div>
        <div> Low Mark : {lowStudent.mark} </div>
         
        <div><button onClick={handleCount}>Increment {count}</button></div>
        </div>
      )
}
export default React.memo(ExampleUseMemo);