'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeToggler } from './ThemeToggler';
import { Button } from "./ui/button";
import { 
  Menu, 
  X, 
  LayoutDashboard,
  Sparkles,
  ArrowLeft
} from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  badge?: string;
}

const navItems: NavItem[] = [
  {
    href: "#interactive-simulator",
    label: "العرض التفاعلي",
    badge: "محاكاة حية"
  },
  {
    href: "#features-spotlight",
    label: "منظومة المرابط"
  },
  {
    href: "#pricing-calculator",
    label: "حاسبة التوفير والعائد"
  },
  {
    href: "#testimonials",
    label: "آراء النخبة"
  }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-xl transition-all">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo & Heritage Emblem */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-burgundy border border-accent/40 flex items-center justify-center text-accent font-saudi font-extrabold text-2xl shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-accent/70 glow-burgundy">
            <span>ف</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-saudi font-bold text-xl sm:text-2xl tracking-tight text-foreground">
                فرسان
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-primary dark:text-accent bg-accent/20 dark:bg-accent/15 px-1.5 py-0.5 rounded border border-accent/30">
                HUB
              </span>
            </div>
            <span className="text-[11px] text-muted-foreground font-medium -mt-0.5 hidden sm:inline">
              المنظومة القيادية لإدارة المرابط والاسطبلات
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3.5 py-2 rounded-xl text-xs lg:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all flex items-center gap-1.5"
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[10px] bg-accent/30 text-foreground dark:text-accent px-2 py-0.5 rounded-full font-semibold border border-accent/40">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Action Controls & Primary CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggler />

          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden sm:inline-flex text-xs font-semibold text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link href="/login">
              تسجيل الدخول
            </Link>
          </Button>

          <Button 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-accent dark:text-accent-foreground dark:hover:bg-accent/90 font-bold text-xs sm:text-sm px-4 sm:px-5 h-9 sm:h-10 rounded-xl shadow-sm border border-accent/30 gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
            asChild
          >
            <Link href="/dashboard">
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">لوحة التحكم</span>
              <span className="sm:hidden">اللوحة</span>
            </Link>
          </Button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-border text-foreground hover:bg-muted transition-colors"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/98 backdrop-blur-2xl px-5 py-6 space-y-4 animate-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-foreground hover:bg-muted transition-all flex items-center justify-between"
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] bg-accent/30 text-foreground dark:text-accent px-2 py-0.5 rounded-full font-bold border border-accent/40">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-border flex flex-col gap-2.5">
            <Button className="w-full bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground font-bold rounded-xl h-11" asChild>
              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <LayoutDashboard className="w-4 h-4 ml-2" />
                فتح لوحة التحكم المباشرة
              </Link>
            </Button>
            <Button variant="outline" className="w-full font-medium rounded-xl h-10 border-border" asChild>
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                تسجيل الدخول
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
