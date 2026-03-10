# 3Cime Water Solutions — Website Institucional

## 🌊 Sobre o Projeto

Website institucional da **3Cime Water Solutions**, empresa de representações comerciais especializada em tecnologias internacionais disruptivas para tratamento de água e esgoto no mercado brasileiro.

---

## ✅ Funcionalidades Implementadas

### Estrutura e Design
- [x] Design moderno, responsivo e profissional com paleta azul/ciano
- [x] Animações de entrada com AOS (Animate On Scroll)
- [x] Background hero com partículas animadas (Canvas API)
- [x] Bolhas flutuantes e ondas animadas via CSS puro
- [x] Grid responsivo para mobile, tablet e desktop

### Seções do Site (index.html PT + en/index.html EN)
- [x] **Navbar** — fixa, glassmorphism ao rolar, **dropdown de soluções com 4 nichos**, menu hambúrguer mobile, seletor de idioma PT/EN
- [x] **Hero** — título impactante, estatísticas com contadores animados, partículas
- [x] **Sobre** — apresentação da empresa com cards flutuantes animados
- [x] **Portfólio de Tecnologias** — **4 cards** (Filtração, Membranas, Espessamento, Desaguamento) com lista expandível de produtos
- [x] **Diferenciais** — seção escura com métricas em gráfico circular SVG
- [x] **Parceiros Internacionais** — cards de parceiros + segmentos atendidos
- [x] **CTA** — faixa de chamada para ação
- [x] **Contato** — formulário completo com validação e envio para API REST
- [x] **Footer** — links completos de todas as tecnologias, newsletter, créditos

### Portfólio — 4 Cards de Nicho

| Card | Parceiro | Qtd | Páginas |
|------|----------|-----|---------|
| Filtração por Mídia Têxtil | Aqua-Aerobic Systems | 7 | aquadisk, aqua-minidisk, aqua-megadisk, aquaprime, aquastorm, aqua-diamond, aquadrum |
| Sistemas de Membranas | Aqua-Aerobic Systems | 3 | aquamb-process, aqua-mbr, aqua-multibore |
| Espessamento de Lodo | EMO France | 2 | emo-espessamento-lodo (GBT OMEGA + DAF) |
| Desaguamento de Lodo | EMO France | 3 | emo-desaguamento-bfp, emo-desaguamento-screw, emo-desaguamento-dryer |

### Páginas de Tecnologia — 14 páginas no total

**Aqua-Aerobic Systems (Filtração por Mídia Têxtil):**
- [x] `produtos/aquadisk.html` — AquaDisk® Cloth Media Filter
- [x] `produtos/aqua-minidisk.html` — Aqua MiniDisk®
- [x] `produtos/aqua-megadisk.html` — Aqua MegaDisk®
- [x] `produtos/aquaprime.html` — AquaPrime®
- [x] `produtos/aquastorm.html` — AquaStorm™
- [x] `produtos/aqua-diamond.html` — Aqua Diamond®
- [x] `produtos/aquadrum.html` — AquaDrum®

**Aqua-Aerobic Systems (Sistemas de Membranas):**
- [x] `produtos/aquamb-process.html` — AquaMB Process®
- [x] `produtos/aqua-mbr.html` — Aqua-Aerobic® MBR
- [x] `produtos/aqua-multibore.html` — Aqua MultiBore® C & P Series

**EMO France (Espessamento de Lodo):**
- [x] `produtos/emo-espessamento-lodo.html` — GBT OMEGA (SD·MD·LD·THC) + DAF (ALPHA·DELTA·GAMMA)

**EMO France (Desaguamento de Lodo):**
- [x] `produtos/emo-desaguamento-bfp.html` — Belt Filter Press OMEGA
- [x] `produtos/emo-desaguamento-screw.html` — Screw Press
- [x] `produtos/emo-desaguamento-dryer.html` — Sludge Dryer (EAHD/EAWD)

### Funcionalidades JavaScript
- [x] Contadores animados (estatísticas do Hero)
- [x] Gráficos circulares de progresso animados (SVG)
- [x] Sistema de partículas interativas (Canvas)
- [x] Dropdown de navegação com 4 nichos de tecnologia
- [x] Formulário de contato com envio para API REST
- [x] Newsletter com feedback visual
- [x] Máscara de telefone
- [x] Scroll suave para âncoras
- [x] NavLink ativo baseado na seção visível
- [x] Botão "Voltar ao Topo"

### Internacionalização
- [x] Versão em português — `index.html`
- [x] Versão em inglês — `en/index.html` (com `en/produtos/` linkando às páginas PT)

---

## 📁 Estrutura de Arquivos

```
/
├── index.html                          # Página principal (PT)
├── en/
│   └── index.html                      # Versão em inglês
├── css/
│   ├── style.css                       # Estilos globais + portfólio cards
│   └── product.css                     # Estilos das páginas de produto
├── js/
│   ├── main.js                         # JavaScript do site principal
│   └── product.js                      # JavaScript das páginas de produto
├── images/
│   ├── logo-3cime.png
│   ├── logo-emo-france.png
│   ├── logo-aqua-aerobic.png
│   ├── aquadisk-main.jpg … (demais imagens de produtos)
│   ├── emo-omega-gbt-main.jpg
│   ├── emo-daf-alpha-main.jpg
│   ├── emo-bfp-main.jpg
│   ├── emo-screw-press-main.jpg
│   └── emo-dryer-main.jpg
└── produtos/                           # 14 páginas de tecnologia
    ├── aquadisk.html
    ├── aqua-minidisk.html
    ├── aqua-megadisk.html
    ├── aquaprime.html
    ├── aquastorm.html
    ├── aqua-diamond.html
    ├── aquadrum.html
    ├── aquamb-process.html
    ├── aqua-mbr.html
    ├── aqua-multibore.html
    ├── emo-espessamento-lodo.html
    ├── emo-desaguamento-bfp.html
    ├── emo-desaguamento-screw.html
    └── emo-desaguamento-dryer.html
```

---

## 🔗 Rotas e Endpoints de Dados

| Método | Endpoint              | Descrição                          |
|--------|-----------------------|------------------------------------|
| POST   | `tables/contatos`     | Salva mensagem do formulário       |
| GET    | `tables/contatos`     | Lista todos os contatos recebidos  |
| POST   | `tables/newsletter`   | Salva e-mail de newsletter         |
| GET    | `tables/newsletter`   | Lista inscritos na newsletter      |

---

## 🗄️ Modelos de Dados

### Tabela: `contatos`
| Campo     | Tipo       | Descrição                    |
|-----------|------------|------------------------------|
| id        | text       | UUID único                   |
| nome      | text       | Nome completo                |
| empresa   | text       | Nome da empresa              |
| email     | text       | E-mail de contato            |
| telefone  | text       | Telefone / WhatsApp          |
| segmento  | text       | Segmento de atuação          |
| solucao   | text       | Solução de interesse         |
| mensagem  | rich_text  | Mensagem enviada             |

### Tabela: `newsletter`
| Campo | Tipo | Descrição              |
|-------|------|------------------------|
| id    | text | UUID único             |
| email | text | E-mail do inscrito     |

---

## 🎨 Stack e Bibliotecas

- **HTML5** semântico
- **CSS3** com variáveis customizadas (CSS Custom Properties)
- **JavaScript ES6+** (Vanilla JS)
- **AOS** — animações de scroll (CDN)
- **Font Awesome 6** — ícones (CDN)
- **Google Fonts** — Inter + Space Grotesk (CDN)
- **Canvas API** — sistema de partículas no hero

---

## 🚧 Próximos Passos Sugeridos

- [ ] Novas páginas EMO France: Desareação, Gradeamento, Filtros Prensa
- [ ] Páginas de outros parceiros (quando disponíveis)
- [ ] Área de Cases de Sucesso
- [ ] Blog / Artigos técnicos
- [ ] Integração WhatsApp Business
- [ ] Google Analytics / Tag Manager
- [ ] Schema.org markup para SEO
- [ ] Tradução das páginas de produto para inglês

---

*© 2026 3Cime Water Solutions. Todos os direitos reservados.*
