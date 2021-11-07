import React from 'react';

import TodoItem from '../TodoItem/TodoItem';

const TodoItemList = ({todoItems, toggleCompleteHandler}) => {
  return (
    <div>
      {todoItems.map(item => <TodoItem key={item.id} item={item} toggleCompleteHandler={toggleCompleteHandler} />)}
    </div>
  );
}

export default TodoItemList;