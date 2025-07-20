# Arsenal de Armas - Documentação

## Como Adicionar Novas Armas

### 1. Preparar as Imagens
- Tire screenshots das classes em português e inglês no Call of Duty Mobile
- Salve as imagens com nomes descritivos (ex: `arma_nome_pt.jpg`, `arma_nome_en.jpg`)
- Coloque as imagens na pasta `src/assets/`

### 2. Atualizar o arquivo de dados
Edite o arquivo `src/data/weapons.json` e adicione a nova arma seguindo este formato:

```json
{
  "id": "nome-da-arma",
  "name": {
    "pt": "Nome em Português",
    "en": "Nome em Inglês"
  },
  "category": {
    "pt": "Categoria em Português",
    "en": "Categoria em Inglês"
  },
  "code": {
    "pt": "CÓDIGO_PT",
    "en": "CÓDIGO_EN"
  },
  "image": {
    "pt": "nome_arquivo_pt.jpg",
    "en": "nome_arquivo_en.jpg"
  },
  "keywords": ["palavra1", "palavra2", "apelidos"]
}
```

### 3. Atualizar as importações de imagens
No arquivo `src/components/WeaponArsenal.jsx`, adicione as importações das novas imagens:

```javascript
import imgNovaArma1 from '../assets/nova_arma_pt.jpg';
import imgNovaArma2 from '../assets/nova_arma_en.jpg';
```

E adicione ao `imageMap`:

```javascript
const imageMap = {
  // ... imagens existentes
  'nova_arma_pt.jpg': imgNovaArma1,
  'nova_arma_en.jpg': imgNovaArma2,
};
```

### 4. Adicionar novas categorias (se necessário)
Se a arma pertence a uma nova categoria, adicione-a ao array `categories` no arquivo `weapons.json`:

```json
"categories": {
  "pt": ["Sniper", "Nova Categoria"],
  "en": ["Sniper", "New Category"]
}
```

## Estrutura de Categorias Sugeridas

### Português
- Sniper
- Rifle de Assalto
- SMT (Submetralhadora)
- LMG (Metralhadora Leve)
- Escopeta
- Pistola

### Inglês
- Sniper
- Assault Rifle
- SMG (Submachine Gun)
- LMG (Light Machine Gun)
- Shotgun
- Pistol

## Dicas para Keywords
- Inclua apelidos comuns da arma
- Adicione variações de escrita
- Considere termos que os jogadores podem usar para buscar
- Exemplo: Para "AK-47" → ["ak47", "ak", "kalashnikov", "rifle"]

## Deploy
Após fazer as alterações:
1. Teste localmente com `pnpm dev`
2. Faça o build com `pnpm build`
3. Faça o deploy no Vercel

## Link Exclusivo
A página está configurada para ser acessada via `/arsenal` no menu principal. Para criar acesso exclusivo via Instagram, use o link direto da página e configure no seu serviço de "link na bio" (como Sub4unlock.io) para direcionar primeiro ao Instagram.

