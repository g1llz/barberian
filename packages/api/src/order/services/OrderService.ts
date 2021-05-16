import { Order } from '../../entities/Order';
import { ICreateOrderRequestDTO, IUpdateOrderRequestDTO } from './IOrderRequestDTO';
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

  async updateOrder(data: IUpdateOrderRequestDTO) {
    const order = new Order(data, data.uuid);
    return this.orderRepository.update(order);
  }

  async removeOrder(uuid: string) {
    return this.orderRepository.remove(uuid);
  }
}
