'use client';

import React, { useState, useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import { motion, LayoutGroup } from 'framer-motion';
import { mainPVs, characterPVs } from '../data/pvData';
import { useFullpage } from '../context/FullpageContext';

const TabButton = ({ text, selected, onClick, layoutId }) => (
  <motion.button
    onClick={onClick}
    className="relative px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 focus:outline-none"
    animate={{ color: selected ? '#fff' : '#9ca3af' }} // gray-400
    whileHover={{ scale: 1.05, color: '#fff' }} // 마우스 오버 시 확대 및 색상 변경
    whileTap={{ scale: 0.95 }} // 클릭 시 축소
  >
    {text}
    {selected && (
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-full"
        layoutId={layoutId}
        initial={false}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    )}
  </motion.button>
);

export default function PVPage() {
  const { activeSection } = useFullpage();
  const [selectedMainPV, setSelectedMainPV] = useState(mainPVs[0]);
  const [selectedCharacter, setSelectedCharacter] = useState(characterPVs[0]);
  const [isPinned, setIsPinned] = useState(true); // Default to pinned

  const handleCharacterClick = (char) => {
    if (isPinned && selectedCharacter?.name === char.name) {
      // Clicking the selected one does nothing, or you can unpin
      // setIsPinned(false);
      // setSelectedCharacter(null);
    } else {
      setSelectedCharacter(char);
      setIsPinned(true);
    }
  };

  const handleMainPVClick = (pv) => {
    setSelectedMainPV(pv);
  };

  return (
    <div className="flex h-screen w-full bg-gray-900 text-white pt-20">
      <LayoutGroup>
        {/* Main PV Section */}
        <div className="w-1/2 h-full flex flex-col items-center justify-center p-8 border-r border-gray-700">
          <h2 className="text-3xl font-bold mb-4">선행 PV</h2>
          <div 
            className="w-full aspect-video bg-black rounded-lg shadow-2xl flex items-center justify-center relative group"
          >
            <YouTube
              videoId={selectedMainPV?.id}
              opts={{
                height: '100%',
                width: '100%',
                playerVars: {
                  autoplay: 0,
                  rel: 0,
                  modestbranding: 1,
                },
              }}
              className="w-full h-full"
            />
          </div>
          <div className="flex space-x-4 mt-6">
            {mainPVs.map((pv) => (
              <TabButton
                key={pv.name}
                text={pv.name}
                selected={selectedMainPV?.name === pv.name}
                onClick={() => handleMainPVClick(pv)}
                layoutId="main-pv-underline"
              />
            ))}
          </div>
        </div>

        {/* Character PV Section */}
        <div className="w-1/2 h-full flex flex-col items-center justify-center p-8 relative">
          <h2 className="text-3xl font-bold mb-4">캐릭터 PV</h2>
          <div 
            className="w-full aspect-video bg-black rounded-lg shadow-2xl flex items-center justify-center relative group"
          >
            {selectedCharacter ? (
              <YouTube
                videoId={selectedCharacter.id}
                opts={{
                  height: '100%',
                  width: '100%',
                  playerVars: {
                    autoplay: 0,
                    rel: 0,
                    modestbranding: 1,
                  },
                }}
                className="w-full h-full"
              />
            ) : (
              <div className="text-gray-400">캐릭터를 선택하여 PV를 재생하세요.</div>
            )}
          </div>

          <div className="flex space-x-4 mt-6">
            {characterPVs.map((char) => (
              <TabButton
                key={char.name}
                text={char.name}
                selected={selectedCharacter?.name === char.name}
                onClick={() => handleCharacterClick(char)}
                layoutId="char-pv-underline"
              />
            ))}
          </div>
        </div>
      </LayoutGroup>
    </div>
  );
}