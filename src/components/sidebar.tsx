'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Sparkles, 
  Warehouse, 
  CalendarDays, 
  DollarSign, 
  Award, 
  Users, 
  Image as ImageIcon, 
  BarChart3, 
  Menu, 
  LogOut,
  type LucideIcon
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from './ui/button';
import { ThemeToggler } from './ThemeToggler';

interface NavRoute {
  href: string;
  label: string;
  icon: LucideIcon;
  badge?: string;
}

const navRoutes: NavRoute[] = [
  { href: '/dashboard', label: 'لوحة التحكم', icon: LayoutDashboard },
  { href: '/horses', label: 'الخيول والأنساب', icon: Sparkles, badge: '74' },
  { href: '/stables', label: 'المرابط والبوكسات', icon: Warehouse },
  { href: '/calender', label: 'التقويم والمواعيد', icon: CalendarDays },
  { href: '/finance', label: 'المالية والفواتير', icon: DollarSign },
  { href: '/programs', label: 'برامج التدريب', icon: Award },
  { href: '/team', label: 'فريق العمل والفرسان', icon: Users },
  { href: '/media', label: 'المستندات والوسائط', icon: ImageIcon },
  { href: '/data', label: 'تحليلات الأداء', icon: BarChart3 },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Fixed Right Sidebar (RTL) */}
      <aside className="fixed inset-y-0 right-0 z-40 hidden sm:flex w-16 lg:w-20 flex-col items-center justify-between border-l border-border bg-card/90 backdrop-blur-xl py-4 shadow-sm">
        
        {/* Top: Brand Monogram & Theme Toggle */}
        <div className="flex flex-col items-center gap-4 w-full">
          <Link 
            href="/" 
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3e1342] via-[#631e5f] to-[#e5b35b] flex items-center justify-center text-[#fce8b8] font-extrabold text-lg shadow-md hover:scale-105 transition-transform"
            title="الصفحة الرئيسية - فرسان"
          >
            ف
          </Link>

          <div className="w-8 h-[1px] bg-border/60" />
        </div>

        {/* Center: Navigation Icons with Tooltips */}
        <TooltipProvider delayDuration={100}>
          <nav className="flex flex-col items-center gap-2 w-full px-2">
            {navRoutes.map((route) => {
              const Icon = route.icon;
              const isActive = pathname === route.href || (route.href !== '/dashboard' && pathname?.startsWith(route.href));

              return (
                <Tooltip key={route.href}>
                  <TooltipTrigger asChild>
                    <Link
                      href={route.href}
                      className={`relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 group ${
                        isActive
                          ? 'bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] text-white dark:from-[#f5c777] dark:to-[#d69534] dark:text-slate-950 shadow-md font-bold'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                      
                      {/* Active Indicator Strip */}
                      {isActive && (
                        <span className="absolute -left-2 top-2 bottom-2 w-1 rounded-r-full bg-amber-400" />
                      )}

                      {/* Small badge dot if exists */}
                      {route.badge && !isActive && (
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500" />
                      )}
                      
                      <span className="sr-only">{route.label}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="font-semibold text-xs py-1.5 px-3 bg-card border border-border shadow-xl">
                    <div className="flex items-center gap-1.5">
                      <span>{route.label}</span>
                      {route.badge && (
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.2 rounded-full font-bold">
                          {route.badge}
                        </span>
                      )}
                    </div>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </nav>
        </TooltipProvider>

        {/* Bottom: Settings & Theme & Avatar */}
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="w-8 h-[1px] bg-border/60" />
          
          <ThemeToggler />

          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/login"
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground hover:bg-muted hover:text-destructive transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="sr-only">تسجيل الخروج</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="left" className="text-xs">تسجيل الخروج</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </aside>

      {/* Mobile Top Bar with Drawer Trigger */}
      <div className="sm:hidden sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur-md px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3e1342] via-[#631e5f] to-[#e5b35b] flex items-center justify-center text-[#fce8b8] font-extrabold text-sm shadow-sm">
            ف
          </div>
          <span className="font-extrabold text-base text-foreground">فرسان | FursanHub</span>
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggler />
          
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="h-9 w-9 rounded-xl">
                <Menu className="h-5 w-5" />
                <span className="sr-only">فتح القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3e1342] via-[#631e5f] to-[#e5b35b] flex items-center justify-center text-[#fce8b8] font-extrabold text-lg">
                    ف
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-foreground">مربط الأصالة الدولي</h3>
                    <span className="text-xs text-muted-foreground">نظام فرسان السحابي</span>
                  </div>
                </div>

                <nav className="space-y-1.5">
                  {navRoutes.map((route) => {
                    const Icon = route.icon;
                    const isActive = pathname === route.href;

                    return (
                      <Link
                        key={route.href}
                        href={route.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-[#3e1342] to-[#5c1c5a] text-white dark:from-[#f5c777] dark:to-[#d69534] dark:text-slate-950 shadow-sm'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="h-4 w-4" />
                          <span>{route.label}</span>
                        </div>
                        {route.badge && (
                          <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                            isActive ? 'bg-white/20 text-white' : 'bg-amber-500/10 text-amber-700 dark:text-amber-300'
                          }`}>
                            {route.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <Button variant="ghost" size="sm" asChild className="text-xs text-destructive">
                  <Link href="/login" onClick={() => setMobileOpen(false)}>
                    <LogOut className="w-3.5 h-3.5 ml-1.5" />
                    تسجيل الخروج
                  </Link>
                </Button>
                <span className="text-[10px] text-muted-foreground">v2.4 Pro</span>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}