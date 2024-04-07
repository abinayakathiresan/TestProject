import React, { useCallback, useMemo, useState } from "react";
import ContactDetail from "../ContactDetail/ContactDetail";

const Contact =  ()=> {
  const [count, setCount] = useState(0);

  let address = "123, Anywhere Street, Any City, AA - 123456";
  let name = "abinaya";

  const handleCount = () => {
    let currentCount = count + 1;
    setCount(currentCount);
  }

  const welcomeFn = useCallback(()=> {
    let test = "welcome All";
    console.log("parentfn");
  }, []);

  
 
  return(
    <div>
      <div><button onClick = {handleCount}>Count</button></div> <div>Count:{count}</div>
    <ContactDetail address = {address} parFn = {welcomeFn} ></ContactDetail>
    </div>
  )
}
export default Contact;