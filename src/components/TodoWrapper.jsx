import React, { useState } from 'react';

import AddItem from './AddItem/AddItem'
import ItemList from './ItemList/ItemList'

const initialList = [];

const TodoWrapper = () => {
  const [todoItems, setTodoItems] = useState(initialList);

  const addItemHandler = (newItem) => {
    setTodoItems([...todoItems, newItem])
  }

  return (
    <div>
      <ItemList todoItems={todoItems}/>
      <AddItem addItemHandler={addItemHandler} />
    </div>
  );
}

export default TodoWrapper;