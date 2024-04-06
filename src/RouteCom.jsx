import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/components/Contact/Contact";
import Home from "./pages/components/Home/Home";
import Fees from "./pages/components/Fees/Fees";


const RouteCom = ()=> {
  return(
<Routes>
    
     <Route path = "/fees" element = {<Fees/>} exact = {true}/>
      <Route path = "/contact" element = {<Contact/>} exact = {true}/>
      <Route path = "/" element = {<Home/>} exact = {true}/>
      <Route path="*" element={<div>Page not found</div>} />
  </Routes>
  )
  
}
export default RouteCom;