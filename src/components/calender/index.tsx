'use client';

import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import type { EventClickArg } from '@fullcalendar/core';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
  allDay?: boolean;
  backgroundColor?: string;
  borderColor?: string;
}

const initialEvents: CalendarEvent[] = [
  { id: '1', title: 'تدريب قفز حواجز - صقر الجزيرة (الميدان 1)', start: '2026-09-12T09:00:00', end: '2026-09-12T10:30:00', backgroundColor: '#3e1342', borderColor: '#e5b35b' },
  { id: '2', title: 'كشف بيطري دوري - سفيرة الوادي', start: '2026-09-12T11:00:00', end: '2026-09-12T12:00:00', backgroundColor: '#e5b35b', borderColor: '#3e1342' },
  { id: '3', title: 'حصة دريساج - كحيلان الشامخ', start: '2026-09-12T16:30:00', end: '2026-09-12T17:30:00', backgroundColor: '#3e1342', borderColor: '#e5b35b' },
  { id: '4', title: 'تعقيم ونظافة جناح الأفراس (B)', start: '2026-09-13T08:00:00', end: '2026-09-13T10:00:00', backgroundColor: '#4a154b', borderColor: '#e5b35b' },
  { id: '5', title: 'فحص الحافر وتركيب حذوات - برقان العز', start: '2026-09-14T15:00:00', end: '2026-09-14T16:30:00', backgroundColor: '#e5b35b', borderColor: '#3e1342' },
  { id: '6', title: 'سباق التحمل التجريبي 10كم', start: '2026-09-15T06:00:00', end: '2026-09-15T09:00:00', backgroundColor: '#3e1342', borderColor: '#e5b35b' },
];

export default function FursanCalendar() {
  const [events, setEvents] = useState<CalendarEvent[]>(initialEvents);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const [newEvent, setNewEvent] = useState({
    title: '',
    horse: 'صقر الجزيرة',
    arena: 'الميدان الملكي المغطى',
    date: '2026-09-12',
    time: '16:00',
    type: 'تدريب'
  });

  const handleDateClick = (arg: { dateStr: string }) => {
    setNewEvent((prev) => ({ ...prev, date: arg.dateStr }));
    setIsAddModalOpen(true);
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    setSelectedEventId(clickInfo.event.id);
    setIsDeleteModalOpen(true);
  };

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEvent.title) return;

    const startDateTime = `${newEvent.date}T${newEvent.time}:00`;
    const created: CalendarEvent = {
      id: String(Date.now()),
      title: `${newEvent.title} - ${newEvent.horse} (${newEvent.arena})`,
      start: startDateTime,
      backgroundColor: newEvent.type === 'تدريب' ? '#3e1342' : '#e5b35b',
      borderColor: '#e5b35b'
    };

    setEvents([...events, created]);
    setIsAddModalOpen(false);
    setNewEvent({ title: '', horse: 'صقر الجزيرة', arena: 'الميدان الملكي المغطى', date: '2026-09-12', time: '16:00', type: 'تدريب' });
  };

  const handleDeleteEvent = () => {
    if (selectedEventId) {
      setEvents(events.filter((e) => e.id !== selectedEventId));
      setIsDeleteModalOpen(false);
      setSelectedEventId(null);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-card p-4 rounded-2xl border border-border shadow-sm">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30">
            مواعيد شهر سبتمبر 2026
          </Badge>
          <span className="text-xs text-muted-foreground">• اضغط على أي تاريخ لإضافة موعد فوري</span>
        </div>

        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] hover:from-[#4e1853] hover:to-[#6d216b] text-white dark:from-[#f5c777] dark:to-[#d69534] dark:text-slate-950 font-bold text-xs rounded-xl h-9 gap-1.5 shadow-md">
              <Plus className="w-3.5 h-3.5" />
              حجز موعد / حصة تدريب
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <form onSubmit={handleCreateEvent}>
              <DialogHeader>
                <DialogTitle className="font-saudi text-xl">جدولة موعد في التقويم</DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground">
                  أدخل تفاصيل الحصة أو الكشف البيطري لربطه بجدول الميدان والخيل.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-3 py-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-foreground">عنوان الفعالية / الموعد:</label>
                  <Input
                    required
                    placeholder="مثال: حصة قفز حواجز متقدمة"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    className="rounded-xl text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-foreground">الخيل المشارك:</label>
                    <Input
                      placeholder="صقر الجزيرة"
                      value={newEvent.horse}
                      onChange={(e) => setNewEvent({ ...newEvent, horse: e.target.value })}
                      className="rounded-xl text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-foreground">نوع الموعد:</label>
                    <select
                      value={newEvent.type}
                      onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                      className="w-full h-9 rounded-xl border border-input bg-background px-3 py-1 text-xs focus:ring-2 focus:ring-primary outline-none"
                    >
                      <option value="تدريب">تدريب فروسية</option>
                      <option value="بيطري">كشف ورعاية بيطرية</option>
                      <option value="صيانة">صيانة الميدان</option>
                      <option value="بطولة">مسابقة وبطولة</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-foreground">الميدان / الحلبة:</label>
                  <Input
                    placeholder="الميدان الملكي المغطى"
                    value={newEvent.arena}
                    onChange={(e) => setNewEvent({ ...newEvent, arena: e.target.value })}
                    className="rounded-xl text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-foreground">التاريخ:</label>
                    <Input
                      type="date"
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                      className="rounded-xl text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-foreground">الوقت:</label>
                    <Input
                      type="time"
                      value={newEvent.time}
                      onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                      className="rounded-xl text-xs"
                    />
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button type="button" variant="outline" size="sm" onClick={() => setIsAddModalOpen(false)} className="rounded-xl text-xs">
                  إلغاء
                </Button>
                <Button type="submit" size="sm" className="bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] text-white dark:from-[#f5c777] dark:to-[#d69534] dark:text-slate-950 font-bold rounded-xl text-xs">
                  تثبيت الموعد
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Main Calendar Viewport */}
      <Card className="rounded-3xl border-border p-4 sm:p-6 shadow-sm overflow-hidden bg-card">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: 'prev,next today',
            center: 'title',
            end: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          events={events as any}
          editable={true}
          selectable={true}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          height="auto"
          locale="ar"
          direction="rtl"
        />
      </Card>

      {/* Delete Event Confirmation Modal */}
      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-base font-bold text-foreground">حذف الموعد</DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              هل أنت متأكد من رغبتك في حذف هذا الموعد من التقويم والمزامنة؟
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" size="sm" onClick={() => setIsDeleteModalOpen(false)} className="rounded-xl text-xs">
              تراجع
            </Button>
            <Button variant="destructive" size="sm" onClick={handleDeleteEvent} className="rounded-xl text-xs">
              حذف الموعد
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
}
