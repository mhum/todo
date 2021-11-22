import React from 'react';
import { useCollection, useClient } from 'react-ketting';

import AddTodoItem from './AddTodoItem/AddTodoItem'
import DeleteTodoItems from './DeleteTodoItems/DeleteTodoItems';
import TodoItemList from './TodoItemList/TodoItemList'

const TodoListWrapper = () => {
  const client = useClient();
  const { loading, error, items } = useCollection('/todo', {
    refreshOnStale: true
  });

  const deleteCompletedHandler = async () => {
    const fetchedItems = await Promise.all(items.map(item => item.get()));
    const completedItems = fetchedItems.filter(item => item.data.completed);

    await Promise.all(completedItems.map(item => client.go(`/todo/${item.data.id}`).delete()));

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