import React from 'react';

import Item from '../Item/Item';

const ItemList = ({todoItems, toggleCompleteHandler}) => {
  return (
    <div>
      {todoItems.map(item => <Item key={item.id} item={item} toggleCompleteHandler={toggleCompleteHandler} />)}
    </div>
  );
}

export default ItemList;