import { Context } from 'koa';
import { v4 as uuidv4 } from 'uuid';

import * as OrderRespository from '../repositories/order-repository';

export default function OrderController() {
  async function show(ctx: Context) {
    const { uuid } = ctx.params;
    const doc = await OrderRespository.findById(uuid);

    if (doc instanceof Error) {
      ctx.status = 404;
      ctx.body = {
        sucess: false,
        error: {
          message: doc.message,
        },
      };
      return;
    }

    ctx.status = 200;
    ctx.body = {
      success: true,
      data: doc,
    };
  }

  async function create(ctx: Context) {
    const { serviceType, commentary, price } = ctx.request.body;
    const doc = await OrderRespository.createOrder({
      uuid: uuidv4(),
      serviceType,
      commentary,
      price,
    });

    if (doc instanceof Error) {
      ctx.status = 400;
      ctx.body = {
        sucess: false,
        error: {
          message: doc.message,
        },
      };
      return;
    }

    ctx.status = 201;
    ctx.body = {
      success: true,
      data: doc,
    };
  }

  async function update(ctx: Context) {
    const { uuid } = ctx.params;
    const { serviceType, commentary, price } = ctx.request.body;
    ctx.status = 200;
    ctx.body = {
      uuid,
      serviceType,
      commentary,
      price,
    };
  }

  async function remove(ctx: Context) {
    const { uuid } = ctx.params;
    ctx.status = 200;
    ctx.body = {
      success: true,
      message: `Order ${uuid} has been removed`,
      deletedAt: Date.now(),
    };
  }

  return {
    show,
    create,
    update,
    remove,
  };
}
