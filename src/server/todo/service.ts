import { TodoItem, NewTodoItem } from './types';

let todoList: TodoItem[] = [
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

    resolve(JSON.parse(JSON.stringify(item)))
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

export async function updateItemById(id: number, updatedItem: TodoItem): Promise<void> {
  if (id != updatedItem.id) {
    throw Error('URI in path doesn\'t match id in updated object');
  }

  const item = todoList.find(item => item.id == updatedItem.id);

  if (!item) {
    throw Error('Todo item not found');
  }

  item.value = updatedItem.value;
  item.completed = updatedItem.completed;
}

export async function deleteItemById(id: number): Promise<void> {
  todoList = todoList.filter(item => item.id != id)
}