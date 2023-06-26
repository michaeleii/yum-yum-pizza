import { useAppDispatch } from "../../hook";
import Button from "../../ui/Button";
import { removeFromCart } from "./cartSlice";

function DeleteItem({ id }: { id: number }) {
  const dispatch = useAppDispatch();
  return (
    <Button type="small" onClick={() => dispatch(removeFromCart(id))}>
      Delete
    </Button>
  );
}
export default DeleteItem;
