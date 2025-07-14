'use client';

import React from 'react';

export default function DownloadPage() {
  return (
    <div className="flex flex-col justify-between h-full w-full bg-gray-600 text-white text-center">
      {/* 소식 탭 임시 박스 */}
      <div className="flex-grow flex items-center justify-center text-4xl p-8">
        <div className="w-64 h-64 bg-gray-500 flex items-center justify-center rounded-lg shadow-lg">
          <p>소식 페이지 임시 박스</p>
        </div>
      </div>
      
      {/* 회사 소개란 */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-sm border-t border-gray-700">
        <div className="container mx-auto px-4">
          <p className="text-lg font-semibold mb-2">주식회사 스튜디오비사이드</p>
          <p>&copy; {new Date().getFullYear()} Studiobside Co., Ltd. All rights reserved.</p>
          <p className="mt-2">Contact: contact@studiobside.com</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
          </div>
        </div>
      </footer>
    </div>
  );
}