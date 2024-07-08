'use client';
//Some styles are taken from https://flowbite.com
import NumberInputButton from '@/components/menu/menu-item/number-input-button';
import AddToCartButton from '@/components/menu/menu-item/add-to-cart-button';
import { useShoppingCart } from '@/context/ShoppingCartContext';

interface MenuItemProps {
  title: string;
  description: string;
  price: number;
  calories: number;
  image: string;
}

export default function MenuItem(props: MenuItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    closeCart,
    openCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(props.title);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={props.image} alt={props.title} />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
          {props.calories + ' calories'}
        </p>
        <div
          className={
            'h-[35px] transition-colors duration-300 ease-in-out inline-flex text-default-600 hover:text-white hover:bg-default-600 rounded-lg dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600'
          }
        >
          {quantity === 0 ? (
            <AddToCartButton
              onClick={() => {
                increaseCartQuantity(props.title);
              }}
              price={50}
            />
          ) : (
            <NumberInputButton
              whenAmountBelowOne={() => {
                removeFromCart(props.title);
                closeCart();
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
