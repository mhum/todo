import { Application, Context } from '@curveball/core';

const app = new Application();
app.use((ctx: Context) => {

  ctx.status = 200;
  ctx.response.body = 'Hello world!'

});

app.listen(4000);