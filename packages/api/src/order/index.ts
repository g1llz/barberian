import OrderModel from '../database/schema/order';
import { OrderController } from './OrderController';
import { OrderRepository } from './repositories/OrderRepository';
import { OrderService } from './services/OrderService';

const orderRepository = new OrderRepository(OrderModel);

const orderService = new OrderService(orderRepository);

const orderController = new OrderController(orderService);

export { orderController };
