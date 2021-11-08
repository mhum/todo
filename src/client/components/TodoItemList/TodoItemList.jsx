import React from 'react';

import TodoItem from '../TodoItem/TodoItem';

const TodoItemList = ({todoItems}) => {
  return (
    <div>
      {todoItems.map(item => <TodoItem key={item.uri} item={item} />)}
    </div>
  );
}

export default TodoItemList;