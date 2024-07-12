import React from 'react';

export default function Hero() {
  return (
    <div>
      <meta
        name="viewport"
        content="width=device-width,height=device-height,initial-scale=1.0"
      />
      <section className="@apply flex min-h-screen flex-col items-center justify-center bg-fixed bg-[url('/colorimagehero.png')] bg-center bg-cover text-black] gap-y-16 text-center">
        <div className="z-10 mb-44 absolute inset-0 flex items-center justify-center text-4xl font-serif tracking-tight leading-none text-default-50 md:text-5xl lg:text-6xl">
          <h1 className="font-medium">Your window to sunny Italy</h1>
        </div>
        <div className="z-10 absolute inset-0 flex items-center justify-center text-lg font-normal text-default-50 lg:text-2xl">
          <p>Nulla è sprecato, se fatto con amore.</p>
        </div>
      </section>
    </div>
  );
}
