import React from "react";

const ContactDetail = (props) => {
    console.log("contactDetail");
    return <div>
    {props.address}
    {props.parFn}
    
  </div>
}
export default React.memo(ContactDetail);