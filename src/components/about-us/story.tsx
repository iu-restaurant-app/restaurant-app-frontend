import Image from 'next/image';
import pastaEgg from '/public/pastaEgg.jpg';
import pasta from '/public/pasta.jpg';
import pastaReady from '/public/pastaReady.jpg';
import Carousel from '@/components/carousel';
import React from 'react';
/*
some components were taken from:
https://www.w3schools.com/howto/howto_css_parallax.asp
https://blog.logrocket.com/create-parallax-scrolling-css/
https://flowbite.com/docs/components/card/
*/
const DATA = [
  { image: '/table.jpg' },
  { image: '/inside.jpg' },
  { image: '/manyTables.jpg' },
  { image: '/inside2.jpg' },
  { image: '/bar.jpg' },
  { image: '/barClose.jpg' },
];

export default function Story() {
  return (
    <div>
      <meta
        name="viewport"
        content="width=device-width,height=device-height,initial-scale=1.0"
      />
      <div className="@apply w-full min-h-[15vh] md:min-h-[20vh] bg-red-900 flex justify-center items-center">
        <br />
        <h1 className="text-2xl font-normal md:text-5xl text-white text-center">
          Cari amici, benvenuti al{' '}
        </h1>
        <br />
      </div>
      <section className="@apply flex min-h-screen flex-col items-center justify-center bg-fixed bg-[url('/palace.jpeg')] bg-center bg-cover text-black] gap-y-16 text-center">
        <div className="w-2xl bg-red-900 opacity-95 border border-red-900 shadow m-auto pt-4 pb-4 pl-10 pr-10 md:pt-4 md:pb-4 md:pl-24 md:pr-24">
          <h1 className="text-white text-4xl font-light font-serif md:text-7xl">
            Pasta Palace
          </h1>
        </div>
      </section>

      <section className="@apply w-full min-h-[40vh] bg-red-900">
        <br />
        <h1 className="text-center text-3xl md:text-5xl text-white font-semibold">
          Our story
        </h1>
        <br />
        <p className="m-auto text-center font-light w-[90%] md:w-[70%] text-xl md:text-2xl text-white">
          Welcome to Pasta Palace, a cozy and inviting eatery serving up
          delicious Italian-inspired dishes. Our story began with a passion for
          pasta and a dream to share that love with our community. Our chefs use
          only the freshest ingredients to craft each dish, from classic
          spaghetti Bolognese to creative vegetarian options. Our warm and
          welcoming atmosphere makes us the perfect spot for date nights, family
          gatherings, or simply a night out with friends. Come taste the
          difference for yourself and experience the authentic Italian flavors
          that have made us a local favorite.
        </p>{' '}
        <br />
      </section>

      <section className="@apply bg-gray-50/40 flex min-h-screen flex-col items-center justify-center bg-fixed bg-[url('/italianFood.jpg')] bg-center bg-cover text-black] gap-y-16 text-center bg-white">
        <div className="max-w-80 md:max-w-2xl bg-yellow-50 border border-yellow-50 rounded-3xl shadow mt-10 md:ml-96 md:mt-0">
          <div className="p-5">
            <h3 className="text-2xl md:text-4xl font-semibold text-red-900">
              Our goal
            </h3>
            <br />
            <p className="mb-3 font-light text-red-900 font-serif text-xl">
              At Pasta Palace, our goal is simple - to transport you to the
              cobblestone streets of Italy with every dish we serve. We strive
              to bring the authentic flavors and traditions of Italian cuisine
              to your table, creating a dining experience that is both delicious
              and memorable.
            </p>
          </div>
        </div>

        <div className="max-w-80 md:max-w-2xl bg-yellow-50 border border-yellow-50 rounded-3xl shadow md:mr-96">
          <div className="p-5">
            <h3 className="text-2xl md:text-4xl font-semibold text-red-900">
              Our purpose
            </h3>
            <br />
            <p className="mb-3 font-light text-red-900 font-serif text-xl">
              Beyond serving incredible food, Pasta Palace is a place where
              friends and families come together to share laughter, stories, and
              of course, amazing pasta. We believe in the power of food to bring
              people closer, and our cozy restaurant is the perfect setting for
              creating unforgettable memories.
            </p>
          </div>
        </div>
        <br />
      </section>

      <section className="@apply w-full min-h-[100vh] bg-gradient-to-b from-red-900 via-orange-700 to-yellow-50">
        <br />
        <h1 className="text-center text-3xl md:text-5xl text-white font-semibold">
          Our kitchen
        </h1>
        <br />
        <p className="m-auto text-center font-light w-[90%] md:w-[70%] text-xl md:text-2xl text-white">
          Step into our kitchen and you will find a team of passionate chefs who
          pour their heart and soul into each and every dish. Using only the
          freshest ingredients and time-honored recipes, we craft mouthwatering
          pasta dishes that will tantalize your taste buds and leave you craving
          more.
        </p>

        <Image
          className="rounded-full w-72 h-72 md:w-96 md:h-96 justify-center mt-8 m-auto"
          src={pastaEgg}
          alt="Pasta dough making"
        />
        <br />
        <p className="m-auto text-center font-light w-[90%] md:w-[70%] text-xl md:text-2xl text-white">
          We take pride in serving the finest quality of food that truly
          captures the essence of traditional Italian cuisine. Our experienced
          chefs meticulously select the freshest ingredients to craft each dish
          with care and precision.
        </p>

        <br />
        <Image
          className="rounded-full w-72 h-72 md:w-96 md:h-96 m-auto"
          src={pasta}
          alt="Pasta and ravioli on a table"
        />
        <br />
        <p className="m-auto text-center font-light w-[90%] md:w-[70%] text-xl md:text-2xl text-red-900">
          With a focus on authentic recipes and time-honored cooking techniques,
          every bite is a symphony of flavors that transport you to the streets
          of Italy.
        </p>
        <br />

        <Image
          className="rounded-full w-72 h-72 md:w-96 md:h-96 m-auto"
          src={pastaReady}
          alt="Ready pasta"
        />
        <br />
        <p className="m-auto text-center font-light w-[90%] md:w-[70%] text-xl md:text-2xl text-red-900">
          From our homemade pasta to wood-fired pizzas, each dish is a
          celebration of taste that will leave you craving more. Come savor the
          true essence of Italy with us and experience the unparalleled quality
          and deliciousness of our dishes.
        </p>
        <br />
      </section>

      <section className="@apply flex min-h-screen flex-col items-center justify-center bg-fixed bg-yellow-50 bg-center bg-cover text-black] gap-y-16 text-center">
        <h1 className="text-red-900 text-3xl md:text-5xl font-semibold align-text-top">
          Our atmosphere
        </h1>
        <Carousel data={DATA} />
      </section>
    </div>
  );
}
