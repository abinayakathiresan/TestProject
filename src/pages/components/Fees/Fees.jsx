import React, { useState } from 'react';
//stu name, month, year, amt
const Fees = () => {
  const[id, setId] = useState('');
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [amt, setAmt] = useState('');

  const handleSubmit = ()=> {

  }
  return (
    <div>
      <div>
        <h2>Student Fees Details</h2>
      </div>
      
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
       <div>
        <input type="month" onChange={(e) => setMonth(e.target.value)} />
      </div>
       <div>
        <input type="number" onChange={(e) => setAmt(e.target.value)} />
      </div>
      <div>
        <input type = "button" onSubmit = {handleSubmit} value = "Submit"/>
        </div>
        
    </div>
    
  );
};

export default Fees;
