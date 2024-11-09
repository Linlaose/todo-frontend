import styles from "./Todo.module.css";
import SunIcon from "@/assets/icons/light-mode.svg?react";
import MoonIcon from "@/assets/icons/dark-mode.svg?react";
import CheckIcon from "@/assets/icons/check.svg?react";
import { useState } from "react";
import { createTodo, deleteTodo, getTodos } from "@/features/todo/services";
import { useQuery } from "@/features/todo/hooks";
import { TodoItem, UpdateTodoReq } from "@/features/todo/types";
import CrossIcon from "@/assets/icons/cross.svg?react";
import { updateTodo } from "@/features/todo/services/queries";
const Todo = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [queryKey, setQueryKey] = useState([""]);
  const [inputValue, setInputValue] = useState("");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  const { data: TODOS } = useQuery<TodoItem[]>({ queryFn: getTodos, queryKey });
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
  return (
    <section className={styles["container"]}>
      <div className={styles["box"]}>
        <header className={styles["header"]}>
          <h1 className={styles["title"]}>todo</h1>
          <button
            className={styles["button--toggle-theme"]}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </header>
        <div className={styles["input-box"]}>
          <input
            className={styles["input-box__input"]}
            type="text"
            placeholder="Create a new todo..."
            onKeyDown={(e) => void handleKeyDown(e)}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        </div>
        <div className={styles["list-box"]}>
          <ul className={styles["list-box__list"]}>
            {TODOS?.map((todo) => (
              <li className={styles["list-box__item"]} key={todo.id}>
                <label
                  htmlFor={`todo-${todo.id}`}
                  className={styles["list-item__label"]}
                />
                <input
                  type="checkbox"
                  id={`todo-${todo.id}`}
                  checked={todo.is_done}
                  className={styles["list-item__checkbox"]}
                  onChange={(e) => {
                    void handleUpdate({
                      id: todo.id,
                      is_done: e.target.checked,
                    });
                  }}
                />
                <div className={styles["list-item__checkmark"]}>
                  <CheckIcon />
                </div>
                <p className={styles["list-item__text"]}>{todo.title}</p>
                <CrossIcon
                  className={styles["list-item__delete-button"]}
                  onClick={() => void handleDelete(todo.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Todo;
