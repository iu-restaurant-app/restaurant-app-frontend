'use client';

interface NumberInputButtonProps {
  whenAmountBelowOne: () => void;
  decreaseFunction: () => void;
  increaseFunction: () => void;
  count: number;
}

export default function NumberInputButton(props: NumberInputButtonProps) {
  return (
    <div className="inline-flex items-stretch w-full">
      <form className="inline-flex w-full">
        <div className="flex items-stretch justify-between w-full">
          <div className="flex items-stretch">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="quantity-input"
              className="bg-default-600 flex items-center justify-center dark:bg-default-700 dark:hover:bg-default-600 rounded-s-lg p-1 focus:outline-none group"
              onClick={() => {
                if (props.count === 1) {
                  props.whenAmountBelowOne();
                } else {
                  props.decreaseFunction();
                }
              }}
            >
              <div className="p-1 rounded-lg bg-default-600 transition-colors duration-300 ease-in-out group-hover:bg-default-950">
                <svg
                  className="w-3 h-3 text-white transition-colors duration-300 ease-in-out dark:text-default-50"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M1 1h16"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="flex content-center items-stretch bg-default-600">
            <span
              id="quantity"
              aria-describedby="helper-text-explanation"
              className="text-white px-2 bg-default-600 border-x-0 text-center text-sm flex py-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 w-7 content-center justify-center self-center"
            >
              {props.count}
            </span>
          </div>
          <div className="flex items-stretch content-center">
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="quantity-input"
              className="flex items-center justify-center bg-default-600 dark:bg-default-700 dark:hover:bg-default-600 rounded-e-lg p-1 focus:outline-none group"
            >
              <div
                className="transition-colors duration-300 ease-in-out p-1 rounded-lg bg-default-600 group-hover:bg-default-950"
                onClick={props.increaseFunction}
              >
                <svg
                  className="transition-colors duration-300 ease-in-out w-3 h-3 text-white dark:text-default-50 "
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
          </div>
        </div>
      </form>
    </div>
  );
}
