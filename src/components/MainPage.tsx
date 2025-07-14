'use client';

import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import YouTube, { YouTubeProps, YouTubePlayer } from 'react-youtube';
import { useFullpage } from '@/context/FullpageContext'; // useFullpage import

interface MainPageHandles {
  playVideo: () => void;
  pauseVideo: () => void;
}

const MainPage = forwardRef<MainPageHandles, Record<string, unknown>>((props, ref) => {
  const playerRef = useRef<YouTubePlayer>(null);
  const { isMuted } = useFullpage(); // isMuted 상태 가져오기

  // YouTube Player Options
  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1, // 자동 재생 (브라우저 정책에 따라 음소거 상태에서만 작동)
      controls: 0, // 컨트롤러 숨김
      loop: 1, // 반복 재생
      playlist: 'DzeiML-ty_U', // 반복 재생을 위한 플레이리스트 설정 (동일 영상 ID)
      playsinline: 1, // 인라인 재생 활성화 (모바일 호환성)
      rel: 0, // 관련 동영상을 현재 채널의 동영상으로 제한
      modestbranding: 1, // YouTube 로고를 작게 표시
      disablekb: 1, // 키보드 컨트롤 비활성화
    },
  };

  useImperativeHandle(ref, () => ({
    playVideo: () => {
      if (playerRef.current) {
        playerRef.current.playVideo();
      }
    },
    pauseVideo: () => {
      if (playerRef.current) {
        playerRef.current.pauseVideo();
      }
    },
  }));

  const onReady: YouTubeProps['onReady'] = (event) => {
    playerRef.current = event.target;
    // isMuted 상태에 따라 초기 음소거/음소거 해제
    if (isMuted) {
      playerRef.current.mute();
    } else {
      playerRef.current.unMute();
    }
    // 영상이 준비되면 재생 시도 (autoplay가 작동하지 않을 경우 대비)
    playerRef.current.playVideo();
  };

  // isMuted 상태 변경 시 YouTube 플레이어 음소거/음소거 해제
  useEffect(() => {
    if (playerRef.current && typeof playerRef.current.mute === 'function') {
      if (isMuted) {
        playerRef.current.mute();
      } else {
        playerRef.current.unMute();
      }
    }
  }, [isMuted]);

  return (
    <div className="relative w-screen h-screen overflow-hidden"> {/* 임시 배경색 추가 */}
      {/* YouTube video */}
      <YouTube
        videoId="DzeiML-ty_U"
        opts={opts}
        onReady={onReady}
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
        iframeClassName="w-full h-full"
      />

      {/* Transparent overlay (captures scroll events) */}
      <div className="absolute inset-0 z-20"></div>
    </div>
  );
});

MainPage.displayName = 'MainPage';

export default MainPage;
