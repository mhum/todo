import { useCollection, useClient } from 'react-ketting';

import AddTodoItem from './AddTodoItem/AddTodoItem'
import DeleteTodoItems from './DeleteTodoItems/DeleteTodoItems';
import TodoItemList from './TodoItemList/TodoItemList'
import { TodoItem } from '../types/TodoItem';

const TodoListWrapper = () => {
  const client = useClient();
  const { loading, error, items } = useCollection<TodoItem>('/todo', {
    refreshOnStale: true
  });

  const deleteCompletedHandler = async () => {
    let completedItems = false;

    for(const item of items) {
      if ((await item.get()).data.completed) {
        item.delete();
        completedItems = true;
      }
    }

    if (completedItems) {
      client.go('/todo').refresh();
    }
  }

  if (loading || error) {
    return<div></div>
  }

return (
    <div>
      <TodoItemList todoItems={items} />
      <AddTodoItem />
      <DeleteTodoItems deleteCompletedHandler={deleteCompletedHandler} />
    </div>
  );
}

export default TodoListWrapper;