'use client';
import ContactUs from '@/components/about-us/contact-us';
import ScrollToTopButton from '@/components/common/scroll-to-top-button';
import Hero from '@/components/about-us/hero';
import Story from '@/components/about-us/story';
import SEO from '@/components/common/seo';
import React, { useState } from 'react';
import Navbar from '@/components/about-us/navbar';
import Sidebar from '@/components/common/sidebar';
import { useCartStore } from '@/hooks/useCartStorage';

export default function Home() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const { isOpen } = useCartStore(state => state);
  return (
    <>
      <SEO
        title={'About Pasta Palace'}
        description={'Page with the story of Pasta Palace creation'}
      />
      <Navbar isOpen={isOpenSidebar} setIsOpen={setIsOpenSidebar} />
      <Sidebar
        isOpen={isOpenSidebar}
        setIsOpen={setIsOpenSidebar}
        isAboutUs={true}
      />
      <Hero />
      <Story />
      <ContactUs />
      <ScrollToTopButton color={'bg-red-800'} onHoverColor={'bg-red-900'} />
    </>
  );
}
