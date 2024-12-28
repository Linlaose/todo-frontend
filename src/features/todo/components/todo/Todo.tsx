import styles from "./Todo.module.css";
import SunIcon from "@/assets/icons/light-mode.svg?react";
import MoonIcon from "@/assets/icons/dark-mode.svg?react";
import CheckIcon from "@/assets/icons/check.svg?react";
import { useCallback, useState } from "react";
import { getTodos } from "@/features/todo/services";
import { useQuery, useTodos } from "@/features/todo/hooks";
import { GetTodosRes } from "@/features/todo/types";
import CrossIcon from "@/assets/icons/cross.svg?react";
import FilterBtn from "@/features/todo/components/todo/FilterBtn";
import { FilterAction } from "@/features/todo/components/todo/reducers/filterReducer";
const FilterTypes: FilterAction["type"][] = ["all", "completed", "pending"];
const Todo = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  const {
    queryKey,
    inputValue,
    handleKeyDown,
    handleDelete,
    handleUpdate,
    handleChange,
    handleFilter,
    filter,
  } = useTodos();
  const queryFn = useCallback(() => getTodos(filter), [filter]);
  const { data } = useQuery<GetTodosRes>({
    queryFn,
    queryKey,
  });
  if (!data) return <>Loading...</>;
  const { data: Todos } = data;
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
        <div>
          {FilterTypes.map((type) => (
            <FilterBtn key={type} type={type} handleFilter={handleFilter} />
          ))}
        </div>
        <div className={styles["input-box"]}>
          <input
            className={styles["input-box__input"]}
            type="text"
            placeholder="Create a new todo..."
            onKeyDown={(e) => void handleKeyDown(e)}
            onChange={handleChange}
            value={inputValue}
          />
        </div>
        <div className={styles["list-box"]}>
          <ul className={styles["list-box__list"]}>
            {Todos?.map((todo) => (
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
