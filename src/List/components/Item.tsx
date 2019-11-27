import React, { FunctionComponent, useState, useEffect } from "react";
import { ItemProps } from "../interface/index";

interface InputTextProps {
  text:string;
  confirmTodo(title:string): void;
  cancelEdit():void;
}

const InputText: FunctionComponent<InputTextProps> = ({
  text,confirmTodo,cancelEdit
}) => {
  const [tempText, setTempText] = useState(text);
  return <><input
  onChange={e => setTempText(e.target.value)}
  value={tempText}
></input>
  <span onClick={() => confirmTodo(tempText)}>확인</span>
  <span onClick={cancelEdit}>취소</span></>
}

const Item: FunctionComponent<ItemProps> = ({
  id,
  title,
  handleRemove,
  handleEdit
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempText, setTempText] = useState(title);

  const confirmTodo = (value:string) => {
    setIsEditing(false);
    handleEdit(id, value);
  };
  const cancelEdit = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    setTempText(title);
  }, [title, isEditing]);

  return (
    <div>
      <span>{id}</span>
      {isEditing ? (
        <span>
          <InputText
          confirmTodo = {confirmTodo} cancelEdit = {cancelEdit} text={title}
          ></InputText>
        
        </span>
      ) : (
        <>
          {title} <span onClick={() => setIsEditing(true)}>수정하기</span>
        </>
      )}
      <span onClick={() => handleRemove(id)}>X</span>
    </div>
  );
};

export default Item;
