import React, { useState, useRef } from 'react';
import { 
  Maximize2, Minimize2, Download, Type, Upload,
  Layers, Eye, EyeOff,
  ZoomIn, ZoomOut, Grid, Sparkles,
  Image as ImageIcon, FileText, Star, MessageCircle,
  Award, TrendingUp, Clock, BookOpen, Frame,
  Circle, Square, Zap, Hash, AlignCenter, Smartphone, Monitor
} from 'lucide-react';

interface EditableLayer {
  id: string;
  type: 'text' | 'image' | 'logo' | 'background' | 'mask' | 'frame' | 'pattern';
  locked: boolean;
  visible?: boolean;
  content?: string;
  src?: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  style: any;
}

interface Template {
  id: string;
  name: string;
  category: 'case-study' | 'faq' | 'testimonial' | 'before-after' | 'quote' | 'promo' | 'countdown' | 'info' | 
            'center-mask' | 'opacity-bg' | 'golden-frame' | 'clinical-lines' | 'typography';
  bgColor: string;
  format: '1:1' | '9:16'; // Template format
  layers: EditableLayer[];
}

const templates: Template[] = [
  // ========== 1:1 KARE FORMAT TEMPLATES ==========
  // CASE STUDY TEMPLATES (1:1)
  {
    id: 'case-study-1',
    name: 'Vaka Analizi - Klassik',
    category: 'case-study',
    format: '1:1',
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
    format: '1:1',
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

  // ========== 9:16 DİKEY (STORY) FORMAT TEMPLATES ==========
  // CASE STUDY TEMPLATES (9:16 Story)
  {
    id: 'case-study-1-story',
    name: 'Vaka Analizi - Story Format',
    category: 'case-study',
    format: '9:16',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'top-accent', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 8 }, style: { backgroundColor: '#7F6A47' } },
      { id: 'logo', type: 'logo', locked: true, content: 'BHI', position: { x: 540, y: 80 }, size: { width: 100, height: 60 }, style: { fontSize: 56, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center', transform: 'translateX(-50%)' } },
      { id: 'patient-img', type: 'image', locked: false, src: '', position: { x: 90, y: 280 }, size: { width: 900, height: 700 }, style: { borderRadius: 16, objectFit: 'cover', boxShadow: '0 8px 30px rgba(0,0,0,0.15)' } },
      { id: 'title', type: 'text', locked: false, content: 'SAÇ ƏKİMİ VAKASI', position: { x: 540, y: 1050 }, size: { width: 900, height: 80 }, style: { fontSize: 58, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'divider', type: 'background', locked: true, position: { x: 390, y: 1160 }, size: { width: 300, height: 3 }, style: { backgroundColor: '#7F6A47' } },
      { id: 'graft-count', type: 'text', locked: false, content: '4500 Greft', position: { x: 270, y: 1250 }, size: { width: 400, height: 70 }, style: { fontSize: 42, fontFamily: 'Inter', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'technique', type: 'text', locked: false, content: 'DHI Texnikası', position: { x: 810, y: 1250 }, size: { width: 400, height: 70 }, style: { fontSize: 42, fontFamily: 'Inter', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'info', type: 'text', locked: false, content: 'Əməliyyatdan 6 ay sonra', position: { x: 540, y: 1380 }, size: { width: 700, height: 60 }, style: { fontSize: 32, fontFamily: 'Inter', color: '#3A3A3A', textAlign: 'center' } },
      { id: 'bottom-accent', type: 'background', locked: true, position: { x: 0, y: 1912 }, size: { width: 1080, height: 8 }, style: { backgroundColor: '#7F6A47' } }
    ]
  },
  {
    id: 'case-study-2-story',
    name: 'Vaka Analizi - Premium Story',
    category: 'case-study',
    format: '9:16',
    bgColor: '#1A1A1A',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#1A1A1A' } },
      { id: 'accent-bar', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 180 }, style: { background: 'linear-gradient(135deg, #7F6A47 0%, #5D4E35 100%)' } },
      { id: 'logo', type: 'logo', locked: true, content: 'BHI', position: { x: 90, y: 70 }, size: { width: 100, height: 60 }, style: { fontSize: 52, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold' } },
      { id: 'subtitle', type: 'text', locked: true, content: 'PREMIUM NƏTİCƏ', position: { x: 940, y: 85 }, size: { width: 300, height: 50 }, style: { fontSize: 24, fontFamily: 'Inter', color: '#F8F3E6', textAlign: 'right', letterSpacing: 2 } },
      { id: 'patient-img', type: 'image', locked: false, src: '', position: { x: 90, y: 240 }, size: { width: 900, height: 900 }, style: { borderRadius: 20, objectFit: 'cover', border: '5px solid #7F6A47' } },
      { id: 'title', type: 'text', locked: false, content: 'TRANSFORMASYON', position: { x: 540, y: 1220 }, size: { width: 800, height: 90 }, style: { fontSize: 68, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center', letterSpacing: 2 } },
      { id: 'stats-box', type: 'background', locked: true, position: { x: 190, y: 1380 }, size: { width: 700, height: 140 }, style: { backgroundColor: 'rgba(127,106,71,0.15)', borderRadius: 12, border: '2px solid #7F6A47' } },
      { id: 'stats', type: 'text', locked: false, content: '5200 Greft\nFUE Metodu\n12 Ay Nəticə', position: { x: 540, y: 1450 }, size: { width: 600, height: 120 }, style: { fontSize: 32, fontFamily: 'Inter', color: '#F8F3E6', textAlign: 'center', lineHeight: 1.4 } }
    ]
  },

  // FAQ TEMPLATES (9:16 Story)
  {
    id: 'faq-1-story',
    name: 'Sual-Cavab Story',
    category: 'faq',
    format: '9:16',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'top-bar', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 200 }, style: { background: 'linear-gradient(135deg, #7F6A47 0%, #F8F3E6 100%)' } },
      { id: 'logo', type: 'logo', locked: true, content: 'BHI', position: { x: 540, y: 100 }, size: { width: 120, height: 70 }, style: { fontSize: 64, fontFamily: 'Playfair Display', color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center', transform: 'translateX(-50%)' } },
      { id: 'question-icon', type: 'text', locked: true, content: '?', position: { x: 540, y: 400 }, size: { width: 150, height: 150 }, style: { fontSize: 180, color: '#7F6A47', textAlign: 'center', transform: 'translateX(-50%)', fontWeight: 'bold' } },
      { id: 'question', type: 'text', locked: false, content: 'SAÇ ƏKİMİ\nACITIRMI?', position: { x: 540, y: 680 }, size: { width: 900, height: 180 }, style: { fontSize: 62, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center', lineHeight: 1.3 } },
      { id: 'divider', type: 'background', locked: true, position: { x: 340, y: 920 }, size: { width: 400, height: 4 }, style: { backgroundColor: '#7F6A47' } },
      { id: 'answer', type: 'text', locked: false, content: 'Xeyr! Lokal anesteziya\nsayəsində əməliyyat\ntamamilə ağrısızdır.\n\nRahat və təhlükəsiz\nproses sizi gözləyir.', position: { x: 540, y: 1080 }, size: { width: 900, height: 400 }, style: { fontSize: 42, fontFamily: 'Inter', color: '#3A3A3A', textAlign: 'center', lineHeight: 1.6 } }
    ]
  },

  // TESTIMONIAL TEMPLATES (9:16 Story)
  {
    id: 'testimonial-1-story',
    name: 'Müştəri Rəyi Story',
    category: 'testimonial',
    format: '9:16',
    bgColor: '#3A3A3A',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#3A3A3A' } },
      { id: 'logo', type: 'logo', locked: true, content: 'BHI', position: { x: 540, y: 120 }, size: { width: 100, height: 60 }, style: { fontSize: 56, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center', transform: 'translateX(-50%)' } },
      { id: 'customer-img', type: 'image', locked: false, src: '', position: { x: 340, y: 280 }, size: { width: 400, height: 400 }, style: { borderRadius: '50%', objectFit: 'cover', border: '6px solid #7F6A47' } },
      { id: 'stars', type: 'text', locked: true, content: '⭐⭐⭐⭐⭐', position: { x: 540, y: 760 }, size: { width: 400, height: 80 }, style: { fontSize: 64, textAlign: 'center', transform: 'translateX(-50%)' } },
      { id: 'quote', type: 'text', locked: false, content: '"Nəticə möhtəşəmdir!\n\nÖzümü 10 yaş gənc\nhiss edirəm.\n\nBHI komandası əla!"', position: { x: 540, y: 960 }, size: { width: 950, height: 400 }, style: { fontSize: 48, fontFamily: 'Playfair Display', color: '#F8F3E6', textAlign: 'center', fontStyle: 'italic', lineHeight: 1.5 } },
      { id: 'name', type: 'text', locked: false, content: '- Rəşad Məmmədov', position: { x: 540, y: 1480 }, size: { width: 600, height: 70 }, style: { fontSize: 36, fontFamily: 'Inter', color: '#7F6A47', textAlign: 'center', fontWeight: 'bold' } },
      { id: 'verified-badge', type: 'text', locked: true, content: '✓ Təsdiqlənmiş Müştəri', position: { x: 540, y: 1580 }, size: { width: 500, height: 50 }, style: { fontSize: 24, fontFamily: 'Inter', color: '#F8F3E6', textAlign: 'center' } }
    ]
  },

  // BEFORE/AFTER TEMPLATES (9:16 Story)
  {
    id: 'before-after-1-story',
    name: 'Əvvəl & Sonra Story',
    category: 'before-after',
    format: '9:16',
    bgColor: '#1A1A1A',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#1A1A1A' } },
      { id: 'title', type: 'text', locked: false, content: 'ƏVVƏL & SONRA', position: { x: 540, y: 120 }, size: { width: 900, height: 90 }, style: { fontSize: 68, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'before-label', type: 'text', locked: true, content: 'ƏVVƏL', position: { x: 540, y: 280 }, size: { width: 300, height: 60 }, style: { fontSize: 36, fontFamily: 'Inter', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center', backgroundColor: 'rgba(127,106,71,0.3)', borderRadius: 8, padding: '10px' } },
      { id: 'before-img', type: 'image', locked: false, src: '', position: { x: 90, y: 380 }, size: { width: 900, height: 600 }, style: { borderRadius: 12, objectFit: 'cover', border: '3px solid rgba(248,243,230,0.3)' } },
      { id: 'arrow-down', type: 'text', locked: true, content: '⬇', position: { x: 540, y: 1020 }, size: { width: 100, height: 80 }, style: { fontSize: 64, color: '#7F6A47', textAlign: 'center', transform: 'translateX(-50%)' } },
      { id: 'after-label', type: 'text', locked: true, content: 'SONRA', position: { x: 540, y: 1140 }, size: { width: 300, height: 60 }, style: { fontSize: 36, fontFamily: 'Inter', color: '#1A1A1A', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#7F6A47', borderRadius: 8, padding: '10px' } },
      { id: 'after-img', type: 'image', locked: false, src: '', position: { x: 90, y: 1240 }, size: { width: 900, height: 600 }, style: { borderRadius: 12, objectFit: 'cover', border: '3px solid #7F6A47' } },
      { id: 'timeline', type: 'text', locked: false, content: '🕐 6 AY SONRA', position: { x: 540, y: 1870 }, size: { width: 500, height: 50 }, style: { fontSize: 28, fontFamily: 'Inter', color: '#F8F3E6', textAlign: 'center', fontWeight: 'bold' } }
    ]
  },

  // PROMO TEMPLATES (9:16 Story)
  {
    id: 'promo-discount-story',
    name: 'Kampaniya Story',
    category: 'promo',
    format: '9:16',
    bgColor: '#7F6A47',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { background: 'linear-gradient(180deg, #7F6A47 0%, #5D4E35 100%)' } },
      { id: 'top-pattern', type: 'pattern', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 300 }, style: { backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' } },
      { id: 'badge', type: 'text', locked: true, content: '🎉', position: { x: 540, y: 280 }, size: { width: 150, height: 150 }, style: { fontSize: 120, textAlign: 'center', transform: 'translateX(-50%)' } },
      { id: 'announcement', type: 'text', locked: false, content: 'XÜSUSI TƏKLİF', position: { x: 540, y: 480 }, size: { width: 900, height: 100 }, style: { fontSize: 72, fontFamily: 'Inter', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center', letterSpacing: 4 } },
      { id: 'discount-bg', type: 'background', locked: true, position: { x: 240, y: 680 }, size: { width: 600, height: 400 }, style: { backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 24, border: '4px solid #F8F3E6' } },
      { id: 'discount', type: 'text', locked: false, content: '%40', position: { x: 540, y: 820 }, size: { width: 500, height: 200 }, style: { fontSize: 180, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'subtitle', type: 'text', locked: false, content: 'ENDİRİM', position: { x: 540, y: 1150 }, size: { width: 600, height: 90 }, style: { fontSize: 72, fontFamily: 'Inter', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center', letterSpacing: 8 } },
      { id: 'validity', type: 'text', locked: false, content: 'Dekabr ayı üçün keçərlidir', position: { x: 540, y: 1400 }, size: { width: 800, height: 70 }, style: { fontSize: 36, fontFamily: 'Inter', color: '#F8F3E6', textAlign: 'center', fontStyle: 'italic' } },
      { id: 'cta', type: 'text', locked: false, content: '📞 İNDİ ZƏNG EDİN', position: { x: 540, y: 1600 }, size: { width: 700, height: 100 }, style: { fontSize: 42, fontFamily: 'Inter', color: '#7F6A47', textAlign: 'center', fontWeight: 'bold', backgroundColor: '#F8F3E6', borderRadius: 16, padding: '20px', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' } }
    ]
  },

  // ========== MORE 9:16 STORY TEMPLATES ==========
  
  // QUOTE TEMPLATES (9:16 Story)
  {
    id: 'quote-doctor-story',
    name: 'Doktor Məsləhəti Story',
    category: 'quote',
    format: '9:16',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'top-accent', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 6 }, style: { backgroundColor: '#7F6A47' } },
      { id: 'doctor-img', type: 'image', locked: false, src: '', position: { x: 90, y: 200 }, size: { width: 900, height: 700 }, style: { borderRadius: 20, objectFit: 'cover', border: '4px solid #7F6A47' } },
      { id: 'quote-bg', type: 'background', locked: true, position: { x: 90, y: 980 }, size: { width: 900, height: 600 }, style: { backgroundColor: 'rgba(127,106,71,0.1)', borderRadius: 16 } },
      { id: 'quote-text', type: 'text', locked: false, content: '"Saç sağlamlığı\n\nümumi sağlamlığın\ngöstəricisidir.\n\nSağlam saç üçün\npeşəkar yanaşma\nzəruridir."', position: { x: 540, y: 1200 }, size: { width: 800, height: 500 }, style: { fontSize: 42, fontFamily: 'Playfair Display', color: '#3A3A3A', fontStyle: 'italic', lineHeight: 1.5, textAlign: 'center' } },
      { id: 'doctor-name', type: 'text', locked: false, content: 'Dr. Əli Həsənov', position: { x: 540, y: 1680 }, size: { width: 600, height: 60 }, style: { fontSize: 32, fontFamily: 'Inter', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'verified', type: 'text', locked: true, content: '✓ Sertifikatlı Mütəxəssis', position: { x: 540, y: 1760 }, size: { width: 500, height: 50 }, style: { fontSize: 24, fontFamily: 'Inter', color: '#3A3A3A', textAlign: 'center' } }
    ]
  },

  // COUNTDOWN TEMPLATES (9:16 Story)
  {
    id: 'countdown-event-story',
    name: 'Geri Sayım Story',
    category: 'countdown',
    format: '9:16',
    bgColor: '#3A3A3A',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { background: 'linear-gradient(180deg, #3A3A3A 0%, #1A1A1A 100%)' } },
      { id: 'logo', type: 'logo', locked: true, content: 'BHI', position: { x: 540, y: 150 }, size: { width: 120, height: 70 }, style: { fontSize: 64, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center', transform: 'translateX(-50%)' } },
      { id: 'event-title', type: 'text', locked: false, content: 'BAKÜ\'YƏ\nGƏLİRİK!', position: { x: 540, y: 450 }, size: { width: 900, height: 180 }, style: { fontSize: 72, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center', lineHeight: 1.2, letterSpacing: 2 } },
      { id: 'countdown-circle', type: 'background', locked: true, position: { x: 340, y: 750 }, size: { width: 400, height: 400 }, style: { borderRadius: '50%', border: '8px solid #7F6A47', backgroundColor: 'rgba(127,106,71,0.1)' } },
      { id: 'countdown-num', type: 'text', locked: false, content: '7', position: { x: 540, y: 900 }, size: { width: 300, height: 250 }, style: { fontSize: 220, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'countdown-label', type: 'text', locked: true, content: 'GÜN QALDI', position: { x: 540, y: 1250 }, size: { width: 500, height: 80 }, style: { fontSize: 52, fontFamily: 'Inter', color: '#F8F3E6', textAlign: 'center', fontWeight: 'bold', letterSpacing: 4 } },
      { id: 'date-info', type: 'text', locked: false, content: '15 Dekabr 2024\nBakü Saç Klinikası', position: { x: 540, y: 1500 }, size: { width: 700, height: 150 }, style: { fontSize: 36, fontFamily: 'Inter', color: '#7F6A47', textAlign: 'center', lineHeight: 1.4 } }
    ]
  },

  // INFO TEMPLATES (9:16 Story)
  {
    id: 'info-technique-story',
    name: 'Texnika Məlumatı Story',
    category: 'info',
    format: '9:16',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'header-bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 250 }, style: { background: 'linear-gradient(135deg, #7F6A47 0%, #F8F3E6 100%)' } },
      { id: 'title', type: 'text', locked: false, content: 'FUE TEXNİKASI', position: { x: 540, y: 125 }, size: { width: 900, height: 100 }, style: { fontSize: 68, fontFamily: 'Playfair Display', color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'subtitle', type: 'text', locked: true, content: 'Follicular Unit Extraction', position: { x: 540, y: 320 }, size: { width: 800, height: 60 }, style: { fontSize: 28, fontFamily: 'Inter', color: '#7F6A47', textAlign: 'center', fontStyle: 'italic', letterSpacing: 2 } },
      { id: 'info-img', type: 'image', locked: false, src: '', position: { x: 90, y: 450 }, size: { width: 900, height: 650 }, style: { borderRadius: 16, objectFit: 'cover', border: '3px solid #7F6A47' } },
      { id: 'description', type: 'text', locked: false, content: '✓ Mikromotor vasitəsilə\n   tək-tək folikulların çıxarılması\n\n✓ İz buraxmayan metod\n\n✓ Sürətli sağalma prosesi\n\n✓ Təbii görünüş', position: { x: 540, y: 1280 }, size: { width: 900, height: 400 }, style: { fontSize: 36, fontFamily: 'Inter', color: '#3A3A3A', textAlign: 'left', lineHeight: 1.6 } }
    ]
  },

  // CENTER MASK TEMPLATES (9:16 Story)
  {
    id: 'center-soft-glow-story',
    name: 'Soft Center Glow Story',
    category: 'center-mask',
    format: '9:16',
    bgColor: '#1A1A1A',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#1A1A1A' } },
      { id: 'base-img', type: 'image', locked: false, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { objectFit: 'cover' } },
      { id: 'center-glow', type: 'mask', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { background: 'radial-gradient(ellipse 600px 900px at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 40%, rgba(0,0,0,0.8) 100%)', pointerEvents: 'none' } },
      { id: 'title', type: 'text', locked: false, content: 'PREMIUM\nNƏTİCƏ', position: { x: 540, y: 900 }, size: { width: 800, height: 150 }, style: { fontSize: 72, fontFamily: 'Playfair Display', color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center', textShadow: '0 4px 30px rgba(0,0,0,0.9)', lineHeight: 1.2 } }
    ]
  },
  {
    id: 'spotlight-story',
    name: 'Centered Spotlight Story',
    category: 'center-mask',
    format: '9:16',
    bgColor: '#000000',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#000000' } },
      { id: 'base-img', type: 'image', locked: false, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { objectFit: 'cover' } },
      { id: 'spotlight', type: 'mask', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { background: 'radial-gradient(ellipse 500px 1000px at 50% 45%, rgba(255,255,255,0.95) 0%, rgba(0,0,0,0.95) 60%)', pointerEvents: 'none' } },
      { id: 'title', type: 'text', locked: false, content: 'SPOTLIGHT', position: { x: 540, y: 1650 }, size: { width: 600, height: 100 }, style: { fontSize: 68, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center', letterSpacing: 6 } }
    ]
  },
  {
    id: 'golden-halo-story',
    name: 'Golden Halo Story',
    category: 'center-mask',
    format: '9:16',
    bgColor: '#1A1A1A',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#1A1A1A' } },
      { id: 'base-img', type: 'image', locked: false, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { objectFit: 'cover' } },
      { id: 'halo-ring', type: 'mask', locked: true, position: { x: 190, y: 510 }, size: { width: 700, height: 900 }, style: { borderRadius: '50%', border: '10px solid #7F6A47', background: 'radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, transparent 100%)', boxShadow: '0 0 80px rgba(127,106,71,0.9), inset 0 0 100px rgba(127,106,71,0.3)' } },
      { id: 'title', type: 'text', locked: false, content: 'GOLDEN\nRESULT', position: { x: 540, y: 920 }, size: { width: 600, height: 150 }, style: { fontSize: 64, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center', lineHeight: 1.2 } }
    ]
  },
  {
    id: 'glass-panel-story',
    name: 'Glass Panel Story',
    category: 'center-mask',
    format: '9:16',
    bgColor: '#2C2C2C',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#2C2C2C' } },
      { id: 'base-img', type: 'image', locked: false, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { objectFit: 'cover' } },
      { id: 'glass-panel', type: 'mask', locked: true, position: { x: 140, y: 560 }, size: { width: 800, height: 800 }, style: { background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '2px solid rgba(255,255,255,0.2)', borderRadius: 24, boxShadow: '0 10px 40px rgba(0,0,0,0.4)' } },
      { id: 'title', type: 'text', locked: false, content: 'MODERN\nDİZAYN', position: { x: 540, y: 920 }, size: { width: 700, height: 150 }, style: { fontSize: 58, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center', lineHeight: 1.2 } }
    ]
  },
  {
    id: 'frosted-area-story',
    name: 'Center Frosted Story',
    category: 'center-mask',
    format: '9:16',
    bgColor: '#3A3A3A',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#3A3A3A' } },
      { id: 'base-img', type: 'image', locked: false, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { objectFit: 'cover' } },
      { id: 'frosted', type: 'mask', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { background: 'radial-gradient(ellipse 550px 900px at center, transparent 0%, rgba(255,255,255,0.6) 100%)', backdropFilter: 'blur(4px)', pointerEvents: 'none' } },
      { id: 'title', type: 'text', locked: false, content: 'FROSTED\nGLASS', position: { x: 540, y: 920 }, size: { width: 700, height: 150 }, style: { fontSize: 64, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center', lineHeight: 1.2 } }
    ]
  },

  // OPACITY BG TEMPLATES (9:16 Story)
  {
    id: 'opacity-40-story',
    name: '40% Opacity Story',
    category: 'opacity-bg',
    format: '9:16',
    bgColor: 'rgba(58, 58, 58, 0.4)',
    layers: [
      { id: 'base-img', type: 'image', locked: false, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { objectFit: 'cover' } },
      { id: 'overlay', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: 'rgba(58, 58, 58, 0.4)' } },
      { id: 'logo', type: 'logo', locked: true, content: 'BHI', position: { x: 540, y: 150 }, size: { width: 120, height: 70 }, style: { fontSize: 64, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center', transform: 'translateX(-50%)' } },
      { id: 'title', type: 'text', locked: false, content: 'BALANCED\nOPACITY', position: { x: 540, y: 880 }, size: { width: 900, height: 160 }, style: { fontSize: 72, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center', textShadow: '0 6px 20px rgba(0,0,0,0.7)', lineHeight: 1.2 } },
      { id: 'subtitle', type: 'text', locked: false, content: 'Premium Hair Transplant', position: { x: 540, y: 1100 }, size: { width: 700, height: 70 }, style: { fontSize: 36, fontFamily: 'Inter', color: '#7F6A47', textAlign: 'center', letterSpacing: 2 } }
    ]
  },
  {
    id: 'gradient-top-bottom-story',
    name: 'Gradient Top-Bottom Story',
    category: 'opacity-bg',
    format: '9:16',
    bgColor: 'transparent',
    layers: [
      { id: 'base-img', type: 'image', locked: false, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { objectFit: 'cover' } },
      { id: 'gradient-overlay', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 35%, transparent 65%, rgba(0,0,0,0.85) 100%)' } },
      { id: 'top-title', type: 'text', locked: false, content: 'ƏVVƏL', position: { x: 540, y: 200 }, size: { width: 500, height: 80 }, style: { fontSize: 64, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'bottom-title', type: 'text', locked: false, content: 'SONRA', position: { x: 540, y: 1720 }, size: { width: 500, height: 80 }, style: { fontSize: 64, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'vignette-transparency-story',
    name: 'Vignette Story',
    category: 'opacity-bg',
    format: '9:16',
    bgColor: 'transparent',
    layers: [
      { id: 'base-img', type: 'image', locked: false, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { objectFit: 'cover' } },
      { id: 'vignette', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { background: 'radial-gradient(ellipse 50% 40% at center, transparent 20%, rgba(0,0,0,0.85) 100%)' } },
      { id: 'title', type: 'text', locked: false, content: 'VIGNETTE\nEFFECT', position: { x: 540, y: 920 }, size: { width: 700, height: 140 }, style: { fontSize: 64, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center', lineHeight: 1.2 } }
    ]
  },
  {
    id: 'fade-white-story',
    name: 'Fade-to-White Story',
    category: 'opacity-bg',
    format: '9:16',
    bgColor: 'transparent',
    layers: [
      { id: 'base-img', type: 'image', locked: false, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { objectFit: 'cover' } },
      { id: 'white-fade', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.97) 100%)' } },
      { id: 'title', type: 'text', locked: false, content: 'CLEAN &\nMINIMAL', position: { x: 540, y: 1550 }, size: { width: 800, height: 150 }, style: { fontSize: 68, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center', lineHeight: 1.2 } }
    ]
  },
  {
    id: 'fade-gold-story',
    name: 'Fade-to-Gold Story',
    category: 'opacity-bg',
    format: '9:16',
    bgColor: 'transparent',
    layers: [
      { id: 'base-img', type: 'image', locked: false, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { objectFit: 'cover' } },
      { id: 'gold-fade', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { background: 'linear-gradient(to bottom, rgba(127,106,71,0.1) 0%, rgba(127,106,71,0.95) 100%)' } },
      { id: 'title', type: 'text', locked: false, content: 'GOLDEN\nPREMIUM', position: { x: 540, y: 1600 }, size: { width: 800, height: 150 }, style: { fontSize: 72, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center', lineHeight: 1.2 } }
    ]
  },

  // GOLDEN FRAME TEMPLATES (9:16 Story)
  {
    id: 'gold-full-border-story',
    name: 'Gold Full Border Story',
    category: 'golden-frame',
    format: '9:16',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'base-img', type: 'image', locked: false, src: '', position: { x: 60, y: 300 }, size: { width: 960, height: 1320 }, style: { objectFit: 'cover', borderRadius: 12 } },
      { id: 'gold-frame', type: 'frame', locked: true, position: { x: 40, y: 280 }, size: { width: 1000, height: 1360 }, style: { border: '4px solid #7F6A47', borderRadius: 16 } },
      { id: 'title', type: 'text', locked: false, content: 'PREMIUM\nFRAME', position: { x: 540, y: 1750 }, size: { width: 700, height: 120 }, style: { fontSize: 56, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center', lineHeight: 1.2 } }
    ]
  },
  {
    id: 'gold-top-bottom-story',
    name: 'Top & Bottom Gold Story',
    category: 'golden-frame',
    format: '9:16',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'top-line', type: 'frame', locked: true, position: { x: 0, y: 60 }, size: { width: 1080, height: 3 }, style: { backgroundColor: '#7F6A47' } },
      { id: 'bottom-line', type: 'frame', locked: true, position: { x: 0, y: 1857 }, size: { width: 1080, height: 3 }, style: { backgroundColor: '#7F6A47' } },
      { id: 'main-img', type: 'image', locked: false, src: '', position: { x: 90, y: 350 }, size: { width: 900, height: 900 }, style: { objectFit: 'cover', borderRadius: 12, border: '2px solid #7F6A47' } },
      { id: 'title', type: 'text', locked: false, content: 'ELEGANT\nDESIGN', position: { x: 540, y: 1450 }, size: { width: 800, height: 150 }, style: { fontSize: 68, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center', lineHeight: 1.2 } }
    ]
  },
  {
    id: 'corner-brackets-story',
    name: 'Golden Corner Brackets Story',
    category: 'golden-frame',
    format: '9:16',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'top-left', type: 'pattern', locked: true, position: { x: 60, y: 200 }, size: { width: 100, height: 100 }, style: { borderTop: '5px solid #7F6A47', borderLeft: '5px solid #7F6A47' } },
      { id: 'top-right', type: 'pattern', locked: true, position: { x: 920, y: 200 }, size: { width: 100, height: 100 }, style: { borderTop: '5px solid #7F6A47', borderRight: '5px solid #7F6A47' } },
      { id: 'bottom-left', type: 'pattern', locked: true, position: { x: 60, y: 1620 }, size: { width: 100, height: 100 }, style: { borderBottom: '5px solid #7F6A47', borderLeft: '5px solid #7F6A47' } },
      { id: 'bottom-right', type: 'pattern', locked: true, position: { x: 920, y: 1620 }, size: { width: 100, height: 100 }, style: { borderBottom: '5px solid #7F6A47', borderRight: '5px solid #7F6A47' } },
      { id: 'main-img', type: 'image', locked: false, src: '', position: { x: 140, y: 450 }, size: { width: 800, height: 900 }, style: { objectFit: 'cover', borderRadius: 12 } },
      { id: 'title', type: 'text', locked: false, content: 'CORNER\nELEGANCE', position: { x: 540, y: 1500 }, size: { width: 800, height: 140 }, style: { fontSize: 62, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center', lineHeight: 1.2 } }
    ]
  },
  {
    id: 'gold-underline-story',
    name: 'Gold Underline Story',
    category: 'golden-frame',
    format: '9:16',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'main-img', type: 'image', locked: false, src: '', position: { x: 90, y: 350 }, size: { width: 900, height: 850 }, style: { objectFit: 'cover', borderRadius: 16 } },
      { id: 'title', type: 'text', locked: false, content: 'PREMIUM\nSAÇ ƏKİMİ', position: { x: 540, y: 1400 }, size: { width: 900, height: 140 }, style: { fontSize: 64, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center', lineHeight: 1.2 } },
      { id: 'underline', type: 'frame', locked: true, position: { x: 390, y: 1560 }, size: { width: 300, height: 4 }, style: { backgroundColor: '#7F6A47' } }
    ]
  },
  {
    id: 'gold-shadow-glow-story',
    name: 'Gold Shadow Story',
    category: 'golden-frame',
    format: '9:16',
    bgColor: '#1A1A1A',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#1A1A1A' } },
      { id: 'main-img', type: 'image', locked: false, src: '', position: { x: 90, y: 300 }, size: { width: 900, height: 900 }, style: { objectFit: 'cover', borderRadius: 16 } },
      { id: 'title', type: 'text', locked: false, content: 'GOLDEN\nGLOW', position: { x: 540, y: 1450 }, size: { width: 800, height: 150 }, style: { fontSize: 76, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center', textShadow: '0 0 40px rgba(127,106,71,0.9), 0 0 80px rgba(127,106,71,0.6)', lineHeight: 1.2 } }
    ]
  },

  // TYPOGRAPHY TEMPLATES (9:16 Story)
  {
    id: 'bold-centered-story',
    name: 'Bold Title Story',
    category: 'typography',
    format: '9:16',
    bgColor: '#3A3A3A',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#3A3A3A' } },
      { id: 'main-title', type: 'text', locked: false, content: 'SAÇ\nƏKİMİ', position: { x: 540, y: 820 }, size: { width: 950, height: 240 }, style: { fontSize: 110, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center', letterSpacing: 4, lineHeight: 1.1 } },
      { id: 'subtitle', type: 'text', locked: false, content: 'PREMIUM XİDMƏT', position: { x: 540, y: 1120 }, size: { width: 700, height: 80 }, style: { fontSize: 42, fontFamily: 'Inter', color: '#7F6A47', textAlign: 'center', letterSpacing: 6, textTransform: 'uppercase' } }
    ]
  },
  {
    id: 'ribbon-title-story',
    name: 'Title Ribbon Story',
    category: 'typography',
    format: '9:16',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'ribbon-bg', type: 'background', locked: true, position: { x: 0, y: 800 }, size: { width: 1080, height: 320 }, style: { backgroundColor: '#7F6A47', boxShadow: '0 10px 40px rgba(127,106,71,0.5)' } },
      { id: 'ribbon-title', type: 'text', locked: false, content: 'SAÇ ƏKİMİ', position: { x: 540, y: 920 }, size: { width: 900, height: 140 }, style: { fontSize: 92, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center', letterSpacing: 6 } }
    ]
  },
  {
    id: 'split-title-story',
    name: 'Split Title Story',
    category: 'typography',
    format: '9:16',
    bgColor: '#3A3A3A',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#3A3A3A' } },
      { id: 'part1', type: 'text', locked: false, content: 'PREMIUM', position: { x: 540, y: 700 }, size: { width: 800, height: 120 }, style: { fontSize: 80, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center', letterSpacing: 10 } },
      { id: 'divider', type: 'background', locked: true, position: { x: 390, y: 860 }, size: { width: 300, height: 3 }, style: { backgroundColor: '#7F6A47' } },
      { id: 'part2', type: 'text', locked: false, content: 'SAÇ', position: { x: 540, y: 940 }, size: { width: 600, height: 100 }, style: { fontSize: 72, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'normal', textAlign: 'center', letterSpacing: 16 } },
      { id: 'part3', type: 'text', locked: false, content: 'ƏKİMİ', position: { x: 540, y: 1080 }, size: { width: 600, height: 100 }, style: { fontSize: 72, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'normal', textAlign: 'center', letterSpacing: 16 } }
    ]
  },
  {
    id: 'shadow-elegant-story',
    name: 'Shadowed Elegant Story',
    category: 'typography',
    format: '9:16',
    bgColor: '#1A1A1A',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#1A1A1A' } },
      { id: 'shadow-title', type: 'text', locked: false, content: 'ELEGANT', position: { x: 540, y: 920 }, size: { width: 900, height: 140 }, style: { fontSize: 96, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center', textShadow: '0 12px 50px rgba(127,106,71,0.8), 0 0 100px rgba(127,106,71,0.5)' } }
    ]
  },
  {
    id: 'mega-title-story',
    name: 'Mega Title Story',
    category: 'typography',
    format: '9:16',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1920 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'mega-title', type: 'text', locked: false, content: 'BHI', position: { x: 540, y: 880 }, size: { width: 1000, height: 280 }, style: { fontSize: 220, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center', letterSpacing: -6 } },
      { id: 'mini-tagline', type: 'text', locked: false, content: 'Baku Hair Institute', position: { x: 540, y: 1180 }, size: { width: 700, height: 60 }, style: { fontSize: 32, fontFamily: 'Inter', color: '#3A3A3A', textAlign: 'center', letterSpacing: 8 } }
    ]
  },

  // ========== ORIGINAL 1:1 TEMPLATES CONTINUE ==========
  // FAQ TEMPLATES (1:1)
  {
    id: 'faq-1',
    name: 'Tez-Tez Verilən Suallar',
    category: 'faq',
    format: '1:1',
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
    format: '1:1',
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
    format: '1:1',
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
    format: '1:1',
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
    format: '1:1',
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
    format: '1:1',
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
    format: '1:1',
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
    format: '1:1',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'header-bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 200 }, style: { background: 'linear-gradient(135deg, #7F6A47 0%, #F8F3E6 100%)' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'FUE TEXNİKASI', position: { x: 540, y: 100 }, size: { width: 800, height: 70 }, style: { fontSize: 56, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'subtitle', type: 'text', locked: true, visible: true, content: 'Follicular Unit Extraction', position: { x: 540, y: 250 }, size: { width: 700, height: 50 }, style: { fontSize: 24, fontFamily: 'Inter', color: '#7F6A47', textAlign: 'center', fontStyle: 'italic' } },
      { id: 'info-img', type: 'image', locked: false, visible: true, src: '', position: { x: 140, y: 350 }, size: { width: 800, height: 400 }, style: { borderRadius: 12, objectFit: 'cover' } },
      { id: 'description', type: 'text', locked: false, visible: true, content: 'Mikromotor vasitəsilə\ntək-tək folikulların çıxarılması', position: { x: 540, y: 850 }, size: { width: 800, height: 120 }, style: { fontSize: 32, fontFamily: 'Inter', color: '#3A3A3A', textAlign: 'center', lineHeight: 1.4 } }
    ]
  },

  // ========== CENTER MASK TEMPLATES (10) ==========
  {
    id: 'center-soft-glow',
    name: 'Soft Center Glow',
    category: 'center-mask',
    format: '1:1',
    bgColor: '#1A1A1A',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#1A1A1A' } },
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'center-glow', type: 'mask', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 40%, rgba(0,0,0,0.7) 100%)', pointerEvents: 'none' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'PREMIUM NƏTİCƏ', position: { x: 540, y: 500 }, size: { width: 700, height: 80 }, style: { fontSize: 56, fontFamily: 'Playfair Display', color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center', textShadow: '0 4px 20px rgba(0,0,0,0.8)' } }
    ]
  },
  {
    id: 'oval-center-light',
    name: 'Oval Center Light',
    category: 'center-mask',
    format: '1:1',
    bgColor: '#2A2A2A',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#2A2A2A' } },
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'oval-mask', type: 'mask', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { background: 'radial-gradient(ellipse 600px 800px at center, rgba(255,255,255,0.85) 0%, rgba(0,0,0,0.8) 70%)', pointerEvents: 'none' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'TRANSFORMASYON', position: { x: 540, y: 450 }, size: { width: 600, height: 100 }, style: { fontSize: 52, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'subtitle', type: 'text', locked: false, visible: true, content: '12 Ay Sonra', position: { x: 540, y: 580 }, size: { width: 400, height: 50 }, style: { fontSize: 28, fontFamily: 'Inter', color: '#F8F3E6', textAlign: 'center' } }
    ]
  },
  {
    id: 'diamond-center',
    name: 'Diamond Center Mask',
    category: 'center-mask',
    format: '1:1',
    bgColor: '#0D0D0D',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#0D0D0D' } },
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'diamond-mask', type: 'mask', locked: true, visible: true, position: { x: 240, y: 240 }, size: { width: 600, height: 600 }, style: { clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(0px)', border: '3px solid rgba(127,106,71,0.6)' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'LÜKS SAÇ ƏKİMİ', position: { x: 540, y: 920 }, size: { width: 700, height: 70 }, style: { fontSize: 48, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'vertical-fade',
    name: 'Vertical Center Fade',
    category: 'center-mask',
    format: '1:1',
    bgColor: '#1C1C1C',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#1C1C1C' } },
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'vertical-fade', type: 'mask', locked: true, visible: true, position: { x: 340, y: 0 }, size: { width: 400, height: 1080 }, style: { background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(255,255,255,0.3) 50%, rgba(0,0,0,0.9) 100%)', pointerEvents: 'none' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'ƏVVƏL & SONRA', position: { x: 540, y: 100 }, size: { width: 600, height: 60 }, style: { fontSize: 44, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'spotlight',
    name: 'Centered Spotlight',
    category: 'center-mask',
    format: '1:1',
    bgColor: '#000000',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#000000' } },
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'spotlight', type: 'mask', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { background: 'radial-gradient(ellipse 500px 700px at 50% 40%, rgba(255,255,255,0.95) 0%, rgba(0,0,0,0.95) 65%)', pointerEvents: 'none' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'SPOTLIGHT', position: { x: 540, y: 850 }, size: { width: 500, height: 70 }, style: { fontSize: 52, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center', letterSpacing: 3 } }
    ]
  },
  {
    id: 'golden-halo',
    name: 'Golden Halo Center',
    category: 'center-mask',
    format: '1:1',
    bgColor: '#1A1A1A',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#1A1A1A' } },
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'halo-ring', type: 'mask', locked: true, visible: true, position: { x: 190, y: 190 }, size: { width: 700, height: 700 }, style: { borderRadius: '50%', border: '8px solid #7F6A47', background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 100%)', boxShadow: '0 0 60px rgba(127,106,71,0.8), inset 0 0 80px rgba(127,106,71,0.3)' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'GOLDEN RESULT', position: { x: 540, y: 520 }, size: { width: 500, height: 80 }, style: { fontSize: 48, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'glass-panel',
    name: 'Glass Panel Center',
    category: 'center-mask',
    format: '1:1',
    bgColor: '#2C2C2C',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#2C2C2C' } },
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'glass-panel', type: 'mask', locked: true, visible: true, position: { x: 240, y: 190 }, size: { width: 600, height: 700 }, style: { background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.3)' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'MODERN DİZAYN', position: { x: 540, y: 500 }, size: { width: 500, height: 70 }, style: { fontSize: 46, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'blur-box',
    name: 'Center Blur Box',
    category: 'center-mask',
    format: '1:1',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover', filter: 'blur(8px)' } },
      { id: 'clear-box', type: 'mask', locked: true, visible: true, position: { x: 190, y: 290 }, size: { width: 700, height: 500 }, style: { background: 'white', borderRadius: 12, boxShadow: '0 10px 60px rgba(0,0,0,0.3)' } },
      { id: 'box-img', type: 'image', locked: false, visible: true, src: '', position: { x: 190, y: 290 }, size: { width: 700, height: 500 }, style: { objectFit: 'cover', borderRadius: 12 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'FOKUS', position: { x: 540, y: 880 }, size: { width: 400, height: 60 }, style: { fontSize: 52, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'frosted-area',
    name: 'Center Frosted Area',
    category: 'center-mask',
    format: '1:1',
    bgColor: '#3A3A3A',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#3A3A3A' } },
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'frosted', type: 'mask', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { background: 'radial-gradient(circle 450px at center, transparent 0%, rgba(255,255,255,0.6) 100%)', backdropFilter: 'blur(3px)', pointerEvents: 'none' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'FROSTED GLASS', position: { x: 540, y: 520 }, size: { width: 600, height: 70 }, style: { fontSize: 50, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'white-beam',
    name: 'White Beam Center',
    category: 'center-mask',
    format: '1:1',
    bgColor: '#0A0A0A',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#0A0A0A' } },
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'beam', type: 'mask', locked: true, visible: true, position: { x: 0, y: 390 }, size: { width: 1080, height: 300 }, style: { background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(255,255,255,0.5) 50%, rgba(0,0,0,0.9) 100%)', pointerEvents: 'none' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'HORIZONTAL LIGHT', position: { x: 540, y: 520 }, size: { width: 700, height: 70 }, style: { fontSize: 48, fontFamily: 'Playfair Display', color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },

  // ========== OPACITY BACKGROUND TEMPLATES (10) ==========
  {
    id: 'opacity-40',
    name: '40% Opacity Background',
    category: 'opacity-bg',
    format: '1:1',
    bgColor: 'rgba(58, 58, 58, 0.4)',
    layers: [
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'overlay', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: 'rgba(58, 58, 58, 0.4)' } },
      { id: 'logo', type: 'logo', locked: true, visible: true, content: 'BHI', position: { x: 490, y: 80 }, size: { width: 100, height: 60 }, style: { fontSize: 48, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'BALANCED OPACITY', position: { x: 540, y: 480 }, size: { width: 800, height: 80 }, style: { fontSize: 56, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center', textShadow: '0 4px 12px rgba(0,0,0,0.6)' } },
      { id: 'subtitle', type: 'text', locked: false, visible: true, content: 'Premium Hair Transplant', position: { x: 540, y: 600 }, size: { width: 600, height: 50 }, style: { fontSize: 28, fontFamily: 'Inter', color: '#7F6A47', textAlign: 'center' } }
    ]
  },
  {
    id: 'opacity-20',
    name: '20% Ultra-Minimal',
    category: 'opacity-bg',
    format: '1:1',
    bgColor: 'rgba(255, 255, 255, 0.2)',
    layers: [
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'overlay', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: 'rgba(255, 255, 255, 0.2)' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'ULTRA MİNİMAL', position: { x: 540, y: 500 }, size: { width: 700, height: 70 }, style: { fontSize: 52, fontFamily: 'Playfair Display', color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center', textShadow: '0 2px 20px rgba(0,0,0,0.8)' } }
    ]
  },
  {
    id: 'opacity-60',
    name: '60% Luxury Dark',
    category: 'opacity-bg',
    format: '1:1',
    bgColor: 'rgba(26, 26, 26, 0.6)',
    layers: [
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'overlay', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: 'rgba(26, 26, 26, 0.6)' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'LUXURY DESIGN', position: { x: 540, y: 450 }, size: { width: 800, height: 90 }, style: { fontSize: 64, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'subtitle', type: 'text', locked: false, visible: true, content: 'Premium Experience', position: { x: 540, y: 580 }, size: { width: 500, height: 50 }, style: { fontSize: 32, fontFamily: 'Inter', color: '#F8F3E6', textAlign: 'center' } }
    ]
  },
  {
    id: 'gradient-top-bottom',
    name: 'Gradient Opacity Top → Bottom',
    category: 'opacity-bg',
    format: '1:1',
    bgColor: 'transparent',
    layers: [
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'gradient-overlay', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 50%, rgba(0,0,0,0.8) 100%)' } },
      { id: 'top-title', type: 'text', locked: false, visible: true, content: 'ƏVVƏL', position: { x: 540, y: 120 }, size: { width: 400, height: 60 }, style: { fontSize: 48, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'bottom-title', type: 'text', locked: false, visible: true, content: 'SONRA', position: { x: 540, y: 920 }, size: { width: 400, height: 60 }, style: { fontSize: 48, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'gradient-left-right',
    name: 'Gradient Opacity Left → Right',
    category: 'opacity-bg',
    format: '1:1',
    bgColor: 'transparent',
    layers: [
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'gradient-overlay', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { background: 'linear-gradient(to right, rgba(127,106,71,0.7) 0%, transparent 50%, rgba(58,58,58,0.7) 100%)' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'TRANSFORMASYON', position: { x: 540, y: 500 }, size: { width: 700, height: 70 }, style: { fontSize: 52, fontFamily: 'Playfair Display', color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center', textShadow: '0 4px 16px rgba(0,0,0,0.7)' } }
    ]
  },
  {
    id: 'vignette-transparency',
    name: 'Vignette Transparency',
    category: 'opacity-bg',
    format: '1:1',
    bgColor: 'transparent',
    layers: [
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'vignette', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { background: 'radial-gradient(circle, transparent 30%, rgba(0,0,0,0.8) 100%)' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'VIGNETTE EFFECT', position: { x: 540, y: 520 }, size: { width: 600, height: 70 }, style: { fontSize: 48, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'fade-white',
    name: 'Fade-to-White',
    category: 'opacity-bg',
    format: '1:1',
    bgColor: 'transparent',
    layers: [
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'white-fade', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.95) 100%)' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'CLEAN & MINIMAL', position: { x: 540, y: 850 }, size: { width: 700, height: 70 }, style: { fontSize: 52, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'fade-gold',
    name: 'Fade-to-Gold',
    category: 'opacity-bg',
    format: '1:1',
    bgColor: 'transparent',
    layers: [
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'gold-fade', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { background: 'linear-gradient(to bottom, rgba(127,106,71,0.1) 0%, rgba(127,106,71,0.9) 100%)' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'GOLDEN PREMIUM', position: { x: 540, y: 880 }, size: { width: 700, height: 80 }, style: { fontSize: 56, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'dual-tone',
    name: 'Dual Tone Transparency',
    category: 'opacity-bg',
    format: '1:1',
    bgColor: 'transparent',
    layers: [
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'dual-overlay', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { background: 'linear-gradient(135deg, rgba(127,106,71,0.6) 0%, rgba(58,58,58,0.6) 100%)' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'DUAL TONE', position: { x: 540, y: 500 }, size: { width: 600, height: 70 }, style: { fontSize: 54, fontFamily: 'Playfair Display', color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'frosted-edge',
    name: 'Frosted Edge Transparency',
    category: 'opacity-bg',
    format: '1:1',
    bgColor: 'transparent',
    layers: [
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { objectFit: 'cover' } },
      { id: 'frosted-edge', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { background: 'radial-gradient(circle, transparent 40%, rgba(255,255,255,0.7) 100%)', backdropFilter: 'blur(2px)' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'FROSTED EDGE', position: { x: 540, y: 520 }, size: { width: 500, height: 70 }, style: { fontSize: 50, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },

  // ========== GOLDEN FRAME TEMPLATES (10) ==========
  {
    id: 'gold-full-border',
    name: 'Gold Thin Frame Full Border',
    category: 'golden-frame',
    format: '1:1',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'base-img', type: 'image', locked: false, visible: true, src: '', position: { x: 60, y: 60 }, size: { width: 960, height: 960 }, style: { objectFit: 'cover' } },
      { id: 'gold-frame', type: 'frame', locked: true, visible: true, position: { x: 40, y: 40 }, size: { width: 1000, height: 1000 }, style: { border: '3px solid #7F6A47', borderRadius: 8 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'PREMIUM FRAME', position: { x: 540, y: 950 }, size: { width: 600, height: 60 }, style: { fontSize: 42, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'gold-top-bottom',
    name: 'Top & Bottom Gold Lines',
    category: 'golden-frame',
    format: '1:1',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'top-line', type: 'frame', locked: true, visible: true, position: { x: 0, y: 40 }, size: { width: 1080, height: 2 }, style: { backgroundColor: '#7F6A47' } },
      { id: 'bottom-line', type: 'frame', locked: true, visible: true, position: { x: 0, y: 1038 }, size: { width: 1080, height: 2 }, style: { backgroundColor: '#7F6A47' } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 90, y: 200 }, size: { width: 900, height: 500 }, style: { objectFit: 'cover', borderRadius: 8 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'ELEGANT DESIGN', position: { x: 540, y: 800 }, size: { width: 700, height: 70 }, style: { fontSize: 52, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'gold-left-accent',
    name: 'Left Aligned Gold Accent',
    category: 'golden-frame',
    format: '1:1',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'left-accent', type: 'frame', locked: true, visible: true, position: { x: 40, y: 200 }, size: { width: 6, height: 600 }, style: { backgroundColor: '#7F6A47' } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 120, y: 200 }, size: { width: 840, height: 600 }, style: { objectFit: 'cover', borderRadius: 8 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'SAÇ ƏKİMİ', position: { x: 120, y: 880 }, size: { width: 600, height: 70 }, style: { fontSize: 54, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'left' } }
    ]
  },
  {
    id: 'double-gold-lines',
    name: 'Double Gold Thin Lines',
    category: 'golden-frame',
    format: '1:1',
    bgColor: '#3A3A3A',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#3A3A3A' } },
      { id: 'outer-frame', type: 'frame', locked: true, visible: true, position: { x: 60, y: 60 }, size: { width: 960, height: 960 }, style: { border: '2px solid #7F6A47', borderRadius: 8 } },
      { id: 'inner-frame', type: 'frame', locked: true, visible: true, position: { x: 80, y: 80 }, size: { width: 920, height: 920 }, style: { border: '1px solid #7F6A47', borderRadius: 6 } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 140, y: 200 }, size: { width: 800, height: 500 }, style: { objectFit: 'cover', borderRadius: 8 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'DOUBLE FRAME', position: { x: 540, y: 800 }, size: { width: 700, height: 70 }, style: { fontSize: 50, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'corner-brackets',
    name: 'Golden Corner Brackets',
    category: 'golden-frame',
    format: '1:1',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'top-left', type: 'pattern', locked: true, visible: true, position: { x: 40, y: 40 }, size: { width: 80, height: 80 }, style: { borderTop: '4px solid #7F6A47', borderLeft: '4px solid #7F6A47' } },
      { id: 'top-right', type: 'pattern', locked: true, visible: true, position: { x: 960, y: 40 }, size: { width: 80, height: 80 }, style: { borderTop: '4px solid #7F6A47', borderRight: '4px solid #7F6A47' } },
      { id: 'bottom-left', type: 'pattern', locked: true, visible: true, position: { x: 40, y: 960 }, size: { width: 80, height: 80 }, style: { borderBottom: '4px solid #7F6A47', borderLeft: '4px solid #7F6A47' } },
      { id: 'bottom-right', type: 'pattern', locked: true, visible: true, position: { x: 960, y: 960 }, size: { width: 80, height: 80 }, style: { borderBottom: '4px solid #7F6A47', borderRight: '4px solid #7F6A47' } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 190, y: 240 }, size: { width: 700, height: 500 }, style: { objectFit: 'cover', borderRadius: 8 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'CORNER ELEGANCE', position: { x: 540, y: 840 }, size: { width: 700, height: 70 }, style: { fontSize: 48, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'minimal-gold-box',
    name: 'Minimal Gold Box',
    category: 'golden-frame',
    format: '1:1',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'gold-box', type: 'frame', locked: true, visible: true, position: { x: 240, y: 340 }, size: { width: 600, height: 400 }, style: { border: '2px solid #7F6A47' } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 260, y: 360 }, size: { width: 560, height: 360 }, style: { objectFit: 'cover' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'MINIMAL BOX', position: { x: 540, y: 850 }, size: { width: 500, height: 60 }, style: { fontSize: 46, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'gold-underline',
    name: 'Gold Underline Title',
    category: 'golden-frame',
    format: '1:1',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 90, y: 240 }, size: { width: 900, height: 500 }, style: { objectFit: 'cover', borderRadius: 12 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'PREMIUM SAÇ ƏKİMİ', position: { x: 540, y: 860 }, size: { width: 800, height: 70 }, style: { fontSize: 52, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'underline', type: 'frame', locked: true, visible: true, position: { x: 390, y: 940 }, size: { width: 300, height: 3 }, style: { backgroundColor: '#7F6A47' } }
    ]
  },
  {
    id: 'gold-divider',
    name: 'Gold Divider Title/Subtitle',
    category: 'golden-frame',
    format: '1:1',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'SAÇ ƏKİMİ', position: { x: 540, y: 200 }, size: { width: 700, height: 80 }, style: { fontSize: 64, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'divider', type: 'frame', locked: true, visible: true, position: { x: 440, y: 300 }, size: { width: 200, height: 2 }, style: { backgroundColor: '#7F6A47' } },
      { id: 'subtitle', type: 'text', locked: false, visible: true, content: 'Premium Texnika', position: { x: 540, y: 340 }, size: { width: 500, height: 50 }, style: { fontSize: 28, fontFamily: 'Inter', color: '#7F6A47', textAlign: 'center' } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 140, y: 450 }, size: { width: 800, height: 500 }, style: { objectFit: 'cover', borderRadius: 12 } }
    ]
  },
  {
    id: 'gold-shadow-glow',
    name: 'Gold Shadow Title Glow',
    category: 'golden-frame',
    format: '1:1',
    bgColor: '#1A1A1A',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#1A1A1A' } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 90, y: 200 }, size: { width: 900, height: 500 }, style: { objectFit: 'cover', borderRadius: 12 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'GOLDEN GLOW', position: { x: 540, y: 820 }, size: { width: 700, height: 80 }, style: { fontSize: 60, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center', textShadow: '0 0 30px rgba(127,106,71,0.8), 0 0 60px rgba(127,106,71,0.5)' } }
    ]
  },
  {
    id: 'gold-gradient-frame',
    name: 'Gold Gradient Frame',
    category: 'golden-frame',
    format: '1:1',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'gradient-frame', type: 'frame', locked: true, visible: true, position: { x: 60, y: 60 }, size: { width: 960, height: 960 }, style: { border: '4px solid transparent', borderRadius: 12, backgroundImage: 'linear-gradient(#F8F3E6, #F8F3E6), linear-gradient(135deg, #7F6A47, #C4A676, #7F6A47)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box' } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 140, y: 240 }, size: { width: 800, height: 500 }, style: { objectFit: 'cover', borderRadius: 8 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'GRADIENT GOLD', position: { x: 540, y: 840 }, size: { width: 700, height: 70 }, style: { fontSize: 52, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },

  // ========== CLINICAL LINES TEMPLATES (10) ==========
  {
    id: 'geometric-minimal',
    name: 'Geometric Lines Minimal',
    category: 'clinical-lines',
    format: '1:1',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'line-pattern', type: 'pattern', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 108px, rgba(127,106,71,0.15) 108px, rgba(127,106,71,0.15) 109px), repeating-linear-gradient(90deg, transparent, transparent 108px, rgba(127,106,71,0.15) 108px, rgba(127,106,71,0.15) 109px)', pointerEvents: 'none' } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 190, y: 290 }, size: { width: 700, height: 500 }, style: { objectFit: 'cover', borderRadius: 8 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'GEOMETRIC PRECISION', position: { x: 540, y: 880 }, size: { width: 700, height: 60 }, style: { fontSize: 44, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'medical-wave',
    name: 'Medical Wave Soft Lines',
    category: 'clinical-lines',
    format: '1:1',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'wave-pattern', type: 'pattern', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundImage: 'repeating-radial-gradient(circle at 0 0, transparent 0, #F8F3E6 100px), repeating-linear-gradient(rgba(127,106,71,0.1), rgba(127,106,71,0.1))', pointerEvents: 'none' } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 140, y: 240 }, size: { width: 800, height: 500 }, style: { objectFit: 'cover', borderRadius: 12 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'MEDICAL CARE', position: { x: 540, y: 850 }, size: { width: 600, height: 70 }, style: { fontSize: 50, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'diagonal-lines',
    name: 'Clean Diagonal Lines',
    category: 'clinical-lines',
    format: '1:1',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'diagonal-pattern', type: 'pattern', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(127,106,71,0.1) 100px, rgba(127,106,71,0.1) 101px)', pointerEvents: 'none' } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 90, y: 190 }, size: { width: 900, height: 600 }, style: { objectFit: 'cover', borderRadius: 8 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'DIAGONAL DESIGN', position: { x: 540, y: 880 }, size: { width: 700, height: 70 }, style: { fontSize: 48, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'vertical-lines',
    name: 'Soft Vertical Lines',
    category: 'clinical-lines',
    format: '1:1',
    bgColor: '#F0EBD9',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#F0EBD9' } },
      { id: 'vertical-pattern', type: 'pattern', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(127,106,71,0.12) 60px, rgba(127,106,71,0.12) 61px)', pointerEvents: 'none' } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 190, y: 240 }, size: { width: 700, height: 500 }, style: { objectFit: 'cover', borderRadius: 12 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'VERTICAL ELEGANCE', position: { x: 540, y: 850 }, size: { width: 700, height: 70 }, style: { fontSize: 48, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'triangle-lines',
    name: 'Triangle Fine-Lines',
    category: 'clinical-lines',
    format: '1:1',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'triangle-bg', type: 'pattern', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 540, height: 1080 }, style: { clipPath: 'polygon(0 0, 100% 50%, 0 100%)', backgroundColor: 'rgba(127,106,71,0.05)' } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 340, y: 290 }, size: { width: 640, height: 500 }, style: { objectFit: 'cover', borderRadius: 8 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'TRIANGLE DESIGN', position: { x: 660, y: 880 }, size: { width: 600, height: 70 }, style: { fontSize: 46, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'left' } }
    ]
  },
  {
    id: 'hair-strand-lines',
    name: 'Parallel Hair-Strand Lines',
    category: 'clinical-lines',
    format: '1:1',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'hair-pattern', type: 'pattern', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundImage: 'repeating-linear-gradient(20deg, transparent, transparent 3px, rgba(127,106,71,0.08) 3px, rgba(127,106,71,0.08) 4px, transparent 4px, transparent 20px)', pointerEvents: 'none' } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 140, y: 240 }, size: { width: 800, height: 500 }, style: { objectFit: 'cover', borderRadius: 12 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'HAIR TEXTURE', position: { x: 540, y: 850 }, size: { width: 600, height: 70 }, style: { fontSize: 50, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'soft-grid',
    name: 'Soft Grid Layer',
    category: 'clinical-lines',
    format: '1:1',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'grid-pattern', type: 'pattern', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundImage: 'linear-gradient(rgba(127,106,71,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(127,106,71,0.06) 1px, transparent 1px)', backgroundSize: '90px 90px', pointerEvents: 'none' } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 190, y: 290 }, size: { width: 700, height: 500 }, style: { objectFit: 'cover', borderRadius: 8 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'SOFT GRID', position: { x: 540, y: 880 }, size: { width: 500, height: 70 }, style: { fontSize: 48, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'nano-dots',
    name: 'Nano Pattern Dots',
    category: 'clinical-lines',
    format: '1:1',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'dot-pattern', type: 'pattern', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundImage: 'radial-gradient(circle, rgba(127,106,71,0.15) 1px, transparent 1px)', backgroundSize: '30px 30px', pointerEvents: 'none' } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 140, y: 240 }, size: { width: 800, height: 500 }, style: { objectFit: 'cover', borderRadius: 12 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'NANO PRECISION', position: { x: 540, y: 850 }, size: { width: 700, height: 70 }, style: { fontSize: 50, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'isometric-lines',
    name: 'Isometric Light Lines',
    category: 'clinical-lines',
    format: '1:1',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'isometric-pattern', type: 'pattern', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundImage: 'repeating-linear-gradient(60deg, transparent, transparent 70px, rgba(127,106,71,0.08) 70px, rgba(127,106,71,0.08) 71px), repeating-linear-gradient(-60deg, transparent, transparent 70px, rgba(127,106,71,0.08) 70px, rgba(127,106,71,0.08) 71px)', pointerEvents: 'none' } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 190, y: 290 }, size: { width: 700, height: 500 }, style: { objectFit: 'cover', borderRadius: 8 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'ISOMETRIC', position: { x: 540, y: 880 }, size: { width: 500, height: 70 }, style: { fontSize: 50, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'luxury-edge-lines',
    name: 'Luxury Edge Lines',
    category: 'clinical-lines',
    format: '1:1',
    bgColor: '#1A1A1A',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#1A1A1A' } },
      { id: 'edge-lines-top', type: 'pattern', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 120 }, style: { backgroundImage: 'repeating-linear-gradient(90deg, rgba(127,106,71,0.3), rgba(127,106,71,0.3) 1px, transparent 1px, transparent 10px)' } },
      { id: 'edge-lines-bottom', type: 'pattern', locked: true, visible: true, position: { x: 0, y: 960 }, size: { width: 1080, height: 120 }, style: { backgroundImage: 'repeating-linear-gradient(90deg, rgba(127,106,71,0.3), rgba(127,106,71,0.3) 1px, transparent 1px, transparent 10px)' } },
      { id: 'main-img', type: 'image', locked: false, visible: true, src: '', position: { x: 140, y: 240 }, size: { width: 800, height: 500 }, style: { objectFit: 'cover', borderRadius: 12 } },
      { id: 'title', type: 'text', locked: false, visible: true, content: 'LUXURY EDGES', position: { x: 540, y: 840 }, size: { width: 700, height: 70 }, style: { fontSize: 52, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },

  // ========== TYPOGRAPHY TEMPLATES (10) ==========
  {
    id: 'bold-centered',
    name: 'Bold Title Centered + Subtitle',
    category: 'typography',
    format: '1:1',
    bgColor: '#3A3A3A',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#3A3A3A' } },
      { id: 'main-title', type: 'text', locked: false, visible: true, content: 'SAÇ ƏKİMİ', position: { x: 540, y: 450 }, size: { width: 900, height: 100 }, style: { fontSize: 80, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center', letterSpacing: 2 } },
      { id: 'subtitle', type: 'text', locked: false, visible: true, content: 'Premium Xidmət', position: { x: 540, y: 600 }, size: { width: 600, height: 50 }, style: { fontSize: 32, fontFamily: 'Inter', color: '#7F6A47', textAlign: 'center', letterSpacing: 4, textTransform: 'uppercase' } }
    ]
  },
  {
    id: 'left-premium',
    name: 'Left Aligned Premium Title',
    category: 'typography',
    format: '1:1',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'main-title', type: 'text', locked: false, visible: true, content: 'PREMIUM\nSAÇ ƏKİMİ', position: { x: 120, y: 400 }, size: { width: 800, height: 200 }, style: { fontSize: 72, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'left', lineHeight: 1.2 } },
      { id: 'tagline', type: 'text', locked: false, visible: true, content: 'Baku Hair Institute', position: { x: 120, y: 640 }, size: { width: 500, height: 50 }, style: { fontSize: 28, fontFamily: 'Inter', color: '#7F6A47', textAlign: 'left' } }
    ]
  },
  {
    id: 'right-clear',
    name: 'Right Aligned Clear Title',
    category: 'typography',
    format: '1:1',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'accent-bar', type: 'background', locked: true, visible: true, position: { x: 860, y: 0 }, size: { width: 220, height: 1080 }, style: { backgroundColor: '#7F6A47' } },
      { id: 'main-title', type: 'text', locked: false, visible: true, content: 'TRANSFORMASYON', position: { x: 740, y: 480 }, size: { width: 600, height: 120 }, style: { fontSize: 56, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'right', lineHeight: 1.3 } },
      { id: 'description', type: 'text', locked: false, visible: true, content: '12 ay sonra', position: { x: 740, y: 630 }, size: { width: 400, height: 50 }, style: { fontSize: 28, fontFamily: 'Inter', color: '#7F6A47', textAlign: 'right' } }
    ]
  },
  {
    id: 'ultra-minimal-white',
    name: 'Ultra-Minimal White Title',
    category: 'typography',
    format: '1:1',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'main-title', type: 'text', locked: false, visible: true, content: 'MİNİMAL', position: { x: 540, y: 520 }, size: { width: 700, height: 80 }, style: { fontSize: 64, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: '300', textAlign: 'center', letterSpacing: 8 } }
    ]
  },
  {
    id: 'dark-gold-subtitle',
    name: 'Dark Title + Gold Subtitle',
    category: 'typography',
    format: '1:1',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'main-title', type: 'text', locked: false, visible: true, content: 'BHI SAÇ KLİNİKASI', position: { x: 540, y: 420 }, size: { width: 900, height: 100 }, style: { fontSize: 68, fontFamily: 'Playfair Display', color: '#3A3A3A', fontWeight: 'bold', textAlign: 'center' } },
      { id: 'gold-subtitle', type: 'text', locked: false, visible: true, content: 'PREMIUM HEALTHCARE', position: { x: 540, y: 560 }, size: { width: 700, height: 60 }, style: { fontSize: 36, fontFamily: 'Inter', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center', letterSpacing: 6 } }
    ]
  },
  {
    id: 'ribbon-title',
    name: 'Title Inside Gold Ribbon',
    category: 'typography',
    format: '1:1',
    bgColor: '#FFFFFF',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#FFFFFF' } },
      { id: 'ribbon-bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 440 }, size: { width: 1080, height: 200 }, style: { backgroundColor: '#7F6A47', boxShadow: '0 8px 30px rgba(127,106,71,0.4)' } },
      { id: 'ribbon-title', type: 'text', locked: false, visible: true, content: 'SAÇ ƏKİMİ', position: { x: 540, y: 520 }, size: { width: 800, height: 90 }, style: { fontSize: 72, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center', letterSpacing: 4 } }
    ]
  },
  {
    id: 'split-title',
    name: 'Split Title Style',
    category: 'typography',
    format: '1:1',
    bgColor: '#3A3A3A',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#3A3A3A' } },
      { id: 'part1', type: 'text', locked: false, visible: true, content: 'PREMIUM', position: { x: 540, y: 380 }, size: { width: 700, height: 80 }, style: { fontSize: 64, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center', letterSpacing: 8 } },
      { id: 'divider', type: 'background', locked: true, visible: true, position: { x: 440, y: 480 }, size: { width: 200, height: 2 }, style: { backgroundColor: '#7F6A47' } },
      { id: 'part2', type: 'text', locked: false, visible: true, content: 'SAÇ', position: { x: 540, y: 520 }, size: { width: 500, height: 70 }, style: { fontSize: 56, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'normal', textAlign: 'center', letterSpacing: 12 } },
      { id: 'part3', type: 'text', locked: false, visible: true, content: 'ƏKİMİ', position: { x: 540, y: 610 }, size: { width: 500, height: 70 }, style: { fontSize: 56, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'normal', textAlign: 'center', letterSpacing: 12 } }
    ]
  },
  {
    id: 'shadow-elegant',
    name: 'Shadowed Elegant Title',
    category: 'typography',
    format: '1:1',
    bgColor: '#1A1A1A',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#1A1A1A' } },
      { id: 'shadow-title', type: 'text', locked: false, visible: true, content: 'ELEGANT', position: { x: 540, y: 500 }, size: { width: 800, height: 100 }, style: { fontSize: 80, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center', textShadow: '0 10px 40px rgba(127,106,71,0.7), 0 0 80px rgba(127,106,71,0.4)' } }
    ]
  },
  {
    id: 'glass-box-typo',
    name: 'Glass Box Typography',
    category: 'typography',
    format: '1:1',
    bgColor: '#3A3A3A',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#3A3A3A' } },
      { id: 'glass-box', type: 'background', locked: true, visible: true, position: { x: 190, y: 390 }, size: { width: 700, height: 300 }, style: { background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.3)' } },
      { id: 'glass-title', type: 'text', locked: false, visible: true, content: 'GLASS DESIGN', position: { x: 540, y: 520 }, size: { width: 600, height: 80 }, style: { fontSize: 56, fontFamily: 'Playfair Display', color: '#F8F3E6', fontWeight: 'bold', textAlign: 'center' } }
    ]
  },
  {
    id: 'mega-title',
    name: 'Mega Title Large Center',
    category: 'typography',
    format: '1:1',
    bgColor: '#F8F3E6',
    layers: [
      { id: 'bg', type: 'background', locked: true, visible: true, position: { x: 0, y: 0 }, size: { width: 1080, height: 1080 }, style: { backgroundColor: '#F8F3E6' } },
      { id: 'mega-title', type: 'text', locked: false, visible: true, content: 'BHI', position: { x: 540, y: 520 }, size: { width: 900, height: 180 }, style: { fontSize: 160, fontFamily: 'Playfair Display', color: '#7F6A47', fontWeight: 'bold', textAlign: 'center', letterSpacing: -4 } },
      { id: 'mini-tagline', type: 'text', locked: false, visible: true, content: 'Baku Hair Institute', position: { x: 540, y: 720 }, size: { width: 600, height: 40 }, style: { fontSize: 24, fontFamily: 'Inter', color: '#3A3A3A', textAlign: 'center', letterSpacing: 6 } }
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
  const [format, setFormat] = useState<'1:1' | '9:16'>('1:1');
  
  const canvasRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load template
  const loadTemplate = (template: Template) => {
    setSelectedTemplate(template);
    setLayers(JSON.parse(JSON.stringify(template.layers))); // Deep clone
  };

  // Handle format change - clear selection if template format doesn't match
  const handleFormatChange = (newFormat: '1:1' | '9:16') => {
    setFormat(newFormat);
    // If current template doesn't match new format, clear selection
    if (selectedTemplate && selectedTemplate.format !== newFormat) {
      setSelectedTemplate(null);
      setLayers([]);
      setSelectedLayerId(null);
    }
  };

  // Get canvas dimensions based on format
  const getCanvasDimensions = () => {
    if (format === '1:1') {
      return { width: 1080, height: 1080, displayWidth: 540, displayHeight: 540 };
    } else {
      return { width: 1080, height: 1920, displayWidth: 405, displayHeight: 720 };
    }
  };

  const canvasDims = getCanvasDimensions();

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

  // Toggle layer visibility
  const toggleLayerVisibility = (layerId: string) => {
    setLayers(prevLayers =>
      prevLayers.map(layer =>
        layer.id === layerId
          ? { ...layer, visible: !layer.visible }
          : layer
      )
    );
  };

  // Download canvas as PNG
  const handleDownload = async () => {
    if (!canvasRef.current) return;

    try {
      const html2canvas = (await import('html2canvas')).default;
      
      // Target dimensions (actual output size)
      const targetWidth = 1080;
      const targetHeight = format === '1:1' ? 1080 : 1920;
      
      // Current canvas display dimensions
      const currentWidth = canvasDims.displayWidth;
      const currentHeight = canvasDims.displayHeight;

      // Temporarily remove CSS transforms to avoid capture distortion
      const el = canvasRef.current as HTMLDivElement;
      const prevTransform = el.style.transform;
      const prevTransition = el.style.transition;
      el.style.transform = 'none';
      el.style.transition = 'none';
      // Wait a tick so styles apply before capture
      await new Promise(requestAnimationFrame);
      
      // Calculate scale to maintain aspect ratio
      const scaleX = targetWidth / currentWidth;
      const scaleY = targetHeight / currentHeight;
      
      // Capture at higher resolution directly
      const capturedCanvas = await html2canvas(canvasRef.current, {
        scale: Math.max(scaleX, scaleY), // Use higher scale to ensure quality
        backgroundColor: null,
        logging: false,
        useCORS: true,
        allowTaint: true,
        width: currentWidth,
        height: currentHeight
      });

      // Restore previous transforms
      el.style.transform = prevTransform;
      el.style.transition = prevTransition;

      // Create final canvas with exact target dimensions
      const finalCanvas = document.createElement('canvas');
      finalCanvas.width = targetWidth;
      finalCanvas.height = targetHeight;
      
      const ctx = finalCanvas.getContext('2d');
      if (!ctx) throw new Error('Canvas context error');
      
      // Calculate dimensions to maintain aspect ratio
      const capturedAspect = capturedCanvas.width / capturedCanvas.height;
      const targetAspect = targetWidth / targetHeight;
      
      let drawWidth = targetWidth;
      let drawHeight = targetHeight;
      let offsetX = 0;
      let offsetY = 0;
      
      // Center the image if aspect ratios don't match perfectly
      if (Math.abs(capturedAspect - targetAspect) > 0.01) {
        if (capturedAspect > targetAspect) {
          drawHeight = targetWidth / capturedAspect;
          offsetY = (targetHeight - drawHeight) / 2;
        } else {
          drawWidth = targetHeight * capturedAspect;
          offsetX = (targetWidth - drawWidth) / 2;
        }
      }
      
      // Fill with background color
      ctx.fillStyle = selectedTemplate?.bgColor || '#FFFFFF';
      ctx.fillRect(0, 0, targetWidth, targetHeight);
      
      // Draw captured image maintaining aspect ratio
      ctx.drawImage(capturedCanvas, offsetX, offsetY, drawWidth, drawHeight);

      // Download
      const link = document.createElement('a');
      link.download = `bhi-${selectedTemplate?.id || 'design'}-${format}-${Date.now()}.png`;
      link.href = finalCanvas.toDataURL('image/png', 1.0);
      link.click();
    } catch (error) {
      console.error('Download error:', error);
      alert('Yükləmə zamanı xəta baş verdi');
    }
  };

  const categories = [
    { id: 'all', name: 'Hamısı', icon: Grid },
    { id: 'case-study', name: 'Vaka Analizi', icon: FileText },
    { id: 'before-after', name: 'Əvvəl & Sonra', icon: TrendingUp },
    { id: 'testimonial', name: 'Rəylər', icon: Star },
    { id: 'faq', name: 'Suallar', icon: MessageCircle },
    { id: 'quote', name: 'Məsləhətlər', icon: Award },
    { id: 'promo', name: 'Kampaniya', icon: Zap },
    { id: 'countdown', name: 'Geri Sayım', icon: Clock },
    { id: 'info', name: 'Məlumat', icon: BookOpen },
    { id: 'center-mask', name: 'Mərkəz Mask', icon: Circle },
    { id: 'opacity-bg', name: 'Şəffaflıq', icon: Square },
    { id: 'golden-frame', name: 'Qızıl Çərçivə', icon: Frame },
    { id: 'clinical-lines', name: 'Xətlər', icon: Hash },
    { id: 'typography', name: 'Tipoqrafiya', icon: AlignCenter }
  ];

  const filteredTemplates = filterCategory === 'all' 
    ? templates.filter(t => t.format === format)
    : templates.filter(t => t.category === filterCategory && t.format === format);

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-[9999]' : 'min-h-screen pt-24'} bg-gradient-to-br from-[#F8F3E6] via-white to-[#F0EBD9]`}>
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
                      {React.createElement(cat.icon, { className: "w-5 h-5" })}
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
              {filteredTemplates.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p className="text-sm">
                    {format === '9:16' 
                      ? '9:16 formatında şablon yoxdur. 1:1 formatına keçin.'
                      : 'Bu kateqoriyada şablon tapılmadı.'
                    }
                  </p>
                </div>
              ) : (
                <div className="space-y-2 max-h-[600px] overflow-y-auto">{filteredTemplates.map(template => (
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
                      {/* Template icon from category */}
                      {React.createElement(categories.find(c => c.id === template.category)?.icon || Grid, { className: "w-5 h-5 text-[#7F6A47]" })}
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
              )}
            </div>
          </div>

          {/* Center - Canvas Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#7F6A47]/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-serif text-[#3A3A3A] font-bold">
                  {selectedTemplate ? selectedTemplate.name : 'Şablon Seçin'}
                </h3>
                
                <div className="flex items-center gap-3">
                  {/* Format Selector */}
                  <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                    <button
                      onClick={() => handleFormatChange('1:1')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                        format === '1:1'
                          ? 'bg-[#7F6A47] text-white shadow-sm'
                          : 'text-[#3A3A3A] hover:bg-gray-200'
                      }`}
                    >
                      <Monitor className="w-4 h-4" />
                      <span>1:1</span>
                    </button>
                    <button
                      onClick={() => handleFormatChange('9:16')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                        format === '9:16'
                          ? 'bg-[#7F6A47] text-white shadow-sm'
                          : 'text-[#3A3A3A] hover:bg-gray-200'
                      }`}
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>9:16</span>
                    </button>
                  </div>

                  {selectedTemplate && (
                    <button
                      onClick={handleDownload}
                      className="flex items-center gap-2 px-4 py-2 bg-[#7F6A47] hover:bg-[#6B5A3D] text-white rounded-lg transition-all shadow-sm"
                    >
                      <Download className="w-4 h-4" />
                      <span className="text-sm font-medium">PNG Yüklə</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Canvas */}
              <div className="flex justify-center items-center bg-gray-50 p-8 rounded-lg min-h-[600px]">
                {selectedTemplate ? (
                  <div
                    ref={canvasRef}
                    className="relative shadow-2xl"
                    style={{
                      width: `${canvasDims.displayWidth}px`,
                      height: `${canvasDims.displayHeight}px`,
                      backgroundColor: selectedTemplate.bgColor,
                      transform: `scale(${zoom})`,
                      transformOrigin: 'center',
                      transition: 'width 0.3s ease, height 0.3s ease'
                    }}
                  >
                    {layers.map(layer => {
                      // Skip hidden layers
                      if (layer.visible === false) return null;

                      // Calculate position/size based on current format
                      const baseHeight = format === '1:1' ? 1080 : 1920;

                      if (layer.type === 'background' || layer.type === 'mask' || layer.type === 'frame' || layer.type === 'pattern') {
                        return (
                          <div
                            key={layer.id}
                            className="absolute"
                            style={{
                              left: `${(layer.position.x / 1080) * 100}%`,
                              top: `${(layer.position.y / baseHeight) * 100}%`,
                              width: `${(layer.size.width / 1080) * 100}%`,
                              height: `${(layer.size.height / baseHeight) * 100}%`,
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
                              top: `${(layer.position.y / baseHeight) * 100}%`,
                              fontSize: `${(layer.style.fontSize / 1080) * canvasDims.displayWidth}px`,
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
                              top: `${(layer.position.y / baseHeight) * 100}%`,
                              width: `${(layer.size.width / 1080) * 100}%`,
                              transform: 'translateX(-50%)',
                              fontSize: `${(layer.style.fontSize / 1080) * canvasDims.displayWidth}px`,
                              color: layer.style.color,
                              fontFamily: layer.style.fontFamily,
                              fontWeight: layer.style.fontWeight,
                              textAlign: layer.style.textAlign,
                              fontStyle: layer.style.fontStyle,
                              lineHeight: layer.style.lineHeight,
                              textShadow: layer.style.textShadow,
                              letterSpacing: layer.style.letterSpacing,
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
                              top: `${(layer.position.y / baseHeight) * 100}%`,
                              width: `${(layer.size.width / 1080) * 100}%`,
                              height: `${(layer.size.height / baseHeight) * 100}%`,
                              borderRadius: layer.style.borderRadius,
                              border: layer.style.border,
                              backgroundColor: '#E5E5E5',
                              filter: layer.style.filter
                            }}
                          >
                            {layer.src ? (
                              <img
                                src={layer.src}
                                alt=""
                                crossOrigin="anonymous"
                                className="w-full h-full"
                                style={{
                                  objectFit: layer.style.objectFit || 'cover',
                                  objectPosition: layer.style.objectPosition || 'center',
                                  width: '100%',
                                  height: '100%',
                                  display: 'block'
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
                    <p className="text-lg font-medium mb-2">
                      {format === '1:1' ? 'Kare Format (1080×1080)' : 'Dikey Format (1080×1920)'}
                    </p>
                    <p className="text-sm">
                      Sol tərəfdən {format === '9:16' ? 'story' : 'post'} şablonu seçin
                    </p>
                    {filteredTemplates.length === 0 && (
                      <p className="text-xs text-[#7F6A47] mt-4">
                        ⚠️ Bu formatda şablon yoxdur. Format dəyişdirin.
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Zoom Controls & Format Info */}
              {selectedTemplate && (
                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-[#7F6A47] font-medium">
                    📐 Format: <span className="font-bold">{format === '1:1' ? '1080×1080 (Kare)' : '1080×1920 (Dikey)'}</span>
                  </div>
                  <div className="flex items-center gap-4">
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
                          <div className="flex items-center gap-2">
                            {/* Visibility Toggle */}
                            <button
                              onClick={() => toggleLayerVisibility(layer.id)}
                              className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                              title={layer.visible === false ? 'Göstər' : 'Gizlət'}
                            >
                              {layer.visible === false ? (
                                <EyeOff className="w-4 h-4 text-gray-400" />
                              ) : (
                                <Eye className="w-4 h-4 text-[#7F6A47]" />
                              )}
                            </button>
                            {/* Edit Toggle */}
                            <button
                              onClick={() => setSelectedLayerId(selectedLayerId === layer.id ? null : layer.id)}
                              className="text-xs text-[#7F6A47] hover:underline"
                            >
                              {selectedLayerId === layer.id ? 'Bağla' : 'Düzəlt'}
                            </button>
                          </div>
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
