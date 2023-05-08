import axios from "axios";

const baseURL = "https://dummyjson.com";

const config = {
  baseURL,
};

const api = axios.create(config);

export default api;
