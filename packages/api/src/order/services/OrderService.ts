import { Order } from '../../entities/Order';
import { ICreateOrderRequestDTO } from './ICreateOrderRequestDTO';
import { IOrderRepository } from '../repositories/IOrderRepository';

export class OrderService {
  constructor(private orderRepository: IOrderRepository) {}

  async findOrderById(uuid: string) {
    return this.orderRepository.findById(uuid);
  }

  async createOrder(data: ICreateOrderRequestDTO) {
    const order = new Order(data);
    return this.orderRepository.create(order);
  }
}
