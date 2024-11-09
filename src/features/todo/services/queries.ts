import {
  CreateTodoRes,
  DeleteTodoRes,
  GetTodosRes,
  ICreateTodoReq,
} from "@/features/todo/types";

const API_URL = import.meta.env.VITE_API_URL;
const headers = new Headers();
headers.append("Content-Type", "application/json");

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
export const createTodo = async ({ title }: ICreateTodoReq) => {
  try {
    const response = await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers,
      body: JSON.stringify({ title }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as CreateTodoRes;
    return data.data;
  } catch (error) {
    console.error(error);
  }
  return;
};
export const deleteTodo = async ({ id }: { id: string }) => {
  try {
    const response = await fetch(`${API_URL}/todos/${id}`, {
      method: "DELETE",
      headers,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as DeleteTodoRes;
    return data.message;
  } catch (error) {
    console.error(error);
  }
  return;
};
