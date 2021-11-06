import React, { useState } from 'react';

import AddItem from './AddItem/AddItem'
import DeleteItems from './DeleteItems/DeleteItems';
import ItemList from './ItemList/ItemList'

const TodoWrapper = () => {
  const [nextItemId, setNextItemId] = useState(1);
  const [todoItems, setTodoItems] = useState([]);

  const addItemHandler = (newItemValue) => {
    const newItem = {
      id: nextItemId,
      value: newItemValue,
      completed: false,
    };
    setTodoItems([...todoItems, newItem]);
    setNextItemId(nextItemId + 1);
  }

  const toggleCompleteHandler = (itemId) => {
    const updatedItems = todoItems.map(item => {
      return item.id == itemId ? { ...item, completed: !item.completed } : { ...item};
    });
    setTodoItems(updatedItems);
  }

  const deleteCompletedHandler = () => {
    const updatedItems = todoItems.filter(item => !item.completed);
    setTodoItems(updatedItems);
  }

  return (
    <div>
      <ItemList todoItems={todoItems} toggleCompleteHandler={toggleCompleteHandler}/>
      <AddItem addItemHandler={addItemHandler} />
      <DeleteItems deleteCompletedHandler={deleteCompletedHandler} />
    </div>
  );
}

export default TodoWrapper;