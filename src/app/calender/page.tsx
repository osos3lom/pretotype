'use client';

import React from 'react';
import Sidebar from '@/components/sidebar';
import FursanCalendar from '@/components/calender/index';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, Sparkles, MapPin } from 'lucide-react';

export default function CalenderPage() {
  return (
    <div className="flex min-h-screen w-full bg-muted/30">
      <Sidebar />

      {/* Main Workspace Canvas with native RTL right-sidebar offset */}
      <main className="flex-1 sm:mr-16 lg:mr-20 p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-border shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-semibold text-muted-foreground">التقويم والجدولة الذكية • الميادين وحصص التدريب</span>
            </div>
            <h1 className="font-saudi text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              التقويم والمواعيد الميدانية
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              تنظيم ساحات الركوب، كشوفات البيطرة، ومواعيد تدريب الفرسان بدقة لمنع التضارب.
            </p>
          </div>
        </div>

        {/* 4 Schedule Summary Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground block">مواعيد اليوم</span>
                <div className="text-2xl font-extrabold text-foreground mt-0.5">14 <span className="text-xs font-normal">موعد</span></div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-700 dark:text-purple-300">
                <CalendarDays className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground block">حصص قفز الحواجز</span>
                <div className="text-2xl font-extrabold text-foreground mt-0.5">6 <span className="text-xs font-normal">حصص</span></div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Sparkles className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground block">كشوفات بيطرية</span>
                <div className="text-2xl font-extrabold text-foreground mt-0.5">3 <span className="text-xs font-normal">حالات</span></div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/15 flex items-center justify-center text-rose-500">
                <Clock className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground block">صيانة الميادين</span>
                <div className="text-2xl font-extrabold text-foreground mt-0.5">2 <span className="text-xs font-normal">ميدان</span></div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-600">
                <MapPin className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The Calendar Interactive Core */}
        <FursanCalendar />

      </main>
    </div>
  );
}