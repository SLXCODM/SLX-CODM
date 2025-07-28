import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Search, Copy, Check, Target, Filter } from 'lucide-react';
import weaponsData from '../data/weapons.json';

// Importar todas as imagens das armas - Snipers (originais)
import img1000004329 from '../assets/1000004329.jpg';
import img1000004330 from '../assets/1000004330.jpg';
import img1000004331 from '../assets/1000004331.jpg';
import img1000004332 from '../assets/1000004332.jpg';
import img1000004333 from '../assets/1000004333.jpg';
import img1000004334 from '../assets/1000004334.jpg';
import img1000004335 from '../assets/1000004335.jpg';
import img1000004336 from '../assets/1000004336.jpg';
import img1000004337 from '../assets/1000004337.jpg';
import img1000004338 from '../assets/1000004338.jpg';
import img1000004339 from '../assets/1000004339.jpg';
import img1000004340 from '../assets/1000004340.jpg';

// Importar todas as imagens das novas armas
import img1000004501 from '../assets/1000004501.jpg';
import img1000004502 from '../assets/1000004502.jpg';
import img1000004503 from '../assets/1000004503.jpg';
import img1000004504 from '../assets/1000004504.jpg';
import img1000004505 from '../assets/1000004505.jpg';
import img1000004506 from '../assets/1000004506.jpg';
import img1000004507 from '../assets/1000004507.jpg';
import img1000004508 from '../assets/1000004508.jpg';
import img1000004509 from '../assets/1000004509.jpg';
import img1000004510 from '../assets/1000004510.jpg';
import img1000004511 from '../assets/1000004511.jpg';
import img1000004512 from '../assets/1000004512.jpg';
import img1000004513 from '../assets/1000004513.jpg';
import img1000004514 from '../assets/1000004514.jpg';
import img1000004515 from '../assets/1000004515.jpg';
import img1000004516 from '../assets/1000004516.jpg';
import img1000004517 from '../assets/1000004517.jpg';
import img1000004518 from '../assets/1000004518.jpg';
import img1000004519 from '../assets/1000004519.jpg';
import img1000004520 from '../assets/1000004520.jpg';
import img1000004521 from '../assets/1000004521.jpg';
import img1000004522 from '../assets/1000004522.jpg';

// Mapeamento completo das imagens
const imageMap = {
  // Snipers (originais)
  '1000004329.jpg': img1000004329,
  '1000004330.jpg': img1000004330,
  '1000004331.jpg': img1000004331,
  '1000004332.jpg': img1000004332,
  '1000004333.jpg': img1000004333,
  '1000004334.jpg': img1000004334,
  '1000004335.jpg': img1000004335,
  '1000004336.jpg': img1000004336,
  '1000004337.jpg': img1000004337,
  '1000004338.jpg': img1000004338,
  '1000004339.jpg': img1000004339,
  '1000004340.jpg': img1000004340,
  
  // Novas armas (SMT, Assalto, Escopeta, Atirador)
  '1000004501.jpg': img1000004501,
  '1000004502.jpg': img1000004502,
  '1000004503.jpg': img1000004503,
  '1000004504.jpg': img1000004504,
  '1000004505.jpg': img1000004505,
  '1000004506.jpg': img1000004506,
  '1000004507.jpg': img1000004507,
  '1000004508.jpg': img1000004508,
  '1000004509.jpg': img1000004509,
  '1000004510.jpg': img1000004510,
  '1000004511.jpg': img1000004511,
  '1000004512.jpg': img1000004512,
  '1000004513.jpg': img1000004513,
  '1000004514.jpg': img1000004514,
  '1000004515.jpg': img1000004515,
  '1000004516.jpg': img1000004516,
  '1000004517.jpg': img1000004517,
  '1000004518.jpg': img1000004518,
  '1000004519.jpg': img1000004519,
  '1000004520.jpg': img1000004520,
  '1000004521.jpg': img1000004521,
  '1000004522.jpg': img1000004522,
};

const WeaponArsenal = ({ language = 'pt' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedCode, setCopiedCode] = useState('');

  const translations = {
    pt: {
      title: "Arsenal Exclusivo",
      subtitle: "Classes de armas profissionais do SLX",
      searchPlaceholder: "Buscar arma...",
      allCategories: "Todas as Categorias",
      copyCode: "Copiar Código",
      copied: "Copiado!",
      weaponClass: "Classe da Arma",
      shareCode: "Código de Compartilhamento",
      noResults: "Nenhuma arma encontrada",
      tryDifferentSearch: "Tente uma busca diferente ou selecione outra categoria"
    },
    en: {
      title: "Exclusive Arsenal",
      subtitle: "SLX's professional weapon classes",
      searchPlaceholder: "Search weapon...",
      allCategories: "All Categories",
      copyCode: "Copy Code",
      copied: "Copied!",
      weaponClass: "Weapon Class",
      shareCode: "Share Code",
      noResults: "No weapons found",
      tryDifferentSearch: "Try a different search or select another category"
    }
  };

  const t = translations[language];

  // Configuração do Fuse.js para busca fuzzy
  const fuseOptions = {
    keys: [
      { name: `name.${language}`, weight: 0.7 },
      { name: `category.${language}`, weight: 0.2 },
      { name: 'keywords', weight: 0.1 }
    ],
    threshold: 0.3, // 0 = busca exata, 1 = busca muito flexível
    includeScore: true,
    minMatchCharLength: 1
  };

  const fuse = useMemo(() => new Fuse(weaponsData.weapons, fuseOptions), [language]);

  // Filtrar armas baseado na busca e categoria
  const filteredWeapons = useMemo(() => {
    let results = weaponsData.weapons;

    // Aplicar busca fuzzy se houver termo de busca
    if (searchTerm.trim()) {
      const fuseResults = fuse.search(searchTerm);
      results = fuseResults.map(result => result.item);
    }

    // Filtrar por categoria
    if (selectedCategory !== 'all') {
      results = results.filter(weapon => weapon.category[language] === selectedCategory);
    }

    return results;
  }, [searchTerm, selectedCategory, language, fuse]);

  // Função para copiar código
  const copyToClipboard = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(''), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  // Obter imagem da arma
  const getWeaponImage = (weapon) => {
    const imageName = weapon.image[language];
    return imageMap[imageName] || null;
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Cabeçalho */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Target className="h-8 w-8 text-orange-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            {t.title}
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* Controles de Busca e Filtro */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Barra de Busca */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full"
          />
        </div>

        {/* Filtro de Categoria */}
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="all">{t.allCategories}</option>
            {weaponsData.categories[language].map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid de Armas */}
      {filteredWeapons.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWeapons.map((weapon) => {
            const weaponImage = getWeaponImage(weapon);
            
            return (
              <Dialog key={weapon.id}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer bg-card rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105">
                    {/* Imagem da Arma */}
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                      {weaponImage ? (
                        <img
                          src={weaponImage}
                          alt={weapon.name[language]}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          <Target className="h-12 w-12" />
                        </div>
                      )}
                      
                      {/* Badge da Categoria */}
                      <Badge 
                        variant="secondary" 
                        className="absolute top-3 left-3 bg-black/70 text-white border-0"
                      >
                        {weapon.category[language]}
                      </Badge>
                    </div>

                    {/* Informações da Arma */}
                    <div className="p-4 space-y-2">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-orange-500 transition-colors">
                        {weapon.name[language]}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {weapon.category[language]}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>

                {/* Modal com Detalhes */}
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl">
                      <Target className="h-5 w-5 text-orange-500" />
                      {weapon.name[language]}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6">
                    {/* Imagem Grande */}
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                      {weaponImage ? (
                        <img
                          src={weaponImage}
                          alt={weapon.name[language]}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          <Target className="h-16 w-16" />
                        </div>
                      )}
                    </div>

                    {/* Informações */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                          {t.weaponClass}
                        </h4>
                        <p className="text-lg font-medium">{weapon.name[language]}</p>
                        <Badge variant="outline" className="mt-1">
                          {weapon.category[language]}
                        </Badge>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                          {t.shareCode}
                        </h4>
                        <div className="flex items-center gap-2">
                          <code className="bg-muted px-3 py-2 rounded text-sm font-mono flex-1">
                            {weapon.code[language]}
                          </code>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(weapon.code[language])}
                            className="shrink-0"
                          >
                            {copiedCode === weapon.code[language] ? (
                              <>
                                <Check className="h-4 w-4 mr-1" />
                                {t.copied}
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" />
                                {t.copyCode}
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      ) : (
        /* Estado Vazio */
        <div className="text-center py-12 space-y-4">
          <Target className="h-16 w-16 text-muted-foreground mx-auto opacity-50" />
          <h3 className="text-xl font-semibold text-muted-foreground">
            {t.noResults}
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            {t.tryDifferentSearch}
          </p>
        </div>
      )}
    </div>
  );
};

export default WeaponArsenal;

