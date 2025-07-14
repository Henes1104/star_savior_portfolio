'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface FullpageApiInstance {
  setAllowScrolling: (value: boolean) => void;
  setKeyboardScrolling: (value: boolean) => void;
  // 필요한 다른 fullpage.js API 메서드를 여기에 추가
}

interface FullpageContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  fullpageApi: FullpageApiInstance | null;
  setFullpageApi: (api: FullpageApiInstance | null) => void;
  isMuted: boolean;
  toggleMute: () => void;
}

const FullpageContext = createContext<FullpageContextType | undefined>(undefined);

export const FullpageProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string>('메인');
  const [fullpageApi, setFullpageApi] = useState<FullpageApiInstance | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true); // 초기값을 true로 변경 (음소거 상태로 시작)

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  return (
    <FullpageContext.Provider value={{ activeSection, setActiveSection, fullpageApi, setFullpageApi, isMuted, toggleMute }}>
      {children}
    </FullpageContext.Provider>
  );
};

export const useFullpage = () => {
  const context = useContext(FullpageContext);
  if (context === undefined) {
    throw new Error('useFullpage must be used within a FullpageProvider');
  }
  return context;
};