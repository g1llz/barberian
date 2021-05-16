import { Context } from 'koa';
import { Order } from '../entities/Order';
import { OrderService } from './services/OrderService';

type DataType = { [key: string]: string } | Order | string;

function koaHandleResponse(ctx: Context, status: number, data: DataType) {
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

  async update(ctx: Context) {
    const { uuid } = ctx.params;
    const { serviceType, commentary, price } = ctx.request.body;

    try {
      const order = await this.orderService.updateOrder({
        uuid,
        serviceType,
        commentary,
        price,
      });
      koaHandleResponse(ctx, 200, order);
    } catch (error) {
      koaHandleResponse(ctx, 400, error.message);
    }
  }

  async remove(ctx: Context) {
    const { uuid } = ctx.params;

    try {
      const response = await this.orderService.removeOrder(uuid);
      koaHandleResponse(ctx, 200, response);
    } catch (error) {
      koaHandleResponse(ctx, 404, error.message);
    }
  }
}
