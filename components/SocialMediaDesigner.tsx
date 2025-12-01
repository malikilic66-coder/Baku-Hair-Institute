import React, { useState, useRef } from 'react';
import { Download, Upload, Type, Image as ImageIcon, Sparkles } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  bgColor: string;
  pattern: string;
  textColor: string;
  accentColor: string;
}

const templates: Template[] = [
  {
    id: 'elegant-gold',
    name: 'Elegant Gold',
    bgColor: '#F8F3E6',
    pattern: 'diagonal-lines',
    textColor: '#3A3A3A',
    accentColor: '#7F6A47'
  },
  {
    id: 'dark-luxury',
    name: 'Dark Luxury',
    bgColor: '#3A3A3A',
    pattern: 'dots',
    textColor: '#F8F3E6',
    accentColor: '#7F6A47'
  },
  {
    id: 'minimal-white',
    name: 'Minimal White',
    bgColor: '#FFFFFF',
    pattern: 'none',
    textColor: '#3A3A3A',
    accentColor: '#7F6A47'
  },
  {
    id: 'gold-gradient',
    name: 'Gold Gradient',
    bgColor: 'linear-gradient(135deg, #7F6A47 0%, #F8F3E6 100%)',
    pattern: 'circles',
    textColor: '#3A3A3A',
    accentColor: '#FFFFFF'
  },
  {
    id: 'premium-dark',
    name: 'Premium Dark',
    bgColor: '#1A1A1A',
    pattern: 'grid',
    textColor: '#F8F3E6',
    accentColor: '#7F6A47'
  },
  {
    id: 'soft-beige',
    name: 'Soft Beige',
    bgColor: '#F0EBD9',
    pattern: 'waves',
    textColor: '#3A3A3A',
    accentColor: '#7F6A47'
  }
];

export const SocialMediaDesigner = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(templates[0]);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [topText, setTopText] = useState('BAKU HAIR INSTITUTE');
  const [middleText, setMiddleText] = useState('Premium Saç Əkimi');
  const [bottomText, setBottomText] = useState('Təbii Nəticələr');
  const [format, setFormat] = useState<'square' | 'story'>('square');
  
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    if (!canvasRef.current) return;

    try {
      // @ts-ignore - html2canvas dinamik olarak yüklenecek
      const html2canvas = (await import('html2canvas')).default;
      
      const canvas = await html2canvas(canvasRef.current, {
        scale: 2,
        backgroundColor: null,
        logging: false,
        useCORS: true
      });

      const link = document.createElement('a');
      link.download = `bhi-post-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Download error:', error);
      alert('Yükləmə zamanı xəta baş verdi. Zəhmət olmasa npm install əmrini işlədin.');
    }
  };

  const getPatternStyle = (pattern: string) => {
    const patterns: Record<string, string> = {
      'diagonal-lines': 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(127, 106, 71, 0.05) 10px, rgba(127, 106, 71, 0.05) 20px)',
      'dots': 'radial-gradient(circle, rgba(127, 106, 71, 0.1) 1px, transparent 1px)',
      'circles': 'radial-gradient(circle at 20% 50%, rgba(127, 106, 71, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(127, 106, 71, 0.1) 0%, transparent 50%)',
      'grid': 'linear-gradient(rgba(127, 106, 71, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(127, 106, 71, 0.05) 1px, transparent 1px)',
      'waves': 'repeating-radial-gradient(circle at 0 0, transparent 0, rgba(127, 106, 71, 0.05) 10px, transparent 20px)',
      'none': 'none'
    };
    return patterns[pattern] || 'none';
  };

  const getPatternSize = (pattern: string) => {
    const sizes: Record<string, string> = {
      'dots': '20px 20px',
      'grid': '20px 20px',
      'none': 'auto',
      'default': 'cover'
    };
    return sizes[pattern] || sizes['default'];
  };

  return (
    <div className="min-h-screen bg-[#F8F3E6] py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-[#7F6A47]" size={24} />
            <h1 className="text-5xl font-serif text-[#3A3A3A]">Sosial Media Dizayner</h1>
            <Sparkles className="text-[#7F6A47]" size={24} />
          </div>
          <p className="text-[#3A3A3A]/70 text-lg">Instagram və Facebook üçün professional görsellər yaradın</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Format Selection */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20">
              <h3 className="text-xl font-serif text-[#3A3A3A] mb-4 flex items-center gap-2">
                <ImageIcon size={20} className="text-[#7F6A47]" />
                Format Seçimi
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setFormat('square')}
                  className={`py-3 px-4 rounded border-2 transition-all ${
                    format === 'square'
                      ? 'border-[#7F6A47] bg-[#7F6A47] text-white'
                      : 'border-[#7F6A47]/30 text-[#3A3A3A] hover:border-[#7F6A47]'
                  }`}
                >
                  <div className="font-bold text-sm">Square</div>
                  <div className="text-xs opacity-70">1080x1080</div>
                </button>
                <button
                  onClick={() => setFormat('story')}
                  className={`py-3 px-4 rounded border-2 transition-all ${
                    format === 'story'
                      ? 'border-[#7F6A47] bg-[#7F6A47] text-white'
                      : 'border-[#7F6A47]/30 text-[#3A3A3A] hover:border-[#7F6A47]'
                  }`}
                >
                  <div className="font-bold text-sm">Story</div>
                  <div className="text-xs opacity-70">1080x1920</div>
                </button>
              </div>
            </div>

            {/* Image Upload */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20">
              <h3 className="text-xl font-serif text-[#3A3A3A] mb-4 flex items-center gap-2">
                <Upload size={20} className="text-[#7F6A47]" />
                Şəkil Yüklə
              </h3>
              <label className="block w-full cursor-pointer">
                <div className="border-2 border-dashed border-[#7F6A47]/30 rounded-lg p-8 text-center hover:border-[#7F6A47] transition-colors">
                  <Upload className="mx-auto mb-2 text-[#7F6A47]" size={32} />
                  <p className="text-sm text-[#3A3A3A]/70">Şəkil seçin</p>
                  {uploadedImage && <p className="text-xs text-[#7F6A47] mt-2">✓ Yükləndi</p>}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Text Inputs */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20">
              <h3 className="text-xl font-serif text-[#3A3A3A] mb-4 flex items-center gap-2">
                <Type size={20} className="text-[#7F6A47]" />
                Mətn Düzənlə
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#3A3A3A]/60 mb-2 block">Üst Mətn</label>
                  <input
                    type="text"
                    value={topText}
                    onChange={(e) => setTopText(e.target.value)}
                    className="w-full px-4 py-3 border border-[#7F6A47]/30 rounded focus:border-[#7F6A47] outline-none transition-colors"
                    placeholder="Üst başlıq"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#3A3A3A]/60 mb-2 block">Orta Mətn</label>
                  <input
                    type="text"
                    value={middleText}
                    onChange={(e) => setMiddleText(e.target.value)}
                    className="w-full px-4 py-3 border border-[#7F6A47]/30 rounded focus:border-[#7F6A47] outline-none transition-colors"
                    placeholder="Ana mətn"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#3A3A3A]/60 mb-2 block">Alt Mətn</label>
                  <input
                    type="text"
                    value={bottomText}
                    onChange={(e) => setBottomText(e.target.value)}
                    className="w-full px-4 py-3 border border-[#7F6A47]/30 rounded focus:border-[#7F6A47] outline-none transition-colors"
                    placeholder="Alt mətn"
                  />
                </div>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="w-full bg-[#7F6A47] text-white py-4 px-6 rounded-lg font-bold uppercase tracking-wider hover:bg-[#6A5A3A] transition-colors flex items-center justify-center gap-3 shadow-lg"
            >
              <Download size={20} />
              Yüklə
            </button>
          </div>

          {/* Right Panel - Templates & Preview */}
          <div className="lg:col-span-2 space-y-8">
            {/* Templates */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20">
              <h3 className="text-xl font-serif text-[#3A3A3A] mb-6">Şablon Seç</h3>
              <div className="grid grid-cols-3 gap-4">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template)}
                    className={`relative p-4 rounded-lg border-2 transition-all overflow-hidden group ${
                      selectedTemplate.id === template.id
                        ? 'border-[#7F6A47] shadow-lg'
                        : 'border-[#7F6A47]/20 hover:border-[#7F6A47]'
                    }`}
                    style={{
                      background: template.bgColor,
                      backgroundImage: getPatternStyle(template.pattern),
                      backgroundSize: getPatternSize(template.pattern)
                    }}
                  >
                    <div className="aspect-square flex items-center justify-center">
                      <span
                        className="text-xs font-bold text-center"
                        style={{ color: template.textColor }}
                      >
                        {template.name}
                      </span>
                    </div>
                    {selectedTemplate.id === template.id && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-[#7F6A47] rounded-full flex items-center justify-center text-white text-xs">
                        ✓
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Preview Canvas */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20">
              <h3 className="text-xl font-serif text-[#3A3A3A] mb-6">Önizləmə</h3>
              <div className="flex justify-center">
                <div
                  ref={canvasRef}
                  className={`relative overflow-hidden shadow-2xl ${
                    format === 'square' ? 'w-[500px] h-[500px]' : 'w-[400px] h-[711px]'
                  }`}
                  style={{
                    background: selectedTemplate.bgColor,
                    backgroundImage: getPatternStyle(selectedTemplate.pattern),
                    backgroundSize: getPatternSize(selectedTemplate.pattern)
                  }}
                >
                  {/* Uploaded Image */}
                  {uploadedImage && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={uploadedImage}
                        alt="Uploaded"
                        className="w-full h-full object-cover opacity-40"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                    </div>
                  )}

                  {/* Logo/Brand */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
                    <div
                      className="text-4xl font-serif font-black tracking-tighter mb-1"
                      style={{ color: selectedTemplate.accentColor }}
                    >
                      BHI
                    </div>
                    <div
                      className="text-xs uppercase tracking-widest"
                      style={{ color: selectedTemplate.textColor, opacity: 0.7 }}
                    >
                      Baku Hair Institute
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-12 text-center">
                    {topText && (
                      <div
                        className="text-sm uppercase tracking-[0.3em] mb-4 font-bold"
                        style={{ color: selectedTemplate.accentColor }}
                      >
                        {topText}
                      </div>
                    )}
                    {middleText && (
                      <h2
                        className={`font-serif font-bold mb-4 ${
                          format === 'square' ? 'text-5xl' : 'text-6xl'
                        }`}
                        style={{ color: selectedTemplate.textColor }}
                      >
                        {middleText}
                      </h2>
                    )}
                    {bottomText && (
                      <p
                        className="text-xl font-light italic"
                        style={{ color: selectedTemplate.textColor, opacity: 0.8 }}
                      >
                        {bottomText}
                      </p>
                    )}
                  </div>

                  {/* Bottom decoration */}
                  <div className="absolute bottom-0 left-0 right-0 h-2" style={{ backgroundColor: selectedTemplate.accentColor }} />
                  
                  {/* Contact Info (optional) */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                    <p
                      className="text-xs tracking-wider"
                      style={{ color: selectedTemplate.textColor, opacity: 0.6 }}
                    >
                      +994 50 123 45 67 • www.bakuhairinstitute.az
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
