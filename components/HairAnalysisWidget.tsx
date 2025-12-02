import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  User, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Phone, 
  Mail, 
  UserCircle 
} from 'lucide-react';

interface HairAnalysisWidgetProps {
  lang: 'az' | 'ru';
  onClose: () => void;
}

export default function HairAnalysisWidget({ lang, onClose }: HairAnalysisWidgetProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: 'male',
    age: 28,
    lossDuration: 2,
    frontalLoss: null as number | null,
    crownLoss: null as number | null,   
    previousTransplant: null as boolean | null,
    timeline: null as string | null,
    name: '',
    phone: '',
    email: ''
  });

  const totalSteps = 6;

  // Translations
  const t = {
    az: {
      title: "Saç Analizi",
      subtitle: "30 Saniyədə Öyrənin",
      step: "Addım",
      back: "Geri",
      continue: "Davam Et",
      gender: {
        title: "Cinsinizi Seçin",
        male: "Kişi",
        female: "Qadın"
      },
      measurements: {
        title: "Profil Məlumatları",
        age: "Yaşınız",
        duration: "Tökülmə Müddəti",
        year: "İl"
      },
      pattern: {
        title: "Saç Tökülməsi Vəziyyəti",
        frontal: "Ön Saç Xətti",
        crown: "Təpə Bölgəsi",
        general: "Ümumi Tökülmə Sıxlığı",
        none: "Yoxdur",
        light: "Yüngül",
        medium: "Orta",
        advanced: "İrəli"
      },
      history: {
        title: "Əvvəllər saç əkimi etdirmisiniz?",
        yes: "Bəli, Etdirmişəm",
        no: "Xeyr, Etdirməmişəm"
      },
      timing: {
        title: "Əməliyyatı nə vaxt planlaşdırırsınız?",
        asap: "Ən Qısa Müddətdə",
        months: "3-6 Ay İçində",
        later: "Hələ Qərar Verməmişəm"
      },
      form: {
        title: "Nəticə Hazırdır!",
        subtitle: "Pulsuz analiz nəticənizi və qiymət təklifini almaq üçün formu doldurun.",
        name: "Ad Soyad",
        phone: "Telefon",
        email: "E-poçt Ünvanı",
        submit: "PULSUZ ANALİZİ GÖNDƏR"
      },
      alert: "Zəhmət olmasa bütün sahələri seçin."
    },
    ru: {
      title: "Анализ Волос",
      subtitle: "Узнайте за 30 Секунд",
      step: "Шаг",
      back: "Назад",
      continue: "Продолжить",
      gender: {
        title: "Выберите Ваш Пол",
        male: "Мужской",
        female: "Женский"
      },
      measurements: {
        title: "Профиль Данных",
        age: "Ваш Возраст",
        duration: "Продолжительность Выпадения",
        year: "Год"
      },
      pattern: {
        title: "Состояние Выпадения Волос",
        frontal: "Передняя Линия Волос",
        crown: "Теменная Область",
        general: "Общая Плотность Выпадения",
        none: "Нет",
        light: "Легкая",
        medium: "Средняя",
        advanced: "Продвинутая"
      },
      history: {
        title: "Делали ли Вы раньше пересадку волос?",
        yes: "Да, Делал(а)",
        no: "Нет, Не Делал(а)"
      },
      timing: {
        title: "Когда Вы планируете операцию?",
        asap: "В Кратчайшие Сроки",
        months: "В Течение 3-6 Месяцев",
        later: "Еще Не Решил(а)"
      },
      form: {
        title: "Результат Готов!",
        subtitle: "Заполните форму, чтобы получить бесплатный анализ и ценовое предложение.",
        name: "Имя Фамилия",
        phone: "Телефон",
        email: "E-mail Адрес",
        submit: "ОТПРАВИТЬ БЕСПЛАТНЫЙ АНАЛИЗ"
      },
      alert: "Пожалуйста, выберите все поля."
    }
  };

  const content = t[lang];

  const hairImages = {
    male: {
      frontal: [
        { id: 0, label: content.pattern.none, src: 'https://www.aslitarcanclinic.com/lp/en/yt/wp-content/uploads/s2-1.png' },
        { id: 1, label: content.pattern.light, src: 'https://www.aslitarcanclinic.com/lp/en/yt/wp-content/uploads/s4-1.png' },
        { id: 2, label: content.pattern.medium, src: 'https://www.aslitarcanclinic.com/lp/en/yt/wp-content/uploads/s5-1.png' },
        { id: 3, label: content.pattern.advanced, src: 'https://www.aslitarcanclinic.com/lp/en/yt/wp-content/uploads/s6-1.png' }
      ],
      crown: [
        { id: 0, label: content.pattern.none, src: 'https://www.aslitarcanclinic.com/lp/en/yt/wp-content/uploads/s2-1.png' },
        { id: 1, label: content.pattern.light, src: 'https://www.aslitarcanclinic.com/lp/en/yt/wp-content/uploads/e1-1.png' },
        { id: 2, label: content.pattern.medium, src: 'https://www.aslitarcanclinic.com/lp/en/yt/wp-content/uploads/e2-1.png' },
        { id: 3, label: content.pattern.advanced, src: 'https://www.aslitarcanclinic.com/lp/en/yt/wp-content/uploads/e3-1.png' }
      ]
    },
    female: [
      { id: 0, label: content.pattern.none, src: 'https://www.aslitarcanclinic.com/lp/en/yt/wp-content/uploads/ba1-1.png' },
      { id: 1, label: content.pattern.light, src: 'https://www.aslitarcanclinic.com/lp/en/yt/wp-content/uploads/ba2-1.png' },
      { id: 2, label: content.pattern.medium, src: 'https://www.aslitarcanclinic.com/lp/en/yt/wp-content/uploads/ba3-1.png' },
      { id: 3, label: content.pattern.advanced, src: 'https://www.aslitarcanclinic.com/lp/en/yt/wp-content/uploads/ba4-1.png' }
    ]
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      if (currentStep === 3) {
        if (formData.gender === 'male') {
          if (formData.frontalLoss === null || formData.crownLoss === null) {
            alert(content.alert);
            return;
          }
        } else {
          if (formData.frontalLoss === null) {
            alert(content.alert);
            return;
          }
        }
      }
      if (currentStep === 4 && formData.previousTransplant === null) return;
      if (currentStep === 5 && !formData.timeline) return;
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const updateData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // --- WPFORMS STYLE NATIVE SLIDER ---
  const WpStyleSlider = ({ label, value, min, max, onChange, unit = '' }: any) => {
    const percentage = ((value - min) / (max - min)) * 100;
    
    const backgroundStyle = {
      background: `linear-gradient(to right, #7F6A47 0%, #7F6A47 ${percentage}%, rgba(248, 243, 230, 0.1) ${percentage}%, rgba(248, 243, 230, 0.1) 100%)`
    };

    return (
      <div className="w-full bg-[#2b2b2b] p-5 rounded-xl border border-[#F8F3E6]/5">
        <style>{`
          .wp-slider {
            -webkit-appearance: none;
            width: 100%;
            height: 8px;
            border-radius: 10px;
            outline: none;
            cursor: pointer;
          }
          
          .wp-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: #F8F3E6;
            border: 3px solid #7F6A47;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            transition: transform 0.1s ease;
          }
          
          .wp-slider::-webkit-slider-thumb:hover {
            transform: scale(1.1);
          }

          .wp-slider::-moz-range-thumb {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: #F8F3E6;
            border: 3px solid #7F6A47;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
          }
        `}</style>

        <div className="flex justify-between items-center mb-4">
          <span className="text-[#F8F3E6] font-medium tracking-wide">{label}</span>
          <span className="text-[#7F6A47] font-serif font-bold text-2xl">{value} {unit}</span>
        </div>
        
        <div className="relative w-full h-10 flex items-center">
          <input
            type="range"
            min={min}
            max={max}
            step={1}
            value={value}
            onChange={onChange}
            className="wp-slider"
            style={backgroundStyle}
          />
        </div>
        
        <div className="flex justify-between text-xs text-[#F8F3E6]/30 -mt-1 font-mono">
          <span>{min}</span>
          <span>{max}+</span>
        </div>
      </div>
    );
  };

  // --- Step Contents ---

  const StepGender = () => (
    <div className="w-full animate-fadeIn max-w-lg mx-auto">
      <h2 className="text-2xl font-serif text-[#7F6A47] mb-8 text-center">{content.gender.title}</h2>
      <div className="grid grid-cols-2 gap-6">
        {[
          { val: 'male', label: content.gender.male },
          { val: 'female', label: content.gender.female }
        ].map((g) => (
          <button
            key={g.val}
            onClick={() => updateData('gender', g.val)}
            className={`flex flex-col items-center justify-center py-10 rounded-2xl border-2 transition-all group ${
              formData.gender === g.val
                ? 'border-[#7F6A47] bg-[#7F6A47]/10 text-[#F8F3E6] shadow-[0_0_30px_rgba(127,106,71,0.2)]' 
                : 'border-[#F8F3E6]/5 text-[#F8F3E6]/40 hover:bg-[#F8F3E6]/5 hover:border-[#F8F3E6]/20'
            }`}
          >
            <User size={48} className={`mb-4 transition-transform group-hover:scale-110 ${formData.gender === g.val ? 'text-[#7F6A47]' : 'text-current'}`} />
            <span className="text-xl font-medium">{g.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const StepMeasurements = () => (
    <div className="w-full animate-fadeIn max-w-md mx-auto">
      <h2 className="text-2xl font-serif text-[#7F6A47] mb-8 text-center">{content.measurements.title}</h2>
      <div className="flex flex-col gap-6">
        <WpStyleSlider 
          label={content.measurements.age}
          value={formData.age} 
          min={18} 
          max={65} 
          onChange={(e: any) => updateData('age', parseInt(e.target.value))} 
        />
        <WpStyleSlider 
          label={content.measurements.duration}
          value={formData.lossDuration} 
          min={0} 
          max={10} 
          unit={content.measurements.year}
          onChange={(e: any) => updateData('lossDuration', parseInt(e.target.value))} 
        />
      </div>
    </div>
  );

  const StepPattern = () => {
    const imgStyle = { filter: 'sepia(0.6) brightness(0.9) contrast(1.1)' };
    const renderGrid = (items: any[], keyPrefix: string, field: string) => (
      <div className="grid grid-cols-4 gap-3">
        {items.map((item) => (
          <button
            key={`${keyPrefix}-${item.id}`}
            onClick={() => updateData(field, item.id)}
            className={`flex flex-col items-center p-2 rounded-xl border-2 transition-all ${
              formData[field as keyof typeof formData] === item.id 
                ? 'border-[#7F6A47] bg-[#7F6A47]/20 scale-105 shadow-lg' 
                : 'border-transparent bg-[#2b2b2b] hover:bg-[#F8F3E6]/5'
            }`}
          >
            <div className="w-full aspect-square rounded-lg overflow-hidden bg-[#F8F3E6]/5 p-2 mb-2">
              <img src={item.src} alt={item.label} style={imgStyle} className="w-full h-full object-contain" />
            </div>
            <span className={`text-xs font-medium ${formData[field as keyof typeof formData] === item.id ? 'text-[#F8F3E6]' : 'text-[#F8F3E6]/50'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    );

    return (
      <div className="w-full animate-fadeIn">
        <h2 className="text-2xl font-serif text-[#7F6A47] mb-6 text-center">{content.pattern.title}</h2>
        {formData.gender === 'male' ? (
          <div className="space-y-6">
            <div className="bg-[#2b2b2b]/50 p-4 rounded-2xl border border-[#F8F3E6]/5">
              <p className="text-[#F8F3E6]/80 text-sm mb-3 font-medium text-center border-b border-[#F8F3E6]/10 pb-2">{content.pattern.frontal}</p>
              {renderGrid(hairImages.male.frontal, 'front', 'frontalLoss')}
            </div>
            <div className="bg-[#2b2b2b]/50 p-4 rounded-2xl border border-[#F8F3E6]/5">
              <p className="text-[#F8F3E6]/80 text-sm mb-3 font-medium text-center border-b border-[#F8F3E6]/10 pb-2">{content.pattern.crown}</p>
              {renderGrid(hairImages.male.crown, 'crown', 'crownLoss')}
            </div>
          </div>
        ) : (
          <div className="bg-[#2b2b2b]/50 p-6 rounded-2xl border border-[#F8F3E6]/5">
            <p className="text-[#F8F3E6]/80 text-sm mb-4 font-medium text-center">{content.pattern.general}</p>
            {renderGrid(hairImages.female, 'fem', 'frontalLoss')}
          </div>
        )}
      </div>
    );
  };

  const StepHistory = () => (
    <div className="w-full animate-fadeIn text-center max-w-lg mx-auto">
      <h2 className="text-2xl font-serif text-[#7F6A47] mb-8">{content.history.title}</h2>
      <div className="grid grid-cols-2 gap-4">
        {[
          { val: true, label: content.history.yes, icon: <CheckCircle2 size={24} /> },
          { val: false, label: content.history.no, icon: <XCircle size={24} /> }
        ].map((opt) => (
          <button
            key={opt.label}
            onClick={() => updateData('previousTransplant', opt.val)}
            className={`flex flex-col items-center justify-center gap-3 p-8 rounded-2xl border-2 transition-all ${
              formData.previousTransplant === opt.val 
                ? 'border-[#7F6A47] bg-[#7F6A47]/10 text-[#F8F3E6]' 
                : 'border-[#F8F3E6]/10 text-[#F8F3E6]/60 hover:bg-[#F8F3E6]/5 hover:border-[#F8F3E6]/20'
            }`}
          >
            {opt.icon}
            <span className="font-medium text-lg">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const StepTiming = () => (
    <div className="w-full animate-fadeIn">
      <h2 className="text-2xl font-serif text-[#7F6A47] mb-8 text-center">{content.timing.title}</h2>
      <div className="grid grid-cols-3 gap-4">
        {[
          { id: 'asap', label: content.timing.asap, icon: <Clock size={24} /> },
          { id: '3months', label: content.timing.months, icon: <Calendar size={24} /> },
          { id: 'later', label: content.timing.later, icon: <UserCircle size={24} /> },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => updateData('timeline', item.id)}
            className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2 transition-all text-center h-40 ${
              formData.timeline === item.id 
                ? 'border-[#7F6A47] bg-[#7F6A47]/10 text-[#F8F3E6] shadow-lg' 
                : 'border-[#F8F3E6]/10 text-[#F8F3E6]/60 hover:bg-[#F8F3E6]/5'
            }`}
          >
            <div className={`p-3 rounded-full ${formData.timeline === item.id ? 'bg-[#7F6A47] text-white' : 'bg-[#2b2b2b]'}`}>
              {item.icon}
            </div>
            <span className="font-medium leading-tight">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const StepForm = () => (
    <div className="w-full animate-fadeIn max-w-lg mx-auto">
      <h2 className="text-2xl font-serif text-[#7F6A47] mb-2 text-center">{content.form.title}</h2>
      <p className="text-[#F8F3E6]/60 text-sm text-center mb-8">{content.form.subtitle}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="relative group col-span-2 sm:col-span-1">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F8F3E6]/30 group-focus-within:text-[#7F6A47] transition-colors" size={18} />
          <input
            type="text"
            placeholder={content.form.name}
            value={formData.name}
            onChange={(e) => updateData('name', e.target.value)}
            className="w-full bg-[#2b2b2b] border border-[#F8F3E6]/10 rounded-xl py-4 pl-12 pr-4 text-[#F8F3E6] placeholder-[#F8F3E6]/20 focus:outline-none focus:border-[#7F6A47] transition-colors"
          />
        </div>
        <div className="relative group col-span-2 sm:col-span-1">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F8F3E6]/30 group-focus-within:text-[#7F6A47] transition-colors" size={18} />
          <input
            type="tel"
            placeholder={content.form.phone}
            value={formData.phone}
            onChange={(e) => updateData('phone', e.target.value)}
            className="w-full bg-[#2b2b2b] border border-[#F8F3E6]/10 rounded-xl py-4 pl-12 pr-4 text-[#F8F3E6] placeholder-[#F8F3E6]/20 focus:outline-none focus:border-[#7F6A47] transition-colors"
          />
        </div>
        <div className="relative group col-span-2">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F8F3E6]/30 group-focus-within:text-[#7F6A47] transition-colors" size={18} />
          <input
            type="email"
            placeholder={content.form.email}
            value={formData.email}
            onChange={(e) => updateData('email', e.target.value)}
            className="w-full bg-[#2b2b2b] border border-[#F8F3E6]/10 rounded-xl py-4 pl-12 pr-4 text-[#F8F3E6] placeholder-[#F8F3E6]/20 focus:outline-none focus:border-[#7F6A47] transition-colors"
          />
        </div>
      </div>
      
      <button className="w-full bg-[#7F6A47] hover:bg-[#6b583a] text-[#F8F3E6] font-bold py-4 rounded-xl shadow-lg shadow-[#7F6A47]/20 mt-2 text-base transition-all active:scale-95 transform hover:-translate-y-0.5">
        {content.form.submit}
      </button>
    </div>
  );

  return (
    <div className="flex items-center justify-center p-4 bg-transparent min-h-[600px]">
      <div className="w-full max-w-[650px] bg-[#3A3A3A] rounded-3xl shadow-2xl border border-[#7F6A47]/20 overflow-hidden flex flex-col font-sans relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#2b2b2b] text-[#F8F3E6] hover:bg-[#7F6A47] transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Widget Header */}
        <div className="bg-[#2b2b2b] px-8 py-5 border-b border-[#F8F3E6]/5 flex justify-between items-center">
          <div>
            <h1 className="text-[#F8F3E6] font-serif font-bold text-xl tracking-wide">{content.title}</h1>
            <p className="text-[#7F6A47] text-xs uppercase tracking-wider font-semibold mt-0.5">{content.subtitle}</p>
          </div>
          <div className="text-[#F8F3E6]/20 text-sm font-mono bg-[#3A3A3A] px-3 py-1 rounded-full border border-[#F8F3E6]/5">
            {content.step} {currentStep} / {totalSteps}
          </div>
        </div>

        {/* Progress Line */}
        <div className="w-full h-1.5 bg-[#2b2b2b]">
          <div className="h-full bg-[#7F6A47] transition-all duration-500 ease-out shadow-[0_0_10px_#7F6A47]" style={{ width: `${(currentStep / totalSteps) * 100}%` }} />
        </div>

        {/* Content Body */}
        <div className="flex-1 p-8 flex flex-col justify-center min-h-[400px]">
          {currentStep === 1 && <StepGender />}
          {currentStep === 2 && <StepMeasurements />}
          {currentStep === 3 && <StepPattern />}
          {currentStep === 4 && <StepHistory />}
          {currentStep === 5 && <StepTiming />}
          {currentStep === 6 && <StepForm />}
        </div>

        {/* Footer Navigation */}
        {currentStep < 6 && (
          <div className="px-8 py-5 bg-[#2b2b2b] border-t border-[#F8F3E6]/5 flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'text-[#F8F3E6]/50 hover:bg-[#F8F3E6]/5 hover:text-[#F8F3E6]'}`}
            >
              <ChevronLeft size={20} />
              <span className="font-medium">{content.back}</span>
            </button>
            <button
              onClick={handleNext}
              className="flex items-center gap-3 bg-[#7F6A47] hover:bg-[#6b583a] text-[#F8F3E6] px-8 py-3 rounded-xl text-base font-bold shadow-lg transition-all active:scale-95 hover:shadow-[#7F6A47]/20"
            >
              {content.continue} <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
