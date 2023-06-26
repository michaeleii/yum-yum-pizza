import IMenuItem from "../../interfaces/IMenuItem";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }: { pizza: IMenuItem }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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
          {!soldOut ? (
            <>
              <p className="text-sm md:text-base">
                {formatCurrency(unitPrice)}
              </p>
              <Button type="small">Add to cart</Button>
            </>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
