import { QUERY } from "@/features/todo/constants";

export type FilterAction =
  | { type: "all" }
  | { type: "completed" }
  | { type: "pending" };
export const filterReducer = (
  state: Record<string, string | boolean>,
  action: FilterAction
) => {
  switch (action.type) {
    case "all":
      return QUERY;
    case "completed":
      return { ...state, is_done: true };
    case "pending":
      return { ...state, is_done: false };
    default:
      return state;
  }
};
