import { create } from "zustand";

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (item: CartItem) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  items: [],
  add: (item) =>
    set((state) => {
      if (state.items.find((i) => i.name === item.name)) {
        return {
          items: state.items.map((i) =>
            i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      return { items: [...state.items, item] };
    }),
  remove: (item) =>
    set((state) => ({
      items: state.items.filter((i) => i.name !== item.name),
    })),
}));
