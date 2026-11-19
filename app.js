const translations = {
  bg: {
    announcement:"Растения, знание и внимание към детайла.", navHome:"Начало",navProducts:"Продукти",navSeasonal:"Сезонни",navAbout:"За мен",navContact:"Свържете се",
    heroEyebrow:"ФАРМАКОГНОЗИЯ · БОТАНИКА · РАСТИТЕЛНИ ИЗВЛЕЦИ",heroTitle:"Природата,<br><em>изследвана</em><br>с внимание.",heroText:"Хербариум е пространство за растителни суровини, внимателно подбрани съставки и любопитство към богатството на ботаническия свят.",exploreProducts:"Разгледайте продуктите",ourApproach:"Нашият подход",heroFoot:"МАЛКИ ПАРТИДИ · РАСТИТЕЛНО ВДЪХНОВЕНИ · СЪЗДАДЕНИ С ГРИЖА",stripText:"Всяко растение има своя история. Ние започваме с това да я опознаем.",
    collectionEyebrow:"КОЛЕКЦИЯТА",productsTitle:"От растението<br><em>до продукта.</em>",productsIntro:"Разгледайте подбрани растителни материали и продукти. Всеки артикул има собствен профил с информация за състава и произхода.",browseCollection:"РАЗГЛЕДАЙТЕ КОЛЕКЦИЯТА",filterAll:"Всички",filterExtracts:"Извлеци",filterBotanical:"Растителни",filterCare:"Грижа",catalogNote:"Колекцията е примерна. Наличност, състав и предназначение се потвърждават за всеки продукт.",
    seasonEyebrow:"СЕЗОНЕН ФОКУС",seasonTitle:"Ритъмът на<br><em>сезоните.</em>",seasonText:"Всеки сезон носи различни растения, аромати и възможности за наблюдение. Тук представяме сезонни акценти, ботанически бележки и малки тематични серии.",seeSeasonal:"Вижте сезонните акценти",seasonItem1:"Късна есен · корени и семена",seasonItem2:"Ботанически бележник",seasonItem3:"Следваща сезонна серия",
    aboutEyebrow:"ЗА ХЕРБАРИУМ",aboutTitle:"Любопитство,<br><em>превърнато в грижа.</em>",aboutQuote:"Най-доброто начало е внимателното наблюдение.",aboutText1:"Хербариум е независим ботанически проект, посветен на фармакогнозията и практическото опознаване на растенията. Тук традиционното растително знание среща съвременния интерес към състава, качеството и приложението на растителните суровини.",aboutText2:"Проектът се развива постепенно — с внимание към документацията, прозрачността и отговорното представяне на всеки продукт.",signature:"Основател · Хербариум",getInTouch:"Свържете се с мен ↗",
    value1:"Растителен произход",value1s:"Внимание към суровината",value2:"Документиран подход",value2s:"Информация за продукта",value3:"Малки серии",value3s:"Грижа към детайла",
    contactEyebrow:"ДА ЗАПОЧНЕМ РАЗГОВОР",contactTitle:"Имате въпрос?<br><em>Пишете ми.</em>",contactText:"За въпроси относно продуктите, сътрудничество или просто разговор за растенията — ще се радвам да се свържете с мен.",formName:"Вашето име",formEmail:"Имейл адрес",formMessage:"Съобщение",sendMessage:"Изпратете съобщение",formHint:"Формата отваря вашето имейл приложение. За автоматично изпращане е необходима имейл услуга или бекенд.",footerNote:"Растителен свят. Внимателно изследван.",footerLegal:"Информацията на сайта не замества медицински съвет.",backTop:"НАГОРЕ ↑",namePlaceholder:"Име"
  },
  en: {
    announcement:"Plants, knowledge and attention to detail.",navHome:"Home",navProducts:"Products",navSeasonal:"Seasonal",navAbout:"About me",navContact:"Contact",
    heroEyebrow:"PHARMACOGNOSY · BOTANY · BOTANICAL EXTRACTS",heroTitle:"Nature,<br><em>studied</em><br>with care.",heroText:"Herbarium is a space for botanical materials, thoughtfully selected ingredients and curiosity about the richness of the plant world.",exploreProducts:"Explore products",ourApproach:"Our approach",heroFoot:"SMALL BATCHES · BOTANICALLY INSPIRED · MADE WITH CARE",stripText:"Every plant has a story. We begin by getting to know it.",
    collectionEyebrow:"THE COLLECTION",productsTitle:"From the plant<br><em>to the product.</em>",productsIntro:"Explore selected botanical materials and products. Each item has its own profile with information about its composition and origin.",browseCollection:"EXPLORE THE COLLECTION",filterAll:"All",filterExtracts:"Extracts",filterBotanical:"Botanicals",filterCare:"Care",catalogNote:"This is a sample collection. Availability, composition and intended use should be confirmed for each product.",
    seasonEyebrow:"SEASONAL FOCUS",seasonTitle:"The rhythm of<br><em>the seasons.</em>",seasonText:"Every season brings different plants, aromas and opportunities for observation. Here we share seasonal highlights, botanical notes and small themed collections.",seeSeasonal:"Explore seasonal highlights",seasonItem1:"Late autumn · roots and seeds",seasonItem2:"Botanical field notes",seasonItem3:"Next seasonal collection",
    aboutEyebrow:"ABOUT HERBARIUM",aboutTitle:"Curiosity,<br><em>turned into care.</em>",aboutQuote:"Careful observation is the best place to begin.",aboutText1:"Herbarium is an independent botanical project dedicated to pharmacognosy and the practical study of plants. Traditional botanical knowledge meets a contemporary interest in the composition, quality and use of plant materials.",aboutText2:"The project is growing gradually, with attention to documentation, transparency and responsible presentation of every product.",signature:"Founder · Herbarium",getInTouch:"Get in touch ↗",
    value1:"Botanical origins",value1s:"Care for raw materials",value2:"Documented approach",value2s:"Clear product information",value3:"Small batches",value3s:"Attention to detail",
    contactEyebrow:"LET'S START A CONVERSATION",contactTitle:"Have a question?<br><em>Write to me.</em>",contactText:"For product enquiries, collaborations or simply a conversation about plants, I would be happy to hear from you.",formName:"Your name",formEmail:"Email address",formMessage:"Message",sendMessage:"Send a message",formHint:"This form opens your email app. Automatic sending requires an email service or backend.",footerNote:"The botanical world, studied with care.",footerLegal:"Website information is not a substitute for medical advice.",backTop:"BACK TO TOP ↑",namePlaceholder:"Name"
  }
};
let currentLang = "bg";
let currentFilter = "all";
const $ = (s, root=document) => root.querySelector(s);

function renderProducts(){
  const products = window.HERBARIUM_PRODUCTS || [];
  const filtered = products.filter(p => currentFilter === "all" || p.category === currentFilter);
  $("#productGrid").innerHTML = filtered.length ? filtered.map((p,i) => `
    <article class="product-card">
      <div class="product-visual">
        <span class="product-number">HERBARIUM / ${String(i+1).padStart(2,"0")}</span>
        <span class="product-art" aria-hidden="true">${p.symbol || "✳"}</span>
        <span class="product-tag">${p.tag || "BOTANICAL"}</span>
      </div>
      <div class="product-info">
        <div class="product-meta"><span>${p.type?.[currentLang] || ""}</span><span>${p.seasonal ? (currentLang==="bg"?"СЕЗОНЕН":"SEASONAL") : "HERBARIUM"}</span></div>
        <h3>${p.name?.[currentLang] || p.name?.bg || "Product"}</h3>
        <p>${p.description?.[currentLang] || p.description?.bg || ""}</p>
        <div class="product-bottom"><span>${currentLang==="bg"?"Разгледайте профила":"View product profile"}</span><button type="button" aria-label="${currentLang==="bg"?"Повече информация":"More information"}" onclick="showProductInfo('${p.id}')">↗</button></div>
      </div>
    </article>`).join("") : `<p>${currentLang==="bg"?"Няма продукти в тази категория.":"No products in this category."}</p>`;
}
function showProductInfo(id){
  const p = (window.HERBARIUM_PRODUCTS || []).find(x=>x.id===id);
  if(!p) return;
  const name=p.name?.[currentLang]||p.name?.bg;
  const desc=p.description?.[currentLang]||p.description?.bg;
  const subject=encodeURIComponent((currentLang==="bg"?"Запитване за: ":"Enquiry about: ")+name);
  const body=encodeURIComponent((currentLang==="bg"?"Здравейте,\nБих искал/а повече информация за ":"Hello,\nI would like more information about ")+name+".\n\n");
  window.location.href=`mailto:hello@herbarium.bg?subject=${subject}&body=${body}`;
}
function setLanguage(lang){
  currentLang=lang;document.documentElement.lang=lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.textContent=translations[lang][key]});
  document.querySelectorAll("[data-i18n-html]").forEach(el=>{const key=el.dataset.i18nHtml;if(translations[lang][key])el.innerHTML=translations[lang][key]});
  $("#languageToggle").innerHTML=lang==="bg"?'EN <span>↗</span>':'BG <span>↗</span>';
  document.querySelectorAll(".contact-form label").forEach((label,i)=>{const input=label.querySelector("input,textarea");if(input)input.placeholder=lang==="bg"?["Име","name@example.com","..."][i]:["Name","name@example.com","..."][i]});
  renderProducts();
}
$("#languageToggle").addEventListener("click",()=>setLanguage(currentLang==="bg"?"en":"bg"));
$("#filters").addEventListener("click",e=>{const b=e.target.closest("button[data-filter]");if(!b)return;currentFilter=b.dataset.filter;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));renderProducts()});
$(".menu-toggle").addEventListener("click",()=>{const nav=$(".main-nav");const open=nav.classList.toggle("open");$(".menu-toggle").setAttribute("aria-expanded",String(open))});
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>{$(".main-nav").classList.remove("open");$(".menu-toggle").setAttribute("aria-expanded","false")}));
$("#contactForm").addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget);const subject=encodeURIComponent("Herbarium — "+(currentLang==="bg"?"съобщение от сайта":"website enquiry"));const body=encodeURIComponent(`${d.get("name")}\n${d.get("email")}\n\n${d.get("message")}`);window.location.href=`mailto:hello@herbarium.bg?subject=${subject}&body=${body}`});
$("#year").textContent=new Date().getFullYear();
renderProducts();
