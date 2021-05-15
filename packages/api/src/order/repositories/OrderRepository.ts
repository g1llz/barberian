import { IOrderRepository } from './IOrderRepository';
import { Order } from '../../entities/Order';
import { IOrderModel } from '../../database/interfaces';

export class OrderRepository implements IOrderRepository {
  constructor(private orderModel: IOrderModel) {}

  async findById(uuid: string) {
    try {
      const doc = await this.orderModel.findOne({ uuid }, { _id: 0, __v: 0 });
      if (!doc) throw Error('Order not found');
      return doc;
    } catch (error) {
      if (error instanceof Error) throw Error(error.message);
      throw Error('Mongoose unexpected response');
    }
  }

  async create(order: Order) {
    try {
      const doc = await this.orderModel.create(order);
      return {
        uuid: doc.uuid,
        serviceType: doc.serviceType,
        commentary: doc.commentary,
        price: doc.price,
      };
    } catch (error) {
      throw Error('Order not created');
    }
  }
}
