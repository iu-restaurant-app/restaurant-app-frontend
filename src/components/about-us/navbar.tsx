import { useCartStore } from '@/hooks/useCartStorage';

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Navbar(props: NavbarProps) {
  const { cartQuantity } = useCartStore(state => state);
  return (
    <>
      <button
        data-collapse-toggle="navbar-hamburger"
        type="button"
        onClick={() => props.setIsOpen(!props.isOpen)}
        className="absolute left-4 top-3.5 inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-full hover:bg-gray-700 hover:opacity-60 hover:shadow-md hover:shadow-gray-900"
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
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </>
  );
}
