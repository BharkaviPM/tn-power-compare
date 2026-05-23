import axios from "axios";

const API = axios.create({
  baseURL:
    "https://tn-power-compare.onrender.com",
});

export default API;