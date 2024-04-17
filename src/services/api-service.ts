import { Category } from "@/types";
import axios, { AxiosInstance } from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://staging.mazaady.com/api/v1/";
const apiKey =
  process.env.NEXT_PUBLIC_PRIVATE_KEY || "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16";
// I did this bad practice because of the time, while deploying I figured out it's failing while building

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

export async function getCategories(): Promise<Category[]> {
  const res = await api.get("/get_all_cats");

  if (res.status !== 200) {
    throw new Error("Failed to fetch categories");
  }

  return res.data.data?.categories;
}
