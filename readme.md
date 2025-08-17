# 🎙️ Project App Flow

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript) ![License](https://img.shields.io/badge/license-MIT-lightgrey) ![Status](https://img.shields.io/badge/status-Em%20Desenvolvimento-yellow)

API em **Node.js + TypeScript** que lista e filtra episódios de podcasts a partir de um arquivo JSON, simulando um banco de dados.  
O projeto segue uma arquitetura simples em **camadas** (controllers, services, repositories), ideal para aprendizado e evolução.

---

## 🚀 Como rodar o projeto

```bash
# Clonar o repositório
git clone https://github.com/YT4l0/Nodejs-Typescript-webApi-Without-Frameworks.git
cd project-app-flow

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run start:dev

# Rodar com hot-reload
npm run start:watch

````

---


### ➤ Listar episódios

`GET /api/list`

**Resposta:**

```json
[
  {
    "podcastName": "Podpah",
    "episode": "NEIFF - Podpah #941",
    "videoID": "FTXGb-fO7E8",
    "categories": ["entretenimento", "cantor"]
  }
]
```

---

### ➤ Filtrar episódios por nome

`GET /api/episode?p=flow `

**Resposta:**

```json
[
  {
    "podcastName": "flow",
    "episode": "Pato - Flow #942",
    "videoID": "4wSFExm9Mt8",
    "categories": ["entretenimento", "cantor"]
  }
]
```

---


## 📜 Scripts disponíveis

* `npm run start:dev` → inicia em modo desenvolvimento
* `npm run start:watch` → inicia com hot reload


---


## 📄 Licença

Este projeto está sob a licença **MIT**.

---

💻 Desenvolvido por **Ytalo Dias** 🚀


