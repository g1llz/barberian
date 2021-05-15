import { v4 as uuidv4 } from 'uuid';

export class Order {
  public readonly uuid: string | undefined;

  public serviceType: string;

  public commentary: string | null;

  public price: number;

  constructor(props: Omit<Order, 'uuid'>, uuid?: string) {
    this.uuid = uuid;
    this.serviceType = props.serviceType;
    this.commentary = props.commentary;
    this.price = props.price;

    if (!this.uuid) {
      this.uuid = uuidv4();
    }
  }
}
