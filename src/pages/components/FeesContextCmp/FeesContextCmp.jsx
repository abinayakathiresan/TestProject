import React, { useContext, useEffect, useState } from "react";

//import { addStudent, editStudent } from "../../state/Slice/feesSlice";
import { useNavigate, useParams } from "react-router-dom";
import FeesContext from "../../../Context/FeesContext";


const FeesContextCmp = ()=> {
    const[name, setName] = useState("");
    const[amount, setAmount] = useState("");
    
     
    const {setStudents, students } = useContext(FeesContext);
    const {action, id} = useParams();
    const nav = useNavigate();
    //const {students, isLoading} = useSelector((state)=>state.fees);
    let studentObj = students && students?.find((item)=> {
        return item.id == id;
    })
    useEffect(()=>{
        setName(studentObj?.name);
        setAmount(studentObj?.amount);
    },[studentObj]);

    const handleSubmit = ()=> {
        if(action == "add")
        {
            const id = Math.random(9,999);
            let stuObj = {id: id, name:name, amount: amount};
            //dispatch(addStudent(stuObj));
            //dispatch(stuObj)
            //addStudent(stuObj);

            let copyStudents = [...students];
            copyStudents.push(stuObj);
            setStudents(copyStudents);
            
        }
        if(action == "edit"){
           let existingStudent = {...studentObj,name,amount};
           //dispatch(editStudent(existingStudent));
           //editStudent(existingStudent);
           let copyStudents = [...students];
            copyStudents = copyStudents.map((item)=> {
                return (item.id == existingStudent.id ? existingStudent : item);
            });
            setStudents(copyStudents);
        }
        handleReset();
        nav("/feeslist");
       
        
    }
    const handleReset = ()=> {
        setName("");
        setAmount("");
    }
   
    
        
    
   
    return(
        <div>
            <div>Name:<input type = "text" value = {name} onChange = {(e)=>setName(e.target.value)}></input></div>
            <div>Amount:<input type = "number" value = {amount} onChange = {(e)=>setAmount(e.target.value)}></input></div>
            <div><button onClick={handleSubmit}>Submit</button></div>
        </div>
    )
}
export default FeesContextCmp;