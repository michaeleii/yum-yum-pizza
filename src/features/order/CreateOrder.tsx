import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import ICartItem from "../../interfaces/ICartItem";
import { createOrder } from "../../services/apiRestaurant";
import IOrderItem from "../../interfaces/IOrderItem";
import Button from "../../ui/Button";
import { useAppSelector } from "../../hook";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const username = useAppSelector((state) => state.user.username);
  const navigation = useNavigation();
  const formErrors = useActionData() as Record<string, string>;

  const cart = fakeCart;
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="px-4 py-6">
      <h2 className="m-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            required
            defaultValue={username}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="rounded-md bg-red-100 p-2 text-xs text-red-700 md:text-sm">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function createOrderAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...(data as {
      customer: string;
      phone: string;
      address: string;
    }),
    cart: JSON.parse(data.cart as string) as ICartItem[],
    priority: data.priority === "on",
  };

  const newOrder = await createOrder(order);

  const errors = {} as Record<string, string>;
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us a valid phone number. We might need it to contact you.";

  return Object.keys(errors).length > 0
    ? errors
    : // If there are no errors, redirect to the order page
      redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
