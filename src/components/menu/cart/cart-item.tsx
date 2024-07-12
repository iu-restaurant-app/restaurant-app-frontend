'use client';
import NumberInputButton from '@/components/menu/menu-item/number-input-button';
import { useCartStore } from '@/hooks/useCartStorage';
import { useMealStore } from '@/hooks/useMealStorage';

interface CartItemProps {
  title: string;
  quantity: number;
}

export default function CartItem(props: CartItemProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useCartStore(state => state);
  const { mealItems } = useMealStore(state => state);
  const item = mealItems.find(i => i.title == props.title);
  if (item == null) return null;
  return (
    <>
      <td className=" p-4 self-center items-center justify-center">
        <div className="h-15 overflow-hidden">
          <img
            src={item.image}
            className="rounded-lg object-cover md:h-[65px] md:w-[65px] h-[45px] w-[45px]"
            alt={props.title}
          />
        </div>
      </td>
      <td className="flex px-6 py-4 font-semibold text-gray-900 text-center items-center justify-center">
        {props.title}
      </td>
      <td className="flex px-6 py-4 justify-center self-center">
        <div className="flex items-center self-center">
          <NumberInputButton
            count={props.quantity}
            whenAmountBelowOne={() => removeFromCart(props.title)}
            decreaseFunction={() => {
              decreaseCartQuantity(props.title);
            }}
            increaseFunction={() => {
              increaseCartQuantity(props.title);
            }}
          />
        </div>
      </td>
      <td className="flex items-center justify-center px-6 py-4 font-semibold text-gray-900 text-center">
        {item.price * props.quantity + '$'}
      </td>
    </>
  );
}
