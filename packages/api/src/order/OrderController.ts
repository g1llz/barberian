import { Context } from 'koa';
import { OrderService } from './OrderService';

export class OrderController {
  constructor(private orderService: OrderService) {}

  async show(ctx: Context) {
    const { uuid } = ctx.params;

    try {
      const doc = await this.orderService.findOrderById(uuid);

      ctx.status = 200;
      ctx.body = {
        success: true,
        data: doc,
      };
    } catch (error) {
      ctx.status = 404;
      ctx.body = {
        sucess: false,
        error: {
          message: error.message,
        },
      };
    }
  }

  async create(ctx: Context) {
    const { serviceType, commentary, price } = ctx.request.body;

    try {
      const order = await this.orderService.createOrder({ serviceType, commentary, price });

      ctx.status = 201;
      ctx.body = {
        success: true,
        data: order,
      };
    } catch (error) {
      ctx.status = 400;
      ctx.body = {
        sucess: false,
        error: {
          message: error.message,
        },
      };
    }
  }
}
