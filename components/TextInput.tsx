
import React from 'react';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, placeholder }) => {
  return (
    <div>
      <label htmlFor="text-input" className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
      <input
        id="text-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="block w-full px-4 py-3 bg-slate-900/70 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-shadow duration-200"
      />
    </div>
  );
};
   