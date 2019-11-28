import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Input from "./Input/index";
import ListContainer from "./List/index";
import { RootState } from "./Store/modules";
import { actionCreators } from "./Store/modules/todos";


let count = 0;
const App = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState)=> state.todos.list)
  const addTodo = (text: string) => dispatch(actionCreators.create(text))
  const removeTodo = (id: number) => dispatch(actionCreators.remove(id))
  const editTodo = (id: number, text: string) => dispatch(actionCreators.edit(id, text))

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
