'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Grid3X3, 
  FileText, 
  Calendar, 
  DollarSign, 
  CheckCircle, 
  Clock, 
  Thermometer, 
  Droplets, 
  HeartPulse, 
  Sparkles, 
  ArrowLeft, 
  UserCheck, 
  QrCode,
  ShieldCheck,
  ChevronLeft,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface BoxItem {
  id: string;
  code: string;
  horseName: string;
  breed: string;
  status: 'occupied' | 'cleaning' | 'vacant' | 'medical';
  statusLabel: string;
  temp: string;
  feederStatus: string;
  owner: string;
  nextFeed: string;
  lastVetCheck: string;
}

const initialBoxes: BoxItem[] = [
  { id: '1', code: 'A-01', horseName: 'صقر الجزيرة', breed: 'عربي صقلاوي', status: 'occupied', statusLabel: 'مشغول • ممتاز', temp: '21°C', feederStatus: 'ممتلئ (100%)', owner: 'فيصل السبيعي', nextFeed: 'خلال 45 دقيقة', lastVetCheck: 'قبل يومين (طبيعي)' },
  { id: '2', code: 'A-02', horseName: 'سفيرة الوادي', breed: 'عربي كحيلان', status: 'occupied', statusLabel: 'مشغول • تدريب', temp: '22°C', feederStatus: 'ممتلئ (85%)', owner: 'تركي الرشيد', nextFeed: 'خلال ساعة وربع', lastVetCheck: 'أمس (جاهزة لقفز الحواجز)' },
  { id: '3', code: 'A-03', horseName: 'غرفة شاغرة', breed: '-', status: 'vacant', statusLabel: 'شاغر • جاهز للإيواء', temp: '20°C', feederStatus: 'جاهز للاستقبال', owner: 'إدارة المربط', nextFeed: '-', lastVetCheck: 'تم التعقيم الشامل' },
  { id: '4', code: 'A-04', horseName: 'كحيلان الشامخ', breed: 'عربي عبيان', status: 'medical', statusLabel: 'عزل صحي وقائي', temp: '23°C', feederStatus: 'نظام غذائي خاص', owner: 'سعود بن ناصر', nextFeed: 'خلال 30 دقيقة', lastVetCheck: 'متابعة بيطرية اليوم' },
  { id: '5', code: 'A-05', horseName: 'ريم الصحراء', breed: 'عربي شويمان', status: 'occupied', statusLabel: 'مشغول • راحة', temp: '21°C', feederStatus: 'ممتلئ (90%)', owner: 'خالد المنصور', nextFeed: 'خلال ساعتين', lastVetCheck: 'قبل 4 أيام' },
  { id: '6', code: 'A-06', horseName: 'جناح التعقيم', breed: '-', status: 'cleaning', statusLabel: 'صيانة ونظافة دورية', temp: '20°C', feederStatus: 'صيانة مجدولة', owner: 'قسم الصيانة', nextFeed: '-', lastVetCheck: 'مكتمل' },
  { id: '7', code: 'A-07', horseName: 'برقان العز', breed: 'عربي هدبان', status: 'occupied', statusLabel: 'مشغول • تدريب', temp: '21.5°C', feederStatus: 'ممتلئ (70%)', owner: 'سلطان القحطاني', nextFeed: 'خلال 50 دقيقة', lastVetCheck: 'قبل أسبوع' },
  { id: '8', code: 'A-08', horseName: 'درة الميدان', breed: 'عربي دهمان', status: 'occupied', statusLabel: 'مشغول • نقاهة', temp: '21°C', feederStatus: 'ممتلئ (95%)', owner: 'عبدالله الراجحي', nextFeed: 'خلال 3 ساعات', lastVetCheck: 'فحص الحافر سليم' },
];

interface HorseProfile {
  id: string;
  name: string;
  father: string;
  mother: string;
  grandFather: string;
  breed: string;
  birthYear: string;
  color: string;
  microchip: string;
  healthGrade: string;
  vaccines: { name: string; date: string; status: 'valid' | 'upcoming' }[];
  trainingScore: number;
  image: string;
}

const horseProfiles: HorseProfile[] = [
  {
    id: '1',
    name: 'صقر الجزيرة',
    father: 'الأب: مروان الشقب',
    mother: 'الأم: أصيلة الخالدية',
    grandFather: 'الجد: غزال الشقب (بطل العالم)',
    breed: 'صقلاوي جدراني أصيل',
    birthYear: '2020 (4 سنوات)',
    color: 'أشعل أبيض مع لمعان رمادي',
    microchip: '982-000-482-110-SA',
    healthGrade: 'A+ (لياقة بطولية كاملة)',
    vaccines: [
      { name: 'الإنفلونزا والكزاز', date: '14 أكتوبر 2026', status: 'valid' },
      { name: 'فيروس الهربس (EHV)', date: '01 نوفمبر 2026', status: 'upcoming' },
      { name: 'جرعة الديدان الدورية', date: '25 سبتمبر 2026', status: 'valid' },
    ],
    trainingScore: 98,
    image: '/images/hero_horse.jpg'
  },
  {
    id: '2',
    name: 'سفيرة الوادي',
    father: 'الأب: كنز البداير',
    mother: 'الأم: نجوى الربيع',
    grandFather: 'الجد: عجمان مونوسيون',
    breed: 'كحيلة عجوز',
    birthYear: '2021 (3 سنوات)',
    color: 'شقراء ذهبية مطهمة',
    microchip: '982-000-519-743-SA',
    healthGrade: 'A (ممتازة وجاهزة للمنافسات)',
    vaccines: [
      { name: 'الإنفلونزا والكزاز', date: '12 أغسطس 2026', status: 'valid' },
      { name: 'السعر وداء الكلب', date: '19 ديسمبر 2026', status: 'upcoming' },
      { name: 'فحص الحافر والدعامات', date: 'مكتمل وموثق', status: 'valid' },
    ],
    trainingScore: 94,
    image: '/images/horse_training.jpg'
  },
  {
    id: '3',
    name: 'كحيلان الشامخ',
    father: 'الأب: جاستيس العالمي',
    mother: 'الأم: سلطانة نجد',
    grandFather: 'الجد: دبليو إتش جوستيس',
    breed: 'عبيان أم جريس',
    birthYear: '2019 (5 سنوات)',
    color: 'أدهم فاحم ملكي',
    microchip: '982-000-994-320-SA',
    healthGrade: 'A (تحت الملاحظة الوقائية)',
    vaccines: [
      { name: 'الإنفلونزا والكزاز', date: '05 يوليو 2026', status: 'valid' },
      { name: 'فحص دم بيطري شامل', date: 'مجدول غداً', status: 'upcoming' },
      { name: 'تطعيم المكورات العقدية', date: '20 أغسطس 2026', status: 'valid' },
    ],
    trainingScore: 96,
    image: '/images/stable_facility.jpg'
  }
];

export default function InteractiveAppSimulator() {
  const [activeTab, setActiveTab] = useState<'boxes' | 'pedigree' | 'booking' | 'finance'>('boxes');

  // Interactive state for Boxes
  const [selectedBox, setSelectedBox] = useState<BoxItem>(initialBoxes[0]);
  const [boxes, setBoxes] = useState<BoxItem[]>(initialBoxes);

  // Interactive state for Pedigree
  const [selectedHorse, setSelectedHorse] = useState<HorseProfile>(horseProfiles[0]);

  // Interactive state for Arena Simulator
  const [selectedArena, setSelectedArena] = useState<string>('الميدان الملكي المغطى (VIP Arena)');
  const [selectedTime, setSelectedTime] = useState<string>('04:30 م');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('قفز حواجز (Showjumping)');
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  // Interactive state for Finance
  const [financePeriod, setFinancePeriod] = useState<'month' | 'quarter' | 'year'>('month');

  const handleBoxStatusToggle = (boxId: string) => {
    setBoxes((prev) =>
      prev.map((b) => {
        if (b.id === boxId) {
          const nextStatus: 'occupied' | 'vacant' = b.status === 'vacant' ? 'occupied' : 'vacant';
          const updated: BoxItem = {
            ...b,
            status: nextStatus,
            statusLabel: nextStatus === 'occupied' ? 'مشغول • تم التسكين' : 'شاغر • جاهز للإيواء',
            horseName: nextStatus === 'occupied' ? 'فرس تجريبية جديدة' : 'غرفة شاغرة',
          };
          setSelectedBox(updated);
          return updated;
        }
        return b;
      })
    );
  };

  const handleBookSession = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 5000);
  };

  return (
    <section id="interactive-simulator" className="py-20 lg:py-28 scroll-mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 text-foreground dark:text-accent text-xs font-semibold border border-accent/40">
            <Sparkles className="w-3.5 h-3.5 text-primary dark:text-accent" />
            <span>قمرة القيادة الذكية • محاكاة حية فورية</span>
          </div>
          <h2 className="font-saudi text-2xl sm:text-4xl font-extrabold text-foreground">
            جرّب لوحة تحكم فرسان مباشرة
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-normal">
            تفاعل مع المحاكي التنفيذي أدناه لاختبار كفاءة إدارة البوكسات، فحص جواز النسب والشريحة، جدولة حصص التدريب، وتحليل التدفق المالي.
          </p>
        </div>

        {/* Executive Cockpit Frame */}
        <div className="max-w-6xl mx-auto card-gradient-elevated border-gradient-luxury rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Cockpit Top Bar */}
          <div className="border-b border-border/70 bg-muted/40 p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-primary dark:bg-accent animate-pulse" />
              <span className="font-bold text-xs sm:text-sm text-foreground">
                محاكي منظومة فرسان (Interactive Cockpit)
              </span>
              <Badge variant="outline" className="text-[11px] bg-accent/20 text-foreground dark:text-accent border-accent/30 hidden sm:inline-flex">
                مباشر
              </Badge>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center bg-background/90 p-1 rounded-xl border border-border overflow-x-auto w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('boxes')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'boxes'
                    ? 'bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground font-bold shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
                <span>خريطة البوكسات</span>
              </button>

              <button
                onClick={() => setActiveTab('pedigree')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'pedigree'
                    ? 'bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground font-bold shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>جواز النسب والشريحة</span>
              </button>

              <button
                onClick={() => setActiveTab('booking')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'booking'
                    ? 'bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground font-bold shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>جدولة الميادين</span>
              </button>

              <button
                onClick={() => setActiveTab('finance')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'finance'
                    ? 'bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground font-bold shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <DollarSign className="w-4 h-4" />
                <span>النبض المالي والفوترة</span>
              </button>
            </div>
          </div>

          {/* Simulator Content Area */}
          <div className="p-4 sm:p-8 bg-card/40 min-h-[500px]">
            
            {/* --- TAB 1: SMART BOX MATRIX --- */}
            {activeTab === 'boxes' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-saudi text-foreground">
                      مخطط بوكسات جناح الأصالة (Zone A - Stalls)
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      انقر على أي بوكس لاستعراض القياسات الحيوية، جدول الإطعام، وحالة الإيواء اللحظية.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-primary dark:bg-accent" /> 
                      مشغول ({boxes.filter(b=>b.status==='occupied').length})
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40" /> 
                      شاغر ({boxes.filter(b=>b.status==='vacant').length})
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent" /> 
                      صيانة
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-destructive" /> 
                      عزل
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Grid of 8 Stalls */}
                  <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {boxes.map((box) => {
                      const isSelected = selectedBox.id === box.id;
                      let statusBorderBg = 'border-border/80 bg-background/80 hover:border-primary/50';
                      if (box.status === 'occupied') {
                        statusBorderBg = 'border-accent/40 bg-accent/5 hover:border-accent';
                      } else if (box.status === 'vacant') {
                        statusBorderBg = 'border-dashed border-border bg-muted/20 hover:border-foreground/30';
                      } else if (box.status === 'medical') {
                        statusBorderBg = 'border-destructive/40 bg-destructive/5 hover:border-destructive';
                      }

                      return (
                        <button
                          key={box.id}
                          onClick={() => setSelectedBox(box)}
                          className={`p-4 rounded-xl border text-right transition-all duration-200 relative overflow-hidden group ${statusBorderBg} ${
                            isSelected ? 'ring-2 ring-primary dark:ring-accent shadow-md scale-[1.02]' : ''
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-extrabold text-sm">{box.code}</span>
                            <span className={`w-2 h-2 rounded-full ${
                              box.status === 'occupied' ? 'bg-primary dark:bg-accent' :
                              box.status === 'vacant' ? 'bg-muted-foreground/40' :
                              box.status === 'cleaning' ? 'bg-accent' : 'bg-destructive'
                            }`} />
                          </div>
                          <div className="font-bold text-sm truncate text-foreground">{box.horseName}</div>
                          <div className="text-xs text-muted-foreground mt-0.5 truncate">{box.breed}</div>

                          <div className="mt-3 pt-2 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground">
                            <span>حرارة: {box.temp}</span>
                            <span>{box.status === 'occupied' ? 'مغذى' : 'متاح'}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected Stall Telemetry Card */}
                  <div className="bg-muted/40 rounded-2xl p-5 border border-border space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-muted-foreground block">تفاصيل البوكس المحدد</span>
                        <h4 className="text-lg sm:text-xl font-bold font-saudi text-foreground">
                          {selectedBox.code} • {selectedBox.horseName}
                        </h4>
                      </div>
                      <Badge className={
                        selectedBox.status === 'occupied' ? 'bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground text-xs' :
                        selectedBox.status === 'vacant' ? 'bg-secondary text-secondary-foreground text-xs' :
                        selectedBox.status === 'cleaning' ? 'bg-accent text-accent-foreground text-xs' : 'bg-destructive text-destructive-foreground text-xs'
                      }>
                        {selectedBox.statusLabel}
                      </Badge>
                    </div>

                    <div className="space-y-2.5 text-xs sm:text-sm">
                      <div className="flex justify-between py-1.5 border-b border-border/50">
                        <span className="text-muted-foreground flex items-center gap-1.5">
                          <UserCheck className="w-4 h-4 text-primary dark:text-accent" /> المالك المسجل:
                        </span>
                        <span className="font-bold text-foreground">{selectedBox.owner}</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-border/50">
                        <span className="text-muted-foreground flex items-center gap-1.5">
                          <Thermometer className="w-4 h-4 text-accent" /> حرارة الغرفة الذكية:
                        </span>
                        <span className="font-bold text-foreground">{selectedBox.temp} (مثالية)</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-border/50">
                        <span className="text-muted-foreground flex items-center gap-1.5">
                          <Droplets className="w-4 h-4 text-primary dark:text-accent" /> المغذي وحوض الماء:
                        </span>
                        <span className="font-bold text-foreground">{selectedBox.feederStatus}</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-border/50">
                        <span className="text-muted-foreground flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-primary dark:text-accent" /> الوجبة القادمة:
                        </span>
                        <span className="font-bold text-foreground">{selectedBox.nextFeed}</span>
                      </div>
                      <div className="flex justify-between py-1.5">
                        <span className="text-muted-foreground flex items-center gap-1.5">
                          <HeartPulse className="w-4 h-4 text-accent" /> آخر كشف بيطري:
                        </span>
                        <span className="font-bold text-foreground">{selectedBox.lastVetCheck}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col gap-2">
                      <Button
                        onClick={() => handleBoxStatusToggle(selectedBox.id)}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-accent dark:text-accent-foreground text-xs h-9 rounded-xl font-semibold"
                      >
                        {selectedBox.status === 'vacant' ? 'تسجيل إيواء خيل جديد في هذا البوكس' : 'إخلاء البوكس وتحويله إلى شاغر'}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-xs h-9 rounded-xl border-border text-foreground"
                        asChild
                      >
                        <Link href="/stables">
                          فتح وحدة الاسطبلات الكاملة
                          <ChevronLeft className="w-3.5 h-3.5 mr-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* --- TAB 2: HORSE PEDIGREE & HEALTH PASSPORT --- */}
            {activeTab === 'pedigree' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-saudi text-foreground">
                      جواز الخيل الرقمي وشجرة النسب المعتمدة (Pedigree Passport)
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      اختر الخيل لمعاينة توثيق الشريحة، شجرة السلالة حتى الجيل الثالث، وسجل التحصينات البيطرية.
                    </p>
                  </div>
                  
                  {/* Horse Selector Buttons */}
                  <div className="flex items-center gap-2">
                    {horseProfiles.map((horse) => {
                      const isSelected = selectedHorse.id === horse.id;
                      return (
                        <button
                          key={horse.id}
                          onClick={() => setSelectedHorse(horse)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            isSelected
                              ? 'bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground shadow-sm'
                              : 'bg-muted hover:bg-muted/80 text-foreground'
                          }`}
                        >
                          {horse.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  {/* Visual Portrait & Identification Card */}
                  <div className="bg-muted/40 rounded-2xl p-5 border border-border space-y-4">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm">
                      <Image
                        src={selectedHorse.image}
                        alt={selectedHorse.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-white font-bold flex items-center gap-1.5">
                        <QrCode className="w-3 h-3 text-accent" />
                        <span>شريحة معتمدة</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-extrabold font-saudi text-foreground">{selectedHorse.name}</h4>
                      <p className="text-xs text-muted-foreground">{selectedHorse.breed} • {selectedHorse.color}</p>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-background border border-border/80 flex justify-between">
                        <span className="text-muted-foreground">رقم الشريحة (Microchip):</span>
                        <span className="font-mono font-bold text-foreground">{selectedHorse.microchip}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-background border border-border/80 flex justify-between">
                        <span className="text-muted-foreground">اللياقة والتقييم:</span>
                        <span className="font-bold text-primary dark:text-accent">{selectedHorse.healthGrade}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-background border border-border/80 flex justify-between">
                        <span className="text-muted-foreground">سنة الميلاد والعمر:</span>
                        <span className="font-bold text-foreground">{selectedHorse.birthYear}</span>
                      </div>
                    </div>

                    <Button size="sm" variant="outline" className="w-full text-xs rounded-xl border-border" asChild>
                      <Link href="/horses">
                        عرض الملف الكامل في قائمة الخيول
                        <ChevronLeft className="w-3.5 h-3.5 mr-1" />
                      </Link>
                    </Button>
                  </div>

                  {/* Pedigree Lineage Tree & Health Panel */}
                  <div className="lg:col-span-2 space-y-5">
                    {/* Pedigree Tree */}
                    <div className="p-5 rounded-2xl bg-card border border-border shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm sm:text-base flex items-center gap-2 text-foreground">
                          <ShieldCheck className="w-4 h-4 text-primary dark:text-accent" />
                          شجرة النسب والسلالة العربية المعتمدة (Pedigree Tree)
                        </span>
                        <Badge variant="outline" className="text-[11px] text-primary dark:text-accent border-accent/40 bg-accent/15">
                          سلالة نقية موثقة
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                        {/* Generation 1: The Horse */}
                        <div className="p-3.5 rounded-xl bg-primary/10 dark:bg-accent/15 border border-primary/20 dark:border-accent/30 text-center">
                          <span className="text-[10px] uppercase tracking-wider text-primary dark:text-accent font-bold block mb-1">الخيل الأساسي</span>
                          <span className="font-extrabold text-sm block text-foreground">{selectedHorse.name}</span>
                          <span className="text-[11px] text-muted-foreground">{selectedHorse.breed}</span>
                        </div>

                        {/* Generation 2: Sire & Dam */}
                        <div className="space-y-2">
                          <div className="p-2.5 rounded-xl bg-muted/60 border border-border text-center">
                            <span className="text-[10px] text-muted-foreground block font-medium">سجل الأب (Sire)</span>
                            <span className="font-bold text-xs text-foreground block">{selectedHorse.father}</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-muted/60 border border-border text-center">
                            <span className="text-[10px] text-muted-foreground block font-medium">سجل الأم (Dam)</span>
                            <span className="font-bold text-xs text-foreground block">{selectedHorse.mother}</span>
                          </div>
                        </div>

                        {/* Generation 3: Grandsire */}
                        <div className="flex items-center justify-center p-3.5 rounded-xl bg-accent/15 border border-accent/30 text-center">
                          <div>
                            <span className="text-[10px] uppercase text-foreground dark:text-accent font-bold block mb-1">السلالة التاريخية (Grandsire)</span>
                            <span className="font-bold text-xs text-foreground block">{selectedHorse.grandFather}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Vaccines & Health Ledger */}
                    <div className="p-5 rounded-2xl bg-card border border-border shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm sm:text-base flex items-center gap-2 text-foreground">
                          <HeartPulse className="w-4 h-4 text-primary dark:text-accent" />
                          سجل التحصينات والزيارات البيطرية
                        </span>
                        <span className="text-xs text-muted-foreground font-medium">تحديث سحابي فوري</span>
                      </div>

                      <div className="space-y-2">
                        {selectedHorse.vaccines.map((vax, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border/50 text-xs sm:text-sm">
                            <div className="flex items-center gap-2.5">
                              {vax.status === 'valid' ? (
                                <CheckCircle className="w-4 h-4 text-primary dark:text-accent" />
                              ) : (
                                <Clock className="w-4 h-4 text-muted-foreground" />
                              )}
                              <span className="font-medium text-foreground">{vax.name}</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                              <span className="text-muted-foreground text-xs">{vax.date}</span>
                              <Badge className={vax.status === 'valid' ? 'bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground text-[10px]' : 'bg-muted text-muted-foreground text-[10px]'}>
                                {vax.status === 'valid' ? 'ساري وموثق' : 'موعد قادم'}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* --- TAB 3: TRAINING & ARENA SIMULATOR --- */}
            {activeTab === 'booking' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-saudi text-foreground">
                      محاكي حجز الميادين وحصص التدريب الفوري
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      جرّب حجز ميدان التدريب، تعيين المدرب المعتمد، والتنسيق المباشر مع الفارس.
                    </p>
                  </div>
                  <Badge className="bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground text-xs">
                    متاح للحجز الفوري
                  </Badge>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Booking Form Simulation */}
                  <form onSubmit={handleBookSession} className="lg:col-span-2 bg-card rounded-2xl p-6 border border-border shadow-sm space-y-4">
                    {bookingSuccess && (
                      <div className="p-4 rounded-xl bg-accent/20 border border-accent/40 text-foreground text-xs sm:text-sm flex items-center gap-2 animate-in fade-in">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 text-primary dark:text-accent" />
                        <span><strong>تم تأكيد الحجز التجريبي بنجاح!</strong> تم إرسال إشعار التذكير إلى تطبيق الفارس والمدرب.</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Arena Selection */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground">اختيار الميدان / الصالة:</label>
                        <select
                          value={selectedArena}
                          onChange={(e) => setSelectedArena(e.target.value)}
                          className="w-full p-2.5 rounded-xl bg-background border border-border text-xs sm:text-sm focus:ring-2 focus:ring-primary dark:focus:ring-accent outline-none"
                        >
                          <option value="الميدان الملكي المغطى (VIP Arena)">الميدان الملكي المغطى (VIP Arena)</option>
                          <option value="حلبة قفز الحواجز الرملية (Showjumping)">حلبة قفز الحواجز الرملية (Showjumping)</option>
                          <option value="مضمار التحمل والقدرة 10كم">مضمار التحمل والقدرة 10كم</option>
                          <option value="صالة الترويض والاستعراض (Dressage)">صالة الترويض والاستعراض (Dressage)</option>
                        </select>
                      </div>

                      {/* Discipline */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground">نوع الحصة التدريبية:</label>
                        <select
                          value={selectedDiscipline}
                          onChange={(e) => setSelectedDiscipline(e.target.value)}
                          className="w-full p-2.5 rounded-xl bg-background border border-border text-xs sm:text-sm focus:ring-2 focus:ring-primary dark:focus:ring-accent outline-none"
                        >
                          <option value="قفز حواجز (Showjumping)">قفز حواجز (Showjumping)</option>
                          <option value="ترويض الخيل (Dressage)">ترويض الخيل (Dressage)</option>
                          <option value="لياقة وتحمل وتبريد مائي">لياقة وتحمل وتبريد مائي</option>
                          <option value="تدريب مبتدئين (مدرسة الفروسية)">تدريب مبتدئين (مدرسة الفروسية)</option>
                        </select>
                      </div>
                    </div>

                    {/* Time Slot Picker */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground">الأوقات المتاحة اليوم:</label>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {['08:00 ص', '10:30 ص', '03:00 م', '04:30 م', '06:00 م', '07:30 م'].map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 px-1 rounded-xl text-xs font-bold border transition-all ${
                              selectedTime === time
                                ? 'bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground border-primary dark:border-accent shadow-sm'
                                : 'bg-background hover:bg-muted border-border text-muted-foreground'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-accent dark:text-accent-foreground font-bold px-6 rounded-xl">
                        تأكيد الحجز التجريبي في الميدان
                      </Button>

                      <Button variant="ghost" size="sm" asChild className="text-xs text-muted-foreground hover:text-foreground">
                        <Link href="/calender">
                          تقويم المنصة الكامل
                          <ChevronLeft className="w-3.5 h-3.5 mr-1" />
                        </Link>
                      </Button>
                    </div>
                  </form>

                  {/* Summary & Live Arena Status */}
                  <div className="bg-muted/40 rounded-2xl p-5 border border-border space-y-4">
                    <span className="text-xs font-bold text-muted-foreground uppercase">موجز الحجز المباشر</span>
                    
                    <div className="p-4 rounded-xl bg-card border border-border space-y-3 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">الميدان:</span>
                        <span className="font-bold text-foreground truncate max-w-[170px]">{selectedArena}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">الوقت المختار:</span>
                        <span className="font-bold text-primary dark:text-accent">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">نوع النشاط:</span>
                        <span className="font-bold text-foreground">{selectedDiscipline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">المدرب المشرف:</span>
                        <span className="font-bold text-foreground">كابتن زياد الحربي</span>
                      </div>
                    </div>

                    <div className="rounded-xl overflow-hidden relative aspect-video border border-border">
                      <Image
                        src="/images/horse_training.jpg"
                        alt="حصة تدريب فروسية"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                        <span className="text-white text-xs font-semibold">الميدان مهيأ بنظام رشاشات رملية وتبريد</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* --- TAB 4: FINANCIAL & BOARDING PULSE --- */}
            {activeTab === 'finance' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-saudi text-foreground">
                      لوحة المؤشرات المالية وحصاد الإيرادات (Financial Pulse)
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      تتبع الإيرادات المجمعة من إيواء البوكسات، اشتراكات الأكاديمية، والخدمات البيطرية المتوافقة مع ZATCA.
                    </p>
                  </div>

                  {/* Period Filter */}
                  <div className="flex items-center bg-muted p-1 rounded-xl border border-border text-xs">
                    <button
                      onClick={() => setFinancePeriod('month')}
                      className={`px-3 py-1 rounded-lg font-bold transition-all ${
                        financePeriod === 'month' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'
                      }`}
                    >
                      الشهر الحالي
                    </button>
                    <button
                      onClick={() => setFinancePeriod('quarter')}
                      className={`px-3 py-1 rounded-lg font-bold transition-all ${
                        financePeriod === 'quarter' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'
                      }`}
                    >
                      الربع السنوي
                    </button>
                    <button
                      onClick={() => setFinancePeriod('year')}
                      className={`px-3 py-1 rounded-lg font-bold transition-all ${
                        financePeriod === 'year' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'
                      }`}
                    >
                      السنوي
                    </button>
                  </div>
                </div>

                {/* 4 Financial KPI cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                      <span>إجمالي الإيرادات</span>
                      <span className="text-primary dark:text-accent font-bold flex items-center gap-0.5">
                        <TrendingUp className="w-3.5 h-3.5" /> +22.4%
                      </span>
                    </div>
                    <div className="text-2xl font-extrabold text-foreground font-mono">
                      {financePeriod === 'month' ? 'SAR 148,250' : financePeriod === 'quarter' ? 'SAR 428,900' : 'SAR 1,740,000'}
                    </div>
                    <span className="text-[11px] text-muted-foreground mt-1 block">متوافق مع فوترة ZATCA</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                      <span>تحصيل رسوم الإيواء</span>
                      <span className="text-primary dark:text-accent font-bold">96% محصل</span>
                    </div>
                    <div className="text-2xl font-extrabold text-foreground font-mono">
                      {financePeriod === 'month' ? 'SAR 84,000' : financePeriod === 'quarter' ? 'SAR 252,000' : 'SAR 1,008,000'}
                    </div>
                    <span className="text-[11px] text-muted-foreground mt-1 block">42 بوكس مفعل بعقد سنوي</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                      <span>إيرادات أكاديمية الركوب</span>
                      <span className="text-primary dark:text-accent font-bold flex items-center gap-0.5">
                        <TrendingUp className="w-3.5 h-3.5" /> +18%
                      </span>
                    </div>
                    <div className="text-2xl font-extrabold text-foreground font-mono">
                      {financePeriod === 'month' ? 'SAR 44,750' : financePeriod === 'quarter' ? 'SAR 134,250' : 'SAR 537,000'}
                    </div>
                    <span className="text-[11px] text-muted-foreground mt-1 block">68 فارس متدرب نشط</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                      <span>المصروفات التشغيلية</span>
                      <span className="text-accent font-bold">تحت الميزانية</span>
                    </div>
                    <div className="text-2xl font-extrabold text-foreground font-mono">
                      {financePeriod === 'month' ? 'SAR 39,200' : financePeriod === 'quarter' ? 'SAR 117,600' : 'SAR 470,400'}
                    </div>
                    <span className="text-[11px] text-muted-foreground mt-1 block">أعلاف، بيطرة، وصيانة دورية</span>
                  </div>
                </div>

                {/* Simulated Invoices Feed */}
                <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-sm text-foreground">أحدث الفواتير المعتمدة ضريبياً (Live Invoicing Feed)</span>
                    <Button variant="ghost" size="sm" asChild className="text-xs text-muted-foreground hover:text-foreground">
                      <Link href="/finance">
                        الانتقال إلى الإدارة المالية الشاملة
                        <ChevronLeft className="w-3.5 h-3.5 mr-1" />
                      </Link>
                    </Button>
                  </div>

                  <div className="space-y-2">
                    {[
                      { inv: 'INV-2026-881', client: 'الشيخ فيصل السبيعي', desc: 'إيواء بوكس ملكي A-01 + رعاية خاصة', amount: 'SAR 3,500', status: 'مدفوع' },
                      { inv: 'INV-2026-880', client: 'كابتن تركي الرشيد', desc: 'باقة تدريب قفز حواجز (12 حصة)', amount: 'SAR 2,400', status: 'مدفوع' },
                      { inv: 'INV-2026-879', client: 'سعود بن ناصر', desc: 'فحص سريري وعلاج وقائي بيطري', amount: 'SAR 850', status: 'قيد التحصيل' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border/50 text-xs sm:text-sm">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-muted-foreground font-semibold">{item.inv}</span>
                          <div>
                            <span className="font-bold text-foreground block">{item.client}</span>
                            <span className="text-xs text-muted-foreground">{item.desc}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-foreground font-mono">{item.amount}</span>
                          <Badge className={item.status === 'مدفوع' ? 'bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground text-xs' : 'bg-muted text-muted-foreground text-xs'}>
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Simulator Cockpit Conversion Footer */}
          <div className="border-t border-border/70 bg-muted/30 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-right">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-primary dark:text-accent flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-sm sm:text-base text-foreground font-saudi">
                  جاهز لترقية إدارة مربطك إلى المستوى الاحترافي؟
                </h5>
                <p className="text-xs text-muted-foreground">
                  استكشف لوحة التحكم المباشرة بكل سهولة وبدون تعقيد.
                </p>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-accent dark:text-accent-foreground dark:hover:bg-accent/90 font-bold px-6 rounded-xl gap-2 text-sm shadow-md" asChild>
              <Link href="/dashboard">
                <span>فتح لوحة التحكم الكاملة</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
