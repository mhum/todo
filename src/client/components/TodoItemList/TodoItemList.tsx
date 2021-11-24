import { Resource } from 'ketting';

import TodoItem from '../TodoItem/TodoItem';
import { TodoItem as TodoItemType } from '../../types/TodoItem';

type TodoItemListProps = {
  todoItems: Resource<TodoItemType>[]
}

const TodoItemList = ({ todoItems }: TodoItemListProps) => {
  return (
    <div>
      {todoItems.map(item => <TodoItem key={item.uri} item={item} />)}
    </div>
  );
}

export default TodoItemList;