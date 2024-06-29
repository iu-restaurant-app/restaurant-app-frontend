import Image from 'next/image'
import profilePic from '../colorimagehero.png'


export default function Hero() {
    return (
        <section className="bg-white">

            <img className="h-auto w-full object-cover"
                 src="../colorimagehero.png" alt="Italian landscape"/>
            <div
                    className="z-10 mb-44 absolute inset-0 flex items-center justify-center text-4xl font-serif tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    <h1>Your window to sunny Italy</h1>
                </div>
                <div className="z-10 absolute inset-0 flex items-center justify-center text-lg font-normal text-white lg:text-2xl">
                    <p>Nulla è sprecato, se fatto con amore.</p>
            </div>

        </section>
    )
}