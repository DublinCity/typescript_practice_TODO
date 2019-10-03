import React, { useState } from "react";
import Input from "./Input/index";
import ListContainer from "./List/index";

let count = 0;
const App = () => {
  const [todoList, setTodoList] = useState(new Map());

  const addTodo = (todo: string) =>
    setTodoList(prev => {
      prev.set(count++, todo);
      return new Map(prev);
    });

  const removeTodo = (id: number) =>
    setTodoList(prev => {
      prev.delete(id);
      return new Map(prev);
    });

  const editTodo = (id: number, todo: string) => {
    setTodoList(prev => {
      prev.set(id, todo);
      return new Map(prev);
    });
  };

  return (
    <div>
      <Input onEnter={addTodo} />
      <ListContainer
        list={todoList}
        handleRemove={removeTodo}
        handleEdit={editTodo}
      />
    </div>
  );
};

export default App;
