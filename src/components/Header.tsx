'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useFullpage } from '@/context/FullpageContext';
import CompanyInfoModal from './CompanyInfoModal';

export default function Header() {
  const { activeSection, isMuted, toggleMute } = useFullpage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log('Header activeSection:', activeSection);

  const menuItems = [
    { name: '메인', anchor: '메인' },
    { name: '캐릭터', anchor: '캐릭터' },
    { name: 'PV', anchor: 'PV' },
    { name: '소식', anchor: '소식' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white px-4 py-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center">
        {/* Logo Section */}
        <Link href="https://www.starsavior.com/s/kr" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold ml-[-10px] transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-125 cursor-pointer">
          <Image
            src="/images/starsavior-real-logo.png"
            alt="STAR SAVIOR Logo"
            width={150}
            height={40}
            priority
          />
        </Link>

        {/* Menu Section */}
        <nav className="ml-16 mr-auto">
          <ul className="flex space-x-12">
            {menuItems.map((item) => (
              <li key={item.anchor}>
                <Link
                  href={`/#${item.anchor}`}
                  className={`relative text-lg font-semibold group cursor-pointer transition-colors duration-300 ease-in-out
                    ${activeSection === item.anchor ? 'text-blue-400' : 'text-white'}`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform transition-transform duration-300 ease-in-out
                    ${activeSection === item.anchor ? 'scale-x-100' : 'scale-x-0'}`}>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons Section */}
        <div className="flex items-center space-x-6 ml-auto">
          {/* 볼륨 버튼 추가 */}
          <button
            onClick={toggleMute}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            <Image
              src={isMuted ? "/images/sound_off_real.png" : "/images/sound_on_real.png"}
              alt={isMuted ? "Sound Off" : "Sound On"}
              width={32} // 크기 32로 설정
              height={32} // 크기 32로 설정
              unoptimized={true} // unoptimized 속성 유지
            />
          </button>
          <Link href="https://x.com/starsavior_kr" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 ease-in-out hover:scale-110 hover:brightness-125 cursor-pointer">
            <Image src="/images/x-logo-cropped.png" alt="X (Twitter) Logo" width={35} height={35} />
          </Link>
          <Link href="https://game.naver.com/lounge/Starsavior/home" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 ease-in-out hover:scale-110 hover:brightness-125 cursor-pointer">
            <Image src="/images/naver-logo-cropped.png" alt="Naver Lounge Logo" width={35} height={35} />
          </Link>
          <Link href="https://www.youtube.com/@StarSavior_KR" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 ease-in-out hover:scale-110 hover:brightness-125 cursor-pointer">
            <Image src="/images/youtube1-logo-cropped.png" alt="YouTube Logo" width={35} height={25} />
          </Link>
          {/* Studiobside Logo Section */}
          <div
            className="ml-6 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-125"
            onClick={() => setIsModalOpen(true)} // Open modal on click
          >
            <Image
              src="/images/Studiobside-logo.png"
              alt="Studiobside Logo"
              width={120}
              height={30}
              priority
            />
          </div>
        </div>
      </div>
      <CompanyInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}