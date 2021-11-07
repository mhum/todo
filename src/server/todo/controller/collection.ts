import Controller from '@curveball/controller';
import { Context } from '@curveball/core';

import { getItems } from '../service';

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

}