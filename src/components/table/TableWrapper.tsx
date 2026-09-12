"use client"

import React, { useState } from 'react'
import { FileType } from '@/types'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Badge } from '../ui/badge'
import { Card } from '../ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
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
import { Label } from '@/components/ui/label'
import prettyBytes from "pretty-bytes"
import {
  FileText,
  Search,
  UploadCloud,
  Download,
  FileCheck,
  ShieldAlert,
  FolderOpen,
  Eye,
  Trash2,
  FileCode,
  Image as ImageIcon,
  CheckCircle2,
  ArrowUpDown
} from 'lucide-react'

// Mock initial data if Firestore collection is empty or offline
const sampleDocs: FileType[] = [
  {
    id: "doc-1",
    filename: "WAHO_Certificate_Al_Buraq_2024.pdf",
    fullName: "شهادة النسب والأصالة الدولية WAHO - البراق",
    timestamp: new Date("2024-03-01T10:00:00"),
    downloadURL: "#",
    type: "application/pdf",
    size: 2450000,
  },
  {
    id: "doc-2",
    filename: "Veterinary_Clearance_Jawharat.pdf",
    fullName: "تقرير الفحص البيطري والأشعة السينية - جوهرة عذبة",
    timestamp: new Date("2024-03-10T14:30:00"),
    downloadURL: "#",
    type: "application/pdf",
    size: 5800000,
  },
  {
    id: "doc-3",
    filename: "Passport_Saqr_Al_Mamlakah.pdf",
    fullName: "جواز السفر المعتمد والرقاقة الإلكترونية - صقر المملكة",
    timestamp: new Date("2024-02-15T09:15:00"),
    downloadURL: "#",
    type: "application/pdf",
    size: 1950000,
  },
  {
    id: "doc-4",
    filename: "Breeding_Contract_2024_Q1.pdf",
    fullName: "عقد التشبية وحفظ السائل المنوي المجمد",
    timestamp: new Date("2024-01-20T11:45:00"),
    downloadURL: "#",
    type: "application/pdf",
    size: 890000,
  },
  {
    id: "doc-5",
    filename: "Al_Buraq_Championship_Portrait.jpg",
    fullName: "الصورة الرسمية لبطولة الخالدية الدولية 2024",
    timestamp: new Date("2024-02-28T16:20:00"),
    downloadURL: "#",
    type: "image/jpeg",
    size: 4200000,
  },
  {
    id: "doc-6",
    filename: "ZATCA_Tax_Invoice_INV-2024-089.pdf",
    fullName: "فاتورة ضريبية إلكترونية معتمدة زاتكا (ZATCA)",
    timestamp: new Date("2024-03-11T13:10:00"),
    downloadURL: "#",
    type: "application/pdf",
    size: 450000,
  },
]

export default function TableWrapper({ skeletonFiles }: { skeletonFiles?: FileType[] }) {
  // Combine passed skeleton files with default samples if empty
  const initialData = (skeletonFiles && skeletonFiles.length > 0) ? skeletonFiles : sampleDocs
  const [files, setFiles] = useState<FileType[]>(initialData)
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [sortAsc, setSortAsc] = useState(false)

  // Upload modal state
  const [isUploadOpen, setIsUploadOpen] = useState(false)
  const [uploadTitle, setUploadTitle] = useState('')
  const [uploadCategory, setUploadCategory] = useState('pedigree')
  const [selectedFileName, setSelectedFileName] = useState('')

  const handleSimulateUpload = (e: React.FormEvent) => {
    e.preventDefault()
    if (!uploadTitle) return

    const newDoc: FileType = {
      id: `doc-${Date.now()}`,
      filename: selectedFileName || `${uploadTitle.replace(/\s+/g, '_')}.pdf`,
      fullName: uploadTitle,
      timestamp: new Date(),
      downloadURL: "#",
      type: selectedFileName.endsWith('.jpg') || selectedFileName.endsWith('.png') ? 'image/jpeg' : 'application/pdf',
      size: Math.floor(Math.random() * 4000000) + 500000,
    }

    setFiles([newDoc, ...files])
    setIsUploadOpen(false)
    setUploadTitle('')
    setSelectedFileName('')
  }

  const handleDelete = (id: string) => {
    setFiles(files.filter(f => f.id !== id))
  }

  const filteredFiles = files
    .filter(f => {
      const matchQuery = (f.fullName || f.filename).toLowerCase().includes(searchQuery.toLowerCase()) ||
                         f.filename.toLowerCase().includes(searchQuery.toLowerCase())
      if (categoryFilter === 'pdf') return matchQuery && f.type?.includes('pdf')
      if (categoryFilter === 'image') return matchQuery && f.type?.includes('image')
      return matchQuery
    })
    .sort((a, b) => {
      const timeA = a.timestamp ? new Date(a.timestamp).getTime() : 0
      const timeB = b.timestamp ? new Date(b.timestamp).getTime() : 0
      return sortAsc ? timeA - timeB : timeB - timeA
    })

  const getFileBadge = (type?: string) => {
    if (type?.includes('pdf')) {
      return (
        <Badge variant="outline" className="bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30 gap-1 text-[11px]">
          <FileText className="h-3 w-3" />
          <span>PDF معتمد</span>
        </Badge>
      )
    }
    if (type?.includes('image')) {
      return (
        <Badge variant="outline" className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30 gap-1 text-[11px]">
          <ImageIcon className="h-3 w-3" />
          <span>صورة / وسائط</span>
        </Badge>
      )
    }
    return (
      <Badge variant="outline" className="bg-muted text-muted-foreground gap-1 text-[11px]">
        <FileCode className="h-3 w-3" />
        <span>ملف وثائقي</span>
      </Badge>
    )
  }

  return (
    <div className="space-y-6">
      {/* Top action toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="relative w-full sm:w-80">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="بحث في المستندات والشهادات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-9 text-sm text-right bg-card/70"
            />
          </div>

          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-36 text-right">
              <SelectValue placeholder="نوع المستند" />
            </SelectTrigger>
            <SelectContent dir="rtl">
              <SelectItem value="all">جميع الأنواع</SelectItem>
              <SelectItem value="pdf">مستندات PDF</SelectItem>
              <SelectItem value="image">صور وفوتوغرافيا</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setSortAsc(!sortAsc)}
            className="gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            <ArrowUpDown className="h-3.5 w-3.5" />
            <span>{sortAsc ? 'الأقدم أولاً' : 'الأحدث أولاً'}</span>
          </Button>
        </div>

        {/* Upload Button with Modal */}
        <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="gap-2 bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] text-white hover:opacity-95 shadow-md shadow-purple-950/20">
              <UploadCloud className="h-4 w-4 text-amber-300" />
              <span>رفع مستند جديد</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader className="text-right">
              <DialogTitle className="font-saudi text-xl">رفع وثيقة أو تقرير بيطري</DialogTitle>
              <DialogDescription>
                قم بإرفاق شهادات الواهو الرسمية، تقارير الأشعة، جوازات السفر أو عقود الإيواء.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSimulateUpload} className="space-y-4 py-2">
              <div className="space-y-1.5 text-right">
                <Label htmlFor="docTitle">عنوان الوثيقة</Label>
                <Input
                  id="docTitle"
                  placeholder="مثال: شهادة فحص الدم - صقر المملكة 2024"
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  required
                  className="text-right"
                />
              </div>

              <div className="space-y-1.5 text-right">
                <Label htmlFor="docCategory">تصنيف الوثيقة</Label>
                <Select value={uploadCategory} onValueChange={setUploadCategory}>
                  <SelectTrigger id="docCategory" className="text-right">
                    <SelectValue placeholder="اختر التصنيف" />
                  </SelectTrigger>
                  <SelectContent dir="rtl">
                    <SelectItem value="pedigree">شهادة أنساب وتوثيق WAHO</SelectItem>
                    <SelectItem value="veterinary">تقرير طبي / فحص بيطري / أشعة</SelectItem>
                    <SelectItem value="contract">عقد تشبية / إيواء ورعاية</SelectItem>
                    <SelectItem value="zatca">فاتورة ضريبية معتمدة ZATCA</SelectItem>
                    <SelectItem value="media">صور بطولات واستعراض</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Upload Dropzone Simulator */}
              <div className="border-2 border-dashed border-border/80 rounded-xl p-6 text-center space-y-2 bg-muted/20 hover:bg-muted/30 transition-colors">
                <UploadCloud className="h-8 w-8 mx-auto text-amber-500/80 animate-bounce" />
                <div className="text-sm font-medium">
                  {selectedFileName ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono">
                      {selectedFileName}
                    </span>
                  ) : (
                    "اسحب الملفات هنا أو اضغط للاختيار"
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  يدعم PDF، JPG، PNG بحجم يصل حتى 25 ميجابايت
                </p>
                <input
                  type="file"
                  id="hiddenFileInput"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setSelectedFileName(e.target.files[0].name)
                    }
                  }}
                />
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={() => document.getElementById('hiddenFileInput')?.click()}
                  className="text-xs mt-2"
                >
                  تصفح الملفات
                </Button>
              </div>

              <DialogFooter className="gap-2 sm:justify-start pt-4 border-t border-border/60">
                <Button type="submit" className="bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] text-white">
                  تأكيد وحفظ الوثيقة
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsUploadOpen(false)}>
                  إلغاء
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Documents Table */}
      <Card className="border-border/60 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/40 hover:bg-muted/40">
                <TableHead className="text-right py-3.5 font-bold">اسم الوثيقة والملف</TableHead>
                <TableHead className="text-right py-3.5 font-bold">النوع</TableHead>
                <TableHead className="text-center py-3.5 font-bold">الحجم</TableHead>
                <TableHead className="text-center py-3.5 font-bold">تاريخ التوثيق</TableHead>
                <TableHead className="text-center py-3.5 font-bold">الحالة الأمنية</TableHead>
                <TableHead className="text-center py-3.5 font-bold">إجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFiles.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-32 text-center text-muted-foreground">
                    لا توجد ملفات مطابقة لخيارات البحث.
                  </TableCell>
                </TableRow>
              ) : (
                filteredFiles.map((file) => (
                  <TableRow key={file.id} className="hover:bg-muted/30 transition-colors">
                    {/* File title and raw filename */}
                    <TableCell className="text-right">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-muted/80 flex items-center justify-center text-muted-foreground shrink-0 border border-border/60">
                          {file.type?.includes('pdf') ? (
                            <FileText className="h-5 w-5 text-red-500" />
                          ) : (
                            <ImageIcon className="h-5 w-5 text-blue-500" />
                          )}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground text-sm">
                            {file.fullName || file.filename}
                          </div>
                          <div className="text-xs text-muted-foreground font-mono truncate max-w-xs">
                            {file.filename}
                          </div>
                        </div>
                      </div>
                    </TableCell>

                    {/* File Type Badge */}
                    <TableCell className="text-right">
                      {getFileBadge(file.type)}
                    </TableCell>

                    {/* File Size */}
                    <TableCell className="text-center text-xs font-mono text-muted-foreground">
                      {prettyBytes(file.size || 0)}
                    </TableCell>

                    {/* Timestamp */}
                    <TableCell className="text-center text-xs text-muted-foreground font-mono">
                      {file.timestamp
                        ? new Date(file.timestamp).toLocaleDateString('ar-SA', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })
                        : "2024-03-01"}
                    </TableCell>

                    {/* Verification Status */}
                    <TableCell className="text-center">
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30 gap-1 text-[11px]">
                        <CheckCircle2 className="h-3 w-3" />
                        <span>موثق ومؤرشف</span>
                      </Badge>
                    </TableCell>

                    {/* Action buttons */}
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 text-xs gap-1 text-primary hover:text-primary hover:bg-primary/10"
                          onClick={() => alert(`جاري معاينة: ${file.fullName || file.filename}`)}
                        >
                          <Eye className="h-3.5 w-3.5" />
                          <span className="hidden sm:inline">معاينة</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 text-xs gap-1 text-muted-foreground hover:text-foreground"
                          onClick={() => alert(`بدء تنزيل الملف المشفّر: ${file.filename}`)}
                        >
                          <Download className="h-3.5 w-3.5" />
                          <span className="hidden sm:inline">تحميل</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-destructive/80 hover:text-destructive hover:bg-destructive/10"
                          onClick={() => handleDelete(file.id)}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}
