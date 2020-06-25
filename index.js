// Библиотека для работы с Telegram API
let TelegramBot = require('node-telegram-bot-api');
// Токен Бота
let token = '1248642838:AAE0_XCMCUIQI_RLNXijo3XmJMYJCF4Jd-I';
// Обращение к серверу Telegram, чтобы получа\ить актуальную информацию
let bot = new TelegramBot(token, {
    polling: true
});

// Запускает установочный процесс по временам выбранным пользователем
let mainOptions = {
    "reply_markup": {
        hide_keyboard: false,
        "keyboard": [
            ["Про Державний університет економіки та технологій"],
            ["Спеціальності", "Спитай про вступ"],
            text=["Екскурсія університетом"], url="https://www.kneu.dp.ua/ua/area/institut/institut-dlya-studenta",
            ["Наші контакти"]
        ]
    }
};

let aboutDUET = {
    "reply_markup": {
        hide_keyboard: false,
        "keyboard": [
            ["Загальна інформація ❌"],
            ["Структура Університету ❌"],
            ["Переваги ДУЕТ ❌"],
            ["← На головну"]
        ]
    }
};

let ourContacts = {
    "reply_markup": {
        hide_keyboard: false,
        "keyboard": [
            ["Державний університет економіки та технологій"],
            ["Криворізький коледж НМетАУ"],
            ["Криворізький коледж економіки та управління"],
            ["Криворізький технічний коледж НМетАУ"],
            ["Український політехнічний технікум"],
            ["Криворізький металургійний інститут Національної металургійної академії України"],
            ["← На головну"]
        ]
    }
};

let speciality = {
    "reply_markup": {
        hide_keyboard: false,
        "keyboard": [
            ["Кваліфікований робітник", "Фаховий молодший бакалавр"],
            ["Молодший бакалавр", "Бакалавр"],
            ["Магістр"],
            ["← На головну"]
        ]
    }
};

let littleBachelor = {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    "reply_markup": {
        hide_keyboard: false,
        "keyboard": [
            ["Спеціальності"],
            ["На базі 9 класів"],
            ["На базі 11 класів"],
            ["← На головну"]
        ]
    }
};

let contactDuet = {
    "reply_markup": {
        hide_keyboard: false,
        "keyboard": [
            ["Наші контакти"],
            ["Економічний інститут (КЕІ КНЕУ)", "Технологічний інститут (КМІНметАУ)"],
            ["← На головну"]
        ]
    }
};

let questions = {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    "reply_markup": {
        hide_keyboard: false,
        "keyboard": [
            ["Скільки заяв я можу подати?"],
            ["Чи є обмеження за кількістю балів для вступу?"],
            ["Чи повинен я подати заяву для вступу особисто у ЗВО?"],
            ["Скільки бюджетних місць у вашому інституті?"],
            ["Якщо я маю пільги, як буде відбуватись зарахування на бюджет?"],
            ["Запитати щось інше"],
            ["← На головну"]
        ]
    }
};

let answer1 = "<b>Відповідь:</b>\nНа бюджетну форму навчання – 5 п’ять заяв на будь-які спеціальності та визначити пріоритетність кожної. На контракт – кількість заяв необмежена.",
    answer2 = "<b>Відповідь:</b>\nТак, є для вступу на бюджет пороговий бал становить 125. Для вступу на спеціальність 081 «Право», 281 «Публічне управління та адміністрування», 29 «Міжнародні відносини» пороговий бал 140 для будь-якої форми навчання.",
    answer3 = "<b>Відповідь:</b>\nНі, заява подається тільки в електронному вигляді в особистому електронному кабінеті вступника. Але Ви можете відвідати наш інститут та проконсультуватись, яким чином це зробити.",
    answer4 = "<b>Відповідь:</b>\nБюджетні місця виділяються МОНУ для кожного абітурієнта на підставі конкурсного рейтингу. Від інституту це не залежить.",
    answer5 = "<b>Відповідь:</b>\nЯкщо у Вас є пільги (або Ви вважаєте, що вони є), то Вам обов’язково необхідно з пакетом документів з’явитися до приймальної комісії для їх підтвердження. Існує два варіанти зарахування на бюджет. В першому варіанті абітурієнт зараховується відразу. В другому варіанті здійснюється переведення з контрактної форми навчання на бюджетну. Кожна ситуація є індивідуальною.";

// Specialities messages
let qualifiedWorkerMessage = "<b>Кваліфікований робітник</b>\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>133 Галузеве машинобудування</a></b> - Обслуговування та ремонт обладнання металургійних підприємств.\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>141 Електроенергетика, електротехніка та електромеханіка</a></b> - Монтаж і експлуатація електроустаткування підприємств і цивільних споруд.\n\n<b><a href='https://upt.in.ua/page-5.html'>133 Галузеве машинобудування (Український політехнічний технікум)</a></b> - Технологія обробки матеріалів на верстатах та автоматичних лініях.";
let ninethClassesMessage = "<b>На базі 9 класів</b>\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>136 Металургія (Криворізький коледж НМетАУ)</a></b> - Доменне виробництво .\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>136 Металургія (Криворізький коледж НМетАУ)</a></b> - Виробництво сталі і феросплавів .\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>136 Металургія (Криворізький коледж НМетАУ)</a></b> - Обробка металів тиском.\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>133 Галузеве машинобудування (Криворізький коледж НМетАУ)</a></b> - Обслуговування та ремонт обладнання металургійних підприємств .\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>141 Електроенергетика, електротехніка та електромеханіка (Криворізький коледж НМетАУ) </a></b> - Монтаж і експлуатація електроустаткування підприємств і цивільних споруд .\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>071 Облік і оподаткування (Криворізький фаховий коледж економіки та управління)</a></b> - Бухгалтерський облік .\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>072 Фінанси, банківська справа та страхування (Криворізький фаховий коледж економіки та управління)</a></b> - Фінанси і кредит .\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>076 Підприємництво, торгівля та біржова діяльність (Криворізький фаховий коледж економіки та управління)</a></b> - Товарознавство та комерційна діяльність .\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>181 Харчові технології (Криворізький фаховий коледж економіки та управління)</a></b> - Виробництво харчової продукції .\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>029 Інформаційна, бібліотечна та архівна справа (Криворізький коледж економіки та управління)</a></b> - Діловодство.\n\n<b><a href='https://upt.in.ua/page-9.html'>051 Економіка (Український політехнічний технікум)</a></b> - Економіка підприємства.\n\n<b><a href='https://upt.in.ua/page-4.html'>184 Гірництво (Український політехнічний технікум)</a></b> - Експлуатація та ремонт гірничого електромеханічного обладнання та автоматичних пристроїв.\n\n<b><a href='https://upt.in.ua/page-6.html'>133 Галузеве машинобудування (Український політехнічний технікум)</a></b> - Обслуговування та ремонт обладнання металургійних підприємств .\n\n<b><a href='https://upt.in.ua/page-8.html'>141 Електроенергетика, електротехніка та електромеханіка (Український політехнічний технікум)</a></b> - Монтаж і експлуатація електроустаткування підприємств і цивільних споруд.\n\n<b><a href='https://kkht.dp.ua/галузь-знань-16-хімічна-та-біоінженер/'>161 Хімічні технології та інженерія (Криворізький технічний коледж НМетАУ)</a></b> - Хімічні технології та інженерія.\n\n<b><a href='https://kkht.dp.ua/галузь-знань-15-автоматизація-та-прил/'>151 Автоматизація та комп’ютерно – інтегровані технології (Криворізький технічний коледж НМетАУ)</a></b> - Монтаж, обслуговування засобів і систем автоматизації технологічного виробництва.\n\n<b><a href='https://kkht.dp.ua/галузь-знань-14-електро-інженерія/'>144 Теплоенергетика (Криворізький технічний коледж НМетАУ)</a></b> - Експлуатація теплотехнічного тепло технологічного устаткування і систем теплопостачання.\n\n<b><a href='https://kkht.dp.ua/галузь-знань-13-механічна-інженерія/'>133 Галузеве машинобудування  (Криворізький технічний коледж НМетАУ)</a></b> - Обслуговування та ремонт обладнання металургійного підприємства.\n\n<b><a href='https://kkht.dp.ua/галузь-знань-07-управління-та-адміні/'>076 Підприємство, торгівля та біржова діяльність (Криворізький технічний коледж НМетАУ)</a></b> - Інформаційна діяльність підприємства.\n\n";
let eleventhClassesMessage = "<b>На базі 11 класів</b>\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>015 Професійна освіта (Криворізький коледж НМетАУ)</a></b> - Енергетика, електротехніка та електромеханіка .\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>136 Металургія (Криворізький коледж НМетАУ)</a></b> - Виробництво сталі та феросплавів. .\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>136 Металургія (Криворізький коледж НМетАУ)</a></b> - Обробка металів тиском.\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>029 Інформаційна, бібліотечна та архівна справа (Криворізький фаховий коледж економіки та управління)</a></b> - Діловодство.\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>071 Облік і оподаткування (Криворізький фаховий коледж економіки та управління)</a></b> - Бухгалтерський облік .\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>072 Фінанси, банківська справа та страхування (Криворізький фаховий коледж економіки та управління)</a></b> - Фінанси і кредит .\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>076 Підприємництво, торгівля та біржова діяльність (Криворізький коледж економіки та управління)</a></b> - Товарознавство та комерційна діяльність .\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>181 Харчові технології (Криворізький коледж економіки та управління)</a></b> - Виробництво харчової продукції .\n\n<b><a href='https://upt.in.ua/page-9.html'>051 Економіка (Український політехнічний технікум)</a></b> - Економіка підприємства.\n\n<b><a href='https://upt.in.ua/page-4.html'>184 Гірництво (Український політехнічний технікум)</a></b> - Експлуатація та ремонт гірничого електромеханічного обладнання та автоматичних пристроїв.\n\n<b><a href='https://upt.in.ua/page-8.html'>141 Електроенергетика, електротехніка та електромеханіка (Український політехнічний технікум)</a></b> - Монтаж і експлуатація електроустаткування підприємств і цивільних споруд.\n\n<b><a href='https://kkht.dp.ua/галузь-знань-16-хімічна-та-біоінженер/'>161 Хімічні технологіі та інженерія (Криворізький технічний коледж НМетАУ)</a></b> - Хімічні технології та інженерія.\n\n<b><a href='https://kkht.dp.ua/галузь-знань-15-автоматизація-та-прил/'>151 Автоматизація та комп’ютерно – інтегровані технології (Криворізький технічний коледж НМетАУ)</a></b> - Монтаж, обслуговування засобів і систем автоматизації технологічного виробництва.";
let littleBachelorMessage = "<b>Молодший бакалавр</b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/psihologiya'>053 Психологія</a></b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/oblik-ta-opodatkuvannya'>071 Облік і оподаткування</a></b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/finansi-bankivska-sprava-ta-strahuvannya'>072 Фінанси, банківська справа та страхування</a></b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/pravo'>081 Право</a></b>";
let bachelorMessage = "<b>Бакалавр</b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/ekonomika'>051 Економіка</a></b> - Економіка бізнесу.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/oblik-ta-opodatkuvannya'>071 Облік і оподаткування</a></b> - Облік і оподаткування.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/finansi-bankivska-sprava-ta-strahuvannya'>072 Фінанси, банківська справа та страхування</a></b> - Цифрові фінанси; Фінанси, банківська справа та страхування;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/menedzhment'>073 Менеджмент</a></b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/marketing'>075 Маркетинг</a></b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/pidpriyemnictvo-torgivlya-ta-birzheva-diyalnist'>076 Підприємництво, торгівля та біржова діяльність</a></b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/pravo'>081 Право</a></b> - Класичне «Право»; Правознавство у сфері громадської і політичної діяльності;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/inzheneriya-programnogo-zabezpechennya'>121 Інженерія програмного забезпечення</a></b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/komp-yuterni-nauki'>122 Комп’ютерні науки</a></b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/publichne-upravlinnya-ta-administruvannya'>281 Публічне управління та адміністрування</a></b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/mizhnarodni-vidnosini-suspilni-komunikaciji-ta-regionalni-studiji'>291 Міжнародні відносини, суспільні комунікації та регіональні студії</a></b> - Міжнародна інформація та журналістика.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/mizhnarodni-eknomichni-vidnosini'>292 Міжнародні економічні відносини</a></b> - Міжнародний бізнес.\n\n<b><a href='https://kmi.dp.ua/index.php/galuzeve-mashinobuduvannja/'>133 Галузеве машинобудування</a></b> - Галузеве машинобудування.\n\n<b><a href='https://kmi.dp.ua/index.php/metalurgija/'>136 Металургія</a></b> - Металургія.\n\n<b><a href='https://kmi.dp.ua/index.php/elektroenergetika-elektrotehnika-ta-elektromehanika/'>141 Електроенергетика, електротехніка та електромеханіка</a></b> - Електроенергетика, електротехніка та електромеханіка.\n\n<b><a href='https://kmi.dp.ua/index.php/avtomatizacija-ta-komp-jutrno-integrovani-tehnologii/'>151 Автоматизація та комп’ютерно-інтегровані технології</a></b> - Автоматизація та комп’ютерно-інтегровані технології.\n\n<b><a href='https://kmi.dp.ua/index.php/himichni-tehnologii-ta-inzhenerija/'>161 Хімічні технології та інженерія</a></b> - Хімічні технології та інженерія.\n\n";
let magistr = "<b>Магістр</b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/ekonomika'>051 Економіка</a></b> - Економічна аналітика; Бізнес-економіка;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/oblik-ta-opodatkuvannya'>071 Облік і оподаткування</a></b> - Облік і аудит в управлінні підприємницькою діяльністю; Оподаткування підприємницької діяльності;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/finansi-bankivska-sprava-ta-strahuvannya'>072 Фінанси, банківська справа та страхування</a></b> - Управління корпоративними фінансами; Управління банківською діяльністю;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/menedzhment'>073 Менеджмент</a></b> - Управління підприємницькою діяльністю; Управління підприємством сфери послуг;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/marketing'>075 Маркетинг</a></b> - Маркетинговий менеджмент; Логістичний менеджмент;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/pidpriyemnictvo-torgivlya-ta-birzheva-diyalnist'>076 Підприємництво, торгівля та біржова діяльність</a></b> - Управління бізнес-проектами; Підприємництво;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/pravo'>081 Право</a></b> - Правове регулювання економіки; Господарське судочинство; Право у сфері громадської і політичної діяльності;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/inzheneriya-programnogo-zabezpechennya'>121 Інженерія програмного забезпечення</a></b> - Прикладне програмне забезпечення; Інформаційний менеджмент;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/publichne-upravlinnya-ta-administruvannya'>281 Публічне управління та адміністрування</a></b> - Управління на регіональному та місцевому рівні; Управління персоналом в публічній сфері;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/mizhnarodni-eknomichni-vidnosini'>292 Міжнародні економічні відносини</a></b> - Управління міжнародним бізнесом; Міжнародні торговельні відносини;.\n\n<b><a href='https://kmi.dp.ua/index.php/galuzeve-mashinobuduvannja/'>133 Галузеве машинобудування</a></b> - Галузеве машинобудування.\n\n<b><a href='https://kmi.dp.ua/index.php/metalurgija/'>136 Металургія</a></b> - Металургія.\n\n<b><a href='https://kmi.dp.ua/index.php/elektroenergetika-elektrotehnika-ta-elektromehanika/'>141 Електроенергетика, електротехніка та електромеханіка</a></b> - Електроенергетика, електротехніка та електромеханіка.\n\n<b><a href='https://kmi.dp.ua/index.php/avtomatizacija-ta-komp-jutrno-integrovani-tehnologii/'>151 Автоматизація та комп’ютерно-інтегровані технології</a></b> - Автоматизація та комп’ютерно-інтегровані технології.\n\n<b><a href='https://kmi.dp.ua/index.php/himichni-tehnologii-ta-inzhenerija/'>161 Хімічні технології та інженерія</a></b> - Хімічні технології та інженерія.\n\n";

// Contact universities
let duetContactMessage = "<b>Державний університет економіки та технологій: Економічний інститут (КЕІ КНЕУ)</b>\n\n<b>Адреса:</b> вул. Медична, 16, м. Кривий Ріг \n<b>Тел:</b> <a href='tel:0982073648'>(098)-207-36-48</a>\n<b>E-mail:</b> <a href='mailto:'>keipk@kneu.edu.ua</a>\n<b>Сайт:</b> <a href='https://www.kneu.dp.ua'>https://www.kneu.dp.ua</a>\n<a href='https://www.facebook.com/kei.kneu1/'>https://www.facebook.com/kei.kneu1/</a>\n<a href='https://www.instagram.com/kei.kneu/'>https://www.instagram.com/kei.kneu/</a>";
let duetContactMessage2 = "<b>Державний університет економіки та технологій: Технологічний інститут (КМІНметАУ)</b>\n\n<b>Адреса:</b> вул. Степана Тільги , 5, м. Кривий Ріг\n<b>Тел:</b> <a href='tel:0675959045'>(067)-595-90-45</a>\n<b>E-mail:</b> <a href='mailto:kminmetau@gmail.com'>kminmetau@gmail.com</a>\n<b>Сайт:</b> <a href='https://kmi.dp.ua'>kmi.dp.ua</a>\n<a href='https://www.facebook.com/%D0%9A%D1%80%D0%B8%D0%B2%D0%BE%D1%80%D1%96%D0%B7%D1%8C%D0%BA%D0%B8%D0%B9-%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D1%83%D1%80%D0%B3%D1%96%D0%B9%D0%BD%D0%B8%D0%B9-%D1%96%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82-%D0%9D%D0%B0%D1%86%D1%96%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97-%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D1%83%D1%80%D0%B3%D1%96%D0%B9%D0%BD%D0%BE%D1%97-%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D1%96%D1%97-1685125868449167/'>https://www.facebook.com/kmi</a>\n<a href='https://www.instagram.com/kminmetau'>https://www.instagram.com/kminmetau</a>";
let kmtInUaContactMessage = "<b>Криворізький коледж НМетАУ</b>\n\n<b>Адреса:</b> вул. Медична, 4, м. Кривий Ріг\n<b>Тел:</b> <a href='tel:0687809170'>(068)-780-91-70</a>\n<b>E-mail:</b> <a href='mailto:kknmetau18@gmail.com'>keipk@kneu.edu.ua</a>\n<b>Сайт:</b> <a href='https://kmt.in.ua'>https://kmt.in.ua</a>";
let kkeuContactMessage = "<b>Криворізький коледж економіки та управління</b>\n\n<b>Адреса:</b> вул. Ватутіна, 37а, м. Кривий Ріг\n<b>Тел:</b> <a href='tel:0564947443'>(0564)94-74-43</a>, <a href='tel:0672620679'>(067)-262-06-79</a>\n<b>E-mail:</b> <a href='mailto:kkeu.metodkab@gmail.com'>kkeu.metodkab@gmail.com</a>\n<b>Сайт:</b> <a href='https://www.kkeu.dp.ua/'>https://www.kkeu.dp.ua/</a>\n<a href='https://www.facebook.com/kkey.kney/'>https://www.facebook.com/kkey.kney/</a>";
let ktknmetauContactMessage = "<b>Криворізький технічний коледж НМетАУ</b>\n\n<b>Адреса:</b> вул. Степана Тільги, 40, м. Кривий Ріг\n<b>Тел:</b> <a href='tel:0677012597'>(067)701-25-97</a>, <a href='tel:0564947637'>(0564) 94-76-37</a>\n<b>E-mail:</b> <a href='mailto:ktknmetau@ukr.net'>ktknmetau@ukr.net</a>\n<b>Сайт:</b> <a href='https://kkht.dp.ua'>https://kkht.dp.ua</a>\n<a href='https://www.facebook.com/groups/921175404604094'>https://www.facebook.com/groups/921175404604094</a>\n<a href='https://www.instagram.com/ktk_nmetay_official/'>https://www.instagram.com/ktk_nmetay_official/</a>";
let uptContactMessage = "<b>Український політехнічний технікум</b>\n\n<b>Адреса:</b> прос. Поштовий, 66, м. Кривий Ріг\n<b>Тел:</b> <a href='tel:0969523391'>(096)-952-33-91</a>\n<b>E-mail:</b> <a href='mailto:ukrpolitech@i.ua'>ukrpolitech@i.ua</a>\n<b>Сайт:</b> <a href='https://upt.in.ua/'>https://upt.in.ua/</a>\n<a href='https://www.facebook.com/ukrpolitech'>https://www.facebook.com/ukrpolitech</a>\n<a href='https://www.instagram.com/ukr_poli_tex/'>https://www.instagram.com/ukr_poli_tex/</a>";
let kminmetauContactMessage = "<b>Криворізький металургійний інститут Національної металургійної академії України</b>\n\n<b>Адреса:</b> вул. Степана Тільги , 5, м. Кривий Ріг\n<b>Тел:</b> <a href='tel:0675959045'>(067)-595-90-45</a>\n<b>E-mail:</b> <a href='mailto:kminmetau@gmail.com'>kminmetau@gmail.com</a>\n<b>Сайт:</b> <a href='https://kmi.dp.ua'>kmi.dp.ua</a>\n<a href='https://www.facebook.com/%D0%9A%D1%80%D0%B8%D0%B2%D0%BE%D1%80%D1%96%D0%B7%D1%8C%D0%BA%D0%B8%D0%B9-%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D1%83%D1%80%D0%B3%D1%96%D0%B9%D0%BD%D0%B8%D0%B9-%D1%96%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82-%D0%9D%D0%B0%D1%86%D1%96%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97-%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D1%83%D1%80%D0%B3%D1%96%D0%B9%D0%BD%D0%BE%D1%97-%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D1%96%D1%97-1685125868449167/'>https://www.facebook.com/kmi</a>\n<a href='https://www.instagram.com/kminmetau'>https://www.instagram.com/kminmetau</a>";
// Questions
let questionsAndAnswers = "<b>П.: Скільки заяв я можу подати?</b>\n<b>В.:</b> <i>На бюджетну форму навчання – 5 п’ять заяв на будь-які спеціальності та визначити пріоритетність кожної. На контракт – кількість заяв необмежена.</i>\n\n<b>П.: Чи є обмеження за кількістю балів для вступу?</b>\n<b>В.:</b> <i>Так, є для вступу на бюджет пороговий бал становить 125. Для вступу на спеціальність 081 «Право», 281 «Публічне управління та адміністрування», 29 «Міжнародні відносини» пороговий бал 140 для будь-якої форми навчання.</i>\n\n<b>П.: Якщо мої сертифікати ЗНО не цьогорічні, чи маю я можливість вступити до  ЗВО?</b>\n<b>В.:</b> <i>Так, маєте. Приймаються сертифікати ЗНО 4-х років: 2017-го (крім іноземних мов), 2018-го, 2019-го та 2020-го з усіх предметів. Ви можете подати сертифікати в будь-якій комбінації з найвищими балами (можна подати в одному пакеті один сертифікат 2017 року, один 2018-го та 2019 років, або ж усі одного року).</i>\n\n<b>П.: Якщо у мене лише 2 сертифікати ЗНО, чи маю я можливість навчатись у ЗВО?</b>\n<b>В.:</b> <i>Так, Ви маєте можливість подати заяву на здобуття освітнього ступеня молодшого бакалавра як на ступінь вищої освіти. Тут не діє обмеження щодо 125 балів.</i>\n\n<b>П.: Якщо у мене лише 2 сертифікати ЗНО більше 125 балів, чи маю я можливість навчатись на бюджеті?</b>\n<b>В.:</b> <i>Так, Ви маєте можливість подати заяву на здобуття освітнього ступеня молодшого бакалавра як на ступінь вищої освіти.</i>\n\n<b>П.: Чи повинен я подати заяву для вступу особисто у ЗВО?</b>\n<b>В.:</b> <i>Ні, заява подається тільки в електронному вигляді в особистому електронному кабінеті вступника. Але Ви можете відвідати наш інститут та проконсультуватись, яким чином це зробити.</i>\n\n<b>П.: Якщо після оголошення рейтингу я за своїм конкурсним балом не потрапляю на бюджет, чи може з’явитись вакантне місце, якщо хтось відмовиться від нього?</b>\n<b>В.:</b> <i>Ні, інформація про невикористані бюджетні вакансії надходить до Міністерства освіти та науки, яке розподіляє такі місця серед пільгових категорій.</i>\n\n<b>П.: Скільки бюджетних місць у вашому інституті?</b>\n<b>В.:</b> <i>Бюджетні місця виділяються МОНУ для кожного абітурієнта на підставі конкурсного рейтингу. Від інституту це не залежить</i>\n\n<b>П.: Якщо за своїм рейтингом та конкурсним балом я потрапив на навчання до вашого інституту на бюджет, чи можу я перейти на бюджет а цією спеціальністю до іншого ЗВО?</b>\n<b>В.:</b> <i>Ні, якщо ви відмовляєтесь від бюджету за обраною спеціальністю та пріоритетом та обираєте інший ЗВО або іншу спеціальність, бюджетне місце не зберігається за вами.</i>\n\n<b>П.: Якщо я маю пільги, як буде відбуватись зарахування на бюджет.</b>\n<b>В.:</b> <i>Якщо у Вас є пільги (або Ви вважаєте, що вони є), то Вам обов’язково необхідно з пакетом документів з’явитися до приймальної комісії для їх підтвердження. Існує два варіанти зарахування на бюджет. В першому варіанті абітурієнт зараховується відразу. В другому варіанті здійснюється переведення з контрактної форми навчання на бюджетну. Кожна ситуація є індивідуальною.</i>\n\n<b>П.: Якщо я подав заяву на бюджет та встановив її пріоритет, чи може я потім змінити спеціальність або ЗВО?</b>\n<b>В.:</b> <i>Ні, така заява анулюється і ви повинні подавати іншу заяву з числа тих п’яти, на які маєте право. Скасовані заяви не приймають участь у конкурсі.</i>\n\n<b>П.: Якщо я бажаю вступити на навчання ОС «Бакалавр» після технікуму або коледжу, чи потрібно мені здавати ЗНО?</b>\n<b>В.:</b> <i>Так, для вступу на бакалаврат на основі молодшого спеціаліста потрібно буде обов'язково подавати сертифікат ЗНО з української мови та літератури. А для навчання за спеціальністю 051 «Економіка» та спеціальностями галузей знань 07 «Управління та адміністрування» та 281 «Публічне управління та адміністрування» додатково потрібно буде подавати сертифікат ЗНО з математики (математики або історії України для вступу на контракт).</i>\n\n<b>Не знайшли відповіді на запитання? Оберіть пукт 'Запитати щось інше' в меню</b>";

bot.on('message', function (msg) {
    if (msg.text === '/start') {
        bot.sendMessage(msg.chat.id, "Вас вітає бот-помічник ДУЕТ!", mainOptions);
    } else if (msg.text === "← На головну") {
        bot.sendMessage(msg.chat.id, "Ви повернулись на головну сторінку!", mainOptions);
    } else if (msg.text === "Про Державний університет економіки та технологій") {
        bot.sendMessage(msg.chat.id, "Якась історія про університет чи що ви там захочете...", aboutDUET);
    } else if (msg.text === "Спеціальності") {
        bot.sendMessage(msg.chat.id, "Оберіть спеціальність", speciality);
    } else if (msg.text === "Кваліфікований робітник") {
        bot.sendMessage(msg.chat.id, qualifiedWorkerMessage, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    } else if (msg.text === "Фаховий молодший бакалавр") {
        bot.sendMessage(msg.chat.id, "На базі 9 чи 11 класів?", littleBachelor);
    } else if (msg.text === "На базі 9 класів") {
        bot.sendMessage(msg.chat.id, ninethClassesMessage, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    } else if (msg.text === "На базі 11 класів") {
        bot.sendMessage(msg.chat.id, eleventhClassesMessage, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    } else if (msg.text === "Молодший бакалавр") {
        bot.sendMessage(msg.chat.id, littleBachelorMessage, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    } else if (msg.text === "Бакалавр") {
        bot.sendMessage(msg.chat.id, bachelorMessage, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    } else if (msg.text === "Магістр") {
        bot.sendMessage(msg.chat.id, magistr, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    } else if (msg.text === "Наші контакти") {
        bot.sendMessage(msg.chat.id, "Наші контакти в меню", ourContacts);
    } else if (msg.text === "Державний університет економіки та технологій") {
        bot.sendMessage(msg.chat.id, "Оберіть в меню", contactDuet);
    } else if (msg.text === "Економічний інститут (КЕІ КНЕУ)") {
        bot.sendMessage(msg.chat.id, duetContactMessage, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    } else if (msg.text === "Технологічний інститут (КМІНметАУ)") {
        bot.sendMessage(msg.chat.id, duetContactMessage2, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    } else if (msg.text === "Криворізький коледж НМетАУ") {
        bot.sendMessage(msg.chat.id, kmtInUaContactMessage, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    } else if (msg.text === "Криворізький коледж економіки та управління") {
        bot.sendMessage(msg.chat.id, kkeuContactMessage, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    } else if (msg.text === "Криворізький технічний коледж НМетАУ") {
        bot.sendMessage(msg.chat.id, ktknmetauContactMessage, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    } else if (msg.text === "Український політехнічний технікум") {
        bot.sendMessage(msg.chat.id, uptContactMessage, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    } else if (msg.text === "Криворізький металургійний інститут Національної металургійної академії України") {
        bot.sendMessage(msg.chat.id, kminmetauContactMessage, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    } else if (msg.text === "Спитай про вступ") {
        bot.sendMessage(msg.chat.id, "Оберіть запитання в меню", questions);
    } else if (msg.text === "Скільки заяв я можу подати?") {
        bot.sendMessage(msg.chat.id, answer1, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    } else if (msg.text === "Чи є обмеження за кількістю балів для вступу?") {
        bot.sendMessage(msg.chat.id, answer2, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    } else if (msg.text === "Чи повинен я подати заяву для вступу особисто у ЗВО?") {
        bot.sendMessage(msg.chat.id, answer3, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    } else if (msg.text === "Скільки бюджетних місць у вашому інституті?") {
        bot.sendMessage(msg.chat.id, answer4, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    } else if (msg.text === "Якщо я маю пільги, як буде відбуватись зарахування на бюджет?") {
        bot.sendMessage(msg.chat.id, answer5, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    } else if (msg.text === "Запитати щось інше") {
        bot.sendMessage(msg.chat.id, "<b>Надішліть ваше запитання на вказаний аккаунт:</b> @MrGregorK.\n\n<b><u>Приклад</u></b>\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum molestias dicta fuga aliquam amet vero? Sint repellendus sapiente perferendis ducimus ab voluptas dolor nulla, asperiores optio quibusdam, placeat doloremque incidunt.\n\n<i>З повагою адміністрація ДУЕТ.</i>", questions);
    }

});