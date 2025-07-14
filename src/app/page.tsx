'use client';

import React, { useState, useEffect, useRef } from 'react';
import MainPage from '@/components/MainPage';
import CharacterPage from '@/components/CharacterPage';
import PVPage from '@/components/PVPage';
import NewsPage from '@/components/NewsPage';
import Header from '@/components/Header';
import { FullpageProvider, useFullpage, FullpageApiInstance } from '@/context/FullpageContext';

interface MainPageHandles {
  playVideo: () => void;
  pauseVideo: () => void;
}

interface FullpageSection {
  anchor: string;
  index: number;
  item: HTMLElement;
  isFirst: boolean;
  isLast: boolean;
}

let ReactFullpage: React.ComponentType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any

function FullpageContent({ isFullpageReady }: { isFullpageReady: boolean }) {
  const { setActiveSection, setFullpageApi } = useFullpage();
  const mainPageRef = useRef<MainPageHandles>(null);

  const navigationTooltips = ['메인', '캐릭터', 'PV', '소식'];

  if (!isFullpageReady) {
    return null;
  }

  return (
    <ReactFullpage
      scrollingSpeed={1000}
      autoScrolling={true}
      navigation={true}
      navigationPosition={'right'}
      navigationTooltips={navigationTooltips}
      showActiveTooltip={true}
      sectionsColor={['#0a0a0a', '#0a0a0a', '#0a0a0a', '#0a0a0a']}
      credits={{ enabled: true, position: 'bottom-left' }}
      afterLoad={(origin: FullpageSection, destination: FullpageSection, fullpageApi: FullpageApiInstance) => {
        console.log("After load - destination.anchor:", destination.anchor);
        if (destination.anchor === '메인' && mainPageRef.current) {
          mainPageRef.current.playVideo();
        }
        setFullpageApi(fullpageApi);
      }}
      onLeave={(origin: FullpageSection, destination: FullpageSection) => {
        setActiveSection(destination.anchor);
        console.log("On leave - destination.anchor:", destination.anchor);
        if (origin.anchor === '메인' && mainPageRef.current) {
          mainPageRef.current.pauseVideo();
        }
      }}
      licenseKey={'YOUR_LICENSE_KEY'} // Replace with your actual license key
      fixedElements={'#disclaimer-overlay'} // 여기에 오버레이 ID 추가
      render={({ state }: { state: { activeSection: string } }) => {
        console.log('fullPage.js state object:', state);
        console.log('fullPage.js activeSection:', state.activeSection);

        return (
          <>
            <div className="section" data-anchor="메인">
              <MainPage ref={mainPageRef} />
            </div>
            <div className="section" data-anchor="캐릭터">
              <CharacterPage />
            </div>
            <div className="section" data-anchor="PV">
              <PVPage />
            </div>
            <div className="section" data-anchor="소식">
              <NewsPage />
            </div>
          </>
        );
      }}
    />
  );
}

export default function Home() {
  const [isFullpageReady, setIsFullpageReady] = useState(false);

  useEffect(() => {
    import('@fullpage/react-fullpage').then((mod) => {
      ReactFullpage = mod.default;
      setIsFullpageReady(true);
    });
  }, []);

  return (
    <FullpageProvider>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        {isFullpageReady && <FullpageContent isFullpageReady={isFullpageReady} />}
        {/* 비공식 사이트 명시 오버레이 - FullpageContent 밖으로 이동 */}
        <div id="disclaimer-overlay" className="fixed bottom-0 right-0 text-gray-400 text-xs z-50 p-1 bg-black bg-opacity-50 w-auto">
          본 웹사이트는 주식회사 스튜디오비사이드의 공식 웹사이트가 아니며, 팬심으로 제작된 비공식 작업물입니다.
        </div>
      </main>
    </FullpageProvider>
  );
}