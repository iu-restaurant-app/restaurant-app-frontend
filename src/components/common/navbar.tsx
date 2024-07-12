import { useCartStore } from '@/hooks/useCartStorage';
import CartIcon from '@/components/menu/cart/cart-icon';

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Navbar(props: NavbarProps) {
  const { cartQuantity } = useCartStore(state => state);
  return (
    <nav className="border-gray-200 bg-white h-[70px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          onClick={() => props.setIsOpen(!props.isOpen)}
          className="absolute left-4 top-3.5 inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-full hover:bg-default-100 hover:shadow-md hover:shadow-gray-200"
          aria-controls="navbar-hamburger"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {cartQuantity > 0 && <CartIcon />}
      </div>
    </nav>
  );
}
