import todoReducers from "@/features/todo/components/todo/reducers";
import { QUERY } from "@/features/todo/constants";
import { createTodo, deleteTodo } from "@/features/todo/services";
import { updateTodo } from "@/features/todo/services/queries";
import { IHandleFilterProps, UpdateTodoReq } from "@/features/todo/types";
import { useReducer, useState } from "react";

const useTodos = () => {
  const [queryKey, setQueryKey] = useState([""]);
  const [inputValue, setInputValue] = useState("");
  const [filter, dispatch] = useReducer(todoReducers.filterReducer, QUERY);
  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    await createTodo({ title: inputValue });
    setInputValue("");
    setQueryKey(["todos"]);
  };
  const handleDelete = async (id: string) => {
    await deleteTodo({ id });
    setQueryKey(["todos"]);
  };
  const handleUpdate = async (reqBody: UpdateTodoReq) => {
    await updateTodo(reqBody);
    setQueryKey(["todos"]);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);
  const handleFilter = ({ type, payload }: IHandleFilterProps) => {
    dispatch({ type, payload });
  };
  return {
    queryKey,
    inputValue,
    handleKeyDown,
    handleDelete,
    handleUpdate,
    handleChange,
    handleFilter,
    filter,
  };
};
export default useTodos;
