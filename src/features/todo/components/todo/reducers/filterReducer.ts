import { QUERY } from "@/features/todo/constants";
import { FilterAction } from "@/features/todo/types";

type FilterState = typeof QUERY & {};

export const filterReducer = (state: FilterState, action: FilterAction) => {
  switch (action.type) {
    case "all":
      return QUERY;
    case "completed":
      return { ...state, is_done: true };
    case "pending":
      return { ...state, is_done: false };
    case "page":
      return { ...state, page: String(action.payload) };
    default:
      return state;
  }
};
