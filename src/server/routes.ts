import router from '@curveball/router';

import TodoCollection from './todo/controller/collection';
import TodoItem from './todo/controller/item';

export default [
  router('/todo', new TodoCollection()),
  router('/todo/:itemId', new TodoItem())
];