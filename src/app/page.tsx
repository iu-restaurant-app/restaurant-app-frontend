'use client';
import React, { useState } from 'react';
import MenuSearch from '@/components/menu/menu-search';
import MenuGallery from '@/components/menu/menu-gallery';
import Gallery from '@/components/menu/gallery';
import ScrollToTopButton from '@/components/common/scroll-to-top-button';

const MainComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/*<div className="flex flex-col min-h-screen">
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
      </div>*/}
      <Gallery />
      <MenuSearch />
      <MenuGallery />
      <ScrollToTopButton
        color={'bg-default-800'}
        onHoverColor={'bg-default-900'}
      />
    </>
  );
};

export default MainComponent;
