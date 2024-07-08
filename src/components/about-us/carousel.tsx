'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
// taken from: https://stackademic.com/blog/creating-a-responsive-image-carousel-in-next-js-a-step-by-step-guide

const Carousel = ({
  data,
}: {
  data: {
    image: string;
  }[];
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);

  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement;
    let { width, height } = elem.getBoundingClientRect();
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      });
    }
  }, []);

  return (
    <div>
      <div className="relative h-[500px] w-[900px] overflow-hidden rounded-3xl">
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width,
          }}
          className="absolute flex h-full w-full transition-all duration-700"
        >
          {data.map((v, i) => (
            <div key={i} className="relative h-full w-full shrink-0">
              <Image
                className="pointer-events-none"
                alt={`carousel-image-${i}`}
                fill
                src={v.image || 'https://random.imagecdn.app/500/500'}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex justify-center">
        <button
          disabled={currentImg === 0}
          onClick={() => setCurrentImg(prev => prev - 1)}
          className={`border rounded-3xl px-4 py-2 font-bold ${currentImg === 0 && 'opacity-50'}`}
        >
          {'<-'}
        </button>
        <button
          disabled={currentImg === data.length - 1}
          onClick={() => setCurrentImg(prev => prev + 1)}
          className={`border rounded-3xl px-4 py-2 font-bold ${currentImg === data.length - 1 && 'opacity-50'}`}
        >
          {'->'}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
