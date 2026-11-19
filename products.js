/*
  ПРОДУКТОВ КАТАЛОГ — редактирайте този файл, за да добавяте/премахвате продукти.
  Полета: id, category (extract | botanical | care), symbol, tag, name.bg/en,
  description.bg/en, type.bg/en, seasonal (true/false), featured (true/false).
  За нов продукт копирайте обект, сменете id с уникална стойност и запазете запетайките.
*/
window.HERBARIUM_PRODUCTS = [
  {
    id: "calendula-oil",
    category: "care",
    symbol: "✿",
    tag: "BOTANICAL OIL",
    name: { bg: "Маслен извлек от невен", en: "Calendula Infused Oil" },
    description: {
      bg: "Примерен профил на растителен извлек от цвят на невен.",
      en: "A sample profile for an infused oil made with calendula flowers."
    },
    type: { bg: "Маслен извлек", en: "Infused oil" },
    seasonal: true,
    featured: true
  },
  {
    id: "peppermint-leaf",
    category: "botanical",
    symbol: "❧",
    tag: "DRIED BOTANICAL",
    name: { bg: "Листа от мента", en: "Peppermint Leaves" },
    description: {
      bg: "Ботанически материал за наблюдение, описание и ароматен профил.",
      en: "Botanical material for observation, description and aromatic profiling."
    },
    type: { bg: "Растителна суровина", en: "Botanical material" },
    seasonal: false,
    featured: true
  },
  {
    id: "chamomile-extract",
    category: "extract",
    symbol: "✺",
    tag: "PLANT EXTRACT",
    name: { bg: "Екстракт от лайка", en: "Chamomile Extract" },
    description: {
      bg: "Примерен продуктов запис с място за данни за състава и метода.",
      en: "A sample product entry with space for composition and method details."
    },
    type: { bg: "Растителен екстракт", en: "Plant extract" },
    seasonal: true,
    featured: true
  }
];
