import { MenuItem } from "@/data/menu";
import { create } from "zustand";

interface CartState {
  items: MenuItem[];
  add: (item: MenuItem) => void;
  remove: (item: MenuItem) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  items: [],
  add: (item) => set((state) => ({ items: [...state.items, item] })),
  remove: (item) =>
    set((state) => ({
      items: state.items.filter((i) => i.name !== item.name),
    })),
}));
