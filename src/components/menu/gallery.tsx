'use client';
import React, { useEffect, useState } from 'react';
// taken from: https://stackademic.com/blog/creating-a-responsive-image-carousel-in-next-js-a-step-by-step-guide and https://www.youtube.com/watch?v=hOqdEBkP-q0

export default function Gallery() {
  const [currentImg, setCurrentImg] = useState(0);
  const data = [
    { image: '/gal1.jpeg' },
    { image: '/gal2.jpeg' },
    { image: '/gal3.jpeg' },
    { image: '/gal4.jpeg' },
    { image: '/gal5.jpeg' },
    { image: '/gal6.jpeg' },
    { image: '/gal7.jpeg' },
    { image: '/gal8.jpeg' },
  ];

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(autoplay);
  }, [currentImg]);
  const nextSlide = () => {
    setCurrentImg(prevIndex =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width,height=device-height,initial-scale=1.0"
      />
      <img className="w-0 h-0" src="/gal1.jpeg" alt="gallery-1" />
      <img className="w-0 h-0" src="/gal2.jpeg" alt="gallery-2" />
      <img className="w-0 h-0" src="/gal3.jpeg" alt="gallery-3" />
      <img className="w-0 h-0" src="/gal4.jpeg" alt="gallery-4" />
      <img className="w-0 h-0" src="/gal5.jpeg" alt="gallery-5" />
      <img className="w-0 h-0" src="/gal6.jpeg" alt="gallery-6" />
      <img className="w-0 h-0" src="/gal7.jpeg" alt="gallery-7" />
      <img className="w-0 h-0" src="/gal8.jpeg" alt="gallery-8" />
      <div className="w-screen h-auto m-auto">
        <div
          style={{ backgroundImage: `url(${data[currentImg].image})` }}
          className="w-full h-[150px] sm:h-[250px] md:h-[350px] lg:h-[450px] bg-center bg-cover duration-1000"
        ></div>
      </div>
    </>
  );
}
