'use client';

import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Testimonial {
  name: string;
  role: string;
  stud: string;
  content: string;
  horsesManaged: string;
  badge: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'سلطان بن فهد الهذلي',
    role: 'مالك ومؤسس',
    stud: 'مربط عذبة للخيول العربية الأصيلة - الرياض',
    content: 'منظومة فرسان اختصرت علينا أكثر من 80% من الجهد الإداري والورقي. متابعة السجلات البيطرية وشجرة نسب الأمهار أصبحت تجربة رقمية فاخرة وموثوقة تمنح المشترين والمربين ثقة مطلقة.',
    horsesManaged: '85 خيل أصيل',
    badge: 'مستخدم معتمد منذ 2023'
  },
  {
    name: 'د. سارة المنصوري',
    role: 'كبيرة الأطباء البيطريين',
    stud: 'اسطبلات الصافنات الملكية - جدة',
    content: 'أهم ما يميز النظام هو دقة التنبيهات الاستباقية للتحصينات والفحوصات الدورية. لم نفوت موعد لقاح أو كشف سريري واحد، والربط مع الشريحة الإلكترونية المعتمدة فائق السلاسة والدقة.',
    horsesManaged: '120 خيل وبوكس',
    badge: 'عيادة بيطرية معتمدة'
  },
  {
    name: 'كابتن راشد الدوسري',
    role: 'مدرب قفز حواجز دولي',
    stud: 'أكاديمية فرسان الشرقية - الدمام',
    content: 'محاكي الحجوزات وتنظيم الميادين قضى تماماً على أي تضارب في حصص التدريب. أولياء أمور الفرسان والمتدربين يتلقون تقارير التطور وإشعارات الحصص والاشتراكات مباشرة وباحترافية عالية.',
    horsesManaged: '65 فارس وخيل',
    badge: 'أكاديمية تدريب معتمدة'
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 relative overflow-hidden scroll-mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 text-foreground dark:text-accent text-xs font-semibold border border-accent/40">
            <Star className="w-3.5 h-3.5 fill-accent text-accent" />
            <span>ثقة كبار المربين والفرسان • شهادات معتمدة</span>
          </div>
          <h2 className="font-saudi text-2xl sm:text-4xl font-extrabold text-foreground">
            تجارب حقيقية من نخبة المرابط في المملكة
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-normal">
            اكتشف كيف ساهمت منصة فرسان في رفع كفاءة وحوكمة أرقى الاسطبلات ومراكز الفروسية.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-sm flex flex-col justify-between space-y-6 relative group hover:border-accent/60 transition-all duration-300 hover:shadow-lg card-gradient-elevated"
            >
              <div className="space-y-4">
                {/* 5 Stars Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-accent gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-muted-foreground/30" />
                </div>

                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-border/50 space-y-2.5">
                <div>
                  <div className="font-extrabold text-sm sm:text-base text-foreground flex items-center gap-1.5 font-saudi">
                    <span>{t.name}</span>
                    <ShieldCheck className="w-4 h-4 text-primary dark:text-accent" />
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role} • {t.stud}</div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-primary dark:text-accent font-bold bg-accent/20 px-2.5 py-0.5 rounded-md border border-accent/30">
                    {t.horsesManaged}
                  </span>
                  <span className="text-muted-foreground text-[11px] font-medium">{t.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
