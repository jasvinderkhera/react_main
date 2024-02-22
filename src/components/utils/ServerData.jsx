import React, { useState } from 'react';
import { useEffect } from 'react';
function ServerData() {
    const [data, setData] = useState([])
    useEffect(function () {
        fetch('http://localhost:8001/data')
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
    <div>
      {data.map(function (item){
return <div>
      
        <h2>ID: {item.id}</h2>
        <h2>Name: {item.name}</h2>
        <h2>Position: {item.position}</h2>
        <h2>Department: {item.department}</h2>
        <h2>Salary: {item.salary}</h2>
        <h2>HireDate: {item.hireDate}</h2>
    </div>
    
  })}
  </div>
  )
}

export default ServerData;

// import { useState } from "react";
// import { useEffect } from "react";

// function App() {
//     const [data, setData] = useState([])

//     useEffect(function () {
//         fetch('http://localhost:8001/data')
//             .then(function (res) { return res.json() })
//             .then(function (finalRes) {
//                 console.log("finalRes", finalRes);
//                 setData(finalRes);
//             })
//             .catch(function (error) { console.log(error.message) })
//     }, [])

//     return <section>
//         {data.map(function (item) {
//             return <>
//                 <div>{item.name}</div>
//                 <div>{item.position}</div>
//                 <div>{item.id}</div>
//             </>
//         })}
//     </section>
// }

// export default App;