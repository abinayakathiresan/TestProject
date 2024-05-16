import React, { useCallback, useState } from 'react';
import FeesItem from '../FeesItem/FeesItem';
import { TextField } from '@mui/material';
//stu name, month, year, amt
const Fees = () => {
  const[stuId, setId] = useState('');
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [amt, setAmt] = useState('');
  const [stuDetails, setStuDetails] = useState([]);
  const [selectedName,setselectedName] = useState("nothing");

  const handleSubmit = ()=> {
    let id = Math.random(9,999);
    let stuObj = {id:id, name:name, month:month, amt:amt};
    let newStuDetails = [...stuDetails];
    newStuDetails.push(stuObj);
    setStuDetails(newStuDetails); 
    handleReset();
  }

  const handleSelectedName = (name) =>
  {
setselectedName(name);
  } ;


  const testFn = useCallback(() =>
  {
console.log("testtttttttt");
  },[]);

  const testFn2 = () =>
  {
console.log("testtttttttt");
  };

  const mymonth = "2222";
  const handleReset = () => {
    setId("");
    setName("");
    setMonth("");
    setAmt("");
  }
  return (
    <div>
      <div>
        <h2>Student Fees Details</h2>
      </div>
      <div>
        {selectedName}
      </div>
      <FeesItem name = {"test"} month = "2020" amount = {123}>School Name: TVS</FeesItem>
      <FeesItem name = {"demo"} month = "2020" amount = {123} handleSelectedName = {testFn}>School Name: TVS</FeesItem>
      <FeesItem name = {"memm"} month = {mymonth} amount = {123} handleSelectedName = {testFn}>School Name: TVS</FeesItem>

      <div>
        <input type = "hidden" value = {stuId}/>
      </div>
      <div>
      <TextField id="outlined-basic" label = "name" variant="outlined" onChange={(e) => setName(e.target.value)} value = {name}/>
      </div>
       <div>
        <input type="month" onChange={(e) => setMonth(e.target.value)} value = {month}/>
      </div>
       <div>
        <input type="number" onChange={(e) => setAmt(e.target.value)} value = {amt}/>
      </div>
      <div>
        <input type = "button" onClick = {handleSubmit} value = "Submit"/>
        </div>
      <div>
        <div>Name</div>
        <div>Month</div>
        <div>Amount</div>
      </div> 
      {stuDetails.map((item)=>{
        //return <FeesItem name = {item.name} month = {item.month} amount = {item.amt} key = {item.name} handleSelectedName = {handleSelectedName}></FeesItem>

      })}
      
    </div>
    
  );
};

export default Fees;
