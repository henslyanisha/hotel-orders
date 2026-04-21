import axios from "axios";

const API = axios.create({
  baseURL: "https://t4e-testserver.onrender.com/api"
});

export const getToken = (data) => API.post("/public/token", data);

export const getOrders = (token) =>
  API.get("/private/data", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });