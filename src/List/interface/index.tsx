import { TodoItem, TodoList } from "../../Store/modules/todos";

interface HandleEvent {
  handleRemove(id: number): void;
  handleEdit(id: number, todo: string): void;
}

export interface ListProps extends TodoList, HandleEvent { }

export interface ItemProps extends TodoItem, HandleEvent { }
