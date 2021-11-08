import React from 'react';
import { useResource } from 'react-ketting';

const TodoItem = ({item, toggleCompleteHandler}) => {
  const { loading, error, data } = useResource(item);

  const handleClick = () => {
    toggleCompleteHandler(item.id)
  };

  if (loading || error) {
    return <div></div>
  }

  return (
    <div className={data.completed ? "todo completed" : "todo"} onClick={handleClick}>
      {data.value}
    </div>
  );
}

export default TodoItem;