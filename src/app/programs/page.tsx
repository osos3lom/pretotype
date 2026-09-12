'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
  Award, 
  Plus, 
  Search, 
  CheckCircle2, 
  Clock, 
  Utensils, 
  Activity, 
  UserCheck, 
  ChevronLeft, 
  TrendingUp, 
  Sparkles,
  HeartPulse
} from 'lucide-react';

interface TrainingProgram {
  id: string;
  code: string;
  title: string;
  horse: string;
  rider: string;
  trainer: string;
  discipline: 'قفز حواجز' | 'ترويض (Dressage)' | 'قدرة وتحمل' | 'مدرسة الفروسية';
  level: 'مبتدئ' | 'متوسط' | 'متقدم' | 'بطولات';
  progress: number;
  duration: string;
  status: 'active' | 'completed' | 'paused';
}

const initialPrograms: TrainingProgram[] = [
  { id: '1', code: 'PROG-01', title: 'برنامج الإعداد لبطولة قفز الحواجز الوطنية', horse: 'سفيرة الوادي', rider: 'مشاري العتيبي', trainer: 'كابتن زياد الحربي', discipline: 'قفز حواجز', level: 'بطولات', progress: 85, duration: '3 أشهر (الأسبوع 9)', status: 'active' },
  { id: '2', code: 'PROG-02', title: 'دورة الترويض الكلاسيكي وتناغم الفارس', horse: 'كحيلان الشامخ', rider: 'سعود بن ناصر', trainer: 'كابتن راشد الدوسري', discipline: 'ترويض (Dressage)', level: 'متقدم', progress: 60, duration: 'شهرين (الأسبوع 5)', status: 'active' },
  { id: '3', code: 'PROG-03', title: 'تأهيل ورفع لياقة التحمل والمسافات الطويلة', horse: 'برقان العز', rider: 'باسم القحطاني', trainer: 'كابتن منصور الحربي', discipline: 'قدرة وتحمل', level: 'متوسط', progress: 95, duration: 'شهر (الأسبوع 4)', status: 'active' },
  { id: '4', code: 'PROG-04', title: 'أساسيات الركوب والتحكم في الحصان', horse: 'درة الميدان', rider: 'نورة السعدون', trainer: 'كابتن زياد الحربي', discipline: 'مدرسة الفروسية', level: 'مبتدئ', progress: 40, duration: '6 أسابيع (الأسبوع 3)', status: 'active' },
];

interface CareTask {
  id: string;
  task: string;
  horse: string;
  box: string;
  dueTime: string;
  assignedGroom: string;
  completed: boolean;
}

const initialTasks: CareTask[] = [
  { id: 't1', task: 'تدريب الخيل سبلت على المشاية الدوارة (Walker)', horse: 'سفيرة الوادي', box: 'A-02', dueTime: '08:00 ص', assignedGroom: 'حسين', completed: true },
  { id: 't2', task: 'وجبة العلف الصباحية وخلط مكمل الفيتامينات', horse: 'صقر الجزيرة', box: 'A-01', dueTime: '08:30 ص', assignedGroom: 'حسين', completed: true },
  { id: 't3', task: 'تبريد مائي للأوتار وتدليك العضلات بعد التدريب', horse: 'كحيلان الشامخ', box: 'A-04', dueTime: '11:00 ص', assignedGroom: 'سالم', completed: true },
  { id: 't4', task: 'تغيير النشارة وتعقيم أرضية الغرفة', horse: 'ريم الصحراء', box: 'A-05', dueTime: '02:00 م', assignedGroom: 'إبراهيم', completed: false },
  { id: 't5', task: 'وجبة التبن والألياف المسائية', horse: 'برقان العز', box: 'A-07', dueTime: '06:00 م', assignedGroom: 'محمد', completed: false },
];

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<TrainingProgram[]>(initialPrograms);
  const [tasks, setTasks] = useState<CareTask[]>(initialTasks);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('programs');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Program State
  const [newProg, setNewProg] = useState({
    title: '',
    horse: 'صقر الجزيرة',
    rider: '',
    trainer: 'كابتن زياد الحربي',
    discipline: 'قفز حواجز' as TrainingProgram['discipline'],
    level: 'متوسط' as TrainingProgram['level'],
    duration: 'شهر'
  });

  const handleAddProgram = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProg.title || !newProg.rider) return;

    const added: TrainingProgram = {
      id: String(Date.now()),
      code: `PROG-0${programs.length + 1}`,
      title: newProg.title,
      horse: newProg.horse,
      rider: newProg.rider,
      trainer: newProg.trainer,
      discipline: newProg.discipline,
      level: newProg.level,
      progress: 10,
      duration: newProg.duration,
      status: 'active'
    };

    setPrograms([added, ...programs]);
    setIsAddModalOpen(false);
    setNewProg({ title: '', horse: 'صقر الجزيرة', rider: '', trainer: 'كابتن زياد الحربي', discipline: 'قفز حواجز', level: 'متوسط', duration: 'شهر' });
  };

  const handleToggleTask = (taskId: string) => {
    setTasks(tasks.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t)));
  };

  const completedTasksCount = tasks.filter((t) => t.completed).length;

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
              <span className="text-xs font-semibold text-muted-foreground">أكاديمية فرسان • برامج التدريب والتغذية والرعاية اليومية</span>
            </div>
            <h1 className="font-saudi text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              برامج التدريب والتغذية
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              متابعة الخطط التدريبية المخصصة لكل خيل وفارس، وجداول الأعلاف والمكملات الغذائية.
            </p>
          </div>

          <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] hover:from-[#4e1853] hover:to-[#6d216b] text-white dark:from-[#f5c777] dark:to-[#d69534] dark:text-slate-950 font-bold text-xs rounded-xl h-9 gap-1.5 shadow-md shadow-purple-950/20 dark:shadow-amber-500/20">
                <Plus className="w-3.5 h-3.5" />
                تسجيل برنامج تدريب جديد
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <form onSubmit={handleAddProgram}>
                <DialogHeader>
                  <DialogTitle className="font-saudi text-xl">تسجيل مسار تدريبي جديد</DialogTitle>
                  <DialogDescription className="text-xs text-muted-foreground">
                    عيّن الفارس والخيل والمدرب المشرف لتتبع الخطة التدريبية.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-3 py-4 text-xs">
                  <div className="space-y-1">
                    <label className="font-bold text-foreground">عنوان البرنامج التدريبي:</label>
                    <Input
                      required
                      placeholder="مثال: دورة قفز حواجز مكثفة"
                      value={newProg.title}
                      onChange={(e) => setNewProg({ ...newProg, title: e.target.value })}
                      className="rounded-xl text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-bold text-foreground">الخيل المسند:</label>
                      <Input
                        placeholder="صقر الجزيرة"
                        value={newProg.horse}
                        onChange={(e) => setNewProg({ ...newProg, horse: e.target.value })}
                        className="rounded-xl text-xs"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-foreground">اسم الفارس / المتدرب:</label>
                      <Input
                        required
                        placeholder="مشاري العتيبي"
                        value={newProg.rider}
                        onChange={(e) => setNewProg({ ...newProg, rider: e.target.value })}
                        className="rounded-xl text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-bold text-foreground">التخصص:</label>
                      <select
                        value={newProg.discipline}
                        onChange={(e) => setNewProg({ ...newProg, discipline: e.target.value as any })}
                        className="w-full h-9 rounded-xl border border-input bg-background px-3 py-1 text-xs focus:ring-2 focus:ring-primary outline-none"
                      >
                        <option value="قفز حواجز">قفز حواجز</option>
                        <option value="ترويض (Dressage)">ترويض (Dressage)</option>
                        <option value="قدرة وتحمل">قدرة وتحمل</option>
                        <option value="مدرسة الفروسية">مدرسة الفروسية</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-foreground">المستوى:</label>
                      <select
                        value={newProg.level}
                        onChange={(e) => setNewProg({ ...newProg, level: e.target.value as any })}
                        className="w-full h-9 rounded-xl border border-input bg-background px-3 py-1 text-xs focus:ring-2 focus:ring-primary outline-none"
                      >
                        <option value="مبتدئ">مبتدئ</option>
                        <option value="متوسط">متوسط</option>
                        <option value="متقدم">متقدم</option>
                        <option value="بطولات">بطولات</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-foreground">المدرب المشرف:</label>
                    <Input
                      placeholder="كابتن زياد الحربي"
                      value={newProg.trainer}
                      onChange={(e) => setNewProg({ ...newProg, trainer: e.target.value })}
                      className="rounded-xl text-xs"
                    />
                  </div>
                </div>

                <DialogFooter>
                  <Button type="button" variant="outline" size="sm" onClick={() => setIsAddModalOpen(false)} className="rounded-xl text-xs">
                    إلغاء
                  </Button>
                  <Button type="submit" size="sm" className="bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] text-white dark:from-[#f5c777] dark:to-[#d69534] dark:text-slate-950 font-bold rounded-xl text-xs">
                    تأكيد التسجيل
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* 4 Summary Metric Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground block">البرامج النشطة حالياً</span>
                <div className="text-2xl font-extrabold text-foreground mt-0.5">{programs.length} <span className="text-xs font-normal">برنامج</span></div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-700 dark:text-purple-300">
                <Award className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground block">الفرسان المسجلين بالبرامج</span>
                <div className="text-2xl font-extrabold text-foreground mt-0.5">68 <span className="text-xs font-normal">فارس</span></div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <UserCheck className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground block">مهام الرعاية اليومية</span>
                <div className="text-2xl font-extrabold text-foreground mt-0.5">{completedTasksCount} / {tasks.length} <span className="text-xs font-normal">مكتملة</span></div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground block">ساعات التدريب المنجزة</span>
                <div className="text-2xl font-extrabold text-foreground mt-0.5">142 <span className="text-xs font-normal">ساعة</span></div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-600">
                <Clock className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Workspaces Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="bg-card p-1.5 rounded-2xl border border-border shadow-sm mb-6 max-w-xl">
            <TabsList className="grid grid-cols-3 gap-1 h-auto bg-transparent">
              <TabsTrigger value="programs" className="rounded-xl py-2 text-xs font-bold">
                مسارات التدريب
              </TabsTrigger>
              <TabsTrigger value="nutrition" className="rounded-xl py-2 text-xs font-bold">
                جداول التغذية
              </TabsTrigger>
              <TabsTrigger value="tasks" className="rounded-xl py-2 text-xs font-bold">
                مهام الرعاية اليومية
              </TabsTrigger>
            </TabsList>
          </div>

          {/* TAB 1: TRAINING TRACKS */}
          <TabsContent value="programs" className="space-y-4 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {programs.map((prog) => (
                <Card key={prog.id} className="rounded-3xl border-border p-6 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-xs font-mono font-bold text-amber-600">{prog.code}</span>
                      <h3 className="font-extrabold text-base text-foreground mt-0.5">{prog.title}</h3>
                    </div>
                    <Badge variant="outline" className="text-xs font-bold">
                      {prog.level}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs bg-muted/30 p-3 rounded-2xl border border-border/50">
                    <div>
                      <span className="text-muted-foreground block">الخيل:</span>
                      <strong className="text-foreground">{prog.horse}</strong>
                    </div>
                    <div>
                      <span className="text-muted-foreground block">الفارس:</span>
                      <strong className="text-foreground">{prog.rider}</strong>
                    </div>
                    <div className="pt-2">
                      <span className="text-muted-foreground block">المدرب:</span>
                      <strong className="text-foreground">{prog.trainer}</strong>
                    </div>
                    <div className="pt-2">
                      <span className="text-muted-foreground block">المدة:</span>
                      <strong className="text-foreground">{prog.duration}</strong>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-muted-foreground">نسبة إنجاز المسار:</span>
                      <span className="text-amber-600">{prog.progress}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#3e1342] to-[#e5b35b] dark:from-[#dca84e] dark:to-[#be842c] rounded-full" style={{ width: `${prog.progress}%` }} />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* TAB 2: NUTRITION SCHEDULES */}
          <TabsContent value="nutrition" className="space-y-4 animate-in fade-in duration-300">
            <Card className="rounded-3xl border-border overflow-hidden shadow-sm">
              <CardHeader className="p-6 pb-4">
                <CardTitle className="font-saudi text-lg flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-amber-600" />
                  <span>برنامج التغذية المقننة والحصص اليومية</span>
                </CardTitle>
                <CardDescription className="text-xs">
                  جدول الوجبات الصباحية، الظهيرة، والمسائية مع المكملات المعتمدة من العيادة البيطرية.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-muted/40">
                      <TableRow>
                        <TableHead className="text-right text-xs font-bold">الخيل</TableHead>
                        <TableHead className="text-right text-xs font-bold">الوجبة الصباحية (06:00 ص)</TableHead>
                        <TableHead className="text-right text-xs font-bold">وجبة الظهيرة (01:00 م)</TableHead>
                        <TableHead className="text-right text-xs font-bold">الوجبة المسائية (07:00 م)</TableHead>
                        <TableHead className="text-right text-xs font-bold">المكملات الغذائية</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { horse: 'صقر الجزيرة', morning: '3 كجم علف مركز + تبن بروتين', noon: 'تبن شعير فاخر 2 كجم', night: '3 كجم علف مخصص + جزر مقطع', sup: 'مكمل كيراتين الحوافر + إلكترولايت' },
                        { horse: 'سفيرة الوادي', morning: '2.5 كجم علف طاقة قفز الحواجز', noon: '2 كجم تبن ألفالفا أخضر', night: '2.5 كجم علف + نخالة دافئة', sup: 'مكمل مفاصل وكولاجين طبي' },
                        { horse: 'كحيلان الشامخ', morning: 'نظام حمية وقائي خاص 2 كجم', noon: 'تبن ألياف طويلة 1.5 كجم', night: '2 كجم علف خفيف + بذور كتان', sup: 'مضاد أكسدة + فيتامين E' },
                        { horse: 'برقان العز', morning: '3.5 كجم علف قدرة وتحمل', noon: 'تبن رودس 2 كجم', night: '3 كجم علف مركز + عسل طبيعي', sup: 'أملاح طاقة وسوائل هيدريشن' },
                      ].map((row, i) => (
                        <TableRow key={i} className="hover:bg-muted/30 transition-colors">
                          <TableCell className="font-extrabold text-xs sm:text-sm text-foreground">{row.horse}</TableCell>
                          <TableCell className="text-xs text-muted-foreground">{row.morning}</TableCell>
                          <TableCell className="text-xs text-muted-foreground">{row.noon}</TableCell>
                          <TableCell className="text-xs text-muted-foreground">{row.night}</TableCell>
                          <TableCell className="text-xs font-bold text-amber-700 dark:text-amber-300">{row.sup}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 3: DAILY CARE TASKS CHECKLIST */}
          <TabsContent value="tasks" className="space-y-4 animate-in fade-in duration-300">
            <Card className="rounded-3xl border-border p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-saudi text-lg font-extrabold text-foreground">قائمة مهام الرعاية والتشغيل لليوم</h3>
                  <p className="text-xs text-muted-foreground">اضغط على المهمة لتأكيد إنجازها وتحديث سجل السايس</p>
                </div>
                <Badge variant="outline" className="text-xs bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30 font-bold">
                  {completedTasksCount} من {tasks.length} مهام مكتملة
                </Badge>
              </div>

              <div className="space-y-2.5 pt-2">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => handleToggleTask(task.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      task.completed
                        ? 'bg-muted/20 border-border/40 opacity-70'
                        : 'bg-card border-border hover:border-amber-500/40 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                        task.completed ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-border bg-background'
                      }`}>
                        {task.completed && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <div>
                        <span className={`font-bold text-xs sm:text-sm block ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                          {task.task}
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          الخيل: <strong className="text-foreground">{task.horse}</strong> • البوكس: {task.box} • السايس: {task.assignedGroom}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-muted-foreground">{task.dueTime}</span>
                      <Badge className={task.completed ? 'bg-emerald-700 text-white text-[10px]' : 'bg-amber-600 text-white text-[10px]'}>
                        {task.completed ? 'تم الإنجاز' : 'قيد الانتظار'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>

      </main>
    </div>
  );
}
