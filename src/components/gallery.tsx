'use client';
import React, { useEffect, useRef, useState } from 'react';
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
      <div className="w-screen h-auto m-auto">
        <div
          style={{ backgroundImage: `url(${data[currentImg].image})` }}
          className="w-full h-[150px] sm:h-[250px] md:h-[350px] lg:h-[450px] bg-center bg-cover duration-1000"
        ></div>
      </div>
    </>
  );
}
