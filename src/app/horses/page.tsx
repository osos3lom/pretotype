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
  Sparkles, 
  Search, 
  Plus, 
  FileDown, 
  LayoutGrid, 
  Table as TableIcon, 
  MoreHorizontal, 
  Eye, 
  Edit3, 
  Trash2, 
  ShieldCheck, 
  QrCode, 
  HeartPulse, 
  CheckCircle2, 
  ArrowUpRight,
  ChevronLeft
} from 'lucide-react';

interface HorseData {
  id: string;
  name: string;
  breed: string;
  category: 'arabian' | 'thoroughbred' | 'waho' | 'other';
  gender: 'فحل' | 'فرس' | 'مهر';
  color: string;
  microchip: string;
  owner: string;
  ownerPhone: string;
  stableBox: string;
  healthStatus: 'ممتازة' | 'تحت الملاحظة' | 'علاج دوري';
  image: string;
  birthYear: string;
}

const initialHorses: HorseData[] = [
  {
    id: '1',
    name: 'صقر الجزيرة',
    breed: 'صقلاوي جدراني',
    category: 'arabian',
    gender: 'فحل',
    color: 'أشعل أبيض',
    microchip: 'SA-9820-4821',
    owner: 'فيصل السبيعي',
    ownerPhone: '0501234567',
    stableBox: 'A-01',
    healthStatus: 'ممتازة',
    image: '/images/hero_horse.jpg',
    birthYear: '2020'
  },
  {
    id: '2',
    name: 'سفيرة الوادي',
    breed: 'كحيلة عجوز',
    category: 'arabian',
    gender: 'فرس',
    color: 'شقراء مطهمة',
    microchip: 'SA-9820-5197',
    owner: 'تركي الرشيد',
    ownerPhone: '0559876543',
    stableBox: 'A-02',
    healthStatus: 'ممتازة',
    image: '/images/horse_training.jpg',
    birthYear: '2021'
  },
  {
    id: '3',
    name: 'كحيلان الشامخ',
    breed: 'عبيان أم جريس',
    category: 'waho',
    gender: 'فحل',
    color: 'أدهم ملكي',
    microchip: 'SA-9820-9943',
    owner: 'سعود بن ناصر',
    ownerPhone: '0543219876',
    stableBox: 'A-04',
    healthStatus: 'تحت الملاحظة',
    image: '/images/hero_horse.jpg',
    birthYear: '2019'
  },
  {
    id: '4',
    name: 'ريم الصحراء',
    breed: 'شويمان صباح',
    category: 'arabian',
    gender: 'فرس',
    color: 'حمراء صهباء',
    microchip: 'SA-9820-1124',
    owner: 'خالد المنصور',
    ownerPhone: '0567891234',
    stableBox: 'A-05',
    healthStatus: 'ممتازة',
    image: '/images/horse_training.jpg',
    birthYear: '2022'
  },
  {
    id: '5',
    name: 'برقان العز',
    breed: 'هدبان نزحي',
    category: 'waho',
    gender: 'فحل',
    color: 'رمادي فضي',
    microchip: 'SA-9820-3341',
    owner: 'سلطان القحطاني',
    ownerPhone: '0509871234',
    stableBox: 'A-07',
    healthStatus: 'ممتازة',
    image: '/images/hero_horse.jpg',
    birthYear: '2018'
  },
  {
    id: '6',
    name: 'درة الميدان',
    breed: 'دهمان شهوان',
    category: 'arabian',
    gender: 'فرس',
    color: 'شمعية صفراء',
    microchip: 'SA-9820-7782',
    owner: 'عبدالله الراجحي',
    ownerPhone: '0533344455',
    stableBox: 'A-08',
    healthStatus: 'ممتازة',
    image: '/images/horse_training.jpg',
    birthYear: '2021'
  },
  {
    id: '7',
    name: 'رعد الشمال',
    breed: 'إنجليزي أصيل',
    category: 'thoroughbred',
    gender: 'فحل',
    color: 'كميت غامق',
    microchip: 'SA-9820-6651',
    owner: 'فهد الشمري',
    ownerPhone: '0512223344',
    stableBox: 'B-02',
    healthStatus: 'علاج دوري',
    image: '/images/hero_horse.jpg',
    birthYear: '2020'
  },
  {
    id: '8',
    name: 'غالية نجد',
    breed: 'صقلاوية مريغية',
    category: 'waho',
    gender: 'فرس',
    color: 'شقراء مذهبة',
    microchip: 'SA-9820-8890',
    owner: 'مربط الأصالة',
    ownerPhone: '0500000000',
    stableBox: 'B-01',
    healthStatus: 'ممتازة',
    image: '/images/horse_training.jpg',
    birthYear: '2023'
  }
];

export default function HorsesPage() {
  const [horses, setHorses] = useState<HorseData[]>(initialHorses);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Horse Form State
  const [newHorse, setNewHorse] = useState({
    name: '',
    breed: 'صقلاوي جدراني',
    gender: 'فحل' as 'فحل' | 'فرس' | 'مهر',
    color: 'أشعل أبيض',
    microchip: '',
    owner: '',
    ownerPhone: '',
    stableBox: 'A-03'
  });

  const handleAddHorse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHorse.name || !newHorse.owner) return;

    const added: HorseData = {
      id: String(Date.now()),
      name: newHorse.name,
      breed: newHorse.breed,
      category: 'arabian',
      gender: newHorse.gender,
      color: newHorse.color,
      microchip: newHorse.microchip || `SA-9820-${Math.floor(1000 + Math.random() * 9000)}`,
      owner: newHorse.owner,
      ownerPhone: newHorse.ownerPhone || '0500000000',
      stableBox: newHorse.stableBox,
      healthStatus: 'ممتازة',
      image: '/images/hero_horse.jpg',
      birthYear: '2024'
    };

    setHorses([added, ...horses]);
    setIsAddModalOpen(false);
    setNewHorse({
      name: '',
      breed: 'صقلاوي جدراني',
      gender: 'فحل',
      color: 'أشعل أبيض',
      microchip: '',
      owner: '',
      ownerPhone: '',
      stableBox: 'A-03'
    });
  };

  const filteredHorses = horses.filter((horse) => {
    const matchesSearch = 
      horse.name.includes(searchQuery) ||
      horse.owner.includes(searchQuery) ||
      horse.microchip.includes(searchQuery) ||
      horse.breed.includes(searchQuery);

    if (activeTab === 'all') return matchesSearch;
    return matchesSearch && horse.category === activeTab;
  });

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
              <span className="text-xs font-semibold text-muted-foreground">سجل الخيل المركزي • الأنساب والشرائح المعتمدة</span>
            </div>
            <h1 className="font-saudi text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              إدارة الخيول والأنساب
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              استعراض {horses.length} خيل مسجل، مع تتبع القياسات، السجلات الطبية، والملف الرقمي لكل خيل.
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <Button 
              size="sm" 
              variant="outline" 
              className="text-xs rounded-xl font-semibold gap-1.5 h-9"
              onClick={() => alert('تم تصدير سجل الخيول بنجاح')}
            >
              <FileDown className="w-3.5 h-3.5" />
              تصدير السجل
            </Button>

            <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] hover:from-[#4e1853] hover:to-[#6d216b] text-white dark:from-[#f5c777] dark:to-[#d69534] dark:text-slate-950 text-xs rounded-xl font-bold gap-1.5 shadow-md shadow-purple-950/20 dark:shadow-amber-500/20 h-9">
                  <Plus className="w-3.5 h-3.5" />
                  إضافة خيل جديد
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <form onSubmit={handleAddHorse}>
                  <DialogHeader>
                    <DialogTitle className="font-saudi text-xl">تسجيل خيل جديد في المنظومة</DialogTitle>
                    <DialogDescription className="text-xs text-muted-foreground">
                      أدخل بيانات الخيل والمالك لإنشاء الجواز الرقمي وتعيين البوكس فورياً.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 text-xs">
                    <div className="space-y-1.5">
                      <label className="font-bold text-foreground">اسم الخيل:</label>
                      <Input
                        required
                        placeholder="مثال: شاهين نجد"
                        value={newHorse.name}
                        onChange={(e) => setNewHorse({ ...newHorse, name: e.target.value })}
                        className="rounded-xl text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-foreground">السلالة / الفصيل:</label>
                      <Input
                        placeholder="مثال: صقلاوي جدراني"
                        value={newHorse.breed}
                        onChange={(e) => setNewHorse({ ...newHorse, breed: e.target.value })}
                        className="rounded-xl text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-foreground">الجنس:</label>
                      <select
                        value={newHorse.gender}
                        onChange={(e) => setNewHorse({ ...newHorse, gender: e.target.value as any })}
                        className="w-full h-9 rounded-xl border border-input bg-background px-3 py-1 text-xs focus:ring-2 focus:ring-primary outline-none"
                      >
                        <option value="فحل">فحل (Stallion)</option>
                        <option value="فرس">فرس (Mare)</option>
                        <option value="مهر">مهر (Colt)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-foreground">اللون:</label>
                      <Input
                        placeholder="أشعل، أدهم، كميت..."
                        value={newHorse.color}
                        onChange={(e) => setNewHorse({ ...newHorse, color: e.target.value })}
                        className="rounded-xl text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-foreground">رقم الشريحة الإلكترونية:</label>
                      <Input
                        placeholder="SA-9820-XXXX"
                        value={newHorse.microchip}
                        onChange={(e) => setNewHorse({ ...newHorse, microchip: e.target.value })}
                        className="rounded-xl text-xs font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-foreground">البوكس المقترح:</label>
                      <Input
                        placeholder="A-03"
                        value={newHorse.stableBox}
                        onChange={(e) => setNewHorse({ ...newHorse, stableBox: e.target.value })}
                        className="rounded-xl text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-foreground">اسم المالك المسجل:</label>
                      <Input
                        required
                        placeholder="اسم المالك الكامل"
                        value={newHorse.owner}
                        onChange={(e) => setNewHorse({ ...newHorse, owner: e.target.value })}
                        className="rounded-xl text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-foreground">رقم جوال المالك:</label>
                      <Input
                        placeholder="05XXXXXXXX"
                        value={newHorse.ownerPhone}
                        onChange={(e) => setNewHorse({ ...newHorse, ownerPhone: e.target.value })}
                        className="rounded-xl text-xs"
                      />
                    </div>
                  </div>

                  <DialogFooter className="gap-2 sm:gap-0">
                    <Button type="button" variant="outline" size="sm" onClick={() => setIsAddModalOpen(false)} className="rounded-xl text-xs">
                      إلغاء
                    </Button>
                    <Button type="submit" size="sm" className="bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] text-white dark:from-[#f5c777] dark:to-[#d69534] dark:text-slate-950 font-bold rounded-xl text-xs">
                      تأكيد وحفظ الخيل
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* 4 Top KPI Metric Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground block">إجمالي الخيول المسجلة</span>
                <div className="text-2xl font-extrabold text-foreground mt-0.5">109 <span className="text-xs font-normal text-muted-foreground">رأس</span></div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-700 dark:text-purple-300">
                <Sparkles className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground block">خيول الأعضاء والمستأجرين</span>
                <div className="text-2xl font-extrabold text-foreground mt-0.5">65 <span className="text-xs font-normal text-muted-foreground">خيل</span></div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground block">خيول المربط والإنتاج</span>
                <div className="text-2xl font-extrabold text-foreground mt-0.5">44 <span className="text-xs font-normal text-muted-foreground">خيل</span></div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-700 dark:text-purple-300">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground block">خيول خارج المربط (مشاركات)</span>
                <div className="text-2xl font-extrabold text-foreground mt-0.5">12 <span className="text-xs font-normal text-muted-foreground">خيل</span></div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-600">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filter Toolbar: Search, Breed Tabs, and View Switcher */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-card p-3 rounded-2xl border border-border shadow-sm">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="ابحث بالاسم، رقم الشريحة، المالك، أو السلالة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-9 h-9 text-xs rounded-xl bg-background"
            />
          </div>

          {/* Tabs & View Mode */}
          <div className="flex items-center justify-between md:justify-end gap-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
              <TabsList className="h-9 p-1 rounded-xl bg-muted/60">
                <TabsTrigger value="all" className="text-xs rounded-lg px-3 py-1">الكل ({horses.length})</TabsTrigger>
                <TabsTrigger value="arabian" className="text-xs rounded-lg px-3 py-1">عربي</TabsTrigger>
                <TabsTrigger value="waho" className="text-xs rounded-lg px-3 py-1">واهو</TabsTrigger>
                <TabsTrigger value="thoroughbred" className="text-xs rounded-lg px-3 py-1">إنجليزي</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center bg-muted/60 p-1 rounded-xl border border-border/40">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
                title="عرض البطاقات"
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

        {/* Content View: Grid or Table */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-300">
            {filteredHorses.map((horse) => (
              <Card key={horse.id} className="rounded-2xl border-border overflow-hidden hover:shadow-md transition-shadow group flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                    <Image
                      src={horse.image}
                      alt={horse.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 right-2.5 flex gap-1.5">
                      <Badge className="bg-black/60 backdrop-blur-md text-white border-white/20 text-[10px]">
                        {horse.stableBox}
                      </Badge>
                      <Badge className={
                        horse.healthStatus === 'ممتازة' 
                          ? 'bg-emerald-600/90 text-white text-[10px]' 
                          : 'bg-amber-600/90 text-white text-[10px]'
                      }>
                        {horse.healthStatus}
                      </Badge>
                    </div>

                    <div className="absolute bottom-2 left-2">
                      <span className="text-[10px] font-mono bg-black/70 backdrop-blur-md text-[#fce8b8] px-2 py-0.5 rounded-md flex items-center gap-1">
                        <QrCode className="w-3 h-3" />
                        {horse.microchip}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-base text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {horse.name}
                      </h3>
                      <span className="text-xs text-muted-foreground font-medium">{horse.gender}</span>
                    </div>

                    <p className="text-xs text-muted-foreground">{horse.breed} • {horse.color}</p>

                    <div className="pt-2 border-t border-border/40 text-xs flex justify-between text-muted-foreground">
                      <span>المالك: <strong className="text-foreground">{horse.owner}</strong></span>
                      <span>سنة: {horse.birthYear}</span>
                    </div>
                  </CardContent>
                </div>

                <div className="p-3 border-t border-border/40 bg-muted/20 flex items-center justify-between gap-2">
                  <Button size="sm" variant="ghost" className="text-xs h-8 flex-1 rounded-xl" asChild>
                    <Link href="/horses/profile">
                      <Eye className="w-3.5 h-3.5 ml-1.5" />
                      عرض الجواز
                    </Link>
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost" className="h-8 w-8 rounded-xl">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href="/horses/profile">عرض الملف الكامل</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => alert(`تعديل بيانات ${horse.name}`)}>
                        تعديل البيانات
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => alert(`جدولة فحص بيطري لـ ${horse.name}`)}>
                        جدولة كشف بيطري
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        أرشفة السجل
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="rounded-2xl border-border overflow-hidden shadow-sm animate-in fade-in duration-300">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-muted/40">
                  <TableRow>
                    <TableHead className="text-right text-xs font-bold">الخيل</TableHead>
                    <TableHead className="text-right text-xs font-bold">السلالة</TableHead>
                    <TableHead className="text-right text-xs font-bold">الجنس واللون</TableHead>
                    <TableHead className="text-right text-xs font-bold">رقم الشريحة</TableHead>
                    <TableHead className="text-right text-xs font-bold">المالك</TableHead>
                    <TableHead className="text-right text-xs font-bold">الغرفة</TableHead>
                    <TableHead className="text-right text-xs font-bold">الحالة</TableHead>
                    <TableHead className="text-center text-xs font-bold">إجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredHorses.map((horse) => (
                    <TableRow key={horse.id} className="hover:bg-muted/30 transition-colors">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="relative w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 border border-border">
                            <Image src={horse.image} alt={horse.name} fill className="object-cover" />
                          </div>
                          <div>
                            <Link href="/horses/profile" className="font-extrabold text-xs sm:text-sm text-foreground hover:underline">
                              {horse.name}
                            </Link>
                            <span className="text-[11px] text-muted-foreground block">مواليد {horse.birthYear}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-xs font-medium text-foreground">{horse.breed}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{horse.gender} • {horse.color}</TableCell>
                      <TableCell className="font-mono text-xs text-foreground font-semibold">{horse.microchip}</TableCell>
                      <TableCell className="text-xs">
                        <span className="font-bold text-foreground block">{horse.owner}</span>
                        <span className="text-[10px] text-muted-foreground font-mono">{horse.ownerPhone}</span>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs font-bold">
                          {horse.stableBox}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={
                          horse.healthStatus === 'ممتازة' 
                            ? 'bg-emerald-600/90 text-white text-[11px]' 
                            : 'bg-amber-600/90 text-white text-[11px]'
                        }>
                          {horse.healthStatus}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button size="sm" variant="ghost" asChild className="text-xs h-8 px-2 rounded-lg">
                          <Link href="/horses/profile">
                            معاينة
                            <ChevronLeft className="w-3 h-3 mr-1" />
                          </Link>
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