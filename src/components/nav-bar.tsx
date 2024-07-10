import React from 'react';
import Link from 'next/link';
import SideBarButton from '@/components/side-bar-button';

interface NavbarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <nav className="bg-white shadow-lg p-4 rounded-b-lg flex justify-between items-center">
      <div className="flex items-center">
        <SideBarButton isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Link href="/" className="ml-4 text-gray-800 hover:text-gray-600">
          Home
        </Link>
        <Link
          href="/about-us"
          className="ml-4 text-gray-800 hover:text-gray-600"
        >
          About Us
        </Link>
        <a href="#ContactUs" className="ml-4 text-gray-800 hover:text-gray-600">
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
