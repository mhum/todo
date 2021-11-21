import Controller from '@curveball/controller';
import { Context } from '@curveball/core';

import { getItems, addItem } from '../service';
import { NewTodoItem } from '../types';

export default class TodoCollection extends Controller {

  async get(ctx: Context) {

    const items = await getItems();

    ctx.response.body = {
      total: items.length,
      _links: {
        self: {
          href: '/todo',
        },
        item: items.map(item => ({ href: `/todo/${item.id}`, title: `${item.value}`})),
      }
    };
  }

  async post(ctx: Context) {
    ctx.request.validate<NewTodoItem>('new-todo-item.json');

    const todo: NewTodoItem = {
      value: ctx.request.body.value,
      completed: ctx.request.body.completed,
    }

    const newTodo = await addItem(todo);
    ctx.status = 201;
    ctx.response.headers.set('Location', `/todo/${newTodo.id}`);
  }
}