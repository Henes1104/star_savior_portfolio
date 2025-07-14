'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface CompanyInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CompanyInfoModal({ isOpen, onClose }: CompanyInfoModalProps) {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100] p-4"
          onClick={onClose} // Close when clicking outside the modal content
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-md w-full text-white relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold mb-6 text-blue-400 text-center">회사 정보</h2>

            <div className="mb-6 text-center">
              <p className="text-lg font-semibold">주식회사 스튜디오비사이드</p>
              <p className="text-sm text-gray-300">경기도 성남시 분당구 판교역로 182</p>
              <p className="text-sm text-gray-300">contact@studiobside.com</p>
            </div>

            <div className="mb-6 text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">정책 및 가이드라인</h3>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li><a href="/terms" target="_blank" rel="noopener noreferrer" className="hover:underline">이용약관</a></li>
                <li><a href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline">개인정보처리방침</a></li>
              </ul>
              <button
                onClick={() => setShowDisclaimer(!showDisclaimer)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                꼭 읽어주세요
              </button>
            </div>

            <AnimatePresence>
              {showDisclaimer && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 p-4 bg-gray-700 rounded-lg text-sm text-gray-300 overflow-hidden"
                >
                  <p className="mb-2">
                    본 웹사이트는 <strong>주식회사 스튜디오비사이드</strong>의 공식 사이트가 아니며, 어떠한 상업적 목적이나 영리 활동을 추구하지 않습니다.
                  </p>
                  <p className="mb-2">
                    이곳에 사용된 모든 저작물과 소유권은 <strong>주식회사 스튜디오비사이드</strong>에 있습니다.
                  </p>
                  <p className="mb-2">
                    본 작업물은 순수한 팬심으로 제작된 비공식 포트폴리오이며, 추후 포트폴리오 외의 다른 목적으로 활용되지 않을 것을 명시합니다.
                  </p>
                  <p className="text-right mt-4">
                    <a href="https://www.starsavior.com/s/kr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      [공식 사이트 바로가기]
                    </a>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="text-center mt-8">
              <p className="text-xs text-gray-500 mb-3">© 2025 STUDIOBSIDE Co., Ltd All Rights Reserved.</p>
              <Image
                src="/images/Studiobside-logo.png"
                alt="Studiobside Logo"
                width={150}
                height={40}
                className="mx-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
