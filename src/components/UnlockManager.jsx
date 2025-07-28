import React, { useState, useEffect } from 'react';
import { Instagram, Lock, Unlock, CheckCircle, ExternalLink, Star, Zap } from 'lucide-react';
import { Button } from './ui/button';

const UnlockManager = ({ children, contentName, language = 'pt' }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showFollowPrompt, setShowFollowPrompt] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [hasGlobalAccess, setHasGlobalAccess] = useState(false);

  // Textos em português e inglês
  const texts = {
    pt: {
      title: "🔒 Conteúdo Exclusivo",
      subtitle: `Desbloqueie ${contentName} seguindo @slx.wav`,
      globalTitle: "🌟 Acesso Total Desbloqueado!",
      globalSubtitle: "Você tem acesso a todo conteúdo exclusivo do SLX Gaming",
      followButton: "Seguir @slx.wav",
      checkButton: "Já Segui - Verificar",
      checking: "Verificando...",
      unlocked: "Desbloqueado! ✨",
      description: "Após seguir no Instagram, volte aqui e clique em 'Já Segui' para verificar.",
      alreadyFollowing: "Você já tem acesso a este conteúdo!",
      benefits: [
        "Arsenal completo com 17 armas",
        "Tutoriais exclusivos",
        "Configurações profissionais",
        "Atualizações em primeira mão"
      ],
      oneTimeFollow: "Siga uma vez, acesse tudo para sempre!"
    },
    en: {
      title: "🔒 Exclusive Content",
      subtitle: `Unlock ${contentName} by following @slx.wav`,
      globalTitle: "🌟 Full Access Unlocked!",
      globalSubtitle: "You have access to all SLX Gaming exclusive content",
      followButton: "Follow @slx.wav",
      checkButton: "Already Followed - Check",
      checking: "Checking...",
      unlocked: "Unlocked! ✨",
      description: "After following on Instagram, come back here and click 'Already Followed' to verify.",
      alreadyFollowing: "You already have access to this content!",
      benefits: [
        "Complete arsenal with 17 weapons",
        "Exclusive tutorials",
        "Professional configurations",
        "First-hand updates"
      ],
      oneTimeFollow: "Follow once, access everything forever!"
    }
  };

  const t = texts[language];

  // Verificar se já tem acesso global
  useEffect(() => {
    const globalUnlock = localStorage.getItem('slx_global_unlock') === 'true';
    const specificUnlock = localStorage.getItem(`slx_unlocked_${contentName.toLowerCase().replace(/\s+/g, '_')}`) === 'true';
    
    if (globalUnlock) {
      setHasGlobalAccess(true);
      setIsUnlocked(true);
    } else if (specificUnlock) {
      setIsUnlocked(true);
    } else {
      setShowFollowPrompt(true);
    }
  }, [contentName]);

  // Simular verificação de follow
  const handleFollowCheck = async () => {
    setIsChecking(true);
    
    // Simular delay de verificação
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // Desbloquear acesso global (uma vez seguido, acesso a tudo)
    localStorage.setItem('slx_global_unlock', 'true');
    localStorage.setItem(`slx_unlocked_${contentName.toLowerCase().replace(/\s+/g, '_')}`, 'true');
    
    setHasGlobalAccess(true);
    setIsUnlocked(true);
    setShowFollowPrompt(false);
    setIsChecking(false);
  };

  const handleFollowClick = () => {
    // Abrir Instagram em nova aba
    window.open('https://www.instagram.com/slx.wav', '_blank');
  };

  // Se já desbloqueou, mostrar o conteúdo
  if (isUnlocked) {
    return (
      <div className="space-y-4">
        {hasGlobalAccess && (
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Star className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-green-600">{t.globalTitle}</h3>
                <p className="text-sm text-muted-foreground">{t.globalSubtitle}</p>
              </div>
            </div>
          </div>
        )}
        
        {!hasGlobalAccess && (
          <div className="flex items-center gap-2 text-green-600 font-semibold mb-4">
            <CheckCircle className="h-5 w-5" />
            {t.unlocked}
          </div>
        )}
        
        {children}
      </div>
    );
  }

  // Mostrar prompt de follow
  if (showFollowPrompt) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center space-y-8 p-8 bg-card rounded-xl border shadow-xl">
          {/* Ícone animado */}
          <div className="relative">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
              <Lock className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Instagram className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Zap className="h-4 w-4 text-white" />
            </div>
          </div>

          {/* Título e descrição */}
          <div className="space-y-3">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.title}
            </h2>
            <p className="text-lg text-muted-foreground">{t.subtitle}</p>
            <p className="text-sm font-semibold text-green-600 bg-green-50 px-4 py-2 rounded-full inline-block">
              {t.oneTimeFollow}
            </p>
          </div>

          {/* Benefícios */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 space-y-2">
            <h3 className="font-semibold text-gray-800 mb-3">O que você vai desbloquear:</h3>
            <div className="grid grid-cols-1 gap-2">
              {t.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Botões */}
          <div className="space-y-4">
            <Button
              onClick={handleFollowClick}
              className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Instagram className="h-5 w-5 mr-2" />
              {t.followButton}
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>

            <Button
              onClick={handleFollowCheck}
              disabled={isChecking}
              variant="outline"
              className="w-full py-4 rounded-xl transition-all duration-300 border-2 hover:border-purple-300"
            >
              {isChecking ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-500 mr-2"></div>
                  {t.checking}
                </>
              ) : (
                <>
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  {t.checkButton}
                </>
              )}
            </Button>
          </div>

          {/* Descrição adicional */}
          <p className="text-xs text-muted-foreground bg-gray-50 p-3 rounded-lg">
            {t.description}
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default UnlockManager;

