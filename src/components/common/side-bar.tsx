import React from 'react';
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
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 z-40 h-screen p-4 bg-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-72 shadow-lg rounded-r-lg`}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center mt-4">
            <FaHome className="text-gray-800" />
            <Link
              href="/public"
              className="ml-3 font-bold text-gray-800 hover:text-gray-600"
              onClick={onClose}
            >
              Home
            </Link>
          </div>
          <div className="flex items-center mt-4">
            <FaInfoCircle className="text-gray-800" />
            <Link
              href="/about-us"
              className="ml-3 font-bold text-gray-800 hover:text-gray-600"
              onClick={onClose}
            >
              About Us
            </Link>
          </div>
          <div className="flex items-center mt-4">
            <FaEnvelope className="text-gray-800" />
            <Link
              className="ml-3 font-bold text-gray-800 hover:text-gray-600"
              href="/about-us#contact-us"
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
  );
};

export default Sidebar;
