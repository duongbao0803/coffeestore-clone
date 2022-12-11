import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const getAllOrder = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      if (!accessToken) {
        reject({ error: true, message: "Token not found!" });
      }
      const res = await axios.get(`${baseUrl}/donhang`, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      console.log("res", res);
      resolve(res.data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};




export const confirmOrder = (id, order) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      if (!accessToken) {
        reject({ error: true, message: "Token not found!" });
      }
      const res = await axios.put(`${baseUrl}/donhang/${id}`, order, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      console.log("res", res);
      resolve(res.data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};