import React, { FC } from "react";
import { ListProps } from "./interface/index";

import Item from "./components/Item";

const ListContainer: FC<ListProps> = ({
  list,
  handleRemove,
  handleEdit
}) => {
  return (
    <div>
      {
        list.map(({ id, text, done }) => <Item
          key={id}
          id={id}
          text={text}
          done={done}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />)
      }
    </div>
  );
};
export default ListContainer;
