"use client"

import React, { useState } from 'react'
import Sidebar from "@/components/sidebar"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Users,
  UserCheck,
  ShieldCheck,
  Award,
  Search,
  PlusCircle,
  Phone,
  Mail,
  MoreVertical,
  Edit,
  Trash2,
  Calendar,
  CheckCircle2,
  FileSpreadsheet,
  Briefcase
} from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  category: 'staff' | 'trainers' | 'owners'
  role: string
  phone: string
  email: string
  joinDate: string
  status: 'نشط' | 'في إجازة' | 'معتمد'
  assignedCount: number
  avatarText: string
}

const initialMembers: TeamMember[] = [
  // كادر المربط والإدارة
  { id: '1', name: 'م. عبد العزيز بن فهد', category: 'staff', role: 'مدير عام المربط', phone: '+966 50 123 4567', email: 'abdulaziz@fursan.sa', joinDate: '2022-01-15', status: 'نشط', assignedCount: 42, avatarText: 'ع ف' },
  { id: '2', name: 'د. فيصل الشمري', category: 'staff', role: 'كبير الأطباء البيطريين', phone: '+966 55 987 6543', email: 'faisal.vet@fursan.sa', joinDate: '2022-06-01', status: 'نشط', assignedCount: 38, avatarText: 'ف ش' },
  { id: '3', name: 'سلطان القحطاني', category: 'staff', role: 'مشرف الإسطبلات والرعاية', phone: '+966 54 321 0987', email: 'sultan@fursan.sa', joinDate: '2023-02-10', status: 'نشط', assignedCount: 24, avatarText: 'س ق' },
  { id: '4', name: 'سارة الدوسري', category: 'staff', role: 'أخصائية التغذية والسلامة', phone: '+966 56 777 8899', email: 'sara.d@fursan.sa', joinDate: '2023-09-01', status: 'نشط', assignedCount: 38, avatarText: 'س د' },
  { id: '5', name: 'محمد راشد', category: 'staff', role: 'محاسب ومدير مالي', phone: '+966 53 111 2233', email: 'finance@fursan.sa', joinDate: '2023-04-12', status: 'في إجازة', assignedCount: 0, avatarText: 'م ر' },

  // المدربين والخيالة المعتمدين
  { id: '6', name: 'الكابتن طارق الغامدي', category: 'trainers', role: 'مدرب قفز حواجز دولي', phone: '+966 50 888 1234', email: 'tareq.coach@fursan.sa', joinDate: '2021-11-20', status: 'معتمد', assignedCount: 8, avatarText: 'ط غ' },
  { id: '7', name: 'الكابتن ريان العتيبي', category: 'trainers', role: 'مدرب ترويض وخيل عربية (دريساج)', phone: '+966 55 444 3322', email: 'rayan.equine@fursan.sa', joinDate: '2022-08-14', status: 'معتمد', assignedCount: 6, avatarText: 'ر ع' },
  { id: '8', name: 'الكابتن ناصر المالكي', category: 'trainers', role: 'مدرب لياقة ومسافات طويلة', phone: '+966 54 222 9988', email: 'nasser.endurance@fursan.sa', joinDate: '2023-03-05', status: 'نشط', assignedCount: 5, avatarText: 'ن م' },
  { id: '9', name: 'الكابتن خالد البلوي', category: 'trainers', role: 'مروض خيول إنتاج وفحول', phone: '+966 56 665 4433', email: 'khaled.b@fursan.sa', joinDate: '2023-10-18', status: 'معتمد', assignedCount: 7, avatarText: 'خ ب' },

  // الملاك والعملاء
  { id: '10', name: 'الأمير فيصل بن سعود آل سعود', category: 'owners', role: 'مالك VIP (نخبة)', phone: '+966 50 000 1122', email: 'faisal.owner@royalequine.sa', joinDate: '2021-05-10', status: 'نشط', assignedCount: 6, avatarText: 'ف س' },
  { id: '11', name: 'الشيخ محمد بن حمد الهطلاني', category: 'owners', role: 'مالك خيول سباق وبطولات', phone: '+966 55 333 7711', email: 'm.hatlani@holding.sa', joinDate: '2022-02-18', status: 'نشط', assignedCount: 4, avatarText: 'م ه' },
  { id: '12', name: 'د. نورة بنت سليمان العواد', category: 'owners', role: 'مالكة خيل استعراض جمال', phone: '+966 54 999 4455', email: 'noura.awad@med.sa', joinDate: '2022-09-22', status: 'نشط', assignedCount: 3, avatarText: 'ن ع' },
  { id: '13', name: 'سعادة راشد الهاجري', category: 'owners', role: 'مالك إيواء وخدمات تدريب', phone: '+966 56 123 9900', email: 'r.hajri@energy.sa', joinDate: '2023-05-14', status: 'نشط', assignedCount: 2, avatarText: 'ر ه' },
  { id: '14', name: 'عبد المحسن التميمي', category: 'owners', role: 'مالك إيواء VIP', phone: '+966 53 456 7890', email: 'mohsen.t@tamimi.sa', joinDate: '2024-01-08', status: 'نشط', assignedCount: 2, avatarText: 'ع ت' },
]

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>(initialMembers)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('all')
  const [isAddOpen, setIsAddOpen] = useState(false)

  // New member form state
  const [newName, setNewName] = useState('')
  const [newCategory, setNewCategory] = useState<'staff' | 'trainers' | 'owners'>('staff')
  const [newRole, setNewRole] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newEmail, setNewEmail] = useState('')

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newName || !newRole) return

    const newEntry: TeamMember = {
      id: Date.now().toString(),
      name: newName,
      category: newCategory,
      role: newRole,
      phone: newPhone || '+966 50 000 0000',
      email: newEmail || 'user@fursan.sa',
      joinDate: new Date().toISOString().split('T')[0],
      status: newCategory === 'trainers' ? 'معتمد' : 'نشط',
      assignedCount: 0,
      avatarText: newName.split(' ').slice(0, 2).map(n => n[0]).join(' ')
    }

    setMembers([newEntry, ...members])
    setIsAddOpen(false)
    setNewName('')
    setNewRole('')
    setNewPhone('')
    setNewEmail('')
  }

  const handleDelete = (id: string) => {
    setMembers(members.filter(m => m.id !== id))
  }

  const filteredMembers = members.filter(m => {
    const matchesCategory = activeTab === 'all' || m.category === activeTab
    const matchesQuery = m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         m.phone.includes(searchQuery) ||
                         m.email.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesQuery
  })

  // KPI Metrics
  const staffCount = members.filter(m => m.category === 'staff').length
  const trainerCount = members.filter(m => m.category === 'trainers').length
  const ownerCount = members.filter(m => m.category === 'owners').length
  const totalCount = members.length

  return (
    <div className="flex min-h-screen w-full flex-col bg-background selection:bg-amber-500/20">
      <Sidebar />
      <main className="flex-1 sm:mr-16 lg:mr-20 p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
        {/* Page Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-2 border-b border-border/60">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                إدارة الكادر والملاك والمدربين
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight font-saudi bg-gradient-to-l from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              فريق العمل والعملاء
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              دليل متكامل لإدارة الطاقم الإداري، الأطباء البيطريين، المدربين المعتمدين، وقائمة ملاك الخيول.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-border/80 hover:bg-muted/80"
              onClick={() => alert("تم تصدير سجل الكادر والملاك بنجاح بصيغة CSV")}
            >
              <FileSpreadsheet className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden sm:inline">تصدير الدليل</span>
            </Button>

            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="gap-2 bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] text-white hover:opacity-95 shadow-md shadow-purple-950/20">
                  <PlusCircle className="h-4 w-4 text-amber-300" />
                  <span>إضافة عضو جديد</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[480px]">
                <DialogHeader className="text-right">
                  <DialogTitle className="font-saudi text-xl">إضافة عضو جديد إلى المربط</DialogTitle>
                  <DialogDescription>
                    أدخل بيانات الشخص وحدد صفته سواء كان من موظفي المربط أو مدرباً معتمداً أو من الملاك.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleAddMember} className="space-y-4 py-2">
                  <div className="space-y-1.5 text-right">
                    <Label htmlFor="memberName">الاسم الكامل</Label>
                    <Input
                      id="memberName"
                      placeholder="مثال: د. عبد الله السالم"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      required
                      className="text-right"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-right">
                    <div className="space-y-1.5">
                      <Label htmlFor="category">الفئة الرئيسية</Label>
                      <Select value={newCategory} onValueChange={(val: any) => setNewCategory(val)}>
                        <SelectTrigger id="category" className="text-right">
                          <SelectValue placeholder="اختر الفئة" />
                        </SelectTrigger>
                        <SelectContent dir="rtl">
                          <SelectItem value="staff">كادر المربط والإدارة</SelectItem>
                          <SelectItem value="trainers">مدرب معتمد</SelectItem>
                          <SelectItem value="owners">مالك خيل / عميل</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="role">المسمى أو الصفة</Label>
                      <Input
                        id="role"
                        placeholder="مثال: طبيب بيطري، مدرب قفز"
                        value={newRole}
                        onChange={(e) => setNewRole(e.target.value)}
                        required
                        className="text-right"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-right">
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">رقم الجوال</Label>
                      <Input
                        id="phone"
                        dir="ltr"
                        placeholder="+966 5X XXX XXXX"
                        value={newPhone}
                        onChange={(e) => setNewPhone(e.target.value)}
                        className="text-left font-mono"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input
                        id="email"
                        type="email"
                        dir="ltr"
                        placeholder="name@fursan.sa"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        className="text-left font-mono text-sm"
                      />
                    </div>
                  </div>

                  <DialogFooter className="gap-2 sm:justify-start pt-4 border-t border-border/60">
                    <Button type="submit" className="bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] text-white">
                      حفظ وتسجيل العضو
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setIsAddOpen(false)}>
                      إلغاء
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* 4 KPI Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <Card className="border-border/60 bg-gradient-to-br from-card to-card/80 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5c1c5a] to-[#3e1342]" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                إجمالي السجلات
              </CardTitle>
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Users className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-saudi">{totalCount}</div>
              <p className="text-[11px] text-muted-foreground mt-1">
                يشمل الكادر، المدربين والملاك
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-gradient-to-br from-card to-card/80 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                كادر الإدارة والبيطرة
              </CardTitle>
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <ShieldCheck className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-saudi">{staffCount}</div>
              <p className="text-[11px] text-muted-foreground mt-1">
                أطباء، مشرفين، وأخصائيي تغذية
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-gradient-to-br from-card to-card/80 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                المدربين المعتمدين
              </CardTitle>
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Award className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-saudi">{trainerCount}</div>
              <p className="text-[11px] text-muted-foreground mt-1">
                قفز حواجز، دريساج ومسافات
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-gradient-to-br from-card to-card/80 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                الملاك والعملاء
              </CardTitle>
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <UserCheck className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-saudi">{ownerCount}</div>
              <p className="text-[11px] text-muted-foreground mt-1">
                17 رأساً من الخيل قيد الإيواء
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filter Controls & Tabs */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
              <TabsList className="grid grid-cols-4 w-full sm:w-[480px] bg-muted/70 p-1">
                <TabsTrigger value="all" className="data-[state=active]:bg-background">
                  الكل ({totalCount})
                </TabsTrigger>
                <TabsTrigger value="staff" className="data-[state=active]:bg-background">
                  الكادر ({staffCount})
                </TabsTrigger>
                <TabsTrigger value="trainers" className="data-[state=active]:bg-background">
                  المدربين ({trainerCount})
                </TabsTrigger>
                <TabsTrigger value="owners" className="data-[state=active]:bg-background">
                  الملاك ({ownerCount})
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="relative w-full sm:w-72">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="بحث بالاسم، الدور، أو الهاتف..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-9 text-sm text-right bg-card/60"
              />
            </div>
          </div>

          {/* Members Table */}
          <Card className="border-border/60 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/40 hover:bg-muted/40">
                    <TableHead className="text-right py-3.5 font-bold">العضو / المالك</TableHead>
                    <TableHead className="text-right py-3.5 font-bold">التصنيف والدور</TableHead>
                    <TableHead className="text-right py-3.5 font-bold">بيانات الاتصال</TableHead>
                    <TableHead className="text-center py-3.5 font-bold">الخيول / المهام</TableHead>
                    <TableHead className="text-center py-3.5 font-bold">الحالة</TableHead>
                    <TableHead className="text-center py-3.5 font-bold">تاريخ الانضمام</TableHead>
                    <TableHead className="text-center py-3.5 font-bold">إجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMembers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="h-32 text-center text-muted-foreground">
                        لا توجد نتائج مطابقة لخيارات البحث المحددة.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredMembers.map((member) => (
                      <TableRow key={member.id} className="hover:bg-muted/30 transition-colors">
                        {/* Member Name and Avatar */}
                        <TableCell className="text-right">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#3e1342] to-[#5c1c5a] text-amber-300 font-bold text-xs flex items-center justify-center shadow-sm shrink-0">
                              {member.avatarText}
                            </div>
                            <div>
                              <div className="font-semibold text-foreground text-sm">
                                {member.name}
                              </div>
                              <div className="text-xs text-muted-foreground font-mono">
                                #{member.id.padStart(3, '0')}
                              </div>
                            </div>
                          </div>
                        </TableCell>

                        {/* Category & Role */}
                        <TableCell className="text-right">
                          <div className="flex flex-col gap-1 items-start">
                            <span className="text-sm font-medium">{member.role}</span>
                            <Badge
                              variant="outline"
                              className={
                                member.category === 'staff'
                                  ? 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-300/40 text-[10px]'
                                  : member.category === 'trainers'
                                  ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-300/40 text-[10px]'
                                  : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-300/40 text-[10px]'
                              }
                            >
                              {member.category === 'staff' ? 'إدارة المربط' : member.category === 'trainers' ? 'مدرب معتمد' : 'مالك خيل'}
                            </Badge>
                          </div>
                        </TableCell>

                        {/* Contact info */}
                        <TableCell className="text-right">
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                              <Phone className="h-3 w-3 text-muted-foreground/80 shrink-0" />
                              <span dir="ltr">{member.phone}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                              <Mail className="h-3 w-3 text-muted-foreground/80 shrink-0" />
                              <span>{member.email}</span>
                            </div>
                          </div>
                        </TableCell>

                        {/* Horse / Task count */}
                        <TableCell className="text-center">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted/60 text-xs font-medium">
                            {member.category === 'owners' ? (
                              <span>{member.assignedCount} رؤوس</span>
                            ) : (
                              <span>{member.assignedCount} خيل تحت الإشراف</span>
                            )}
                          </div>
                        </TableCell>

                        {/* Status */}
                        <TableCell className="text-center">
                          <Badge
                            className={
                              member.status === 'نشط' || member.status === 'معتمد'
                                ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/25 border-emerald-500/30'
                                : 'bg-amber-500/15 text-amber-700 dark:text-amber-300 hover:bg-amber-500/25 border-amber-500/30'
                            }
                          >
                            {member.status}
                          </Badge>
                        </TableCell>

                        {/* Join Date */}
                        <TableCell className="text-center text-xs text-muted-foreground font-mono">
                          {member.joinDate}
                        </TableCell>

                        {/* Action Menu */}
                        <TableCell className="text-center">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="text-right">
                              <DropdownMenuLabel>خيارات العضو</DropdownMenuLabel>
                              <DropdownMenuItem className="gap-2 cursor-pointer">
                                <Edit className="h-3.5 w-3.5" />
                                <span>تعديل الصلاحيات</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-2 cursor-pointer">
                                <Phone className="h-3.5 w-3.5" />
                                <span>إرسال إشعار واتساب</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                className="gap-2 text-destructive focus:text-destructive cursor-pointer"
                                onClick={() => handleDelete(member.id)}
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                                <span>حذف من السجل</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}