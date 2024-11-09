import { GetTodosRes } from "@/features/todo/types";

const API_URL = import.meta.env.VITE_API_URL;

export const getTodos = async () => {
  try {
    const response = await fetch(`${API_URL}/todos`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as GetTodosRes;
    return data.data;
  } catch (error) {
    console.error(error);
  }
  return;
};
