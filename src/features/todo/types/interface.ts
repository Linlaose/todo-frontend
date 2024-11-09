import { IGetApiSuccessBase } from "../../../types/api.type";

export type TodoItem = {
  id: string;
  title: string;
  description: string;
  memo: string;
  is_done: boolean;
  started_at: null;
  ended_at: null;
};
export type GetTodosRes = IGetApiSuccessBase<TodoItem[]>;
