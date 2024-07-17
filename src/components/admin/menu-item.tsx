'use client';
//Some styles are taken from https://flowbite.com
import AddToCartButton from '@/components/admin/add-to-cart-button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useMealStore } from '@/hooks/useMealStorage';

export interface MenuItemProps {
  title: string;
  description: string;
  price: number;
  calories: number;
  image: string;
  handleDelete: () => void;
}

export default function MenuItem(props: MenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const { setItemToDelete } = useMealStore(state => state);
  function handleClickDelete() {
    props.handleDelete();
    setItemToDelete(props.title);
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative`}
    >
      <div
        className={`max-w-sm bg-white border transition duration-300 ease-in-out border-gray-200 rounded-lg shadow flex flex-col content-between h-full ${isHovered && 'bg-gray-200 scale-105 filter brightness-50 blur-sm '}`}
      >
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

            <p className="mb-3 font-normal text-gray-700">
              {props.description}
            </p>
          </div>
          <div className="flex justify-between content-center items-center">
            <p className="font-light text-gray-500">
              {props.calories + ' calories'}
            </p>
            <div className={`h-[35px] inline-flex text-default-600 rounded-lg`}>
              <AddToCartButton price={props.price} />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={'h-0'}
          >
            <button onClick={() => router.push(`/admin/update/${props.title}`)}>
              <span
                className={`absolute top-64 left-12 flex items-center justify-center w-10 h-10 bg-default-100 hover:bg-default-400 cursor-pointer outline outline-gray-800 hover:outline-black rounded-full group lg:h-16 lg:w-16 shrink-0 transition duration-300 ease-in-out hover:scale-110`}
              >
                <svg
                  className={`w-6 h-6 text-gray-800 group-hover:text-black`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                  />
                </svg>
              </span>
            </button>

            <button onClick={handleClickDelete}>
              <span
                className={`absolute top-64 right-12 flex items-center justify-center w-10 h-10 bg-red-400 hover:bg-red-600 cursor-pointer rounded-full lg:h-16 lg:w-16 shrink-0 group outline outline-gray-800 hover:outline-black transition duration-300 ease-in-out hover:scale-110`}
              >
                <svg
                  className="w-6 h-6 text-gray-800 group-hover:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                  />
                </svg>
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
