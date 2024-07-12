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
      <meta
        name="viewport"
        content="width=device-width,height=device-height,initial-scale=1.0"
      />
      <div className="relative overflow-hidden rounded-3xl h-[200px] w-[350px] md:h-[500px] md:w-[900px]">
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
