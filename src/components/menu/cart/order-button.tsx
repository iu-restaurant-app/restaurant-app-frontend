import { useCartStore } from '@/hooks/useCartStorage';
import { toast } from 'react-hot-toast';

export default function OrderButton() {
  const { clearCart } = useCartStore(state => state);
  return (
    <button
      type="button"
      className="text-white bg-default-600 hover:bg-default-700 transition-colors duration-300 ease-in-out font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
      onClick={() => {
        clearCart();
        toast('Ordered successfully!', {
          icon: '👏',
        });
      }}
    >
      Order
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </button>
  );
}
