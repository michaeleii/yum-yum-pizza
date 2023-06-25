import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import ICartItem from "../../interfaces/ICartItem";
import { createOrder } from "../../services/apiRestaurant";
import IOrderItem from "../../interfaces/IOrderItem";

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
  const navigation = useNavigation();
  const formErrors = useActionData() as Record<string, string>;

  const cart = fakeCart;
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
          </button>
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
      "Please give us a valid phone number. We might need to call you to confirm your order.";

  return Object.keys(errors).length > 0
    ? errors
    : // If there are no errors, redirect to the order page
      redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
