import mongoose from 'mongoose';

import { IOrderSchema } from '../interfaces';

const OrderSchema = new mongoose.Schema({
  uuid: { type: String, required: true },
  serviceType: { type: String, required: true },
  commentary: { type: String, required: false, default: null },
  price: { type: Number, required: true },
});

OrderSchema.index({ uuid: 1 }, { unique: true });
OrderSchema.set('timestamps', true);

const model = mongoose.model<IOrderSchema>('orders', OrderSchema);

export default model;
