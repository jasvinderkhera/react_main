import { useEffect, useState } from "react";
import axios from "axios";

function ServerData() {
  const [data, setData] = useState([]);
  const [tableData, settableData] = useState({
    id: "",
    name: "",
    position: "",
    department: "",
    salary: "",
    hiredate: "",
  });

  useEffect(() => {
    getEmployeeData();
  }, []);

  const getEmployeeData = async () => {
    try {
      const response = await axios.get("http://localhost:4001/form_data");
      console.log("data", response.data);
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onChangeHandler = (event) => {
    settableData({ ...tableData, [event.target.name]: event.target.value });
  };

  const DeleteData = async (row_id) => {
    try {
      const restData = await axios.delete(
        `http://localhost:4001/form_data/${row_id}`
      );
      getEmployeeData();
      alert("Data Deleted Successfully");
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const updateData = async () => {
    try {
      const updatedData = await axios.put(
        `http://localhost:4001/form_data/${tableData.id}`,
        {
          name: tableData.name,
          position: tableData.position,
          department: tableData.department,
          salary: tableData.salary,
          hiredate: tableData.hiredate,
        }
      );
      alert("Data Updated")
      getEmployeeData();
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const onSubmit = async () => {
    if (tableData.id) {
      await updateData();
    } else {
      try {
        const createData = await axios.post("http://localhost:4001/form_data", {
          name: tableData.name,
          position: tableData.position,
          department: tableData.department,
          salary: tableData.salary,
          hiredate: tableData.hiredate,
        });
        getEmployeeData();
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            onChange={onChangeHandler}
            value={tableData.name}
          />
        </label>
        <label>
          Position:
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Enter Position"
            onChange={onChangeHandler}
            value={tableData.position}
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            id="department"
            name="department"
            placeholder="Enter department"
            onChange={onChangeHandler}
            value={tableData.department}
          />
        </label>
        <label>
          Salary:
          <input
            type="number"
            id="salary"
            name="salary"
            placeholder="Enter salary"
            onChange={onChangeHandler}
            value={tableData.salary}
          />
        </label>
        <label>
          Hire Date:
          <input
            type="date"
            id="hiredate"
            name="hiredate"
            placeholder="Enter hiredate"
            onChange={onChangeHandler}
            value={tableData.hiredate}
          />
        </label>
        <button type="button" onClick={onSubmit}>
          Submit
        </button>
      </form>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Department</th>
          <th>Salary</th>
          <th>HireDate</th>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.position}</td>
            <td>{item.department}</td>
            <td>{item.salary}</td>
            <td>{item.hiredate}</td>
            <td>
              <button
                onClick={() => {
                  DeleteData(item.id);
                }}
              >
                Delete Data
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  settableData(item);
                }}
              >
                Update Data
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default ServerData;
