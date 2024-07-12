'use client';
import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/20/solid';

interface ScrollToTopButtonProps {
  color: string;
  onHoverColor: string;
}

export default function ScrollToTopButton(props: ScrollToTopButtonProps) {
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
        className={`p-3 ${props.color} text-white rounded-full shadow-lg hover:${props.onHoverColor} focus:outline-none`}
      >
        <ArrowUpIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
