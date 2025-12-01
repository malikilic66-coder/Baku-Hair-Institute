

import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Instagram, Facebook, Menu, Shield, Award, ArrowRight, CalendarCheck, Upload } from 'lucide-react';
import { content } from './constants';
import { ScrollProgress, CustomCursor, MagneticButton, TiltCard, Preloader, PageTransitionLoader, Dropdown, Accordion, DoctorCard, WhyUsCard, AzePatternBackground } from './components/ui';
import { MenHairPage, MenBeardPage, LongFuePage, HairlineDesignPage, WomenHairPage, EyebrowPage, AnesthesiaPage, PrpPage, MesotherapyPage, MedicalPage } from './components/Pages';

// --- Custom Hooks ---

const useSecretAccess = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    let tick = 0;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Enter") tick = (tick === 0 || tick === 6) ? tick + 1 : 1;
      else if (tick > 0 && tick < 6) tick++;
      else tick = 0;
      if (tick === 7) { setActive(s => !s); tick = 0; }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);
  return active;
};

// --- Assets ---
// Single Premium Banner Image
const heroBanner = "https://images.unsplash.com/photo-1539650116455-29cb5563cc41?q=80&w=2574&auto=format&fit=crop"; 

// --- Home View Component ---
const HomeView = ({ t, theme, sysConfig }: { t: any, theme: any, sysConfig: boolean }) => (
  <>
      {/* --- HERO BANNER SECTION --- */}
      <header className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-[#3A3A3A]">
        {/* Background: Static Banner with subtle zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
           <img 
            src={heroBanner} 
            className={`w-full h-full object-cover transition-transform duration-[10s] ease-out scale-110 hover:scale-100 ${sysConfig ? 'grayscale invert opacity-30' : ''}`} 
            alt="Baku Hair Institute Premium Banner"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent opacity-90"></div>
        </div>

        <div className="relative z-30 container mx-auto px-6 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">
            
            {/* Content */}
            <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in-up pt-20">
               <h1 className={`text-5xl lg:text-8xl font-serif text-[#F8F3E6] mb-8 leading-tight drop-shadow-2xl`}>
                 <span className="block animate-slide-in-left delay-100">{t.hero.title}</span> 
                 <span className={`italic animate-slide-in-left delay-300 ${sysConfig ? 'text-green-500 glitch' : 'text-[#7F6A47]'}`} data-text={t.hero.subtitle}>{t.hero.subtitle}</span>
               </h1>
               
               <p className="text-[#F8F3E6]/80 font-light text-lg max-w-xl mb-12 leading-relaxed border-l-2 border-[#7F6A47]/30 pl-6">
                 {t.hero.desc}
               </p>
               
               <div className="flex flex-col sm:flex-row gap-6">
                  <MagneticButton 
                    onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })} 
                    className={`w-fit px-10 py-4 bg-[#7F6A47] text-[#F8F3E6] font-bold uppercase tracking-widest text-xs shadow-xl shadow-[#7F6A47]/20 hover:shadow-[#7F6A47]/40 hover:bg-[#F8F3E6] hover:text-[#3A3A3A] ${sysConfig ? 'bg-green-600 shadow-green-500/50 hover:bg-black hover:text-green-500 border border-green-500' : ''}`}
                  >
                    {t.hero.btn_consult}
                  </MagneticButton>
                  <MagneticButton 
                    className={`w-fit px-10 py-4 border border-[#F8F3E6]/20 text-[#F8F3E6] font-bold uppercase tracking-widest text-xs hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-colors flex items-center gap-2`}
                  >
                     <Phone size={16} />
                    {t.hero.btn_whatsapp}
                  </MagneticButton>
               </div>
            </div>

            {/* Right side - Doctor photo with 9 Years badge */}
            <div className="lg:col-span-5 hidden lg:flex items-center justify-center h-full relative">
                <div className="relative group view-cursor">
                   <img 
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop" 
                      className="w-[400px] h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                      alt="Həkim"
                   />
                   <div className="absolute -bottom-8 -right-8 bg-[#7F6A47] text-[#F8F3E6] p-6 shadow-2xl">
                      <div className="text-4xl font-serif font-bold text-center">{t.hero.doctor_exp || t.hero.exp}</div>
                   </div>
                </div>
            </div>

          </div>
        </div>
      </header>

      {/* --- JOINT PROJECT (AZ + TR) --- */}
      <section className={`py-32 relative overflow-hidden ${sysConfig ? 'bg-gray-900 text-white' : 'bg-[#F8F3E6]'}`}>
        {!sysConfig && <AzePatternBackground />}
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Main Heading */}
          <div className="text-center mb-16">
             <h2 className={`text-4xl lg:text-5xl font-serif mb-6 ${theme.text}`}>{t.joint_project.title}</h2>
             <p className={`text-lg leading-relaxed max-w-4xl mx-auto ${sysConfig ? 'text-green-700' : 'text-[#3A3A3A]/80'}`}>
               {t.joint_project.desc}
             </p>
          </div>

          {/* Advantages Title */}
          {t.joint_project.advantages_title && (
            <h3 className={`text-2xl font-serif text-center mb-12 ${theme.gold}`}>
              {t.joint_project.advantages_title}
            </h3>
          )}

          {/* 3 Advantages Cards */}
          {t.joint_project.advantages && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {t.joint_project.advantages.map((advantage: any, idx: number) => (
                <TiltCard key={idx} className={`p-8 bg-white border border-[#7F6A47]/20 shadow-lg hover:shadow-2xl transition-all duration-500 ${sysConfig ? 'bg-gray-800 border-green-900/30' : ''}`}>
                  <h4 className={`text-xl font-bold mb-4 ${theme.text}`}>{advantage.title}</h4>
                  <p className={`leading-relaxed ${sysConfig ? 'text-green-700' : 'text-[#3A3A3A]/70'}`}>{advantage.desc}</p>
                </TiltCard>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className={`py-32 ${sysConfig ? 'bg-black' : 'bg-[#3A3A3A] text-[#F8F3E6]'}`}>
         <div className="container mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-4xl lg:text-5xl font-serif text-[#F8F3E6]">{t.services.title}</h2>
               <div className="w-24 h-[1px] bg-[#7F6A47] mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {/* Saç Əkimi */}
               <MagneticButton 
                  onClick={() => handleNavigation('men-hair')} 
                  className={`interactive group relative p-10 border border-[#F8F3E6]/10 bg-[#F8F3E6]/[0.02] hover:bg-[#F8F3E6]/[0.08] transition-all duration-500 overflow-hidden cursor-pointer ${sysConfig ? 'hover:bg-green-900/10 border-green-900/30' : ''}`}
               >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                     <ArrowRight className={theme.gold} />
                  </div>
                  <span className={`text-5xl font-serif block mb-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500 ${theme.gold}`}>01</span>
                  <h3 className="text-xl font-serif mb-4 text-[#F8F3E6]">Saç Əkimi</h3>
                  <p className="text-[#F8F3E6]/60 text-sm font-light leading-relaxed group-hover:text-[#F8F3E6] transition-colors">FUE və DHI metodları ilə maksimum sıxlıq.</p>
               </MagneticButton>

               {/* Kaş Əkimi */}
               <MagneticButton 
                  onClick={() => handleNavigation('women-eyebrow')} 
                  className={`interactive group relative p-10 border border-[#F8F3E6]/10 bg-[#F8F3E6]/[0.02] hover:bg-[#F8F3E6]/[0.08] transition-all duration-500 overflow-hidden cursor-pointer ${sysConfig ? 'hover:bg-green-900/10 border-green-900/30' : ''}`}
               >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                     <ArrowRight className={theme.gold} />
                  </div>
                  <span className={`text-5xl font-serif block mb-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500 ${theme.gold}`}>02</span>
                  <h3 className="text-xl font-serif mb-4 text-[#F8F3E6]">Kaş Əkimi</h3>
                  <p className="text-[#F8F3E6]/60 text-sm font-light leading-relaxed group-hover:text-[#F8F3E6] transition-colors">Təbii baxışlar üçün estetik toxunuş.</p>
               </MagneticButton>

               {/* Sakal Əkimi */}
               <MagneticButton 
                  onClick={() => handleNavigation('men-beard')} 
                  className={`interactive group relative p-10 border border-[#F8F3E6]/10 bg-[#F8F3E6]/[0.02] hover:bg-[#F8F3E6]/[0.08] transition-all duration-500 overflow-hidden cursor-pointer ${sysConfig ? 'hover:bg-green-900/10 border-green-900/30' : ''}`}
               >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                     <ArrowRight className={theme.gold} />
                  </div>
                  <span className={`text-5xl font-serif block mb-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500 ${theme.gold}`}>03</span>
                  <h3 className="text-xl font-serif mb-4 text-[#F8F3E6]">Sakal Əkimi</h3>
                  <p className="text-[#F8F3E6]/60 text-sm font-light leading-relaxed group-hover:text-[#F8F3E6] transition-colors">Üz cizgilərini tamamlayan bərpa.</p>
               </MagneticButton>

               {/* FUE Yöntəmi */}
               <MagneticButton 
                  onClick={() => handleNavigation('men-hair')} 
                  className={`interactive group relative p-10 border border-[#F8F3E6]/10 bg-[#F8F3E6]/[0.02] hover:bg-[#F8F3E6]/[0.08] transition-all duration-500 overflow-hidden cursor-pointer ${sysConfig ? 'hover:bg-green-900/10 border-green-900/30' : ''}`}
               >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                     <ArrowRight className={theme.gold} />
                  </div>
                  <span className={`text-5xl font-serif block mb-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500 ${theme.gold}`}>04</span>
                  <h3 className="text-xl font-serif mb-4 text-[#F8F3E6]">FUE Yöntəmi</h3>
                  <p className="text-[#F8F3E6]/60 text-sm font-light leading-relaxed group-hover:text-[#F8F3E6] transition-colors">İzsiz, ağrısız və sürətli sağalma.</p>
               </MagneticButton>
            </div>
         </div>
      </section>

      {/* --- LONG FUE SPECIAL --- */}
      <section className="py-32 relative overflow-hidden bg-[#F8F3E6]">
         {!sysConfig && <AzePatternBackground />}
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               {/* Left: Smiling couple photo */}
               <div className="lg:w-1/2 order-2 lg:order-1 view-cursor">
                  <div className="relative group">
                     <div className="absolute -inset-4 border-2 border-[#7F6A47] hidden lg:block transition-all duration-500 group-hover:inset-0"></div>
                     <div className="relative z-10 w-full h-[500px] overflow-hidden shadow-2xl">
                        <img 
                           src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000" 
                           className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" 
                           alt="Happy Couple"
                        />
                     </div>
                  </div>
               </div>
               
               {/* Right: Content */}
               <div className="lg:w-1/2 order-1 lg:order-2">
                  <span className="bg-[#7F6A47] text-[#F8F3E6] px-4 py-1 text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">{t.long_fue.badge}</span>
                  <h2 className="text-4xl lg:text-6xl font-serif mb-4 text-[#3A3A3A]">{t.long_fue.title}</h2>
                  {t.long_fue.subtitle && <h3 className="text-xl mb-8 font-light italic text-[#7F6A47]">{t.long_fue.subtitle}</h3>}
                  <p className="text-[#3A3A3A]/70 font-light text-lg leading-relaxed mb-10">{t.long_fue.desc}</p>
                  
                  {/* 3 Advantages */}
                  {t.long_fue.features_title && (
                     <h4 className="text-2xl font-serif text-[#7F6A47] mb-6">{t.long_fue.features_title}</h4>
                  )}
                  
                  {Array.isArray(t.long_fue.features) && t.long_fue.features.length > 0 && (
                     <div className="space-y-6 mb-10">
                        {t.long_fue.features.map((feature: any, idx: number) => (
                           <div key={idx} className="p-6 bg-white border border-[#7F6A47]/20 shadow-md hover:shadow-xl transition-shadow">
                              <h5 className="font-bold text-[#3A3A3A] mb-2">
                                 {typeof feature === 'string' ? feature : feature.title}
                              </h5>
                              {typeof feature === 'object' && feature.desc && (
                                 <p className="text-sm text-[#3A3A3A]/70 leading-relaxed">{feature.desc}</p>
                              )}
                           </div>
                        ))}
                     </div>
                  )}

                  <MagneticButton onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center gap-3 text-[#3A3A3A] font-bold uppercase text-xs tracking-widest hover:text-[#7F6A47] transition-colors border-b border-[#3A3A3A] pb-1 hover:border-[#7F6A47]">
                     Məlumat Al <ArrowRight size={16}/>
                  </MagneticButton>
               </div>
            </div>
         </div>
      </section>

      {/* --- DOCTORS --- */}
      <section className={`py-32 ${sysConfig ? 'bg-black' : 'bg-[#3A3A3A]'}`}>
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                 <h2 className="text-4xl lg:text-5xl font-serif text-[#F8F3E6]">{t.doctors.title}</h2>
                 <div className="w-24 h-[1px] bg-[#7F6A47] mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {t.doctors.items.map((doc: any, idx: number) => (
                    <div key={idx} className="group relative overflow-hidden bg-[#F8F3E6]/5 border border-[#F8F3E6]/10 hover:bg-[#F8F3E6]/10 transition-all duration-500">
                        <div className="p-8">
                           <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#7F6A47]">
                              <img src={doc.image} alt={doc.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                           </div>
                           <div className={`text-[10px] uppercase tracking-widest mb-2 text-center ${sysConfig ? 'text-green-500' : 'text-[#7F6A47]'}`}>{doc.specialty}</div>
                           <h3 className="text-2xl font-serif text-[#F8F3E6] mb-2 text-center">{doc.name}</h3>
                           <p className="text-sm text-[#F8F3E6]/60 mb-4 text-center">{doc.title}</p>
                           <div className={`h-[1px] w-full bg-[#7F6A47] mb-6`}></div>
                           {doc.bio && (
                              <p className="text-sm text-[#F8F3E6]/80 leading-relaxed text-center">
                                 {doc.bio}
                              </p>
                           )}
                           <div className="mt-4 flex items-center justify-center gap-2 text-[#F8F3E6]/80 text-xs">
                               <span className="text-[#7F6A47]">✓</span>
                               <span>{doc.exp}</span>
                           </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- WHY US --- */}
      <section className={`py-32 relative overflow-hidden ${theme.bg}`}>
        {!sysConfig && <AzePatternBackground />}
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
               <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${theme.gold}`}>{t.why_us.title}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-r border-[#7F6A47]/10">
                {t.why_us.items.map((item: any, idx: number) => (
                    <WhyUsCard key={idx} {...item} specialMode={sysConfig} idx={idx} />
                ))}
            </div>

            {/* Patient Testimonials */}
            {t.why_us.testimonials && (
               <div className="mt-24">
                  <h3 className={`text-3xl font-serif text-center mb-12 ${theme.text}`}>Xəstə Rəyləri</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {t.why_us.testimonials.map((testimonial: any, idx: number) => (
                        <div key={idx} className={`p-6 bg-white border border-[#7F6A47]/20 shadow-lg hover:shadow-2xl transition-all ${sysConfig ? 'bg-gray-800 border-green-900/30' : ''}`}>
                           <div className="flex gap-1 mb-4">
                              {Array.from({ length: testimonial.rating }).map((_, i) => (
                                 <span key={i} className="text-[#7F6A47]">★</span>
                              ))}
                           </div>
                           <p className={`text-sm italic mb-4 leading-relaxed ${sysConfig ? 'text-green-700' : 'text-[#3A3A3A]/80'}`}>
                              "{testimonial.comment}"
                           </p>
                           <p className={`text-xs font-bold ${theme.gold}`}>— {testimonial.name}</p>
                        </div>
                     ))}
                  </div>
               </div>
            )}

            {/* Before & After Photos */}
            {t.why_us.before_after && (
               <div className="mt-24">
                  <h3 className={`text-3xl font-serif text-center mb-12 ${theme.text}`}>Öncə və Sonra</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {t.why_us.before_after.map((item: any, idx: number) => (
                        <div key={idx} className={`overflow-hidden shadow-xl border border-[#7F6A47]/20 hover:shadow-2xl transition-all ${sysConfig ? 'border-green-900/30' : ''}`}>
                           <div className="grid grid-cols-2 h-64">
                              <div className="relative">
                                 <img src={item.before} className="w-full h-full object-cover grayscale" alt="Before" />
                                 <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 uppercase">Öncə</div>
                              </div>
                              <div className="relative">
                                 <img src={item.after} className="w-full h-full object-cover" alt="After" />
                                 <div className="absolute top-2 right-2 bg-[#7F6A47] text-white text-xs px-2 py-1 uppercase">Sonra</div>
                              </div>
                           </div>
                           <div className={`p-4 text-center font-bold text-sm ${theme.text} ${sysConfig ? 'bg-gray-800' : 'bg-white'}`}>
                              {item.desc}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            )}
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className={`py-32 ${sysConfig ? 'bg-gray-900' : 'bg-[#F0EBD9]/30'}`}>
         <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-20">
               <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${theme.gold}`}>{t.faq.subtitle}</span>
               <h2 className={`text-4xl font-serif mt-4 ${theme.text}`}>{t.faq.title}</h2>
            </div>
            <div className="space-y-4">
               {t.faq.items.map((item: any, idx: number) => (
                  <Accordion key={idx} question={item.q} answer={item.a} specialMode={sysConfig} />
               ))}
            </div>
         </div>
      </section>
  </>
);

// --- Main Application ---

export default function App() {
  const [lang, setLang] = useState<'az' | 'ru'>('az');
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'men-hair' | 'men-beard' | 'long-fue' | 'hairline-design' | 'women-hair' | 'women-eyebrow' | 'anesthesia' | 'prp' | 'mesotherapy' | 'medical'>('home');
  const [isNavigating, setIsNavigating] = useState(false); // Navigation state for Loader
  const sysConfig = useSecretAccess();
  const t = content[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Handle Navigation with Transition Loader ---
  const handleNavigation = (view: typeof currentView) => {
    if (view === currentView) return;
    
    setIsNavigating(true); // Trigger entry animation

    // Wait for the loader to cover the screen (approx 700ms based on CSS duration)
    setTimeout(() => {
        setCurrentView(view);
        window.scrollTo(0, 0);
        
        // Small buffer to ensure rendering is ready before revealing
        setTimeout(() => {
            setIsNavigating(false); // Trigger exit animation
        }, 100);
    }, 800);
  };

  // Identify pages with LIGHT background heroes (where nav text needs to be DARK initially)
  const lightHeroPages = ['women-hair', 'women-eyebrow', 'hairline-design', 'mesotherapy', 'medical'];
  const isLightHero = lightHeroPages.includes(currentView);

  const theme = {
    bg: sysConfig ? 'bg-black' : 'bg-[#F8F3E6]', // Ivory Background
    text: sysConfig ? 'text-green-500' : 'text-[#3A3A3A]', // Dark Text
    gold: sysConfig ? 'text-green-500' : 'text-[#7F6A47]', // Gold Text
    navBg: sysConfig ? 'bg-black/90 border-b border-green-900' : (scrolled ? 'bg-[#F8F3E6]/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6 border-b border-white/10'),
    navText: sysConfig 
      ? 'text-green-500' 
      : (scrolled 
          ? 'text-[#3A3A3A]' 
          : (isLightHero ? 'text-[#3A3A3A]' : 'text-[#F8F3E6]')
        ),
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-700 selection:bg-[#7F6A47] selection:text-[#F8F3E6] ${theme.bg} ${sysConfig ? 'font-mono' : ''}`}>
      
      <Preloader />
      <PageTransitionLoader active={isNavigating} />
      <ScrollProgress specialMode={sysConfig} />
      <CustomCursor specialMode={sysConfig} />
      
      {/* Noise Texture & CRT Effect for Stealth */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[90] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      {sysConfig && (
        <>
          <div className="fixed inset-0 pointer-events-none z-[50] opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/1/17/Matrix_code.gif')] bg-cover mix-blend-screen"></div>
          {/* CRT Scanline Effect */}
          <div className="fixed inset-0 pointer-events-none z-[51] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none"></div>
        </>
      )}

      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${theme.navBg}`}>
        <div className="container mx-auto px-6 h-full">
          <div className="relative flex items-center justify-between h-full">
            
            {/* LEFT: LOGO */}
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }} className="flex flex-col items-center justify-center group interactive z-20">
              <span className={`font-serif font-black tracking-tighter leading-none transition-all duration-500 ${scrolled ? 'text-3xl' : 'text-4xl lg:text-5xl'} ${theme.navText} ${sysConfig ? 'animate-pulse text-green-500' : 'group-hover:text-[#7F6A47]'}`}>BHI</span>
              <span className={`font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-500 ease-out group-hover:tracking-[0.3em] ${scrolled ? 'text-[8px] opacity-70' : 'text-[10px] mt-1'} ${theme.gold}`}>Baku Hair Institute</span>
            </a>

            {/* RIGHT: MENU */}
            <div className={`hidden lg:flex items-center space-x-8 h-full ${theme.navText}`}>
              <Dropdown title={t.nav.men} items={t.nav.men_items} specialMode={sysConfig} onNavigate={handleNavigation} />
              <Dropdown title={t.nav.women} items={t.nav.women_items} specialMode={sysConfig} onNavigate={handleNavigation} />
              <Dropdown title={t.nav.other} items={t.nav.other_items} specialMode={sysConfig} onNavigate={handleNavigation} />
              <Dropdown title={t.nav.about} items={t.nav.about_items} specialMode={sysConfig} />
              <button 
                onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
                className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors hover:text-[#7F6A47] interactive ${sysConfig ? 'text-green-500 hover:text-green-300' : ''}`}
              >
                {t.nav.contact}
              </button>
              
              <div className="flex items-center gap-3 pl-4 border-l border-[#7F6A47]/30 text-[10px] font-bold">
                <button onClick={() => setLang('az')} className={`interactive transition-colors hover:text-[#7F6A47] ${lang === 'az' ? 'text-[#7F6A47]' : ''}`}>AZ</button>
                <span>/</span>
                <button onClick={() => setLang('ru')} className={`interactive transition-colors hover:text-[#7F6A47] ${lang === 'ru' ? 'text-[#7F6A47]' : ''}`}>RU</button>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button className={`lg:hidden interactive ${theme.navText}`}><Menu/></button>
          </div>
        </div>
      </nav>

      {/* --- DYNAMIC CONTENT --- */}
      <main className="transition-opacity duration-500 ease-in-out">
          {currentView === 'home' && <HomeView t={t} theme={theme} sysConfig={sysConfig} />}
          {currentView === 'men-hair' && <MenHairPage content={t.men_hair_page} sysConfig={sysConfig} />}
          {currentView === 'men-beard' && <MenBeardPage content={t.men_beard_page} sysConfig={sysConfig} />}
          {currentView === 'long-fue' && <LongFuePage content={t.long_fue_page} sysConfig={sysConfig} />}
          {currentView === 'hairline-design' && <HairlineDesignPage content={t.hairline_page} sysConfig={sysConfig} />}
          {currentView === 'women-hair' && <WomenHairPage content={t.women_hair_page} sysConfig={sysConfig} />}
          {currentView === 'women-eyebrow' && <EyebrowPage content={t.eyebrow_page} sysConfig={sysConfig} />}
          {currentView === 'anesthesia' && <AnesthesiaPage content={t.anesthesia_page} sysConfig={sysConfig} />}
          {currentView === 'prp' && <PrpPage content={t.prp_page} sysConfig={sysConfig} />}
          {currentView === 'mesotherapy' && <MesotherapyPage content={t.meso_page} sysConfig={sysConfig} />}
          {currentView === 'medical' && <MedicalPage content={t.medical_page} sysConfig={sysConfig} />}
      </main>

      {/* --- CONTACT / FORM (Shared across all pages) --- */}
      <section id="form" className={`py-32 ${sysConfig ? 'bg-black' : 'bg-[#3A3A3A]'} text-[#F8F3E6]`}>
         <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20">
               
               {/* Map / Info */}
               <div className="lg:w-1/2">
                  <h3 className="text-4xl font-serif mb-10 text-[#F8F3E6]">Əlaqə Məlumatları</h3>
                  <div className="space-y-8">
                     <div className="flex items-start gap-6 group">
                        <div className="p-4 bg-[#F8F3E6]/5 rounded-full transition-colors group-hover:bg-[#7F6A47]/20"><MapPin size={24} className={theme.gold}/></div>
                        <div>
                           <p className="text-xs uppercase tracking-widest text-[#F8F3E6]/50 mb-1">Ünvan</p>
                           <p className="text-lg">Bakı ş., Nizami küç. 11</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-6 group">
                        <div className="p-4 bg-[#F8F3E6]/5 rounded-full transition-colors group-hover:bg-[#7F6A47]/20"><Phone size={24} className={theme.gold}/></div>
                        <div>
                           <p className="text-xs uppercase tracking-widest text-[#F8F3E6]/50 mb-1">Telefon</p>
                           <p className="text-lg">+994 50 123 45 67</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-6 group">
                        <div className="p-4 bg-[#F8F3E6]/5 rounded-full transition-colors group-hover:bg-[#7F6A47]/20"><CalendarCheck size={24} className={theme.gold}/></div>
                        <div>
                           <p className="text-xs uppercase tracking-widest text-[#F8F3E6]/50 mb-1">İş Saatları</p>
                           <p className="text-lg">B.e - Ş. 09:00 - 19:00</p>
                        </div>
                     </div>
                  </div>
                  
                  <div className="mt-12 w-full h-64 grayscale invert filter contrast-125 border border-[#F8F3E6]/10">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.428674853665!2d49.85172481539744!3d40.37719097936968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0f5e01!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2saz" className="w-full h-full border-0" loading="lazy"></iframe>
                  </div>
               </div>

               {/* Simplified Form */}
               <div className="lg:w-1/2 bg-[#F8F3E6]/5 p-8 lg:p-16 border border-[#F8F3E6]/10 backdrop-blur-sm">
                  <h2 className={`text-4xl font-serif mb-10 ${theme.text} text-[#F8F3E6]`}>{t.form.header}</h2>
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                     
                     {/* Name */}
                     <div className="group relative">
                        <input 
                           type="text" 
                           className={`peer w-full border-b-2 border-[#F8F3E6]/20 py-4 bg-transparent outline-none transition-colors focus:border-[#7F6A47] ${sysConfig ? 'text-green-500 focus:border-green-500' : 'text-[#F8F3E6]'}`} 
                           placeholder=" " 
                        />
                        <label className={`absolute left-0 top-4 text-[#F8F3E6]/50 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#7F6A47] ${sysConfig ? 'peer-focus:text-green-500' : ''}`}>
                           {t.form.name}
                        </label>
                     </div>

                     {/* Phone with country code selector */}
                     <div className="group relative flex gap-4">
                        <select className={`w-32 border-b-2 border-[#F8F3E6]/20 py-4 bg-transparent outline-none transition-colors focus:border-[#7F6A47] text-[#F8F3E6] cursor-pointer ${sysConfig ? 'focus:border-green-500' : ''}`}>
                           <option value="+994" className="bg-[#3A3A3A]">🇦🇿 +994</option>
                           <option value="+90" className="bg-[#3A3A3A]">🇹🇷 +90</option>
                           <option value="+7" className="bg-[#3A3A3A]">🇷🇺 +7</option>
                           <option value="+1" className="bg-[#3A3A3A]">🇺🇸 +1</option>
                        </select>
                        <div className="flex-1 relative">
                           <input 
                              type="tel" 
                              className={`peer w-full border-b-2 border-[#F8F3E6]/20 py-4 bg-transparent outline-none transition-colors focus:border-[#7F6A47] ${sysConfig ? 'text-green-500 focus:border-green-500' : 'text-[#F8F3E6]'}`} 
                              placeholder=" " 
                           />
                           <label className={`absolute left-0 top-4 text-[#F8F3E6]/50 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#7F6A47] ${sysConfig ? 'peer-focus:text-green-500' : ''}`}>
                              {t.form.phone}
                           </label>
                        </div>
                     </div>

                     {/* Submit Button */}
                     <MagneticButton className={`w-full py-5 mt-8 font-bold uppercase tracking-widest text-xs transition-all hover:bg-[#F8F3E6] hover:text-[#3A3A3A] ${sysConfig ? 'bg-green-600 text-black' : 'bg-[#7F6A47] text-[#F8F3E6]'}`}>
                        {t.form.btn}
                     </MagneticButton>
                  </form>
               </div>

            </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#3A3A3A] text-[#F8F3E6] py-16 border-t border-[#F8F3E6]/10">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-6xl font-serif font-bold mb-10 tracking-widest text-[#7F6A47]">BHI</h2>
            <div className="flex justify-center gap-12 opacity-60 mb-10">
               <Instagram className="hover:text-[#7F6A47] transition cursor-pointer hover:scale-110"/>
               <Facebook className="hover:text-[#7F6A47] transition cursor-pointer hover:scale-110"/>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-[#F8F3E6]/40">&copy; 2024 Baku Hair Institute. All rights reserved.</p>
         </div>
      </footer>

    </div>
  );
}
