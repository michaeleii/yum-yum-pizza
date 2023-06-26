import { useAppDispatch, useAppSelector } from "../../hook";
import IMenuItem from "../../interfaces/IMenuItem";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import { addToCart, getCurrentQuantityById } from "../cart/cartSlice";
import { getUsername } from "../user/userSlice";

function MenuItem({ pizza }: { pizza: IMenuItem }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const username = useAppSelector(getUsername);
  const currentQuantity = useAppSelector(getCurrentQuantityById(id));
  const dispatch = useAppDispatch();

  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addToCart(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 rounded-lg md:h-36 ${
          soldOut ? "opacity-70 grayscale" : ""
        }`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-semibold md:text-xl">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {soldOut && (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut && (
            <p className="text-sm md:text-base">{formatCurrency(unitPrice)}</p>
          )}
          {username && isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity id={id} currentQuantity={currentQuantity} />
              <DeleteItem id={id} />
            </div>
          )}
          {username && !soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
