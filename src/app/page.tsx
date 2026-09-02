"use client";

import React, { useState } from 'react';

export default function BirthdayWish() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Container for 3D perspective */}
      <div 
        className="relative w-full max-w-2xl h-[600px] z-10"
        style={{ perspective: '1000px' }}
      >
        
        {/* Flip inner container */}
        <div 
          className="w-full h-full relative transition-transform duration-1000"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
          }}
        >
          {/* Front of the Card */}
          <div 
            className="absolute w-full h-full bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-6 md:p-10 flex flex-col items-center justify-center text-center border border-white/50"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Happy Birthday on one line using whitespace-nowrap and responsive text size */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-4 animate-pulse drop-shadow-sm whitespace-nowrap">
              Happy Birthday!
            </h1>
            
            {/* Cake GIF */}
            <img 
              src="https://media.tenor.com/B94mR1k1s-wAAAAi/birthday-cake.gif" 
              alt="Birthday Cake" 
              className="w-48 h-48 object-contain mb-4"
            />
            
            <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium leading-relaxed">
              Wishing you a fantastic day filled with joy, laughter, and lots of cake! 
              May all your dreams come true this year. 🎉
            </p>

            <button 
              onClick={() => setIsFlipped(true)}
              className="bg-gradient-to-r from-pink-500 to-violet-500 text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-violet-600 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Open Your Gift!
            </button>
          </div>

          {/* Back of the Card */}
          <div 
            className="absolute w-full h-full bg-gradient-to-br from-violet-100 to-pink-100 shadow-2xl rounded-3xl p-10 flex flex-col items-center justify-center text-center border border-white/50"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)' 
            }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-violet-600 mb-8 leading-tight">
              kal mene aa rhe hu tujhe vo sab se bada gift hai 😂
            </h2>
            
            <button 
              onClick={() => setIsFlipped(false)}
              className="mt-8 bg-white text-violet-500 font-bold text-lg py-3 px-8 rounded-full shadow hover:shadow-md transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Close Gift
            </button>
          </div>
        </div>
      </div>
      
      {/* Confetti */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50 z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute animate-pulse bg-pink-400 rounded-full"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDuration: (Math.random() * 3 + 2) + 's',
              animationDelay: (Math.random() * 2) + 's',
            }}
          />
        ))}
      </div>
    </div>
  );
}
