import styles from "./FilterBtn.module.css";
import { FilterAction, IHandleFilterProps } from "@/features/todo/types";
interface IProps {
  type: FilterAction["type"];
  handleFilter: (props: IHandleFilterProps) => void;
}
const FilterBtn = ({ type, handleFilter }: IProps) => {
  switch (type) {
    case "completed":
      return (
        <button className={styles["btn"]} onClick={() => handleFilter({type})}>
          completed
        </button>
      );
    case "pending":
      return (
        <button className={styles["btn"]} onClick={() => handleFilter({type})}>
          pending
        </button>
      );
    default:
      return (
        <button className={styles["btn"]} onClick={() => handleFilter({type})}>
          all
        </button>
      );
  }
};
export default FilterBtn;
