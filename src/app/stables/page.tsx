'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/components/sidebar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  Warehouse, 
  Plus, 
  Search, 
  FileDown, 
  Thermometer, 
  Droplets, 
  Clock, 
  UserCheck, 
  CheckCircle2, 
  AlertCircle, 
  MoreHorizontal, 
  LayoutGrid, 
  Table as TableIcon,
  ChevronLeft,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface StallBox {
  id: string;
  code: string;
  wing: 'stallions' | 'mares' | 'colts' | 'isolation';
  wingName: string;
  type: 'ملكي فاخر' | 'قياسي' | 'عناية خاصة';
  horseName: string;
  horseBreed: string;
  owner: string;
  status: 'occupied' | 'vacant' | 'cleaning' | 'medical';
  statusLabel: string;
  temp: string;
  feeder: string;
  assignedGroom: string;
}

const initialBoxes: StallBox[] = [
  { id: '1', code: 'A-01', wing: 'stallions', wingName: 'جناح الفحول (A)', type: 'ملكي فاخر', horseName: 'صقر الجزيرة', horseBreed: 'صقلاوي جدراني', owner: 'فيصل السبيعي', status: 'occupied', statusLabel: 'مشغول', temp: '21°C', feeder: 'ممتلئ (100%)', assignedGroom: 'حسين' },
  { id: '2', code: 'A-02', wing: 'stallions', wingName: 'جناح الفحول (A)', type: 'ملكي فاخر', horseName: 'سفيرة الوادي', horseBreed: 'كحيلة عجوز', owner: 'تركي الرشيد', status: 'occupied', statusLabel: 'مشغول', temp: '21.5°C', feeder: 'ممتلئ (90%)', assignedGroom: 'حسين' },
  { id: '3', code: 'A-03', wing: 'stallions', wingName: 'جناح الفحول (A)', type: 'قياسي', horseName: 'متاح للإيواء', horseBreed: '-', owner: 'المربط', status: 'vacant', statusLabel: 'شاغر', temp: '20°C', feeder: 'جاهز للاستقبال', assignedGroom: 'سالم' },
  { id: '4', code: 'A-04', wing: 'stallions', wingName: 'جناح الفحول (A)', type: 'عناية خاصة', horseName: 'كحيلان الشامخ', horseBreed: 'عبيان أم جريس', owner: 'سعود بن ناصر', status: 'medical', statusLabel: 'عزل وقائي', temp: '22°C', feeder: 'نظام غذائي خاص', assignedGroom: 'د. سارة' },
  { id: '5', code: 'B-01', wing: 'mares', wingName: 'جناح الأفراس (B)', type: 'ملكي فاخر', horseName: 'غالية نجد', horseBreed: 'صقلاوية', owner: 'مربط الأصالة', status: 'occupied', statusLabel: 'مشغول', temp: '21°C', feeder: 'ممتلئ (95%)', assignedGroom: 'إبراهيم' },
  { id: '6', code: 'B-02', wing: 'mares', wingName: 'جناح الأفراس (B)', type: 'قياسي', horseName: 'ريم الصحراء', horseBreed: 'شويمان', owner: 'خالد المنصور', status: 'occupied', statusLabel: 'مشغول', temp: '21.5°C', feeder: 'ممتلئ (80%)', assignedGroom: 'إبراهيم' },
  { id: '7', code: 'B-03', wing: 'mares', wingName: 'جناح الأفراس (B)', type: 'قياسي', horseName: 'قيد الصيانة والتعقيم', horseBreed: '-', owner: 'قسم النظافة', status: 'cleaning', statusLabel: 'تنظيف', temp: '20°C', feeder: 'صيانة مجدولة', assignedGroom: 'فريق الصيانة' },
  { id: '8', code: 'B-04', wing: 'mares', wingName: 'جناح الأفراس (B)', type: 'ملكي فاخر', horseName: 'درة الميدان', horseBreed: 'دهمان', owner: 'عبدالله الراجحي', status: 'occupied', statusLabel: 'مشغول', temp: '21°C', feeder: 'ممتلئ (100%)', assignedGroom: 'إبراهيم' },
  { id: '9', code: 'C-01', wing: 'colts', wingName: 'عنابر المهر (C)', type: 'قياسي', horseName: 'فخر العاديات', horseBreed: 'عربي صقلاوي', owner: 'سلطان القحطاني', status: 'occupied', statusLabel: 'مشغول', temp: '22°C', feeder: 'ممتلئ (85%)', assignedGroom: 'محمد' },
  { id: '10', code: 'C-02', wing: 'colts', wingName: 'عنابر المهر (C)', type: 'قياسي', horseName: 'متاح للإيواء', horseBreed: '-', owner: 'المربط', status: 'vacant', statusLabel: 'شاغر', temp: '20°C', feeder: 'جاهز للاستقبال', assignedGroom: 'محمد' },
  { id: '11', code: 'D-01', wing: 'isolation', wingName: 'صالة العزل (D)', type: 'عناية خاصة', horseName: 'متاح للحالات الطارئة', horseBreed: '-', owner: 'العيادة البيطرية', status: 'vacant', statusLabel: 'شاغر', temp: '21°C', feeder: 'معقم وجاهز', assignedGroom: 'د. خالد' },
  { id: '12', code: 'D-02', wing: 'isolation', wingName: 'صالة العزل (D)', type: 'عناية خاصة', horseName: 'نجم الشمال', horseBreed: 'إنجليزي أصيل', owner: 'فهد الشمري', status: 'medical', statusLabel: 'نقاهة طبية', temp: '22°C', feeder: 'متابعة بيطرية', assignedGroom: 'د. سارة' },
];

export default function StablesPage() {
  const [boxes, setBoxes] = useState<StallBox[]>(initialBoxes);
  const [selectedWing, setSelectedWing] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'matrix' | 'table'>('matrix');
  const [selectedBox, setSelectedBox] = useState<StallBox | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Box Form State
  const [newBox, setNewBox] = useState({
    code: '',
    wing: 'stallions' as StallBox['wing'],
    type: 'قياسي' as StallBox['type'],
    assignedGroom: 'حسين'
  });

  const handleAddBox = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBox.code) return;

    const wingNames = {
      stallions: 'جناح الفحول (A)',
      mares: 'جناح الأفراس (B)',
      colts: 'عنابر المهر (C)',
      isolation: 'صالة العزل (D)'
    };

    const added: StallBox = {
      id: String(Date.now()),
      code: newBox.code,
      wing: newBox.wing,
      wingName: wingNames[newBox.wing],
      type: newBox.type,
      horseName: 'متاح للإيواء',
      horseBreed: '-',
      owner: 'المربط',
      status: 'vacant',
      statusLabel: 'شاغر',
      temp: '21°C',
      feeder: 'جاهز للاستقبال',
      assignedGroom: newBox.assignedGroom
    };

    setBoxes([...boxes, added]);
    setIsAddModalOpen(false);
    setNewBox({ code: '', wing: 'stallions', type: 'قياسي', assignedGroom: 'حسين' });
  };

  const handleToggleBoxStatus = (boxId: string) => {
    setBoxes((prev) =>
      prev.map((b) => {
        if (b.id === boxId) {
          const nextStatus: StallBox['status'] = b.status === 'vacant' ? 'occupied' : 'vacant';
          const updated: StallBox = {
            ...b,
            status: nextStatus,
            statusLabel: nextStatus === 'occupied' ? 'مشغول' : 'شاغر',
            horseName: nextStatus === 'occupied' ? 'خيل مسكن تجريبياً' : 'متاح للإيواء',
          };
          if (selectedBox?.id === boxId) setSelectedBox(updated);
          return updated;
        }
        return b;
      })
    );
  };

  const filteredBoxes = boxes.filter((b) => {
    const matchesSearch = 
      b.code.includes(searchQuery) ||
      b.horseName.includes(searchQuery) ||
      b.owner.includes(searchQuery);

    if (selectedWing === 'all') return matchesSearch;
    return matchesSearch && b.wing === selectedWing;
  });

  const occupiedCount = boxes.filter((b) => b.status === 'occupied').length;
  const vacantCount = boxes.filter((b) => b.status === 'vacant').length;
  const cleaningCount = boxes.filter((b) => b.status === 'cleaning').length;
  const medicalCount = boxes.filter((b) => b.status === 'medical').length;
  const occupancyRate = Math.round((occupiedCount / boxes.length) * 100);

  return (
    <div className="flex min-h-screen w-full bg-muted/30">
      <Sidebar />

      {/* Main Workspace Canvas with native RTL right-sidebar offset */}
      <main className="flex-1 sm:mr-16 lg:mr-20 p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
        
        {/* Top Header & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-border shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-semibold text-muted-foreground">منظومة الإيواء الذكية • أجنحة ومخططات الغرف</span>
            </div>
            <h1 className="font-saudi text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              إدارة المرابط والبوكسات
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              متابعة لحظية لـ {boxes.length} غرفة إيواء عبر 4 أجنحة، مع رصد التغذية وحرارة الغرف آلياً.
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <Button 
              size="sm" 
              variant="outline" 
              className="text-xs rounded-xl font-semibold gap-1.5 h-9"
              onClick={() => alert('تم تصدير تقرير إشغال البوكسات')}
            >
              <FileDown className="w-3.5 h-3.5" />
              تقرير الإشغال
            </Button>

            <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] hover:from-[#4e1853] hover:to-[#6d216b] text-white dark:from-[#f5c777] dark:to-[#d69534] dark:text-slate-950 text-xs rounded-xl font-bold gap-1.5 shadow-md shadow-purple-950/20 dark:shadow-amber-500/20 h-9">
                  <Plus className="w-3.5 h-3.5" />
                  إضافة بوكس جديد
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <form onSubmit={handleAddBox}>
                  <DialogHeader>
                    <DialogTitle className="font-saudi text-xl">إضافة بوكس / غرفة إيواء جديدة</DialogTitle>
                    <DialogDescription className="text-xs text-muted-foreground">
                      حدد رمز البوكس والجناح والفئة لربطه بالنظام الفندقي.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-3 py-4 text-xs">
                    <div className="space-y-1">
                      <label className="font-bold text-foreground">رمز الغرفة (Code):</label>
                      <Input
                        required
                        placeholder="مثال: A-09"
                        value={newBox.code}
                        onChange={(e) => setNewBox({ ...newBox, code: e.target.value })}
                        className="rounded-xl text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-foreground">الجناح التابع له:</label>
                      <select
                        value={newBox.wing}
                        onChange={(e) => setNewBox({ ...newBox, wing: e.target.value as any })}
                        className="w-full h-9 rounded-xl border border-input bg-background px-3 py-1 text-xs focus:ring-2 focus:ring-primary outline-none"
                      >
                        <option value="stallions">جناح الفحول (A)</option>
                        <option value="mares">جناح الأفراس (B)</option>
                        <option value="colts">عنابر المهر (C)</option>
                        <option value="isolation">صالة العزل والرعاية (D)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-foreground">فئة الغرفة ومستوى التجهيز:</label>
                      <select
                        value={newBox.type}
                        onChange={(e) => setNewBox({ ...newBox, type: e.target.value as any })}
                        className="w-full h-9 rounded-xl border border-input bg-background px-3 py-1 text-xs focus:ring-2 focus:ring-primary outline-none"
                      >
                        <option value="ملكي فاخر">ملكي فاخر (مكيف + كاميرات مراقبة)</option>
                        <option value="قياسي">قياسي (مروحة تبريد + حوض آلي)</option>
                        <option value="عناية خاصة">عناية خاصة (معقم بيطري)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-foreground">السايس المسؤول:</label>
                      <Input
                        placeholder="حسين النور"
                        value={newBox.assignedGroom}
                        onChange={(e) => setNewBox({ ...newBox, assignedGroom: e.target.value })}
                        className="rounded-xl text-xs"
                      />
                    </div>
                  </div>

                  <DialogFooter>
                    <Button type="button" variant="outline" size="sm" onClick={() => setIsAddModalOpen(false)} className="rounded-xl text-xs">
                      إلغاء
                    </Button>
                    <Button type="submit" size="sm" className="bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] text-white dark:from-[#f5c777] dark:to-[#d69534] dark:text-slate-950 font-bold rounded-xl text-xs">
                      تأكيد وإضافة
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* 4 KPI Overview Cards with Progress */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>نسبة الإشغال الإجمالية</span>
                <span className="font-bold text-amber-600">{occupancyRate}%</span>
              </div>
              <div className="text-2xl font-extrabold text-foreground">{occupiedCount} <span className="text-xs font-normal text-muted-foreground">/ {boxes.length} بوكس</span></div>
              <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#3e1342] to-[#e5b35b] dark:from-[#dca84e] dark:to-[#be842c] rounded-full" style={{ width: `${occupancyRate}%` }} />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground block">الغرف الشاغرة الجاهزة</span>
                <div className="text-2xl font-extrabold text-foreground mt-0.5">{vacantCount} <span className="text-xs font-normal text-muted-foreground">غرفة</span></div>
                <span className="text-[11px] text-emerald-600">متاحة للحجز الفوري</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground block">صيانة ونظافة دورية</span>
                <div className="text-2xl font-extrabold text-foreground mt-0.5">{cleaningCount} <span className="text-xs font-normal text-muted-foreground">غرفة</span></div>
                <span className="text-[11px] text-amber-600">تعقيم وتجديد أرضيات</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                <Clock className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground block">العزل والرعاية البيطرية</span>
                <div className="text-2xl font-extrabold text-foreground mt-0.5">{medicalCount} <span className="text-xs font-normal text-muted-foreground">غرفة</span></div>
                <span className="text-[11px] text-rose-500">حجر صحي تحت الرقابة</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                <AlertCircle className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filter Toolbar: Wing Selector Tabs, Search, and View Switcher */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-card p-3 rounded-2xl border border-border shadow-sm">
          
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="ابحث برمز الغرفة، الخيل، أو المالك..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-9 h-9 text-xs rounded-xl bg-background"
            />
          </div>

          <div className="flex items-center justify-between md:justify-end gap-2 flex-wrap">
            <Tabs value={selectedWing} onValueChange={setSelectedWing} className="w-auto">
              <TabsList className="h-9 p-1 rounded-xl bg-muted/60">
                <TabsTrigger value="all" className="text-xs rounded-lg px-2.5 py-1">جميع الأجنحة</TabsTrigger>
                <TabsTrigger value="stallions" className="text-xs rounded-lg px-2.5 py-1">الفحول (A)</TabsTrigger>
                <TabsTrigger value="mares" className="text-xs rounded-lg px-2.5 py-1">الأفراس (B)</TabsTrigger>
                <TabsTrigger value="colts" className="text-xs rounded-lg px-2.5 py-1">المهر (C)</TabsTrigger>
                <TabsTrigger value="isolation" className="text-xs rounded-lg px-2.5 py-1">العزل (D)</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center bg-muted/60 p-1 rounded-xl border border-border/40">
              <button
                onClick={() => setViewMode('matrix')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'matrix' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
                title="عرض المخطط"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'table' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
                title="عرض الجدول"
              >
                <TableIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content View: Matrix or Table */}
        {viewMode === 'matrix' ? (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 animate-in fade-in duration-300">
              {filteredBoxes.map((box) => {
                const isSelected = selectedBox?.id === box.id;
                let statusClasses = 'border-amber-500/40 bg-amber-500/5 hover:border-amber-500';
                if (box.status === 'vacant') statusClasses = 'border-dashed border-border bg-muted/20 hover:border-foreground/30';
                if (box.status === 'cleaning') statusClasses = 'border-amber-500/30 bg-amber-500/10 hover:border-amber-500';
                if (box.status === 'medical') statusClasses = 'border-rose-500/30 bg-rose-500/10 hover:border-rose-500';

                return (
                  <button
                    key={box.id}
                    onClick={() => setSelectedBox(box)}
                    className={`p-4 rounded-2xl border text-right transition-all duration-200 relative group flex flex-col justify-between h-40 ${statusClasses} ${
                      isSelected ? 'ring-2 ring-amber-500 shadow-md scale-[1.02]' : ''
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-extrabold text-sm text-foreground">{box.code}</span>
                        <Badge className={
                          box.status === 'occupied' ? 'bg-emerald-700 text-white text-[10px]' :
                          box.status === 'vacant' ? 'bg-slate-600 text-white text-[10px]' :
                          box.status === 'cleaning' ? 'bg-amber-600 text-white text-[10px]' : 'bg-rose-600 text-white text-[10px]'
                        }>
                          {box.statusLabel}
                        </Badge>
                      </div>

                      <h4 className="font-extrabold text-sm sm:text-base text-foreground truncate">{box.horseName}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{box.wingName}</p>
                    </div>

                    <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground w-full">
                      <span className="flex items-center gap-1"><Thermometer className="w-3 h-3 text-amber-500" /> {box.temp}</span>
                      <span>{box.type}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Box Inspector Drawer */}
            {selectedBox && (
              <Card className="rounded-3xl border-border p-6 shadow-md bg-muted/40 animate-in fade-in duration-200">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-saudi font-extrabold text-lg text-foreground">
                        {selectedBox.code} • {selectedBox.horseName}
                      </span>
                      <Badge className={
                        selectedBox.status === 'occupied' ? 'bg-emerald-700 text-white' :
                        selectedBox.status === 'vacant' ? 'bg-slate-600 text-white' :
                        selectedBox.status === 'cleaning' ? 'bg-amber-600 text-white' : 'bg-rose-600 text-white'
                      }>
                        {selectedBox.statusLabel}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      الجناح: {selectedBox.wingName} • الفئة: {selectedBox.type} • السايس: {selectedBox.assignedGroom} • المالك: {selectedBox.owner}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      onClick={() => handleToggleBoxStatus(selectedBox.id)}
                      className="bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] text-white dark:from-[#f5c777] dark:to-[#d69534] dark:text-slate-950 font-bold text-xs rounded-xl h-9"
                    >
                      {selectedBox.status === 'vacant' ? 'تسكين خيل في هذا البوكس' : 'إخلاء الغرفة وتحويلها إلى شاغر'}
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs rounded-xl h-9" onClick={() => setSelectedBox(null)}>
                      إغلاق
                    </Button>
                  </div>
                </div>
              </Card>
            )}
          </div>
        ) : (
          <Card className="rounded-2xl border-border overflow-hidden shadow-sm animate-in fade-in duration-300">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-muted/40">
                  <TableRow>
                    <TableHead className="text-right text-xs font-bold">رمز البوكس</TableHead>
                    <TableHead className="text-right text-xs font-bold">الجناح</TableHead>
                    <TableHead className="text-right text-xs font-bold">الفئة</TableHead>
                    <TableHead className="text-right text-xs font-bold">الخيل المسكن</TableHead>
                    <TableHead className="text-right text-xs font-bold">المالك</TableHead>
                    <TableHead className="text-right text-xs font-bold">الحرارة والتغذية</TableHead>
                    <TableHead className="text-right text-xs font-bold">الحالة</TableHead>
                    <TableHead className="text-center text-xs font-bold">إجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBoxes.map((b) => (
                    <TableRow key={b.id} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="font-extrabold text-xs sm:text-sm text-foreground">{b.code}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{b.wingName}</TableCell>
                      <TableCell className="text-xs text-foreground font-medium">{b.type}</TableCell>
                      <TableCell className="text-xs font-bold text-foreground">{b.horseName}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{b.owner}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">
                        <span>{b.temp}</span> • <span>{b.feeder}</span>
                      </TableCell>
                      <TableCell>
                        <Badge className={
                          b.status === 'occupied' ? 'bg-emerald-700 text-white text-[11px]' :
                          b.status === 'vacant' ? 'bg-slate-600 text-white text-[11px]' :
                          b.status === 'cleaning' ? 'bg-amber-600 text-white text-[11px]' : 'bg-rose-600 text-white text-[11px]'
                        }>
                          {b.statusLabel}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button size="sm" variant="ghost" className="text-xs h-8 px-2 rounded-lg" onClick={() => handleToggleBoxStatus(b.id)}>
                          {b.status === 'vacant' ? 'تسكين' : 'إخلاء'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        )}

      </main>
    </div>
  );
}