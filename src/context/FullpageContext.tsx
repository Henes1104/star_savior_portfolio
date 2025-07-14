'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FullpageContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  fullpageApi: any;
  setFullpageApi: (api: any) => void;
  isMuted: boolean; // isMuted 상태 추가
  toggleMute: () => void; // toggleMute 함수 추가
}

const FullpageContext = createContext<FullpageContextType | undefined>(undefined);

export const FullpageProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string>('메인');
  const [fullpageApi, setFullpageApi] = useState<any>(null);
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