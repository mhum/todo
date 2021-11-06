import React, { useState } from 'react';

import AddItem from './AddItem/AddItem'
import ItemList from './ItemList/ItemList'

const initialList = [];

const TodoWrapper = () => {
  const [todoItems, setTodoItems] = useState(initialList);

  const addItemHandler = (newItemValue) => {
    const newItem = {
      id: todoItems.length + 1,
      value: newItemValue,
      completed: false,
    };
    setTodoItems([...todoItems, newItem]);
  }

  const toggleCompleteHandler = (itemId) => {
    const updatedItems = todoItems.map(item => {
      return item.id == itemId ? { ...item, completed: !item.completed } : { ...item};
    });
    setTodoItems(updatedItems);
  }

  return (
    <div>
      <ItemList todoItems={todoItems} toggleCompleteHandler={toggleCompleteHandler}/>
      <AddItem addItemHandler={addItemHandler} />
    </div>
  );
}

export default TodoWrapper;