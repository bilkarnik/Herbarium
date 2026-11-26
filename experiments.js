/* =====================================================================
   ХЕРБАРИУМ — БАЗА С ЕКСПЕРИМЕНТИ
   Как се добавя нов експеримент (2 стъпки):
   1) Копирайте един блок { … } по-долу (не забравяйте запетаята между блоковете)
      и сменете id, number, page и текстовете. id трябва да е уникален.
   2) В папката experiments-folder копирайте experiment3.html под името от page
      (например experiment4.html). Вътре в страницата не се променя нищо.
   Нов ред в текста: напишете \n. Празно date не се показва.
   ===================================================================== */
window.HERBARIUM_EXPERIMENTS = [
  {
    id: "HERB-1",
    page: "experiments-folder/experiment1.html",
    number: "01",
    title:        { bg: "Експеримент 1", en: "Experiment 1" },
    subtitle:     { bg: "Кратко описание на експеримента.", en: "A short description of the experiment." },
    date: "",
    status:       { bg: "В процес на разработка", en: "In development" },
    objective:    { bg: "Добавете целта на експеримента.", en: "Add the objective of the experiment." },
    materials:    { bg: "Добавете използваните материали и апаратура.", en: "Add the materials and equipment used." },
    procedure:    { bg: "Добавете последователните стъпки на протокола.", en: "Add the step-by-step procedure." },
    observations: { bg: "Добавете наблюденията.", en: "Add observations." },
    results:      { bg: "Добавете резултатите и заключението.", en: "Add results and conclusion." }
  },
  {
    id: "HERB-2",
    page: "experiments-folder/experiment2.html",
    number: "02",
    title:        { bg: "Експеримент 2", en: "Experiment 2" },
    subtitle:     { bg: "Кратко описание на експеримента.", en: "A short description of the experiment." },
    date: "",
    status:       { bg: "В процес на разработка", en: "In development" },
    objective:    { bg: "Добавете целта на експеримента.", en: "Add the objective of the experiment." },
    materials:    { bg: "Добавете използваните материали и апаратура.", en: "Add the materials and equipment used." },
    procedure:    { bg: "Добавете последователните стъпки на протокола.", en: "Add the step-by-step procedure." },
    observations: { bg: "Добавете наблюденията.", en: "Add observations." },
    results:      { bg: "Добавете резултатите и заключението.", en: "Add results and conclusion." }
  },
  {
    id: "HERB-3",
    page: "experiments-folder/experiment3.html",
    number: "03",
    title:        { bg: "Експеримент 3", en: "Experiment 3" },
    subtitle:     { bg: "Кратко описание на експеримента.", en: "A short description of the experiment." },
    date: "",
    status:       { bg: "В процес на разработка", en: "In development" },
    objective:    { bg: "Добавете целта на експеримента.", en: "Add the objective of the experiment." },
    materials:    { bg: "Добавете използваните материали и апаратура.", en: "Add the materials and equipment used." },
    procedure:    { bg: "Добавете последователните стъпки на протокола.", en: "Add the step-by-step procedure." },
    observations: { bg: "Добавете наблюденията.", en: "Add observations." },
    results:      { bg: "Добавете резултатите и заключението.", en: "Add results and conclusion." }
  }
];
