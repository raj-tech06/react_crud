import axios from "axios";
import { useState } from "react";

const Search=()=>{
const [empno, setEmpno]=useState("");
const [mydata, setMydata]=useState([]);

const submit=async()=>{
    let api=`http://localhost:3000/student/?empno=${empno}`;
    const response=await axios.get(api);
    setMydata(response.data);
}

const ans=mydata.map((key)=>{
return(
    <>
    <tr>
        <td>{key.empno}</td>
        <td>{key.name}</td>
        <td>{key.designation}</td>
        <td>{key.salary}</td>
    </tr>
    
    </>
)
})


    return(
        <>
        <h1>this is search</h1>

        enter empno: <input type="text" value={empno} onChange={(e)=>{setEmpno(e.target.value)}} />
        <button onClick={submit}>search</button>

        <hr />

    <br />
    
        <table width="500"  border="2px solid red" bgcolor="red">
        <tr>
          <th>roll</th>
          <th>name</th>
          <th>designation</th>
          <th>salary</th>
        </tr>
        {ans}

        </table>
        </>
      )
    }
    export default Search;
    