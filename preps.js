/* =====================================================================
   ХЕРБАРИУМ — ПРАВЕНЕ (методики)
   Нова методика: копирайте един блок { … } по-долу, сложете запетая между
                  блоковете и сменете текстовете. Може и със секцията „Добави правене“.
   drug = латинското име на дрогата от herbs.js (връзка към билката);
   need = списък „Необходимо“; steps = стъпки; note = бележка.
   ===================================================================== */
window.HERBARIUM_PREPS = [
    {drug:"Matricariae flos",
        bg:{name:"запарка от лайка",need:["10 г лайка (Matricariae flos), едро натрошена","100 мл вода","водна баня, везна, цедка"],
            steps:["Претеглете дрогата и я сложете в подходящ съд.","Залейте с гореща вода и покрийте.","Загрявайте на водна баня 15 минути, като разбърквате от време на време.","Оставете да се охлади на стайна температура около 45 минути.","Прецедете и допълнете с вода до 100 мл."],
            note:"Съотношение 1:10. Приготвя се прясно и се съхранява на хладно не повече от 48 часа."},
        en:{name:"chamomile infusion",need:["10 g chamomile (Matricariae flos), coarsely crushed","100 mL water","water bath, balance, strainer"],
            steps:["Weigh the drug and place it in a suitable vessel.","Pour over hot water and cover.","Heat in a water bath for 15 minutes, stirring from time to time.","Let it cool at room temperature for about 45 minutes.","Strain and make up to 100 mL with water."],
            note:"Ratio 1:10. Prepare fresh and keep cool for no more than 48 hours."}},
    {drug:"Calendulae flos",
        bg:{name:"маслен мацерат от невен",need:["20 г суха невен (Calendulae flos)","100 мл растително масло (напр. маслиново)","стъклен буркан, цедка или марля, тъмен флакон"],
            steps:["Използвайте напълно суха дрога, иначе маслото може да се развали.","Сложете невена в буркана и го залейте с маслото, докато е напълно покрит.","Затворете и оставете на топло и тъмно за 2–4 седмици, като разклащате всеки ден.","Прецедете през марля и изстискайте добре.","Оставете да се утаи и прелейте в тъмен флакон."],
            note:"Съотношение 1:5. Съхранявайте на хладно и тъмно и етикетирайте с дата."},
        en:{name:"calendula oil macerate",need:["20 g dried calendula (Calendulae flos)","100 mL vegetable oil (e.g. olive oil)","glass jar, strainer or gauze, dark bottle"],
            steps:["Use fully dry material, otherwise the oil may spoil.","Put the calendula in the jar and cover it completely with the oil.","Close and keep in a warm, dark place for 2–4 weeks, shaking daily.","Strain through gauze and squeeze well.","Let it settle and pour into a dark bottle."],
            note:"Ratio 1:5. Store in a cool, dark place and label with the date."}},
    {drug:"Matricariae flos",
        bg:{name:"сушена дрога от лайка",need:["прясно набрани цветни кошнички на лайка (Matricariae flos) в пълен цъфтеж","хартия или сито за разстилане","сенчесто проветриво помещение (не повече от около 35 °C)","картонена кутия или стъклен буркан с капак и етикет"],
            steps:["Берете сутрин, след като росата изсъхне, само цветните кошнички с възможно най-къса дръжка.","Отстранете чуждите примеси, увредените и покафенелите кошнички.","Разстелете ги в тънък слой (1–2 см) върху хартия или сито, на сянка и на проветриво място.","Разбърквайте внимателно 1–2 пъти дневно, за да не се чупят и да не се слепват.","Дрогата е готова, когато кошничките са крехки и се чупят при натиск (обикновено след 5–7 дни).","Съхранявайте в плътно затворен съд на тъмно и сухо място, с етикет за име, дата и място на беритба."],
            note:"Не сушете на пряка слънчева светлина и над около 35 °C, защото етеричното масло се губи."},
        en:{name:"dried chamomile drug",need:["freshly picked chamomile flower heads (Matricariae flos) at full bloom","paper or a screen for spreading","a shaded, ventilated room (no more than about 35 °C)","a cardboard box or glass jar with a lid and a label"],
            steps:["Pick in the morning, after the dew has dried, only the flower heads with the shortest possible stalk.","Remove foreign matter and damaged or browned flower heads.","Spread them in a thin layer (1–2 cm) on paper or a screen, in the shade and in a ventilated place.","Turn gently 1–2 times a day so they do not break or stick together.","The drug is ready when the flower heads are brittle and break under pressure (usually after 5–7 days).","Store in a tightly closed container in a dark, dry place, labelled with name, date and place of collection."],
            note:"Do not dry in direct sunlight or above about 35 °C, because the essential oil is lost."}},
    {drug:"Menthae piperitae folium",
        bg:{name:"растителен прах от мента",need:["10–20 г суха мента (Menthae piperitae folium), само листа","мелничка за билки","сита (напр. с отвори 355 µm)","везна 0,01 г","стъклен буркан със затварящ капак и етикет"],
            steps:["Проверете, че листата са напълно сухи и чупливи. Влажната дрога се слепва в мелницата.","Отстранете стъблата и чуждите примеси.","Претеглете пробата и я смелете на кратки импулси (по 10–15 секунди), за да не се загрее и да не се губи етерично масло.","Пресейте през ситото. Остатъка върху ситото смелете отново.","Претеглете получения прах и остатъка и запишете масите.","Приберете праха в добре затворен буркан на тъмно, с етикет за дата и размер на ситото."],
            note:"Фино смляната дрога губи етеричното си масло по-бързо, затова мелете количество за един-два експеримента и го използвайте скоро."},
        en:{name:"peppermint leaf powder",need:["10–20 g dry peppermint (Menthae piperitae folium), leaves only","herb grinder","sieves (e.g. 355 µm mesh)","balance, 0.01 g","glass jar with a tight lid and a label"],
            steps:["Check that the leaves are completely dry and brittle. Damp drug sticks in the grinder.","Remove stems and foreign matter.","Weigh the sample and grind it in short pulses (10–15 seconds) so it does not heat up and lose essential oil.","Sieve through the mesh. Grind the residue on the sieve again.","Weigh the powder and the residue and record the masses.","Store the powder in a tightly closed jar in the dark, labelled with the date and sieve size."],
            note:"Finely ground drug loses its essential oil faster, so grind enough for one or two experiments and use it soon."}},
    {drug:"Tiliae flos",
        bg:{name:"глицеринов извлек от липа",need:["20 г суха липа (Tiliae flos), леко натрошена","60 мл глицерин и 40 мл вода","стъклен буркан с капак","магнитна бъркалка (по желание)","марля, фуния и филтърна хартия","тъмна бутилка с етикет"],
            steps:["Смесете 60 мл глицерин и 40 мл вода и разбъркайте до еднородност.","Поставете липата в буркана и я залейте със сместа така, че да е напълно покрита.","По желание разбърквайте 10 минути на магнитната бъркалка при ниски обороти, после затворете буркана.","Оставете на стайна температура на тъмно 2 седмици, като разклащате всеки ден.","Прецедете през марля, изстискайте добре и филтрирайте през филтърна хартия.","Прелейте в тъмна бутилка и напишете датата и съотношението дрога : разтворител."],
            note:"Съотношение 1:5. Високото съдържание на глицерин забавя развалянето, но не гарантира стерилност. Съхранявайте на хладно и тъмно."},
        en:{name:"linden glycerin extract",need:["20 g dry linden flowers (Tiliae flos), lightly crushed","60 mL glycerin and 40 mL water","glass jar with a lid","magnetic stirrer (optional)","gauze, funnel and filter paper","dark bottle with a label"],
            steps:["Mix 60 mL glycerin and 40 mL water and stir until uniform.","Put the linden in the jar and cover it with the mixture so it is fully submerged.","Optionally stir for 10 minutes on the magnetic stirrer at low speed, then close the jar.","Leave at room temperature in the dark for 2 weeks, shaking every day.","Strain through gauze, squeeze well and filter through filter paper.","Pour into a dark bottle and write the date and the drug : solvent ratio."],
            note:"Ratio 1:5. The high glycerin content slows spoilage but does not guarantee sterility. Store in a cool, dark place."}}
];
