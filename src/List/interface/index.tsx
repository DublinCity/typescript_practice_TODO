interface HandleEvent {
  handleRemove(id: number): void;
  handleEdit(id: number, todo: string): void;
}

export interface ListProps extends HandleEvent {
  list: Map<any, any>;
}

export interface ItemProps extends HandleEvent {
  id: number;
  title: string;
}
