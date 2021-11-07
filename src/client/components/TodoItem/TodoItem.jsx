import React, {useCallback} from 'react';

const TodoItem = ({item, toggleCompleteHandler}) => {
  const handleClick = () => {
    toggleCompleteHandler(item.id)
  };

  return (
    <div className={item.completed ? "todo completed" : "todo"} onClick={handleClick}>
      {item.value}
    </div>
  );
}

export default TodoItem;