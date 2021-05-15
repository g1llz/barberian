import { Context } from 'koa';
import { Order } from '../entities/Order';
import { OrderService } from './services/OrderService';

function koaHandleResponse(ctx: Context, status: number, data: Order | string) {
  const type = status >= 400 ? 'error' : 'success';
  const options = {
    success: {
      success: true,
      data,
    },
    error: {
      success: false,
      error: {
        message: data,
      },
    },
  };

  ctx.status = status;
  ctx.body = options[type];
}

export class OrderController {
  constructor(private orderService: OrderService) {}

  async show(ctx: Context) {
    const { uuid } = ctx.params;

    try {
      const order = await this.orderService.findOrderById(uuid);
      koaHandleResponse(ctx, 200, order);
    } catch (error) {
      koaHandleResponse(ctx, 404, error.message);
    }
  }

  async create(ctx: Context) {
    const { serviceType, commentary, price } = ctx.request.body;

    try {
      const order = await this.orderService.createOrder({
        serviceType,
        commentary,
        price,
      });
      koaHandleResponse(ctx, 200, order);
    } catch (error) {
      koaHandleResponse(ctx, 400, error.message);
    }
  }
}
