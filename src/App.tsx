import styles from "./App.module.css";
import { Todo } from "./features/todo/components/todo";
import background from "./assets/images/background-dark.webp";

function App() {
  return (
    <main className={styles.main}>
      <img src={background} alt="background" className={styles.banner} />
      <Todo />
    </main>
  );
}

export default App;
