import React, { useState, useRef, useEffect } from 'react';
// @ts-ignore - Fabric.js import
import * as fabric from 'fabric';
import { 
  Download, Upload, Type, Image as ImageIcon, 
  Layers, Trash2, Eye, EyeOff, Lock, Unlock,
  AlignLeft, AlignCenter, AlignRight,
  Bold, Italic, Move, ZoomIn, ZoomOut
} from 'lucide-react';

interface CanvasLayer {
  id: string;
  name: string;
  type: 'image' | 'text' | 'shape' | 'background';
  visible: boolean;
  locked: boolean;
  fabricObject?: any; // fabric.Object type
}

interface Template {
  id: string;
  name: string;
  bgColor: string;
  pattern: string;
  textColor: string;
  accentColor: string;
  layers: {
    type: 'background' | 'image' | 'text';
    content?: string;
    style?: any;
  }[];
}

const templates: Template[] = [
  {
    id: 'elegant-gold',
    name: 'Elegant Gold',
    bgColor: '#F8F3E6',
    pattern: 'diagonal-lines',
    textColor: '#3A3A3A',
    accentColor: '#7F6A47',
    layers: [
      { type: 'background' },
      { type: 'text', content: 'BHI', style: { fontSize: 48, fontFamily: 'Playfair Display', fill: '#7F6A47', top: 80, left: 'center' } },
      { type: 'text', content: 'BAKU HAIR INSTITUTE', style: { fontSize: 12, fontFamily: 'Inter', fill: '#3A3A3A', top: 140, left: 'center' } },
      { type: 'text', content: 'Premium Saç Əkimi', style: { fontSize: 56, fontFamily: 'Playfair Display', fill: '#3A3A3A', top: 400, left: 'center', fontWeight: 'bold' } }
    ]
  },
  {
    id: 'dark-luxury',
    name: 'Dark Luxury',
    bgColor: '#3A3A3A',
    pattern: 'dots',
    textColor: '#F8F3E6',
    accentColor: '#7F6A47',
    layers: [
      { type: 'background' },
      { type: 'text', content: 'BHI', style: { fontSize: 48, fontFamily: 'Playfair Display', fill: '#7F6A47', top: 80 } },
      { type: 'text', content: 'Təbii Görünüm', style: { fontSize: 64, fontFamily: 'Playfair Display', fill: '#F8F3E6', top: 450, fontWeight: 'bold' } }
    ]
  },
  {
    id: 'minimal-white',
    name: 'Minimal White',
    bgColor: '#FFFFFF',
    pattern: 'none',
    textColor: '#3A3A3A',
    accentColor: '#7F6A47',
    layers: [
      { type: 'background' },
      { type: 'text', content: 'BHI', style: { fontSize: 40, fontFamily: 'Playfair Display', fill: '#7F6A47', top: 100 } },
      { type: 'text', content: 'Premium Saç Transplantasyonu', style: { fontSize: 48, fontFamily: 'Playfair Display', fill: '#3A3A3A', top: 500 } }
    ]
  }
];

export const CanvasDesigner = () => {
  const [canvas, setCanvas] = useState<any>(null); // fabric.Canvas type
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(templates[0]);
  const [format, setFormat] = useState<'square' | 'story'>('square');
  const [layers, setLayers] = useState<CanvasLayer[]>([]);
  const [selectedLayer, setSelectedLayer] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const fabricCanvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas initialization
  useEffect(() => {
    if (!fabricCanvasRef.current) return;

    const width = format === 'square' ? 1080 : 1080;
    const height = format === 'square' ? 1080 : 1920;

    const fabricCanvas = new fabric.Canvas(fabricCanvasRef.current, {
      width: format === 'square' ? 500 : 400,
      height: format === 'square' ? 500 : 711,
      backgroundColor: selectedTemplate.bgColor,
      preserveObjectStacking: true,
      selection: true
    });

    // Enable object controls
    fabricCanvas.on('selection:created', (e) => {
      const activeObject = e.selected?.[0];
      if (activeObject) {
        const layer = layers.find(l => l.fabricObject === activeObject);
        if (layer) setSelectedLayer(layer.id);
      }
    });

    fabricCanvas.on('selection:updated', (e) => {
      const activeObject = e.selected?.[0];
      if (activeObject) {
        const layer = layers.find(l => l.fabricObject === activeObject);
        if (layer) setSelectedLayer(layer.id);
      }
    });

    fabricCanvas.on('selection:cleared', () => {
      setSelectedLayer(null);
    });

    setCanvas(fabricCanvas);

    return () => {
      fabricCanvas.dispose();
    };
  }, [format]);

  // Load template
  useEffect(() => {
    if (!canvas) return;
    
    canvas.clear();
    canvas.backgroundColor = selectedTemplate.bgColor;
    
    const newLayers: CanvasLayer[] = [];
    const width = format === 'square' ? 500 : 400;
    const height = format === 'square' ? 500 : 711;

    selectedTemplate.layers.forEach((layerDef, index) => {
      if (layerDef.type === 'text' && layerDef.content) {
        const text = new fabric.Text(layerDef.content, {
          ...layerDef.style,
          left: layerDef.style?.left === 'center' ? width / 2 : layerDef.style?.left || 50,
          originX: layerDef.style?.left === 'center' ? 'center' : 'left',
          editable: true,
          selectable: true
        });

        canvas.add(text);
        
        newLayers.push({
          id: `layer-${Date.now()}-${index}`,
          name: layerDef.content.substring(0, 20),
          type: 'text',
          visible: true,
          locked: false,
          fabricObject: text
        });
      }
    });

    setLayers(newLayers);
    canvas.renderAll();
  }, [canvas, selectedTemplate, format]);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !canvas) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const imgUrl = event.target?.result as string;
      
      // @ts-ignore - Fabric Image.fromURL
      fabric.Image.fromURL(imgUrl, (img: any) => {
        const canvasWidth = canvas.width || 500;
        const canvasHeight = canvas.height || 500;
        
        // Scale image to fit canvas
        const scale = Math.min(
          canvasWidth / (img.width || 1),
          canvasHeight / (img.height || 1)
        ) * 0.8;
        
        img.scale(scale);
        img.set({
          left: canvasWidth / 2,
          top: canvasHeight / 2,
          originX: 'center',
          originY: 'center',
          opacity: 0.7,
          selectable: true
        });

        canvas.add(img);
        canvas.sendToBack(img);
        
        const newLayer: CanvasLayer = {
          id: `layer-${Date.now()}`,
          name: 'Uploaded Image',
          type: 'image',
          visible: true,
          locked: false,
          fabricObject: img
        };
        
        setLayers([...layers, newLayer]);
        canvas.renderAll();
      });
    };
    
    reader.readAsDataURL(file);
  };

  // Add text
  const addText = () => {
    if (!canvas) return;

    const text = new fabric.Text('Yeni Mətn', {
      left: 100,
      top: 100,
      fontSize: 32,
      fontFamily: 'Playfair Display',
      fill: selectedTemplate.textColor,
      editable: true,
      selectable: true
    });

    canvas.add(text);
    
    const newLayer: CanvasLayer = {
      id: `layer-${Date.now()}`,
      name: 'Text Layer',
      type: 'text',
      visible: true,
      locked: false,
      fabricObject: text
    };
    
    setLayers([...layers, newLayer]);
    canvas.setActiveObject(text);
    canvas.renderAll();
  };

  // Layer visibility toggle
  const toggleLayerVisibility = (layerId: string) => {
    const layer = layers.find(l => l.id === layerId);
    if (!layer || !layer.fabricObject) return;

    layer.fabricObject.visible = !layer.visible;
    layer.visible = !layer.visible;
    
    setLayers([...layers]);
    canvas?.renderAll();
  };

  // Layer lock toggle
  const toggleLayerLock = (layerId: string) => {
    const layer = layers.find(l => l.id === layerId);
    if (!layer || !layer.fabricObject) return;

    layer.fabricObject.selectable = layer.locked;
    layer.fabricObject.evented = layer.locked;
    layer.locked = !layer.locked;
    
    setLayers([...layers]);
    canvas?.renderAll();
  };

  // Delete layer
  const deleteLayer = (layerId: string) => {
    const layer = layers.find(l => l.id === layerId);
    if (!layer || !layer.fabricObject || !canvas) return;

    canvas.remove(layer.fabricObject);
    setLayers(layers.filter(l => l.id !== layerId));
    canvas.renderAll();
  };

  // Text formatting
  const formatText = (property: string, value: any) => {
    const activeObject = canvas?.getActiveObject();
    if (!activeObject || activeObject.type !== 'text') return;

    // @ts-ignore
    activeObject.set(property, value);
    canvas?.renderAll();
  };

  // Download
  const handleDownload = () => {
    if (!canvas) return;

    const width = format === 'square' ? 1080 : 1080;
    const height = format === 'square' ? 1080 : 1920;
    
    const multiplier = width / (canvas.width || 1);
    
    const dataURL = canvas.toDataURL({
      format: 'png',
      quality: 1,
      multiplier: multiplier
    });

    const link = document.createElement('a');
    link.download = `bhi-design-${Date.now()}.png`;
    link.href = dataURL;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F3E6] via-white to-[#F0EBD9] py-8">
      <div className="max-w-[1800px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-serif font-black text-[#3A3A3A] mb-3">
            BHI Creative Studio
          </h1>
          <p className="text-lg text-[#7F6A47]">
            Peşəkar Sosial Media Dizaynı
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Templates & Tools */}
          <div className="space-y-6">
            {/* Format Selection */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20">
              <h3 className="text-xl font-serif text-[#3A3A3A] mb-4">Format</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setFormat('square')}
                  className={`py-3 px-4 rounded-lg font-medium transition-all ${
                    format === 'square'
                      ? 'bg-[#7F6A47] text-white shadow-md'
                      : 'bg-gray-100 text-[#3A3A3A] hover:bg-gray-200'
                  }`}
                >
                  1:1<br/><span className="text-xs">Post</span>
                </button>
                <button
                  onClick={() => setFormat('story')}
                  className={`py-3 px-4 rounded-lg font-medium transition-all ${
                    format === 'story'
                      ? 'bg-[#7F6A47] text-white shadow-md'
                      : 'bg-gray-100 text-[#3A3A3A] hover:bg-gray-200'
                  }`}
                >
                  9:16<br/><span className="text-xs">Story</span>
                </button>
              </div>
            </div>

            {/* Templates */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20">
              <h3 className="text-xl font-serif text-[#3A3A3A] mb-4">Şablonlar</h3>
              <div className="space-y-2">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedTemplate.id === template.id
                        ? 'bg-[#7F6A47] text-white'
                        : 'bg-gray-50 text-[#3A3A3A] hover:bg-gray-100'
                    }`}
                  >
                    <div className="font-medium">{template.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20">
              <h3 className="text-xl font-serif text-[#3A3A3A] mb-4">Alətlər</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-all">
                  <Upload className="w-5 h-5 text-[#7F6A47]" />
                  <span className="text-sm font-medium text-[#3A3A3A]">Şəkil Yüklə</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                
                <button
                  onClick={addText}
                  className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all"
                >
                  <Type className="w-5 h-5 text-[#7F6A47]" />
                  <span className="text-sm font-medium text-[#3A3A3A]">Mətn Əlavə Et</span>
                </button>

                <button
                  onClick={handleDownload}
                  className="w-full flex items-center gap-3 p-3 bg-[#7F6A47] text-white rounded-lg hover:bg-[#6B5A3D] transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span className="text-sm font-medium">Yüklə (PNG)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Center - Canvas */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-serif text-[#3A3A3A]">Canvas</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => canvas?.setZoom(Math.max(0.5, (canvas.getZoom() || 1) - 0.1))}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                  >
                    <ZoomOut className="w-4 h-4 text-[#3A3A3A]" />
                  </button>
                  <span className="text-sm text-[#3A3A3A] min-w-[60px] text-center">
                    {Math.round((canvas?.getZoom() || 1) * 100)}%
                  </span>
                  <button
                    onClick={() => canvas?.setZoom(Math.min(2, (canvas.getZoom() || 1) + 0.1))}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                  >
                    <ZoomIn className="w-4 h-4 text-[#3A3A3A]" />
                  </button>
                </div>
              </div>

              <div 
                ref={canvasContainerRef}
                className="flex justify-center items-center bg-gray-50 p-8 rounded-lg"
              >
                <canvas ref={fabricCanvasRef} />
              </div>

              {/* Text Formatting Toolbar */}
              {canvas?.getActiveObject()?.type === 'text' && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                      <label className="text-sm text-[#3A3A3A]">Font:</label>
                      <select
                        onChange={(e) => formatText('fontFamily', e.target.value)}
                        className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
                      >
                        <option value="Playfair Display">Playfair Display</option>
                        <option value="Inter">Inter</option>
                        <option value="Arial">Arial</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2">
                      <label className="text-sm text-[#3A3A3A]">Ölçü:</label>
                      <input
                        type="number"
                        min="12"
                        max="120"
                        defaultValue={32}
                        onChange={(e) => formatText('fontSize', parseInt(e.target.value))}
                        className="w-20 px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
                      />
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => formatText('fontWeight', 'bold')}
                        className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
                      >
                        <Bold className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => formatText('fontStyle', 'italic')}
                        className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
                      >
                        <Italic className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <label className="text-sm text-[#3A3A3A]">Rəng:</label>
                      <input
                        type="color"
                        onChange={(e) => formatText('fill', e.target.value)}
                        className="w-10 h-8 border border-gray-300 rounded-lg cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar - Layers */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20 h-fit">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-[#7F6A47]" />
              <h3 className="text-xl font-serif text-[#3A3A3A]">Qatlar</h3>
            </div>

            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {layers.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-8">
                  Hələ qat yoxdur
                </p>
              ) : (
                layers.map((layer) => (
                  <div
                    key={layer.id}
                    className={`p-3 rounded-lg border transition-all ${
                      selectedLayer === layer.id
                        ? 'border-[#7F6A47] bg-[#7F6A47]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <span className="text-sm font-medium text-[#3A3A3A] truncate">
                          {layer.name}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => toggleLayerVisibility(layer.id)}
                          className="p-1.5 hover:bg-gray-100 rounded transition-all"
                          title={layer.visible ? 'Gizlət' : 'Göstər'}
                        >
                          {layer.visible ? (
                            <Eye className="w-4 h-4 text-[#7F6A47]" />
                          ) : (
                            <EyeOff className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                        
                        <button
                          onClick={() => toggleLayerLock(layer.id)}
                          className="p-1.5 hover:bg-gray-100 rounded transition-all"
                          title={layer.locked ? 'Kilidi Aç' : 'Kilidlə'}
                        >
                          {layer.locked ? (
                            <Lock className="w-4 h-4 text-[#7F6A47]" />
                          ) : (
                            <Unlock className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                        
                        <button
                          onClick={() => deleteLayer(layer.id)}
                          className="p-1.5 hover:bg-red-100 rounded transition-all"
                          title="Sil"
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-1 text-xs text-gray-500">
                      {layer.type}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
