'use client';
import CartItem from '@/components/menu/cart/cart-item';
import { useCartStore } from '@/hooks/useCartStorage';
import InputField from '@/components/common/input-field';
import Select from '@/components/menu/cart/select';
import OrderButton from '@/components/menu/cart/order-button';
import React from 'react';

export default function CartTable() {
  const { closeCart, cartItems, cartQuantity, total } = useCartStore(
    state => state,
  );

  function hideCart() {
    closeCart();
    document.body.classList.remove('overflow-hidden');
  }

  return (
    <>
      <div className={`z-40 absolute top-0 right-0 grid grid-cols-4 h-screen`}>
        <div className="col-start-2 col-span-3 text-sm text-gray-500 shadow-md bg-default-50">
          <div className="text-xs text-gray-700 uppercase bg-default-50">
            <div className="grid grid-cols-5 content-center place-items-center items-center bg-default-50 border-b ">
              <div className="py-3 col-start-3 text-gray-900">Cart</div>
              <div className="py-3 col-start-5" onClick={hideCart}>
                <svg
                  className="w-6 h-6 text-gray-800 cursor-pointer"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className={`overflow-auto bg-default-50 flex flex-col h-[580px] ${cartQuantity > 0 ? '' : 'h-screen'}`}
          >
            {cartQuantity > 0 ? (
              cartItems.map((item, key) => (
                <div
                  key={key}
                  className="flex-shrink-0 bg-default-50 h-[115px] grid grid-cols-4 border-b hover:bg-default-100 justify-items-center"
                >
                  <CartItem title={item.title} quantity={item.quantity} />
                </div>
              ))
            ) : (
              <div className="flex w-full h-full overflow-hidden">
                <div className="text-xl justify-self-center self-center text-center w-full">
                  No items in the cart
                </div>
              </div>
            )}
          </div>
          {cartQuantity > 0 && (
            <div className={`fixed bottom-0`}>
              <div className="bg-default-50 h-[115px] w-full border-b justify-items-center grid grid-cols-1">
                <div className="col-span-1 w-full border-t">
                  <InputField>Comment on the order</InputField>
                </div>
              </div>
              <div className="bg-default-50 h-[100px] w-full border-b justify-items-start grid grid-cols-1">
                <div className="col-span-1 flex items-center justify-start justify-items-start m-4">
                  <Select />
                </div>
              </div>
              <div className="bg-default-50 h-[80px] w-full justify-items-center grid grid-cols-4 content-center items-center font-semibold text-gray-900">
                <div className="px-6 py-3 text-xs uppercase">Total:</div>
                <div className="px-6 py-3">{total}$</div>
                <div className="col-span-2 px-6 py-3">
                  <OrderButton />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
