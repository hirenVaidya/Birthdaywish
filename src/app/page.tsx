"use client";

import React, { useState, useEffect } from 'react';

export default function BirthdayWish() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Container for 3D perspective */}
      <div 
        className="relative w-full max-w-2xl z-10"
        style={{ perspective: '1000px' }}
      >
        
        {/* Flip inner container */}
        <div 
          className="w-full relative transition-transform duration-1000 ease-in-out"
          style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
          {/* Front of the Card */}
          <div 
            className="w-full bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-6 md:p-10 flex flex-col items-center justify-center text-center border border-white/50"
            style={{ 
              transition: 'opacity 0s linear 0.5s',
              opacity: isFlipped ? 0 : 1,
              pointerEvents: isFlipped ? 'none' : 'auto'
            }}
          >
            {/* Happy Birthday on one line using whitespace-nowrap and responsive text size */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-4 drop-shadow-sm whitespace-nowrap">
              Happy Birthday!
            </h1>
            
            {/* Celebration Emoji */}
            <div className="text-7xl sm:text-8xl md:text-9xl mb-6 drop-shadow-xl animate-bounce" style={{ animationDuration: '2s' }}>
              🎂
            </div>
            
            <div className="text-lg md:text-xl text-gray-700 mb-6 font-medium leading-relaxed space-y-4">
              <p>
                Happy 41st Birthday! 🎉❤️ Wishing you a fantastic day filled with joy, laughter, happiness, and lots of cake! May all your dreams come true this year and may this new chapter of your life bring you endless beautiful moments.
              </p>
              <p>
                This is the first birthday of yours that I get to be a part of, and that makes it extra special for me. ❤️ and we will celebrate many, many more birthdays with you. I’m truly grateful to have you in my life, and I want you to know that I’m here to stay and be a part of your life forever. 🥰❤️
              </p>
              <p>
                Happy Birthday once again! Here’s to you, to us, and to all the beautiful memories we’re going to create together. 🎂✨❤️
              </p>
            </div>

            <button 
              onClick={() => setIsFlipped(true)}
              className="bg-gradient-to-r from-pink-500 to-violet-500 text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-violet-600 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Open Your Gift!
            </button>
          </div>

          {/* Back of the Card */}
          <div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-100 to-pink-100 shadow-2xl rounded-3xl p-10 flex flex-col items-center justify-center text-center border border-white/50"
            style={{ 
              transform: 'rotateY(180deg)',
              transition: 'opacity 0s linear 0.5s',
              opacity: isFlipped ? 1 : 0,
              pointerEvents: isFlipped ? 'auto' : 'none'
            }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-violet-600 mb-8 leading-tight">
              Aaj milne aa rahe ho, wahi sabse bada gift hai 😂 ❤️
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
      
      {/* Falling Hearts and Confetti */}
      {isMounted && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(40)].map((_, i) => (
            <div 
              key={i}
              className="absolute animate-fall"
              style={{
                fontSize: Math.random() * 20 + 15 + 'px',
                left: Math.random() * 100 + '%',
                top: '-10%',
                animationDuration: (Math.random() * 5 + 4) + 's',
                animationDelay: (Math.random() * 5) + 's',
              }}
            >
              {i % 3 === 0 ? '💖' : i % 3 === 1 ? '✨' : '❤️'}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
