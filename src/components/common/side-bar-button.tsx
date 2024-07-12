import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface SideBarButtonProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SideBarButton: React.FC<SideBarButtonProps> = ({
  isOpen,
  toggleSidebar,
}) => {
  return (
    <button
      className="bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-green-700"
      onClick={toggleSidebar}
    >
      {isOpen ? (
        <FaTimes className="h-6 w-6" />
      ) : (
        <FaBars className="h-6 w-6" />
      )}
    </button>
  );
};

export default SideBarButton;
