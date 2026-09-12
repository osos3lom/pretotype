'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/sidebar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from '@/lib/utils';
import { 
  Sparkles, 
  Warehouse, 
  TrendingUp, 
  CalendarDays, 
  HeartPulse, 
  Plus, 
  ShieldCheck, 
  ChevronLeft, 
  Clock, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  Eye,
  Edit3,
  Share2,
  Filter,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

interface QuickBox {
  id: string;
  code: string;
  horse: string;
  status: 'occupied' | 'vacant' | 'cleaning' | 'medical';
  statusLabel: string;
  type: string;
}

const stableBoxes: QuickBox[] = [
  { id: '1', code: 'A-01', horse: 'صقر الجزيرة', status: 'occupied', statusLabel: 'مشغول', type: 'بوكس ملكي' },
  { id: '2', code: 'A-02', horse: 'سفيرة الوادي', status: 'occupied', statusLabel: 'مشغول', type: 'بوكس ملكي' },
  { id: '3', code: 'A-03', horse: 'متاح للإيواء', status: 'vacant', statusLabel: 'شاغر', type: 'بوكس قياسي' },
  { id: '4', code: 'A-04', horse: 'كحيلان الشامخ', status: 'medical', statusLabel: 'عزل وقائي', type: 'بوكس رعاية' },
  { id: '5', code: 'A-05', horse: 'ريم الصحراء', status: 'occupied', statusLabel: 'مشغول', type: 'بوكس قياسي' },
  { id: '6', code: 'A-06', horse: 'قيد التعقيم', status: 'cleaning', statusLabel: 'صيانة', type: 'بوكس قياسي' },
  { id: '7', code: 'A-07', horse: 'برقان العز', status: 'occupied', statusLabel: 'مشغول', type: 'بوكس ملكي' },
  { id: '8', code: 'A-08', horse: 'درة الميدان', status: 'occupied', statusLabel: 'مشغول', type: 'بوكس ملكي' },
  { id: '9', code: 'B-01', horse: 'غالية نجد', status: 'occupied', statusLabel: 'مشغول', type: 'بوكس أفراس' },
  { id: '10', code: 'B-02', horse: 'متاح للإيواء', status: 'vacant', statusLabel: 'شاغر', type: 'بوكس أفراس' },
  { id: '11', code: 'B-03', horse: 'شروق العاديات', status: 'occupied', statusLabel: 'مشغول', type: 'بوكس أفراس' },
  { id: '12', code: 'B-04', horse: 'وسام الفخر', status: 'occupied', statusLabel: 'مشغول', type: 'بوكس أفراس' },
];

export default function DashboardPage() {
  const [selectedBox, setSelectedBox] = useState<QuickBox | null>(null);
  const [completedVetTasks, setCompletedVetTasks] = useState<string[]>([]);

  const toggleVetTask = (taskId: string) => {
    setCompletedVetTasks((prev) => 
      prev.includes(taskId) ? prev.filter(t => t !== taskId) : [...prev, taskId]
    );
  };

  return (
    <div className="flex min-h-screen w-full bg-muted/30">
      {/* Pinned Desktop Sidebar */}
      <Sidebar />

      {/* Main Dashboard Canvas - offset for right-side RTL sidebar */}
      <main className="flex-1 sm:mr-16 lg:mr-20 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 max-w-7xl mx-auto w-full">
        
        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-border shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-muted-foreground">مربط الأصالة الدولي • النظام متصل ومحدث</span>
            </div>
            <h1 className="font-saudi text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              أهلاً بك، كابتن فيصل السبيعي
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              السبت، 12 سبتمبر 2026 • 1 ربيع الأول 1448 هـ — ملخص العمليات اليومية في المربط.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center flex-wrap gap-2.5">
            <Button size="sm" variant="outline" className="text-xs rounded-xl font-semibold gap-1.5" asChild>
              <Link href="/horses">
                <Plus className="w-3.5 h-3.5" />
                تسجيل خيل جديد
              </Link>
            </Button>

            <Button size="sm" variant="outline" className="text-xs rounded-xl font-semibold gap-1.5" asChild>
              <Link href="/stables">
                <Warehouse className="w-3.5 h-3.5" />
                حجز بوكس إيواء
              </Link>
            </Button>

            <Button size="sm" className="bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] hover:from-[#4e1853] hover:to-[#6d216b] text-white dark:from-[#f5c777] dark:to-[#d69534] dark:text-slate-950 text-xs rounded-xl font-bold gap-1.5 shadow-md shadow-purple-950/20 dark:shadow-amber-500/20" asChild>
              <Link href="/finance">
                <DollarSign className="w-3.5 h-3.5" />
                إصدار فاتورة سريعة
              </Link>
            </Button>
          </div>
        </div>

        {/* 4 Executive KPI Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Active Horses */}
          <Card className="rounded-2xl border-border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground">الخيول النشطة</span>
              <div className="w-9 h-9 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-800 dark:text-purple-300">
                <Sparkles className="w-5 h-5" />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-extrabold text-foreground">74 <span className="text-xs font-normal text-muted-foreground">خيل</span></div>
                <div className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  +8 هذا الشهر
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="bg-purple-500/10 text-purple-800 dark:text-purple-300 px-1.5 py-0.5 rounded font-medium">44 إيواء</span>
                <span className="bg-amber-500/15 text-amber-800 dark:text-amber-300 px-1.5 py-0.5 rounded font-medium">18 تدريب</span>
                <span className="bg-muted text-muted-foreground px-1.5 py-0.5 rounded font-medium">12 إنتاج</span>
              </div>
            </CardContent>
          </Card>

          {/* Box Occupancy */}
          <Card className="rounded-2xl border-border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground">إشغال البوكسات</span>
              <div className="w-9 h-9 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Warehouse className="w-5 h-5" />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-extrabold text-foreground">88%</div>
                <div className="text-xs font-bold text-muted-foreground">44 / 50 بوكس</div>
              </div>
              {/* Visual Gradient Progress Bar */}
              <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#3e1342] via-[#631e5f] to-[#e5b35b] dark:from-[#dca84e] dark:to-[#be842c] rounded-full" style={{ width: '88%' }} />
              </div>
              <p className="text-[11px] text-muted-foreground">6 بوكسات شاغرة جاهزة للاستقبال الفوري</p>
            </CardContent>
          </Card>

          {/* Monthly Revenue */}
          <Card className="rounded-2xl border-border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground">إيرادات الشهر</span>
              <div className="w-9 h-9 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <DollarSign className="w-5 h-5" />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-extrabold text-foreground">148,250 <span className="text-xs font-normal text-muted-foreground">SAR</span></div>
                <div className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  +18.4%
                </div>
              </div>
              <p className="text-[11px] text-muted-foreground">معدل التحصيل: 96% • فواتير ZATCA معتمدة</p>
            </CardContent>
          </Card>

          {/* Today's Schedule */}
          <Card className="rounded-2xl border-border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground">مواعيد وتدريب اليوم</span>
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                <CalendarDays className="w-5 h-5" />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-extrabold text-foreground">14 <span className="text-xs font-normal text-muted-foreground">جلسة</span></div>
                <Badge variant="outline" className="text-xs text-blue-600 bg-blue-500/10 border-blue-500/30">
                  4 جارية الآن
                </Badge>
              </div>
              <p className="text-[11px] text-muted-foreground">6 قفز حواجز • 5 دريساج • 3 كشوفات بيطرية</p>
            </CardContent>
          </Card>

        </div>

        {/* Live Stable Box Matrix & Quick Inspector */}
        <Card className="rounded-2xl sm:rounded-3xl border-border shadow-sm">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 gap-2">
            <div>
              <CardTitle className="text-lg sm:text-xl font-extrabold flex items-center gap-2">
                <Warehouse className="w-5 h-5 text-emerald-600" />
                <span>مخطط بوكسات الاسطبل المباشر (Stall Matrix)</span>
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                متابعة لحظية لحالة إشغال الغرف، عمليات النظافة، والعزل الصحي. اضغط على أي بوكس للمعاينة.
              </CardDescription>
            </div>

            <div className="flex items-center gap-3 text-xs flex-wrap">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> مشغول</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" /> شاغر</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> صيانة / تنظيف</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> عزل بيطري</span>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {stableBoxes.map((box) => {
                const isSelected = selectedBox?.id === box.id;
                let statusClasses = 'border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500';
                if (box.status === 'vacant') statusClasses = 'border-dashed border-border bg-muted/20 hover:border-foreground/30';
                if (box.status === 'cleaning') statusClasses = 'border-amber-500/30 bg-amber-500/5 hover:border-amber-500';
                if (box.status === 'medical') statusClasses = 'border-rose-500/30 bg-rose-500/5 hover:border-rose-500';

                return (
                  <button
                    key={box.id}
                    onClick={() => setSelectedBox(box)}
                    className={`p-3.5 rounded-xl border text-right transition-all duration-200 relative group ${statusClasses} ${
                      isSelected ? 'ring-2 ring-emerald-600 shadow-md scale-[1.02]' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-extrabold text-xs sm:text-sm text-foreground">{box.code}</span>
                      <span className={`w-2 h-2 rounded-full ${
                        box.status === 'occupied' ? 'bg-emerald-500' :
                        box.status === 'vacant' ? 'bg-slate-400' :
                        box.status === 'cleaning' ? 'bg-amber-500' : 'bg-rose-500'
                      }`} />
                    </div>
                    <div className="font-bold text-xs sm:text-sm truncate text-foreground">{box.horse}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{box.type}</div>
                  </button>
                );
              })}
            </div>

            {selectedBox && (
              <div className="p-4 rounded-xl bg-muted/40 border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-base text-foreground">{selectedBox.code} • {selectedBox.horse}</span>
                    <Badge className={
                      selectedBox.status === 'occupied' ? 'bg-emerald-700 text-white' :
                      selectedBox.status === 'vacant' ? 'bg-slate-600 text-white' :
                      selectedBox.status === 'cleaning' ? 'bg-amber-600 text-white' : 'bg-rose-600 text-white'
                    }>
                      {selectedBox.statusLabel}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">الفئة: {selectedBox.type} • الحرارة: 21°C • حوض الماء والمغذي الآلي: يعمل بحالة ممتازة</p>
                </div>

                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" className="text-xs rounded-xl" asChild>
                    <Link href="/stables">
                      إدارة الغرفة الكاملة
                      <ChevronLeft className="w-3.5 h-3.5 mr-1" />
                    </Link>
                  </Button>
                  <Button size="sm" variant="ghost" className="text-xs" onClick={() => setSelectedBox(null)}>
                    إغلاق
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Middle Two-Column Grid: Pedigree Spotlight & Veterinary Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Top Stallions & Pedigree Spotlight */}
          <Card className="rounded-2xl sm:rounded-3xl border-border shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <div>
                <CardTitle className="text-base sm:text-lg font-extrabold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>أبرز خيول المربط والأبطال</span>
                </CardTitle>
                <CardDescription className="text-xs">سلالات عربية أصيلة موثقة بالشريحة</CardDescription>
              </div>

              <Button variant="ghost" size="sm" asChild className="text-xs">
                <Link href="/horses">
                  عرض الكل (74)
                  <ChevronLeft className="w-3.5 h-3.5 mr-1" />
                </Link>
              </Button>
            </CardHeader>

            <CardContent className="space-y-3">
              {[
                { name: 'صقر الجزيرة', breed: 'عربي صقلاوي جدراني', age: '4 سنوات', chip: '982-000-482-SA', status: 'بطل إنتاج', image: getAssetPath('/images/hero_horse.jpg') },
                { name: 'سفيرة الوادي', breed: 'عربي كحيلان عجوز', age: '3 سنوات', chip: '982-000-519-SA', status: 'قفز حواجز A', image: getAssetPath('/images/horse_training.jpg') },
                { name: 'كحيلان الشامخ', breed: 'عربي عبيان أم جريس', age: '5 سنوات', chip: '982-000-994-SA', status: 'ترويض واستعراض', image: getAssetPath('/images/hero_horse.jpg') },
              ].map((horse, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-2xl bg-muted/30 border border-border/50 hover:border-emerald-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-border flex-shrink-0">
                      <Image src={horse.image} alt={horse.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm text-foreground">{horse.name}</h4>
                      <p className="text-xs text-muted-foreground">{horse.breed} • {horse.age}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono bg-background px-2 py-0.5 rounded border border-border text-muted-foreground hidden sm:inline">
                      {horse.chip}
                    </span>
                    <Badge variant="outline" className="text-xs bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30">
                      {horse.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Veterinary Alerts & Health Protocol */}
          <Card className="rounded-2xl sm:rounded-3xl border-border shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <div>
                <CardTitle className="text-base sm:text-lg font-extrabold flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-rose-500" />
                  <span>تنبيهات الرعاية والتحصينات البيطرية</span>
                </CardTitle>
                <CardDescription className="text-xs">مواعيد اللقاحات الدورية وتعديل الحذوات</CardDescription>
              </div>

              <span className="text-xs font-bold text-rose-600 bg-rose-500/10 px-2 py-0.5 rounded-full">
                3 إجراءات وشيكة
              </span>
            </CardHeader>

            <CardContent className="space-y-3">
              {[
                { id: 'vet-1', horse: 'سفيرة الوادي', title: 'جرعة لقاح الإنفلونزا الموسمية', due: 'غداً، 13 سبتمبر', vet: 'د. سارة المنصوري', urgent: true },
                { id: 'vet-2', horse: 'كحيلان الشامخ', title: 'فحص الحافر الدوري وتركيب حدوة جديدة', due: 'خلال 3 أيام', vet: 'البيطار منصور', urgent: false },
                { id: 'vet-3', horse: 'ريم الصحراء', title: 'فحص دم بيطري للتأكد من المعادن واللياقة', due: '18 سبتمبر', vet: 'عيادة المربط', urgent: false },
              ].map((task) => {
                const isDone = completedVetTasks.includes(task.id);
                return (
                  <div key={task.id} className={`p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                    isDone ? 'bg-muted/20 border-border/40 opacity-60' : task.urgent ? 'bg-rose-500/5 border-rose-500/30' : 'bg-muted/30 border-border/50'
                  }`}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`font-bold text-sm ${isDone ? 'line-through' : 'text-foreground'}`}>{task.title}</span>
                        {task.urgent && !isDone && (
                          <span className="text-[10px] bg-rose-600 text-white font-bold px-1.5 py-0.2 rounded-full">عاجل</span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground flex items-center gap-2">
                        <span>الخيل: <strong className="text-foreground">{task.horse}</strong></span>
                        <span>•</span>
                        <span>الموعد: {task.due}</span>
                      </div>
                    </div>

                    <Button
                      size="sm"
                      variant={isDone ? 'outline' : 'default'}
                      onClick={() => toggleVetTask(task.id)}
                      className={`text-xs rounded-xl h-8 px-3 ${
                        isDone ? 'text-muted-foreground' : 'bg-emerald-700 hover:bg-emerald-800 text-white font-semibold'
                      }`}
                    >
                      {isDone ? 'مكتمل ✓' : 'تأكيد الإجراء'}
                    </Button>
                  </div>
                );
              })}
            </CardContent>
          </Card>

        </div>

        {/* Arena Schedule & Today's Bookings Table */}
        <Card className="rounded-2xl sm:rounded-3xl border-border shadow-sm overflow-hidden">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-3 gap-2">
            <div>
              <CardTitle className="text-base sm:text-lg font-extrabold flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-emerald-600" />
                <span>جدول الميادين وحصص تدريب اليوم</span>
              </CardTitle>
              <CardDescription className="text-xs">تنسيق المدربين والفرسان لمنع أي تعارض في الساحات</CardDescription>
            </div>

            <Button variant="outline" size="sm" asChild className="text-xs rounded-xl">
              <Link href="/calender">
                فتح التقويم الكامل
                <ChevronLeft className="w-3.5 h-3.5 mr-1" />
              </Link>
            </Button>
          </CardHeader>

          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-muted/40">
                  <TableRow>
                    <TableHead className="text-right text-xs font-bold">الوقت</TableHead>
                    <TableHead className="text-right text-xs font-bold">الميدان</TableHead>
                    <TableHead className="text-right text-xs font-bold">الخيل</TableHead>
                    <TableHead className="text-right text-xs font-bold">الفارس / المتدرب</TableHead>
                    <TableHead className="text-right text-xs font-bold">المدرب المشرف</TableHead>
                    <TableHead className="text-right text-xs font-bold">الحالة</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { time: '04:30 م - 05:30 م', arena: 'الميدان الملكي المغطى', horse: 'سفيرة الوادي', rider: 'مشاري العتيبي', trainer: 'كابتن زياد الحربي', status: 'جاري الآن', statusType: 'active' },
                    { time: '05:30 م - 06:30 م', arena: 'حلبة قفز الحواجز الرملية', horse: 'صقر الجزيرة', rider: 'ريان التميمي', trainer: 'كابتن راشد الدوسري', status: 'قادم', statusType: 'upcoming' },
                    { time: '06:30 م - 07:30 م', arena: 'مضمار التحمل الخارجي', horse: 'برقان العز', rider: 'باسم القحطاني', trainer: 'كابتن منصور', status: 'قادم', statusType: 'upcoming' },
                    { time: '03:00 م - 04:00 م', arena: 'صالة الترويض (Dressage)', horse: 'درة الميدان', rider: 'نورة السعدون', trainer: 'كابتن زياد الحربي', status: 'مكتمل بنجاح', statusType: 'done' },
                  ].map((row, i) => (
                    <TableRow key={i} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="font-mono text-xs font-semibold">{row.time}</TableCell>
                      <TableCell className="text-xs font-medium text-foreground">{row.arena}</TableCell>
                      <TableCell className="text-xs font-bold text-emerald-700 dark:text-emerald-300">{row.horse}</TableCell>
                      <TableCell className="text-xs text-foreground">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-6 h-6">
                            <AvatarFallback className="text-[10px] bg-muted font-bold">{row.rider.split(' ')[0][0]}</AvatarFallback>
                          </Avatar>
                          <span>{row.rider}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground">{row.trainer}</TableCell>
                      <TableCell>
                        <Badge className={
                          row.statusType === 'active' ? 'bg-emerald-700 text-white text-[11px]' :
                          row.statusType === 'upcoming' ? 'bg-blue-600 text-white text-[11px]' :
                          'bg-muted text-muted-foreground border border-border text-[11px]'
                        }>
                          {row.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  );
}