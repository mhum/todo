import React, { useState } from 'react';

import AddTodoItem from './AddTodoItem/AddTodoItem'
import DeleteTodoItems from './DeleteTodoItems/DeleteTodoItems';
import TodoItemList from './TodoItemList/TodoItemList'

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
      <TodoItemList todoItems={todoItems} toggleCompleteHandler={toggleCompleteHandler}/>
      <AddTodoItem addItemHandler={addItemHandler} />
      <DeleteTodoItems deleteCompletedHandler={deleteCompletedHandler} />
    </div>
  );
}

export default TodoWrapper;