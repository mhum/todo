import Controller from '@curveball/controller';
import { Context } from '@curveball/core';

import { getItemById, updateItemById, deleteItemById } from '../service';
import { TodoItem as TodoItemType } from '../types';

export default class TodoItem extends Controller {

  async get(ctx: Context) {

    const item = await getItemById(ctx.state.params.itemId);

    ctx.response.body = {
      ...item,
      _links: {
        self: `/todo/${item.id}`,
        collection: {
          href: `/todo`,
        },
      }
    };
  }

  async put(ctx: Context) {
    ctx.request.validate<TodoItemType>('todo-item.json');

    const item = await getItemById(ctx.state.params.itemId);

    item.value = ctx.request.body.value;
    item.completed = ctx.request.body.completed;

    await updateItemById(ctx.state.params.itemId, item);
    ctx.status = 204;
  }

  async delete(ctx: Context) {
    await deleteItemById(ctx.state.params.itemId);
    ctx.status = 204;
  }
}