import axios, { AxiosInstance } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

export const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "private-key": apiKey,
  },
});

export async function getProperties(categoryId: string) {
  const res = await api.get(`/properties?cat=${categoryId}`);

  if (res.status !== 200) {
    throw new Error("Failed to fetch categories");
  }

  return res.data;
}
