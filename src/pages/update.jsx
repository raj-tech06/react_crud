
import axios from "axios";
import { useState , useEffect } from "react";

import editimg from "../img/edit.png";
import delimg from "../img/delete.png";

const Update=()=>{
  
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

const mydel=async(id)=>{
const api=`http://localhost:3000/student/${id}`
 await axios.delete(api);
loadData();
  alert("edit");
}

const myedit=(id)=>{
 

}


// // without async ke --------delete karna -----
// const mydel=(id)=>{
// const api=`http://localhost:3000/student/${id}`;
// axios.delete(api);
// loadData();
//   alert("edit");
// }

const ans=mydata.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.empno}</td>
      <td>{key.name}</td>
      <td>{key.designation}</td>
      <td>{key.salary}</td>
      <td>
      <img src={editimg} width="20" height="20" onClick={()=>{myedit(key.id)}} />

      </td>
      <td>
      <img src={delimg} width="20" height="20" onClick={()=>{mydel(key.id)}} />

      </td>
    </tr>
    </>
  )
})

    return(
        <>
        <h1>this is display</h1>

        <table width="500"  border="1" bgcolor="yellow">
        <tr>
          <th>roll</th>
          <th>name</th>
          <th>designation</th>
          <th>salary</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
        {ans}

        </table>
        </>
      )
    }
    export default Update;
    





















    // //comlete by chat=================


// import axios from "axios";
// import { useState, useEffect } from "react";

// import editimg from "../img/edit.png";
// import delimg from "../img/delete.png";

// const Update = () => {
//   const [mydata, setMydata] = useState([]);
//   const [editData, setEditData] = useState({
//     id: "",
//     empno: "",
//     name: "",
//     designation: "",
//     salary: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   const loadData = async () => {
//     let api = "http://localhost:3000/student";
//     const response = await axios.get(api);
//     console.log(response.data);
//     setMydata(response.data);
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const mydel = async (id) => {
//     const api = `http://localhost:3000/student/${id}`;
//     await axios.delete(api);
//     loadData();
//     alert("Deleted");
//   };

//   const myedit = (id) => {
//     const studentToEdit = mydata.find((student) => student.id === id);
//     setEditData(studentToEdit);
//     setIsEditing(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditData((prev) => ({ ...prev, [name]: value }));
//   };

//   const updateStudent = async () => {
//     const api = `http://localhost:3000/student/${editData.id}`;
//     await axios.put(api, editData);
//     loadData();
//     setIsEditing(false);
//     alert("Updated Successfully");
//   };

//   const ans = mydata.map((key) => {
//     return (
//       <tr key={key.id}>
//         <td>{key.empno}</td>
//         <td>{key.name}</td>
//         <td>{key.designation}</td>
//         <td>{key.salary}</td>
//         <td>
//           <img
//             src={editimg}
//             width="20"
//             height="20"
//             onClick={() => myedit(key.id)}
//           />
//         </td>
//         <td>
//           <img
//             src={delimg}
//             width="20"
//             height="20"
//             onClick={() => mydel(key.id)}
//           />
//         </td>
//       </tr>
//     );
//   });

//   return (
//     <>
//       <h1>This is the display</h1>

//       {isEditing && (
//         <div>
//           <h2>Edit Student</h2>
//           <form>
//             <label>
//               Emp No:
//               <input
//                 type="text"
//                 name="empno"
//                 value={editData.empno}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <br />
//             <label>
//               Name:
//               <input
//                 type="text"
//                 name="name"
//                 value={editData.name}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <br />
//             <label>
//               Designation:
//               <input
//                 type="text"
//                 name="designation"
//                 value={editData.designation}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <br />
//             <label>
//               Salary:
//               <input
//                 type="text"
//                 name="salary"
//                 value={editData.salary}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <br />
//             <button type="button" onClick={updateStudent}>
//               Update
//             </button>
//           </form>
//         </div>
//       )}

//       <table width="500" border="1" bgcolor="yellow">
//         <thead>
//           <tr>
//             <th>Roll</th>
//             <th>Name</th>
//             <th>Designation</th>
//             <th>Salary</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>{ans}</tbody>
//       </table>
//     </>
//   );
// };

// export default Update;

