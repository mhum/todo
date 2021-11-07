import router from '@curveball/router';

import TodoCollection from './todo/controller/collection';

export default [
  router('/todo', new TodoCollection())
];