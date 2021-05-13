import Koa from 'koa';
import Router from '@koa/router';
import KoaBody from 'koa-body';

import OrderController from './controllers/order';

const app = new Koa();
const router = new Router();

app.use(KoaBody());

const orderController = OrderController();

router
  .get('/orders/:uuid', orderController.show)
  .post('/orders', orderController.create)
  .put('/orders/:uuid', orderController.update)
  .delete('/orders/:uuid', orderController.remove);

app.use(router.routes());

export default app;
