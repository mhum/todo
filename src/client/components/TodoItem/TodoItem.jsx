import React from 'react';
import { useResource } from 'react-ketting';

const TodoItem = ({item }) => {
  const { loading, error, data, setData, submit } = useResource(item);

  const handleClick = () => {
    setData({
      ...data,
      completed: !data.completed
    })
    submit();
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