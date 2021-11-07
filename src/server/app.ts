import { Application } from '@curveball/core';

import routes from './routes';

const app = new Application();

app.use(...routes);

export default app;