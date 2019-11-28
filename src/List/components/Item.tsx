import React, { useState, useEffect, FC } from "react";
import { ItemProps } from "../interface/index";

interface InputTextProps {
  text: string;
  confirmTodo(title: string): void;
  cancelEdit(): void;
}

const InputText: FC<InputTextProps> = ({
  text,
  confirmTodo,
  cancelEdit
}) => {
  const [tempText, setTempText] = useState(text);
  return <>
  <input
    onChange={e => setTempText(e.target.value)}
    value={tempText}
  />
    <span onClick={() => confirmTodo(tempText)}>확인</span>
    <span onClick={cancelEdit}>취소</span></>
}

const Item: FC<ItemProps> = ({
  id,
  text,
  done,
  handleRemove,
  handleEdit
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const confirmTodo = (value: string) => {
    setIsEditing(false);
    handleEdit(id, value);
  };
  const cancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <span>{id}</span>
      {isEditing ? (
        <span>
          <InputText
            confirmTodo={confirmTodo} cancelEdit={cancelEdit} text={text}
          ></InputText>{done ? 'O' : 'X'}
        </span>
      ) : (
          <>
            {text} <span onClick={() => setIsEditing(true)}>수정하기</span>
            <span onClick={() => handleRemove(id)}>X</span>
          </>
        )}

    </div>
  );
};

export default Item;
