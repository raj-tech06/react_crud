import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

const Editdata=()=>{
const {id}=useParams();

const [empdata, setEmpdata]= useState({});

const loadData=async()=>{
  let api=`http://localhost:3000/student/${id}`;
  const response=await axios.get(api);
  console.log(response.data);
  setEmpdata(response.data);
}

useEffect(()=>{
  loadData();
},[]);

const Submitinput=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  setEmpdata(values=>({...values, [name]:value}));
  console.log(empdata);
}
const handleSubmit=async()=>{
  let api = `http://localhost:3000/student/${id}`;
  const response=await axios.put(api,empdata);
  alert("data updated");
  console.log(response);
  console.log(empdata);
}

    return(
        <>
        <h1>this is updateing page {id}</h1>

        Enter Empno  <input type="text" name="empno" value={empdata.empno}  onChange={Submitinput}/>
      
        <br />
        Enter name  <input type="text" name="name" value={empdata.name} onChange={Submitinput}/>
        <br />


        Enter designation  <input type="text" name="designation" value={empdata.designation} onChange={Submitinput}/>
        <br />
      
        Enter salary  <input type="text" name="salary" value={empdata.salary} onChange={Submitinput}/>
        <br />


        <button onClick={handleSubmit}>submit</button>
    </>

      )
    }
    export default Editdata;
    