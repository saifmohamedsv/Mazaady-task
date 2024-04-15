// utils/api.ts
import axios, { AxiosInstance } from "axios";

const baseURL = process.env.API_BASE_URL;
const apiKey = process.env.PRIVATE_KEY;

const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export default api;
