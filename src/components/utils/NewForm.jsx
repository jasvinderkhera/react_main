import axios from "axios";
import {
  getEmployeeData,
  deleteData,
  updateData,
  createData,
} from "../Crud_Components";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { formSchema } from "../../schemas/index2";


function NewForm() {
const [data, setData] = useState(initialState());
const [tableData, settableData] = useState([]);

useEffect(() => {
  getData();
}, []);

function initialState() {
  return {
    name: "",
    position: "",
    department: "",
    salary: "",
    hiredate: "",
  };
};

const getData = async () => {
  const res = await getEmployeeData();
  if (res.isSuccess) {
    console.log(res.data);
    settableData(res.data);
  } else {
    toast.error(res.errMsg);
  }
};

const createEntry = async (data) => {
  const res = await createData(data);
  console.log("data",res)
  if (res.status === 201) {
    toast.success("User Created Successfully");
  }
  return res;
};

const deleteEntry = async (user_id) => {
  const res = await deleteData(user_id);
  if (res.status === 200) {
    toast.success("User Deleted Successfully");
  }
  getData();
};

const updateEntry = async (data) => {
  const res = await updateData(data);
  if (res.status === 200) {
    toast.success("User updated successfully");
  }
  return res;
};

const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
  useFormik({
    initialValues: data,
    validationSchema: formSchema,
    onSubmit: async (values, action) => {
      if (data.id) {
        const res = await updateEntry(values);
      } else {
        const res = await createEntry(values);
      }
      setData(initialState);
      await getData();
      action.resetForm();
    },
    enableReinitialize: true,
  });


  return (
    <div class='mx-5 p-5'>
      <form>
        <div class="form-group py-sm-2">
        <label>
          Name:
          <input class="form-control"
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
        </label>
        {errors.name && touched.name ? <p>{errors.name}</p> : null}
        </div>
        <div class="form-group py-sm-2">
        <label>
          Position:
          <input
          class="form-control"
            type="text"
            name="position"
            id="position"
            placeholder="Enter position"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.position}
          />
        </label>
        {errors.position && touched.position ? <p>{errors.position}</p> : null}
        </div>
        <div class="form-group py-sm-2">
        <label>
          Department:
          <input
          class="form-control"
            type="text"
            name="department"
            id="department"
            placeholder="Enter department"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.department}
          />
        </label>
        {errors.department && touched.department ? <p>{errors.department}</p> : null}
        </div>
        <div class="form-group py-sm-2">
        <label>
          Salary:
          <input
          class="form-control"
            type="number"
            name="salary"
            id="salary"
            placeholder="Enter salary"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.salary}
          />
        </label>
        {errors.salary && touched.salary ? <p>{errors.salary}</p> : null}
        </div>
        <div class="form-group py-sm-2">
        <label>
          HireDate:
          <input
          class="form-control"
            type="date"
            name="hiredate"
            id="hiredate"
            placeholder="Enter hiredate"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.hiredate}
          />
        </label>
        {errors.hiredate && touched.hiredate ? <p>{errors.hiredate}</p> : null}
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>

<div>
      <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Position</th>
          <th scope="col">Department</th>
          <th scope="col">Salary</th>
          <th scope="col">Hire Date</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>

        {tableData.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.position}</td>
              <td>{item.department}</td>
              <td>{item.salary}</td>
              <td>{item.hiredate}</td>
              <td>
                <button class="btn btn-danger" onClick={() => {deleteEntry(item.id)}}>Delete Data</button>
                <button class="btn btn-outline-secondary" onClick={() => {setData(item)}}>Update Data</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
    </div>
  );
}

export default NewForm;
