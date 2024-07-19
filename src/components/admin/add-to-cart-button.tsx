//Some styles are taken from https://flowbite.com
'use client';

interface AddToCartButtonProps {
  price: number;
}

export default function AddToCartButton(props: AddToCartButtonProps) {
  return (
    <button
      type="button"
      className={`max-w-[100px] transition-colors duration-300 ease-in-out inline-flex text-default-600 hover:text-white border border-default-600 hover:bg-default-600 hover:max-w-[100px] font-medium rounded-lg text-sm px-2 py-2 group items-center justify-between`}
    >
      <div className="inline-flex mr-2">
        <div className="mr-0.5">{props.price}</div>
        <div>$</div>
      </div>
      <div>
        <svg
          className={`w-3 h-3 text-default-600`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </div>
    </button>
  );
}
