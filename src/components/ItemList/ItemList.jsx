import React from 'react';

import Item from '..//Item/Item';

const ItemList = ({todoItems}) => {
  return (
    <div>
      {todoItems.map(item => <Item item={item} />)}
    </div>
  );
}

export default ItemList;