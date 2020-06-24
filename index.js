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
            ["Спеціальності", "Спитай про вступ ❌"],
            ["Екскурсія університетом ❌", "Наші контакти"]
        ]
    }
};

let aboutDUET = {
    "reply_markup": {
        hide_keyboard: false,
        "keyboard": [
            ["Загальна інформація"],
            ["Структура Університету"],
            ["Переваги ДУЕТ"],
            ["← На головну"]
        ]
    }
};

let ourContacts = {
    "reply_markup": {
        hide_keyboard: false,
        "keyboard": [
            ["Державний університет економіки та технологій", "Криворізький металургійний інститут Національної металургійної академії України"],
            ["Криворізький коледж НМетАУ", "Криворізький коледж економіки та управління"],
            ["Криворізький технічний коледж НМетАУ", "Український політехнічний технікум"],
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
            ["Економічний інститут (КЕІ КНЕУ)", "Технологічний інститут (КМІНметАУ)"],
            ["Наші контакти"],
            ["← На головну"]
        ]
    }
};

// Specialities messages
let qualifiedWorkerMessage = "<b>Кваліфікований робітник</b>\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>133 Галузеве машинобудування</a></b> - Обслуговування та ремонт обладнання металургійних підприємств.\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>141 Електроенергетика, електротехніка та електромеханіка</a></b> - Монтаж і експлуатація електроустаткування підприємств і цивільних споруд.\n\n<b><a href='https://upt.in.ua/page-5.html'>133 Галузеве машинобудування (Український політехнічний технікум)</a></b> - Технологія обробки матеріалів на верстатах та автоматичних лініях.";
let ninethClassesMessage = "<b>На базі 9 класів</b>\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>136 Металургія (Криворізький коледж НМетАУ)</a></b> - Доменне виробництво .\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>136 Металургія (Криворізький коледж НМетАУ)</a></b> - Виробництво сталі і феросплавів .\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>136 Металургія (Криворізький коледж НМетАУ)</a></b> - Обробка металів тиском.\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>133 Галузеве машинобудування (Криворізький коледж НМетАУ)</a></b> - Обслуговування та ремонт обладнання металургійних підприємств .\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>141 Електроенергетика, електротехніка та електромеханіка (Криворізький коледж НМетАУ) </a></b> - Монтаж і експлуатація електроустаткування підприємств і цивільних споруд .\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>071 Облік і оподаткування (Криворізький фаховий коледж економіки та управління)</a></b> - Бухгалтерський облік .\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>072 Фінанси, банківська справа та страхування (Криворізький фаховий коледж економіки та управління)</a></b> - Фінанси і кредит .\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>076 Підприємництво, торгівля та біржова діяльність (Криворізький фаховий коледж економіки та управління)</a></b> - Товарознавство та комерційна діяльність .\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>181 Харчові технології (Криворізький фаховий коледж економіки та управління)</a></b> - Виробництво харчової продукції .\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>029 Інформаційна, бібліотечна та архівна справа (Криворізький коледж економіки та управління)</a></b> - Діловодство.\n\n<b><a href='https://upt.in.ua/page-9.html'>051 Економіка (Український політехнічний технікум)</a></b> - Економіка підприємства.\n\n<b><a href='https://upt.in.ua/page-4.html'>184 Гірництво (Український політехнічний технікум)</a></b> - Експлуатація та ремонт гірничого електромеханічного обладнання та автоматичних пристроїв.\n\n<b><a href='https://upt.in.ua/page-6.html'>133 Галузеве машинобудування (Український політехнічний технікум)</a></b> - Обслуговування та ремонт обладнання металургійних підприємств .\n\n<b><a href='https://upt.in.ua/page-8.html'>141 Електроенергетика, електротехніка та електромеханіка (Український політехнічний технікум)</a></b> - Монтаж і експлуатація електроустаткування підприємств і цивільних споруд.\n\n<b><a href='https://kkht.dp.ua/галузь-знань-16-хімічна-та-біоінженер/'>161 Хімічні технології та інженерія (Криворізький технічний коледж НМетАУ)</a></b> - Хімічні технології та інженерія.\n\n<b><a href='https://kkht.dp.ua/галузь-знань-15-автоматизація-та-прил/'>151 Автоматизація та комп’ютерно – інтегровані технології (Криворізький технічний коледж НМетАУ)</a></b> - Монтаж, обслуговування засобів і систем автоматизації технологічного виробництва.\n\n<b><a href='https://kkht.dp.ua/галузь-знань-14-електро-інженерія/'>144 Теплоенергетика (Криворізький технічний коледж НМетАУ)</a></b> - Експлуатація теплотехнічного тепло технологічного устаткування і систем теплопостачання.\n\n<b><a href='https://kkht.dp.ua/галузь-знань-13-механічна-інженерія/'>133 Галузеве машинобудування  (Криворізький технічний коледж НМетАУ)</a></b> - Обслуговування та ремонт обладнання металургійного підприємства.\n\n<b><a href='https://kkht.dp.ua/галузь-знань-07-управління-та-адміні/'>076 Підприємство, торгівля та біржова діяльність (Криворізький технічний коледж НМетАУ)</a></b> - Інформаційна діяльність підприємства.\n\n";
let eleventhClassesMessage = "<b>На базі 11 класів</b>\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>015 Професійна освіта (Криворізький коледж НМетАУ)</a></b> - Енергетика, електротехніка та електромеханіка .\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>136 Металургія (Криворізький коледж НМетАУ)</a></b> - Виробництво сталі та феросплавів. .\n\n<b><a href='https://kmt.in.ua/abiturientu/spetsialnosti.html'>136 Металургія (Криворізький коледж НМетАУ)</a></b> - Обробка металів тиском.\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>029 Інформаційна, бібліотечна та архівна справа (Криворізький фаховий коледж економіки та управління)</a></b> - Діловодство.\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>071 Облік і оподаткування (Криворізький фаховий коледж економіки та управління)</a></b> - Бухгалтерський облік .\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>072 Фінанси, банківська справа та страхування (Криворізький фаховий коледж економіки та управління)</a></b> - Фінанси і кредит .\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>076 Підприємництво, торгівля та біржова діяльність (Криворізький коледж економіки та управління)</a></b> - Товарознавство та комерційна діяльність .\n\n<b><a href='https://kkeu.dp.ua/index.php?option=com_content&view=article&id=63&Itemid=57'>181 Харчові технології (Криворізький коледж економіки та управління)</a></b> - Виробництво харчової продукції .\n\n<b><a href='https://upt.in.ua/page-9.html'>051 Економіка (Український політехнічний технікум)</a></b> - Економіка підприємства.\n\n<b><a href='https://upt.in.ua/page-4.html'>184 Гірництво (Український політехнічний технікум)</a></b> - Експлуатація та ремонт гірничого електромеханічного обладнання та автоматичних пристроїв.\n\n<b><a href='https://upt.in.ua/page-8.html'>141 Електроенергетика, електротехніка та електромеханіка (Український політехнічний технікум)</a></b> - Монтаж і експлуатація електроустаткування підприємств і цивільних споруд.\n\n<b><a href='https://kkht.dp.ua/галузь-знань-16-хімічна-та-біоінженер/'>161 Хімічні технологіі та інженерія (Криворізький технічний коледж НМетАУ)</a></b> - Хімічні технології та інженерія.\n\n<b><a href='https://kkht.dp.ua/галузь-знань-15-автоматизація-та-прил/'>151 Автоматизація та комп’ютерно – інтегровані технології (Криворізький технічний коледж НМетАУ)</a></b> - Монтаж, обслуговування засобів і систем автоматизації технологічного виробництва.";
let littleBachelorMessage = "<b>Молодший бакалавр</b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/psihologiya'>053 Психологія</a></b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/oblik-ta-opodatkuvannya'>071 Облік і оподаткування</a></b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/finansi-bankivska-sprava-ta-strahuvannya'>072 Фінанси, банківська справа та страхування</a></b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/pravo'>081 Право</a></b>";
let bachelorMessage = "<b>Бакалавр</b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/ekonomika'>051 Економіка</a></b> - Економіка бізнесу.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/oblik-ta-opodatkuvannya'>071 Облік і оподаткування</a></b> - Облік і оподаткування.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/finansi-bankivska-sprava-ta-strahuvannya'>072 Фінанси, банківська справа та страхування</a></b> - Цифрові фінанси; Фінанси, банківська справа та страхування;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/menedzhment'>073 Менеджмент</a></b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/marketing'>075 Маркетинг</a></b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/pidpriyemnictvo-torgivlya-ta-birzheva-diyalnist'>076 Підприємництво, торгівля та біржова діяльність</a></b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/pravo'>081 Право</a></b> - Класичне «Право»; Правознавство у сфері громадської і політичної діяльності;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/inzheneriya-programnogo-zabezpechennya'>121 Інженерія програмного забезпечення</a></b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/komp-yuterni-nauki'>122 Комп’ютерні науки</a></b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/publichne-upravlinnya-ta-administruvannya'>281 Публічне управління та адміністрування</a></b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/mizhnarodni-vidnosini-suspilni-komunikaciji-ta-regionalni-studiji'>291 Міжнародні відносини, суспільні комунікації та регіональні студії</a></b> - Міжнародна інформація та журналістика.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/mizhnarodni-eknomichni-vidnosini'>292 Міжнародні економічні відносини</a></b> - Міжнародний бізнес.\n\n<b><a href='https://kmi.dp.ua/index.php/galuzeve-mashinobuduvannja/'>133 Галузеве машинобудування</a></b> - Галузеве машинобудування.\n\n<b><a href='https://kmi.dp.ua/index.php/metalurgija/'>136 Металургія</a></b> - Металургія.\n\n<b><a href='https://kmi.dp.ua/index.php/elektroenergetika-elektrotehnika-ta-elektromehanika/'>141 Електроенергетика, електротехніка та електромеханіка</a></b> - Електроенергетика, електротехніка та електромеханіка.\n\n<b><a href='https://kmi.dp.ua/index.php/avtomatizacija-ta-komp-jutrno-integrovani-tehnologii/'>151 Автоматизація та комп’ютерно-інтегровані технології</a></b> - Автоматизація та комп’ютерно-інтегровані технології.\n\n<b><a href='https://kmi.dp.ua/index.php/himichni-tehnologii-ta-inzhenerija/'>161 Хімічні технології та інженерія</a></b> - Хімічні технології та інженерія.\n\n";
let magistr = "<b>Магістр</b>\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/ekonomika'>051 Економіка</a></b> - Економічна аналітика; Бізнес-економіка;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/oblik-ta-opodatkuvannya'>071 Облік і оподаткування</a></b> - Облік і аудит в управлінні підприємницькою діяльністю; Оподаткування підприємницької діяльності;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/finansi-bankivska-sprava-ta-strahuvannya'>072 Фінанси, банківська справа та страхування</a></b> - Управління корпоративними фінансами; Управління банківською діяльністю;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/menedzhment'>073 Менеджмент</a></b> - Управління підприємницькою діяльністю; Управління підприємством сфери послуг;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/marketing'>075 Маркетинг</a></b> - Маркетинговий менеджмент; Логістичний менеджмент;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/pidpriyemnictvo-torgivlya-ta-birzheva-diyalnist'>076 Підприємництво, торгівля та біржова діяльність</a></b> - Управління бізнес-проектами; Підприємництво;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/pravo'>081 Право</a></b> - Правове регулювання економіки; Господарське судочинство; Право у сфері громадської і політичної діяльності;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/inzheneriya-programnogo-zabezpechennya'>121 Інженерія програмного забезпечення</a></b> - Прикладне програмне забезпечення; Інформаційний менеджмент;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/publichne-upravlinnya-ta-administruvannya'>281 Публічне управління та адміністрування</a></b> - Управління на регіональному та місцевому рівні; Управління персоналом в публічній сфері;.\n\n<b><a href='https://www.kneu.dp.ua/ua/specialty/mizhnarodni-eknomichni-vidnosini'>292 Міжнародні економічні відносини</a></b> - Управління міжнародним бізнесом; Міжнародні торговельні відносини;.\n\n<b><a href='https://kmi.dp.ua/index.php/galuzeve-mashinobuduvannja/'>133 Галузеве машинобудування</a></b> - Галузеве машинобудування.\n\n<b><a href='https://kmi.dp.ua/index.php/metalurgija/'>136 Металургія</a></b> - Металургія.\n\n<b><a href='https://kmi.dp.ua/index.php/elektroenergetika-elektrotehnika-ta-elektromehanika/'>141 Електроенергетика, електротехніка та електромеханіка</a></b> - Електроенергетика, електротехніка та електромеханіка.\n\n<b><a href='https://kmi.dp.ua/index.php/avtomatizacija-ta-komp-jutrno-integrovani-tehnologii/'>151 Автоматизація та комп’ютерно-інтегровані технології</a></b> - Автоматизація та комп’ютерно-інтегровані технології.\n\n<b><a href='https://kmi.dp.ua/index.php/himichni-tehnologii-ta-inzhenerija/'>161 Хімічні технології та інженерія</a></b> - Хімічні технології та інженерія.\n\n";

// Contact universities
let duetContactMessage = "<b>Державний університет економіки та технологій</b>\n\n<b>Адреса:</b> вул. Медична, 16, м. Кривий Ріг \n<b>Тел:</b> <a href='tel:0982073648'>(098)-207-36-48</a>\n<b>E-mail:</b> <a href='mailto:'>keipk@kneu.edu.ua</a>\n<b>Сайт:</b> <a href='https://www.kneu.dp.ua'>https://www.kneu.dp.ua</a>\n<a href='https://www.facebook.com/kei.kneu1/'>https://www.facebook.com/kei.kneu1/</a>\n<a href='https://www.instagram.com/kei.kneu/'>https://www.instagram.com/kei.kneu/</a>";
let kmtInUaContactMessage = "<b>Криворізький коледж НМетАУ</b>\n\n<b>Адреса:</b> вул. Медична, 4, м. Кривий Ріг\n<b>Тел:</b> <a href='tel:0687809170'>(068)-780-91-70</a>\n<b>E-mail:</b> <a href='mailto:kknmetau18@gmail.com'>keipk@kneu.edu.ua</a>\n<b>Сайт:</b> <a href='https://kmt.in.ua'>https://kmt.in.ua</a>";
let kkeuContactMessage = "<b>Криворізький коледж економіки та управління</b>\n\n<b>Адреса:</b> вул. Ватутіна, 37а, м. Кривий Ріг\n<b>Тел:</b> <a href='tel:0564947443'>(0564)94-74-43</a>, <a href='tel:0672620679'>(067)-262-06-79</a>\n<b>E-mail:</b> <a href='mailto:kkeu.metodkab@gmail.com'>kkeu.metodkab@gmail.com</a>\n<b>Сайт:</b> <a href='https://www.kkeu.dp.ua/'>https://www.kkeu.dp.ua/</a>\n<a href='https://www.facebook.com/kkey.kney/'>https://www.facebook.com/kkey.kney/</a>";
let ktknmetauContactMessage = "<b>Криворізький технічний коледж НМетАУ</b>\n\n<b>Адреса:</b> вул. Степана Тільги, 40, м. Кривий Ріг\n<b>Тел:</b> <a href='tel:0677012597'>(067)701-25-97</a>, <a href='tel:0564947637'>(0564) 94-76-37</a>\n<b>E-mail:</b> <a href='mailto:ktknmetau@ukr.net'>ktknmetau@ukr.net</a>\n<b>Сайт:</b> <a href='https://kkht.dp.ua'>https://kkht.dp.ua</a>\n<a href='https://www.facebook.com/groups/921175404604094'>https://www.facebook.com/groups/921175404604094</a>\n<a href='https://www.instagram.com/ktk_nmetay_official/'>https://www.instagram.com/ktk_nmetay_official/</a>";
let uptContactMessage = "<b>Український політехнічний технікум</b>\n\n<b>Адреса:</b> прос. Поштовий, 66, м. Кривий Ріг\n<b>Тел:</b> <a href='tel:0969523391'>(096)-952-33-91</a>\n<b>E-mail:</b> <a href='mailto:ukrpolitech@i.ua'>ukrpolitech@i.ua</a>\n<b>Сайт:</b> <a href='https://upt.in.ua/'>https://upt.in.ua/</a>\n<a href='https://www.facebook.com/ukrpolitech'>https://www.facebook.com/ukrpolitech</a>\n<a href='https://www.instagram.com/ukr_poli_tex/'>https://www.instagram.com/ukr_poli_tex/</a>";
let kminmetauContactMessage = "<b>Криворізький металургійний інститут Національної металургійної академії України</b>\n\n<b>Адреса:</b> вул. Степана Тільги , 5, м. Кривий Ріг\n<b>Тел:</b> <a href='tel:0675959045'>(067)-595-90-45</a>\n<b>E-mail:</b> <a href='mailto:kminmetau@gmail.com'>kminmetau@gmail.com</a>\n<b>Сайт:</b> <a href='https://kmi.dp.ua'>kmi.dp.ua</a>\n<a href='https://www.facebook.com/%D0%9A%D1%80%D0%B8%D0%B2%D0%BE%D1%80%D1%96%D0%B7%D1%8C%D0%BA%D0%B8%D0%B9-%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D1%83%D1%80%D0%B3%D1%96%D0%B9%D0%BD%D0%B8%D0%B9-%D1%96%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82-%D0%9D%D0%B0%D1%86%D1%96%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97-%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D1%83%D1%80%D0%B3%D1%96%D0%B9%D0%BD%D0%BE%D1%97-%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D1%96%D1%97-1685125868449167/'>https://www.facebook.com/kmi</a>\n<a href='https://www.instagram.com/kminmetau'>https://www.instagram.com/kminmetau</a>";

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
    }
    else if (msg.text === "Криворізький коледж НМетАУ") {
        bot.sendMessage(msg.chat.id, kmtInUaContactMessage, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    }
    else if (msg.text === "Криворізький коледж економіки та управління") {
        bot.sendMessage(msg.chat.id, kkeuContactMessage, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    }
    else if (msg.text === "Криворізький технічний коледж НМетАУ") {
        bot.sendMessage(msg.chat.id, ktknmetauContactMessage, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    }
    else if (msg.text === "Український політехнічний технікум") {
        bot.sendMessage(msg.chat.id, uptContactMessage, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    }
    else if (msg.text === "Криворізький металургійний інститут Національної металургійної академії України") {
        bot.sendMessage(msg.chat.id, kminmetauContactMessage, {
            parse_mode: "HTML",
            disable_web_page_preview: true
        });
    }

});