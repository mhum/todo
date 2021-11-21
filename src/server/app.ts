import { join } from 'path';

import accessLog from '@curveball/accesslog';
import bodyParser from '@curveball/bodyparser';
import { Application } from '@curveball/core';
import validator from '@curveball/validator';

import routes from './routes';

const app = new Application();

app.use(accessLog());
app.use(bodyParser());
app.use(validator(
  join(__dirname, '../schemas/')
));

app.use(...routes);

export default app;