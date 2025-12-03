

import React from 'react';
import { MenHairPageContent, MenBeardPageContent, LongFuePageContent, HairlinePageContent, WomenHairPageContent, EyebrowPageContent, AnesthesiaPageContent, PrpPageContent, MesoPageContent, MedicalPageContent } from '../types';
import { AzePatternBackground, MagneticButton, TiltCard } from './ui';
import { ArrowRight, CheckCircle, Clock, Shield, Star, Crown, ScanFace, PencilRuler, Heart, Eye, Activity, Syringe, Droplets, Zap, Sparkles, TestTube, Pill, Stethoscope, Microscope } from 'lucide-react';

interface MenHairPageProps {
  content?: MenHairPageContent; // Optional yapıyoruz
  sysConfig: boolean;
}

interface MenBeardPageProps {
  content: MenBeardPageContent;
  sysConfig: boolean;
}

interface LongFuePageProps {
  content: LongFuePageContent;
  sysConfig: boolean;
}

interface HairlinePageProps {
  content: HairlinePageContent;
  sysConfig: boolean;
}

interface WomenHairPageProps {
  content: WomenHairPageContent;
  sysConfig: boolean;
}

interface EyebrowPageProps {
  content: EyebrowPageContent;
  sysConfig: boolean;
}

interface AnesthesiaPageProps {
  content: AnesthesiaPageContent;
  sysConfig: boolean;
}

interface PrpPageProps {
    content: PrpPageContent;
    sysConfig: boolean;
}

interface MesoPageProps {
    content: MesoPageContent;
    sysConfig: boolean;
}

interface MedicalPageProps {
    content: MedicalPageContent;
    sysConfig: boolean;
}

export const MenHairPage: React.FC<MenHairPageProps> = ({ content, sysConfig }) => {
    return (
        <div className={`min-h-screen ${sysConfig ? 'bg-black text-green-500' : 'bg-[#F8F3E6] text-[#3A3A3A]'}`}>
            {/* Hero başlık */}
            <div className="relative h-[50vh] bg-[#3A3A3A] overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop&fm=webp" width="1200" height="675" fetchPriority="high" loading="eager" decoding="async" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Hair Transplant"/>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-serif text-[#F8F3E6] mb-4">Bəylər • Saç Əkimi</h1>
                    <p className="text-[#F8F3E6]/80 text-lg md:text-xl font-light max-w-2xl mx-auto">Premium saç əkimi rehberi</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
        {/* Saç ekimi nedir */}
        <section id="nedir" className="mb-20">
          <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-[#3A3A3A]">Saç əkimi nədir?</h2>
          <div className="space-y-6 text-lg leading-relaxed text-[#3A3A3A]/80">
            <h3 className="text-2xl font-bold text-[#7F6A47] mt-8">Saç tökülməsi və saç əkimi</h3>
            <p>Baş dərisində həddindən artıq saç tökülməsi keçəlliyə yol açır. Keçəlliyin ən yayğın səbəbi irsi saç tökülməsidir. Hər kəsin saçları tökülə bilər, lakin bu, kişilərdə daha çox rast gəlinir. Saç tökülməsi çox ciddi hal alıbsa və keçəl bölgələr nəzərə çarpan dərəcədə genişlənibsə, o zaman problemin çarəsi saç əkimidir.</p>
            
            <h3 className="text-2xl font-bold text-[#7F6A47] mt-8">Saç əkimi proseduru üçün uyğun kandidatlar</h3>
            <p>Yaşı mümkün olduğu qədər böyük olan, həm transplantasiya, həm də gələcək ehtiyaclar üçün kifayət qədər güclü donora sahib olan və nəticələr barədə real gözləntiləri olan şəxslər saç əkimi üçün ideal namizədlərdir. Təbii ki, pasiyentin səhhətinin əməliyyata tam uyğun olması da vacibdir.</p>
            <p>Qeyd edək ki, kişilər saç əkimindən əvvəl saç tökülməsinin stabil olduğuna və aktiv tökülmə fazasında olmadığına əmin olmalıdır. Hormonal promlemlər, anemiya, qalxanabənzər vəz xəstəlikləri və ya vitamin çatışmazlığı kimi bilinən problemlər var isə, saç əkimindən əvvəl mütləq yoxlanmalı və müalicə olunmalıdır ki, əkilən saç köklərinin sağ qalma ehtimalı yüksək olsun.</p>
            
            <h3 className="text-2xl font-bold text-[#7F6A47] mt-8">Saç əkiminin 3 əsas mərhələsi</h3>
            <div className="bg-white p-8 rounded border border-[#7F6A47]/20 shadow-lg">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#7F6A47] text-[#F8F3E6] flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <p className="pt-1">Birinci mərhələdə saç follikulları tək-tək başın arxa hissəsindən çıxarılır.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#7F6A47] text-[#F8F3E6] flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <p className="pt-1">İkinci mərhələdə xüsusi iynələr vasitəsilə kanallar açılır.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#7F6A47] text-[#F8F3E6] flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <p className="pt-1">Üçüncü və son mərhələdə isə saç follikulları keçəlləşmiş sahələrə transplantasiya olunur.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>                {/* Metodlar: FUE ve LONG FUE */}
                <section id="metodlar" className="mb-20">
                    <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-[#3A3A3A]">Saç əkimində ən geniş istifadə olunan metodlar</h2>
                    <p className="text-lg text-[#3A3A3A]/80 mb-10 leading-relaxed">Son 10 ildə FUE metodu ilə həyata keçirilən saç əkimi prosedurlarının sayı ciddi şəkildə çoxalmışdır. FUE metodu ilə əməliyyat zamanı başın arqa hissəsindən xüsusi cihaz vasitəsilə çıxarılan saç kökləri sonrakı mərhələdə xüsusi pinsetlərdən istifadə edilərək başın keçəl nahiyələrinə əkilir.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 border-2 border-[#7F6A47]/30 shadow-xl hover:shadow-2xl transition-all">
                            <h3 className="text-2xl font-serif mb-4 text-[#7F6A47]">FUE Metodu</h3>
                            <p className="opacity-80 mb-6 leading-relaxed">FUE metodu ilə əməliyyat zamanı başın arqa hissəsindən xüsusi cihaz vasitəsilə çıxarılan saç kökləri sonrakı mərhələdə xüsusi pinsetlərdən istifadə edilərək başın keçəl nahiyələrinə əkilir.</p>
                            <h4 className="font-bold mb-4 text-[#3A3A3A]">FUE metodunun ən üstün cəhətləri:</h4>
                            <ul className="space-y-3 text-[#3A3A3A]/80">
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-[#7F6A47] flex-shrink-0 mt-1"/>
                                    <span>Dəridə yara izləri buraxmır</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-[#7F6A47] flex-shrink-0 mt-1"/>
                                    <span>Pasiyentlər izlərdən narahat olmadan saçlarını qısa kəsdirə bilər</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-[#7F6A47] flex-shrink-0 mt-1"/>
                                    <span>Əməliyyatdan sonra dəri tez sağalır və xəstə normal rutin həyatına dönə bilir</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-[#7F6A47] flex-shrink-0 mt-1"/>
                                    <span>FUT metoduna görə ağrılar ciddi şəkildə azdır</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-[#7F6A47] flex-shrink-0 mt-1"/>
                                    <span>Bədənin digər nahiyələrindən tük almaq üçün istifadə edilə bilər</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-[#7F6A47]/10 to-[#7F6A47]/5 p-10 border-2 border-[#7F6A47] shadow-xl hover:shadow-2xl transition-all">
                            <h3 className="text-2xl font-serif mb-4 text-[#7F6A47]">LONG FUE Metodu</h3>
                            <p className="opacity-90 mb-6 leading-relaxed">Son illərdə sürətlə yayılan və geniş istifadə edilən yeni saç əkimi metodu LONG FUE-dir. Adından göründüyü kimi bu metod FUE-nin fərqli bir növüdür. Ənənəvi FUE metodundan tək, amma ən əsas fərqi isə odur ki, prosedur zamanı saçlar kəsilmir və qırxılmır.</p>
                            <h4 className="font-bold mb-4 text-[#3A3A3A]">LONG FUE metodunun ən üstün cəhətləri:</h4>
                            <ul className="space-y-3 text-[#3A3A3A]/90">
                                <li className="flex items-start gap-3">
                                    <Star size={20} className="text-[#7F6A47] fill-[#7F6A47] flex-shrink-0 mt-1"/>
                                    <span>Saçları kəsməyə və qırxmağa ehtiyac yoxdur</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Star size={20} className="text-[#7F6A47] fill-[#7F6A47] flex-shrink-0 mt-1"/>
                                    <span>Yara izləri qalmır</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Star size={20} className="text-[#7F6A47] fill-[#7F6A47] flex-shrink-0 mt-1"/>
                                    <span>Donor sahəsi daha az travma olur</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Star size={20} className="text-[#7F6A47] fill-[#7F6A47] flex-shrink-0 mt-1"/>
                                    <span>Dəri daha sürətli sağalır</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Star size={20} className="text-[#7F6A47] fill-[#7F6A47] flex-shrink-0 mt-1"/>
                                    <span>Estetik baxımdan xəstələrin daha çox xoşuna gəlir, çünki prosedur olduğunuz nəzərə çarpmır</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Komanda */}
                <section id="komanda" className="mb-20">
                    <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-[#3A3A3A]">Saç əkimi komandamız</h2>
                    <div className="bg-white p-10 border border-[#7F6A47]/20 shadow-lg rounded">
                        <div className="space-y-6 text-lg leading-relaxed text-[#3A3A3A]/80">
                            <p>Xəstələrimizi keyfiyyətli və beynəlxalq standartlara cavab verən saç əkimi proseduru ilə təmin etmək üçün yeni bir ideya ilə qarşınıza çıxdıq. Uzun illərdir Türkiyə həkimləri həyata keçirdikləri yüz minlərlə saç əkimi prosedurlarının sayına görə dünya ölkələri arasında lider səviyyədədir. Və ard-arda keçirilən bu prosedurlar sayəsində saç əkimi mütəxəssislərimiz əvəzolunmaz təcrübə qazanmışdır.</p>
                            <p>Çünki hər yeni xəstə – yeni saç tökülmə tipi, yeni saç xarakteristikası, yeni dəri xüsusiyyətləri, yeni prosedur və yeni individual yanaşma deməkdir. Hər yeni əməliyyatda mütəxəssislərimiz öz peşəkarlıq səviyyələrini daha da yüksəldiblər.</p>
                            <p>Mütəxəssislər tibbi sertifikatlara sahibdirlər. İllərdir səhiyyə qurumları tərəfindən verilən protokollara görə əməliyyatları icra ediblər və tam gigiyenik şəraitdə prosedurları həyata keçirirlər. Bununla yanaşı, yerli dermatoloqlarımız onlara prosedurlar zamanı dəstək verir və ümumi gedişata nəzarət edirlər.</p>
                            <p>Dermatoloq komandamız isə Azərbaycanın ən öndə gedən həkimlərindən ibarətdir. Onlar on illərdir öz təcrübələri ilə öz adlarını xəstələrin yaddaşına həkk ediblər. Türkiyədən gələn mütəxəssislərin və yerli dermatoloqların bu ortaq işi xəstələrin keyfiyyətli əməliyyat olması üçün və əməliyyatdan sonra diqqətli baxım üçün mükəmməl şərait yaradır.</p>
                        </div>
                    </div>
                </section>

                {/* Ağrı */}
                <section id="agri" className="mb-20">
                    <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-[#3A3A3A]">Saç əkimi ağrılıdır?</h2>
                    <p className="text-lg text-[#3A3A3A]/80 mb-10 leading-relaxed">Pasiyentləri ən çox maraqlandıran suallardan biri odur ki, saç əkimi ağrılı bir prosedurdur, yoxsa ağrısız. Təbii ki, digər prosedurlar kimi saç əkiminin də yaratdığı diskomfortlar var. Bu diskomfortları 2 hissəyə bölməyimiz daha məntiqli olar.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 border border-[#7F6A47]/20 shadow-lg">
                            <h3 className="text-2xl font-bold text-[#7F6A47] mb-4">Prosedur zamanı</h3>
                            <p className="text-[#3A3A3A]/80 leading-relaxed">Saç əkimi proseduru icra edilərkən pasiyentlərin dərisinə müəyyən qədər yerli anesteziya verilməsinə ehtiyac vardır. Bu, pasiyentin dərisinin keyləşməsini təmin edir və prosedur zamanı ağrı və diskomfort hiss edilmir. Anesteziya xüsusi iynələrlə verildiyi üçün əməliyyatın başlanğıc mərhələsində pasiyentlər müəyyən diskomfort hiss edə bilər. Lakin qısa zaman içində diskomfort tamamilə yoxa çıxır və pasiyentlər ağrısız bir prosedura davam edir.</p>
                        </div>
                        <div className="bg-white p-8 border border-[#7F6A47]/20 shadow-lg">
                            <h3 className="text-2xl font-bold text-[#7F6A47] mb-4">Prosedur bitdikdən sonra</h3>
                            <p className="text-[#3A3A3A]/80 leading-relaxed">Prosedur bitdikdən sonra pasiyentlərə diqqət etməli olduqları bütün qaydalar tək-tək izah edilir. Nəzərə almalıyıq ki, prosedurdan sonra bir neçə saat içində yerli anesteziyanın təsiri azalır və diskomfort hissi çoxalmağa başlayır. Pasiyentin diskomfortunu azaltmaq üçün öncədən ağrıkəsicilər və istifadə qaydaları izah edilir. Bu da öz növbəsində əməliyyatdan sonrakı mərhələlərdə öz müsbət təsirini göstərir.</p>
                        </div>
                    </div>
                </section>

                {/* Rehabilitasiya */}
                <section id="rehab" className="mb-20">
                    <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-[#3A3A3A]">Saç əkimindən sonra reabilitasiya dövrü necə keçir?</h2>
                    <p className="text-lg text-[#3A3A3A]/80 mb-10 leading-relaxed">Əməliyyatdan sonrakı dövr prosedurun özü qədər vacibdir. Prosedurdan sonra pasiyentlərə əkilmiş saçlara necə qulluq etməli olduqları ətraflı izah edilir. Xüsusi şampunlar və losyonların necə düzgün istifadə olunması da izah olunur, çünki bunlar prosedurdan sonra dərinin bərpasına kömək edir. 1–2 gün sonra sarğılar adətən çıxarıla bilər.</p>
                    
                    <div className="bg-white p-10 border border-[#7F6A47]/20 shadow-lg rounded space-y-6 text-lg leading-relaxed text-[#3A3A3A]/80">
                        <div>
                            <h3 className="text-xl font-bold text-[#7F6A47] mb-3">İlk 2 həftə</h3>
                            <p>Prosedurdan sonra ilk 2 həftə transplantasiya olunmuş saçlara çox diqqətli yanaşmaq lazımdır. Qreftlər hələ zəifdir və onların kök atması üçün vaxt lazımdır. İlk ay ərzində ağır fiziki işləri azaltmaq tövsiyə olunur ki, bütün mümkün risklər minimuma endirilsin.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#7F6A47] mb-3">Gündəlik həyat</h3>
                            <p>Siz normal fəaliyyətinizə davam edə və gündəlik işlərinizlə məşğul ola bilərsiniz. Yalnız unutmayın ki, transplantasiya olunan sahəyə toxunmaq və kontakt etmək qadağandır.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#7F6A47] mb-3">Nəticələr</h3>
                            <p>Bir neçə həftə sonra transplantasiya olunmuş saçlar tökülür, sonra isə yenidən çıxmağa başlayır. 4 ay sonra adətən yeni saçlar görünməyə başlayır. 10–16 ay ərzində isə yekun nəticələr əldə edilmiş olur.</p>
                        </div>
                    </div>
                </section>

                {/* Ömürlük nəticə */}
                <section id="omurluk" className="mb-20">
                    <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-[#3A3A3A]">Saç əkiminin nəticəsi ömürlükdür?</h2>
                    <div className="bg-white p-10 border border-[#7F6A47]/20 shadow-lg rounded">
                        <div className="space-y-6 text-lg leading-relaxed text-[#3A3A3A]/80">
                            <p className="text-xl font-semibold text-[#3A3A3A]">Saç əkiminizin nəticəsi bütün həyatınız boyunca qalıcı olacaq və sizi sevindirəcəkdir.</p>
                            <p>Hər şey saçlarınızın unikal xüsusiyyətlərindən asılıdır. Bu saçlar adətən başın arxa və ya yan hissələrindən götürülür və genetik saç tökülməsinə səbəb olan hormonlara qarşı təbii şəkildə dayanıqlıdır. Bu follikullar seyrək bölgələrə köçürüldükdən sonra da güclü qalmağa davam edirlər.</p>
                            
                            <h3 className="text-2xl font-bold text-[#7F6A47] mt-8">Saç əkimi nəticəsinə təsir edən faktorlar</h3>
                            <p>Bir çox digər faktorlar da nəticəyə təsir göstərə bilər, bu isə pasiyentin anatomik xüsusiyyətlərindən asılıdır. Məsələn, dalğalı saçlar, daha sıx saçlar və dərinin rəngindən az fərqlənən saçlar — bunlar hamısı saçları vizual olaraq daha sıx göstərən müsbət xüsusiyyətlərdir. Lakin əgər siz gəncsinizsə, təbii saç tökülməsi davam etdikcə əlavə prosedurlara ehtiyacınız ola bilər.</p>
                            <p>Nəhayət, həkiminizin təcrübəsi nəticələrin uzun müddət qalmasında əsas rol oynayır. Təcrübəli mütəxəssis qreftlərin düzgün yərləşdirilməsini təmin edərək onların sağ qalmasını və zamanla təbii görünüşünü qoruyur.</p>
                        </div>
                    </div>
                </section>

                {/* Xidmətlər paketi */}
                <section id="paket" className="mb-20">
                    <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-[#3A3A3A]">Saç əkimi xidmətlərimizə nələr daxildir?</h2>
                    <p className="text-lg text-[#3A3A3A]/80 mb-10 leading-relaxed">Sizin rahatlığınızı düşündüyümüz üçün saç əkimi prosedurlarımızı geniş paket şəklində sizə təqdim edirik.</p>
                    
                    <div className="bg-gradient-to-br from-[#7F6A47]/5 to-white p-10 border-2 border-[#7F6A47]/30 shadow-xl rounded">
                        <h3 className="text-2xl font-serif text-[#7F6A47] mb-8 text-center">Saç əkimi paketlərimizə daxildir:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={24} className="text-[#7F6A47] flex-shrink-0 mt-1"/>
                                    <div>
                                        <span className="font-bold text-[#3A3A3A]">Prosedur öncəsi konsultasiyalar</span>
                                        <p className="text-sm text-[#3A3A3A]/70 mt-1">Ətraflı müayinə və planlaşdırma</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={24} className="text-[#7F6A47] flex-shrink-0 mt-1"/>
                                    <div>
                                        <span className="font-bold text-[#3A3A3A]">Prosedur öncəsi dermatoloq müayinəsi</span>
                                        <p className="text-sm text-[#3A3A3A]/70 mt-1">Təms təhlil və dərinin qiymətləndirilməsi</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={24} className="text-[#7F6A47] flex-shrink-0 mt-1"/>
                                    <div>
                                        <span className="font-bold text-[#3A3A3A]">Prosedurun özü</span>
                                        <p className="text-sm text-[#3A3A3A]/70 mt-1">Professional komanda ilə təmsənuatın icrası</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={24} className="text-[#7F6A47] flex-shrink-0 mt-1"/>
                                    <div>
                                        <span className="font-bold text-[#3A3A3A]">Prosedur sonrası dərmanlar</span>
                                        <p className="text-sm text-[#3A3A3A]/70 mt-1">Dəriyə qulluq məhsulları və ağrıkəsicilər</p>
                                    </div>
                                </li>
                            </ul>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={24} className="text-[#7F6A47] flex-shrink-0 mt-1"/>
                                    <div>
                                        <span className="font-bold text-[#3A3A3A]">Prosedurdan sonra klinikada müayinələr</span>
                                        <p className="text-sm text-[#3A3A3A]/70 mt-1">Müntəzəm izləmə və nəzarət</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={24} className="text-[#7F6A47] flex-shrink-0 mt-1"/>
                                    <div>
                                        <span className="font-bold text-[#3A3A3A]">Şəxsi koordinator</span>
                                        <p className="text-sm text-[#3A3A3A]/70 mt-1">24/7 dəstək və əlaqə</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={24} className="text-[#7F6A47] flex-shrink-0 mt-1"/>
                                    <div>
                                        <span className="font-bold text-[#3A3A3A]">1 il ərzində dəstək</span>
                                        <p className="text-sm text-[#3A3A3A]/70 mt-1">Prosedurdan sonra tam iliyə izləmə</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={24} className="text-[#7F6A47] flex-shrink-0 mt-1"/>
                                    <div>
                                        <span className="font-bold text-[#3A3A3A]">Fərdiləşdirilmiş paketlər</span>
                                        <p className="text-sm text-[#3A3A3A]/70 mt-1">Şəxsi ehtiyaclarınıza uyğun xidmətlər</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <p className="text-center text-[#3A3A3A]/70 mt-8 italic">Bu paketlər tamamilə fərdiləşdirilə bilər və şəxsi ehtiyaclarınıza uyğun olaraq müxtəlif xidmətlər əlavə edilə bilər.</p>
                    </div>
                </section>

                {/* Qiymətlər */}
                <section id="qiymet" className="mb-20">
                    <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-[#3A3A3A]">Saç əkimi qiymətləri</h2>
                    <p className="text-lg text-[#3A3A3A]/80 mb-10 leading-relaxed">Saç əkimi prosedurunun qiymətləri pasiyentlər üçün prosedurun özü qədər araqlandir. Nəzərə almalıyıq ki, saç əkimi prosedurları siğorta şirkətləri tərəfindən ödənilmir. Pasiyentlər bu prosedurun pulunu öz ciblərindən ödəyirlər və bu qiymətlərə mütəxəssislərin təcrübəsindən başlayaraq istifadə olunan avadanlıqlara qədər bir çox amillər təsir edir.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-white p-8 border-t-4 border-[#3A3A3A] shadow-lg">
                            <h3 className="text-xl font-bold text-[#3A3A3A] mb-4">Qərb ölkələri</h3>
                            <div className="text-4xl font-serif text-[#7F6A47] mb-2">$4,000–$17,000</div>
                            <p className="text-sm text-[#3A3A3A]/70">ABŞ, İngiltərə, Avropa ölkələri</p>
                        </div>
                        <div className="bg-white p-8 border-t-4 border-[#7F6A47] shadow-lg">
                            <h3 className="text-xl font-bold text-[#7F6A47] mb-4">Türkiyə</h3>
                            <div className="text-4xl font-serif text-[#7F6A47] mb-2">$2,500–$6,000</div>
                            <p className="text-sm text-[#3A3A3A]/70">Lider bazar, yüksək təcrübə</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#7F6A47] to-[#6e583d] p-8 border-t-4 border-[#7F6A47] shadow-xl text-white">
                            <h3 className="text-xl font-bold mb-4">Azərbaycan</h3>
                            <div className="text-4xl font-serif mb-2">1,000–4,000 ₼</div>
                            <p className="text-sm opacity-90">Yerli mütəxəssislər + Türk komandası</p>
                        </div>
                    </div>
                    
                    <div className="bg-white p-10 border border-[#7F6A47]/20 shadow-lg rounded">
                        <h3 className="text-2xl font-serif text-[#7F6A47] mb-6">Qərb ölkələrində və Türkiyədə saç əkimi qiymətləri</h3>
                        <p className="text-lg text-[#3A3A3A]/80 leading-relaxed mb-6">Uzun illərdir saç əkimi Qərb ölkələrində və Türkiyədə populyar prosedur olmağa davam edir. Bu prosedurun qiyməti son 10 il ərzində ciddi şəkildə dəyişmişdir. 10 il öncə saç əkimi nadir mütəxəssislər tərəfindən icra olunurdusa, indi bir çox həkim və tibb işçiləri tərəfindən icra olunur. Bu səbəbdən prosedurun qiyməti ciddi şəkildə azalmışdır.</p>
                        <p className="text-lg text-[#3A3A3A]/80 leading-relaxed mb-6">Hal-hazırda prosedurun qiyməti Qərb ölkələrində 4,000–17,000 dollar arasında dəyişir. Türkiyədə isə qiymətlər 2,500–6,000 dollar arasındadır.</p>
                        
                        <h3 className="text-2xl font-serif text-[#7F6A47] mb-6 mt-8">Azərbaycanda saç əkimi qiymətləri</h3>
                        <p className="text-lg text-[#3A3A3A]/80 leading-relaxed mb-6">Azərbaycanda saç əkimi prosedurları son bir neçə ildə populyarlıq qazanıb. Yerli pasiyentlər əvvəllər xaricə üz tutururdularsa, indi yerli mütəxəssislərə müraciət edirlər. Bu prosedurun qiyməti ölkəmizdə 1,000–4,000 manat arasında dəyişir.</p>
                        <div className="bg-[#7F6A47]/10 p-6 rounded border-l-4 border-[#7F6A47]">
                            <p className="text-[#3A3A3A] font-semibold mb-2">⚠️ Nəzərə almaq lazımdır:</p>
                            <p className="text-[#3A3A3A]/80">Keyfiyyətli prosedur üçün pasiyentlər qiymətləri araşdırarkən mütəxəssislərin təcrübəsinə, istifadə olunan avadanlıqların keyfiyyətinə və xidmətlərin siyahısına diqqət yetirsinlər.</p>
                        </div>
                    </div>
                </section>

                <div className="mt-10 flex justify-center">
                    <MagneticButton onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })} className={`px-10 py-4 uppercase tracking-widest text-xs ${sysConfig ? 'bg-green-600 text-black' : 'bg-[#7F6A47] text-[#F8F3E6]'} hover:bg-[#F8F3E6] hover:text-[#3A3A3A]`}>
                        Konsultasiya Al
                    </MagneticButton>
                </div>
            </div>
        </div>
    );
};

export const MenBeardPage: React.FC<MenBeardPageProps> = ({ content, sysConfig }) => {
    return (
      <div className={`min-h-screen ${sysConfig ? 'bg-black text-green-500' : 'bg-[#F8F3E6] text-[#3A3A3A]'}`}>
        {!sysConfig && <AzePatternBackground />}
        
        {/* Split Hero */}
        <div className="flex flex-col md:flex-row h-[80vh]">
            <div className="w-full md:w-1/2 bg-[#3A3A3A] flex items-center justify-center p-12 text-[#F8F3E6]">
                 <div className="max-w-md animate-slide-in-left">
                     <span className="text-[#7F6A47] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">BHI Men's Club</span>
                     <h1 className="text-5xl md:text-7xl font-serif mb-6">{content.title}</h1>
                     <p className="text-xl font-light opacity-80 mb-8">{content.subtitle}</p>
                     <p className="leading-relaxed opacity-60 mb-10">{content.desc}</p>
                     <MagneticButton onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })} className="border border-[#7F6A47] text-[#7F6A47] px-8 py-3 uppercase tracking-widest text-xs hover:bg-[#7F6A47] hover:text-[#F8F3E6]">
                        Konsultasiya
                     </MagneticButton>
                 </div>
            </div>
            <div className="w-full md:w-1/2 relative overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1200&auto=format&fit=crop&fm=webp" 
                    srcSet="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=600&auto=format&fit=crop&fm=webp 600w, https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1000&auto=format&fit=crop&fm=webp 1000w, https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1600&auto=format&fit=crop&fm=webp 1600w"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    width="1600"
                    height="900"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    alt="Beard Transplant"
                />
            </div>
        </div>
  
        {/* Features List */}
        <div className="container mx-auto px-6 py-24">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {content.features.map((feature, idx) => (
                     <div key={idx} className="group border-b border-[#7F6A47]/30 pb-8 hover:border-[#7F6A47] transition-colors">
                         <div className="mb-6 text-[#7F6A47] opacity-50 group-hover:opacity-100 transition-opacity">
                            {idx === 0 ? <Shield size={32} /> : idx === 1 ? <CheckCircle size={32} /> : <Clock size={32} />}
                         </div>
                         <h3 className="text-2xl font-serif mb-4 group-hover:translate-x-2 transition-transform">{feature.title}</h3>
                         <p className="opacity-60 leading-relaxed group-hover:opacity-100 transition-opacity">{feature.desc}</p>
                     </div>
                 ))}
             </div>
        </div>
      </div>
    );
};

export const LongFuePage: React.FC<LongFuePageProps> = ({ content, sysConfig }) => {
  return (
    <div className={`min-h-screen ${sysConfig ? 'bg-black text-green-500' : 'bg-[#1a1a1a] text-[#F8F3E6]'}`}>
      
      {/* Hero */}
      <div className="container mx-auto px-6 pt-32 pb-20">
          <div className="flex items-center gap-4 mb-6">
            <Crown size={24} className="text-[#7F6A47]" />
            <span className="text-[#7F6A47] uppercase tracking-widest text-sm font-bold">Premium Service</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif mb-8 max-w-4xl">{content.title} <span className="text-[#7F6A47] italic">{content.subtitle}</span></h1>
          <p className="text-xl font-light opacity-80 max-w-2xl leading-relaxed mb-16">{content.desc}</p>

          {/* Comparison Table */}
          <div className="bg-[#2a2a2a] p-8 md:p-12 rounded-sm border border-[#7F6A47]/20 max-w-5xl mx-auto shadow-2xl">
              <h3 className="text-3xl font-serif text-center mb-12 text-[#7F6A47]">{content.comparison_title}</h3>
              
              <div className="grid grid-cols-3 gap-4 border-b border-[#7F6A47]/30 pb-4 mb-4 text-[#7F6A47] text-xs uppercase tracking-widest font-bold text-center">
                  <div className="text-left">Xüsusiyyət</div>
                  <div>Standard FUE</div>
                  <div>LONG FUE</div>
              </div>
              
              <div className="space-y-6">
                  {content.comparison.map((row, idx) => (
                      <div key={idx} className="grid grid-cols-3 gap-4 items-center text-center text-sm md:text-base border-b border-white/5 pb-6 last:border-0 last:pb-0 hover:bg-white/5 transition-colors p-2 rounded">
                          <div className="text-left font-bold opacity-80">{row.feature}</div>
                          <div className="opacity-50">{row.standard}</div>
                          <div className="text-[#F8F3E6] font-bold flex items-center justify-center gap-2">
                            {idx === 0 || idx === 3 ? <Star size={14} className="text-[#7F6A47] fill-[#7F6A47]" /> : null}
                            {row.long}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Benefits */}
      <div className="bg-[#F8F3E6] text-[#3A3A3A] py-24 relative overflow-hidden">
          {!sysConfig && <AzePatternBackground />}
          <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
              {content.benefits.map((item, idx) => (
                  <div key={idx} className="text-center p-8 border border-[#7F6A47]/20 hover:bg-white/80 transition-all duration-500 bg-white/40 backdrop-blur-sm">
                      <div className="w-16 h-16 mx-auto mb-6 bg-[#7F6A47] text-[#F8F3E6] flex items-center justify-center rounded-full text-2xl font-serif">
                          {idx + 1}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="opacity-70">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export const HairlineDesignPage: React.FC<HairlinePageProps> = ({ content, sysConfig }) => {
  return (
     <div className={`min-h-screen ${sysConfig ? 'bg-black text-green-500' : 'bg-[#F8F3E6] text-[#3A3A3A]'}`}>
        
        {/* Dark Artistic Hero */}
        <div className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-[#3A3A3A]">
             <div className="absolute inset-0 z-0">
                 {/* Abstract Fibonacci Spiral SVG Background */}
                 <svg className="absolute top-0 right-0 h-full opacity-20" viewBox="0 0 1000 1000">
                     <path fill="none" stroke="#7F6A47" strokeWidth="2" d="M500,500 Q750,500 750,750 T500,1000 T250,750 T500,500" />
                     <circle cx="500" cy="500" r="400" stroke="#7F6A47" strokeWidth="1" fill="none" opacity="0.3"/>
                     <circle cx="500" cy="500" r="250" stroke="#7F6A47" strokeWidth="1" fill="none" opacity="0.5"/>
                     <line x1="100" y1="500" x2="900" y2="500" stroke="#7F6A47" strokeWidth="1" opacity="0.3" />
                     <line x1="500" y1="100" x2="500" y2="900" stroke="#7F6A47" strokeWidth="1" opacity="0.3" />
                 </svg>
             </div>

             <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div className="order-2 lg:order-1">
                     <div className="inline-block p-4 border border-[#7F6A47] mb-8">
                         <ScanFace size={40} className="text-[#7F6A47]" />
                     </div>
                     <h1 className="text-5xl lg:text-8xl font-serif mb-6 text-[#F8F3E6]">{content.title}</h1>
                     <p className="text-xl font-light text-[#F8F3E6]/80 leading-relaxed mb-8">{content.desc}</p>
                     
                     <div className="bg-[#7F6A47]/10 border border-[#7F6A47] text-[#F8F3E6] p-8 mt-8 relative overflow-hidden">
                         <div className="absolute top-0 right-0 text-[#F8F3E6] opacity-10 text-9xl font-serif font-black leading-none">φ</div>
                         <h3 className="text-2xl font-serif text-[#7F6A47] mb-2">{content.golden_ratio_title}</h3>
                         <p className="text-sm text-[#F8F3E6]/80 leading-relaxed relative z-10">{content.golden_ratio_desc}</p>
                     </div>
                 </div>
                 
                 <div className="order-1 lg:order-2 relative">
                            <img 
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop&fm=webp" 
                                srcSet="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop&fm=webp 600w, https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&fm=webp 1000w, https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop&fm=webp 1600w"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                width="1200"
                                height="600"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-[600px] object-cover grayscale opacity-60"
                                alt="Face Portrait"
                            />
                     <div className="absolute inset-0 border-[20px] border-[#7F6A47]/20"></div>
                     {/* Overlay Guidelines */}
                     <div className="absolute top-1/3 left-0 w-full h-[1px] bg-[#7F6A47] opacity-30"></div>
                     <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#7F6A47] opacity-30"></div>
                     <div className="absolute top-2/3 left-0 w-full h-[1px] bg-[#7F6A47] opacity-30"></div>
                     <div className="absolute top-0 left-1/2 h-full w-[1px] bg-[#7F6A47] opacity-30"></div>
                 </div>
             </div>
        </div>

        {/* Steps */}
        <div className="bg-[#3A3A3A] text-[#F8F3E6] py-24">
             <div className="container mx-auto px-6">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {content.steps.map((step, idx) => (
                         <div key={idx} className="text-center group">
                              <div className="w-20 h-20 mx-auto mb-6 border border-[#7F6A47] rounded-full flex items-center justify-center group-hover:bg-[#7F6A47] group-hover:text-white transition-all duration-500">
                                   {idx === 0 ? <ScanFace size={32}/> : idx === 1 ? <PencilRuler size={32}/> : <CheckCircle size={32}/>}
                              </div>
                              <h4 className="text-xl font-serif mb-4">{step.title}</h4>
                              <p className="opacity-60 text-sm max-w-xs mx-auto">{step.desc}</p>
                         </div>
                     ))}
                 </div>
             </div>
        </div>

     </div>
  );
};

export const WomenHairPage: React.FC<WomenHairPageProps> = ({ content, sysConfig }) => {
    return (
        <div className={`min-h-screen ${sysConfig ? 'bg-black text-green-500' : 'bg-[#F8F3E6] text-[#3A3A3A]'}`}>
            {/* Dark Hero with Light Overlay */}
            <div className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#3A3A3A]">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=1200&auto=format&fit=crop&fm=webp" srcSet="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=600&auto=format&fit=crop&fm=webp 600w, https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=1000&auto=format&fit=crop&fm=webp 1000w, https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=1600&auto=format&fit=crop&fm=webp 1600w" sizes="(max-width: 768px) 100vw, 100vw" width="1600" height="900" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-40" alt="Woman Hair"/>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#3A3A3A]/80 to-[#3A3A3A]/60"></div>
                </div>
                <div className="relative z-10 text-center max-w-3xl px-6 animate-fade-in-up">
                    <h1 className="text-5xl lg:text-7xl font-serif mb-6 text-[#F8F3E6]">{content.title}</h1>
                    <p className="text-xl lg:text-2xl font-light italic text-[#7F6A47] mb-8">{content.subtitle}</p>
                    <div className="w-24 h-[1px] bg-[#7F6A47] mx-auto"></div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-24">
                 <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto mb-20">{content.desc}</p>

                 {/* Features */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                     {content.features.map((item, idx) => (
                         <div key={idx} className="bg-white p-10 shadow-lg border-t-4 border-[#7F6A47] hover:-translate-y-2 transition-transform duration-300">
                             <div className="text-[#7F6A47] mb-6">
                                {idx === 0 ? <Heart size={32}/> : idx === 1 ? <Crown size={32}/> : <CheckCircle size={32}/>}
                             </div>
                             <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                             <p className="opacity-70 leading-relaxed">{item.desc}</p>
                         </div>
                     ))}
                 </div>

                 {/* Process Flow */}
                 <div className="bg-[#3A3A3A] text-[#F8F3E6] p-12 lg:p-20 rounded-sm">
                     <h2 className="text-4xl font-serif text-center mb-16">{content.process_title}</h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                         {content.process.map((step, idx) => (
                             <div key={idx} className="relative">
                                 <div className="text-6xl font-serif text-[#7F6A47] opacity-20 absolute -top-4 left-1/2 -translate-x-1/2 select-none">0{idx+1}</div>
                                 <h4 className="text-xl font-bold mb-2 relative z-10">{step.time}</h4>
                                 <h5 className="text-lg text-[#7F6A47] mb-3">{step.title}</h5>
                                 <p className="opacity-70 text-sm">{step.desc}</p>
                             </div>
                         ))}
                     </div>
                 </div>
            </div>
        </div>
    );
};

export const EyebrowPage: React.FC<EyebrowPageProps> = ({ content, sysConfig }) => {
    return (
        <div className={`min-h-screen ${sysConfig ? 'bg-black text-green-500' : 'bg-[#F8F3E6] text-[#3A3A3A]'}`}>
            {/* Dark Hero Section */}
            <div className="relative h-[60vh] bg-[#3A3A3A] overflow-hidden flex items-center">
                <div className="absolute inset-0 opacity-30">
                    <img src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1200&auto=format&fit=crop&fm=webp" srcSet="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=600&auto=format&fit=crop&fm=webp 600w, https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000&auto=format&fit=crop&fm=webp 1000w, https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1600&auto=format&fit=crop&fm=webp 1600w" sizes="(max-width: 768px) 100vw, 100vw" width="1600" height="900" loading="lazy" decoding="async" className="w-full h-full object-cover" alt="Eyebrow"/>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                     <div className="max-w-3xl">
                         <div className="flex items-center gap-3 text-[#7F6A47] mb-4">
                             <Eye size={24}/>
                             <span className="uppercase tracking-widest text-xs font-bold">Aesthetic Focus</span>
                         </div>
                         <h1 className="text-5xl lg:text-7xl font-serif mb-6 text-[#F8F3E6]">{content.title}</h1>
                         <p className="text-2xl font-light mb-8 text-[#F8F3E6]/80">{content.subtitle}</p>
                     </div>
                </div>
            </div>
            
            <div className="container mx-auto px-6 py-24">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <p className="text-lg leading-relaxed mb-12 opacity-70">{content.desc}</p>
                        <MagneticButton onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#3A3A3A] text-[#F8F3E6] px-10 py-4 uppercase tracking-widest text-xs hover:bg-[#7F6A47]">
                            Konsultasiya
                        </MagneticButton>
                    </div>
                    
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop&fm=webp" srcSet="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=400&auto=format&fit=crop&fm=webp 400w, https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop&fm=webp 800w" sizes="(max-width: 768px) 100vw, 50vw" width="800" height="256" loading="lazy" decoding="async" className="w-full h-64 object-cover rounded-tr-[50px] shadow-xl" alt="Eyebrow 1"/>
                        <img src="https://images.unsplash.com/photo-1512413316925-fd52bd015e0a?q=80&w=800&auto=format&fit=crop&fm=webp" srcSet="https://images.unsplash.com/photo-1512413316925-fd52bd015e0a?q=80&w=400&auto=format&fit=crop&fm=webp 400w, https://images.unsplash.com/photo-1512413316925-fd52bd015e0a?q=80&w=800&auto=format&fit=crop&fm=webp 800w" sizes="(max-width: 768px) 100vw, 50vw" width="800" height="256" loading="lazy" decoding="async" className="w-full h-64 object-cover rounded-bl-[50px] shadow-xl mt-12" alt="Eyebrow 2"/>
                    </div>
                </div>
            </div>

            <div className="bg-[#3A3A3A] text-[#F8F3E6] py-24">
                 <div className="container mx-auto px-6">
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                         {content.steps.map((step, idx) => (
                             <div key={idx} className="flex flex-col items-center text-center group">
                                  <div className="w-16 h-16 rounded-full border-2 border-[#7F6A47] flex items-center justify-center mb-6 group-hover:bg-[#7F6A47] transition-colors">
                                      {idx === 0 ? <PencilRuler size={24}/> : idx === 1 ? <Activity size={24}/> : <CheckCircle size={24}/>}
                                  </div>
                                  <h3 className="text-xl font-serif mb-3">{step.title}</h3>
                                  <p className="opacity-60 leading-relaxed">{step.desc}</p>
                             </div>
                         ))}
                     </div>
                 </div>
            </div>
        </div>
    );
};

export const AnesthesiaPage: React.FC<AnesthesiaPageProps> = ({ content, sysConfig }) => {
    return (
        <div className={`min-h-screen ${sysConfig ? 'bg-black text-green-500' : 'bg-[#fff] text-[#3A3A3A]'}`}>
             <div className="bg-[#3A3A3A] text-[#F8F3E6] py-32 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
                 <div className="container mx-auto px-6 relative z-10 text-center">
                     <div className="inline-block p-4 bg-[#7F6A47]/20 rounded-full mb-8 animate-pulse">
                         <Activity size={40} className="text-[#7F6A47]" />
                     </div>
                     <h1 className="text-4xl lg:text-6xl font-serif mb-6">{content.title}</h1>
                     <p className="text-xl opacity-80 max-w-2xl mx-auto">{content.subtitle}</p>
                 </div>
             </div>

             <div className="container mx-auto px-6 py-24 -mt-16">
                 <div className="bg-[#F8F3E6] p-10 shadow-2xl max-w-4xl mx-auto mb-20 text-center leading-relaxed text-lg">
                     {content.desc}
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {content.methods.map((method, idx) => (
                         <div key={idx} className="p-8 border border-[#3A3A3A]/10 hover:border-[#7F6A47] transition-colors rounded-sm group">
                             <div className="mb-6 text-[#7F6A47] opacity-60 group-hover:opacity-100 transition-opacity">
                                 {idx === 0 ? <Syringe size={32} className="rotate-45"/> : idx === 1 ? <Clock size={32}/> : <Shield size={32}/>}
                             </div>
                             <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                             <p className="text-[#3A3A3A]/70">{method.desc}</p>
                         </div>
                     ))}
                 </div>
             </div>
        </div>
    );
};

export const PrpPage: React.FC<PrpPageProps> = ({ content, sysConfig }) => {
    return (
        <div className={`min-h-screen ${sysConfig ? 'bg-black text-green-500' : 'bg-[#F8F3E6] text-[#3A3A3A]'}`}>
            {/* Hero */}
            <div className="relative h-[60vh] bg-[#3A3A3A] text-[#F8F3E6] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
                <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop&fm=webp" srcSet="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=600&auto=format&fit=crop&fm=webp 600w, https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1000&auto=format&fit=crop&fm=webp 1000w, https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1600&auto=format&fit=crop&fm=webp 1600w" sizes="(max-width: 768px) 100vw, 100vw" width="1600" height="900" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale sepia" alt="Blood Cells"/>
                <div className="container mx-auto px-6 relative z-20">
                     <span className="text-[#7F6A47] font-bold uppercase tracking-widest text-xs mb-4 block">Regenerative Medicine</span>
                     <h1 className="text-5xl lg:text-7xl font-serif mb-6">{content.title}</h1>
                     <p className="text-xl font-light text-[#F8F3E6]/80 max-w-2xl">{content.subtitle}</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-24">
                <div className="flex flex-col lg:flex-row gap-16 mb-24">
                     <div className="lg:w-1/2">
                         <h2 className="text-3xl font-serif mb-6 text-[#3A3A3A]">Why PRP?</h2>
                         <p className="text-lg leading-relaxed opacity-80 mb-8">{content.desc}</p>
                         <div className="space-y-4">
                             {content.benefits.map((b, idx) => (
                                 <div key={idx} className="flex items-start gap-4">
                                     <div className="mt-1"><Droplets className="text-[#7F6A47]" size={20}/></div>
                                     <div>
                                         <h4 className="font-bold text-[#3A3A3A]">{b.title}</h4>
                                         <p className="text-sm opacity-70">{b.desc}</p>
                                     </div>
                                 </div>
                             ))}
                         </div>
                     </div>
                     <div className="lg:w-1/2 bg-white p-10 shadow-2xl border-t-8 border-[#7F6A47] rounded-sm">
                         <h3 className="text-2xl font-serif mb-8 text-center">{content.process_title}</h3>
                         <div className="space-y-8">
                             {content.process_steps.map((step, idx) => (
                                 <div key={idx} className="flex items-center gap-6">
                                     <div className="w-12 h-12 rounded-full bg-[#7F6A47] text-[#F8F3E6] flex items-center justify-center font-bold text-xl shadow-lg shadow-[#7F6A47]/30">
                                         {idx + 1}
                                     </div>
                                     <div>
                                         <h4 className="font-bold text-lg">{step.title}</h4>
                                         <p className="text-sm opacity-60">{step.desc}</p>
                                     </div>
                                 </div>
                             ))}
                         </div>
                     </div>
                </div>
            </div>
        </div>
    );
}

export const MesotherapyPage: React.FC<MesoPageProps> = ({ content, sysConfig }) => {
    return (
        <div className={`min-h-screen ${sysConfig ? 'bg-black text-green-500' : 'bg-[#F8F3E6] text-[#3A3A3A]'}`}>
             <div className="container mx-auto px-6 py-32 text-center">
                 <div className="inline-block p-4 bg-[#7F6A47]/10 rounded-full mb-8 text-[#7F6A47]">
                     <Sparkles size={40} />
                 </div>
                 <h1 className="text-5xl lg:text-7xl font-serif mb-4 text-[#3A3A3A]">{content.title}</h1>
                 <p className="text-xl text-[#7F6A47] mb-12">{content.subtitle}</p>
                 <p className="max-w-3xl mx-auto text-lg leading-relaxed text-[#3A3A3A]/80 mb-20">{content.desc}</p>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     {/* Cocktail Card */}
                     <div className="bg-white p-10 shadow-xl border border-[#7F6A47]/20 rounded-sm relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-10 opacity-5"><TestTube size={100} className="text-[#7F6A47]"/></div>
                         <h3 className="text-2xl font-serif mb-8 text-[#3A3A3A] text-left">{content.cocktail_title}</h3>
                         <ul className="space-y-4 text-left">
                             {content.ingredients.map((ing, idx) => (
                                 <li key={idx} className="flex items-center gap-3 text-[#3A3A3A] font-medium">
                                     <div className="w-2 h-2 bg-[#7F6A47] rounded-full"></div>
                                     {ing}
                                 </li>
                             ))}
                         </ul>
                     </div>

                     {/* Effects */}
                     <div className="grid grid-cols-1 gap-6">
                         {content.effects.map((ef, idx) => (
                             <div key={idx} className="bg-[#3A3A3A] p-6 rounded-sm flex items-center gap-4 text-left">
                                 <div className="p-3 bg-[#7F6A47] rounded-full text-[#F8F3E6] shadow-sm">
                                     <Zap size={24} />
                                 </div>
                                 <div>
                                     <h4 className="font-bold text-[#F8F3E6]">{ef.title}</h4>
                                     <p className="text-sm text-[#F8F3E6]/70">{ef.desc}</p>
                                 </div>
                             </div>
                         ))}
                     </div>
                 </div>
             </div>
        </div>
    );
}

export const MedicalPage: React.FC<MedicalPageProps> = ({ content, sysConfig }) => {
    return (
        <div className={`min-h-screen ${sysConfig ? 'bg-black text-green-500' : 'bg-[#fff] text-[#3A3A3A]'}`}>
            {/* Clinical Header */}
            <div className="bg-[#3A3A3A] border-b border-[#7F6A47]/20 py-32 text-[#F8F3E6]">
                 <div className="container mx-auto px-6 text-center">
                     <h1 className="text-5xl font-serif mb-4">{content.title}</h1>
                     <div className="flex items-center justify-center gap-2 text-[#7F6A47] font-medium mb-8">
                         <Stethoscope size={20}/>
                         <span>{content.subtitle}</span>
                     </div>
                     <p className="max-w-2xl mx-auto text-[#F8F3E6]/70 leading-relaxed">{content.desc}</p>
                 </div>
            </div>

            <div className="container mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {content.treatments.map((t, idx) => (
                        <div key={idx} className="border border-[#3A3A3A]/10 p-10 hover:shadow-xl hover:border-[#7F6A47] transition-all duration-300 bg-white">
                             <div className="mb-6 text-[#7F6A47]">
                                 {idx === 0 ? <Pill size={40}/> : idx === 1 ? <Microscope size={40}/> : <Activity size={40}/>}
                             </div>
                             <h3 className="text-xl font-bold mb-4 text-[#3A3A3A]">{t.title}</h3>
                             <p className="text-[#3A3A3A]/60 leading-relaxed">{t.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-6 bg-[#F8F3E6] border border-[#7F6A47]/20 text-[#3A3A3A]/70 text-sm text-center rounded-sm">
                    {content.disclaimer}
                </div>
            </div>
        </div>
    );
}
