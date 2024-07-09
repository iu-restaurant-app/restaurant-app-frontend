import Hero from '@/components/hero';
import Story from '@/components/story';
import ContactUs from '@/components/contact-us';
import ScrollToTopButton from '@/components/scroll-to-top-button';

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
