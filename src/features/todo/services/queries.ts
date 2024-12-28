import {
  CreateTodoRes,
  DeleteTodoRes,
  GetTodosRes,
  ICreateTodoReq,
  UpdateTodoReq,
  UpdateTodoRes,
} from "@/features/todo/types";
import queryString from "@/utils";

const API_URL = import.meta.env.VITE_API_URL;
const headers = new Headers();
headers.append("Content-Type", "application/json");

export const getTodos = async (query: Record<string, string | boolean>) => {
  try {
    const response = await fetch(
      `${API_URL}/todos?${queryString.stringify(query)}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as GetTodosRes;
    return data;
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
export const updateTodo = async (reqBody: UpdateTodoReq) => {
  const { id, ...requestColumns } = reqBody;
  try {
    const response = await fetch(`${API_URL}/todos/${id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(requestColumns),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as UpdateTodoRes;
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
