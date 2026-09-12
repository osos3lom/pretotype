'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Home, 
  Calendar, 
  Receipt, 
  CheckCircle2, 
  ChevronLeft,
  Layers,
  type LucideIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getAssetPath } from '@/lib/utils';

interface FeaturePillar {
  id: string;
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  route: string;
}

const pillars: FeaturePillar[] = [
  {
    id: 'stables',
    icon: Home,
    tag: 'الإيواء الفندقي والبوكسات',
    title: 'إدارة فندقية رقمية لكل بوكس ومربط',
    description: 'تحكّم لحظي بجدول النظافة والتعقيم، سجلات التغذية الآلية، ومراقبة حرارة وأجواء البوكس مع إمكانية مشاركة تقارير الإيواء اليومية مع الملاك مباشرة.',
    bullets: [
      'مخطط تفاعلي مباشر لنسب إشغال الغرف ومواعيد المغادرة',
      'تنبيهات فورية لفرق النظافة والصيانة عبر تطبيق الجوال',
      'عقود إيواء رقمية موحدة لحماية حقوق المربط والمالك'
    ],
    imageSrc: getAssetPath('/images/stable_facility.jpg'),
    imageAlt: 'اسطبلات وبوكسات خيول فاخرة مجهزة بأحدث التقنيات',
    route: '/stables'
  },
  {
    id: 'health',
    icon: ShieldCheck,
    tag: 'الملف البيطري والشريحة',
    title: 'جواز صحي إلكتروني يوثّق سلالة كل خيل',
    description: 'تتبع شامل لكل فحص دوري، شهادات النسب وسجلات التحصين، مع إمكانية مسح الشريحة الإلكترونية (Microchip) لعرض التاريخ المرضي بلمح البصر.',
    bullets: [
      'جدولة مؤتمتة لتحصينات الإنفلونزا، التيتانوس، وجرعات الديدان',
      'سجل بيطري موثق يرفع القيمة السوقية للخيل عند البيع أو التشبيه',
      'تنبيهات استباقية لمواعيد حذوة الحافر والفحوصات المخبرية'
    ],
    imageSrc: getAssetPath('/images/dashboard_mockup.jpg'),
    imageAlt: 'واجهة لوحة القيادة الرقمية لإدارة السجلات البيطرية وشجرة النسب',
    route: '/horses'
  },
  {
    id: 'academy',
    icon: Calendar,
    tag: 'الأكاديمية وتدريب الفرسان',
    title: 'جدولة دقيقة للميادين وحصص التدريب',
    description: 'تنظيم مواعيد حصص القفز والدريساج، تسجيل حضور الفرسان، ومزامنة توفر المدربين لمنع أي تعارض في استخدام الصالات والميادين المفتوحة.',
    bullets: [
      'حجز حصص التدريب بضغطة زر عبر بوابة الفارس والمدرب',
      'تقييم أداء الفارس وتتبع تقدمه الفني والبدني بالأرقام',
      'إدارة أوقات راحة الخيل ومعدل الجهد الأسبوعي بدقة'
    ],
    imageSrc: getAssetPath('/images/horse_training.jpg'),
    imageAlt: 'فارس وخيل عربي في حصة تدريبية متقدمة لقفز الحواجز',
    route: '/programs'
  },
  {
    id: 'finance',
    icon: Receipt,
    tag: 'الفوترة والامتثال المالي',
    title: 'فوترة إلكترونية معتمدة 100% مع ZATCA',
    description: 'أتمتة الفواتير الضريبية لرسوم الإيواء والاشتراكات، مع دعم بوابات الدفع الإلكتروني (مدى، Apple Pay، والتحويل البنكي المباشر) وإرسال إشعارات السداد.',
    bullets: [
      'إرسال الفواتير التلقائية مع رمز QR المعتمد للملاك عبر واتساب',
      'متابعة المدفوعات المعلقة وإشعارات التحصيل الذاتية لتقليل التعثر',
      'تقارير أرباح ومصروفات مفصلة لكل حصان ولكل فرع ومربط'
    ],
    imageSrc: getAssetPath('/images/stable_facility.jpg'),
    imageAlt: 'إدارة مالية دقيقة للإيرادات والمصروفات الخاصة بالاسطبلات',
    route: '/finance'
  }
];

export default function FeatureSpotlights() {
  const [activePillar, setActivePillar] = useState<FeaturePillar>(pillars[0]);

  return (
    <section id="features-spotlight" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 text-foreground dark:text-accent text-xs font-semibold border border-accent/40">
            <Layers className="w-3.5 h-3.5 text-primary dark:text-accent" />
            <span>منظومة المرابط المتكاملة • ركائز التميز</span>
          </div>
          <h2 className="font-saudi text-2xl sm:text-4xl font-extrabold text-foreground">
            كل ما يحتاجه مربطك في منصة سحابية واحدة
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            صُممت فرسان بالتعاون المباشر مع نخبة ملاك الخيل، كبار الأطباء البيطريين، وأبطال الفروسية لتقديم تجربة تشغيلية متكاملة.
          </p>
        </div>

        {/* Feature Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-5xl mx-auto mb-10 sm:mb-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activePillar.id === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar)}
                className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between gap-3 ${
                  isActive
                    ? 'bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground border-primary dark:border-accent shadow-lg shadow-primary/10 scale-[1.02]'
                    : 'bg-card hover:bg-muted/60 border-border text-foreground'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  isActive 
                    ? 'bg-primary-foreground/15 dark:bg-accent-foreground/15 text-primary-foreground dark:text-accent-foreground' 
                    : 'bg-accent/20 text-primary dark:text-accent'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-[11px] block font-medium ${isActive ? 'text-primary-foreground/80 dark:text-accent-foreground/80' : 'text-muted-foreground'}`}>
                    {pillar.tag}
                  </span>
                  <span className="font-bold text-sm sm:text-base line-clamp-1">
                    {pillar.title.split(' ')[0]} {pillar.title.split(' ')[1] || ''}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Feature Showcase Presentation */}
        <div className="max-w-5xl mx-auto card-gradient-elevated border-gradient-luxury rounded-3xl p-6 sm:p-10 shadow-xl animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            
            {/* Editorial Content */}
            <div className="space-y-6">
              <div className="space-y-2.5">
                <Badge variant="outline" className="bg-accent/20 text-primary dark:text-accent border-accent/40 text-xs">
                  {activePillar.tag}
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-saudi text-foreground leading-snug">
                  {activePillar.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
                  {activePillar.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3 pt-1">
                {activePillar.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary dark:text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground font-medium">{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-accent dark:text-accent-foreground rounded-xl gap-2 font-bold text-xs sm:text-sm px-6 h-10 sm:h-11 shadow-sm" asChild>
                  <Link href={activePillar.route}>
                    <span>استكشف الوحدة في لوحة التحكم</span>
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Editorial Photography */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/80 shadow-md group">
              <Image
                src={activePillar.imageSrc}
                alt={activePillar.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 right-4 left-4 text-white text-xs font-semibold backdrop-blur-md bg-black/40 p-3 rounded-xl border border-white/10">
                <span>{activePillar.title}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
