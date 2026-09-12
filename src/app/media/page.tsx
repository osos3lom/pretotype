import Sidebar from '@/components/sidebar'
import TableWrapper from '@/components/table/TableWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, ShieldCheck, HardDrive, Award } from 'lucide-react'

export default function MediaPage() {

  return (
    <div className="flex min-h-screen w-full flex-col bg-background selection:bg-amber-500/20">
      <Sidebar />
      <main className="flex-1 sm:mr-16 lg:mr-20 p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
        {/* Page Header */}
        <div className="flex flex-col gap-2 pb-2 border-b border-border/60">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              خزينة الوثائق الرقمية والوسائط
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight font-saudi bg-gradient-to-l from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            المستندات، الشهادات والوسائط
          </h1>
          <p className="text-sm text-muted-foreground">
            أرشيف إلكتروني متكامل لشهادات منظمة الواهو (WAHO)، الفحوصات البيطرية، عقود الإيواء والتشبية، والتقارير الرسمية.
          </p>
        </div>

        {/* 4 KPIs for Document Vault */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <Card className="border-border/60 bg-gradient-to-br from-card to-card/80 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5c1c5a] to-[#3e1342]" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                إجمالي الوثائق
              </CardTitle>
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <FileText className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-saudi">142</div>
              <p className="text-[11px] text-muted-foreground mt-1">
                شهادات، تقارير وعقود معتمدة
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-gradient-to-br from-card to-card/80 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                شهادات WAHO الدولية
              </CardTitle>
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Award className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-saudi">38</div>
              <p className="text-[11px] text-muted-foreground mt-1">
                موثقة ومطابقة للأنساب العربية
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-gradient-to-br from-card to-card/80 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                السجلات الطبية والأشعة
              </CardTitle>
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-saudi">64</div>
              <p className="text-[11px] text-muted-foreground mt-1">
                تطعيمات، تحاليل، وتقارير دورية
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-gradient-to-br from-card to-card/80 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                المساحة التخزينية المستهلكة
              </CardTitle>
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <HardDrive className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-saudi">4.8 GB</div>
              <p className="text-[11px] text-muted-foreground mt-1">
                من أصل 50 GB سحابية مؤمّنة
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Document Table & Actions */}
        <TableWrapper />
      </main>
    </div>
  )
}
