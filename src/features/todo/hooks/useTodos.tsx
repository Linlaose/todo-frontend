import type { ChangeEvent } from "react";
import { useState } from "react";

// interface ITodo {
//   id: number | string;
//   content: string;
// }

// const generateRandomID = () => Math.random().toString(36).substring(2, 9);
const useTodos = () => {
  const [textInput, setTextInput] = useState<string>("");
  // const [todos, setTodos] = useState<ITodo[]>(TODOS);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };
  // const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key !== "Enter") return;
  //   const todo: ITodo = { id: generateRandomID(), content: textInput };
  //   const newTodos = [...todos, todo];
  //   setTodos(newTodos);
  //   setTextInput("");
  // };
  return {
    textInput,
    // todos,
    handleChange,
    //  handleKeyDown
  };
};
export default useTodos;
