'use client';

import React, { useRef, useEffect } from 'react';
import YouTube from 'react-youtube';

import { useFullpage } from '../context/FullpageContext';

interface VideoModalProps {
  videoId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ videoId, isOpen, onClose }: VideoModalProps) {
  const playerRef = useRef<any>(null);
  const { fullpageApi } = useFullpage();

  useEffect(() => {
    if (fullpageApi) { // Ensure fullpageApi is available
      if (isOpen) {
        if (typeof fullpageApi.setAllowScrolling === 'function') {
          fullpageApi.setAllowScrolling(false);
        }
        if (typeof fullpageApi.setKeyboardScrolling === 'function') {
          fullpageApi.setKeyboardScrolling(false);
        }
      } else {
        if (typeof fullpageApi.setAllowScrolling === 'function') {
          fullpageApi.setAllowScrolling(true);
        }
        if (typeof fullpageApi.setKeyboardScrolling === 'function') {
          fullpageApi.setKeyboardScrolling(true);
        }
      }
    }

    if (!isOpen && playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
      playerRef.current.pauseVideo();
    }
  }, [isOpen, fullpageApi]);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  if (!isOpen || !videoId) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999]"
      onClick={onClose} // 모달 외부 클릭 시 닫기
    >
      <div 
        className="relative bg-gray-800 p-4 rounded-lg shadow-lg max-w-3xl w-full mx-4"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록 방지
      >
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-white text-2xl font-bold bg-red-600 rounded-full w-8 h-8 flex items-center justify-center leading-none"
        >
          &times;
        </button>
        <div className="aspect-video w-full">
          <YouTube videoId={videoId} opts={opts} onReady={(e) => playerRef.current = e.target} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
