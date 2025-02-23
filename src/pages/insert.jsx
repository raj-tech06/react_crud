
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



  // const handleSubmit=()=>{
  //   let api="http://localhost:3000/student";
  //   axios.post(api,input).then((res)=>{
  //       alert("data save succesfully");
  //   })
  //  console.log(input);
  // }


  const handleSubmit=async()=>{
    let api="http://localhost:3000/student";
  
    const response= await axios.post(api,input);
    alert("data save")
    console.log(response);

    console.log(input);
  }
  return( 
    <>
   <h1>Application Form</h1>
   Enter Empno  <input type="text" name="empno" 
   onChange={Submit}/>
   <br />
   Enter name  <input type="text" name="name" 
   onChange={Submit}/>
   <br />


   Enter designation  <input type="text" name="designation" 
   onChange={Submit}/>
   <br />
    Enter salary  <input type="text" name="salary" 
   onChange={Submit}/>
   <br />


   <button onClick={handleSubmit}>submit</button>
    </>
  )
}


    export default Insert;
    