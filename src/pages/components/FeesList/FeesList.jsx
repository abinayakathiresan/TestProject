import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import FeesContext from "../../../Context/FeesContext";

const FeesList= ()=> {
    //const {students, isLoading} = useSelector((state)=>state.fees);
    const {students} = useContext(FeesContext);
    const nav = useNavigate();
    const editHandler = (item)=> {
        nav("/feescontext/edit/"+item.id);
    }
    const deleteHandler = (item)=> {
        //if(confirm("Do you want to delete"))
        
    }
    return(
        <div>{students && students.map((item)=> {
            return (
                <div className="row">
            <div>Name: {item.name}</div>
                <div>Amount:{item.amount}</div>
                
                <div><button onClick={()=>editHandler(item)}>Edit</button></div>
                <div><button onClick={()=>deleteHandler(item)}>Delete</button></div>
            </div>
            )
            
        })}</div>
    )
}
export default FeesList;