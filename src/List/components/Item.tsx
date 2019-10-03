import React, { FunctionComponent, useState, useEffect } from "react";
import { ItemProps } from "../interface/index";

const Item: FunctionComponent<ItemProps> = ({
  id,
  title,
  handleRemove,
  handleEdit
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempText, setTempText] = useState(title);

  const confirmTodo = () => {
    setIsEditing(false);
    handleEdit(id, tempText);
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
          <input
            onChange={e => setTempText(e.target.value)}
            value={tempText}
          ></input>
          <span onClick={confirmTodo}>확인</span>
          <span onClick={cancelEdit}>취소</span>
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
