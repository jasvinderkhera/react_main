import { useState } from "react";
import BackButton from "./common/backButton";
import axios from "axios";

export function Form1() {
  return (
    <>
      <BackButton />
      <h1>form1</h1>
    </>
  );
}

export function Form2() {
  return (
    <>
      <BackButton />
      <h1>form2</h1>
    </>
  );
}

export function Form() {
  const [data, setData] = useState(initialState());

  function initialState(){
    return {
      fullname: "",
      id: "",
      position: "",
      department: "",
      salary: "",
      hiredate: ""
    }
  }

  function onChangeHandler(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

 async function submit() {
    console.log("data", data);
    try{
      await axios.post("http://localhost:4001/data", {
        fullname: data.fullname,
        id: data.id,
        position: data.position,
        department: data.department,
        salary: data.salary,
        hiredate: data.hiredate,
      });
    } catch (error) {
      console.log("error", error.res);
    }

    setData(initialState());
  }

  return (
    <>
      <BackButton />
      <table>
        <tr>
          <td>
        <label for="fullname">fullname </label>
        </td>

        <td>
        <input
          name="fullname"
          id="fullname"
          placeholder="enter your full name"
          value={data.fullname}
          onChange={onChangeHandler}
        />
        </td>
        </tr>

<tr>
  <td>
        <label for="id">ID </label>
        </td>
        <td>
        <input type="number"
          name="id"
          id="id"
          placeholder="enter your ID"
          value={data.id}
          onChange={onChangeHandler}
        />
        </td>
        </tr>

        <tr>
          <td>
        <label for="position">position </label>
        </td>
        <td>
        <input
          name="position"
          id="position"
          placeholder="enter your position"
          value={data.position}
          onChange={onChangeHandler}
        />
        </td>
       </tr>

       <tr>
        <td>
        <label for="department">department </label>
        </td>
        <td>
        <input
          name="department"
          id="department"
          placeholder="enter your department"
          value={data.department}
          onChange={onChangeHandler}
        />
        </td>
        </tr>

        <tr>
          <td>
        <label for="salary">salary </label>
        </td>
        <td>
        <input
          name="salary"
          id="salary"
          placeholder="enter your salary"
          value={data.salary}
          onChange={onChangeHandler}
        />
        </td>
       </tr>

       <tr>
        <td>
        <label for="hiredate">Hiredate </label>
        </td>
        <td>
        <input type="date"
          name="hiredate"
          id="hiredate"
          placeholder="enter your hiredate"
          value={data.hiredate}
          onChange={onChangeHandler}
        />
        </td>
        </tr>

        <tr>
          <td colSpan={2}>
        <button type="submit" onClick={submit}>
          Submit
        </button>
        </td>
        <td></td>
        </tr>
      </table>
    </>
  );
}
