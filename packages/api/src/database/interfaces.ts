export interface IOrderSchema {
  uuid: string;
  serviceType: string;
  commentary: string | null;
  price: number;
}
