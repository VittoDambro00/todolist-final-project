// src/App.js
import { useState, useEffect } from 'react';
import Spotify from "../components/Spotify.jsx"


export default function Timer() {
  const [time, setTime] = useState(1500); // Tempo in secondi (25 minuti)
  const [isActive, setIsActive] = useState(false);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(1500);
  };

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div className='bg-red-600/80 dark:bg-[#1A1A1A]'>

    <div className="flex flex-col items-center justify-center min-h-screen">

      <div className="flex flex-col items-center mt-8">
      <div className="relative group transition-transform transform-gpu">
        <img src="../src/assets/pomodoroTimer.png" alt="Pomodoro Timer"
          className="mb-8 scale-100 group-hover:scale-105 transition-transform duration-300 ease-in-out" />
      </div>
      </div>

      <div className="bg-red-500 p-8 rounded-lg text-white text-center shadow-md">

      <div className='gap-4 flex justify-between mb-7'>
        <button onClick={() => setTime(1500)} className="bg-[#EA3712] px-4 py-2 rounded hover:bg-red-700 font-semibold text-white shadow-md"> Pomodoro Timer
              {/* 15000 */}
            </button>

            <button onClick={() => setTime(300)} className="bg-[#EA3712] px-4 py-2 rounded hover:bg-red-700 font-semibold text-white shadow-md"> Short Break
              {/* 300 */}
            </button>

            <button onClick={() => setTime(900)} className="bg-[#EA3712] px-4 py-2 rounded hover:bg-red-700 font-semibold text-white shadow-md"> Long Pause
              {/* 900 */}
            </button>
            </div>

        <div className="border-b border-white p-5 mb-5">
          <div className="text-8xl font-semibold">{formatTime(time)}</div>
        </div>
        <div className="space-x-7">
          <button onClick={handleStart} className="bg-green-500 px-4 py-2 rounded hover:bg-green-700 shadow-md"> <img className='h-[20px]' src="/src/assets/Play.png" alt="Start" />
            {/* START */}
          </button>

          <button onClick={handlePause} className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-700 shadow-md"> <img className='h-[20px]' src="/src/assets/pausa.png" alt="pausa" />
            {/* PAUSA */}
          </button>

          <button onClick={handleReset} className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 shadow-md"> <img className='h-[20px]' src="/src/assets/reset.png" alt="reset" />
            {/* RESET */}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};
