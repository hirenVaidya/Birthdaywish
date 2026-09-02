import React from 'react';

export default function BirthdayWish() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-10 max-w-2xl w-full text-center transform hover:scale-105 transition-transform duration-500 border border-white/50">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-6 animate-pulse drop-shadow-sm">
          Happy Birthday! 🎂
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium leading-relaxed">
          Wishing you a fantastic day filled with joy, laughter, and lots of cake! 
          May all your dreams come true this year. 🎉
        </p>

        <div className="flex justify-center gap-6 text-5xl mb-10">
          <span className="animate-bounce" style={{ animationDelay: '0ms' }}>🎈</span>
          <span className="animate-bounce" style={{ animationDelay: '150ms' }}>🎁</span>
          <span className="animate-bounce" style={{ animationDelay: '300ms' }}>🥳</span>
          <span className="animate-bounce" style={{ animationDelay: '450ms' }}>✨</span>
        </div>

        <button className="bg-gradient-to-r from-pink-500 to-violet-500 text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-violet-600 transition-all duration-300 active:scale-95">
          Open Your Gift!
        </button>
      </div>
      
      {/* Confetti simulation using simple CSS (optional visual touch) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
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
