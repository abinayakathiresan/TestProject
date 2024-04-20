import React, { useState } from "react";
import Header from "../Header/Header";
import RouteCom from "../../../RouteCom";
import FeesContext  from "../../../Context/FeesContext";

const Layout =  ()=> {
  const[students, setStudents] = useState([{id:1, name:"abinaya", amount: 700}]);
 
  return(
    <div>
      <div><Header/></div>
      <div><FeesContext.Provider value = {{students,setStudents}}><RouteCom/></FeesContext.Provider></div>
    </div>
  )
}
export default Layout;