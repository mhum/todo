import { Resource } from 'ketting';
import { useResource } from 'react-ketting';

import { TodoItem } from '../../types/TodoItem';

type TodoItemProps = {
  item: Resource<TodoItem>
}

const TodoItem = ({ item }: TodoItemProps) => {
  const { loading, error, data, setData, submit } = useResource<TodoItem>(item);

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