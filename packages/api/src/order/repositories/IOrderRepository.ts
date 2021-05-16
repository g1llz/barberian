import { Order } from '../../entities/Order';

export interface IOrderRepository {
  findById(uuid: string): Promise<Order>;
  create(order: Order): Promise<Order>;
  update(order: Order): Promise<Order>;
  remove(uuid: string): Promise<{ message: string }>;
}
