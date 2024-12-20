import React from 'react';

interface JsonEditorProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  darkMode: boolean;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ value, onChange, error, darkMode }) => {
  return (
    <div className={`h-full flex flex-col ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-xl font-bold mb-4">JSON Schema Editor</h2>
      <div className="relative flex-grow">
        <textarea
          className={`w-full h-full p-4 font-mono text-sm rounded-lg border ${
            error ? 'border-red-500' : 'border-gray-300'
          } ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          spellCheck={false}
        />
        {error && (
          <div className="absolute bottom-4 left-4 right-4 bg-red-100 text-red-700 p-2 rounded">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default JsonEditor; 