import React from 'react';

export default function Hero() {
  return (
    <div>
      <meta
        name="viewport"
        content="width=device-width,height=device-height,initial-scale=1.0"
      />
      <section className="@apply flex min-h-screen flex-col items-center justify-center bg-fixed bg-[url('/colorimagehero.png')] bg-center bg-cover text-black] gap-y-16 text-center">
        <h1 className="items-center justify-center font-medium text-4xl tracking-tight leading-none text-default-50 md:text-5xl lg:text-6xl">
          Your window to sunny Italy
        </h1>
        <p className="flex mb-24 items-center justify-center text-lg font-normal text-default-50 lg:text-2xl">
          Nulla è sprecato, se fatto con amore.
        </p>
      </section>
    </div>
  );
}
