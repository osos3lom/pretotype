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
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  DollarSign, 
  Plus, 
  Search, 
  FileDown, 
  TrendingUp, 
  CreditCard, 
  Receipt, 
  ArrowUpRight, 
  ArrowDownRight, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  QrCode, 
  ShieldCheck, 
  MoreHorizontal,
  Wallet
} from 'lucide-react';

interface Transaction {
  id: string;
  invoiceNo: string;
  client: string;
  phone: string;
  service: string;
  amount: number;
  vat: number;
  date: string;
  method: 'مدى' | 'Apple Pay' | 'تحويل بنكي' | 'كاش';
  status: 'paid' | 'pending' | 'overdue';
  statusLabel: string;
}

const initialTransactions: Transaction[] = [
  { id: '1', invoiceNo: 'INV-2026-104', client: 'الشيخ فيصل السبيعي', phone: '0501234567', service: 'إيواء بوكس ملكي (A-01) + تدريب', amount: 3500, vat: 525, date: '11 سبتمبر 2026', method: 'مدى', status: 'paid', statusLabel: 'مسدد' },
  { id: '2', invoiceNo: 'INV-2026-103', client: 'كابتن تركي الرشيد', phone: '0559876543', service: 'باقة تدريب قفز حواجز (12 حصة)', amount: 2400, vat: 360, date: '10 سبتمبر 2026', method: 'Apple Pay', status: 'paid', statusLabel: 'مسدد' },
  { id: '3', invoiceNo: 'INV-2026-102', client: 'سعود بن ناصر', phone: '0543219876', service: 'عناية بيطرية وفحص دوري شامل', amount: 850, vat: 127.5, date: '08 سبتمبر 2026', method: 'تحويل بنكي', status: 'pending', statusLabel: 'معلق' },
  { id: '4', invoiceNo: 'INV-2026-101', client: 'خالد المنصور', phone: '0567891234', service: 'إيواء قياسي (B-02) - اشتراك شهري', amount: 2800, vat: 420, date: '05 سبتمبر 2026', method: 'مدى', status: 'paid', statusLabel: 'مسدد' },
  { id: '5', invoiceNo: 'INV-2026-100', client: 'سلطان القحطاني', phone: '0509871234', service: 'رسوم مشاركة في بطولة قفز الحواجز', amount: 1500, vat: 225, date: '02 سبتمبر 2026', method: 'كاش', status: 'paid', statusLabel: 'مسدد' },
  { id: '6', invoiceNo: 'INV-2026-099', client: 'فهد الشمري', phone: '0512223344', service: 'إيواء ورعاية طبية مؤقتة (B-02)', amount: 1950, vat: 292.5, date: '28 أغسطس 2026', method: 'تحويل بنكي', status: 'overdue', statusLabel: 'متأخر' },
  { id: '7', invoiceNo: 'INV-2026-098', client: 'عبدالله الراجحي', phone: '0533344455', service: 'إيواء بوكس ملكي (A-08) - ربع سنوي', amount: 9800, vat: 1470, date: '25 أغسطس 2026', method: 'تحويل بنكي', status: 'paid', statusLabel: 'مسدد' },
];

export default function FinancePage() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isNewInvoiceOpen, setIsNewInvoiceOpen] = useState(false);

  // New Invoice Form State
  const [newInvoice, setNewInvoice] = useState({
    client: '',
    phone: '',
    service: 'إيواء شهري',
    amount: '',
    method: 'مدى' as Transaction['method']
  });

  const handleCreateInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newInvoice.client || !newInvoice.amount) return;

    const baseAmount = parseFloat(newInvoice.amount);
    const vat = baseAmount * 0.15;

    const added: Transaction = {
      id: String(Date.now()),
      invoiceNo: `INV-2026-${Math.floor(105 + Math.random() * 900)}`,
      client: newInvoice.client,
      phone: newInvoice.phone || '0500000000',
      service: newInvoice.service,
      amount: baseAmount,
      vat: vat,
      date: 'اليوم، 12 سبتمبر 2026',
      method: newInvoice.method,
      status: 'paid',
      statusLabel: 'مسدد'
    };

    setTransactions([added, ...transactions]);
    setIsNewInvoiceOpen(false);
    setNewInvoice({ client: '', phone: '', service: 'إيواء شهري', amount: '', method: 'مدى' });
  };

  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch = 
      t.invoiceNo.includes(searchQuery) ||
      t.client.includes(searchQuery) ||
      t.service.includes(searchQuery);

    if (statusFilter === 'all') return matchesSearch;
    return matchesSearch && t.status === statusFilter;
  });

  const totalRevenue = transactions
    .filter((t) => t.status === 'paid')
    .reduce((sum, t) => sum + t.amount + t.vat, 0);

  const pendingAmount = transactions
    .filter((t) => t.status === 'pending' || t.status === 'overdue')
    .reduce((sum, t) => sum + t.amount + t.vat, 0);

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
              <span className="text-xs font-semibold text-muted-foreground">الفوترة والامتثال المالي • معتمد من هيئة الزكاة والضريبة (ZATCA)</span>
            </div>
            <h1 className="font-saudi text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              الإدارة المالية والفواتير
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              متابعة عوائد الإيواء، اشتراكات أكاديمية الركوب، وفواتير الخدمات البيطرية اللحظية.
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <Button 
              size="sm" 
              variant="outline" 
              className="text-xs rounded-xl font-semibold gap-1.5 h-9"
              onClick={() => alert('تم تصدير كشف الحساب والتقرير المالي')}
            >
              <FileDown className="w-3.5 h-3.5" />
              تصدير التقرير
            </Button>

            <Dialog open={isNewInvoiceOpen} onOpenChange={setIsNewInvoiceOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] hover:from-[#4e1853] hover:to-[#6d216b] text-white dark:from-[#f5c777] dark:to-[#d69534] dark:text-slate-950 text-xs rounded-xl font-bold gap-1.5 shadow-md shadow-purple-950/20 dark:shadow-amber-500/20 h-9">
                  <Plus className="w-3.5 h-3.5" />
                  إنشاء فاتورة جديدة
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <form onSubmit={handleCreateInvoice}>
                  <DialogHeader>
                    <DialogTitle className="font-saudi text-xl">إصدار فاتورة ضريبية مبسطة</DialogTitle>
                    <DialogDescription className="text-xs text-muted-foreground">
                      سيتم توليد الفاتورة مع رمز الاستجابة السريعة (QR) متوافقاً مع اشتراطات ZATCA.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-3 py-4 text-xs">
                    <div className="space-y-1">
                      <label className="font-bold text-foreground">اسم العميل / المالك:</label>
                      <Input
                        required
                        placeholder="مثال: الشيخ فيصل السبيعي"
                        value={newInvoice.client}
                        onChange={(e) => setNewInvoice({ ...newInvoice, client: e.target.value })}
                        className="rounded-xl text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-foreground">رقم الجوال للإشعار:</label>
                      <Input
                        placeholder="05XXXXXXXX"
                        value={newInvoice.phone}
                        onChange={(e) => setNewInvoice({ ...newInvoice, phone: e.target.value })}
                        className="rounded-xl text-xs font-mono"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-foreground">نوع الخدمة المقدمة:</label>
                      <select
                        value={newInvoice.service}
                        onChange={(e) => setNewInvoice({ ...newInvoice, service: e.target.value })}
                        className="w-full h-9 rounded-xl border border-input bg-background px-3 py-1 text-xs focus:ring-2 focus:ring-primary outline-none"
                      >
                        <option value="إيواء شهري بوكس ملكي">إيواء شهري بوكس ملكي</option>
                        <option value="إيواء شهري بوكس قياسي">إيواء شهري بوكس قياسي</option>
                        <option value="باقة تدريب قفز حواجز (12 حصة)">باقة تدريب قفز حواجز (12 حصة)</option>
                        <option value="كشف وعلاج بيطري">كشف وعلاج بيطري</option>
                        <option value="رسوم مشاركة في بطولة">رسوم مشاركة في بطولة</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="font-bold text-foreground">المبلغ قبل الضريبة (SAR):</label>
                        <Input
                          required
                          type="number"
                          placeholder="2500"
                          value={newInvoice.amount}
                          onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })}
                          className="rounded-xl text-xs font-bold"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-bold text-foreground">طريقة الدفع:</label>
                        <select
                          value={newInvoice.method}
                          onChange={(e) => setNewInvoice({ ...newInvoice, method: e.target.value as any })}
                          className="w-full h-9 rounded-xl border border-input bg-background px-3 py-1 text-xs focus:ring-2 focus:ring-primary outline-none"
                        >
                          <option value="مدى">مدى (Mada)</option>
                          <option value="Apple Pay">Apple Pay</option>
                          <option value="تحويل بنكي">تحويل بنكي</option>
                          <option value="كاش">كاش / نقدي</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <DialogFooter>
                    <Button type="button" variant="outline" size="sm" onClick={() => setIsNewInvoiceOpen(false)} className="rounded-xl text-xs">
                      إلغاء
                    </Button>
                    <Button type="submit" size="sm" className="bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] text-white dark:from-[#f5c777] dark:to-[#d69534] dark:text-slate-950 font-bold rounded-xl text-xs">
                      إصدار وتأكيد الفاتورة
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* 4 Financial KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 space-y-1">
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>إجمالي التحصيلات (شامل الضريبة)</span>
                <span className="text-amber-600 font-bold flex items-center gap-0.5"><ArrowUpRight className="w-3.5 h-3.5" /> +20.4%</span>
              </div>
              <div className="text-2xl font-extrabold text-foreground">
                SAR {totalRevenue.toLocaleString()}
              </div>
              <span className="text-[11px] text-muted-foreground block">فواتير مسددة عبر القنوات المعتمدة</span>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 space-y-1">
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>عوائد إيواء الخيول والبوكسات</span>
                <span className="text-emerald-600 font-bold">58% من الدخل</span>
              </div>
              <div className="text-2xl font-extrabold text-foreground">
                SAR 84,000
              </div>
              <span className="text-[11px] text-muted-foreground block">42 اشتراك إيواء نشط</span>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 space-y-1">
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>مستحقات معلقة وقيد التحصيل</span>
                <span className="text-amber-600 font-bold">3 فواتير</span>
              </div>
              <div className="text-2xl font-extrabold text-foreground">
                SAR {pendingAmount.toLocaleString()}
              </div>
              <span className="text-[11px] text-amber-600 block">تم إرسال تذكيرات الدفع آلياً</span>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 space-y-1">
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>الرصيد المالي المتاح بالخزينة</span>
                <span className="text-purple-700 dark:text-purple-300 font-bold">حساب الراجحي</span>
              </div>
              <div className="text-2xl font-extrabold text-foreground">
                SAR 369,000
              </div>
              <span className="text-[11px] text-muted-foreground block">متاح للصرف والعمليات التشغيلية</span>
            </CardContent>
          </Card>

        </div>

        {/* Filter Toolbar: Status Tabs & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-card p-3 rounded-2xl border border-border shadow-sm">
          
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="ابحث برقم الفاتورة، العميل، أو الخدمة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-9 h-9 text-xs rounded-xl bg-background"
            />
          </div>

          <Tabs value={statusFilter} onValueChange={setStatusFilter} className="w-auto">
            <TabsList className="h-9 p-1 rounded-xl bg-muted/60">
              <TabsTrigger value="all" className="text-xs rounded-lg px-3 py-1">الكل ({transactions.length})</TabsTrigger>
              <TabsTrigger value="paid" className="text-xs rounded-lg px-3 py-1">مسدد</TabsTrigger>
              <TabsTrigger value="pending" className="text-xs rounded-lg px-3 py-1">معلق</TabsTrigger>
              <TabsTrigger value="overdue" className="text-xs rounded-lg px-3 py-1">متأخر</TabsTrigger>
            </TabsList>
          </Tabs>

        </div>

        {/* Transactions Table */}
        <Card className="rounded-2xl border-border overflow-hidden shadow-sm animate-in fade-in duration-300">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-muted/40">
                <TableRow>
                  <TableHead className="text-right text-xs font-bold">رقم الفاتورة</TableHead>
                  <TableHead className="text-right text-xs font-bold">العميل</TableHead>
                  <TableHead className="text-right text-xs font-bold">الخدمة والبيان</TableHead>
                  <TableHead className="text-right text-xs font-bold">المبلغ الأساسي</TableHead>
                  <TableHead className="text-right text-xs font-bold">الضريبة (15%)</TableHead>
                  <TableHead className="text-right text-xs font-bold">الإجمالي</TableHead>
                  <TableHead className="text-right text-xs font-bold">طريقة الدفع</TableHead>
                  <TableHead className="text-right text-xs font-bold">الحالة</TableHead>
                  <TableHead className="text-center text-xs font-bold">إجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((t) => (
                  <TableRow key={t.id} className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-mono font-bold text-xs text-foreground">
                      {t.invoiceNo}
                    </TableCell>
                    <TableCell className="text-xs font-bold text-foreground">
                      <div>{t.client}</div>
                      <span className="text-[10px] text-muted-foreground font-mono">{t.phone}</span>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {t.service}
                    </TableCell>
                    <TableCell className="text-xs font-mono font-semibold">
                      SAR {t.amount.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-xs font-mono text-muted-foreground">
                      SAR {t.vat.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-xs font-mono font-extrabold text-foreground">
                      SAR {(t.amount + t.vat).toLocaleString()}
                    </TableCell>
                    <TableCell className="text-xs">
                      <Badge variant="outline" className="text-[11px] font-medium">
                        {t.method}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={
                        t.status === 'paid' ? 'bg-emerald-700 text-white text-[11px]' :
                        t.status === 'pending' ? 'bg-amber-600 text-white text-[11px]' :
                        'bg-rose-600 text-white text-[11px]'
                      }>
                        {t.statusLabel}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button size="sm" variant="ghost" className="text-xs h-8 px-2 rounded-lg" onClick={() => alert(`معاينة الفاتورة الإلكترونية ${t.invoiceNo}`)}>
                        <QrCode className="w-3.5 h-3.5 ml-1 text-amber-600" />
                        عرض
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

      </main>
    </div>
  );
}