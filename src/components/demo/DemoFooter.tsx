'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DemoFooter() {
  return (
    <footer className="border-t border-border/70 bg-card/85 backdrop-blur-md pt-16 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-burgundy border border-accent/40 flex items-center justify-center text-accent font-saudi font-extrabold text-2xl shadow-sm glow-burgundy">
                ف
              </div>
              <div>
                <span className="font-saudi font-bold text-xl tracking-tight text-foreground block">
                  فرسان | FursanHub
                </span>
                <span className="text-[11px] text-muted-foreground block -mt-0.5 font-medium">
                  المنظومة السحابية المعتمدة لإدارة المرابط والاسطبلات
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm font-normal">
              الحل السحابي المتكامل لإدارة مرابط الخيول العربية الأصيلة، الرعاية البيطرية، إشغال البوكسات الفندقية، وأكاديميات الفروسية في المملكة العربية السعودية والخليج العربي.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-foreground dark:text-accent text-xs font-semibold border border-accent/40">
                <ShieldCheck className="w-3.5 h-3.5 text-primary dark:text-accent" />
                <span>معتمد للفوترة الإلكترونية ZATCA المرحلة الثانية</span>
              </div>
            </div>
          </div>

          {/* Quick Links: System Modules */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-saudi text-foreground">وحدات المنصة</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li><Link href="/dashboard" className="hover:text-primary dark:hover:text-accent transition-colors">لوحة التحكم التنفيذية</Link></li>
              <li><Link href="/horses" className="hover:text-primary dark:hover:text-accent transition-colors">إدارة الخيول والنسب</Link></li>
              <li><Link href="/stables" className="hover:text-primary dark:hover:text-accent transition-colors">إدارة الاسطبل والبوكسات</Link></li>
              <li><Link href="/calender" className="hover:text-primary dark:hover:text-accent transition-colors">التقويم والجدولة الذكية</Link></li>
              <li><Link href="/finance" className="hover:text-primary dark:hover:text-accent transition-colors">المالية والفوترة المعتمدة</Link></li>
            </ul>
          </div>

          {/* Academies & Tools */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-saudi text-foreground">الأكاديمية والخدمات</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li><Link href="/programs" className="hover:text-primary dark:hover:text-accent transition-colors">برامج تدريب الفرسان</Link></li>
              <li><Link href="/team" className="hover:text-primary dark:hover:text-accent transition-colors">فريق العمل والمدربين</Link></li>
              <li><Link href="/media" className="hover:text-primary dark:hover:text-accent transition-colors">المستندات والوسائط</Link></li>
              <li><a href="#interactive-simulator" className="hover:text-primary dark:hover:text-accent transition-colors">محاكي النظام الحي</a></li>
              <li><a href="#pricing-calculator" className="hover:text-primary dark:hover:text-accent transition-colors">حاسبة الباقات والعائد</a></li>
            </ul>
          </div>

          {/* Contact & Demo CTA */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold font-saudi text-foreground">تواصل معنا</h4>
            <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary dark:text-accent flex-shrink-0" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary dark:text-accent flex-shrink-0" />
                <span>contact@fursanhub.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary dark:text-accent flex-shrink-0" />
                <span dir="ltr">+966 50 000 0000</span>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-accent dark:text-accent-foreground font-bold text-xs h-10 rounded-xl shadow-sm" asChild>
              <Link href="/dashboard">
                <span>الدخول للنظام التجريبي</span>
                <ArrowLeft className="w-3.5 h-3.5 mr-1" />
              </Link>
            </Button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} فرسان (FursanHub). جميع الحقوق محفوظة لمرابط الخيل العربية الأصيلة.</p>
          <div className="flex items-center gap-4">
            <span>صُمم بحرفية فائقة لخدمة رياضة الآباء والأجداد 🐎</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
