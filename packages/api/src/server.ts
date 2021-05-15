import Koa, { Context } from 'koa';
import Router from '@koa/router';
import KoaBody from 'koa-body';

import { orderController } from './order';

const app = new Koa();
const router = new Router();

app.use(KoaBody());

router
  .get('/orders/:uuid', (ctx: Context) => orderController.show(ctx))
  .post('/orders', (ctx: Context) => orderController.create(ctx));
// .put('/orders/:uuid', orderController.update)
// .delete('/orders/:uuid', orderController.remove);

app.use(router.routes());

export default app;
