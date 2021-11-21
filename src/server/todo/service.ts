import { TodoItem, NewTodoItem } from './types';

const todoList: TodoItem[] = [
  {
    id: 1,
    value: 'Item 1',
    completed: false
  },
  {
    id: 2,
    value: 'Item 2',
    completed: true
  },
];

export async function getItems(): Promise<TodoItem[]> {
  return new Promise((resolve, reject) => {
    resolve(todoList)
  });
}

export async function getItemById(id: number): Promise<TodoItem> {
  return new Promise((resolve, reject) => {
    const item = todoList.find(item => item.id == id);

    if (item === undefined) {
      reject('Oops!')
      return;
    }

    resolve(item)
  });
}

export async function addItem(todo: NewTodoItem): Promise<TodoItem> {
  const newTodo = {
    ...todo,
    id: todoList.length + 1,
  }

  todoList.push(newTodo);
  return newTodo;
}