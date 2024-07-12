import React from 'react';
import SideBarButton from '@/components/common/side-bar-button';

interface NavbarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <nav className="bg-white p-4 rounded-b-lg flex justify-between items-center">
      <div className="flex items-center">
        <SideBarButton isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>
    </nav>
  );
};

export default Navbar;
