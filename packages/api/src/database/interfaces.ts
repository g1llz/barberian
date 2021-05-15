import { Model } from 'mongoose';

export interface IOrderSchema {
  uuid: string;
  serviceType: string;
  commentary: string | null;
  price: number;
}

export interface IOrderModel extends Model<any, {}, {}> {} // eslint-disable-line
