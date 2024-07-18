'use client';

import Gallery from '@/components/menu/gallery';
import MenuSearch from '@/components/menu/menu-search';
import MenuGallery from '@/components/menu/menu-gallery';
import ScrollToTopButton from '@/components/common/scroll-to-top-button';
import React, { useState } from 'react';
import Navbar from '@/components/common/navbar';
import Sidebar from '@/components/common/sidebar';
import CartTable from '@/components/menu/cart/cart-table';
import { motion } from 'framer-motion';
import { useCartStore } from '@/hooks/useCartStorage';
import SEO from '@/components/common/seo';
import Overlay from '@/components/admin/overlay';

export default function Home() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const { isOpen, closeCart } = useCartStore(state => state);

  function hideCart() {
    closeCart();
    document.body.classList.remove('overflow-hidden');
  }

  return (
    <>
      <SEO
        title={'Pasta Palace Menu'}
        description={
          'Page with menu where everyone can order something they will like'
        }
      />
      <Navbar
        isOpen={isOpenSidebar}
        setIsOpen={setIsOpenSidebar}
        admin={false}
      />
      <Sidebar isOpen={isOpenSidebar} setIsOpen={setIsOpenSidebar} />
      <Gallery />
      <MenuSearch />
      <MenuGallery />
      <ScrollToTopButton
        color={'bg-default-800'}
        onHoverColor={'bg-default-900'}
      />
      <motion.div
        initial={{ x: '500px' }}
        animate={{ x: isOpen ? '0' : '500px' }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className={'fixed top-0 right-0 w-[400px] md:w-[500px] h-screen z-40'}
      >
        <CartTable />
      </motion.div>
      {isOpen && <Overlay onClick={hideCart} />}
    </>
  );
}
