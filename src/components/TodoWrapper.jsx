import React, { useState } from 'react';

import ItemList from './ItemList/ItemList'

const initialList = ['Item 1', 'Item 2'];

const TodoWrapper = () => {
  const [todoItems, setTodoItems] = useState(initialList);

  return (
    <ItemList todoItems={todoItems}/>
  );
}

export default TodoWrapper;