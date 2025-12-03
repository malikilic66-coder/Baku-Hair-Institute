

import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Phone, MapPin, Instagram, Facebook, Menu, Shield, Award, ArrowRight, CalendarCheck, Upload, Sparkles, Wand2 } from 'lucide-react';
import { content } from './constants';
import { ScrollProgress, CustomCursor, MagneticButton, TiltCard, Preloader, PageTransitionLoader, Dropdown, Accordion, DoctorCard, WhyUsCard, AzePatternBackground } from './components/ui';
import HairAnalysisWidget from './components/HairAnalysisWidget';
const Pages = {
   MenHairPage: React.lazy(() => import('./components/Pages').then(m => ({ default: m.MenHairPage }))),
   MenBeardPage: React.lazy(() => import('./components/Pages').then(m => ({ default: m.MenBeardPage }))),
   LongFuePage: React.lazy(() => import('./components/Pages').then(m => ({ default: m.LongFuePage }))),
   HairlineDesignPage: React.lazy(() => import('./components/Pages').then(m => ({ default: m.HairlineDesignPage }))),
   WomenHairPage: React.lazy(() => import('./components/Pages').then(m => ({ default: m.WomenHairPage }))),
   EyebrowPage: React.lazy(() => import('./components/Pages').then(m => ({ default: m.EyebrowPage }))),
   AnesthesiaPage: React.lazy(() => import('./components/Pages').then(m => ({ default: m.AnesthesiaPage }))),
   PrpPage: React.lazy(() => import('./components/Pages').then(m => ({ default: m.PrpPage }))),
   MesotherapyPage: React.lazy(() => import('./components/Pages').then(m => ({ default: m.MesotherapyPage }))),
   MedicalPage: React.lazy(() => import('./components/Pages').then(m => ({ default: m.MedicalPage }))),
};
const SocialMediaDesigner = React.lazy(() => import('./components/SocialMediaDesigner').then(m => ({ default: m.SocialMediaDesigner })));
const CanvasDesigner = React.lazy(() => import('./components/CanvasDesigner').then(m => ({ default: m.CanvasDesigner })));
const BeforeAfterDesigner = React.lazy(() => import('./components/BeforeAfterDesigner').then(m => ({ default: m.BeforeAfterDesigner })));
const UnifiedDesigner = React.lazy(() => import('./components/UnifiedDesigner').then(m => ({ default: m.UnifiedDesigner })));

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
const HomeView = ({ t, theme, sysConfig, onNavigate }: { t: any, theme: any, sysConfig: boolean, onNavigate: (view: string) => void }) => (
  <>
      {/* --- HERO BANNER SECTION --- */}
      <header className="relative w-full h-screen min-h-[700px] overflow-hidden">
        {/* Full Width Banner Image */}
        <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop&fm=webp" 
                  className={`w-full h-full object-cover ${sysConfig ? 'grayscale invert opacity-30' : ''}`} 
                  alt="Baku Hair Institute"
                  decoding="async"
                  fetchpriority="high"
                  width="2000"
                  height="1200"
               />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center">
          <div className="text-center max-w-5xl animate-fade-in-up">
               <div className="flex items-center justify-center gap-4 mb-6">
                 <div className={`h-[1px] w-20 ${sysConfig ? 'bg-green-500' : 'bg-[#7F6A47]'}`}></div>
                 <span className={`text-sm font-bold uppercase tracking-[0.4em] ${sysConfig ? 'text-green-500' : 'text-[#F8F3E6]'} px-4 py-2 bg-[#7F6A47]/20 backdrop-blur-sm rounded shadow-2xl`} style={{textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 0 20px rgba(127,106,71,0.6)'}}>
                   {t.hero.doctor_exp || t.hero.exp}
                 </span>
                 <div className={`h-[1px] w-20 ${sysConfig ? 'bg-green-500' : 'bg-[#7F6A47]'}`}></div>
               </div>
               
               <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-serif text-[#F8F3E6] mb-4 sm:mb-6 leading-tight`} style={{textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8)'}}>
                 {t.hero.title} <span className={`italic ${sysConfig ? 'text-green-500 glitch' : 'text-[#F8F3E6]'}`} style={{textShadow: '0 4px 20px rgba(127,106,71,0.8), 0 2px 10px rgba(0,0,0,0.9)'}}>{t.hero.subtitle}</span>
               </h1>
               
               <p className="text-[#F8F3E6] text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,0.7)'}}>
                 {t.hero.desc}
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                  <MagneticButton 
                    onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })} 
                    className={`px-8 sm:px-12 py-4 sm:py-5 bg-[#7F6A47] text-[#F8F3E6] font-bold uppercase tracking-widest text-xs sm:text-sm shadow-2xl hover:bg-[#F8F3E6] hover:text-[#3A3A3A] transition-all ${sysConfig ? 'bg-green-600 shadow-green-500/50 hover:bg-black hover:text-green-500 border border-green-500' : ''}`}
                  >
                    {t.hero.btn_consult}
                  </MagneticButton>
                  <MagneticButton 
                    className={`px-8 sm:px-12 py-4 sm:py-5 border-2 border-[#F8F3E6] text-[#F8F3E6] font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all flex items-center justify-center gap-3`}
                  >
                     <Phone size={18} className="sm:w-5 sm:h-5" />
                    {t.hero.btn_whatsapp}
                  </MagneticButton>
               </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#F8F3E6]/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#7F6A47] rounded-full"></div>
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
      <section className={`py-32 relative overflow-hidden ${sysConfig ? 'bg-black' : 'bg-[#F8F3E6]'}`}>
         {!sysConfig && <AzePatternBackground />}
         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <span className={`text-sm font-bold uppercase tracking-[0.3em] ${sysConfig ? 'text-green-500' : 'text-[#7F6A47]'}`}>
                  Premium Xidmətlər
               </span>
               <h2 className={`text-5xl lg:text-7xl font-serif mt-4 mb-6 ${sysConfig ? 'text-green-500' : 'text-[#3A3A3A]'}`}>
                  {t.services.title}
               </h2>
               <div className={`w-32 h-[2px] mx-auto ${sysConfig ? 'bg-green-500' : 'bg-[#7F6A47]'}`}></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {/* Saç Əkimi */}
               <TiltCard className={`group relative bg-white p-10 border-2 border-transparent hover:border-[#7F6A47] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${sysConfig ? 'bg-gray-800 hover:border-green-500' : ''}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#7F6A47]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center ${sysConfig ? 'bg-green-500/10' : 'bg-[#7F6A47]/10'}`}>
                     <svg className={`w-8 h-8 ${sysConfig ? 'stroke-green-500' : 'stroke-[#7F6A47]'}`} fill="none" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                     </svg>
                  </div>
                  <h3 className={`text-2xl font-serif mb-4 ${sysConfig ? 'text-green-500' : 'text-[#3A3A3A]'}`}>Saç Əkimi</h3>
                  <p className={`text-sm leading-relaxed mb-8 ${sysConfig ? 'text-green-700' : 'text-[#3A3A3A]/70'}`}>
                     FUE və DHI metodları ilə maksimum sıxlıq və təbii görünüş.
                  </p>
                  <MagneticButton 
                     onClick={() => onNavigate('men-hair')}
                     className={`w-full py-3 text-sm font-bold uppercase tracking-widest border-2 transition-all ${sysConfig ? 'border-green-500 text-green-500 hover:bg-green-500 hover:text-black' : 'border-[#7F6A47] text-[#7F6A47] hover:bg-[#7F6A47] hover:text-white'}`}
                  >
                     Ətraflı
                  </MagneticButton>
               </TiltCard>

               {/* Kaş Əkimi */}
               <TiltCard className={`group relative bg-white p-10 border-2 border-transparent hover:border-[#7F6A47] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${sysConfig ? 'bg-gray-800 hover:border-green-500' : ''}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#7F6A47]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center ${sysConfig ? 'bg-green-500/10' : 'bg-[#7F6A47]/10'}`}>
                     <svg className={`w-8 h-8 ${sysConfig ? 'stroke-green-500' : 'stroke-[#7F6A47]'}`} fill="none" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                     </svg>
                  </div>
                  <h3 className={`text-2xl font-serif mb-4 ${sysConfig ? 'text-green-500' : 'text-[#3A3A3A]'}`}>Kaş Əkimi</h3>
                  <p className={`text-sm leading-relaxed mb-8 ${sysConfig ? 'text-green-700' : 'text-[#3A3A3A]/70'}`}>
                     Təbii baxışlar üçün estetik və incə toxunuş.
                  </p>
                  <MagneticButton 
                     onClick={() => onNavigate('women-eyebrow')}
                     className={`w-full py-3 text-sm font-bold uppercase tracking-widest border-2 transition-all ${sysConfig ? 'border-green-500 text-green-500 hover:bg-green-500 hover:text-black' : 'border-[#7F6A47] text-[#7F6A47] hover:bg-[#7F6A47] hover:text-white'}`}
                  >
                     Ətraflı
                  </MagneticButton>
               </TiltCard>

               {/* Sakal Əkimi */}
               <TiltCard className={`group relative bg-white p-10 border-2 border-transparent hover:border-[#7F6A47] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${sysConfig ? 'bg-gray-800 hover:border-green-500' : ''}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#7F6A47]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center ${sysConfig ? 'bg-green-500/10' : 'bg-[#7F6A47]/10'}`}>
                     <svg className={`w-8 h-8 ${sysConfig ? 'stroke-green-500' : 'stroke-[#7F6A47]'}`} fill="none" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14c0-1 .5-2 2-2.5M16 14c0-1-.5-2-2-2.5" />
                     </svg>
                  </div>
                  <h3 className={`text-2xl font-serif mb-4 ${sysConfig ? 'text-green-500' : 'text-[#3A3A3A]'}`}>Sakal Əkimi</h3>
                  <p className={`text-sm leading-relaxed mb-8 ${sysConfig ? 'text-green-700' : 'text-[#3A3A3A]/70'}`}>
                     Üz cizgilərini tamamlayan professional bərpa.
                  </p>
                  <MagneticButton 
                     onClick={() => onNavigate('men-beard')}
                     className={`w-full py-3 text-sm font-bold uppercase tracking-widest border-2 transition-all ${sysConfig ? 'border-green-500 text-green-500 hover:bg-green-500 hover:text-black' : 'border-[#7F6A47] text-[#7F6A47] hover:bg-[#7F6A47] hover:text-white'}`}
                  >
                     Ətraflı
                  </MagneticButton>
               </TiltCard>

               {/* PRP */}
               <TiltCard className={`group relative bg-white p-10 border-2 border-transparent hover:border-[#7F6A47] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${sysConfig ? 'bg-gray-800 hover:border-green-500' : ''}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#7F6A47]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center ${sysConfig ? 'bg-green-500/10' : 'bg-[#7F6A47]/10'}`}>
                     <svg className={`w-8 h-8 ${sysConfig ? 'stroke-green-500' : 'stroke-[#7F6A47]'}`} fill="none" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                     </svg>
                  </div>
                  <h3 className={`text-2xl font-serif mb-4 ${sysConfig ? 'text-green-500' : 'text-[#3A3A3A]'}`}>PRP Müalicəsi</h3>
                  <p className={`text-sm leading-relaxed mb-8 ${sysConfig ? 'text-green-700' : 'text-[#3A3A3A]/70'}`}>
                     Öz qanınızla saç köklərini canlandırın və gücləndir.
                  </p>
                  <MagneticButton 
                     onClick={() => onNavigate('prp')}
                     className={`w-full py-3 text-sm font-bold uppercase tracking-widest border-2 transition-all ${sysConfig ? 'border-green-500 text-green-500 hover:bg-green-500 hover:text-black' : 'border-[#7F6A47] text-[#7F6A47] hover:bg-[#7F6A47] hover:text-white'}`}
                  >
                     Ətraflı
                  </MagneticButton>
               </TiltCard>
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
                           src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop&fm=webp" 
                           srcSet="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop&fm=webp 600w, https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop&fm=webp 1000w, https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop&fm=webp 1600w"
                           sizes="(max-width: 1024px) 100vw, 50vw"
                           width="1200"
                           height="500"
                           loading="lazy"
                           decoding="async"
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
                     <h3 className="text-2xl font-serif text-[#7F6A47] mb-6">{t.long_fue.features_title}</h3>
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
            <div className="text-center mb-20">
                 <h2 className="text-4xl lg:text-6xl font-serif text-[#F8F3E6] mb-4">{t.doctors.title}</h2>
                 <div className="w-32 h-[2px] bg-[#7F6A47] mx-auto"></div>
            </div>
            
            <div className="max-w-6xl mx-auto space-y-24">
                {t.doctors.items.map((doc: any, idx: number) => (
                    <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center group`}>
                        {/* Bio Section */}
                        <div className="lg:w-1/2 space-y-6">
                           <div className={`inline-block px-4 py-2 border border-[#7F6A47] ${sysConfig ? 'border-green-500' : ''}`}>
                              <span className={`text-xs uppercase tracking-widest font-bold ${sysConfig ? 'text-green-500' : 'text-[#F8F3E6]'}`}>
                                {doc.specialty}
                              </span>
                           </div>
                           
                           <h3 className="text-3xl lg:text-4xl font-serif text-[#F8F3E6] leading-tight">
                              {doc.name}
                           </h3>
                           
                           <p className="text-[#F8F3E6]/60 text-lg font-light">{doc.title}</p>
                           
                           <div className={`h-[2px] w-24 ${sysConfig ? 'bg-green-500' : 'bg-[#7F6A47]'}`}></div>
                           
                           {doc.bio && (
                              <p className="text-[#F8F3E6]/80 leading-relaxed text-base">
                                 {doc.bio}
                              </p>
                           )}
                           
                           <div className="flex items-center gap-3 text-[#F8F3E6]/70">
                               <Award size={20} className={`${sysConfig ? 'text-green-500' : 'text-[#7F6A47]'}`} />
                               <span className="text-sm">{doc.exp}</span>
                           </div>
                        </div>

                        {/* Photo Section */}
                        <div className="lg:w-1/2">
                           <div className="relative overflow-hidden group-hover:shadow-2xl transition-shadow duration-500">
                              <div className="absolute inset-0 bg-gradient-to-t from-[#7F6A47]/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <img 
                                 src={`${doc.image}&fm=webp`} 
                                 alt={doc.name} 
                                 loading="lazy"
                                 decoding="async"
                                 width="800"
                                 height="600"
                                 className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                              />
                              {/* Decorative Corner */}
                              <div className={`absolute ${idx % 2 === 0 ? 'top-0 left-0' : 'top-0 right-0'} w-32 h-32 border-t-4 ${idx % 2 === 0 ? 'border-l-4' : 'border-r-4'} ${sysConfig ? 'border-green-500' : 'border-[#7F6A47]'} opacity-50`}></div>
                              <div className={`absolute ${idx % 2 === 0 ? 'bottom-0 right-0' : 'bottom-0 left-0'} w-32 h-32 border-b-4 ${idx % 2 === 0 ? 'border-r-4' : 'border-l-4'} ${sysConfig ? 'border-green-500' : 'border-[#7F6A47]'} opacity-50`}></div>
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
                                 <img src={`${item.before}&fm=webp`} className="w-full h-full object-cover grayscale" alt="Before" loading="lazy" decoding="async" width="400" height="256" />
                                 <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 uppercase">Öncə</div>
                              </div>
                              <div className="relative">
                                 <img src={`${item.after}&fm=webp`} className="w-full h-full object-cover" alt="After" loading="lazy" decoding="async" width="400" height="256" />
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
  const [isNavigating, setIsNavigating] = useState(false); // Navigation state for Loader
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [analysisWidgetOpen, setAnalysisWidgetOpen] = useState(false);
  const sysConfig = useSecretAccess();
  const t = content[lang];
   const navigate = useNavigate();
   const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

   // --- Handle Navigation with Transition Loader ---
   const handleNavigation = (view:
      | 'home'
      | 'men-hair'
      | 'men-beard'
      | 'long-fue'
      | 'hairline-design'
      | 'women-hair'
      | 'women-eyebrow'
      | 'anesthesia'
      | 'prp'
      | 'mesotherapy'
      | 'medical'
      | 'social-designer'
      | 'canvas-designer'
      | 'before-after'
      | 'unified-designer') => {
      const targetPath = view === 'home' ? '/' : `/${view}`;
      if (location.pathname === targetPath) return;

      setIsNavigating(true);
      setTimeout(() => {
         navigate(targetPath);
         setTimeout(() => setIsNavigating(false), 100);
      }, 800);
   };

   // Scroll to top on route change
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location.pathname]);

  // Identify pages with LIGHT background heroes (where nav text needs to be DARK initially)
   // If needed, can derive current view from path
   // const currentView = (location.pathname.replace(/^\//, '') || 'home');
   // const lightHeroPages = ['women-hair', 'women-eyebrow', 'hairline-design', 'mesotherapy', 'medical', 'eyebrow', 'prp'];
   // const isLightHero = lightHeroPages.includes(currentView);

  const theme = {
    bg: sysConfig ? 'bg-black' : 'bg-[#F8F3E6]', // Ivory Background
    text: sysConfig ? 'text-green-500' : 'text-[#3A3A3A]', // Dark Text
    gold: sysConfig ? 'text-green-500' : 'text-[#7F6A47]', // Gold Text
    navBg: sysConfig ? 'bg-black/90 border-b border-green-900' : (scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-2' : 'bg-white/10 backdrop-blur-md py-6 border-b border-white/10'),
    navText: sysConfig ? 'text-green-500' : (scrolled ? 'text-[#3A3A3A]' : 'text-white'),
    navLogo: sysConfig ? 'text-green-500' : (scrolled ? 'text-[#3A3A3A]' : 'text-white'),
  };

   return (
      <div className={`min-h-screen font-sans transition-colors duration-700 selection:bg-[#7F6A47] selection:text-[#F8F3E6] ${theme.bg} ${sysConfig ? 'font-mono' : ''}`}>
      
      <Preloader />
      <PageTransitionLoader active={isNavigating} />
      <ScrollProgress specialMode={sysConfig} />
      <CustomCursor specialMode={sysConfig} />
      
         {/* Noise Texture & CRT Effect for Stealth (hidden when mobile menu open) */}
         {!mobileMenuOpen && (
            <>
               <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[90] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
               {sysConfig && (
                  <>
                     <div className="fixed inset-0 pointer-events-none z-[50] opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/1/17/Matrix_code.gif')] bg-cover mix-blend-screen"></div>
                     {/* CRT Scanline Effect */}
                     <div className="fixed inset-0 pointer-events-none z-[51] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none"></div>
                  </>
               )}
            </>
         )}

      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-[140] transition-all duration-500 ${theme.navBg}`}>
        <div className="container mx-auto px-6 h-full">
          <div className="relative flex items-center justify-between h-full">
            
            {/* LEFT: LOGO */}
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }} className="flex flex-col items-center justify-center group interactive z-20 outline-none focus:outline-none">
              <span className={`font-serif font-black tracking-tighter leading-none transition-all duration-500 ${scrolled ? 'text-3xl' : 'text-4xl lg:text-5xl'} ${theme.navLogo} ${sysConfig ? 'animate-pulse text-green-500' : 'group-hover:text-[#7F6A47]'}`}>BHI</span>
              <span className={`font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-500 ease-out group-hover:tracking-[0.3em] ${scrolled ? 'text-[8px] opacity-70' : 'text-[10px] mt-1'} ${scrolled ? 'text-[#3A3A3A]' : 'text-white/90'}`}>Baku Hair Institute</span>
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

                  {/* Mobile toggle kaldırıldı: Alt sayfa menüsü kullanılacak */}
          </div>

               {/* Alt menü nav dışına taşınacak */}
        </div>
      </nav>

         {/* Mobil alt menü (nav dışı) */}
         <>
            {/* Backdrop */}
            <div 
               className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
               onClick={() => setMobileMenuOpen(false)}
            />
            {/* Bottom Sheet Panel */}
            <div className={`lg:hidden fixed left-0 right-0 bottom-24 z-[160] transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
               <div className="mx-auto w-full max-w-md rounded-t-xl bg-[#1a1a1a]/98 shadow-2xl border border-[#F8F3E6]/10">
                  {/* Grabber */}
                  <div className="flex justify-center py-3">
                     <div className="w-12 h-1.5 rounded-full bg-[#F8F3E6]/20"></div>
                  </div>
                  {/* Header */}
                  <div className="px-6 pb-3 flex items-center justify-between">
                     <h2 className="text-[#F8F3E6] text-lg font-serif font-bold">Menu</h2>
                     <button onClick={() => setMobileMenuOpen(false)} className="text-[#F8F3E6] hover:text-[#7F6A47] transition-colors p-2" aria-label="Menüyü kapat">
                        <span className="text-xl">✕</span>
                     </button>
                  </div>
                  {/* Content */}
                  <div className="px-6 py-4 space-y-6 max-h-[60vh] overflow-y-auto">
                     {/* Men */}
                     <div>
                        <h3 className="text-[#F8F3E6] font-bold mb-3 uppercase tracking-wider text-xs">{t.nav.men}</h3>
                        <div className="space-y-2">
                           {t.nav.men_items.map((item: any, idx: number) => (
                              <button key={idx} onClick={() => { handleNavigation(item.view); setMobileMenuOpen(false); }} className="block w-full text-left py-3 px-4 rounded border border-[#F8F3E6]/10 text-[#F8F3E6] hover:text-[#7F6A47] hover:border-[#7F6A47] transition-all">
                                 {item.label}
                              </button>
                           ))}
                        </div>
                     </div>
                     {/* Women */}
                     <div>
                        <h3 className="text-[#F8F3E6] font-bold mb-3 uppercase tracking-wider text-xs">{t.nav.women}</h3>
                        <div className="space-y-2">
                           {t.nav.women_items.map((item: any, idx: number) => (
                              <button key={idx} onClick={() => { handleNavigation(item.view); setMobileMenuOpen(false); }} className="block w-full text-left py-3 px-4 rounded border border-[#F8F3E6]/10 text-[#F8F3E6] hover:text-[#7F6A47] hover:border-[#7F6A47] transition-all">
                                 {item.label}
                              </button>
                           ))}
                        </div>
                     </div>
                     {/* Other */}
                     <div>
                        <h3 className="text-[#F8F3E6] font-bold mb-3 uppercase tracking-wider text-xs">{t.nav.other}</h3>
                        <div className="space-y-2">
                           {t.nav.other_items.map((item: any, idx: number) => (
                              <button key={idx} onClick={() => { handleNavigation(item.view); setMobileMenuOpen(false); }} className="block w-full text-left py-3 px-4 rounded border border-[#F8F3E6]/10 text-[#F8F3E6] hover:text-[#7F6A47] hover:border-[#7F6A47] transition-all">
                                 {item.label}
                              </button>
                           ))}
                        </div>
                     </div>
                     {/* About */}
                     <div>
                        <h3 className="text-[#F8F3E6] font-bold mb-3 uppercase tracking-wider text-xs">{t.nav.about}</h3>
                        <div className="space-y-2">
                           {t.nav.about_items.map((item: any, idx: number) => (
                              <a key={idx} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block w-full text-left py-3 px-4 rounded border border-[#F8F3E6]/10 text-[#F8F3E6] hover:text-[#7F6A47] hover:border-[#7F6A47] transition-all">
                                 {item.label}
                              </a>
                           ))}
                        </div>
                     </div>
                     {/* Contact */}
                     <button onClick={() => { document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="block w-full text-left py-3 px-4 rounded bg-[#7F6A47] text-[#F8F3E6] font-bold hover:bg-[#6e583d] transition-colors">
                        {t.nav.contact}
                     </button>
                     {/* Language */}
                     <div className="flex gap-3">
                        <button onClick={() => { setLang('az'); }} className={`flex-1 py-3 rounded border-2 font-bold transition-all ${lang === 'az' ? 'border-[#7F6A47] bg-[#7F6A47] text-[#F8F3E6]' : 'border-[#F8F3E6]/30 text-[#F8F3E6]/80 hover:border-[#7F6A47]/50'}`}>AZ</button>
                        <button onClick={() => { setLang('ru'); }} className={`flex-1 py-3 rounded border-2 font-bold transition-all ${lang === 'ru' ? 'border-[#7F6A47] bg-[#7F6A47] text-[#F8F3E6]' : 'border-[#F8F3E6]/30 text-[#F8F3E6]/80 hover:border-[#7F6A47]/50'}`}>RU</button>
                     </div>
                  </div>
               </div>
            </div>
         </>

         {/* Alt merkez FAB: mobil/tablette menüyü açar */}
         <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[155]">
            <button onClick={() => setMobileMenuOpen(true)} className="px-6 py-3 rounded-full bg-[#7F6A47] text-[#F8F3E6] shadow-2xl font-bold uppercase tracking-wider">
               Menu
            </button>
         </div>

         {/* Saç Analizi Sihirbazı FAB (Sol Alt - Sadece Desktop) */}
         <div className="hidden lg:block fixed bottom-8 left-8 z-[155]">
            <button 
               onClick={() => setAnalysisWidgetOpen(true)}
               className="group flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-[#7F6A47] to-[#6b583a] text-[#F8F3E6] shadow-2xl font-bold uppercase tracking-wider hover:shadow-[#7F6A47]/40 transition-all hover:scale-105"
            >
               <Wand2 size={20} className="group-hover:rotate-12 transition-transform" />
               <span className="text-sm">
                  {lang === 'az' ? 'Saç Analizi' : 'Анализ Волос'}
               </span>
            </button>
         </div>

         {/* Saç Analizi Widget Popup */}
         {analysisWidgetOpen && (
            <>
               {/* Backdrop */}
               <div 
                  className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] transition-opacity duration-300"
                  onClick={() => setAnalysisWidgetOpen(false)}
               />
               {/* Widget Centered */}
               <div className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none">
                  <div className="pointer-events-auto animate-fade-in-up">
                     <HairAnalysisWidget 
                        lang={lang} 
                        onClose={() => setAnalysisWidgetOpen(false)} 
                     />
                  </div>
               </div>
            </>
         )}

         {/* --- DYNAMIC CONTENT (Routes) --- */}
         <main className="transition-opacity duration-500 ease-in-out">
            <Suspense fallback={<div className="py-32 text-center">Yükleniyor...</div>}>
               <Routes>
                  <Route path="/" element={<HomeView t={t} theme={theme} sysConfig={sysConfig} onNavigate={handleNavigation} />} />
                  <Route path="/men-hair" element={<Pages.MenHairPage content={t.men_hair_page} sysConfig={sysConfig} />} />
                  <Route path="/men-beard" element={<Pages.MenBeardPage content={t.men_beard_page} sysConfig={sysConfig} />} />
                  <Route path="/long-fue" element={<Pages.LongFuePage content={t.long_fue_page} sysConfig={sysConfig} />} />
                  <Route path="/hairline-design" element={<Pages.HairlineDesignPage content={t.hairline_page} sysConfig={sysConfig} />} />
                  <Route path="/women-hair" element={<Pages.WomenHairPage content={t.women_hair_page} sysConfig={sysConfig} />} />
                  <Route path="/women-eyebrow" element={<Pages.EyebrowPage content={t.eyebrow_page} sysConfig={sysConfig} />} />
                  <Route path="/anesthesia" element={<Pages.AnesthesiaPage content={t.anesthesia_page} sysConfig={sysConfig} />} />
                  <Route path="/prp" element={<Pages.PrpPage content={t.prp_page} sysConfig={sysConfig} />} />
                  <Route path="/mesotherapy" element={<Pages.MesotherapyPage content={t.meso_page} sysConfig={sysConfig} />} />
                  <Route path="/medical" element={<Pages.MedicalPage content={t.medical_page} sysConfig={sysConfig} />} />
                  <Route path="/social-designer" element={<SocialMediaDesigner />} />
                  <Route path="/canvas-designer" element={<CanvasDesigner />} />
                  <Route path="/before-after" element={<BeforeAfterDesigner />} />
                  <Route path="/unified-designer" element={<UnifiedDesigner />} />
                  <Route path="*" element={<HomeView t={t} theme={theme} sysConfig={sysConfig} onNavigate={handleNavigation} />} />
               </Routes>
            </Suspense>
         </main>

      {/* --- CONTACT / FORM (Shared across all pages) --- */}
      <section id="form" className={`py-32 ${sysConfig ? 'bg-black' : 'bg-[#3A3A3A]'} text-[#F8F3E6]`}>
         <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 min-h-[600px]">
               
               {/* Map / Info */}
               <div className="lg:w-1/2">
                  <h3 className="text-4xl font-serif mb-10 text-[#F8F3E6]">Əlaqə Məlumatları</h3>
                  <div className="space-y-8">
                     <div className="flex items-start gap-6 group">
                        <div className="p-4 bg-[#F8F3E6]/5 rounded-full transition-colors group-hover:bg-[#7F6A47]/20"><MapPin size={24} className={theme.gold}/></div>
                        <div>
                           <p className="text-xs uppercase tracking-widest text-[#F8F3E6] mb-1">Ünvan</p>
                           <p className="text-lg">Bakı ş., Nizami küç. 11</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-6 group">
                        <div className="p-4 bg-[#F8F3E6]/5 rounded-full transition-colors group-hover:bg-[#7F6A47]/20"><Phone size={24} className={theme.gold}/></div>
                        <div>
                           <p className="text-xs uppercase tracking-widest text-[#F8F3E6] mb-1">Telefon</p>
                           <p className="text-lg">+994 50 123 45 67</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-6 group">
                        <div className="p-4 bg-[#F8F3E6]/5 rounded-full transition-colors group-hover:bg-[#7F6A47]/20"><CalendarCheck size={24} className={theme.gold}/></div>
                        <div>
                           <p className="text-xs uppercase tracking-widest text-[#F8F3E6] mb-1">İş Saatları</p>
                           <p className="text-lg">B.e - Ş. 09:00 - 19:00</p>
                        </div>
                     </div>
                  </div>
                  
                  <div className="mt-12 w-full h-64 grayscale invert filter contrast-125 border border-[#F8F3E6]/10">
                     <iframe title="Baku Hair Institute konum haritası" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.428674853665!2d49.85172481539744!3d40.37719097936968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0f5e01!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2saz" className="w-full h-full border-0" loading="lazy"></iframe>
                  </div>
               </div>

               {/* Simplified Form */}
               <div className="lg:w-1/2 bg-[#F8F3E6]/5 p-8 lg:p-16 border border-[#F8F3E6]/10 backdrop-blur-sm">
                  <h2 className={`text-4xl font-serif mb-10 ${theme.text} text-[#F8F3E6]`}>{t.form.header}</h2>
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                     
                     {/* Name */}
                     <div className="group relative">
                        <label htmlFor="fullName" className="visually-hidden">{t.form.name}</label>
                        <input 
                           id="fullName"
                           name="fullName"
                           type="text" 
                           aria-label={t.form.name}
                           className={`peer w-full border-b-2 border-[#F8F3E6]/20 py-4 bg-transparent outline-none transition-colors focus:border-[#7F6A47] ${sysConfig ? 'text-green-500 focus:border-green-500' : 'text-[#F8F3E6]'}`} 
                           placeholder=" " 
                        />
                        <span className={`absolute left-0 top-4 text-[#F8F3E6]/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F8F3E6]`}>
                           {t.form.name}
                        </span>
                     </div>

                     {/* Phone with country code selector */}
                     <div className="group relative flex gap-4">
                        <label htmlFor="countryCode" className="visually-hidden">Ön kod</label>
                        <select id="countryCode" aria-label="Ülke telefon kodu" className={`w-32 border-b-2 border-[#F8F3E6]/20 py-4 bg-transparent outline-none transition-colors focus:border-[#7F6A47] text-[#F8F3E6] cursor-pointer ${sysConfig ? 'focus:border-green-500' : ''}`}>
                           <option value="+994" className="bg-[#3A3A3A]">🇦🇿 +994</option>
                           <option value="+90" className="bg-[#3A3A3A]">🇹🇷 +90</option>
                           <option value="+7" className="bg-[#3A3A3A]">🇷🇺 +7</option>
                           <option value="+1" className="bg-[#3A3A3A]">🇺🇸 +1</option>
                        </select>
                        <div className="flex-1 relative">
                           <label htmlFor="phoneNumber" className="visually-hidden">{t.form.phone}</label>
                           <input 
                              id="phoneNumber"
                              name="phoneNumber"
                              type="tel" 
                              aria-label={t.form.phone}
                              className={`peer w-full border-b-2 border-[#F8F3E6]/20 py-4 bg-transparent outline-none transition-colors focus:border-[#7F6A47] ${sysConfig ? 'text-green-500 focus:border-green-500' : 'text-[#F8F3E6]'}`} 
                              placeholder=" " 
                           />
                           <span className={`absolute left-0 top-4 text-[#F8F3E6]/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F8F3E6]`}>
                              {t.form.phone}
                           </span>
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
            <h2 className="text-6xl font-serif font-bold mb-10 tracking-widest text-[#F8F3E6]">BHI</h2>
            <div className="flex justify-center gap-12 opacity-60 mb-10">
               <Instagram className="hover:text-[#7F6A47] transition cursor-pointer hover:scale-110"/>
               <Facebook className="hover:text-[#7F6A47] transition cursor-pointer hover:scale-110"/>
            </div>
            
            {/* Social Media Designer Links */}
            <div className="flex flex-col gap-3 mb-8">
              <button
                onClick={() => handleNavigation('unified-designer')}
                className="inline-flex items-center gap-2 text-base text-[#F8F3E6] hover:text-[#7F6A47] transition-colors uppercase tracking-wider interactive font-bold"
              >
                <Sparkles size={18} />
                🚀 YENİ: Unified Workstation (Hibrit Dizayn Platforması)
                <Sparkles size={18} />
              </button>

              <button
                onClick={() => handleNavigation('social-designer')}
                className="inline-flex items-center gap-2 text-sm text-[#F8F3E6]/60 hover:text-[#7F6A47] transition-colors uppercase tracking-wider interactive"
              >
                <Sparkles size={16} />
                Sosial Media Dizayner (Basic)
                <Sparkles size={16} />
              </button>

              <button
                onClick={() => handleNavigation('canvas-designer')}
                className="inline-flex items-center gap-2 text-sm text-[#F8F3E6]/80 hover:text-[#7F6A47] transition-colors uppercase tracking-wider interactive font-semibold"
              >
                <Sparkles size={16} />
                Creative Studio (PRO)
                <Sparkles size={16} />
              </button>

              <button
                onClick={() => handleNavigation('before-after')}
                className="inline-flex items-center gap-2 text-sm text-[#F8F3E6]/70 hover:text-[#7F6A47] transition-colors uppercase tracking-wider interactive"
              >
                <Sparkles size={16} />
                Əvvəl & Sonra Modulu
                <Sparkles size={16} />
              </button>
            </div>
            
            <p className="text-[10px] uppercase tracking-widest text-[#F8F3E6]/70">&copy; 2024 Baku Hair Institute. All rights reserved.</p>
         </div>
      </footer>

    </div>
  );
}
