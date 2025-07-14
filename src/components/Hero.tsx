'use client';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[600px] flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          Unleash Your Inner Hero
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
          Experience the next generation of action RPGs.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400">
          Play Now
        </button>
      </div>
    </section>
  );
}
