'use client';
import CartItem from '@/components/menu/cart/cart-item';
import { useCartStore } from '@/hooks/useCartStorage';
import InputField from '@/components/common/input-field';
import Select from '@/components/menu/cart/select';
import OrderButton from '@/components/menu/cart/order-button';
import { Toaster } from 'react-hot-toast';

export default function CartTable() {
  const { closeCart, cartItems, cartQuantity, total } = useCartStore(
    state => state,
  );

  return (
    <>
      <div className="fixed top-0 right-0 w-[400px] md:w-[500px] grid grid-cols-4 h-screen ">
        <table className="col-start-2 col-span-3 text-sm text-gray-500 shadow-md bg-default-50">
          <thead className="text-xs text-gray-700 uppercase bg-default-50">
            <tr className="grid grid-cols-5 content-center place-items-center items-center bg-default-50 border-b ">
              <th className="py-3 col-start-3 text-gray-900">Cart</th>
              <th className="py-3 col-start-5" onClick={closeCart}>
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
              </th>
            </tr>
          </thead>
          <tbody className="h-screen bg-default-50 flex flex-wrap items-start content-start">
            {cartQuantity > 0 ? (
              <>
                {cartItems.map((item, key) => (
                  <tr
                    key={key}
                    className="bg-default-50 h-[115px] grid grid-cols-4 border-b hover:bg-default-100 justify-items-center"
                  >
                    <CartItem title={item.title} quantity={item.quantity} />
                  </tr>
                ))}
                <tr className="bg-default-50 h-[115px] w-full border-b justify-items-center grid grid-cols-1">
                  <td className="col-span-1 w-full">
                    <InputField>Comment on the order</InputField>
                  </td>
                </tr>
                <tr className="bg-default-50 h-[80px] w-full border-b justify-items-start grid grid-cols-1">
                  <td className="col-span-1 flex items-center justify-start justify-items-start m-4">
                    <Select />
                  </td>
                </tr>
                <tr className="bg-default-50 h-[80px] w-full justify-items-center grid grid-cols-4 content-center items-center font-semibold text-gray-900">
                  <th scope="row" className="px-6 py-3 text-xs uppercase">
                    Total:
                  </th>
                  <td className="px-6 py-3">{total}$</td>
                  <td className="col-span-2 px-6 py-3">
                    <OrderButton />
                  </td>
                </tr>
              </>
            ) : (
              <tr className="flex w-full h-full">
                <td className="text-xl justify-self-center self-center text-center w-full">
                  No items in the cart
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
