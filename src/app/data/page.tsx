"use client"

import React, { useState } from 'react'
import Sidebar from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  TrendingUp,
  TrendingDown,
  Building2,
  DollarSign,
  Activity,
  Award,
  Download,
  Calendar,
  Layers,
  Percent,
  CheckCircle2,
  HeartPulse,
  Sparkles
} from 'lucide-react'

// Monthly operational trend data
const monthlyOccupancy = [
  { month: 'أكتوبر', rate: 76, revenue: 168000, horses: 32 },
  { month: 'نوفمبر', rate: 82, revenue: 182000, horses: 35 },
  { month: 'ديسمبر', rate: 89, revenue: 198000, horses: 38 },
  { month: 'يناير', rate: 91, revenue: 215000, horses: 39 },
  { month: 'فبراير', rate: 88, revenue: 204000, horses: 37 },
  { month: 'مارس', rate: 94, revenue: 245000, horses: 42 },
]

// Revenue & Service Breakdown
const serviceBreakdown = [
  { service: 'إيواء ورعاية VIP (بوكس فردي مكيّف)', share: 48, amount: '117,600 ر.س', color: 'bg-purple-600' },
  { service: 'برامج التدريب وقفز الحواجز التنافسية', share: 26, amount: '63,700 ر.س', color: 'bg-amber-500' },
  { service: 'العناية الطبية البيطرية والتغذية التخصصية', share: 15, amount: '36,750 ر.س', color: 'bg-emerald-500' },
  { service: 'التشبية وإنتاج السلالات العربية الأصيلة', share: 11, amount: '26,950 ر.س', color: 'bg-blue-500' },
]

// Stable Health & Performance Metrics
const horseMetrics = [
  { metric: 'نسبة الجاهزية اللياقية والبدنية للخيول', value: '94%', change: '+3.2%', trend: 'up' },
  { metric: 'معدل التزام برامج التغذية والمكملات', value: '98.5%', change: '+1.1%', trend: 'up' },
  { metric: 'كفاءة تشغيل حظائر الإيواء (Occupancy)', value: '91.3%', change: '+5.4%', trend: 'up' },
  { metric: 'معدل الحالات العضلية الخفيفة تحت المتابعة', value: '2 حالات', change: '-1 حالة', trend: 'down' },
]

export default function DataPage() {
  const [activePeriod, setActivePeriod] = useState<'month' | 'quarter' | 'year'>('quarter')

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
                مركز ذكاء الأعمال والتحليلات
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight font-saudi bg-gradient-to-l from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              التحليلات والمؤشرات الإحصائية
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              لوحة قيادية تنفيذية ترصد معدلات الإشغال، الإيرادات، كفاءة الرعاية البيطرية ومؤشرات الأداء التنافسي.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-border/80 hover:bg-muted/80"
              onClick={() => alert("تم تصدير التقرير التحليلي الإحصائي بصيغة PDF بنجاح")}
            >
              <Download className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden sm:inline">تحميل التقرير الإحصائي</span>
            </Button>
          </div>
        </div>

        {/* 4 Executive High-Impact KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <Card className="border-border/60 bg-gradient-to-br from-card to-card/80 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5c1c5a] to-[#3e1342]" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                متوسط الإشغال الفعلي
              </CardTitle>
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Building2 className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold font-saudi">91.3%</span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                  <TrendingUp className="h-3 w-3" /> +5.4%
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                42 بوكس محجوز من أصل 46
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-gradient-to-br from-card to-card/80 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                العائد لكل بوكس متاح (RevPAB)
              </CardTitle>
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <DollarSign className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold font-saudi">5,326 ر.س</span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                  <TrendingUp className="h-3 w-3" /> +12.8%
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                يشمل الإيواء والرعاية والتدريب
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-gradient-to-br from-card to-card/80 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                مؤشر الصحة والجاهزية
              </CardTitle>
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <HeartPulse className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold font-saudi">97.8%</span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                  <CheckCircle2 className="h-3 w-3" /> ممتاز
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                سجلات طبية مكتملة وتطعيمات مجدولة
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-gradient-to-br from-card to-card/80 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                كفاءة التدريب والبطولات
              </CardTitle>
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Award className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold font-saudi">88.4%</span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                  <TrendingUp className="h-3 w-3" /> +4.2%
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                حصد 7 كؤوس وميداليات في الربع الأول
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 2-Column Analytics Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Visual Chart: Monthly Occupancy & Performance */}
          <Card className="lg:col-span-2 border-border/60 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="font-saudi text-lg">منحنى نمو الإشغال والإيرادات التراكمي</CardTitle>
                <CardDescription>
                  رصد تطور نسبة إشغال البوكسات والإيرادات المحققة خلال آخر 6 أشهر
                </CardDescription>
              </div>
              <Badge variant="outline" className="bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30 text-xs">
                موسم البطولات الحالي
              </Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Custom SVG CSS Bar Graph */}
              <div className="space-y-4 pt-2">
                {monthlyOccupancy.map((item) => (
                  <div key={item.month} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground w-12">{item.month}</span>
                        <span className="text-muted-foreground font-mono">({item.horses} رأس خيل)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-muted-foreground">
                          {item.revenue.toLocaleString()} ر.س
                        </span>
                        <span className="font-bold text-amber-600 dark:text-amber-400 w-10 text-left font-mono">
                          {item.rate}%
                        </span>
                      </div>
                    </div>
                    {/* Visual Bar Track */}
                    <div className="w-full h-3 rounded-full bg-muted/60 overflow-hidden flex">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#3e1342] via-[#5c1c5a] to-amber-500 transition-all duration-500"
                        style={{ width: `${item.rate}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-sm bg-gradient-to-r from-[#3e1342] to-amber-500" />
                    <span>معدل الإشغال الشهري المستهدف: 85%</span>
                  </div>
                </div>
                <span className="font-medium text-foreground">
                  أعلى إشغال: مارس 2024 (94%)
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Service & Revenue Distribution Breakdown */}
          <Card className="border-border/60 shadow-sm flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="font-saudi text-lg">توزيع مصادر الدخل والخدمات</CardTitle>
              <CardDescription>
                حصة كل قطاع تشغيلي من إجمالي الإيرادات
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              {/* Stacked Progress Bar */}
              <div className="w-full h-4 rounded-full overflow-hidden flex shadow-inner">
                {serviceBreakdown.map((item, idx) => (
                  <div
                    key={idx}
                    className={`h-full ${item.color}`}
                    style={{ width: `${item.share}%` }}
                    title={`${item.service}: ${item.share}%`}
                  />
                ))}
              </div>

              {/* Legend List */}
              <div className="space-y-3.5 pt-2">
                {serviceBreakdown.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${item.color} shrink-0`} />
                      <span className="text-foreground font-medium truncate max-w-[170px]">
                        {item.service}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-right font-mono">
                      <span className="font-bold text-foreground">{item.share}%</span>
                      <span className="text-muted-foreground text-[11px]">({item.amount})</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick VIP insight badge */}
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-200 mt-2 flex items-start gap-2">
                <Sparkles className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  يمثل الإيواء الفاخر (VIP) والتدريب التنافسي <strong>74%</strong> من إجمالي هوامش الربحية التشغيلية للمربط.
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Operational Excellence & Veterinary Index Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {horseMetrics.map((metric, idx) => (
            <Card key={idx} className="border-border/60 shadow-sm">
              <CardContent className="p-5 space-y-2">
                <span className="text-xs text-muted-foreground line-clamp-1">
                  {metric.metric}
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-bold font-saudi text-foreground">
                    {metric.value}
                  </span>
                  <Badge
                    variant="outline"
                    className={
                      metric.trend === 'up'
                        ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30 text-[11px]'
                        : 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30 text-[11px]'
                    }
                  >
                    {metric.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
