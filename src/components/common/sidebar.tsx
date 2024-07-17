import Link from 'next/link';
import {
  FaClock,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isAboutUs: boolean;
}

export default function Sidebar(props: SidebarProps) {
  return (
    <>
      {props.isOpen && (
        <div
          className="fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50"
          onClick={() => props.setIsOpen(false)}
        ></div>
      )}
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
          props.isOpen ? '' : '-translate-x-full'
        } bg-white`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Pasta Palace
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          onClick={() => props.setIsOpen(false)}
          className={`${
            props.isAboutUs
              ? 'hover:text-black'
              : 'hover:bg-default-100 hover:text-gray-900'
          } text-gray-400 bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center`}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center mt-4">
              <FaHome className="text-gray-800" />
              <Link
                href="/"
                className="ml-3 font-bold text-gray-800 hover:text-gray-600"
                onClick={() => props.setIsOpen(false)}
              >
                Home
              </Link>
            </div>
            <div className="flex items-center mt-4">
              <FaInfoCircle className="text-gray-800" />
              <Link
                href="/about-us"
                className="ml-3 font-bold text-gray-800 hover:text-gray-600"
                onClick={() => props.setIsOpen(false)}
              >
                About Us
              </Link>
            </div>
            <div className="flex items-center mt-4">
              <FaEnvelope className="text-gray-800" />
              <Link
                className="ml-3 font-bold text-gray-800 hover:text-gray-600"
                href="/about-us#contact-us"
                onClick={() => props.setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-gray-800" />
              <span className="ml-3 font-bold text-gray-800">
                +7 922 886 08-08
              </span>
            </div>
            <div className="flex items-center mb-4">
              <FaClock className="text-gray-800" />
              <span className="ml-3 font-bold text-gray-800">
                Hours: 10:00-22:00
              </span>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-gray-800" />
              <span className="ml-3 font-bold text-gray-800">
                Address: Innopolis, Universitetskaia, 1
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
