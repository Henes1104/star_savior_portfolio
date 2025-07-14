'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { newsData } from '../data/newsData';

const renderContentWithLinks = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a 
          key={index} 
          href={part} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:underline"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

export default function NewsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-900 text-white pt-20 p-8">
      <h2 className="text-4xl font-bold mb-10 pt-10">소식</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {newsData.map((news, index) => (
          <motion.div
            key={news.id}
            className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)", transition: { duration: 0.1 } }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{news.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{news.date}</p>
              <p className="text-gray-300 text-base leading-relaxed break-words">{renderContentWithLinks(news.content)}</p>
            </div>
            {/* Optional: Add a 'Read More' button or link here */}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

