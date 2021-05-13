import OrderModel from '../database/schema/order';

import { IOrderSchema } from '../database/interfaces';

export async function createOrder(order: IOrderSchema) {
  try {
    const doc = await OrderModel.create(order);
    return {
      uuid: doc.uuid,
      serviceType: doc.serviceType,
      commentary: doc.commentary,
      price: doc.price,
    };
  } catch (error) {
    console.error(error);
    throw Error('Order not created');
  }
}

export async function findById(uuid: string) {
  try {
    const doc = await OrderModel.findOne({ uuid }, { _id: 0, __v: 0 });
    if (!doc) throw Error('Order not found');
    return doc;
  } catch (error) {
    console.error(error);
    return error;
  }
}
