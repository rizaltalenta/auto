
import React from 'react';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { CheckIcon } from './icons/CheckIcon';

interface CommandDisplayProps {
  label: string;
  command: string;
  onCopy: () => void;
  isCopied: boolean;
}

export const CommandDisplay: React.FC<CommandDisplayProps> = ({ label, command, onCopy, isCopied }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
      <div className="relative flex items-center bg-slate-950/70 rounded-lg border border-slate-700">
        <pre className="flex-grow p-4 overflow-x-auto">
          <code className="text-sm text-cyan-300 whitespace-pre-wrap break-words font-mono">
            {command}
          </code>
        </pre>
        <button
          onClick={onCopy}
          className={`absolute top-3 right-3 p-2 rounded-lg transition-all duration-200 ${
            isCopied
              ? 'bg-green-500/20 text-green-400'
              : 'bg-slate-700/50 hover:bg-slate-600/70 text-slate-400 hover:text-slate-200'
          }`}
          aria-label="Copy command"
        >
          {isCopied ? <CheckIcon className="h-5 w-5" /> : <ClipboardIcon className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
};
   