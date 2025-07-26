import React, { useState, useEffect } from 'react';
import { Instagram, Lock, Unlock, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const FollowToUnlock = ({ children, contentName, language = 'pt' }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showFollowPrompt, setShowFollowPrompt] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  // Textos em português e inglês
  const texts = {
    pt: {
      title: "Conteúdo Exclusivo",
      subtitle: `Siga @slx_codm no Instagram para acessar ${contentName}`,
      followButton: "Seguir no Instagram",
      checkButton: "Já Segui - Verificar",
      checking: "Verificando...",
      unlocked: "Desbloqueado! ✨",
      description: "Após seguir, volte aqui e clique em 'Já Segui' para desbloquear o conteúdo.",
      alreadyFollowing: "Você já tem acesso a este conteúdo!"
    },
    en: {
      title: "Exclusive Content",
      subtitle: `Follow @slx_codm on Instagram to access ${contentName}`,
      followButton: "Follow on Instagram",
      checkButton: "Already Followed - Check",
      checking: "Checking...",
      unlocked: "Unlocked! ✨",
      description: "After following, come back here and click 'Already Followed' to unlock the content.",
      alreadyFollowing: "You already have access to this content!"
    }
  };

  const t = texts[language];

  // Verificar se já desbloqueou anteriormente
  useEffect(() => {
    const unlockKey = `slx_unlocked_${contentName.toLowerCase().replace(/\s+/g, '_')}`;
    const isAlreadyUnlocked = localStorage.getItem(unlockKey) === 'true';
    
    if (isAlreadyUnlocked) {
      setIsUnlocked(true);
    } else {
      setShowFollowPrompt(true);
    }
  }, [contentName]);

  // Simular verificação de follow (em produção, você pode integrar com APIs)
  const handleFollowCheck = async () => {
    setIsChecking(true);
    
    // Simular delay de verificação
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Por enquanto, sempre "aprova" após o delay
    // Em produção, você pode integrar com Instagram API ou usar outros métodos
    const unlockKey = `slx_unlocked_${contentName.toLowerCase().replace(/\s+/g, '_')}`;
    localStorage.setItem(unlockKey, 'true');
    
    setIsUnlocked(true);
    setShowFollowPrompt(false);
    setIsChecking(false);
  };

  const handleFollowClick = () => {
    // Abrir Instagram em nova aba
    window.open('https://instagram.com/slx_codm', '_blank');
  };

  // Se já desbloqueou, mostrar o conteúdo
  if (isUnlocked) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-green-600 font-semibold">
          <CheckCircle className="h-5 w-5" />
          {t.unlocked}
        </div>
        {children}
      </div>
    );
  }

  // Mostrar prompt de follow
  if (showFollowPrompt) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="max-w-md mx-auto text-center space-y-6 p-8 bg-card rounded-lg border shadow-lg">
          {/* Ícone animado */}
          <div className="relative">
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
              <Lock className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <Instagram className="h-4 w-4 text-white" />
            </div>
          </div>

          {/* Título e descrição */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold gradient-text">{t.title}</h2>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>

          {/* Botões */}
          <div className="space-y-3">
            <Button
              onClick={handleFollowClick}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Instagram className="h-5 w-5 mr-2" />
              {t.followButton}
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>

            <Button
              onClick={handleFollowCheck}
              disabled={isChecking}
              variant="outline"
              className="w-full py-3 rounded-lg transition-all duration-300"
            >
              {isChecking ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2"></div>
                  {t.checking}
                </>
              ) : (
                <>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {t.checkButton}
                </>
              )}
            </Button>
          </div>

          {/* Descrição adicional */}
          <p className="text-xs text-muted-foreground">{t.description}</p>
        </div>
      </div>
    );
  }

  return null;
};

export default FollowToUnlock;

