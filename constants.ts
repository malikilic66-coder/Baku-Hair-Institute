

import { ContentMap } from './types';

export const content: ContentMap = {
  az: {
    nav: {
      men: "Bəylər",
      women: "Xanımlar",
      other: "Digər Prosedurlar",
      about: "Haqqımızda",
      contact: "Əlaqə",
      men_items: ["Saç Əkimi", "Sakal Əkimi", "LONG FUE", "Ön Çizgi Dizaynı"],
      women_items: ["Qadın Saç Əkimi", "Kaş Əkimi", "Lokal Anesteziya"],
      other_items: ["PRP Müalicəsi", "Mezoterapiya", "Medikal Müalicə"],
      about_items: ["Haqqımızda", "Vizyonumuz", "Missiyamız", "Klinika", "Həkimlər"],
      contact_items: ["Konsultasiya Formu", "Xəritə", "Ünvan"]
    },
    hero: {
      exp: "9 İl Peşəkar Xidmət",
      title: "Mükəmməlliyin",
      subtitle: "Zirvəsi",
      desc: "Azərbaycan həkimləri və Türk komandasının ortaq layihəsi – premium saç ekimi və estetik mərkəzi.",
      btn_consult: "Məlumat Al",
      btn_whatsapp: "WhatsApp İlə Yaz",
      doctor_exp: "9 İl Peşəkar Xidmət"
    },
    joint_project: {
      title: "Beynəlxalq keyfiyyətli saç əkimi artıq Bakıda",
      subtitle: "",
      desc: "Sizin rahatlığınız üçün türk saç əkimi mütəxəssislərinin və klinikamızın dermatoloqlarının birgə layihəsini təqdim edirik. Beləcə prosedurlarınızı daha rahat, daha sərfəli və daha təhlükəsiz edirik. Artıq Türkiyəyə getmədən, əlavə xərc çəkmədən türk keyfiyyəti, müasir metodlar və peşəkarların təcrübəsindən burada elə öz şəhərimiz Bakıda yararlana bilərsiniz.",
      advantages_title: "Üstünlüklər",
      advantages: [
        {
          title: "1. Prosedurlar Bakıda aparılır",
          desc: "Artıq saç əkimi üçün xaricə getməyə, səyahət üçün əlavə xərc çəkməyə və uzun yola vaxt itirməyə ehtiyac yoxdur. Proseduru Bakıda keçirə və həmin gün rahat şəkildə evinizə qayıda bilərsiniz. Əlavə vaxt, enerji və maliyyə itkisi olmadan."
        },
        {
          title: "2. Yüksək saç əkimi standartları",
          desc: "Türkiyə uzun illərdir ki, tibbi turizmin dünya liderlərindən biri kimi tanınır. Türk həkimləri ən müasir əməliyyat metodlarına və yüksək texnoloji standartlara sahibdir. İndi bu standartlardan birbaşa Bakıda faydalana bilərsiniz."
        },
        {
          title: "3. Prosedurdan sonra peşəkar qulluq",
          desc: "Saç əkimindən sonra həkimlərimizin nəzarəti altında olacaqsınız. Dr. Zülfüqar, Dr. Günay və komandamız nəticəni tam əldə edənə qədər sizə peşəkar şəkildə xidmət edəcəyik."
        }
      ]
    },
    services: {
      title: "Xidmətlərimiz",
      items: [
        { t: "Saç Əkimi", d: "FUE və DHI metodları ilə maksimum sıxlıq." },
        { t: "Kaş Əkimi", d: "Təbii baxışlar üçün estetik toxunuş." },
        { t: "Sakal Əkimi", d: "Üz cizgilərinizi tamamlayan bərpa." },
        { t: "FUE Yöntəmi", d: "İzsiz, ağrısız və sürətli sağalma." },
        { t: "PRP", d: "Öz qanınızla saç köklərini canlandırın." },
        { t: "Mezoterapiya", d: "Vitamin kompleksi ilə güclü köklər." },
        { t: "Medikal Müalicə", d: "Dökülməyə qarşı tibbi yanaşma." }
      ]
    },
    long_fue: {
      title: "LONG FUE – Saç əkimində ən müasir və rahat metod",
      subtitle: "",
      badge: "Özəl Təklif",
      desc: "Long FUE saç əkimi zamanı saçlarınızı 1 mm belə qırxdırmadan, təbii görünüşünüzü qoruyaraq əkim aparmağa imkan verən premium bir metoddur. Bu prosedur həm estetik üstünlüyü, həm də rahatlığı ilə seçilir. Xüsusilə gündəlik işindən geri qalmaq istəməyən və prosedurun gizli qalmağını istəyən pasiyentlər üçün əla seçimdir.",
      features_title: "Long FUE-nin 3 əsas üstünlüyü",
      features: [
        {
          title: "1. Saç qırxılmadan əkim imkanı",
          desc: "Görünüşünüz dəyişmir, prosedur olduğunuz nəzərə çarpmır. İşinizə, sosial həyatınıza heç bir kəsinti olmadan davam edə bilərsiniz."
        },
        {
          title: "2. Daha sürətli bərpa",
          desc: "Donor sahəsi daha az travma gördüyü üçün sağalma müddəti qısalır və diskomfort minimum səviyyədə qalır."
        },
        {
          title: "3. Daha təbii və estetik nəticə",
          desc: "Saçların uzun halda çıxarılması həkimə istiqaməti, sıxlığı və açıları daha dəqiq təyin etməyə imkan verir. Nəticəni prosedurdan dərhal sonra görmək imkanı verir."
        }
      ]
    },
    doctors: {
      title: "Doktorlarımız və Ekibimiz",
      btn: "Komandamızı Tanıyın",
      items: [
        { 
          name: "Professor Həkim ZÜLFÜQAR FƏRƏCOV", 
          title: "Professor, Həkim", 
          exp: "150+ Elmi Məqalə", 
          specialty: "Baş Dermatoveneroloq", 
          image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop",
          bio: "Azərbaycan Tibb Universitetində təhsil almışdır. 150-dən artıq elmi məqalə, monoqrafiya, dərsliklər, tövsiyyələrlə yanaşı 4 elmi ixtiranın müəllifidir. Azərbaycan Respublikası Səhiyyə Nazirliyinin Baş Dermatoveneroloqu."
        },
        { 
          name: "Həkim GÜNAY FƏRƏCOVA", 
          title: "Həkim, Tibb Elmləri Namizədi", 
          exp: "Asistent", 
          specialty: "Dermatoloq", 
          image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop",
          bio: "Azərbaycan Tibb Universitenin \"Dəri-zöhrəvi xəstəliklər\" kafedrasının asistenti, tibb elmləri namizədi."
        }
      ]
    },
    why_us: {
      title: "Niyə Biz?",
      items: [
        { title: "9 İllik Təcrübə", desc: "Minlərlə uğurlu əməliyyat." },
        { title: "Zəmanətli Planlama", desc: "Ömür boyu çıxma zəmanəti." },
        { title: "Steril Klinik", desc: "Tam gigiyenik əməliyyatxana." },
        { title: "Yüksək Məmnuniyyət", desc: "98% müsbət rəy." },
        { title: "Təbii Dizayn", desc: "Üz cizgilərinə uyğun planlama." },
        { title: "Şəffaf Qiymət", desc: "Gizli ödəniş yoxdur." }
      ],
      testimonials: [
        { name: "Rəşad M.", comment: "Türkiyəyə getməyə ehtiyac olmadan Bakıda ən yüksək keyfiyyətdə xidmət aldım. Professor Zülfüqar və komandası əla peşəkarlardır.", rating: 5 },
        { name: "Aynur H.", comment: "Long FUE metodunu seçdim. Heç kəs prosedur olduğumu anlamadı. Nəticə möhtəşəmdir!", rating: 5 },
        { name: "Elçin Y.", comment: "Sakal əkimi etdirdim. Çox təbii görsəl əldə etdim. Minnətdaram!", rating: 5 },
        { name: "Nigar R.", comment: "Qadın saç əkimi proseduru çox rahat keçdi. Saçımı kəsdirmədim və nəticə əladır.", rating: 5 }
      ],
      before_after: [
        { before: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=500", after: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?q=80&w=500", desc: "Saç Əkimi" },
        { before: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=500", after: "https://images.unsplash.com/photo-1592124549776-a7f0cc973b24?q=80&w=500", desc: "Sakal Əkimi" },
        { before: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=500", after: "https://images.unsplash.com/photo-1512413316925-fd52bd015e0a?q=80&w=500", desc: "Kaş Əkimi" },
        { before: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500", after: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=500", desc: "Qadın Saç Əkimi" }
      ]
    },
    faq: {
      title: "Tez-tez Verilən Suallar",
      subtitle: "Info Center",
      items: [
        { q: "Saç ekimi ağrılıdırmı?", a: "Xeyr, yerli anesteziya altında prosedur tamamilə ağrısız keçir." },
        { q: "FUE proseduru nə qədər çəkir?", a: "Prosedur adətən 6-8 saat davam edir." },
        { q: "LONG FUE kimlərə uyğundur?", a: "Saçını qısa kəsdirmək istəməyən iş adamları və xanımlar üçün idealdır." },
        { q: "Xanımlarda saç ekimi mümkündürmü?", a: "Bəli, xüsusi DHI metodu ilə saç aralarına sıxlaşdırma edilir." },
        { q: "Əkilən saçlar tökülürmü?", a: "Xeyr, əkilən saçlar genetik olaraq tökülməyən bölgədən alındığı üçün ömürlükdür." }
      ]
    },
    form: {
      header: "Məlumat Al",
      name: "Ad və Soyad",
      phone: "Telefon nömrəsi",
      btn: "Təsdiqlə",
      success: "Təşəkkürlər! Operatörlerimiz ən qısa zamanda sizinlə əlaqə saxlayacaq."
    },
    men_hair_page: {
      title: "Saç Əkimi",
      subtitle: "FUE, DHI və LONG FUE Metodları",
      desc: "İtirilmiş saçlarınızı geri qaytarmaq üçün ən müasir texnologiyalar. Bakının mərkəzində, Türk və Azərbaycanlı mütəxəssislərin zəmanəti ilə.",
      techniques: {
        fue: { title: "FUE Metodu", desc: "Saç köklərinin tək-tək götürülüb əkilməsi. İzsiz və sürətli sağalma." },
        dhi: { title: "DHI Metodu", desc: "Choi qələmi ilə birbaşa əkim. Tıraşsız və daha sıx nəticələr." },
        long: { title: "LONG FUE", desc: "Saçları kəsmədən, uzun halda əkim. Sosial həyatdan qopmadan." }
      },
      timeline_title: "Sağalma Prosesi",
      timeline: [
        { time: "1. Gün", title: "İstirahət", desc: "Əməliyyat sonrası ilk gün sarğı açılır və ilk yumama edilir." },
        { time: "3. Gün", title: "Normallaşma", desc: "Ödem azalır, iş həyatına qayıda bilərsiniz." },
        { time: "1. Həftə", title: "Qabıqlanma", desc: "Əkim sahəsindəki qabıqlar tamamilə təmizlənir." }
      ]
    },
    men_beard_page: {
      title: "Sakal Əkimi",
      subtitle: "Kişi Estetikasının Tamamlayıcısı",
      desc: "Seyrək və ya heç çıxmayan sakal bölgələrinə estetik toxunuş. Üz cizgilərinizə uyğun təbii dizayn.",
      features: [
        { title: "Sıxlaşdırma", desc: "Mövcud sakalın sıxlığını artırmaq üçün ideal həll." },
        { title: "Tam Sakal Dizaynı", desc: "Sakal xəttinin yenidən formalaşdırılması." },
        { title: "İzsiz Prosedur", desc: "Mikro kanallar sayəsində üzdə heç bir iz qalmır." }
      ]
    },
    long_fue_page: {
      title: "LONG FUE",
      subtitle: "Premium Tıraşsız Əkim",
      desc: "İş dünyasının və ictimai şəxslərin seçimi. Saçlarınızı kəsdirmədən, mövcud uzunluğunu qoruyaraq həyata keçirilən xüsusi texnika.",
      comparison_title: "FUE vs LONG FUE",
      comparison: [
        { feature: "Saç Tıraşı", standard: "Tam Tıraş", long: "Tıraşsız (Uzun)" },
        { feature: "Sosial Həyat", standard: "10-14 Gün Ara", long: "Dərhal Qayıdış" },
        { feature: "Prosedur Müddəti", standard: "6-7 Saat", long: "7-9 Saat" },
        { feature: "Məxfilik", standard: "Aşağı", long: "Maksimum" }
      ],
      benefits: [
        { title: "Görünməzlik", desc: "Əməliyyat olunduğunuzu kimsə anlamaz." },
        { title: "Komfort", desc: "Saç stilinizi dəyişməyə ehtiyac yoxdur." },
        { title: "VIP Xidmət", desc: "Yalnız baş həkim tərəfindən icra olunur." }
      ]
    },
    hairline_page: {
      title: "Ön Çizgi Dizaynı",
      subtitle: "Qızıl Nisbət və Sənət",
      desc: "Saç əkiminin ən vacib hissəsi təbiilikdir. Biz riyazi 'Qızıl Nisbət' (Golden Ratio) qaydalarına əsaslanaraq üzünüzə ən çox yaraşan xətti çəkirik.",
      golden_ratio_title: "Qızıl Nisbət (1.618)",
      golden_ratio_desc: "Leonardo da Vinçinin əsərlərində istifadə etdiyi bu nisbət, insan gözünə ən estetik görünən ölçüdür. Alın açıqlığı və qaş məsafəsi bu nisbətə görə hesablanır.",
      steps: [
        { title: "Üz Analizi", desc: "Alın əzələlərinin hərəkəti və üz simmetriyası incələnir." },
        { title: "Lazer Ölçümü", desc: "Milimetrik dəqiqlik üçün lazer cihazı ilə xətt müəyyən edilir." },
        { title: "Sizin Təsdiqiniz", desc: "Dizayn güzgü qarşısında sizinlə birlikdə yekunlaşdırılır." }
      ]
    },
    women_hair_page: {
      title: "Qadın Saç Əkimi",
      subtitle: "Zərif Toxunuşlar, Tıraşsız Həllər",
      desc: "Qadınlarda saç tökülməsi estetik qayğı yaradır. Biz saçlarınızı tam kəsmədən, mövcud saçların arasına DHI metodu ilə sıxlaşdırma edirik.",
      features: [
        { title: "Tıraşsız Əkim", desc: "Saçlarınızı kəsdirməyə ehtiyac yoxdur." },
        { title: "DHI Texnologiyası", desc: "Mövcud köklərə zərər vermədən sıxlaşdırma." },
        { title: "Qadın Estetikası", desc: "Zərif və təbii ön xətt dizaynı." }
      ],
      process_title: "Sizə Özəl Proses",
      process: [
        { time: "Konsultasiya", title: "Analiz", desc: "Saç tökülmə tipi (Ludwig şkalası) müəyyən edilir." },
        { time: "Əməliyyat", title: "Komfortlu", desc: "Yerli anesteziya ilə ağrısız və saç kəsimi olmadan." },
        { time: "Nəticə", title: "12 Ay", desc: "Tam nəticə və sıx saçlara qovuşma." }
      ]
    },
    eyebrow_page: {
      title: "Kaş Əkimi",
      subtitle: "Baxışlarınızı Dəyişdirin",
      desc: "Seyrək, tökülmüş və ya forması pozulmuş kaşlar üçün qalıcı həll. Üz ifadənizi gücləndirən, təbii bucaqla əkilmiş kaşlar.",
      steps: [
        { title: "Dizayn", desc: "Göz quruluşunuza ən uyğun forma qələmlə çəkilir." },
        { title: "Mikro FUE", desc: "Ən incə köklər (1-li qreft) seçilərək alınır." },
        { title: "Təbii Bucaq", desc: "Kaşların çıxış istiqamətinə uyğun kanallar açılır." }
      ]
    },
    anesthesia_page: {
      title: "Lokal Anesteziya",
      subtitle: "Ağrısız və Təhlükəsiz",
      desc: "Pasientlərimizin komfortu bizim üçün hər şeydən önəmlidir. Ən müasir 'İynəsiz Anesteziya' (Needle-free) cihazları ilə prosedur zamanı ağrı hiss etməzsiniz.",
      methods: [
        { title: "İynəsiz Enjeksiyon", desc: "Təzyiqli hava ilə anesteziya maddəsi dəri altına yeridilir." },
        { title: "Sedasiya (Yuxu)", desc: "İstəyə bağlı olaraq yüngül yuxu halında prosedur." },
        { title: "Maksimum Komfort", desc: "Əməliyyatın ən narahat hissəsi belə hiss edilmir." }
      ]
    },
    prp_page: {
        title: "PRP Müalicəsi",
        subtitle: "Öz Qanınızla Yenilənmə",
        desc: "Platelet Rich Plasma (Trombositlərlə Zəngin Plazma) müalicəsi, saç tökülməsini dayandırmaq və mövcud saçları gücləndirmək üçün ən təbii və effektiv üsuldur.",
        benefits: [
            { title: "Təbii Üsul", desc: "Yalnız öz qanınızdan istifadə edilir, allergik reaksiya riski yoxdur." },
            { title: "Hüceyrə Yenilənməsi", desc: "Böyümə faktorları saç köklərini aktivləşdirir." },
            { title: "Sürətli Təsir", desc: "Saç əkimi sonrası sağalmanı sürətləndirir." }
        ],
        process_title: "PRP Prosesi",
        process_steps: [
            { title: "Qan Alma", desc: "Sizdən kiçik miqdarda (10-20cc) qan alınır." },
            { title: "Sentrifuqa", desc: "Xüsusi cihazda qan hissələrə ayrılır və plazma əldə edilir." },
            { title: "Tətbiq", desc: "Zəngin plazma saç dərisinə mikro iynələrlə yeridilir." }
        ]
    },
    meso_page: {
        title: "Saç Mezoterapiyası",
        subtitle: "Vitamin Kokteyli",
        desc: "Saç köklərinin ehtiyac duyduğu vitamin, mineral və amin turşularının birbaşa saç dərisinə yeridilməsi metodudur. Zəifləmiş saçları canlandırır və parıltı verir.",
        cocktail_title: "Güclü Tərkib",
        ingredients: ["Biotin (B7)", "Sink (Zinc)", "Hyaluron turşusu", "Amin turşuları", "Antioksidantlar"],
        effects: [
            { title: "Tökülməni Dayandırır", desc: "Saç köklərini qidalandıraraq ömrünü uzadır." },
            { title: "Qalınlaşdırır", desc: "İncəlməkdə olan saç tellərini qalınlaşdırır." },
            { title: "Parıltı Verir", desc: "Saçın strukturunu bərpa edir və canlılıq qatır." }
        ]
    },
    medical_page: {
        title: "Medikal Müalicə",
        subtitle: "Elmi Yanaşma",
        desc: "Saç tökülməsi hər zaman cərrahi müdaxilə tələb etmir. Bəzi hallarda düzgün diaqnoz və FDA tərəfindən təsdiqlənmiş dərman müalicələri ilə saçlarınızı qoruya bilərsiniz.",
        disclaimer: "* Bütün dərman müalicələri həkim nəzarəti altında və resept əsasında təyin edilir.",
        treatments: [
            { title: "Finasteride", desc: "DHT hormonunu bloklayaraq kişi tipli tökülməni (Genetik) dayandırır." },
            { title: "Minoxidil", desc: "Saç dərisində qan dövranını artıraraq saçların böyüməsini sürətləndirir." },
            { title: "Vitamin Kompleksləri", desc: "Saç üçün xüsusi hazırlanmış Biotin və multivitamin dəstəyi." }
        ]
    },
    sys_active: "SYSTEM OVERRIDE: ACTIVE"
  },
  ru: {
    nav: {
      men: "Для Мужчин",
      women: "Для Женщин",
      other: "Другие Процедуры",
      about: "О Нас",
      contact: "Контакты",
      men_items: ["Пересадка Волос", "Пересадка Бороды", "LONG FUE", "Дизайн Линии Волос"],
      women_items: ["Пересадка Волос (Женщины)", "Пересадка Бровей", "Локальная Анестезия"],
      other_items: ["PRP Терапия", "Мезотерапия", "Медицинское Лечение"],
      about_items: ["О Нас", "Видение", "Миссия", "Клиника", "Врачи"],
      contact_items: ["Форма Консультации", "Карта", "Адрес"]
    },
    hero: {
      exp: "9 Лет Профессионализма",
      title: "Вершина",
      subtitle: "Совершенства",
      desc: "Совместный проект врачей Азербайджана и турецкой команды – центр премиальной пересадки волос и эстетики.",
      btn_consult: "Получить Консультацию",
      btn_whatsapp: "Написать в WhatsApp",
      doctor_exp: "9 Лет Профессионализма"
    },
    joint_project: {
      title: "Пересадка волос международного качества теперь в Баку",
      subtitle: "",
      desc: "Для вашего комфорта мы представляем совместный проект турецких специалистов по пересадке волос и дерматологов нашей клиники. Так мы делаем ваши процедуры более комфортными, экономичными и более безопасными. Теперь вы можете воспользоваться турецким качеством, современными методами и опытом профессионалов прямо здесь, в Баку, без поездки в Турцию и дополнительных расходов.",
      advantages_title: "Преимущества",
      advantages: [
        {
          title: "1. Процедуры проводятся в Баку",
          desc: "Теперь нет необходимости ехать за границу, нести дополнительные расходы на поездку и терять время на дорогу. Вы можете пройти процедуру в Баку и в тот же день вернуться домой. Без потерь времени, энергии и финансов."
        },
        {
          title: "2. Высокие стандарты пересадки волос",
          desc: "Турция уже много лет является одним из мировых лидеров медицинского туризма. Турецкие врачи обладают самыми современными методами операций и высокими технологическими стандартами. Теперь вы можете воспользоваться этими стандартами напрямую в Баку."
        },
        {
          title: "3. Профессиональный уход после процедуры",
          desc: "После пересадки волос вы будете под наблюдением наших врачей. Др. Зюльфюгар, Др. Гюнай и наша команда будут обслуживать вас профессионально до получения полного результата."
        }
      ]
    },
    services: {
      title: "Наши Услуги",
      items: [
        { t: "Пересадка Волос", d: "Максимальная густота методами FUE и DHI." },
        { t: "Пересадка Бровей", d: "Эстетический штрих для естественного взгляда." },
        { t: "Пересадка Бороды", d: "Восстановление, дополняющее черты лица." },
        { t: "Метод FUE", d: "Без шрамов, без боли и быстрое заживление." },
        { t: "PRP", d: "Оживление корней волос собственной плазмой." },
        { t: "Мезотерапия", d: "Крепкие корни с витаминным комплексом." },
        { t: "Медицинское Лечение", d: "Медицинский подход против выпадения." }
      ]
    },
    long_fue: {
      title: "LONG FUE",
      subtitle: "Операция без стрижки волос",
      badge: "Специальное Предложение",
      desc: "Пересадка волос без стрижки с использованием современных технологий. Получите новый вид, не меняя образ жизни и не прерывая работу.",
      features: ["Без перерыва в работе", "Полная конфиденциальность", "Быстрое заживление"]
    },
    doctors: {
      title: "Наши Врачи",
      btn: "Познакомьтесь с командой",
      items: [
        { name: "Др. Эмиль Алиев", title: "Главный Врач", exp: "12 Лет Опыта", specialty: "Хирург по волосам", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop" },
        { name: "Спец. Др. Лейла Мамедова", title: "Дерматолог", exp: "9 Лет Опыта", specialty: "Медицинская Эстетика", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop" },
        { name: "Оп. Др. Кенан Велиев", title: "Пластический Хирург", exp: "15 Лет Опыта", specialty: "Эстетическая Хирургия", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop" }
      ]
    },
    why_us: {
      title: "Почему Мы?",
      items: [
        { title: "9 Лет Опыта", desc: "Тысячи успешных операций." },
        { title: "Гарантированное Планирование", desc: "Пожизненная гарантия на рост." },
        { title: "Стерильная Клиника", desc: "Полностью гигиеничная операционная." },
        { title: "Высокая Удовлетворенность", desc: "98% положительных отзывов." },
        { title: "Естественный Дизайн", desc: "Планирование в соответствии с чертами лица." },
        { title: "Прозрачная Цена", desc: "Никаких скрытых платежей." }
      ]
    },
    faq: {
      title: "Часто Задаваемые Вопросы",
      subtitle: "Инфо Центр",
      items: [
        { q: "Болезненна ли пересадка волос?", a: "Нет, процедура проходит совершенно безболезненно под местной анестезией." },
        { q: "Сколько длится процедура FUE?", a: "Процедура обычно занимает 6-8 часов." },
        { q: "Кому подходит LONG FUE?", a: "Идеально подходит для деловых людей и женщин, которые не хотят коротко стричь волосы." },
        { q: "Возможна ли пересадка волос у женщин?", a: "Да, специальным методом DHI выполняется загущение между волосами." },
        { q: "Выпадают ли пересаженные волосы?", a: "Нет, пересаженные волосы остаются навсегда, так как берутся из генетически не выпадающей зоны." }
      ]
    },
    form: {
      header: "Форма Консультации",
      name: "Имя Фамилия",
      phone: "Телефон",
      email: "Электронная почта",
      gender: "Пол",
      gender_options: ["Мужской", "Женский"],
      procedure: "Выбор Процедуры",
      procedure_options: ["Пересадка Волос", "Пересадка Бороды", "Пересадка Бровей", "PRP/Мезотерапия"],
      upload: "Загрузить Фото (Спереди, Справа, Слева, Макушка)",
      message: "Дополнительные Примечания",
      consent: "Я согласен на обработку моих персональных данных.",
      btn: "Отправить",
      success: "Спасибо! Наши операторы свяжутся с вами в ближайшее время."
    },
    men_hair_page: {
      title: "Пересадка Волос",
      subtitle: "Методы FUE, DHI и LONG FUE",
      desc: "Самые современные технологии для возвращения утраченных волос. В центре Баку, с гарантией турецких и азербайджанских специалистов.",
      techniques: {
        fue: { title: "Метод FUE", desc: "Индивидуальный забор и пересадка волосяных фолликулов. Без шрамов и быстрое заживление." },
        dhi: { title: "Метод DHI", desc: "Прямая пересадка ручкой Choi. Без бритья и более плотные результаты." },
        long: { title: "LONG FUE", desc: "Пересадка длинных волос без стрижки. Не отрываясь от социальной жизни." }
      },
      timeline_title: "Процесс Заживления",
      timeline: [
        { time: "1. День", title: "Отдых", desc: "В первый день после операции снимается повязка и проводится первое мытье." },
        { time: "3. День", title: "Нормализация", desc: "Отек спадает, вы можете вернуться к работе." },
        { time: "1. Неделя", title: "Корочки", desc: "Корочки в зоне пересадки полностью очищаются." }
      ]
    },
    men_beard_page: {
      title: "Пересадка Бороды",
      subtitle: "Завершение Мужской Эстетики",
      desc: "Эстетический штрих для редких или отсутствующих зон бороды. Естественный дизайн, соответствующий чертам лица.",
      features: [
        { title: "Загущение", desc: "Идеальное решение для увеличения густоты существующей бороды." },
        { title: "Полный Дизайн Бороды", desc: "Реформирование линии бороды." },
        { title: "Процедура Без Шрамов", desc: "Благодаря микроканалам на лице не остается следов." }
      ]
    },
    long_fue_page: {
      title: "LONG FUE",
      subtitle: "Премиальная пересадка без бритья",
      desc: "Выбор делового мира и публичных людей. Особая техника, выполняемая без стрижки волос, с сохранением текущей длины.",
      comparison_title: "FUE против LONG FUE",
      comparison: [
        { feature: "Бритье волос", standard: "Полное бритье", long: "Без бритья (Длинные)" },
        { feature: "Социальная жизнь", standard: "Перерыв 10-14 дней", long: "Мгновенное возвращение" },
        { feature: "Длительность", standard: "6-7 часов", long: "7-9 часов" },
        { feature: "Конфиденциальность", standard: "Низкая", long: "Максимальная" }
      ],
      benefits: [
        { title: "Незаметность", desc: "Никто не поймет, что вы сделали операцию." },
        { title: "Комфорт", desc: "Нет необходимости менять стиль прически." },
        { title: "VIP Сервис", desc: "Выполняется только главным врачом." }
      ]
    },
    hairline_page: {
      title: "Дизайн Линии Волос",
      subtitle: "Золотое Сечение и Искусство",
      desc: "Самая важная часть пересадки волос — это естественность. Мы создаем линию, которая лучше всего подходит вашему лицу, основываясь на правилах математического 'Золотого сечения'.",
      golden_ratio_title: "Золотое Сечение (1.618)",
      golden_ratio_desc: "Это соотношение, используемое Леонардо да Винчи, наиболее эстетично для человеческого глаза. Высота лба и расстояние до бровей рассчитываются по этому соотношению.",
      steps: [
        { title: "Анализ Лица", desc: "Изучаются движения мышц лба и симметрия лица." },
        { title: "Лазерное Измерение", desc: "Линия определяется лазерным устройством для миллиметровой точности." },
        { title: "Ваше Одобрение", desc: "Дизайн завершается вместе с вами перед зеркалом." }
      ]
    },
    women_hair_page: {
      title: "Пересадка Волос у Женщин",
      subtitle: "Нежные штрихи, решение без бритья",
      desc: "Выпадение волос у женщин вызывает эстетическое беспокойство. Мы делаем загущение методом DHI между существующими волосами, не состригая их полностью.",
      features: [
        { title: "Без Бритья", desc: "Нет необходимости стричь волосы." },
        { title: "Технология DHI", desc: "Загущение без повреждения существующих корней." },
        { title: "Женская Эстетика", desc: "Элегантный и естественный дизайн передней линии." }
      ],
      process_title: "Индивидуальный Процесс",
      process: [
        { time: "Консультация", title: "Анализ", desc: "Определяется тип выпадения волос (шкала Людвига)." },
        { time: "Операция", title: "Комфорт", desc: "Безболезненно под местной анестезией и без стрижки." },
        { time: "Результат", title: "12 Месяцев", desc: "Полный результат и густые волосы." }
      ]
    },
    eyebrow_page: {
      title: "Пересадка Бровей",
      subtitle: "Измените Свой Взгляд",
      desc: "Постоянное решение для редких, выпавших или потерявших форму бровей. Брови, пересаженные под естественным углом, усиливающие выражение лица.",
      steps: [
        { title: "Дизайн", desc: "Карандашом рисуется форма, наиболее подходящая строению ваших глаз." },
        { title: "Микро FUE", desc: "Отбираются и извлекаются самые тонкие корни (одинарные графты)." },
        { title: "Естественный Угол", desc: "Каналы открываются в соответствии с направлением роста бровей." }
      ]
    },
    anesthesia_page: {
      title: "Локальная Анестезия",
      subtitle: "Безболезненно и Безопасно",
      desc: "Комфорт наших пациентов для нас превыше всего. С новейшими аппаратами 'Безыгольной анестезии' (Needle-free) вы не почувствуете боли во время процедуры.",
      methods: [
        { title: "Безыгольная Инъекция", desc: "Анестетик вводится под кожу под давлением воздуха." },
        { title: "Седация (Сон)", desc: "Процедура в состоянии легкого сна по желанию." },
        { title: "Максимальный Комфорт", desc: "Даже самая неприятная часть операции не ощущается." }
      ]
    },
    prp_page: {
        title: "PRP Терапия",
        subtitle: "Обновление Собственной Кровью",
        desc: "Лечение обогащенной тромбоцитами плазмой (PRP) — самый естественный и эффективный метод остановки выпадения волос и укрепления существующих.",
        benefits: [
            { title: "Естественный Метод", desc: "Используется только ваша кровь, нет риска аллергии." },
            { title: "Клеточное Обновление", desc: "Факторы роста активируют корни волос." },
            { title: "Быстрый Эффект", desc: "Ускоряет заживление после пересадки волос." }
        ],
        process_title: "Процесс PRP",
        process_steps: [
            { title: "Забор Крови", desc: "У вас берется небольшое количество (10-20 мл) крови." },
            { title: "Центрифуга", desc: "Кровь разделяется в специальном аппарате, получается плазма." },
            { title: "Применение", desc: "Обогащенная плазма вводится в кожу головы микроиглами." }
        ]
    },
    meso_page: {
        title: "Мезотерапия Волос",
        subtitle: "Витаминный Коктейль",
        desc: "Метод введения витаминов, минералов и аминокислот, необходимых корням волос, непосредственно в кожу головы. Оживляет ослабленные волосы и придает блеск.",
        cocktail_title: "Мощный Состав",
        ingredients: ["Биотин (B7)", "Цинк", "Гиалуроновая кислота", "Аминокислоты", "Антиоксиданты"],
        effects: [
            { title: "Останавливает Выпадение", desc: "Питает корни волос, продлевая их жизнь." },
            { title: "Утолщает", desc: "Делает истонченные волосы толще." },
            { title: "Придает Блеск", desc: "Восстанавливает структуру волос и добавляет жизненной силы." }
        ]
    },
    medical_page: {
        title: "Медицинское Лечение",
        subtitle: "Научный Подход",
        desc: "Выпадение волос не всегда требует хирургического вмешательства. В некоторых случаях вы можете сохранить волосы с помощью правильного диагноза и лечения препаратами, одобренными FDA.",
        disclaimer: "* Все медикаментозные процедуры назначаются под наблюдением врача и по рецепту.",
        treatments: [
            { title: "Финастерид", desc: "Блокирует гормон ДГТ, останавливая выпадение по мужскому типу." },
            { title: "Миноксидил", desc: "Усиливает кровообращение в коже головы, ускоряя рост волос." },
            { title: "Витаминные Комплексы", desc: "Специальная поддержка Биотина и мультивитаминов для волос." }
        ]
    },
    sys_active: "СИСТЕМА АКТИВИРОВАНА"
  }
};
