import { useAppSelector } from "../../hook";
import ICartItem from "../../interfaces/ICartItem";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }: { item: ICartItem }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useAppSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div>
        <div className="flex items-center justify-between sm:gap-6">
          <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
          <UpdateItemQuantity id={pizzaId} currentQuantity={currentQuantity} />
          <DeleteItem id={pizzaId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
