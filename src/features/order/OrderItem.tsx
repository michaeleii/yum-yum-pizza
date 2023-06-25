import ICartItem from "../../interfaces/ICartItem";
import { formatCurrency } from "../../utils/helpers";

interface OrderItemProps {
  item: ICartItem;
  isLoadingIngredients: boolean;
  ingredients: string[];
}

function OrderItem({
  item,
  isLoadingIngredients,
  ingredients,
}: OrderItemProps) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
