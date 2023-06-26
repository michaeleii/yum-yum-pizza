import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ICartItem from "../../interfaces/ICartItem";
import { RootState } from "../../store";

interface CartState {
  cart: ICartItem[];
}

const initialState: CartState = {
  //   cart: [],
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItem>) {
      state.cart.push(action.payload);
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (!item) return;
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (!item) return;
      if (item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      } else {
        cartSlice.caseReducers.removeFromCart(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

const getCart = (state: RootState) => state.cart.cart;

const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce((total, item) => total + item.totalPrice, 0);

const getCurrentQuantityById = (id: number) => (state: RootState) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export default cartSlice.reducer;
export const {
  addToCart,
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
} = cartSlice.actions;

export {
  getCart,
  getTotalCartPrice,
  getTotalCartQuantity,
  getCurrentQuantityById,
};
