
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Plus, Minus, User, CheckCircle } from 'lucide-react';

// --- Types ---
interface SpecialModeProps {
  specialMode: boolean;
}

interface CustomCursorProps extends SpecialModeProps {}
interface ScrollProgressProps extends SpecialModeProps {}

// --- Hook for Mouse Position ---
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => setMousePosition({ x: ev.clientX, y: ev.clientY });
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  return mousePosition;
};

// --- Components ---

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ specialMode }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScroll(scrolled);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-1 z-[100] transition-all duration-100 ease-out" style={{ width: `${scroll}%`, background: specialMode ? '#22c55e' : '#7F6A47' }}></div>
  );
};

export const CustomCursor: React.FC<CustomCursorProps> = ({ specialMode }) => {
  const { x, y } = useMousePosition();
  const [hoverState, setHoverState] = useState<null | 'interactive' | 'view'>(null);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.interactive') || target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('input') || target.closest('select') || target.closest('textarea')) {
        setHoverState('interactive');
      } else if (target.closest('.view-cursor')) {
        setHoverState('view');
      } else {
        setHoverState(null);
      }
    };
    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  // Hide custom cursor on mobile (using simple width check)
  if (typeof window !== 'undefined' && window.innerWidth < 1024) return null;

  return (
    <>
      <div 
        className={`fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 mix-blend-difference ${specialMode ? 'bg-green-500' : 'bg-[#7F6A47]'}`}
        style={{ left: `${x}px`, top: `${y}px` }} 
      />
      <div 
        className={`fixed top-0 left-0 border rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center ${specialMode ? 'border-green-500' : 'border-[#7F6A47]'}`}
        style={{ 
          left: `${x}px`, 
          top: `${y}px`, 
          width: hoverState === 'interactive' ? '50px' : (hoverState === 'view' ? '80px' : '30px'), 
          height: hoverState === 'interactive' ? '50px' : (hoverState === 'view' ? '80px' : '30px'),
          backgroundColor: hoverState === 'view' ? (specialMode ? 'rgba(34, 197, 94, 0.2)' : 'rgba(127, 106, 71, 0.2)') : 'transparent',
          backdropFilter: hoverState === 'view' ? 'blur(2px)' : 'none',
          borderColor: hoverState === 'view' ? 'transparent' : (specialMode ? '#22c55e' : '#7F6A47'),
          opacity: 1
        }} 
      >
        {hoverState === 'view' && <span className={`text-[10px] font-bold tracking-widest uppercase ${specialMode ? 'text-green-500' : 'text-[#3A3A3A]'}`}>View</span>}
      </div>
    </>
  );
};

export const MagneticButton: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void; specialMode?: boolean }> = ({ children, className, onClick, specialMode }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3; 
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      className={`interactive relative overflow-hidden transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </button>
  );
};

export const TiltCard: React.FC<{ children: React.ReactNode; className?: string; specialMode?: boolean }> = ({ children, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width; 
    const y = (e.clientY - top) / height;
    const rotateX = (0.5 - y) * 20; // Deg
    const rotateY = (x - 0.5) * 20; // Deg
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => setRotation({ x: 0, y: 0 });

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out transform perspective-1000 ${className}`}
      style={{ transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
    >
      {children}
    </div>
  );
};

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);
  if (!loading) return null;
  return (
    <div className="fixed inset-0 bg-[#3A3A3A] z-[9999] flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out">
      <h1 className="text-6xl md:text-8xl font-serif text-[#7F6A47] font-bold tracking-widest animate-pulse">BHI</h1>
      <div className="w-24 h-[1px] bg-[#7F6A47] mt-4 animate-width-expand"></div>
      <p className="mt-4 text-[#7F6A47] text-[10px] uppercase tracking-[0.3em]">Baku Hair Institute</p>
    </div>
  );
};

export const PageTransitionLoader: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <div 
      className={`fixed inset-0 z-[9998] bg-[#1a1a1a] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${active ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
    >
        <div className={`transform transition-all duration-700 ${active ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           <h1 className="text-6xl font-serif text-[#7F6A47] font-bold tracking-widest mb-4 text-center">BHI</h1>
           <div className="w-48 h-[2px] bg-[#333] relative overflow-hidden mx-auto rounded-full">
               <div className={`absolute top-0 left-0 h-full bg-[#7F6A47] transition-all duration-[800ms] ease-out w-full ${active ? 'translate-x-0' : '-translate-x-full'}`}></div>
           </div>
        </div>
    </div>
  );
};

export const Dropdown: React.FC<{ 
  title: string; 
  items: string[]; 
  specialMode: boolean;
  onNavigate?: (page: string) => void; 
}> = ({ title, items, specialMode, onNavigate }) => (
  <div className="group relative interactive h-full flex items-center">
    <button className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors hover:text-[#7F6A47] ${specialMode ? 'text-green-500 hover:text-green-300' : ''}`}>
      {title} <ChevronDown size={12} className="opacity-50 group-hover:opacity-100 transition-opacity"/>
    </button>
    <div className={`absolute top-full left-0 w-56 py-4 bg-[#F8F3E6]/95 backdrop-blur-md shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 border-t-2 border-[#7F6A47] ${specialMode ? 'bg-black border-green-500 shadow-green-900/20' : ''}`}>
      {items.map((item, idx) => (
        <a 
          key={idx} 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) {
              // Men items
              if (item.includes("Saç Əkimi") || item.includes("Пересадка Волос")) {
                onNavigate('men-hair');
              }
              else if (item.includes("Sakal Əkimi") || item.includes("Пересадка Бороды")) {
                onNavigate('men-beard');
              }
              // Women items
              else if (item.includes("Kaş Əkimi") || item.includes("Пересадка Бровей")) {
                onNavigate('women-eyebrow');
              }
              // Other procedures
              else if (item === "PRP") {
                onNavigate('prp');
              }
              else if (item.includes("Mezoterapiya") || item.includes("Мезотерапия")) {
                onNavigate('mesotherapy');
              }
              else if (item.includes("Medikal") || item.includes("Медицинское")) {
                onNavigate('medical');
              }
              // About & Contact - scroll to sections
              else if (item.includes("Konsültasyon") || item.includes("Форма")) {
                onNavigate('home');
                setTimeout(() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }
              else {
                onNavigate('home');
              }
            }
          }}
          className={`block px-6 py-3 text-xs font-medium uppercase tracking-wider hover:bg-[#7F6A47]/10 hover:pl-8 transition-all duration-300 ${specialMode ? 'text-green-500 hover:bg-green-900/20' : 'text-[#3A3A3A] hover:text-[#7F6A47]'}`}
        >
          {item}
        </a>
      ))}
    </div>
  </div>
);

export const Accordion: React.FC<{ question: string; answer: string; specialMode: boolean }> = ({ question, answer, specialMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border-b transition-colors duration-300 ${specialMode ? 'border-green-900' : 'border-[#7F6A47]/30'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center py-6 text-left focus:outline-none interactive group"
      >
        <span className={`text-lg font-serif transition-colors ${specialMode ? 'text-green-500 group-hover:text-green-300' : 'text-[#3A3A3A] group-hover:text-[#7F6A47]'}`}>{question}</span>
        <span className={`text-xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${specialMode ? 'text-green-500' : 'text-[#7F6A47]'}`}>
          <Plus size={20} className={`transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <Minus size={20} className={`absolute transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className={`text-sm font-light leading-relaxed ${specialMode ? 'text-green-700' : 'text-[#3A3A3A]/70'}`}>{answer}</p>
      </div>
    </div>
  );
};

export const DoctorCard: React.FC<{ name: string; title: string; exp: string; specialty: string; image: string; specialMode: boolean }> = ({ name, title, exp, specialty, image, specialMode }) => {
    return (
        <div className="group relative overflow-hidden h-[450px] w-full view-cursor">
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img src={image} alt={name} className={`w-full h-full object-cover transition-all duration-500 ${specialMode ? 'grayscale invert' : 'grayscale group-hover:grayscale-0'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-8 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                <div className={`text-[10px] uppercase tracking-widest mb-2 ${specialMode ? 'text-green-500' : 'text-[#7F6A47]'}`}>{specialty}</div>
                <h3 className="text-2xl font-serif text-[#F8F3E6] mb-1">{name}</h3>
                <p className="text-sm text-[#F8F3E6]/60 mb-4">{title}</p>
                <div className={`h-[1px] w-0 group-hover:w-full transition-all duration-700 delay-100 bg-[#7F6A47]`}></div>
                <div className="mt-4 flex items-center gap-2 text-[#F8F3E6]/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <User size={14} className="text-[#7F6A47]" />
                    <span>{exp}</span>
                </div>
            </div>
        </div>
    );
}

export const WhyUsCard: React.FC<{ title: string; desc: string; specialMode: boolean; idx: number }> = ({ title, desc, specialMode, idx }) => {
    return (
        <div className={`relative z-10 p-8 border-l border-b border-[#7F6A47]/10 hover:bg-[#F8F3E6]/60 transition-colors duration-300 group ${specialMode ? 'hover:bg-green-900/10 border-green-900/30' : ''}`}>
             <div className="mb-4 text-[#7F6A47] opacity-50 group-hover:opacity-100 transition-opacity">
                 <CheckCircle size={24} />
             </div>
             <h4 className={`text-lg font-serif mb-2 ${specialMode ? 'text-green-500' : 'text-[#3A3A3A]'}`}>{title}</h4>
             <p className={`text-sm font-light ${specialMode ? 'text-green-700' : 'text-[#3A3A3A]/60'}`}>{desc}</p>
        </div>
    );
}

// Geometric Shebeke/Carpet inspired pattern - Large Format
export const AzePatternBackground = () => (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-multiply">
        {/* Main Large Carpet Motif Layer */}
        <div 
            className="absolute inset-0 animate-pattern-pulse"
            style={{
                opacity: 0.1,
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%237F6A47' fill-rule='evenodd'%3E%3C!-- Large Central Octagon/Göl --%3E%3Cpath d='M150 50 L250 150 L150 250 L50 150 Z' stroke='%237F6A47' stroke-width='3' fill='none'/%3E%3Cpath d='M150 70 L230 150 L150 230 L70 150 Z' fill='%237F6A47' opacity='0.15'/%3E%3C!-- Central Star Element --%3E%3Crect x='130' y='130' width='40' height='40' transform='rotate(45 150 150)' fill='%237F6A47' opacity='0.8'/%3E%3C!-- Corner Motifs (Carpet Hooks / Buta Abstraction) --%3E%3Cpath d='M0 0 L100 0 L100 20 L80 20 L80 40 L60 40 L60 0 L0 0 Z' fill='%237F6A47' opacity='0.3'/%3E%3Cpath d='M300 0 L200 0 L200 20 L220 20 L220 40 L240 40 L240 0 L300 0 Z' fill='%237F6A47' opacity='0.3'/%3E%3Cpath d='M0 300 L100 300 L100 280 L80 280 L80 260 L60 260 L60 300 L0 300 Z' fill='%237F6A47' opacity='0.3'/%3E%3Cpath d='M300 300 L200 300 L200 280 L220 280 L220 260 L240 260 L240 300 L300 300 Z' fill='%237F6A47' opacity='0.3'/%3E%3C!-- Side Vertical Elements (Connecting the pattern) --%3E%3Crect x='0' y='140' width='20' height='20' fill='%237F6A47' opacity='0.4'/%3E%3Crect x='280' y='140' width='20' height='20' fill='%237F6A47' opacity='0.4'/%3E%3C!-- Small Scatter Dots for texture --%3E%3Ccircle cx='150' cy='20' r='5' fill='%237F6A47' opacity='0.5'/%3E%3Ccircle cx='150' cy='280' r='5' fill='%237F6A47' opacity='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '300px 300px'
            }}
        ></div>
    </div>
);
