// Test ID: IIDSAT

import { Params, useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import IOrderItem from "../../interfaces/IOrderItem";

import OrderItem from "./OrderItem";
import { useEffect } from "react";
import IMenuItem from "../../interfaces/IMenuItem";
import UpdateOrder from "./UpdateOrder";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData() as IOrderItem;
  const fetcher = useFetcher<IMenuItem[]>();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, [fetcher]);

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
        <h2 className="text-xl font-semibold">
          Order #:{" "}
          <span className="rounded-lg bg-gray-300 p-1 font-mono text-red-500">
            {id}
          </span>{" "}
          status
        </h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className="divide-y-2 divide-stone-200 border-y">
        {cart.map((item) => (
          <OrderItem
            key={item.pizzaId}
            item={item}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher.data?.find((pizza) => pizza.id === item.pizzaId)
                ?.ingredients ?? []
            }
          />
        ))}
      </ul>

      <div className="space-y-2 rounded-lg bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600 md:text-base">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600 md:text-base">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

async function orderLoader({ params }: { params: Params }) {
  if (!params.orderId) throw new Error("No order ID provided");
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
export { orderLoader };
