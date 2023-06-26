import { Params, useFetcher } from "react-router-dom";
import IOrderItem from "../../interfaces/IOrderItem";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }: { order: IOrderItem }) {
  const Fetcher = useFetcher<IOrderItem>();
  return (
    <Fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </Fetcher.Form>
  );
}
export default UpdateOrder;

export async function updateOrderAction({ params }: { params: Params }) {
  const data = { priority: true };
  const { orderId } = params;
  if (!orderId) throw new Error("Missing orderId");
  await updateOrder(orderId, data);
  return null;
}
