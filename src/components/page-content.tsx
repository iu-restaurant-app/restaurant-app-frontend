import { useShoppingCart } from '@/context/ShoppingCartContext';
import React from 'react';

export default function PageContent() {
  const { openCart, cartQuantity, mealItems } = useShoppingCart();
  //use mealItems to implement menu
  return (
    <div className="grid grid-cols-3 bg-white relative">
      {/*{cartQuantity > 0 && (*/}
      {/*  <CartIcon onclick={openCart} quantity={cartQuantity} />*/}
      {/*)}*/}

      {/*<CartTable />*/}
    </div>
  );
}
