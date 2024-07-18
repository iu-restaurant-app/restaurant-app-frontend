'use client';
import ContactUs from '@/components/about-us/contact-us';
import ScrollToTopButton from '@/components/common/scroll-to-top-button';
import Hero from '@/components/about-us/hero';
import Story from '@/components/about-us/story';
import SEO from '@/components/common/seo';
import React from 'react';

export default function Home() {
  return (
    <>
      <SEO
        title={'About Pasta Palace'}
        description={'Page with the story of Pasta Palace creation'}
      />
      <Hero />
      <Story />
      <ContactUs />
      <ScrollToTopButton
        color={'bg-default-600'}
        onHoverColor={'bg-default-800'}
      />
    </>
  );
}
