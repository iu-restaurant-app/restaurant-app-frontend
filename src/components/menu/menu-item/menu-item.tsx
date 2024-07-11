'use client';
//Some styles are taken from https://flowbite.com
import NumberInputButton from '@/components/menu/menu-item/number-input-button';
import AddToCartButton from '@/components/menu/menu-item/add-to-cart-button';
import { useCartStore } from '@/hooks/useCartStorage';

interface MenuItemProps {
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
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow grid grid-rows-3 max-h-[550px]">
      <img
        className="rounded-t-lg row-span-2"
        src={props.image}
        alt={props.title}
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {props.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700">{props.description}</p>
        <p className="mb-3 font-light text-gray-500">
          {props.calories + ' calories'}
        </p>
        <div
          className={
            'h-[35px] transition-colors duration-300 ease-in-out inline-flex text-default-600 hover:text-white hover:bg-default-600 rounded-lg'
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
              decreaseFunction={() => decreaseCartQuantity(props.title)}
              increaseFunction={() => increaseCartQuantity(props.title)}
              count={quantity}
            />
          )}
        </div>
      </div>
    </div>
  );
}
