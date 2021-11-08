import Controller from '@curveball/controller';
import { Context } from '@curveball/core';

import { getItemById } from '../service';

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
}