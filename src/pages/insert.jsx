
import axios from "axios";
import { useState } from "react";


const Insert=()=>{
  
  const [input,setInput]=useState({});
  

  const Submit=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
  }



  const handleSubmit=()=>{
    let api="http://localhost:3000/student";
    axios.post(api,input).then((res)=>{
        alert("data save succesfully");
    })


    console.log(input);
  }
  return( 
    <>
   <h1>Application Form</h1>
   Enter roll  <input type="text" name="rollno" 
   onChange={Submit}/>
   <br />
   Enter name  <input type="text" name="name" 
   onChange={Submit}/>
   <br />

    Enter city  <input type="text" name="fees" 
   onChange={Submit}/>
   <br />


   <button onClick={handleSubmit}>submit</button>
    </>
  )
}


    export default Insert;
    