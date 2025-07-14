'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="#" className="hover:text-white transition-colors">
            Facebook
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Twitter
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            YouTube
          </Link>
        </div>
        <p className="text-sm mb-2">
          본 웹사이트는 주식회사 스튜디오비사이드의 공식 웹사이트가 아니며, 팬심으로 제작된 비공식 작업물입니다.
        </p>
        <p className="text-sm">&copy; {new Date().getFullYear()} Game Title. All rights reserved.</p>
      </div>
    </footer>
  );
}
