import { TodoItem } from './types';

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