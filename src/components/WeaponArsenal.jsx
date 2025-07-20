import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Search, Copy, Check, Target, Filter } from 'lucide-react';
import weaponsData from '../data/weapons.json';

// Importar todas as imagens das armas
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

// Mapeamento das imagens
const imageMap = {
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

  // Copiar código para clipboard
  const copyToClipboard = async (code, weaponId) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(weaponId);
      setTimeout(() => setCopiedCode(''), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  // Componente Card da Arma
  const WeaponCard = ({ weapon }) => {
    const weaponImage = imageMap[weapon.image[language]];
    
    return (
      <Dialog>
        <DialogTrigger asChild>
          <div className="group cursor-pointer bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-video overflow-hidden">
              <img 
                src={weaponImage}
                alt={weapon.name[language]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                {weapon.name[language]}
              </h3>
              <Badge variant="secondary" className="text-xs">
                {weapon.category[language]}
              </Badge>
            </div>
          </div>
        </DialogTrigger>
        
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text">
              {weapon.name[language]}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="text-center">
              <img 
                src={weaponImage}
                alt={weapon.name[language]}
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  {t.shareCode}
                </h4>
                <div className="flex items-center gap-2">
                  <code className="flex-1 bg-muted p-3 rounded-lg font-mono text-lg">
                    {weapon.code[language]}
                  </code>
                  <Button
                    onClick={() => copyToClipboard(weapon.code[language], weapon.id)}
                    className="min-w-[120px]"
                    variant={copiedCode === weapon.id ? "default" : "outline"}
                  >
                    {copiedCode === weapon.id ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        {t.copied}
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
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
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text">
          {t.title}
        </h1>
        <p className="text-lg text-muted-foreground text-shadow-strong">
          {t.subtitle}
        </p>
      </div>

      {/* Controles de Busca e Filtro */}
      <div className="space-y-4">
        {/* Barra de Busca */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 text-center"
          />
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            variant={selectedCategory === 'all' ? "default" : "outline"}
            onClick={() => setSelectedCategory('all')}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            {t.allCategories}
          </Button>
          {weaponsData.categories[language].map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Grid de Armas */}
      {filteredWeapons.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWeapons.map(weapon => (
            <WeaponCard key={weapon.id} weapon={weapon} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 space-y-4">
          <Target className="h-16 w-16 mx-auto text-muted-foreground opacity-50" />
          <h3 className="text-xl font-semibold text-muted-foreground">
            {t.noResults}
          </h3>
          <p className="text-muted-foreground">
            {t.tryDifferentSearch}
          </p>
        </div>
      )}
    </div>
  );
};

export default WeaponArsenal;

