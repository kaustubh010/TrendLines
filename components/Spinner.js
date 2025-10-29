import React from 'react'

export default function Spinner() {
    return (
      <div className='flex flex-col justify-center items-center py-12'>
        {/* Custom Animated Spinner */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div className="w-20 h-20 border-4 border-slate-700 border-t-red-500 rounded-full animate-spin"></div>
          
          {/* Inner pulsing circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 bg-red-500/20 rounded-full animate-pulse"></div>
          </div>
          
          {/* Center logo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg 
              className="w-8 h-8 text-red-500" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-6 space-y-2">
          <p className="text-white text-lg font-semibold animate-pulse">
            Loading Latest News
          </p>
          <div className="flex space-x-1 justify-center">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>

        {/* Optional: Loading bar */}
        <div className="w-64 h-1 bg-slate-700 rounded-full mt-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-loading-bar"></div>
        </div>

        <style jsx>{`
          @keyframes loading-bar {
            0% {
              width: 0%;
              margin-left: 0%;
            }
            50% {
              width: 50%;
              margin-left: 25%;
            }
            100% {
              width: 0%;
              margin-left: 100%;
            }
          }
          
          .animate-loading-bar {
            animation: loading-bar 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    )
}