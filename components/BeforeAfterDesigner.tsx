import React, { useState, useRef } from 'react';
import { Download, Upload, ArrowLeft, ArrowRight, Minus } from 'lucide-react';

export const BeforeAfterDesigner = () => {
  const [beforeImage, setBeforeImage] = useState<string | null>(null);
  const [afterImage, setAfterImage] = useState<string | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [title, setTitle] = useState('ƏVVƏL & SONRA');
  const [subtitle, setSubtitle] = useState('6 AY SONRA');
  const [format, setFormat] = useState<'side-by-side' | 'slider'>('slider');
  const [bgColor, setBgColor] = useState('#3A3A3A');
  const [showNorwood, setShowNorwood] = useState(false);
  const [norwoodBefore, setNorwoodBefore] = useState(5);
  const [norwoodAfter, setNorwoodAfter] = useState(1);
  
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'before' | 'after') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (type === 'before') {
        setBeforeImage(result);
      } else {
        setAfterImage(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = async () => {
    if (!canvasRef.current) return;

    try {
      const html2canvas = (await import('html2canvas')).default;
      
      const canvas = await html2canvas(canvasRef.current, {
        scale: 2.16, // 1080 / 500
        backgroundColor: null,
        logging: false,
        useCORS: true,
        allowTaint: true
      });

      const link = document.createElement('a');
      link.download = `bhi-before-after-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    } catch (error) {
      console.error('Download error:', error);
      alert('Yükləmə zamanı xəta baş verdi');
    }
  };

  const norwoodScaleDescriptions = [
    'Saç tökülməsi yoxdur',
    'Minimal tökülmə',
    'Yüngül tökülmə',
    'Orta dərəcəli tökülmə',
    'Orta-ciddi tökülmə',
    'Ciddi tökülmə',
    'Çox ciddi tökülmə'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F3E6] via-white to-[#F0EBD9] py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-serif font-black text-[#3A3A3A] mb-3">
            Əvvəl & Sonra Modulu
          </h1>
          <p className="text-lg text-[#7F6A47]">
            Nəticələrinizi Profesional Şəkildə Göstərin
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Controls */}
          <div className="space-y-6">
            {/* Format */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20">
              <h3 className="text-xl font-serif text-[#3A3A3A] mb-4">Format</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setFormat('slider')}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                    format === 'slider'
                      ? 'bg-[#7F6A47] text-white shadow-md'
                      : 'bg-gray-100 text-[#3A3A3A] hover:bg-gray-200'
                  }`}
                >
                  Slider Qarşılaşdırma
                </button>
                <button
                  onClick={() => setFormat('side-by-side')}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                    format === 'side-by-side'
                      ? 'bg-[#7F6A47] text-white shadow-md'
                      : 'bg-gray-100 text-[#3A3A3A] hover:bg-gray-200'
                  }`}
                >
                  Yan Yana
                </button>
              </div>
            </div>

            {/* Image Upload */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20">
              <h3 className="text-xl font-serif text-[#3A3A3A] mb-4">Şəkillər</h3>
              <div className="space-y-3">
                <label className="block">
                  <span className="text-sm font-medium text-[#3A3A3A] mb-2 block">Əvvəl</span>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-all">
                    <Upload className="w-5 h-5 text-[#7F6A47]" />
                    <span className="text-sm text-[#3A3A3A]">
                      {beforeImage ? 'Dəyişdir' : 'Yüklə'}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, 'before')}
                      className="hidden"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-[#3A3A3A] mb-2 block">Sonra</span>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-all">
                    <Upload className="w-5 h-5 text-[#7F6A47]" />
                    <span className="text-sm text-[#3A3A3A]">
                      {afterImage ? 'Dəyişdir' : 'Yüklə'}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, 'after')}
                      className="hidden"
                    />
                  </div>
                </label>
              </div>
            </div>

            {/* Text */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20">
              <h3 className="text-xl font-serif text-[#3A3A3A] mb-4">Mətn</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-[#3A3A3A] mb-2 block">Başlıq</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7F6A47] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#3A3A3A] mb-2 block">Alt Başlıq</label>
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7F6A47] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#3A3A3A] mb-2 block">Arxa Plan Rəngi</label>
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-full h-10 border border-gray-300 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Norwood Scale */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-serif text-[#3A3A3A]">Norwood Scale</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showNorwood}
                    onChange={(e) => setShowNorwood(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#7F6A47]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7F6A47]"></div>
                </label>
              </div>

              {showNorwood && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-[#3A3A3A] mb-2 block">
                      Əvvəl: Səviyyə {norwoodBefore}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="7"
                      value={norwoodBefore}
                      onChange={(e) => setNorwoodBefore(parseInt(e.target.value))}
                      className="w-full"
                    />
                    <p className="text-xs text-gray-500 mt-1">{norwoodScaleDescriptions[norwoodBefore - 1]}</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#3A3A3A] mb-2 block">
                      Sonra: Səviyyə {norwoodAfter}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="7"
                      value={norwoodAfter}
                      onChange={(e) => setNorwoodAfter(parseInt(e.target.value))}
                      className="w-full"
                    />
                    <p className="text-xs text-gray-500 mt-1">{norwoodScaleDescriptions[norwoodAfter - 1]}</p>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleDownload}
              className="w-full flex items-center justify-center gap-3 p-4 bg-[#7F6A47] text-white rounded-lg hover:bg-[#6B5A3D] transition-all shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span className="font-medium">PNG Olaraq Yüklə</span>
            </button>
          </div>

          {/* Center - Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20">
              <h3 className="text-xl font-serif text-[#3A3A3A] mb-6">Önizləmə</h3>
              
              <div className="flex justify-center">
                <div
                  ref={canvasRef}
                  className="w-[500px] h-[500px] relative overflow-hidden shadow-2xl rounded-lg"
                  style={{ backgroundColor: bgColor }}
                >
                  {/* Title */}
                  <div className="absolute top-8 left-0 right-0 text-center z-20">
                    <h2 className="text-5xl font-serif font-black text-[#7F6A47] mb-2">
                      {title}
                    </h2>
                    <p className="text-xl text-[#F8F3E6]">{subtitle}</p>
                  </div>

                  {/* Images Container */}
                  {format === 'slider' ? (
                    <>
                      {/* Slider Mode */}
                      <div className="absolute inset-0 top-32 bottom-20">
                        {/* Before Image */}
                        <div className="absolute inset-0">
                          {beforeImage ? (
                            <img
                              src={beforeImage}
                              alt="Before"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-200">
                              <p className="text-gray-500">Əvvəl Şəkli</p>
                            </div>
                          )}
                          <div className="absolute top-2 left-2 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
                            ƏVVƏL
                          </div>
                          {showNorwood && (
                            <div className="absolute bottom-2 left-2 bg-[#7F6A47] text-white px-3 py-1 rounded text-sm font-medium">
                              Norwood {norwoodBefore}
                            </div>
                          )}
                        </div>

                        {/* After Image (clipped) */}
                        <div
                          className="absolute inset-0"
                          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                        >
                          {afterImage ? (
                            <img
                              src={afterImage}
                              alt="After"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-300">
                              <p className="text-gray-600">Sonra Şəkli</p>
                            </div>
                          )}
                          <div className="absolute top-2 right-2 bg-[#7F6A47] text-white px-3 py-1 rounded text-sm font-medium">
                            SONRA
                          </div>
                          {showNorwood && (
                            <div className="absolute bottom-2 right-2 bg-[#7F6A47] text-white px-3 py-1 rounded text-sm font-medium">
                              Norwood {norwoodAfter}
                            </div>
                          )}
                        </div>

                        {/* Slider Handle */}
                        <div
                          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 cursor-ew-resize"
                          style={{ left: `${sliderPosition}%` }}
                        >
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                            <ArrowLeft className="w-4 h-4 text-[#7F6A47] absolute left-1" />
                            <ArrowRight className="w-4 h-4 text-[#7F6A47] absolute right-1" />
                          </div>
                        </div>
                      </div>

                      {/* Slider Control */}
                      <div className="absolute bottom-4 left-8 right-8 z-20">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={sliderPosition}
                          onChange={(e) => setSliderPosition(parseInt(e.target.value))}
                          className="w-full"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Side by Side Mode */}
                      <div className="absolute inset-0 top-32 bottom-20 flex">
                        {/* Before */}
                        <div className="w-1/2 relative border-r-2 border-white">
                          {beforeImage ? (
                            <img
                              src={beforeImage}
                              alt="Before"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-200">
                              <p className="text-gray-500 text-sm">Əvvəl</p>
                            </div>
                          )}
                          <div className="absolute top-2 left-2 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
                            ƏVVƏL
                          </div>
                          {showNorwood && (
                            <div className="absolute bottom-2 left-2 bg-[#7F6A47] text-white px-2 py-1 rounded text-xs font-medium">
                              Norwood {norwoodBefore}
                            </div>
                          )}
                        </div>

                        {/* After */}
                        <div className="w-1/2 relative">
                          {afterImage ? (
                            <img
                              src={afterImage}
                              alt="After"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-300">
                              <p className="text-gray-600 text-sm">Sonra</p>
                            </div>
                          )}
                          <div className="absolute top-2 right-2 bg-[#7F6A47] text-white px-3 py-1 rounded text-sm font-medium">
                            SONRA
                          </div>
                          {showNorwood && (
                            <div className="absolute bottom-2 right-2 bg-[#7F6A47] text-white px-2 py-1 rounded text-xs font-medium">
                              Norwood {norwoodAfter}
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Footer */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#7F6A47] py-3 text-center">
                    <p className="text-white text-sm font-medium tracking-wider">
                      BAKU HAIR INSTITUTE • +994 50 123 45 67
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#F8F3E6] rounded-lg">
                <p className="text-sm text-[#3A3A3A]">
                  <strong>İpucu:</strong> Slider modunda tutma nöqtəsini hərəkət etdirərək əvvəl və sonra şəkillərini müqayisə edin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
