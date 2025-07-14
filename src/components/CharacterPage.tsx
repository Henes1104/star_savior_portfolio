'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import characterData from '@/data/characterData';

// Define character type for clarity
interface Character {
  id: string;
  name: string;
  image: string;
  description: string;
}

export default function CharacterPage() {
  const [selectedFactionId, setSelectedFactionId] = useState<string | null>(null);
  const [hoveredCharacter, setHoveredCharacter] = useState<Character | null>(null);
  const [pinnedCharacter, setPinnedCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const defaultFaction = characterData.find(faction => faction.name === '보이저 구원단');
    if (defaultFaction) {
      setSelectedFactionId(defaultFaction.id);
      const defaultCharacter = defaultFaction.characters.find(char => char.name === '아세라');
      if (defaultCharacter) {
        setPinnedCharacter(defaultCharacter);
      }
    }
  }, []);

  const handleFactionClick = (factionId: string) => {
    setSelectedFactionId(prevId => (prevId === factionId ? null : factionId));
    setHoveredCharacter(null);
  };

  const handleCharacterClick = (e: React.MouseEvent, character: Character) => {
    e.stopPropagation();
    setPinnedCharacter(prev => (prev?.id === character.id ? null : character));
  };

  const handleBackgroundClick = () => {
    setPinnedCharacter(null);
  };

  const characterToDisplay = pinnedCharacter || hoveredCharacter;

  return (
    <div 
      className="relative w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-8 overflow-hidden pt-24"
      onClick={handleBackgroundClick}
    >
      {/* Optimized Blurred Background */}
      <AnimatePresence>
        {characterToDisplay && (
          <motion.div
            key={characterToDisplay.id + "-bg"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={characterToDisplay.image}
              alt=""
              fill
              style={{ objectFit: 'cover' }}
              className="filter blur-2xl scale-125"
              quality={5} // Heavily optimized quality
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex w-full max-w-6xl h-full z-10">
        {/* Left Section: Factions */}
        <div className="w-1/4 flex flex-col items-start pr-8 border-r border-gray-700">
          <h2 className="text-3xl font-semibold mb-6 text-gray-300">소속 집단</h2>
          <ul className="w-full">
            {characterData.map((faction) => (
              <motion.li
                key={faction.id}
                className="mb-4"
                onClick={(e) => {
                    e.stopPropagation();
                    handleFactionClick(faction.id);
                }}
              >
                <motion.div
                  className={`text-xl font-medium cursor-pointer py-2 px-4 rounded-lg transition-all duration-300
                    ${selectedFactionId === faction.id ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-blue-400'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {faction.name}
                </motion.div>
                <AnimatePresence>
                  {selectedFactionId === faction.id && (
                    <motion.ul
                      className="mt-2 ml-4 border-l-2 border-blue-500 pl-4"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {faction.characters.map((char) => {
                        const isPinned = pinnedCharacter?.id === char.id;
                        return (
                            <motion.li
                                key={char.id}
                                className={`text-xl py-1 cursor-pointer transition-colors duration-200 hover:text-blue-300 ${isPinned ? 'text-blue-300 font-bold' : 'text-gray-400'}`}
                                onMouseEnter={() => setHoveredCharacter(char)}
                                onMouseLeave={() => setHoveredCharacter(null)}
                                onClick={(e) => handleCharacterClick(e, char)}
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            >
                                {char.name}
                            </motion.li>
                        );
                      })}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Section: Character Details - Fast & Simple Animation */}
        <div className="w-3/4 flex flex-col items-center justify-center pl-8">
          <AnimatePresence mode="wait">
            {characterToDisplay ? (
              <motion.div
                key={characterToDisplay.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }} // Fast 200ms fade
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-[40rem] h-[40rem] mb-6">
                  <Image
                    src={characterToDisplay.image}
                    alt={characterToDisplay.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="drop-shadow-2xl"
                    priority // Prioritize loading main image
                  />
                </div>
                <p className="text-xl max-w-xl leading-relaxed text-gray-300 text-left whitespace-pre-wrap">
                  {characterToDisplay.description}
                </p>
              </motion.div>
            ) : (
              <div className="text-center text-gray-500 text-2xl">소속 집단과 캐릭터를 선택하여 정보를 확인하세요.</div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}