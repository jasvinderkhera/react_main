import React, { useState } from 'react';
import { useEffect } from 'react';
function ServerData() {
    const [data, setData] = useState([])
    useEffect(function () {
        fetch('http://localhost:4001/data')
        .then(function (res) {return res.json()})
        .then(function (finalRes){
            console.log("finalRes", finalRes);
            setData(finalRes)
        })
        .catch(function(error)
        {
          console.log(error.message)
        },[])
    }

    )
  return (
//     <div>
//       {data.map(function (item){
// return <div>
      
//         <h2>ID: {item.id}</h2>
//         <h2>Name: {item.name}</h2>
//         <h2>Position: {item.position}</h2>
//         <h2>Department: {item.department}</h2>
//         <h2>Salary: {item.salary}</h2>
//         <h2>HireDate: {item.hireDate}</h2>
//     </div>
    
//   })}
//   </div>
<>
<backButton/>
<table className='table'>
  <thead>
    <tr>
      <th scope='col'>ID</th>
      <th scope='col'>Name</th>
      <th scope='col'>Position</th>
      <th scope='col'>Department</th>
      <th scope='col'>Salary</th>
      <th scope='col'>Hire Date</th>
    </tr>
    </thead>
    <tbody>
{data.map(function(item){
    return (
      <tr>
        <td >{item.id}</td>
        <td>{item.fullname}</td>
        <td>{item.position}</td>
        <td>{item.department}</td>
        <td>{item.salary}</td>
        <td>{item.hiredate}</td>
      </tr>
    )
}
)}
</tbody>
</table>
</>
  )
}

export default ServerData;