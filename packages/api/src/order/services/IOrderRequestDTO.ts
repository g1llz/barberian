export interface ICreateOrderRequestDTO {
  serviceType: string;
  commentary: string | null;
  price: number;
}

export interface IUpdateOrderRequestDTO extends ICreateOrderRequestDTO {
  uuid: string;
}
