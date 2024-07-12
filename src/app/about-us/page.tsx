import ContactUs from '@/components/about-us/contact-us';
import ScrollToTopButton from '@/components/common/scroll-to-top-button';
import Hero from '@/components/about-us/hero';
import Story from '@/components/about-us/story';

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <ContactUs />
      <ScrollToTopButton color={'bg-red-800'} onHoverColor={'bg-red-900'} />
    </>
  );
}
