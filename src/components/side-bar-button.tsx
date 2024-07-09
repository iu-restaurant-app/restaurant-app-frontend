import React from 'react';

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
      className="bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none"
      onClick={toggleSidebar}
    >
      {isOpen ? (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      )}
    </button>
  );
};

export default SideBarButton;
