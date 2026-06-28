#  Araújo - MVP Front-End Avançado

##  Descrição

Este projeto foi desenvolvido como MVP da disciplina **Desenvolvimento Front-End Avançado**, da Pós-graduação em Desenvolvimento Full Stack da PUC-Rio.

A aplicação simula um e-commerce de farmácia inspirado na rede **Drogaria Araújo**, conhecida em Minas Gerais. O objetivo do projeto é aplicar conceitos de React, componentização, roteamento, reutilização de componentes, hooks e organização de código.

Os produtos são carregados a partir de um arquivo JSON, simulando uma requisição a um servidor.

> **Observação:** Este projeto possui finalidade exclusivamente acadêmica e foi inspirado na identidade visual da Drogaria Araújo. Não possui qualquer vínculo oficial com a empresa.

---

#  Tecnologias utilizadas

* React
* Vite
* JavaScript (ES6+)
* React Router DOM
* Material UI (Tooltip)
* HTML5
* CSS3

---

#  Estrutura do projeto

```
src/
├── assets/
├── components/
│   ├── BarraBusca/
│   ├── Botao/
│   ├── Header/
│   ├── ProductCard/
│   └── Tooltip.jsx
├── data/
│   └── produtos.json
├── pages/
│   ├── Home.jsx
│   ├── Produtos.jsx
│   ├── DetalhesProduto.jsx
│   └── NotFound.jsx
├── routes/
│   └── AppRoutes.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

#  Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

Acesse a pasta do projeto:

```bash
cd mvp-front-end-avancado
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Abra o navegador em:

```
http://localhost:5173
```

---

#  Funcionalidades

* Página inicial.
* Listagem de produtos.
* Barra de pesquisa.
* Página de detalhes dos produtos.
* Controle de quantidade.
* Cálculo automático do valor total.
* Tooltip nos botões.
* Feedback visual ao usuário.
* Página 404 para rotas inexistentes.
* Componentes reutilizáveis.
* Dados simulados utilizando arquivo JSON.

---

#  Componentes reutilizáveis

* Header
* ProductCard
* BarraBusca
* Botao
* Tooltip

---

#  Rotas

* `/` — Página inicial
* `/produtos` — Lista de produtos
* `/produto/:id` — Detalhes do produto
* `*` — Página não encontrada (404)

---

#  Hooks utilizados

* useState
* useEffect
* useNavigate
* useParams
* useLocation

---

#  Desenvolvido por

**Bianca Maria**

MVP da disciplina **Desenvolvimento Front-End Avançado**

Pós-graduação em Desenvolvimento Full Stack – PUC-Rio
