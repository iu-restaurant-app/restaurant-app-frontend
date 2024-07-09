import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`bg-white text-gray-800 fixed h-3/4 top-1/2 left-0 transform -translate-y-1/2 transition-all duration-300 z-10 ${
        isOpen ? 'w-64' : 'w-0 overflow-hidden'
      } rounded-l-lg shadow-lg`}
    >
      <div className="flex flex-col justify-between h-full p-4">
        <div className="flex flex-col items-start">
          <div className="mt-4">
            <Link
              href="#"
              className="text-gray-800 hover:text-gray-500 font-bold"
            >
              Menu
            </Link>
          </div>
          <div className="mt-4">
            <Link
              href="/about-us"
              className="text-gray-800 hover:text-gray-500 font-bold"
            >
              About Us
            </Link>
          </div>
          <div className="mt-4">
            <a href="#" className="text-gray-800 hover:text-gray-500 font-bold">
              Contacts
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start mb-4 text-gray-800">
          <div className="mt-4">
            <p>Hours: 10:00 - 22:00</p>
          </div>
          <div className="mt-4">
            <p>Address: Innopolis, Universitetskaia, 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
