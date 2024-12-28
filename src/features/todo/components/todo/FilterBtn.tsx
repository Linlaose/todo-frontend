import { FilterAction } from "@/features/todo/components/todo/reducers/filterReducer";
import styles from "./FilterBtn.module.css";
interface IProps {
  type: FilterAction["type"];
  handleFilter: (type: FilterAction["type"]) => void;
}
const FilterBtn = ({ type, handleFilter }: IProps) => {
  switch (type) {
    case "completed":
      return (
        <button className={styles["btn"]} onClick={() => handleFilter(type)}>
          completed
        </button>
      );
    case "pending":
      return (
        <button className={styles["btn"]} onClick={() => handleFilter(type)}>
          pending
        </button>
      );
    default:
      return (
        <button className={styles["btn"]} onClick={() => handleFilter(type)}>
          all
        </button>
      );
  }
};
export default FilterBtn;
