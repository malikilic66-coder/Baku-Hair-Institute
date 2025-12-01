

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
      <header className="relative w-full h-screen min-h-[700px] overflow-hidden">
        {/* Full Width Banner Image */}
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop" 
            className={`w-full h-full object-cover ${sysConfig ? 'grayscale invert opacity-30' : ''}`} 
            alt="Baku Hair Institute"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center">
          <div className="text-center max-w-5xl animate-fade-in-up">
               <div className="flex items-center justify-center gap-4 mb-6">
                 <div className={`h-[1px] w-20 ${sysConfig ? 'bg-green-500' : 'bg-[#7F6A47]'}`}></div>
                 <span className={`text-sm font-bold uppercase tracking-[0.4em] ${sysConfig ? 'text-green-500' : 'text-[#7F6A47]'}`}>
                   {t.hero.doctor_exp || t.hero.exp}
                 </span>
                 <div className={`h-[1px] w-20 ${sysConfig ? 'bg-green-500' : 'bg-[#7F6A47]'}`}></div>
               </div>
               
               <h1 className={`text-6xl lg:text-9xl font-serif text-[#F8F3E6] mb-6 leading-tight drop-shadow-2xl`}>
                 {t.hero.title} <span className={`italic ${sysConfig ? 'text-green-500 glitch' : 'text-[#7F6A47]'}`}>{t.hero.subtitle}</span>
               </h1>
               
               <p className="text-[#F8F3E6] text-xl lg:text-2xl font-light max-w-3xl mx-auto mb-12 leading-relaxed">
                 {t.hero.desc}
               </p>
               
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <MagneticButton 
                    onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })} 
                    className={`px-12 py-5 bg-[#7F6A47] text-[#F8F3E6] font-bold uppercase tracking-widest text-sm shadow-2xl hover:bg-[#F8F3E6] hover:text-[#3A3A3A] transition-all ${sysConfig ? 'bg-green-600 shadow-green-500/50 hover:bg-black hover:text-green-500 border border-green-500' : ''}`}
                  >
                    {t.hero.btn_consult}
                  </MagneticButton>
                  <MagneticButton 
                    className={`px-12 py-5 border-2 border-[#F8F3E6] text-[#F8F3E6] font-bold uppercase tracking-widest text-sm hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all flex items-center justify-center gap-3`}
                  >
                     <Phone size={20} />
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {/* Saç Əkimi */}
               <TiltCard className={`group relative bg-white p-10 border-2 border-transparent hover:border-[#7F6A47] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${sysConfig ? 'bg-gray-800 hover:border-green-500' : ''}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#7F6A47]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center ${sysConfig ? 'bg-green-500/10' : 'bg-[#7F6A47]/10'}`}>
                     <span className={`text-3xl ${sysConfig ? 'text-green-500' : 'text-[#7F6A47]'}`}>💇</span>
                  </div>
                  <h3 className={`text-2xl font-serif mb-4 ${sysConfig ? 'text-green-500' : 'text-[#3A3A3A]'}`}>Saç Əkimi</h3>
                  <p className={`text-sm leading-relaxed mb-8 ${sysConfig ? 'text-green-700' : 'text-[#3A3A3A]/70'}`}>
                     FUE və DHI metodları ilə maksimum sıxlıq və təbii görünüş.
                  </p>
                  <MagneticButton 
                     onClick={() => handleNavigation('men-hair')}
                     className={`w-full py-3 text-sm font-bold uppercase tracking-widest border-2 transition-all ${sysConfig ? 'border-green-500 text-green-500 hover:bg-green-500 hover:text-black' : 'border-[#7F6A47] text-[#7F6A47] hover:bg-[#7F6A47] hover:text-white'}`}
                  >
                     Ətraflı
                  </MagneticButton>
               </TiltCard>

               {/* Kaş Əkimi */}
               <TiltCard className={`group relative bg-white p-10 border-2 border-transparent hover:border-[#7F6A47] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${sysConfig ? 'bg-gray-800 hover:border-green-500' : ''}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#7F6A47]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center ${sysConfig ? 'bg-green-500/10' : 'bg-[#7F6A47]/10'}`}>
                     <span className={`text-3xl ${sysConfig ? 'text-green-500' : 'text-[#7F6A47]'}`}>👁️</span>
                  </div>
                  <h3 className={`text-2xl font-serif mb-4 ${sysConfig ? 'text-green-500' : 'text-[#3A3A3A]'}`}>Kaş Əkimi</h3>
                  <p className={`text-sm leading-relaxed mb-8 ${sysConfig ? 'text-green-700' : 'text-[#3A3A3A]/70'}`}>
                     Təbii baxışlar üçün estetik və incə toxunuş.
                  </p>
                  <MagneticButton 
                     onClick={() => handleNavigation('women-eyebrow')}
                     className={`w-full py-3 text-sm font-bold uppercase tracking-widest border-2 transition-all ${sysConfig ? 'border-green-500 text-green-500 hover:bg-green-500 hover:text-black' : 'border-[#7F6A47] text-[#7F6A47] hover:bg-[#7F6A47] hover:text-white'}`}
                  >
                     Ətraflı
                  </MagneticButton>
               </TiltCard>

               {/* Sakal Əkimi */}
               <TiltCard className={`group relative bg-white p-10 border-2 border-transparent hover:border-[#7F6A47] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${sysConfig ? 'bg-gray-800 hover:border-green-500' : ''}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#7F6A47]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center ${sysConfig ? 'bg-green-500/10' : 'bg-[#7F6A47]/10'}`}>
                     <span className={`text-3xl ${sysConfig ? 'text-green-500' : 'text-[#7F6A47]'}`}>🧔</span>
                  </div>
                  <h3 className={`text-2xl font-serif mb-4 ${sysConfig ? 'text-green-500' : 'text-[#3A3A3A]'}`}>Sakal Əkimi</h3>
                  <p className={`text-sm leading-relaxed mb-8 ${sysConfig ? 'text-green-700' : 'text-[#3A3A3A]/70'}`}>
                     Üz cizgilərini tamamlayan professional bərpa.
                  </p>
                  <MagneticButton 
                     onClick={() => handleNavigation('men-beard')}
                     className={`w-full py-3 text-sm font-bold uppercase tracking-widest border-2 transition-all ${sysConfig ? 'border-green-500 text-green-500 hover:bg-green-500 hover:text-black' : 'border-[#7F6A47] text-[#7F6A47] hover:bg-[#7F6A47] hover:text-white'}`}
                  >
                     Ətraflı
                  </MagneticButton>
               </TiltCard>

               {/* PRP */}
               <TiltCard className={`group relative bg-white p-10 border-2 border-transparent hover:border-[#7F6A47] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${sysConfig ? 'bg-gray-800 hover:border-green-500' : ''}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#7F6A47]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center ${sysConfig ? 'bg-green-500/10' : 'bg-[#7F6A47]/10'}`}>
                     <span className={`text-3xl ${sysConfig ? 'text-green-500' : 'text-[#7F6A47]'}`}>💉</span>
                  </div>
                  <h3 className={`text-2xl font-serif mb-4 ${sysConfig ? 'text-green-500' : 'text-[#3A3A3A]'}`}>PRP Müalicəsi</h3>
                  <p className={`text-sm leading-relaxed mb-8 ${sysConfig ? 'text-green-700' : 'text-[#3A3A3A]/70'}`}>
                     Öz qanınızla saç köklərini canlandırın və gücləndir.
                  </p>
                  <MagneticButton 
                     onClick={() => handleNavigation('prp')}
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
                              <span className={`text-xs uppercase tracking-widest font-bold ${sysConfig ? 'text-green-500' : 'text-[#7F6A47]'}`}>
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
                                 src={doc.image} 
                                 alt={doc.name} 
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
  const lightHeroPages = ['women-hair', 'women-eyebrow', 'hairline-design', 'mesotherapy', 'medical', 'eyebrow', 'prp'];
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
