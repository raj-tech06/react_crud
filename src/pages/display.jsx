import axios from "axios";
import { useState , useEffect } from "react";




const Display=()=>{
const [mydata, setMydata]= useState([]);
const loadData=async()=>{
  let api="http://localhost:3000/student";
  const response=await axios.get(api);
  console.log(response.data);
  setMydata(response.data);
}


useEffect(()=>{
  loadData();
},[]);

const ans=mydata.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.rollno}</td>
      <td>{key.name}</td>
      <td>{key.fees}</td>

    </tr>
    </>
  )
})

    return(
        <>
        <h1>this is display</h1>


        <table width="500" bgcolor="red">
          <th>roll</th>
          <th>name</th>
          <th>fees</th>
        </table>
        {ans}
        </>
      )
    }
    export default Display;
    