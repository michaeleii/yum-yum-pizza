import ICartItem from "./ICartItem";

interface IOrderItem {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: ICartItem[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
}

export default IOrderItem;
