'use client';

import Image from 'next/image';

const images = [
  { src: '/images/ss1.jpg', alt: 'Screenshot 1' },
  { src: '/images/ss2.jpg', alt: 'Screenshot 2' },
  { src: '/images/ss3.jpg', alt: 'Screenshot 3' },
  { src: '/images/ss4.jpg', alt: 'Screenshot 4' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Game Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-lg font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
