import axios from "axios";

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "/admin/api"
});

export default http;
