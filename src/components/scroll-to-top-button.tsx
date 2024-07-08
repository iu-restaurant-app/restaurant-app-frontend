import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/20/solid';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 ${isVisible ? 'block' : 'hidden'}`}
    >
      <button
        onClick={scrollToTop}
        className="p-3 bg-default-600 text-white rounded-full shadow-lg hover:bg-default-700 focus:outline-none"
      >
        <ArrowUpIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
