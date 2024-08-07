'use client';
//Some styles are taken from https://flowbite.com
import NumberInputButton from '@/components/menu/menu-item/number-input-button';
import AddToCartButton from '@/components/menu/menu-item/add-to-cart-button';
import { useCartStore } from '@/hooks/useCartStorage';

export interface MenuItemProps {
  title: string;
  description: string;
  price: number;
  calories: number;
  image: string;
}

export default function MenuItem(props: MenuItemProps) {
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    closeCart,
    cartItems,
    cartQuantity,
  } = useCartStore(state => state);

  const quantity =
    cartItems.find(item => item.title === props.title)?.quantity || 0;

  return (
    <div className="flex justify-center min-w-[50px]">
      <div className="bg-white border border-gray-200 rounded-lg shadow flex flex-col content-between max-w-[300px]">
        <img
          className="rounded-t-lg max-h-[400px]"
          src={props.image}
          alt={props.title}
        />

        <div className="p-5 flex flex-col justify-between h-full gap-4">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {props.title}
            </h5>

            <p className="mb-3 font-normal text-gray-700 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg">
              {props.description}
            </p>
          </div>
          <div className="flex justify-between flex-col sm:flex-row sm:items-start sm:content-start gap-2 md:content-center md:items-center">
            <p className="font-light text-gray-500">
              {props.calories + ' calories'}
            </p>
            <div
              className={
                'h-[35px] max-w-[70px] transition-colors duration-300 ease-in-out inline-flex text-default-600 hover:text-white hover:bg-default-600 rounded-lg'
              }
            >
              {quantity === 0 ? (
                <AddToCartButton
                  onClick={() => {
                    increaseCartQuantity(props.title);
                  }}
                  price={props.price}
                />
              ) : (
                <NumberInputButton
                  whenAmountBelowOne={() => {
                    removeFromCart(props.title);
                    if (cartQuantity <= 1) closeCart();
                  }}
                  decreaseFunction={() => {
                    decreaseCartQuantity(props.title);
                  }}
                  increaseFunction={() => {
                    increaseCartQuantity(props.title);
                  }}
                  count={quantity}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
