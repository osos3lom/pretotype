'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Award, 
  CheckCircle2, 
  Play,
  ChevronLeft,
  QrCode,
  HeartPulse
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAssetPath } from '@/lib/utils';

interface RoleHighlight {
  id: string;
  tabLabel: string;
  title: string;
  roleSubtitle: string;
  description: string;
  metricNumber: string;
  metricLabel: string;
}

const roles: RoleHighlight[] = [
  {
    id: 'owner',
    tabLabel: 'أصحاب المرابط والملاك',
    title: 'أصحاب المرابط وكبار الملاك',
    roleSubtitle: 'إدارة تشغيلية فندقية تليق بأصالة الخيل',
    description: 'حوكمة كاملة لنسب إشغال البوكسات، عقود الإيواء الموحدة، الفوترة الإلكترونية المعتمدة من ZATCA، وتقارير أداء ومصروفات لحظية.',
    metricNumber: '+45%',
    metricLabel: 'كفاءة تشغيلية وحماية الإيرادات'
  },
  {
    id: 'vet',
    tabLabel: 'الرعاية والطب البيطري',
    title: 'الأطباء البيطريين ومسؤولي الرعاية',
    roleSubtitle: 'جواز صحي رقمي وسجل أنساب مشفر',
    description: 'جدولة استباقية للتحصينات الدورية، تتبع الفحوصات المخبرية، تنبيهات التغذية والحوافر، ومزامنة فورية مع الشريحة الإلكترونية المعتمدة.',
    metricNumber: '100%',
    metricLabel: 'امتثال التحصينات والفحوصات'
  },
  {
    id: 'trainer',
    tabLabel: 'الأكاديميات والمدربين',
    title: 'المدربين وأكاديميات الفروسية',
    roleSubtitle: 'جدولة دقيقة للميادين وحصص التدريب',
    description: 'تنظيم مواعيد حلبات قفز الحواجز والدريساج، تقييم تطور الفرسان، ومنع أي تضارب تشغيلي في استخدام المرافق والصالات المغطاة.',
    metricNumber: '0',
    metricLabel: 'تضارب في استخدام الميادين'
  }
];

export default function DemoHero() {
  const [activeRole, setActiveRole] = useState(roles[0]);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-48 right-10 w-[400px] h-[300px] bg-accent/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Prestige Context Indicator */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/80 border border-accent/40 text-foreground text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary dark:bg-accent animate-pulse" />
            <span className="font-semibold text-primary dark:text-accent">فرسان Hub</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">المنظومة السحابية المعتمدة للمرابط والاسطبلات الفاخرة</span>
          </div>
        </div>

        {/* Hero Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="font-saudi text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.2] sm:leading-[1.25]">
            حوكمة مرابط الخيل العربية الأصيلة
            <span className="block mt-2 sm:mt-3 text-gradient-luxury">
              بفخامة ودقة رقمية متناهية
            </span>
          </h1>

          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal">
            منصة سحابية متكاملة تجمع سجلات الأنساب الموثقة، الإدارة الفندقية للبوكسات، الرعاية البيطرية الاستباقية، والامتثال المالي المعتمد في تجربة قيادية موحدة.
          </p>

          {/* Primary Conversion CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-sm sm:text-base px-8 h-12 sm:h-13 bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-accent dark:text-accent-foreground dark:hover:bg-accent/90 font-bold rounded-xl shadow-md gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98] border border-accent/30 glow-burgundy"
              asChild
            >
              <a href="#interactive-simulator">
                <Play className="w-4 h-4 fill-current" />
                <span>جرّب العرض التفاعلي الحي</span>
              </a>
            </Button>

            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-sm sm:text-base px-8 h-12 sm:h-13 border-border/80 hover:bg-muted/80 font-medium rounded-xl gap-2 text-foreground"
              asChild
            >
              <Link href="/dashboard">
                <span>استعراض لوحة التحكم التنفيذية</span>
                <ChevronLeft className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Trust & Compliance Seal */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-4 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary dark:text-accent" />
              <span>متوافق 100% مع هيئة الزكاة والضريبة (ZATCA)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary dark:text-accent" />
              <span>توثيق الشريحة الإلكترونية وشجرة النسب</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-accent" />
              <span>معتمد لدى نخبة مرابط المملكة والخليج</span>
            </div>
          </div>
        </div>

        {/* Persona Switcher Segmented Control */}
        <div className="mt-12 sm:mt-16 max-w-xl mx-auto bg-card/70 backdrop-blur-md p-1.5 rounded-2xl border border-border shadow-sm">
          <div className="grid grid-cols-3 gap-1">
            {roles.map((role) => {
              const isActive = activeRole.id === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role)}
                  className={`py-2.5 px-2 sm:px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {role.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Persona Insight */}
        <div className="mt-3 max-w-xl mx-auto text-center px-4 py-3 bg-muted/40 rounded-xl border border-border/50 text-xs sm:text-sm text-muted-foreground animate-in fade-in duration-300">
          <span className="font-semibold text-foreground ml-1.5">{activeRole.roleSubtitle}:</span>
          <span>{activeRole.description}</span>
        </div>

        {/* Framed Cinematic Visual Centerpiece */}
        <div className="mt-10 sm:mt-14 relative max-w-5xl mx-auto">
          {/* Outer luxury border card */}
          <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3.5 card-gradient-elevated border-gradient-luxury shadow-2xl">
            <div className="relative aspect-[16/9] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-muted group">
              <Image
                src={getAssetPath('/images/hero_horse.jpg')}
                alt="خيل عربي أصيل في مربط فرسان الفاخر"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Bottom Inset Showcase Overlay */}
              <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 left-4 sm:left-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                    <span>مباشر من النظام: جناح الأصالة الملكي</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-saudi text-white">
                    بطل الإنتاج الدولي: صقر الجزيرة (صقلاوي)
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200">
                    الشريحة المعتمدة: SA-9820-2026 • الحالة: ممتازة • البوكس: رويال 01
                  </p>
                </div>

                <Button 
                  size="sm" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xs sm:text-sm px-4 h-9 rounded-lg shadow-md transition-all"
                  asChild
                >
                  <Link href="/horses">
                    استعراض سجل الخيل الكامل
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Floating Luxury Telemetry Chips (Desktop) */}
          <div className="hidden lg:flex absolute -bottom-6 -right-6 bg-card/95 backdrop-blur-md border border-border p-4 rounded-2xl shadow-xl items-center gap-3.5 animate-in slide-in-from-right duration-500">
            <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-accent/15 flex items-center justify-center text-primary dark:text-accent">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground font-medium">نسبة إشغال البوكسات</div>
              <div className="text-lg font-extrabold text-foreground">92% <span className="text-xs font-normal text-muted-foreground mr-1">(46/50 غرفة)</span></div>
            </div>
          </div>

          <div className="hidden lg:flex absolute -top-6 -left-6 bg-card/95 backdrop-blur-md border border-border p-4 rounded-2xl shadow-xl items-center gap-3.5 animate-in slide-in-from-left duration-500">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-primary dark:text-accent">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground font-medium">الرعاية البيطرية واللقاحات</div>
              <div className="text-lg font-extrabold text-foreground">100% <span className="text-xs font-normal text-accent-foreground dark:text-accent mr-1">مُحدثة بالكامل</span></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
