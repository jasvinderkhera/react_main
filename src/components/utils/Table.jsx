import React, { useState } from "react";
import backButton from '../common/backButton';
const employees = [
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      department: "Development",
      salary: 80000,
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Project Manager",
      department: "Management",
      salary: 95000,
    },
    {
      id: 3,
      name: "Emily Johnson",
      position: "UI/UX Designer",
      department: "Design",
      salary: 75000,
    },
    {
      id: 4,
      name: "Michael Brown",
      position: "DevOps Engineer",
      department: "Operations",
      salary: 85000,
    },
    {
      id: 5,
      name: "Sarah Davis",
      position: "Quality Assurance",
      department: "Quality",
      salary: 70000,
    },
  ]; 
function Table() {
  const[data,setData] = useState(employees);
  return (
<>
<backButton/>
<table>
  <thead>
    <tr>
      <th>S. No.</th>
      <th>Name</th>
      <th>Position</th>
      <th>Department</th>
      <th>Salary</th>
    </tr>
    </thead>
    <tbody>
{data.map(function(employee){
    return (
      <tr>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.position}</td>
        <td>{employee.department}</td>
        <td>{employee.salary}</td>
      </tr>
    )
}
)}
</tbody>
</table>
</>
  )
}
export default Table
