import { useEffect, useState } from "react";
import axios from "axios";

function Form_submit() {
  const [form_data, setform_Data] = useState(initialstate());
  const [table_data, settable_Data] = useState([]);

  useEffect(function () {
    getdata();
  }, []);

  function getdata() {
    fetch("http://localhost:4001/form_data")
      .then(function (res) {
        return res.json();
      })
      .then(function (finalres) {
        settable_Data(finalres);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function initialstate() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
    };
  }
  function onChangeHandler(event) {
    let key = event.target.name;
    setform_Data({ ...form_data, [key]: event.target.value });
  }

  async function submit() {
    try {
      await axios.post("http://localhost:4001/form_data", {
        id: form_data.id,
        name: form_data.name,
        position: form_data.position,
        department: form_data.department,
        salary: form_data.salary,
        hiredate: form_data.hiredate
      });
    } catch (error) {
      console.log("error", error.message);
      return error;
    }
    setform_Data(initialstate());
    getdata();
  }

  return (
    <section>
      <div>
        <form autoComplete="on" />
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="ID">ID</label>
              </td>
              <td>
                <input
                  type="number"
                  value={form_data.id}
                  id="id"
                  name="id"
                  onChange={onChangeHandler}
                ></input>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="name">Name</label>
              </td>
              <td>
                <input
                  type="text"
                  value={form_data.name}
                  id="name"
                  name="name"
                  onChange={onChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="position">Position</label>
              </td>
              <td>
                <input
                  type="text"
                  value={form_data.position}
                  id="position"
                  name="position"
                  onChange={onChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="department">Department</label>
              </td>
              <td>
                <input
                  type="text"
                  value={form_data.department}
                  id="department"
                  name="department"
                  onChange={onChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="salary">Salary</label>
              </td>
              <td>
                <input
                  type="number"
                  value={form_data.salary}
                  id="salary"
                  name="salary"
                  onChange={onChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="hiredate">HireDate</label>
              </td>
              <td>
                <input
                  type="date"
                  value={form_data.hiredate}
                  id="hiredate"
                  name="hiredate"
                  onChange={onChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" onClick={submit}>
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        {/* {!!table_data.length &&
          table_data.map(function (item) {
            return (
              <>
                <div>{item.id}</div>
                <div>{item.firstName}</div>
                <div>{item.lastName}</div>
                <div>{item.email}</div>
                <div>{item.mobile}</div>
              </>
            );
          })} */}
          <table className='table'>
  <thead >
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
{table_data.map(function(item){
    return (
      <tr>
        <td >{item.id}</td>
        <td>{item.name}</td>
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
      </div>
    </section>
  );
}

export default Form_submit;