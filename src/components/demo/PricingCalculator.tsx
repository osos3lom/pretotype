'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  Check, 
  Clock, 
  TrendingUp, 
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PricingCalculator() {
  const [horseCount, setHorseCount] = useState<number>(30);

  // Dynamic ROI calculations
  const hoursSavedPerMonth = Math.round(horseCount * 1.6);
  const revenueSafeguarded = Math.round(horseCount * 450);

  // Suggested Plan
  const plan = 
    horseCount <= 20 
      ? { name: 'باقة المربط الواعد', price: '499', period: 'ريال / شهرياً', desc: 'مثالية للمرابط الخاصة ومزارع الإنتاج الصغيرة' }
      : horseCount <= 55 
      ? { name: 'باقة الاسطبل الملكي', price: '990', period: 'ريال / شهرياً', desc: 'الباقة الأكثر طلباً للمرابط التجارية وأكاديميات الفروسية' }
      : { name: 'باقة الأكاديميات والاتحادات', price: '1,890', period: 'ريال / شهرياً', desc: 'حلول غير محدودة لمجمعات الفروسية والنوادي الكبرى' };

  return (
    <section id="pricing-calculator" className="py-20 lg:py-28 border-t border-border/40 scroll-mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 text-foreground dark:text-accent text-xs font-semibold border border-accent/40">
            <Calculator className="w-3.5 h-3.5 text-primary dark:text-accent" />
            <span>حاسبة العائد الاستثماري • دراسة الجدوى التشغيلية</span>
          </div>
          <h2 className="font-saudi text-2xl sm:text-4xl font-extrabold text-foreground">
            احسب قيمة التوفير والتحصيل لمربطك
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-normal">
            حرّك المؤشر أدناه لتحديد عدد خيول المربط واكتشاف حجم الساعات المحمية والإيرادات المستردة شهرياً.
          </p>
        </div>

        {/* Calculator Chassis Card */}
        <div className="max-w-4xl mx-auto card-gradient-elevated border-gradient-luxury rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Slider Row */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="horse-range" className="text-sm sm:text-base font-bold text-foreground">
                عدد الخيول في مربطك:
              </label>
              <div className="flex items-center gap-2 bg-accent/20 text-foreground dark:text-accent px-4 py-1.5 rounded-xl font-extrabold text-lg sm:text-2xl border border-accent/40 font-mono">
                <span>{horseCount}</span>
                <span className="text-xs font-sans font-semibold text-muted-foreground">خيل</span>
              </div>
            </div>

            <input
              id="horse-range"
              type="range"
              min="5"
              max="120"
              step="5"
              value={horseCount}
              onChange={(e) => setHorseCount(Number(e.target.value))}
              className="w-full h-2.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary dark:accent-accent focus:outline-none"
            />

            <div className="flex justify-between text-xs text-muted-foreground font-medium">
              <span>5 خيول (مربط صغير)</span>
              <span>60 خيل (متوسط)</span>
              <span>120+ خيل (مجمع أو أكاديمية كبرى)</span>
            </div>
          </div>

          {/* Dynamic ROI Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-muted/40 border border-border flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-accent/15 flex items-center justify-center text-primary dark:text-accent flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground block">ساعات عمل إدارية موفرة شهرياً:</span>
                <div className="text-2xl font-extrabold text-foreground font-mono">
                  ~ {hoursSavedPerMonth} <span className="text-sm font-sans font-medium text-primary dark:text-accent">ساعة/شهر</span>
                </div>
                <span className="text-[11px] text-muted-foreground">أتمتة الفواتير، جداول الإطعام، والتحصينات</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-muted/40 border border-border flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent-foreground dark:text-accent flex-shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground block">إيرادات محصّلة ومحمية من التأخير:</span>
                <div className="text-2xl font-extrabold text-foreground font-mono">
                  SAR {revenueSafeguarded.toLocaleString()} <span className="text-sm font-sans font-medium text-muted-foreground">تقديرياً</span>
                </div>
                <span className="text-[11px] text-muted-foreground">عبر روابط الدفع الفورية وتنبيهات الاستحقاق</span>
              </div>
            </div>
          </div>

          {/* Recommended Plan Presentation */}
          <div className="p-6 rounded-2xl bg-card border border-accent/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1 text-center sm:text-right">
              <div className="inline-flex items-center gap-1.5 text-xs text-primary dark:text-accent font-bold mb-1">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>الباقة الأنسب لمربطك:</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-extrabold font-saudi text-foreground">{plan.name}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">{plan.desc}</p>
            </div>

            <div className="flex flex-col sm:items-end items-center gap-3">
              <div className="text-center sm:text-left">
                <span className="text-3xl font-extrabold text-foreground font-mono">{plan.price}</span>
                <span className="text-xs text-muted-foreground mr-1.5">{plan.period}</span>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-accent dark:text-accent-foreground font-bold px-6 h-10 rounded-xl text-xs sm:text-sm shadow-sm" asChild>
                <Link href="/signup">
                  ابدأ التجربة المجانية للباقة
                </Link>
              </Button>
            </div>
          </div>

          {/* Included with all tiers */}
          <div className="pt-3 border-t border-border/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary dark:text-accent" />
              <span>فواتير ZATCA الإلكترونية</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary dark:text-accent" />
              <span>دعم فني واستشاري متخصص</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary dark:text-accent" />
              <span>نسخ احتياطي يومي مشفر</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary dark:text-accent" />
              <span>تطبيق متوافق مع كافة الأجهزة</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
