import { useTodos } from '../../hooks';
import styles from './Todo.module.css';

const Todo = () => {
  const { textInput, handleChange, handleKeyDown, todos } = useTodos();
  return (
    <section className={styles.wrapper}>
      <div className={styles["todo-box"]}>
        <input
          type="text"
          placeholder="add todo ..."
          name=""
          id=""
          value={textInput}
          className={styles.input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <ul className={styles["todo-list"]}>
          {todos.map((todo) => (
            <li key={todo.id} className={styles.todo}>
              <p className={styles.content}>{todo.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Todo;
