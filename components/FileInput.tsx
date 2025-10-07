
import React from 'react';
import { FilmIcon } from './icons/FilmIcon';
import { UploadIcon } from './icons/UploadIcon';


interface FileInputProps {
  label: string;
  fileName: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileInput: React.FC<FileInputProps> = ({ label, fileName, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
      <label htmlFor="video-upload" className="group cursor-pointer flex items-center justify-center w-full px-4 py-3 bg-slate-700/50 border-2 border-dashed border-slate-600 rounded-lg hover:border-cyan-500 hover:bg-slate-700 transition-colors duration-300">
        <div className="flex items-center space-x-3 text-slate-400">
          {fileName ? (
            <>
              <FilmIcon className="h-6 w-6 text-green-400" />
              <span className="font-semibold text-slate-200 truncate">{fileName}</span>
            </>
          ) : (
            <>
              <UploadIcon className="h-6 w-6 group-hover:text-cyan-400 transition-colors"/>
              <span>Click to browse for a video file</span>
            </>
          )}
        </div>
        <input id="video-upload" type="file" className="hidden" onChange={onChange} accept="video/mp4,video/x-m4v,video/quicktime,video/x-matroska,video/x-msvideo" />
      </label>
    </div>
  );
};
   