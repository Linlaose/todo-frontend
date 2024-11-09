import styles from "./Todo.module.css";
import SunIcon from "@/assets/icons/light-mode.svg?react";
import MoonIcon from "@/assets/icons/dark-mode.svg?react";
import CheckIcon from "@/assets/icons/check.svg?react";
import { useState } from "react";
import { createTodo, getTodos } from "@/features/todo/services";
import { useQuery } from "@/features/todo/hooks";
import { TodoItem } from "@/features/todo/types";
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
                  className={styles["list-item__checkbox"]}
                />
                <div className={styles["list-item__checkmark"]}>
                  <CheckIcon />
                </div>
                <p className={styles["list-item__text"]}>{todo.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Todo;
