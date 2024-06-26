import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/components/Contact/Contact";
import Home from "./pages/components/Home/Home";
import Fees from "./pages/components/Fees/Fees";
import ExampleUseMemo from "./pages/components/ExampleUseMemo/ExampleUseMemo";
import ExampleUseCallback from "./pages/components/ExampleUseCallback/ExampleUseCallback";
import CounterContextFn from "./pages/components/CouterContext/CouterContextFn";
import FeesContext from "./Context/FeesContext";
import FeesContextCmp from "./pages/components/FeesContextCmp/FeesContextCmp";
import FeesList from "./pages/components/FeesList/FeesList";


const RouteCom = ()=> {
  return(
<Routes>
    
     <Route path = "/fees" element = {<Fees/>} exact = {true}/>
     <Route path = "/example-use-memo" element = {<ExampleUseMemo/>} exact = {true}/>
     <Route path = "/example-use-callback" element = {<ExampleUseCallback/>} exact = {true}/>
     
      <Route path = "/contact" element = {<Contact/>} exact = {true}/>
      <Route path = "/context" element = {<CounterContextFn/>} exact = {true}/>
      <Route path="/feescontext/:action/:id" element={< FeesContextCmp/>} exact={true} />
        <Route path="/feescontext/:action" element={< FeesContextCmp/>} exact={true} />
        
        <Route path="/feeslist" element={< FeesList/>} exact={true} />
      <Route path = "/" element = {<Home/>} exact = {true}/>
      <Route path="*" element={<div>Page not found</div>} />
  </Routes>
  )
  
}
export default RouteCom;