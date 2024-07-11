import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MealRequestResponse } from '@/api/meal/request/meal-request-response';

interface CartItem {
  title: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  mealItems: MealRequestResponse[];
  cartQuantity: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  increaseCartQuantity: (title: string) => void;
  decreaseCartQuantity: (title: string) => void;
  removeFromCart: (title: string) => void;
  setMealItems: (newMealItems: MealRequestResponse[]) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    set => ({
      cartItems: [],
      mealItems: [],
      cartQuantity: 0,
      isOpen: false,

      openCart: () => set(state => ({ isOpen: true })),
      closeCart: () => set(state => ({ isOpen: false })),
      increaseCartQuantity: (title: string) =>
        set(state => {
          const itemIndex = state.cartItems.findIndex(
            item => item.title === title,
          );
          state.cartQuantity += 1;
          const newCartItems =
            itemIndex >= 0
              ? state.cartItems.map((item, index) =>
                  index === itemIndex
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
                )
              : [...state.cartItems, { title, quantity: 1 }];
          return { ...state, cartItems: newCartItems };
        }),
      decreaseCartQuantity: (title: string) =>
        set(state => {
          const itemIndex = state.cartItems.findIndex(
            item => item.title === title,
          );
          if (state.cartQuantity > 0) state.cartQuantity -= 1;
          if (itemIndex >= 0) {
            const item = state.cartItems[itemIndex];
            const newCartItems =
              item.quantity > 1
                ? state.cartItems.map((item, index) =>
                    index === itemIndex
                      ? { ...item, quantity: item.quantity - 1 }
                      : item,
                  )
                : state.cartItems.filter((_, index) => index !== itemIndex);
            return { ...state, cartItems: newCartItems };
          }
          return state;
        }),
      removeFromCart: (title: string) =>
        set(state => ({
          ...state,
          cartItems: state.cartItems.filter(item => item.title !== title),
          cartQuantity: state.cartQuantity - 1,
        })),
      setMealItems: newMealItems =>
        set(state => ({
          ...state,
          mealItems: newMealItems,
        })),
    }),
    { name: 'cart-store' },
  ),
);
