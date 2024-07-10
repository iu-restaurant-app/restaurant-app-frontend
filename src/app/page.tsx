'use client';
import React, { useState } from 'react';
import Navbar from '@/components/nav-bar';
import Sidebar from '@/components/side-bar';

const MainComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        {isOpen && (
          <div
            className="fixed inset-0 bg-gray-800 opacity-50 z-30"
            onClick={closeSidebar}
          ></div>
        )}
        <Sidebar isOpen={isOpen} onClose={closeSidebar} />
      </div>
    </div>
  );
};

export default MainComponent;