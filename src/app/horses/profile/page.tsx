'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/components/sidebar';
import { getAssetPath } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  QrCode, 
  HeartPulse, 
  Calendar, 
  Award, 
  Printer, 
  Edit3, 
  Phone, 
  MapPin, 
  UserCheck, 
  Activity, 
  CheckCircle2, 
  Clock, 
  ArrowLeft,
  Warehouse
} from 'lucide-react';

export default function HorseProfilePage() {
  const [activeTab, setActiveTab] = useState('pedigree');

  return (
    <div className="flex min-h-screen w-full bg-muted/30">
      <Sidebar />

      {/* Main Workspace Canvas with native RTL right-sidebar offset */}
      <main className="flex-1 sm:mr-16 lg:mr-20 p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
        
        {/* Navigation & Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-card p-4 sm:p-5 rounded-2xl border border-border shadow-sm">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <Link href="/horses" className="hover:text-foreground flex items-center gap-1 font-semibold">
              <ChevronRight className="w-4 h-4" />
              <span>الخيول والأنساب</span>
            </Link>
            <span>/</span>
            <span className="text-foreground font-bold">سفير المشعلية (SA-9820-4821)</span>
          </div>

          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" className="text-xs rounded-xl gap-1.5 h-9" onClick={() => window.print()}>
              <Printer className="w-3.5 h-3.5" />
              طباعة الجواز
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] text-white dark:from-[#f5c777] dark:to-[#d69534] dark:text-slate-950 text-xs font-bold rounded-xl gap-1.5 h-9 shadow-md">
              <Edit3 className="w-3.5 h-3.5" />
              تعديل الملف
            </Button>
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Column 1: Identity & Physical Telemetry Card */}
          <div className="space-y-6">
            
            {/* Visual Portrait */}
            <Card className="rounded-3xl border-border overflow-hidden shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <Image
                  src={getAssetPath('/images/hero_horse.jpg')}
                  alt="سفير المشعلية"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <Badge className="bg-black/60 backdrop-blur-md text-[#fce8b8] text-xs font-mono flex items-center gap-1 border border-white/10">
                    <QrCode className="w-3.5 h-3.5" />
                    SA-9820-4821
                  </Badge>
                  <Badge className="bg-emerald-700 text-white text-xs">
                    بطل إنتاج
                  </Badge>
                </div>

                <div className="absolute bottom-3 right-3 left-3 bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-white">
                  <h2 className="font-saudi text-xl font-extrabold">سفير المشعلية</h2>
                  <p className="text-xs text-gray-200">صقلاوي جدراني أصيل • 9 سنوات</p>
                </div>
              </div>

              {/* Physical Spec Sheet */}
              <CardContent className="p-5 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-border/40">
                  <span className="text-muted-foreground">تاريخ الميلاد:</span>
                  <span className="font-bold text-foreground">15 مايو 2015</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border/40">
                  <span className="text-muted-foreground">اللون والمظهر:</span>
                  <span className="font-bold text-foreground">أزرق مطهم مع حجول بيضاء</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border/40">
                  <span className="text-muted-foreground">الارتفاع عند الحارك:</span>
                  <span className="font-bold text-foreground">160 سم (15.3 قبضة)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border/40">
                  <span className="text-muted-foreground">المربي المعتمد:</span>
                  <span className="font-bold text-foreground">Brunelli Marcello Via Grossetana</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border/40">
                  <span className="text-muted-foreground">السايس المشرف:</span>
                  <span className="font-bold text-foreground">حسين النور</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-muted-foreground">الغرفة والبوكس:</span>
                  <Badge variant="outline" className="font-bold text-xs bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30">
                    جناح الأبطال (A-01)
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Owner Contact Card */}
            <Card className="rounded-3xl border-border p-5 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-muted-foreground uppercase">بيانات مالك الخيل</span>
                <Badge variant="outline" className="text-[10px] bg-purple-500/10 text-purple-800 dark:text-purple-300 border-purple-500/30">
                  عضو بلاتيني
                </Badge>
              </div>

              <div className="space-y-1">
                <h4 className="font-extrabold text-base text-foreground">مشعل الزايدي</h4>
                <p className="text-xs text-muted-foreground">إسطبلات الزايدي الملكية</p>
              </div>

              <div className="pt-2 border-t border-border/40 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span dir="ltr" className="font-mono">051 234 5789</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>مكة المكرمة، طريق مكة القديم</span>
                </div>
              </div>
            </Card>

          </div>

          {/* Column 2: Detailed Tabs Workspace */}
          <div className="lg:col-span-2 space-y-6">
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="bg-card p-1.5 rounded-2xl border border-border shadow-sm mb-6">
                <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-1 h-auto bg-transparent">
                  <TabsTrigger value="pedigree" className="rounded-xl py-2 text-xs font-bold">
                    شجرة النسب
                  </TabsTrigger>
                  <TabsTrigger value="health" className="rounded-xl py-2 text-xs font-bold">
                    الملف الطبي
                  </TabsTrigger>
                  <TabsTrigger value="training" className="rounded-xl py-2 text-xs font-bold">
                    التدريب والمنافسات
                  </TabsTrigger>
                  <TabsTrigger value="boarding" className="rounded-xl py-2 text-xs font-bold">
                    الإيواء والفوترة
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* TAB 1: PEDIGREE TREE */}
              <TabsContent value="pedigree" className="space-y-6 animate-in fade-in duration-300">
                <Card className="rounded-3xl border-border p-6 shadow-sm space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-saudi text-lg font-extrabold text-foreground flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-amber-600" />
                        <span>شجرة النسب المعتمدة (Pedigree Chart)</span>
                      </h3>
                      <p className="text-xs text-muted-foreground">سلالة موثقة مسجلة لدى منظمة الجواد العربي العالمية (WAHO)</p>
                    </div>
                    <Badge variant="outline" className="text-xs text-amber-700 bg-amber-500/10 border-amber-500/30 font-bold">
                      WAHO #9820-2015
                    </Badge>
                  </div>

                  {/* Visual Pedigree Hierarchy */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    {/* Gen 1 */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-950/15 to-amber-500/10 border border-border text-center flex flex-col justify-center">
                      <span className="text-[10px] text-muted-foreground font-bold uppercase block mb-1">الخيل المسجل</span>
                      <h4 className="font-saudi font-extrabold text-base text-foreground">سفير المشعلية</h4>
                      <p className="text-xs text-muted-foreground">صقلاوي جدراني</p>
                    </div>

                    {/* Gen 2: Sire & Dam */}
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-2xl bg-card border border-border shadow-sm text-center">
                        <span className="text-[10px] text-muted-foreground font-bold block mb-0.5">الأب (Sire)</span>
                        <div className="font-extrabold text-xs sm:text-sm text-foreground">وادي الشقب</div>
                        <span className="text-[11px] text-amber-600 font-medium">بطل العالم لجمال الخيل</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-card border border-border shadow-sm text-center">
                        <span className="text-[10px] text-muted-foreground font-bold block mb-0.5">الأم (Dam)</span>
                        <div className="font-extrabold text-xs sm:text-sm text-foreground">شكلان ليدي</div>
                        <span className="text-[11px] text-muted-foreground">فرس إنتاج ممتازة</span>
                      </div>
                    </div>

                    {/* Gen 3: Grandsires */}
                    <div className="space-y-2">
                      <div className="p-2.5 rounded-xl bg-muted/40 border border-border text-center">
                        <span className="text-[10px] text-muted-foreground block font-medium">جد الأب: مروان الشقب</span>
                        <span className="font-bold text-xs text-foreground block">سلالة قطرية أصيلة</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-muted/40 border border-border text-center">
                        <span className="text-[10px] text-muted-foreground block font-medium">جدة الأب: وايت سيلك</span>
                        <span className="font-bold text-xs text-foreground block">سلالة بولندية</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-muted/40 border border-border text-center">
                        <span className="text-[10px] text-muted-foreground block font-medium">جد الأم: الرشيم</span>
                        <span className="font-bold text-xs text-foreground block">بطل الخالدية</span>
                      </div>
                    </div>
                  </div>

                  {/* Lineage Narrative */}
                  <div className="p-4 rounded-2xl bg-muted/30 border border-border/60 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    <p>
                      ينحدر <strong>سفير المشعلية</strong> من خط دم نقي يجمع بين قوة أبطال الشقب وجمال السلالة الصقلاوية الكلاسيكية. يتميز بنية عظمية متناسقة، رأس مقعر بدقة متناهية، ومقدرة توريثية فائقة للأمهار في مسابقات جمال الخيل العربي وقفز الحواجز.
                    </p>
                  </div>
                </Card>
              </TabsContent>

              {/* TAB 2: HEALTH & VACCINATIONS */}
              <TabsContent value="health" className="space-y-6 animate-in fade-in duration-300">
                <Card className="rounded-3xl border-border p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-saudi text-lg font-extrabold text-foreground flex items-center gap-2">
                        <HeartPulse className="w-5 h-5 text-rose-500" />
                        <span>سجل التحصينات والفحوصات البيطرية</span>
                      </h3>
                      <p className="text-xs text-muted-foreground">ملف طبي سحابي مربوط بالشريحة الإلكترونية</p>
                    </div>
                    <Badge className="bg-emerald-700 text-white text-xs">
                      اللياقة الطبية: A+
                    </Badge>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    {[
                      { title: 'لقاح الإنفلونزا والتيتانوس السنوي', date: '15 أغسطس 2026', vet: 'د. سارة المنصوري', status: 'ساري', type: 'valid' },
                      { title: 'فحص الحافر وتركيب حذوة حديدية رياضية', date: '01 سبتمبر 2026', vet: 'البيطار منصور الحربي', status: 'ساري', type: 'valid' },
                      { title: 'جرعة الديدان الدورية (Equimax)', date: 'مجدول 28 سبتمبر 2026', vet: 'عيادة المربط', status: 'موعد قادم', type: 'upcoming' },
                      { title: 'فحص دوري للأسنان وتنظيف القواطع', date: 'مجدول 10 أكتوبر 2026', vet: 'د. خالد الصالح', status: 'موعد قادم', type: 'upcoming' },
                    ].map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-card border border-border flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-3">
                          {item.type === 'valid' ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          ) : (
                            <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                          )}
                          <div>
                            <span className="font-bold text-foreground block">{item.title}</span>
                            <span className="text-xs text-muted-foreground">الطبيب: {item.vet}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-muted-foreground">{item.date}</span>
                          <Badge className={item.type === 'valid' ? 'bg-emerald-700 text-white text-[10px]' : 'bg-amber-600 text-white text-[10px]'}>
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* TAB 3: TRAINING & PERFORMANCE */}
              <TabsContent value="training" className="space-y-6 animate-in fade-in duration-300">
                <Card className="rounded-3xl border-border p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-saudi text-lg font-extrabold text-foreground flex items-center gap-2">
                        <Award className="w-5 h-5 text-amber-600" />
                        <span>برامج التدريب وسجل المنافسات</span>
                      </h3>
                      <p className="text-xs text-muted-foreground">متابعة الأداء الرياضي وحصص ساحات الركوب</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-muted/40 border border-border text-center">
                      <span className="text-xs text-muted-foreground block">ساعات التدريب المكتملة</span>
                      <div className="text-2xl font-extrabold text-foreground mt-1">142 <span className="text-xs font-normal">ساعة</span></div>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/40 border border-border text-center">
                      <span className="text-xs text-muted-foreground block">المسار التدريبي الحالي</span>
                      <div className="text-base font-extrabold text-amber-600 mt-1">قفز حواجز متقدم</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/40 border border-border text-center">
                      <span className="text-xs text-muted-foreground block">المدرب المشرف</span>
                      <div className="text-base font-extrabold text-foreground mt-1">كابتن زياد الحربي</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-card border border-border space-y-2 text-xs sm:text-sm">
                    <span className="font-bold text-foreground block">آخر تقييم أداء فني:</span>
                    <p className="text-muted-foreground leading-relaxed">
                      استجابة الخيل للإشارات واللجام ممتازة جداً. قفز الحواجز بارتفاع 120 سم تم بنجاح بدون أخطاء، ومعدل ضربات القلب يعود إلى الوضع الطبيعي خلال 8 دقائق بعد التدريب.
                    </p>
                  </div>
                </Card>
              </TabsContent>

              {/* TAB 4: BOARDING & INVOICING */}
              <TabsContent value="boarding" className="space-y-6 animate-in fade-in duration-300">
                <Card className="rounded-3xl border-border p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-saudi text-lg font-extrabold text-foreground flex items-center gap-2">
                        <Warehouse className="w-5 h-5 text-purple-700" />
                        <span>عقد الإيواء والاشتراك الفندقي</span>
                      </h3>
                      <p className="text-xs text-muted-foreground">تفاصيل البوكس والوجبات والفواتير المسددة</p>
                    </div>
                    <Badge className="bg-emerald-700 text-white text-xs">
                      العقد ساري (سنوي)
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-card border border-border space-y-1 text-xs sm:text-sm">
                      <span className="text-muted-foreground">رقم البوكس المخصص:</span>
                      <div className="text-base font-extrabold text-foreground">جناح الأبطال (A-01)</div>
                      <p className="text-xs text-muted-foreground">غرفة ملكية مكيفة مزودة بحوض ماء آلي ونظام مراقبة كاميرات 24/7</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-card border border-border space-y-1 text-xs sm:text-sm">
                      <span className="text-muted-foreground">قيمة الاشتراك الشهري:</span>
                      <div className="text-base font-extrabold text-foreground">SAR 3,500 / شهرياً</div>
                      <p className="text-xs text-emerald-600">الفاتورة الأخيرة (سبتمبر 2026) مسددة بالكامل</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>

          </div>

        </div>

      </main>
    </div>
  );
}
