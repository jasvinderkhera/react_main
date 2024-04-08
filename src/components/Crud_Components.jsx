import axios from "axios";

export const getEmployeeData = async () => {
  try {
    const response = await axios.get("http://localhost:4001/form_data");
    console.log("Data", response.data);
    return { isSuccess: true, data: response.data, errMsg: "" };
  } catch (error) {
    console.log("Error", error);
    return {
      isSuccess: false,
      data: null,
      errMsg: error.message ?? "Something went wrong",
    };
  }
};

export const deleteData = async (row_id) => {
  try {
    const response = await axios.delete(
      `http://localhost:4001/form_data/${row_id}`
    );
    return response;
  } catch (error) {
    console.log("Error", error.message);
  }
};

export const updateData = async (data) => {
  try {
    const response = await axios.put(
      `http://localhost:4001/form_data/${data.id}`,
      {
        name: data.name,
        position: data.position,
        department: data.department,
        salary: data.salary,
        hiredate: data.hiredate,
      }
    );
    return response;
  } catch (error) {
    console.log("Error", error.message);
  }
};

export const createData = async (data) => {
  try {
    const response = await axios.post("http://localhost:4001/form_data", {
      name: data.name,
      position: data.position,
      department: data.department,
      salary: data.salary,
      hiredate: data.hiredate,
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
