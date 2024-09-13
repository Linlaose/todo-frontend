import styles from './App.module.css';
import Todo from './features/todo/components/todo/Todo';

function App() {
  return (
    <main className={styles.wrapper}>
      <Todo />
    </main>
  );
}

export default App;
