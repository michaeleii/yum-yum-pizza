import { TrashIcon } from "@heroicons/react/24/outline";
import { useAppDispatch } from "../../hook";
import Button from "../../ui/Button";
import { removeFromCart } from "./cartSlice";

function DeleteItem({ id }: { id: number }) {
  const dispatch = useAppDispatch();
  return (
    <Button type="danger" onClick={() => dispatch(removeFromCart(id))}>
      <TrashIcon className="h-5 w-5" />
    </Button>
  );
}
export default DeleteItem;
