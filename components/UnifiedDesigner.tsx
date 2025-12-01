import React, { useState, useRef, useEffect } from 'react';
import { 
  X, Maximize2, Minimize2, Download, Upload, Type, 
  Layers, Eye, EyeOff, Lock, Unlock, Trash2,
  ZoomIn, ZoomOut, Move, RotateCw, Copy,
  ChevronLeft, ChevronRight, Grid, Sparkles,
  Image as ImageIcon
} from 'lucide-react';

interface EditableLayer {
  id: string;
  type: 'text' | 'image' | 'logo' | 'background';
  locked: boolean;
  content?: string;
  src?: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  style: any;
}

interface Template {
  id: string;
  name: string;
  category: 'case-study' | 'faq' | 'testimonial' | 'before-after' | 'quote' | 'promo' | 'countdown' | 'info';
  thumbnail: string;
  bgColor: string;
  layers: EditableLayer[];
}

const templates: Template[] = [
  // CASE STUDY TEMPLATES
  {
    id: 'case-study-1',
    name: 'Vaka Analizi - Klassik',
    category: 'case-study',
    thumbnail: '📊',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'logo', type: 'logo', locked: true, content: 'BHI', position: { x: 40, y: 40 }, size: { width: 100, height: 60 }, style: { fontSize: 48, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold' } },
      { id: 'patient-img', type: 'image', locked: false, src: '', position: { x: 90, y: 200 }, size: { width: 900, height: 400 }, style: { borderRadius: 12, objectFit: 'cover' } },
      { id: 'title', type: 'text', locked: false, content: 'SAÇ ƏKİMİ VAKASI', position: { x: 540, y: 650 }, size: { width: 800, height: 60 }, style: { fontSize: 42, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'graft-count', type: 'text', locked: false, content: '4500 Greft', position: { x: 200, y: 750 }, size: { width: 300, height: 50 }, style: { fontSize: 32, fontFamily: 'Inter', color: '#7F6A47', fontWeight: 'bold' } },
      { id: 'technique', type: 'text', locked: false, content: 'DHI Texnikası', position: { x: 580, y: 750 }, size: { width: 300, height: 50 }, style: { fontSize: 32, fontFamily: 'Inter', color: '#7F6A47', fontWeight: 'bold' } },
      { id: 'info', type: 'text', locked: false, content: 'Əməliyyatdan 6 ay sonra', position: { x: 540, y: 850 }, size: { width: 600, height: 40 }, style: { fontSize: 24, fontFamily: 'Inter', color: '#3A3A3A', textAlign: 'center' } }
    ]
  },
  {
    id: 'case-study-2',
    name: 'Vaka Analizi - Premium',
    category: 'case-study',
    thumbnail: '💎',
    bgColor: '#1A1A1A',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#1A1A1A' } },
      { id: 'accent-bar', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 120 }, style: { backgroundColor: '#7F6A47' } },
      { id: 'logo', type: 'logo', locked: true, content: 'BHI', position: { x: 40, y: 35 }, size: { width: 80, height: 50 }, style: { fontSize: 40, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold' } },
      { id: 'patient-img', type: 'image', locked: false, src: '', position: { x: 140, y: 200 }, size: { width: 800, height: 500 }, style: { borderRadius: 16, objectFit: 'cover', border: '4px solid #7F6A47' } },
      { id: 'title', type: 'text', locked: false, content: 'PREMIUM NƏTICƏ', position: { x: 540, y: 750 }, size: { width: 700, height: 70 }, style: { fontSize: 52, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'stats', type: 'text', locked: false, content: '5200 Greft • FUE Metodu', position: { x: 540, y: 850 }, size: { width: 600, height: 50 }, style: { fontSize: 28, fontFamily: 'Inter', color: '#F8F3E6', textAlign: 'center' } }
    ]
  },

  // FAQ TEMPLATES
  {
    id: 'faq-1',
    name: 'Tez-Tez Verilən Suallar',
    category: 'faq',
    thumbnail: '❓',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'logo', type: 'logo', locked: true, content: 'BHI', position: { x: 490, y: 50 }, size: { width: 100, height: 60 }, style: { fontSize: 48, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'question-icon', type: 'text', locked: true, content: '?', position: { x: 490, y: 200 }, size: { width: 100, height: 100 }, style: { fontSize: 120, color: '#7F6A47', textAlign: 'center', fontWeight: 'bold' } },
      { id: 'question', type: 'text', locked: false, content: 'SAÇ ƏKİMİ ACITIRMI?', position: { x: 540, y: 400 }, size: { width: 900, height: 100 }, style: { fontSize: 48, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'answer', type: 'text', locked: false, content: 'Xeyr! Lokal anesteziya sayəsində\nəməliyyat ağrısızdır.', position: { x: 540, y: 600 }, size: { width: 800, height: 200 }, style: { fontSize: 32, fontFamily: 'Inter', color: '#3A3A3A', textAlign: 'center', lineHeight: 1.6 } }
    ]
  },
  {
    id: 'faq-2',
    name: 'Məlumat Kartı',
    category: 'faq',
    thumbnail: 'ℹ️',
    bgColor: '#F0EBD9',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#F0EBD9' } },
      { id: 'header-bar', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 150 }, style: { backgroundColor: '#7F6A47' } },
      { id: 'title', type: 'text', locked: false, content: 'BİLDİYİNİZ Kİ?', position: { x: 540, y: 75 }, size: { width: 800, height: 60 }, style: { fontSize: 52, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'fact', type: 'text', locked: false, content: 'FUE texnikası ilə\ntək tük izi buraxmadan\nsaç əkimi mümkündür', position: { x: 540, y: 500 }, size: { width: 900, height: 300 }, style: { fontSize: 42, fontFamily: 'Inter', color: '#3A3A3A', textAlign: 'center', lineHeight: 1.5 } }
    ]
  },

  // TESTIMONIAL TEMPLATES
  {
    id: 'testimonial-1',
    name: 'Müştəri Rəyi',
    category: 'testimonial',
    thumbnail: '⭐',
    bgColor: '#3A3A3A',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#3A3A3A' } },
      { id: 'logo', type: 'logo', locked: true, content: 'BHI', position: { x: 490, y: 60 }, size: { width: 100, height: 60 }, style: { fontSize: 48, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'stars', type: 'text', locked: true, content: '⭐⭐⭐⭐⭐', position: { x: 540, y: 250 }, size: { width: 300, height: 60 }, style: { fontSize: 48, textAlign: 'center' } },
      { id: 'quote', type: 'text', locked: false, content: '"Nəticə möhtəşəmdir!\nÖzümü 10 yaş gənc hiss edirəm."', position: { x: 540, y: 450 }, size: { width: 900, height: 200 }, style: { fontSize: 38, fontFamily: 'Playfair Display', color: '#F8F3E6', textAlign: 'center', fontStyle: 'italic', lineHeight: 1.5 } },
      { id: 'name', type: 'text', locked: false, content: '- Rəşad Məmmədov', position: { x: 540, y: 700 }, size: { width: 500, height: 50 }, style: { fontSize: 28, fontFamily: 'Inter', color: '#7F6A47', textAlign: 'center' } }
    ]
  },

  // BEFORE/AFTER TEMPLATES
  {
    id: 'before-after-1',
    name: 'Əvvəl & Sonra - Klassik',
    category: 'before-after',
    thumbnail: '🔄',
    bgColor: '#1A1A1A',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#1A1A1A' } },
      { id: 'title', type: 'text', locked: false, content: 'ƏVVƏL & SONRA', position: { x: 540, y: 80 }, size: { width: 800, height: 70 }, style: { fontSize: 56, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'before-img', type: 'image', locked: false, src: '', position: { x: 90, y: 250 }, size: { width: 450, height: 500 }, style: { borderRadius: 12, objectFit: 'cover' } },
      { id: 'after-img', type: 'image', locked: false, src: '', position: { x: 540, y: 250 }, size: { width: 450, height: 500 }, style: { borderRadius: 12, objectFit: 'cover' } },
      { id: 'before-label', type: 'text', locked: true, content: 'ƏVVƏL', position: { x: 315, y: 780 }, size: { width: 200, height: 50 }, style: { fontSize: 28, fontFamily: 'Inter', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'after-label', type: 'text', locked: true, content: 'SONRA', position: { x: 765, y: 780 }, size: { width: 200, height: 50 }, style: { fontSize: 28, fontFamily: 'Inter', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'timeline', type: 'text', locked: false, content: '6 AY SONRA', position: { x: 540, y: 900 }, size: { width: 400, height: 50 }, style: { fontSize: 32, fontFamily: 'Inter', color: '#F8F3E6', textAlign: 'center' } }
    ]
  },

  // QUOTE TEMPLATES
  {
    id: 'quote-doctor',
    name: 'Doktor Məsləhəti',
    category: 'quote',
    thumbnail: '👨‍⚕️',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'doctor-img', type: 'image', locked: false, src: '', position: { x: 90, y: 200 }, size: { width: 400, height: 600 }, style: { borderRadius: 16, objectFit: 'cover' } },
      { id: 'quote-text', type: 'text', locked: false, content: '"Saç sağlamlığı\nümumi sağlamlığın\ngöstəricisidir."', position: { x: 700, y: 400 }, size: { width: 600, height: 300 }, style: { fontSize: 42, fontFamily: 'Playfair Display', color: '#3A3A3A', fontStyle: 'italic', lineHeight: 1.5 } },
      { id: 'doctor-name', type: 'text', locked: false, content: 'Dr. Əli Həsənov', position: { x: 700, y: 750 }, size: { width: 500, height: 50 }, style: { fontSize: 28, fontFamily: 'Inter', color: '#7F6A47', fontWeight: 'bold' } }
    ]
  },

  // PROMO TEMPLATES
  {
    id: 'promo-discount',
    name: 'Endrim Kampaniyası',
    category: 'promo',
    thumbnail: '🎉',
    bgColor: '#7F6A47',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#7F6A47' } },
      { id: 'badge', type: 'text', locked: true, content: '🎉', position: { x: 540, y: 150 }, size: { width: 100, height: 100 }, style: { fontSize: 80, textAlign: 'center' } },
      { id: 'announcement', type: 'text', locked: false, content: 'XÜSUSI TƏKLİF', position: { x: 540, y: 300 }, size: { width: 800, height: 80 }, style: { fontSize: 52, fontFamily: 'Inter', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'discount', type: 'text', locked: false, content: '%40', position: { x: 540, y: 480 }, size: { width: 400, height: 150 }, style: { fontSize: 140, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'subtitle', type: 'text', locked: false, content: 'ENDİRİM', position: { x: 540, y: 680 }, size: { width: 500, height: 70 }, style: { fontSize: 56, fontFamily: 'Inter', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'validity', type: 'text', locked: false, content: 'Dekabr ayı üçün keçərlidir', position: { x: 540, y: 850 }, size: { width: 700, height: 50 }, style: { fontSize: 28, fontFamily: 'Inter', color: '#F8F3E6', textAlign: 'center' } }
    ]
  },

  // COUNTDOWN TEMPLATES
  {
    id: 'countdown-event',
    name: 'Geri Sayım',
    category: 'countdown',
    thumbnail: '⏰',
    bgColor: '#3A3A3A',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#3A3A3A' } },
      { id: 'logo', type: 'logo', locked: true, content: 'BHI', position: { x: 490, y: 60 }, size: { width: 100, height: 60 }, style: { fontSize: 48, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'event-title', type: 'text', locked: false, content: 'BAKÜ\'YƏ GƏLİRİK!', position: { x: 540, y: 300 }, size: { width: 900, height: 100 }, style: { fontSize: 62, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'countdown-num', type: 'text', locked: false, content: '7', position: { x: 540, y: 500 }, size: { width: 200, height: 200 }, style: { fontSize: 180, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'countdown-label', type: 'text', locked: true, content: 'GÜN QALDI', position: { x: 540, y: 730 }, size: { width: 400, height: 60 }, style: { fontSize: 42, fontFamily: 'Inter', color: '#F8F3E6', textAlign: 'center' } }
    ]
  },

  // INFO TEMPLATES
  {
    id: 'info-technique',
    name: 'Texnika Məlumatı',
    category: 'info',
    thumbnail: '📚',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'header-bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 200 }, style: { background: 'linear-gradient(135deg, #7F6A47 0%, #F8F3E6 100%)' } },
      { id: 'title', type: 'text', locked: false, content: 'FUE TEXNİKASI', position: { x: 540, y: 100 }, size: { width: 800, height: 70 }, style: { fontSize: 56, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'subtitle', type: 'text', locked: true, content: 'Follicular Unit Extraction', position: { x: 540, y: 250 }, size: { width: 700, height: 50 }, style: { fontSize: 24, fontFamily: 'Inter', color: '#7F6A47', textAlign: 'center', fontStyle: 'italic' } },
      { id: 'info-img', type: 'image', locked: false, src: '', position: { x: 140, y: 350 }, size: { width: 800, height: 400 }, style: { borderRadius: 12, objectFit: 'cover' } },
      { id: 'description', type: 'text', locked: false, content: 'Mikromotor vasitəsilə\ntək-tək folikulların çıxarılması', position: { x: 540, y: 850 }, size: { width: 800, height: 120 }, style: { fontSize: 32, fontFamily: 'Inter', color: '#3A3A3A', textAlign: 'center', lineHeight: 1.4 } }
    ]
  }
];

export const UnifiedDesigner = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [layers, setLayers] = useState<EditableLayer[]>([]);
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  
  const canvasRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load template
  const loadTemplate = (template: Template) => {
    setSelectedTemplate(template);
    setLayers(JSON.parse(JSON.stringify(template.layers))); // Deep clone
  };

  // Handle image upload with instant preview
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, layerId: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create Blob URL for instant preview
    const imageUrl = URL.createObjectURL(file);
    
    setLayers(prevLayers =>
      prevLayers.map(layer =>
        layer.id === layerId
          ? { ...layer, src: imageUrl }
          : layer
      )
    );
  };

  // Update text content
  const updateLayerText = (layerId: string, newContent: string) => {
    setLayers(prevLayers =>
      prevLayers.map(layer =>
        layer.id === layerId
          ? { ...layer, content: newContent }
          : layer
      )
    );
  };

  // Download canvas as PNG
  const handleDownload = async () => {
    if (!canvasRef.current) return;

    try {
      const html2canvas = (await import('html2canvas')).default;
      
      const canvas = await html2canvas(canvasRef.current, {
        scale: 2,
        backgroundColor: null,
        logging: false,
        useCORS: true,
        allowTaint: true
      });

      const link = document.createElement('a');
      link.download = `bhi-${selectedTemplate?.id || 'design'}-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    } catch (error) {
      console.error('Download error:', error);
      alert('Yükləmə zamanı xəta baş verdi');
    }
  };

  const categories = [
    { id: 'all', name: 'Hamısı', icon: Grid },
    { id: 'case-study', name: 'Vaka Analizi', icon: '📊' },
    { id: 'before-after', name: 'Əvvəl & Sonra', icon: '🔄' },
    { id: 'testimonial', name: 'Rəylər', icon: '⭐' },
    { id: 'faq', name: 'Suallar', icon: '❓' },
    { id: 'quote', name: 'Məsləhətlər', icon: '👨‍⚕️' },
    { id: 'promo', name: 'Kampaniya', icon: '🎉' },
    { id: 'countdown', name: 'Geri Sayım', icon: '⏰' },
    { id: 'info', name: 'Məlumat', icon: '📚' }
  ];

  const filteredTemplates = filterCategory === 'all' 
    ? templates 
    : templates.filter(t => t.category === filterCategory);

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-[9999]' : 'min-h-screen'} bg-gradient-to-br from-[#F8F3E6] via-white to-[#F0EBD9]`}>
      {/* Fullscreen Header */}
      {isFullscreen && (
        <div className="absolute top-0 left-0 right-0 h-16 bg-[#3A3A3A]/95 backdrop-blur-sm flex items-center justify-between px-6 z-50">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-[#7F6A47]" />
            <span className="text-xl font-serif font-bold text-[#F8F3E6]">BHI Creative Workstation</span>
          </div>
          <button
            onClick={() => setIsFullscreen(false)}
            className="p-2 bg-[#7F6A47] hover:bg-[#6B5A3D] text-white rounded-lg transition-all flex items-center gap-2"
          >
            <Minimize2 className="w-5 h-5" />
            <span className="text-sm font-medium">Çıxış</span>
          </button>
        </div>
      )}

      <div className={`${isFullscreen ? 'pt-16' : 'pt-8 pb-8'} px-4 max-w-[1920px] mx-auto`}>
        {/* Top Controls (non-fullscreen) */}
        {!isFullscreen && (
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-5xl font-serif font-black text-[#3A3A3A] mb-2">
                BHI Creative Studio
              </h1>
              <p className="text-lg text-[#7F6A47]">
                Hibrit Dizayn Platforması - Hazır Şablonlarla Sürətli Yaradıcılıq
              </p>
            </div>
            
            <button
              onClick={() => setIsFullscreen(true)}
              className="flex items-center gap-3 px-6 py-3 bg-[#7F6A47] hover:bg-[#6B5A3D] text-white rounded-lg transition-all shadow-lg"
            >
              <Maximize2 className="w-5 h-5" />
              <span className="font-medium">Tam Ekran Modu</span>
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Template Library */}
          <div className={`${isFullscreen ? 'h-[calc(100vh-8rem)]' : 'h-auto'} space-y-4 overflow-y-auto`}>
            {/* Category Filter */}
            <div className="bg-white p-4 rounded-lg shadow-lg border border-[#7F6A47]/20">
              <h3 className="text-lg font-serif text-[#3A3A3A] mb-3 font-bold">Kateqoriyalar</h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setFilterCategory(cat.id)}
                    className={`p-2 rounded-lg text-sm font-medium transition-all ${
                      filterCategory === cat.id
                        ? 'bg-[#7F6A47] text-white'
                        : 'bg-gray-50 text-[#3A3A3A] hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xl">{typeof cat.icon === 'string' ? cat.icon : '📁'}</span>
                      <span className="text-xs">{cat.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Template Cards */}
            <div className="bg-white p-4 rounded-lg shadow-lg border border-[#7F6A47]/20">
              <h3 className="text-lg font-serif text-[#3A3A3A] mb-3 font-bold">
                Şablonlar ({filteredTemplates.length})
              </h3>
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {filteredTemplates.map(template => (
                  <button
                    key={template.id}
                    onClick={() => loadTemplate(template)}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      selectedTemplate?.id === template.id
                        ? 'bg-[#7F6A47] text-white shadow-md'
                        : 'bg-gray-50 text-[#3A3A3A] hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{template.thumbnail}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">{template.name}</div>
                        <div className={`text-xs ${selectedTemplate?.id === template.id ? 'text-[#F8F3E6]/80' : 'text-gray-500'}`}>
                          {categories.find(c => c.id === template.category)?.name}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Center - Canvas Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-serif text-[#3A3A3A] font-bold">
                  {selectedTemplate ? selectedTemplate.name : 'Şablon Seçin'}
                </h3>
                
                {selectedTemplate && (
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-4 py-2 bg-[#7F6A47] hover:bg-[#6B5A3D] text-white rounded-lg transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span className="text-sm font-medium">PNG Yüklə</span>
                  </button>
                )}
              </div>

              {/* Canvas */}
              <div className="flex justify-center items-center bg-gray-50 p-8 rounded-lg min-h-[600px]">
                {selectedTemplate ? (
                  <div
                    ref={canvasRef}
                    className="relative shadow-2xl"
                    style={{
                      width: '540px',
                      height: '540px',
                      backgroundColor: selectedTemplate.bgColor,
                      transform: `scale(${zoom})`
                    }}
                  >
                    {layers.map(layer => {
                      if (layer.type === 'background') {
                        return (
                          <div
                            key={layer.id}
                            className="absolute"
                            style={{
                              left: `${(layer.position.x / 1080) * 100}%`,
                              top: `${(layer.position.y / 1080) * 100}%`,
                              width: `${(layer.size.width / 1080) * 100}%`,
                              height: `${(layer.size.height / 1080) * 100}%`,
                              ...layer.style
                            }}
                          />
                        );
                      }

                      if (layer.type === 'logo') {
                        return (
                          <div
                            key={layer.id}
                            className="absolute font-serif font-bold"
                            style={{
                              left: `${(layer.position.x / 1080) * 100}%`,
                              top: `${(layer.position.y / 1080) * 100}%`,
                              fontSize: `${(layer.style.fontSize / 1080) * 540}px`,
                              color: layer.style.color,
                              fontFamily: layer.style.fontFamily
                            }}
                          >
                            {layer.content}
                          </div>
                        );
                      }

                      if (layer.type === 'text') {
                        return (
                          <div
                            key={layer.id}
                            className={`absolute ${layer.locked ? 'cursor-default' : 'cursor-text'}`}
                            onClick={() => !layer.locked && setSelectedLayerId(layer.id)}
                            style={{
                              left: `${(layer.position.x / 1080) * 100}%`,
                              top: `${(layer.position.y / 1080) * 100}%`,
                              width: `${(layer.size.width / 1080) * 100}%`,
                              transform: 'translateX(-50%)',
                              fontSize: `${(layer.style.fontSize / 1080) * 540}px`,
                              color: layer.style.color,
                              fontFamily: layer.style.fontFamily,
                              fontWeight: layer.style.fontWeight,
                              textAlign: layer.style.textAlign,
                              fontStyle: layer.style.fontStyle,
                              lineHeight: layer.style.lineHeight,
                              whiteSpace: 'pre-line'
                            }}
                          >
                            {layer.content}
                          </div>
                        );
                      }

                      if (layer.type === 'image') {
                        return (
                          <div
                            key={layer.id}
                            className="absolute overflow-hidden cursor-pointer"
                            onClick={() => !layer.locked && setSelectedLayerId(layer.id)}
                            style={{
                              left: `${(layer.position.x / 1080) * 100}%`,
                              top: `${(layer.position.y / 1080) * 100}%`,
                              width: `${(layer.size.width / 1080) * 100}%`,
                              height: `${(layer.size.height / 1080) * 100}%`,
                              borderRadius: layer.style.borderRadius,
                              border: layer.style.border,
                              backgroundColor: '#E5E5E5'
                            }}
                          >
                            {layer.src ? (
                              <img
                                src={layer.src}
                                alt=""
                                className="w-full h-full"
                                style={{
                                  objectFit: layer.style.objectFit || 'cover',
                                  objectPosition: 'center'
                                }}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400">
                                <Upload className="w-12 h-12" />
                              </div>
                            )}
                          </div>
                        );
                      }

                      return null;
                    })}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-20">
                    <Grid className="w-20 h-20 mx-auto mb-4 opacity-30" />
                    <p className="text-lg">Başlamaq üçün sol tərəfdən şablon seçin</p>
                  </div>
                )}
              </div>

              {/* Zoom Controls */}
              {selectedTemplate && (
                <div className="flex items-center justify-center gap-4 mt-4">
                  <button
                    onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
                  >
                    <ZoomOut className="w-5 h-5 text-[#3A3A3A]" />
                  </button>
                  <span className="text-sm font-medium text-[#3A3A3A] min-w-[60px] text-center">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    onClick={() => setZoom(Math.min(1.5, zoom + 0.1))}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
                  >
                    <ZoomIn className="w-5 h-5 text-[#3A3A3A]" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar - Layer Editor */}
          <div className={`${isFullscreen ? 'h-[calc(100vh-8rem)]' : 'h-auto'} overflow-y-auto`}>
            {selectedTemplate ? (
              <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20">
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-5 h-5 text-[#7F6A47]" />
                  <h3 className="text-xl font-serif text-[#3A3A3A] font-bold">Qatlar</h3>
                </div>

                <div className="space-y-3">
                  {layers.map(layer => {
                    if (layer.locked) return null;

                    return (
                      <div
                        key={layer.id}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          selectedLayerId === layer.id
                            ? 'border-[#7F6A47] bg-[#7F6A47]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            {layer.type === 'text' && <Type className="w-4 h-4 text-[#7F6A47]" />}
                            {layer.type === 'image' && <ImageIcon className="w-4 h-4 text-[#7F6A47]" />}
                            <span className="text-sm font-medium text-[#3A3A3A]">
                              {layer.type === 'text' ? 'Mətn' : 'Şəkil'}
                            </span>
                          </div>
                          <button
                            onClick={() => setSelectedLayerId(selectedLayerId === layer.id ? null : layer.id)}
                            className="text-xs text-[#7F6A47] hover:underline"
                          >
                            {selectedLayerId === layer.id ? 'Bağla' : 'Düzəlt'}
                          </button>
                        </div>

                        {selectedLayerId === layer.id && (
                          <div className="space-y-3 pt-3 border-t border-gray-200">
                            {layer.type === 'text' && (
                              <textarea
                                value={layer.content || ''}
                                onChange={(e) => updateLayerText(layer.id, e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7F6A47] focus:border-transparent resize-none"
                                rows={3}
                                placeholder="Mətn daxil edin..."
                              />
                            )}

                            {layer.type === 'image' && (
                              <div>
                                <label className="block mb-2 text-sm font-medium text-[#3A3A3A]">
                                  Şəkil Yüklə
                                </label>
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) => handleImageUpload(e, layer.id)}
                                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#7F6A47] file:text-white hover:file:bg-[#6B5A3D] file:cursor-pointer"
                                />
                                {layer.src && (
                                  <div className="mt-2 text-xs text-green-600 flex items-center gap-1">
                                    <span>✓</span>
                                    <span>Şəkil yükləndi</span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20 text-center text-gray-500">
                <p>Düzəliş üçün şablon seçin</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
