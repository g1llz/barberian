import { Order } from '../../entities/Order';

export interface IOrderRepository {
  findById(uuid: string): Promise<Order>;
  create(order: Order): Promise<Order>;
}
