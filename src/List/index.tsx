import React, { FunctionComponent } from "react";
import { ListProps } from "./interface/index";

import Item from "./components/Item";

const ListContainer: FunctionComponent<ListProps> = ({
  list,
  handleRemove,
  handleEdit
}) => {
  return (
    <div>
      {[...list].map(([id, title]) => (
        <Item
          key={id}
          id={id}
          title={title}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};
export default ListContainer;
