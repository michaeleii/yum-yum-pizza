import ICartItem from "../../interfaces/ICartItem";
import { formatCurrency } from "../../utils/helpers";

interface OrderItemProps {
  item: ICartItem;
  isLoadingIngredients?: boolean;
  ingredients?: string[];
}

function OrderItem({
  item,
  isLoadingIngredients,
  ingredients,
}: OrderItemProps) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm md:text-base">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
