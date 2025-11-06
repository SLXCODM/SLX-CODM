import React, { useState } from 'react';
import { X } from 'lucide-react';

const RafflePopup = ({ onClose, language = 'pt' }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const content = {
    pt: {
      title: "🎮 SORTEIO INSANO 🎮",
      subtitle: "ASUS ROG PHONE 8 + Cooler Nubia 4 Pro",
      description: "Estou sorteando o melhor smartphone gaming do mercado!",
      specs: [
        "✨ Snapdragon 8 Gen 3",
        "✨ 12GB RAM | 256GB Storage",
        "✨ Display 165Hz AMOLED",
        "✨ 120fps liso no CODM",
        "✨ Bateria 5500mAh",
        "❄️ Cooler Magnético Nubia 4 Pro"
      ],
      priceInfo: "",
      callToAction: "PARTICIPA DA RIFA",
      ctaSubtext: "A partir de R$ 1,00 por número",
      button: "PARTICIPAR AGORA",
      footer: ""
    },
    en: {
      title: "🎮 INSANE RAFFLE 🎮",
      subtitle: "ASUS ROG PHONE 8 + Nubia 4 Pro Cooler",
      description: "I'm raffling off the best gaming smartphone on the market!",
      specs: [
        "✨ Snapdragon 8 Gen 3",
        "✨ 12GB RAM | 256GB Storage",
        "✨ 165Hz AMOLED Display",
        "✨ 120fps smooth on CODM",
        "✨ 5500mAh Battery",
        "❄️ Nubia 4 Pro Magnetic Cooler"
      ],
      priceInfo: "",
      callToAction: "JOIN THE RAFFLE",
      ctaSubtext: "Starting from $1.00 per number",
      button: "PARTICIPATE NOW",
      footer: ""
    }
  };

  const t = content[language] || content['pt'];

  const handleParticipate = () => {
    window.open('https://slx.clickrifas.com/rog-phone-8-cooler-nubia-4-pro/', '_blank');
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl max-w-md w-full border border-purple-500/30 transform transition-all duration-300 ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 0 30px rgba(168, 85, 247, 0.3), 0 0 60px rgba(34, 197, 94, 0.2)'
        }}
      >
        {/* Botão Fechar */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-purple-500/20 rounded-full transition-all duration-200 z-10 hover:scale-110"
          aria-label="Fechar"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Conteúdo */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Título */}
          <div className="text-center space-y-2">
            <h2
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
              style={{
                textShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
              }}
            >
              {t.title}
            </h2>
            <p className="text-lg md:text-xl font-semibold text-cyan-300">
              {t.subtitle}
            </p>
          </div>

          {/* Descrição */}
          <p className="text-center text-gray-200 text-base md:text-lg">
            {t.description}
          </p>

          {/* Especificações */}
          <div className="bg-black/40 rounded-lg p-4 space-y-2 border border-purple-500/20">
            {t.specs.map((spec, index) => (
              <p key={index} className="text-gray-100 text-sm md:text-base flex items-center gap-2">
                {spec}
              </p>
            ))}
          </div>

          {/* Preço */}
          <div className="text-center">
            {t.priceInfo && <p className="text-gray-300 text-sm">{t.priceInfo}</p>}
            <p className="text-xl font-bold text-green-400 mt-2">{t.callToAction}</p>
            <p className="text-gray-400 text-sm mt-1">{t.ctaSubtext}</p>
          </div>

          {/* Botão de Ação */}
          <button
            onClick={handleParticipate}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 text-lg shadow-lg hover:shadow-xl"
            style={{
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)'
            }}
          >
            {t.button}
          </button>

          {/* Footer */}
          {t.footer && <p className="text-center text-xs text-gray-400 italic">
            {t.footer}
          </p>}
        </div>

        {/* Efeito de brilho */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle at top right, rgba(168, 85, 247, 0.1), transparent 70%)',
          }}
        />
      </div>
    </div>
  );
};

export default RafflePopup;
