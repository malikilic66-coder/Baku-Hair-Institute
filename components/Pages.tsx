

import React from 'react';
import { MenHairPageContent, MenBeardPageContent, LongFuePageContent, HairlinePageContent, WomenHairPageContent, EyebrowPageContent, AnesthesiaPageContent, PrpPageContent, MesoPageContent, MedicalPageContent } from '../types';
import { AzePatternBackground, MagneticButton, TiltCard } from './ui';
import { ArrowRight, CheckCircle, Clock, Shield, Star, Crown, ScanFace, PencilRuler, Heart, Eye, Activity, Syringe, Droplets, Zap, Sparkles, TestTube, Pill, Stethoscope, Microscope } from 'lucide-react';

interface MenHairPageProps {
  content: MenHairPageContent;
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
  const techniques = [content.techniques.fue, content.techniques.dhi, content.techniques.long];
  
  return (
    <div className={`min-h-screen ${sysConfig ? 'bg-black text-green-500' : 'bg-[#F8F3E6] text-[#3A3A3A]'}`}>
      {/* Mini Hero */}
      <div className="relative h-[60vh] bg-[#3A3A3A] overflow-hidden flex items-center justify-center">
         <img 
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            alt="Hair Transplant"
         />
         <div className="relative z-10 text-center px-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-serif text-[#F8F3E6] mb-4">{content.title}</h1>
            <p className="text-[#F8F3E6]/80 text-lg md:text-xl font-light max-w-2xl mx-auto">{content.subtitle}</p>
         </div>
      </div>

      <div className="container mx-auto px-6 py-20">
         <p className="text-lg md:text-2xl font-serif leading-relaxed text-center max-w-4xl mx-auto mb-20">{content.desc}</p>

         {/* Techniques Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
             {techniques.map((tech, idx) => (
                 <TiltCard key={idx} className={`p-8 border ${sysConfig ? 'border-green-500 bg-black' : 'border-[#7F6A47]/20 bg-white'} shadow-xl`}>
                     <div className="text-4xl font-serif text-[#7F6A47] mb-6">0{idx+1}</div>
                     <h3 className="text-2xl font-serif mb-4">{tech.title}</h3>
                     <p className="opacity-70 leading-relaxed">{tech.desc}</p>
                 </TiltCard>
             ))}
         </div>

         {/* Timeline Section */}
         <section className="relative py-20 bg-[#3A3A3A] text-[#F8F3E6] rounded-sm overflow-hidden">
             {!sysConfig && <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>}
             <div className="container mx-auto px-6 relative z-10">
                 <h2 className="text-4xl font-serif text-center mb-16">{content.timeline_title}</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                     {/* Horizontal Line (Desktop) */}
                     <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-[#7F6A47]/50 z-0"></div>
                     
                     {content.timeline.map((step, idx) => (
                         <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                             <div className="w-12 h-12 rounded-full bg-[#7F6A47] flex items-center justify-center text-[#F8F3E6] font-bold mb-6 shadow-[0_0_20px_rgba(127,106,71,0.5)]">
                                 {idx + 1}
                             </div>
                             <h4 className="text-xl font-bold mb-2 text-[#7F6A47]">{step.time}</h4>
                             <h5 className="text-lg font-serif mb-3">{step.title}</h5>
                             <p className="text-sm opacity-60 leading-relaxed max-w-xs">{step.desc}</p>
                         </div>
                     ))}
                 </div>
             </div>
         </section>
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
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1000&auto=format&fit=crop" 
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
                      <h4 className="text-xl font-bold mb-3">{item.title}</h4>
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
        
        {/* Artistic Hero */}
        <div className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
             <div className="absolute inset-0 z-0">
                 {/* Abstract Fibonacci Spiral SVG Background */}
                 <svg className="absolute top-0 right-0 h-full opacity-10" viewBox="0 0 1000 1000">
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
                     <h1 className="text-5xl lg:text-8xl font-serif mb-6">{content.title}</h1>
                     <p className="text-xl font-light opacity-80 leading-relaxed mb-8">{content.desc}</p>
                     
                     <div className="bg-[#3A3A3A] text-[#F8F3E6] p-8 mt-8 relative overflow-hidden">
                         <div className="absolute top-0 right-0 text-[#F8F3E6] opacity-5 text-9xl font-serif font-black leading-none">φ</div>
                         <h3 className="text-2xl font-serif text-[#7F6A47] mb-2">{content.golden_ratio_title}</h3>
                         <p className="text-sm opacity-80 leading-relaxed relative z-10">{content.golden_ratio_desc}</p>
                     </div>
                 </div>
                 
                 <div className="order-1 lg:order-2 relative">
                     <img 
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" 
                        className="w-full h-[600px] object-cover grayscale opacity-80"
                        alt="Face Portrait"
                     />
                     <div className="absolute inset-0 border-[20px] border-[#F8F3E6]"></div>
                     {/* Overlay Guidelines */}
                     <div className="absolute top-1/3 left-0 w-full h-[1px] bg-[#7F6A47] opacity-50"></div>
                     <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#7F6A47] opacity-50"></div>
                     <div className="absolute top-2/3 left-0 w-full h-[1px] bg-[#7F6A47] opacity-50"></div>
                     <div className="absolute top-0 left-1/2 h-full w-[1px] bg-[#7F6A47] opacity-50"></div>
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
        <div className={`min-h-screen ${sysConfig ? 'bg-black text-green-500' : 'bg-[#FDFBF7] text-[#3A3A3A]'}`}>
            {/* Elegant Hero */}
            <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=1000" className="w-full h-full object-cover opacity-80 grayscale-[30%]" alt="Woman Hair"/>
                    <div className="absolute inset-0 bg-[#F8F3E6]/60 backdrop-blur-[2px]"></div>
                </div>
                <div className="relative z-10 text-center max-w-3xl px-6 animate-fade-in-up">
                    <h1 className="text-5xl lg:text-7xl font-serif mb-6 text-[#3A3A3A]">{content.title}</h1>
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
            <div className="container mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
                 <div className="lg:w-1/2 animate-slide-in-left">
                     <div className="flex items-center gap-3 text-[#7F6A47] mb-4">
                         <Eye size={24}/>
                         <span className="uppercase tracking-widest text-xs font-bold">Aesthetic Focus</span>
                     </div>
                     <h1 className="text-5xl lg:text-7xl font-serif mb-6">{content.title}</h1>
                     <p className="text-2xl font-light mb-8 opacity-80">{content.subtitle}</p>
                     <p className="text-lg leading-relaxed mb-12 opacity-70">{content.desc}</p>
                     <MagneticButton onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#3A3A3A] text-[#F8F3E6] px-10 py-4 uppercase tracking-widest text-xs hover:bg-[#7F6A47]">
                        Konsultasiya
                     </MagneticButton>
                 </div>
                 
                 <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                     <img src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000&auto=format&fit=crop" className="w-full h-64 object-cover rounded-tr-[50px] shadow-xl" alt="Eyebrow 1"/>
                     <img src="https://images.unsplash.com/photo-1512413316925-fd52bd015e0a?q=80&w=1000&auto=format&fit=crop" className="w-full h-64 object-cover rounded-bl-[50px] shadow-xl mt-12" alt="Eyebrow 2"/>
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
                <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale sepia" alt="Blood Cells"/>
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
