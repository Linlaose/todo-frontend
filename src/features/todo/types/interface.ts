import {
  IGetApiSuccessBase,
  IGetApiSuccessBaseWithAmount,
} from "@/types/api.type";

export type TodoItem = {
  id: string;
  title: string;
  description: string;
  memo: string;
  is_done: boolean;
  started_at: null;
  ended_at: null;
};
export type GetTodosRes = IGetApiSuccessBaseWithAmount<TodoItem[]>;
export interface ICreateTodoReq {
  title: string;
}
export type CreateTodoRes = IGetApiSuccessBase<
  Pick<TodoItem, "id" | "title" | "description">
>;
export interface IDeleteTodoReq {
  id: string;
}
export type DeleteTodoRes = IGetApiSuccessBase<null>;
export type UpdateTodoReq = Partial<TodoItem>;
export type UpdateTodoRes = IGetApiSuccessBase<TodoItem>;
export type FilterAction =
  | { type: "all" }
  | { type: "completed" }
  | { type: "pending" }
  | { type: "page"; payload?: number };
export interface IHandleFilterProps {
  type: FilterAction["type"];
  payload?: number;
}
