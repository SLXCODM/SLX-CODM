import React from 'react';
import { Button } from './ui/button';

const LanguageSelector = ({ onSelectLanguage }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center gradient-text">
        Bem-vindo ao SLX Gaming!
      </h1>
      <p className="text-lg text-muted-foreground mb-12 text-center">
        Por favor, selecione seu idioma / Please select your language
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <Button
          onClick={() => onSelectLanguage('pt')}
          className="px-8 py-4 text-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg button-animation"
        >
          Português 🇧🇷
        </Button>
        <Button
          onClick={() => onSelectLanguage('en')}
          className="px-8 py-4 text-xl bg-green-600 hover:bg-green-700 text-white shadow-lg button-animation"
        >
          English 🇺🇸
        </Button>
      </div>
    </div>
  );
};

export default LanguageSelector;


