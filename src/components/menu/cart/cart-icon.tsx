'use client';
interface CartIconProps {
  onclick: () => void;
  quantity: number;
}

export default function CartIcon(props: CartIconProps) {
  return (
    <button
      type="button"
      className="absolute inline-flex items-center p-3 text-sm font-medium text-center text-white bg-white rounded-full hover:bg-default-100 shadow-md shadow-gray-200 right-5 top-5"
      onClick={props.onclick}
    >
      <svg
        className="w-6 h-6 text-default-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M5.617 2.076a1 1 0 0 1 1.09.217L8 3.586l1.293-1.293a1 1 0 0 1 1.414 0L12 3.586l1.293-1.293a1 1 0 0 1 1.414 0L16 3.586l1.293-1.293A1 1 0 0 1 19 3v18a1 1 0 0 1-1.707.707L16 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L12 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L8 20.414l-1.293 1.293A1 1 0 0 1 5 21V3a1 1 0 0 1 .617-.924ZM9 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
          clipRule="evenodd"
        />
      </svg>
      <span className="sr-only">Notifications</span>
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-default-600 border-2 border-white rounded-full -top-1 -end-1">
        {props.quantity}
      </div>
    </button>
  );
}
