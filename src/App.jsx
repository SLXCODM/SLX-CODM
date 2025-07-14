import { SpeedInsights } from "@vercel/speed-insights/react";
import { useState } from 'react';
import LanguageSelector from './components/LanguageSelector';
import { cn } from "./lib/utils";
import { Button, buttonVariants } from "./components/ui/button";
import { Globe, Youtube, Instagram, Music, Heart, Gift, BookOpen, Gamepad2, Target, Zap, MessageCircle, Video, Settings } from 'lucide-react';
import livepixQR from './assets/livepxx.png'
import tiktokIcon from './assets/tiktok-icon.png'
import discordIcon from './assets/discord-icon.jpg'
import setup1 from './assets/setup1.jpg'
import setup2 from './assets/setup2.jpg'
import precision1 from './assets/precision1.jpg'
import precision2 from './assets/precision2.jpg'
import precision3 from './assets/precision3.jpg'
import precision4 from './assets/precision4.jpg'
import precision5 from './assets/precision5.jpg'
import precision6 from './assets/precision6.jpg'
import precision7 from './assets/precision7.jpg'
import precision8 from './assets/precision8.jpg'
import precision9 from './assets/precision9.jpg'
import './App.css'

// Dados de tradução
const translations = {
  pt: {
    navigation: {
      home: "Início",
      social: "Redes Sociais",
      tutorials: "Tutoriais",
      configurations: "Configurações",
      about: "Sobre"
    },
    welcome: "Bem-vindo ao SLX Gaming!",
    biography: "Sou SLX, um jogador apaixonado por Call of Duty Mobile trazendo o melhor para você:",
    features: [
      "Loadouts de sniper",
      "Dicas tryhard",
      "Gameplay profissional",
      "Tutoriais",
      "Todas as minhas configurações",
      "ASMR e picos de esquizofrenia"
    ],
    description: "Se você está aqui para melhorar suas habilidades ou apenas curtir algumas partidas épicas, este é o lugar para você. Conecte-se comigo através das minhas redes sociais e fique atualizado sobre as últimas estratégias, destaques e conteúdo exclusivo.",
    collaboration: "Interessado em colaborar ou patrocinar meu conteúdo? Confira meu",
    mediaKitLink: "media kit",
    collaborationEnd: "para oportunidades de parceria!",
    codmId: "Meu ID do Call Of Duty Mobile: 6870254103403626497",
    donateQuick: "DOE RAPIDAMENTE NA",
    vakinhaWord: "VAKINHA",
    livepix: "LIVEPIX",
    livepixSubtitle: "Ou escaneie o QR Code:",
    pixDirect: "PIX DIRETO",
    pixDirectSubtitle: "Caso seja sua preferência, você poderá mandar diretamente pelo pix",
    pixKey: "Chave: b23a8dc0-c540-4d9b-8aaa-d91800bdb434",
    vakinhaDream: "💸 𝐃𝐨𝐞 𝐩𝐚𝐫𝐚 𝐚 𝐦𝐢𝐧𝐡𝐚 𝐯𝐚𝐤𝐢𝐧𝐡𝐚 𝐞 𝐦𝐞𝐮 𝐬𝐨𝐧𝐡𝐨",
    livepixVakinha: "💸 𝐌𝐢𝐧𝐡𝐚 𝐯𝐚𝐪𝐮𝐢𝐧𝐡𝐚 𝐝𝐨 𝐥𝐢𝐯𝐞𝐩𝐢𝐱",
    livepixVakinhaSubtitle: "𝐴𝑞𝑢𝑖 𝑡𝑒𝑚 𝑎𝑠 𝑚𝑒𝑡𝑎𝑠 (𝑜𝑛𝑑𝑒 𝑜 𝑑𝑖𝑛ℎ𝑒𝑖𝑟𝑜 𝑣𝑎𝑖 𝑠𝑒𝑟 𝑢𝑠𝑎𝑑𝑜), 𝑐𝑎𝑠𝑜 𝑐𝑜𝑛𝑓𝑖𝑒 𝑚𝑎𝑖𝑠 𝑛𝑒𝑠𝑠𝑎 𝑝𝑙𝑎𝑡𝑎𝑓𝑜𝑟𝑚𝑎",
    precisionTitle: "100% de Precisão",
    precisionSubtitle: "Resultados das minhas partidas no Call of Duty Mobile",
    youtubeSubtitle: "Tutoriais, classes, sensibilidade, HUD, etc",
    instagramSubtitle: "Fotógrafo, escritor, amante da melancolia, etc",
    tiktokSubtitle: "Lives e alguns clipes",
    tiktokSubSubtitle: "TikTok live inscrições",
    youtubeAgricultureSubtitle: "Meu trabalho e desenvolvimento pessoal",
    exclusiveConfigurations: "Configurações Exclusivas",
    followToUnlockConfigs: "Siga no Instagram para desbloquear minhas configurações exclusivas do Call of Duty Mobile!",
    myConfigurations: "Minhas Configurações",
    configTikTok: "no TikTok",
    configYouTube: "no YouTube",
    exclusiveTutorials: "Tutoriais Exclusivos",
    followToUnlockTutorials: "Siga no Instagram para desbloquear meus tutoriais exclusivos do Call of Duty Mobile!",
    myTutorials: "Meus Tutoriais",
    tutorialTikTok: "no TikTok",
    tutorialYouTube: "no YouTube",
    myGamingSetup: "Meu Setup Gamer",
    aboutMeText: "Mas enfim, quem é esse cara?",
    aboutMeContent: `Uma breve descrição do que você pode gostar de saber sobre este nictófilo:

Eu sei que não sou tão importante que só tenho um texto para dizer sobre mim, mas enfim, esse sou eu.

À primeira vista, este texto pode parecer desnecessário, mas recentemente, tenho refletido sobre meu passado, percebendo que durante toda a minha infância, pensamentos de suicídio me consumiam.

Eu estava disposto a aproveitar qualquer oportunidade para acabar com minha vida. Planejei meticulosamente cada detalhe—sabendo a hora, o dia, o método—tudo. Passei anos estudando maneiras de consertar isso, e quanto mais eu sabia, pior eu ficava; era um ciclo infinito.

Naqueles momentos, quem mais me ajudou foi meu cachorro, que sobrenaturalmente sabia o que estava acontecendo. E sobre Deus? Eu pedi, implorei, orei para ele me ajudar a cometer suicídio, nada ajudou.

Praticamente 7 anos se passaram desde que percebi que meu mundo estava desmoronando. Em toda a minha vida ou praticamente toda a minha infância, todos os dias de todos os meses de todos os anos... Como eu era apenas um adolescente, não percebi o que estava acontecendo. Mas só vi que era um problema real quando percebi que já estava querendo desfazer o que Deus uma vez fez, minha vida.

Não entrando em muitos detalhes, por que dizer que foram 7 anos então se foi minha vida toda? Bem, é porque foi aí que comecei a sentir as consequências. Os primeiros meses de 2017 foram catastróficos. Por mais que eu tenha tentado me curar desde que percebi essa mudança gigantesca em quem eu era, era como tirar a luz do próprio sol. Eu diria assustador, mas era mais escuro. Bem, não foram dias muito bons. Não sinto necessidade de escrever em detalhes o que senti ou o que fiz. Posso dizer que mesmo depois de 7 anos, com um desejo infinito de acabar com minha própria vida, é difícil lembrar de coisas importantes daquele momento. É como se meu subconsciente estivesse tentando esconder essas memórias por medo de acontecer novamente apenas lembrando do que passei, ou talvez eu estivesse tão mal que não conseguia registrar nenhum evento que me causasse o menor realismo, se houvesse algum.

Depois desse tempo, entrei em relacionamentos, que não duraram muito, porque uma pessoa doente e sem vida não poderia realmente amar alguém. Não, o amor não tem a capacidade de curar sozinho o que destruiu, ou teve muita participação nisso. Em outras palavras, tempos que eram um pouco mais escuros do que se eu estivesse sozinho... (no... sozinho também foi um dos piores momentos que me lembro).

Dia ##/##/####, completando 18 anos, deveria ser o dia exato da minha morte, um tempo que calculei desde criança, simplesmente porque achei que não deveria "sobreviver" mais do que isso, e não tinha mais motivos para querer viver. Gravei áudios pedindo ajuda, escrevi textos e me despedi de alguns amigos, por medo do que eu era capaz. Acabei contando para pessoas que talvez se importassem comigo, porém, sem fé e já exausto de tudo, não existia mais esperança de poder viver.

Depois disso, alguns momentos solitários acabaram voltando e com eles, trouxeram o gosto amargo da solidão. Mas isso passou, e acabei me apaixonando por alguém. Consegui me apaixonar, e como acontece com quase todas as pessoas, esse amor me destruiu. A outra pessoa não sentia o mínimo por você, e então, você foi traído. Mas isso foi bom; me fez uma pessoa não dependente emocionalmente.

Escrevi este texto em um lugar isolado, no meio da natureza (longe o suficiente de qualquer pessoa). É o melhor lugar que eu poderia estar, paz. Não vou descrever muito este lugar, mas aqui há ar limpo, posso ver o céu, estou sozinho, posso escrever em paz. Corri para cá depois de perder a garota que amava. Hoje corro para este lugar sempre que posso porque foi algo que me fez bem, "se você não pode voar, corra." Haha.. senti falta de escrever esses textos. Gosto de anotar esse tipo de coisa para nunca esquecer quem sou, para sempre saber pelo que passei, como passei. Talvez seja uma forma de ajudar as pessoas. Quero poder ler este texto no futuro, lembrando da época em que o suicídio quase me levou. Não sei se é possível voltar àquele tempo ou ter uma fase pior. Mas não importa o quanto eu tenha, nunca será o mesmo porque prometi não me render, e sei que farei o melhor para mim, sem medo de viver.

Embora reconhecendo que é um assunto complexo que poderia potencialmente impactar minha saúde mental, refletir sobre o passado é sempre intrigante. Envolve revisitar coisas que aprendi, que podem ter deixado memórias fracas, pequenos detalhes ou pensamentos compartilhados com alguém. Bem, aprendi algo novo e isso é bom, mas infelizmente, as pessoas não veem valor, nem mesmo nos meus textos. É algo que está além do raciocínio delas. Elas não me escutam, não me leem, ou nem mesmo mantêm por 3 segundos em suas mentes, que você deve estar exausto de tanta informação inútil. Sim, a maioria das pessoas não lê textos gigantes, cada linha, precisamente porque preferem coisas rápidas, que dão uma dose de dopamina.

Por que SLX?

Com 6 dias restantes para cometer o ato que esperei minha vida toda, minha vida passou por mudanças profundas, coisas inexplicáveis aconteceram e finalmente, pela primeira vez, senti o desejo de viver... Finalmente um momento sem ansiedade, apenas a emoção de ser um ser humano feliz. A partir de então, prometi a mim mesmo que mudaria o rumo da minha vida, seria alguém importante, pelo menos para mim. Não posso dizer que me senti curado depois daquele dia, mas de alguma forma uma faísca se acendeu em uma janela de luz de pensamento que me fez lembrar quem sou e a importância de ser eu mesmo.

SLX foi um nome apenas para não deixar claro que o significado é seis, para mostrar que não queria expor o que aconteceu comigo, eu era apenas uma das milhares de crianças que passaram toda a vida com depressão, e piorando a cada dia que passava. Meu objetivo com este texto (caso alguém leia um dia) é apenas mostrar que não é o fim, a depressão pode ser curada e se você precisar de ajuda, não faça como eu mantendo para mim mesmo, vá e procure ajuda porque os sintomas vão piorar a cada dia que passa e você ignora isso, para SLX, peça ajuda.

Se você leu até aqui, você é uma pessoa rara, por favor, certifique-se de me avisar, você pode enviar um email privadamente para slowedbase@gmail.com Eu vou te responder ♥️

Como está o SLX hoje em dia?

Bem, eu... não consigo pensar direito, não consigo falar muito, não sei meu aniversário, não sei o que faço, não consigo comer direito há anos, meu trabalho me cansa e me sinto pior a cada dia por essa razão, não sei quem sou... sempre pensei que o tempo curaria, aqui estou, no fundo do poço que não há escapatória, cometer suicídio até o final do ano é quase uma promessa, não consigo mais sobreviver, não quero, sou um ser cansado de tudo desde que nasci, não acho que mereço mais viver, nunca nem fui feliz... estou aproveitando o tempo que me resta para conhecer pessoas e me divertir um pouco em um jogo estranho...

Alguns textos ou diários abaixo, para quem quiser entender tudo melhor`
  },
  en: {
    navigation: {
      home: "Home",
      social: "Social Media",
      tutorials: "Tutorials",
      configurations: "Settings",
      about: "About"
    },
    welcome: "Welcome to SLX Gaming!",
    biography: "I'm SLX, a passionate Call of Duty Mobile player bringing you the best:",
    features: [
      "Sniper loadouts",
      "Tryhard tips",
      "Pro-level gameplay",
      "Tutorials",
      "All my configurations",
      "ASMR and schizophrenia spikes"
    ],
    description: "Whether you're here to improve your skills or just enjoy some epic matches, this is the place for you. Connect with me through my social media and stay updated on the latest strategies, highlights, and exclusive content.",
    collaboration: "Interested in collaborating or sponsoring my content? Check out my",
    mediaKitLink: "media kit",
    collaborationEnd: "for partnership opportunities!",
    codmId: "My Call Of Duty Mobile ID: 6870254103403626497",
    livepix: "LIVEPIX",
    livepixSubtitle: "Or scan the QR Code:",
    pixDirect: "Direct Pix",
    pixDirectSubtitle: "If you prefer, you can send directly via pix",
    pixKey: "Key: b23a8dc0-c540-4d9b-8aaa-d91800bdb434",
    feedGamer: "💸 𝐅𝐞𝐞𝐝 𝐚 𝐆𝐚𝐦𝐞𝐫 – 𝐘𝐨𝐮𝐫 𝐃𝐨𝐧𝐚𝐭𝐢𝐨𝐧 𝐒𝐚𝐯𝐞𝐬 𝐋𝐢𝐯𝐞𝐬! 😂",
    precisionTitle: "100% Accuracy",
    precisionSubtitle: "Results from my Call of Duty Mobile matches",
    youtubeSubtitle: "Tutorials, Loadouts, Sensitivity, HUD, etc",
    instagramSubtitle: "Photographer, writer, melancholy lover, etc",
    tiktokSubtitle: "Livestreams and some clips",
    tiktokSubSubtitle: "TikTok live subscribers",
    youtubeAgricultureSubtitle: "My work and personal development",
    exclusiveConfigurations: "Exclusive Configurations",
    followToUnlockConfigs: "Follow on Instagram to unlock my exclusive Call of Duty Mobile configurations!",
    myConfigurations: "My Configurations",
    configTikTok: "on TikTok",
    configYouTube: "on YouTube",
    exclusiveTutorials: "Exclusive Tutorials",
    followToUnlockTutorials: "Follow on Instagram to unlock my exclusive Call of Duty Mobile tutorials!",
    myTutorials: "My Tutorials",
    tutorialTikTok: "on TikTok",
    tutorialYouTube: "on YouTube",
    myGamingSetup: "My Gaming Setup",
    aboutMeText: "But anyway, who is this guy?",
    aboutMeContent: `A brief description of what you might like to know about this nyctophile:

I know I'm not so important that I only have one text to say about myself, but anyway, this is me.

At first glance, this text may seem unnecessary, but recently, I've been reflecting on my past, realizing that throughout my entire childhood, suicidal thoughts consumed me.

I was willing to take any opportunity to end my life. I meticulously planned every detail—knowing the time, the day, the method—everything. I spent years studying ways to fix this, and the more I knew, the worse I got; it was an infinite cycle.

In those moments, the one who helped me most was my dog, who supernaturally knew what was happening. And about God? I asked, begged, prayed for him to help me commit suicide, nothing helped.

Practically 7 years have passed since I realized my world was falling apart. In my entire life or practically my entire childhood, every day of every month of every year... Since I was just a teenager, I didn't realize what was happening. But I only saw it was a real problem when I realized I was already wanting to undo what God once did, my life.

Not going into too much detail, why say it was 7 years then if it was my whole life? Well, it's because that's when I started to feel the consequences. The first months of 2017 were catastrophic. As much as I tried to heal myself since I realized this gigantic change in who I was, it was like taking the light from the sun itself. I would say scary, but it was darker. Well, they weren't very good days. I don't feel the need to write in detail what I felt or what I did. I can say that even after 7 years, with an infinite desire to end my own life, it's hard to remember important things from that moment. It's as if my subconscious was trying to hide these memories for fear of it happening again just by remembering what I went through, or maybe I was so bad that I couldn't register any event that caused me the slightest realism, if there was any.

After that time, I entered relationships, which didn't last long, because a sick and lifeless person couldn't really love someone. No, love doesn't have the ability to heal alone what destroyed, or had much participation in it. In other words, times that were a little darker than if I were alone... (no... alone was also one of the worst moments I remember).

Day ##/##/####, turning 18, should have been the exact day of my death, a time I calculated since childhood, simply because I thought I shouldn't "survive" more than that, and had no more reasons to want to live. I recorded audios asking for help, wrote texts and said goodbye to some friends, for fear of what I was capable of. I ended up telling people who might care about me, however, without faith and already exhausted from everything, there was no more hope of being able to live.

After that, some lonely moments ended up returning and with them, brought the bitter taste of loneliness. But that passed, and I ended up falling in love with someone. I managed to fall in love, and as happens with almost all people, this love destroyed me. The other person didn't feel the slightest for you, and then, you were betrayed. But that was good; it made me a person not emotionally dependent.

I wrote this text in an isolated place, in the middle of nature (far enough from any person). It's the best place I could be, peace. I won't describe this place much, but here there's clean air, I can see the sky, I'm alone, I can write in peace. I ran here after losing the girl I loved. Today I run to this place whenever I can because it was something that did me good, "if you can't fly, run." Haha.. I missed writing these texts. I like to write down this kind of thing to never forget who I am, to always know what I went through, how I went through it. Maybe it's a way to help people. I want to be able to read this text in the future, remembering the time when suicide almost took me. I don't know if it's possible to go back to that time or have a worse phase. But no matter how much I have, it will never be the same because I promised not to give up, and I know I'll do my best for myself, without fear of living.

Although recognizing that it's a complex subject that could potentially impact my mental health, reflecting on the past is always intriguing. It involves revisiting things I learned, which may have left weak memories, small details or thoughts shared with someone. Well, I learned something new and that's good, but unfortunately, people don't see value, not even in my texts. It's something that's beyond their reasoning. They don't listen to me, don't read me, or don't even keep for 3 seconds in their minds, that you must be exhausted from so much useless information. Yes, most people don't read giant texts, each line, precisely because they prefer quick things, that give a dose of dopamine.

Why SLX?

With 6 days left to commit the act I waited my whole life for, my life went through profound changes, inexplicable things happened and finally, for the first time, I felt the desire to live... Finally a moment without anxiety, just the emotion of being a happy human being. From then on, I promised myself that I would change the course of my life, I would be someone important, at least to myself. I can't say I felt healed after that day, but somehow a spark lit up in a window of light of thought that made me remember who I am and the importance of being myself.

SLX was a name just to not make it clear that the meaning is six, to show that I didn't want to expose what happened to me, I was just one of thousands of children who spent their whole life with depression, and getting worse every day that passed. My goal with this text (in case someone reads it one day) is just to show that it's not the end, depression can be cured and if you need help, don't do like me keeping it to myself, go and seek help because the symptoms will get worse every day that passes and you ignore it, for SLX, ask for help.

If you read this far, you are a rare person, please make sure to let me know, you can send an email privately to slowedbase@gmail.com I will answer you ♥️

How is SLX nowadays?

Well, I... can't think straight, can't talk much, don't know my birthday, don't know what I do, can't eat properly for years, my work tires me and I feel worse every day for this reason, don't know who I am... I always thought time would heal, here I am, at the bottom of the pit that there's no escape, committing suicide by the end of the year is almost a promise, I can't survive anymore, I don't want to, I'm a being tired of everything since I was born, I don't think I deserve to live anymore, I was never even happy... I'm enjoying the time I have left to meet people and have some fun in a strange game...

Some texts or diaries below, for those who want to understand everything better`
  }
}

function App() {
  const [language, setLanguage] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");
  const [showLanguageSelection, setShowLanguageSelection] = useState(true);

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    setShowLanguageSelection(false);
  };

  if (showLanguageSelection) {
    return <LanguageSelector onSelectLanguage={handleLanguageSelect} />;
  }

  const t = translations[language]

  // Componente Card
  const Card = ({ children, className = "" }) => (
    <div className={`bg-card text-card-foreground rounded-lg border ${className}`}>
      {children}
    </div>
  )

  const CardContent = ({ children, className = "" }) => (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )



  // Componente de navegação
  const NavButton = ({ page, icon: Icon, children }) => (
    <Button
      onClick={() => setCurrentPage(page)}
      variant={currentPage === page ? "default" : "outline"}
      className={`flex items-center gap-2 ${currentPage === page ? "" : "nav-button-outline"}`}
    >
      <Icon className="h-4 w-4" />
      {children}
    </Button>
  )

  // Página inicial
  const HomePage = () => (
    <div className="space-y-8">
      {/* Seção principal */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text">
          {t.welcome}
        </h1>
        <p className="text-lg text-muted-foreground text-shadow-strong">Jogador apaixonado por Call of Duty Mobile</p>
        <p className="text-center text-lg font-semibold text-primary text-shadow-strong">@SLX CODM</p>
        <Card className="card-shadow">
          <CardContent className="space-y-4 p-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.biography}
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left">
              {t.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <p className="text-sm text-muted-foreground">
              {t.description}
            </p>
            
            <p className="text-sm font-mono bg-muted p-2 rounded mt-4">
              {t.codmId}
            </p>
            
            <p className="text-sm text-muted-foreground">
              {t.collaboration}{" "}
              <a 
                href="https://beacons.ai/slx_codm/mediakit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                {t.mediaKitLink}
              </a>{" "}
              {t.collaborationEnd}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Doação rápida - apenas português */}
      {language === 'pt' && (
        <Card className="card-shadow">
          <CardContent className="text-center">
            <Button 
              className="w-full max-w-md mx-auto min-h-[80px] px-6 py-4 text-lg font-bold bg-green-800 hover:bg-green-900 text-white button-animation"
              onClick={() => window.open('https://vakinha.bio/5344505', '_blank')}            >
              <div className="text-center leading-tight">
                <div>{t.donateQuick}</div>
                <div>{t.vakinhaWord}</div>
              </div>
            </Button>
          </CardContent>
        </Card>
      )}

      {/* LIVEPIX */}
      {language === 'pt' && (
        <Card className="card-shadow">
          <CardContent className="text-center space-y-4">
            <h3 className="text-xl font-bold">{t.livepix}</h3>
            <Button 
              className="w-full max-w-md mx-auto bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open('https://livepix.gg/slx', '_blank')}
            >
              Acessar LIVEPIX
            </Button>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{t.livepixSubtitle}</p>
              <img 
                src={livepixQR} 
                alt="QR Code LivePix" 
                className="w-32 h-32 mx-auto rounded-lg"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* PIX DIRETO */}
      {language === 'pt' && (
        <Card className="card-shadow">
          <CardContent className="text-center space-y-4">
            <h3 className="text-xl font-bold">{t.pixDirect}</h3>
            <p className="text-sm text-muted-foreground">{t.pixDirectSubtitle}</p>
            <p className="text-sm font-mono bg-muted p-2 rounded">
              {t.pixKey}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Vakinha Dream */}
      {language === 'pt' && (
        <Card className="card-shadow">
          <CardContent className="text-center">
            <Button 
              className="w-full max-w-md mx-auto bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open('https://www.vakinha.com.br/vaquinha/da-enxada-ao-call-of-duty-mobile', '_blank')}
            >
              {t.vakinhaDream}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Vakinha LivePix */}
      {language === 'pt' && (
        <Card className="card-shadow">
          <CardContent className="text-center space-y-2">
            <Button 
              className="w-full max-w-md mx-auto bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open('https://livepix.gg/vaquinha/minha-terapia', '_blank')}
            >
              {t.livepixVakinha}
            </Button>
            <p className="text-xs text-muted-foreground italic">
              {t.livepixVakinhaSubtitle}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Feed a Gamer - apenas inglês */}
      {language === 'en' && (
        <Card className="card-shadow">
          <CardContent className="text-center">
            <Button 
              className="w-full max-w-md mx-auto bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
              onClick={() => window.open('https://donate.stripe.com/8wM3dn7Ne4493QY8ww', '_blank')}
            >
              {t.feedGamer}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Seção 100% de Precisão */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-text mb-2">
            {t.precisionTitle}
          </h2>
          <p className="text-muted-foreground">
            {t.precisionSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[precision1, precision2, precision3, precision4, precision5, precision6, precision7, precision8, precision9].map((img, index) => (
            <Card key={index} className="card-shadow overflow-hidden">
              <img 
                src={img} 
                alt={`Precisão ${index + 1}`} 
                className="w-full h-48 object-cover hover-lift"
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  // Página de Redes Sociais
  const SocialPage = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold gradient-text mb-4">
          {t.navigation.social}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="card-shadow hover-lift">
          <CardContent className="text-center space-y-4">
            <Youtube className="h-12 w-12 mx-auto text-red-500" />
            <h3 className="text-xl font-bold">YouTube SLX</h3>
            <p className="text-sm text-muted-foreground">{t.youtubeSubtitle}</p>
            <Button 
              className="w-full bg-red-600 hover:bg-red-700 text-white"
              onClick={() => window.open('https://www.youtube.com/@SLXCODM', '_blank')}
            >
              {language === 'pt' ? 'Inscrever-se' : 'Subscribe'}
            </Button>
          </CardContent>
        </Card>

        <Card className="card-shadow hover-lift">
          <CardContent className="text-center space-y-4">
            <Youtube className="h-12 w-12 mx-auto text-green-500" />
            <h3 className="text-xl font-bold">YouTube Agricultura SLNX</h3>
            <p className="text-sm text-muted-foreground">{t.youtubeAgricultureSubtitle}</p>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open('https://www.youtube.com/@SLNXofc', '_blank')}
            >
              {language === 'pt' ? 'Inscrever-se' : 'Subscribe'}
            </Button>
          </CardContent>
        </Card>

        <Card className="card-shadow hover-lift">
          <CardContent className="text-center space-y-4">
            <Instagram className="h-12 w-12 mx-auto text-pink-500" />
            <h3 className="text-xl font-bold">Instagram</h3>
            <p className="text-sm text-muted-foreground">{t.instagramSubtitle}</p>
            <Button 
              className="w-full bg-pink-600 hover:bg-pink-700 text-white"
              onClick={() => window.open('https://www.instagram.com/slx.wav', '_blank')}
            >
              {language === 'pt' ? 'Seguir' : 'Follow'}
            </Button>
          </CardContent>
        </Card>

        <Card className="card-shadow hover-lift">
          <CardContent className="text-center space-y-4">
            <img 
              src={tiktokIcon} 
              alt="TikTok" 
              className="h-12 w-12 mx-auto rounded-lg"
              style={{filter: 'hue-rotate(280deg) saturate(1.2)'}}
            />
            <h3 className="text-xl font-bold">TikTok</h3>
            <p className="text-sm text-muted-foreground">{t.tiktokSubtitle}</p>
            <Button 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => window.open('https://www.tiktok.com/@slxcodm_', '_blank')}
            >
              {language === 'pt' ? 'Seguir' : 'Follow'}
            </Button>
          </CardContent>
        </Card>

        <Card className="card-shadow hover-lift">
          <CardContent className="text-center space-y-4">
            <img 
              src={tiktokIcon} 
              alt="TikTok Sub" 
              className="h-12 w-12 mx-auto rounded-lg"
              style={{filter: 'hue-rotate(120deg) saturate(1.2)'}}
            />
            <h3 className="text-xl font-bold">TikTok Sub</h3>
            <p className="text-sm text-muted-foreground">{t.tiktokSubSubtitle}</p>
            <Button 
              className="w-full bg-teal-600 hover:bg-teal-700 text-white"
              onClick={() => window.open('https://vm.tiktok.com/ZMSs91c6U/', '_blank')}
            >
              {language === 'pt' ? 'Inscrever' : 'Subscribe'}
            </Button>
          </CardContent>
        </Card>

        <Card className="card-shadow hover-lift">
          <CardContent className="text-center space-y-4">
            <img 
              src={discordIcon} 
              alt="Discord" 
              className="h-12 w-12 mx-auto rounded-lg object-cover"
            />
            <h3 className="text-xl font-bold">Discord</h3>
            <p className="text-sm text-muted-foreground">{language === 'pt' ? 'Servidor da comunidade' : 'Community Server'}</p>
            <Button 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              onClick={() => window.open('https://discord.com/invite/RyMuC8wwCt', '_blank')}
            >
              {language === 'pt' ? 'Entrar' : 'Join'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  // Página de Tutoriais
  const TutorialsPage = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold gradient-text">
          {t.exclusiveTutorials}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t.followToUnlockTutorials}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="card-shadow hover-lift">
          <CardContent className="text-center space-y-4">
            <img 
              src={tiktokIcon} 
              alt="TikTok" 
              className="h-16 w-16 mx-auto rounded-lg"
              style={{filter: 'hue-rotate(280deg) saturate(1.2)'}}
            />
            <h3 className="text-xl font-bold">{t.myTutorials}</h3>
            <p className="text-lg text-primary font-semibold">{t.tutorialTikTok}</p>
            <Button 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => window.open('https://sub4unlock.io/TnAsP', '_blank')}
            >
              {language === 'pt' ? 'Acessar Tutoriais' : 'Access Tutorials'}
            </Button>
          </CardContent>
        </Card>

        <Card className="card-shadow hover-lift">
          <CardContent className="text-center space-y-4">
            <Youtube className="h-16 w-16 mx-auto text-red-500" />
            <h3 className="text-xl font-bold">{t.myTutorials}</h3>
            <p className="text-lg text-primary font-semibold">{t.tutorialYouTube}</p>
            <Button 
              className="w-full bg-red-600 hover:bg-red-700 text-white"
              onClick={() => window.open('https://sub4unlock.io/4s75G', '_blank')}
            >
              {language === 'pt' ? 'Acessar Tutoriais' : 'Access Tutorials'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  // Página de Configurações
  const ConfigurationsPage = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold gradient-text">
          {t.exclusiveConfigurations}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t.followToUnlockConfigs}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="card-shadow hover-lift">
          <CardContent className="text-center space-y-4">
            <img 
              src={tiktokIcon} 
              alt="TikTok" 
              className="h-16 w-16 mx-auto rounded-lg"
              style={{filter: 'hue-rotate(280deg) saturate(1.2)'}}
            />
            <h3 className="text-xl font-bold">{t.myConfigurations}</h3>
            <p className="text-lg text-primary font-semibold">{t.configTikTok}</p>
            <Button 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => window.open('https://sub4unlock.io/Zy3oC', '_blank')}
            >
              {language === 'pt' ? 'Acessar Configurações' : 'Access Configurations'}
            </Button>
          </CardContent>
        </Card>

        <Card className="card-shadow hover-lift">
          <CardContent className="text-center space-y-4">
            <Youtube className="h-16 w-16 mx-auto text-red-500" />
            <h3 className="text-xl font-bold">{t.myConfigurations}</h3>
            <p className="text-lg text-primary font-semibold">{t.configYouTube}</p>
            <Button 
              className="w-full bg-red-600 hover:bg-red-700 text-white"
              onClick={() => window.open('https://sub4unlock.io/hBlXP', '_blank')}
            >
              {language === 'pt' ? 'Acessar Configurações' : 'Access Configurations'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  // Página Sobre
  const AboutPage = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold gradient-text mb-8">
          {t.myGamingSetup}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="card-shadow">
          <CardContent className="text-center space-y-4">
            <h3 className="text-xl font-bold">11/11/2023</h3>
            <img 
              src={setup1} 
              alt="Setup Gamer 2023" 
              className="w-full rounded-lg shadow-lg hover-lift"
            />
          </CardContent>
        </Card>

        <Card className="card-shadow">
          <CardContent className="text-center space-y-4">
            <h3 className="text-xl font-bold">12/12/2024</h3>
            <img 
              src={setup2} 
              alt="Setup Gamer 2024" 
              className="w-full rounded-lg shadow-lg hover-lift"
            />
          </CardContent>
        </Card>
      </div>

      {/* Texto sobre mim */}
      <div className="space-y-6 mt-12">
        <h3 className="text-2xl font-bold text-center gradient-text">
          {t.aboutMeText}
        </h3>
        
        <Card className="card-shadow">
          <CardContent className="p-6 space-y-4">
            <div className="text-sm leading-relaxed whitespace-pre-line">
              {t.aboutMeContent}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <SpeedInsights />
      {/* Header com navegação */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            <NavButton page="home" icon={Gamepad2}>
              {t.navigation.home}
            </NavButton>
            <NavButton page="social" icon={Instagram}>
              {t.navigation.social}
            </NavButton>
            <NavButton page="tutorials" icon={BookOpen}>
              {t.navigation.tutorials}
            </NavButton>
            <NavButton page="configurations" icon={Settings}>
              {t.navigation.configurations}
            </NavButton>
            <NavButton page="about" icon={Target}>
              {t.navigation.about}
            </NavButton>
            <Button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              variant="ghost"
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              {language === 'pt' ? '🇺🇸' : '🇧🇷'}
            </Button>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="container mx-auto px-4 py-8">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'social' && <SocialPage />}
        {currentPage === 'configurations' && <ConfigurationsPage />}
        {currentPage === 'tutorials' && <TutorialsPage />}
        {currentPage === 'about' && <AboutPage />}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2025 SLX Gaming. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}</p>
        </div>
      </footer>
    </div>
  )
}

export default App



