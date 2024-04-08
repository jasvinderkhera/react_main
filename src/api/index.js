import axios from "axios";

export async function createEntry(create_data) {
    try {
     let response = await axios.post("http://localhost:4001/form_data", {
        name: create_data.name,
        position: create_data.position,
        department: create_data.department,
        salary: create_data.salary,
        hiredate: create_data.hiredate,
      });
      return response.statusText;

    } catch (error) {
      console.log("error", error.message);
      return error;
    }
  }