
import React from 'react';
import { PlayCircleIcon } from './icons/PlayCircleIcon';

export const Header: React.FC = () => (
  <header className="flex flex-col items-center p-6 border-b border-slate-700">
    <div className="flex items-center space-x-3">
        <PlayCircleIcon className="h-8 w-8 text-cyan-400"/>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight">
          Auto RTMP Streamer
        </h1>
    </div>
    <p className="text-sm text-slate-400 mt-1">FFmpeg Command Generator</p>
  </header>
);
   