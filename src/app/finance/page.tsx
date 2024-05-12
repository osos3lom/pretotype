'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';

export default function FinancePage() {
  const session = useSession({
    required: true,
    onUnauthenticated(){
      redirect('/login');
    },
  });

  return(
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
    <div className='text-center'>{session?.data?.user?.email}</div>
    <button onClick={()=>signOut()}>تسجيل الخروج</button>      
    <Sidebar/>
    
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 sm:mr-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    
            <Card >
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <DollarSignIcon  />
                <CardTitle className="text-sm font-medium">إيرادات الشهر</CardTitle>
                
              </CardHeader>
              <CardContent>
                <div className="text-2xl text-center font-bold">SAR45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% من الشهر السابق</p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <UsersIcon />
                <CardTitle className="text-sm font-medium">الإشتراكات</CardTitle>
                
              </CardHeader>
              <CardContent>
                <div className="text-2xl text-center font-bold">+23</div>
                <p className="text-xs text-muted-foreground">+180.1% التغير مقارنة بالشهر السابق بنسبة</p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CreditCardIcon  />
                <CardTitle className="text-sm font-medium">الأرباح</CardTitle>
                
              </CardHeader>
              <CardContent>
                <div className="text-2xl text-center font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">+19% التغير مقارنة بالشهر السابق بنسب</p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <ActivityIcon  />
                <CardTitle className="text-sm font-medium">الرصيد</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl text-center font-bold">SAR369,000</div>
              </CardContent>
            </Card>
          
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          
          <Card>
            <CardHeader>
              <CardTitle className='text-center'>اخر المبيعات</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex justify-end gap-4">
                <div className="mr-auto text-right font-medium">+SAR1,999.00</div>
                
                <div className="grid gap-1">
                  <p className="text-sm text-right font-medium leading-none">أحمد الزول</p>
                  <p className="text-sm text-muted-foreground">0569456637</p>
                </div>
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage alt="Avatar" src="/" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center gap-4">
                <div className="mr-auto font-medium">+SAR39.00</div>
                <div className="grid gap-1">
                  <p className="text-sm text-right font-medium leading-none">خالد الفوزان</p>
                  <p className="text-sm text-muted-foreground">0549857947</p>
                </div>
                <Avatar className=" h-9 w-9 sm:flex">
                  <AvatarImage alt="Avatar" src="/" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center gap-4">
                <div className="mr-auto font-medium">+SAR39.00</div>
                <div className="grid gap-1">
                  <p className="text-sm text-right font-medium leading-none">أم محمد </p>
                  <p className="text-sm text-muted-foreground">0549857947</p>
                </div>
                <Avatar className=" h-9 w-9 sm:flex">
                  <AvatarImage alt="Avatar" src="/" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center gap-4">
                <div className="mr-auto font-medium">+SAR39.00</div>
                <div className="grid gap-1">
                  <p className="text-sm text-right font-medium leading-none">مصطفى المصري</p>
                  <p className="text-sm text-muted-foreground">0549857947</p>
                </div>
                <Avatar className=" h-9 w-9 sm:flex">
                  <AvatarImage alt="Avatar" src="/" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center gap-4">
                <div className="mr-auto font-medium">+$39.00</div>
              
                
                <div className="grid gap-1">
                  <p className="text-sm text-right font-medium leading-none"> صوفيا ديفس</p>
                  <p className="text-sm text-muted-foreground">0648393749</p>
                </div>
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage alt="Avatar" src="/" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
            <Button asChild className="mr-auto gap-1" size="sm">
                <Link href="#">
                  عرض الكل
                  <ArrowUpRightIcon />
                </Link>
              </Button>
              <div className="grid gap-2">
                <CardTitle className='text-center'>العمليات</CardTitle>
                <CardDescription>اخر العمليات المالية</CardDescription>
              </div>
              
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-left">المبلغ</TableHead>
                    <TableHead className="text-center ">النوع</TableHead>
                    <TableHead className="text-center ">التاريخ</TableHead>
                    <TableHead className=" text-center">الحالة</TableHead>
                    <TableHead className='text-center'>العميل</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-left">SAR250.00</TableCell>
                    <TableCell className="text-center">إيجار</TableCell>
                    <TableCell className="text-center">2023-06-23</TableCell>
                    <TableCell className="text-center">
                      <Badge className="text-xs" variant="outline">
                        مقبولة
                      </Badge>
                    </TableCell>    
                    <TableCell>
                      <div className="font-medium text-right">حسان البلول</div>
                      <div className="text-sm text-right text-muted-foreground ">0583729837</div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-left">SAR150.00</TableCell>
                  
                    
                    <TableCell className="text-center">استرجاع</TableCell>
                    <TableCell className="text-center">2023-06-24</TableCell>
                    <TableCell className="text-center">
                      <Badge className="text-xs" variant="outline">
                        مرفوضة
                      </Badge>
                    </TableCell>
                    
                    <TableCell>
                      <div className="font-medium text-right">سوسن المرقاني</div>
                      <div className="text-sm text-muted-foreground text-right">054683586</div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-left">SAR250.00</TableCell>
                    <TableCell className="text-center">إيجار</TableCell>
                    <TableCell className="text-center">2023-06-23</TableCell>
                    <TableCell className="text-center">
                      <Badge className="text-xs" variant="outline">
                        مقبولة
                      </Badge>
                    </TableCell>    
                    <TableCell>
                      <div className="font-medium text-right">محمد المرداني</div>
                      <div className="text-sm text-right text-muted-foreground ">0583729837</div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-left">SAR250.00</TableCell>
                    <TableCell className="text-center">إيجار</TableCell>
                    <TableCell className="text-center">2023-06-23</TableCell>
                    <TableCell className="text-center">
                      <Badge className="text-xs" variant="outline">
                        مقبولة
                      </Badge>
                    </TableCell>    
                    <TableCell>
                      <div className="font-medium text-right">خالد بدر</div>
                      <div className="text-sm text-right text-muted-foreground ">0583729837</div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-left">SAR250.00</TableCell>
                    <TableCell className="text-center">إيجار</TableCell>
                    <TableCell className="text-center">2023-06-23</TableCell>
                    <TableCell className="text-center">
                      <Badge className="text-xs" variant="outline">
                        مقبولة
                      </Badge>
                    </TableCell>    
                    <TableCell>
                      <div className="font-medium text-right">سامي الزول</div>
                      <div className="text-sm text-right text-muted-foreground ">0583729837</div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
FinancePage.requireAuth = true



function ActivityIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}


function ArrowUpRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}



function CreditCardIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function LineChartIcon() {
  return (
    <svg
      
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}


function MediaIcon() {
  return (
    <svg
      
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 60 60"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g transform="translate(0,45) scale(0.100000,-0.100000)">
      <path d="M320 430 c-14 -11 -32 -20 -40 -20 -24 0 -40 -21 -40 -50 0 -29 16
      -50 38 -50 8 0 27 -10 44 -21 19 -14 33 -18 39 -12 13 13 7 165 -6 169 -5 2
      -21 -5 -35 -16z m20 -69 l0 -38 -35 11 c-44 14 -45 38 -2 53 17 5 33 11 35 12
      1 0 2 -16 2 -38z"/>
      <path d="M403 360 c0 -39 4 -59 11 -57 19 6 31 55 20 84 -17 49 -31 37 -31
      -27z"/>
      <path d="M56 364 c-23 -22 -23 -216 0 -238 21 -22 144 -23 144 -1 0 10 -16 15
      -62 17 l-63 3 0 100 0 100 73 3 c55 2 72 6 72 17 0 22 -142 21 -164 -1z"/>
      <path d="M130 245 c0 -32 4 -55 11 -55 17 0 89 44 89 55 0 11 -72 55 -89 55
      -7 0 -11 -23 -11 -55z"/>
      <path d="M280 256 c0 -26 4 -36 16 -36 11 0 14 8 12 32 -4 46 -28 49 -28 4z"/>
      <path d="M232 188 c-16 -16 -16 -120 0 -136 7 -7 43 -12 93 -12 50 0 86 5 93
      12 16 16 16 120 0 136 -16 16 -170 16 -186 0z m134 -43 c-36 -22 -42 -22 -65
      -10 -60 33 -58 35 24 35 l80 -1 -39 -24z m-3 -36 l37 23 0 -31 0 -31 -75 0
      -75 0 0 30 0 31 38 -23 39 -22 36 23z"/>
      </g>
    </svg>
  )
}


function Users2Icon() {
  return (
    <svg
     
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 19a6 6 0 0 0-12 0" />
      <circle cx="8" cy="9" r="4" />
      <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" />
    </svg>
  )
}



function ProgramsIcon() {
  return (
    <svg
      
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
    <g transform="translate(0,25) scale(0.025,-0.025)">
      <path d="M386 944 c-171 -41 -308 -192 -338 -371 -51 -303 217 -573 521 -526
      96 15 171 52 242 119 72 69 113 139 134 225 26 113 17 203 -32 306 -21 46 -27
      53 -39 41 -11 -11 -9 -23 13 -78 37 -87 39 -226 5 -310 -45 -112 -130 -197
      -242 -242 -43 -17 -75 -22 -150 -22 -75 0 -107 5 -150 22 -112 45 -197 130
      -242 242 -31 78 -31 222 0 300 62 154 197 253 362 267 79 7 175 -15 240 -55
      55 -34 63 -66 26 -101 -24 -22 -27 -23 -43 -9 -52 45 -107 63 -193 62 -100 0
      -161 -24 -225 -89 -65 -65 -89 -125 -89 -225 -1 -78 2 -90 33 -148 38 -70 70
      -100 145 -140 43 -22 64 -26 136 -26 72 0 93 4 136 26 76 40 107 70 144 140
      31 56 34 72 35 144 0 65 -5 90 -24 132 -22 47 -26 51 -40 38 -13 -13 -12 -20
      5 -58 29 -65 26 -169 -8 -233 -65 -124 -198 -180 -333 -141 -110 32 -195 148
      -195 266 0 118 85 234 195 266 74 21 145 14 214 -20 28 -15 51 -29 51 -33 0
      -4 -14 -21 -31 -39 l-31 -32 -42 19 c-55 25 -102 24 -156 -3 -132 -67 -132
      -249 0 -315 101 -52 215 -4 251 104 11 33 8 108 -5 121 -14 13 -30 -21 -30
      -66 -2 -142 -174 -192 -253 -73 -43 63 -21 148 49 191 46 28 112 25 147 -7 9
      -7 -63 -73 -80 -73 -39 0 -51 -52 -17 -74 22 -14 51 2 56 30 2 10 58 74 125
      142 103 103 126 122 152 122 24 0 42 11 79 50 l48 50 -41 0 -41 0 0 42 0 42
      -39 -38 -39 -38 -54 30 c-103 59 -221 75 -342 46z"/>
      </g>
    </svg>
  )
}
function UsersIcon() {
  return (
    <svg
      
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function DollarSignIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function CalendarDaysIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function HorsesIcon() {
  return (
    <svg      
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="24"
      viewBox="0 0 100 100"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >      
      <g transform="translate(-20,140)scale(0.140000,-0.150000)">
        <path d="M390 919 c-24 -5 -67 -20 -96 -34 -56 -27 -84 -31 -116 -14 -18 10
        -20 9 -14 -7 6 -15 5 -17 -5 -6 -25 23 -27 12 -6 -27 l21 -38 -27 -32 c-23
        -27 -26 -38 -21 -75 9 -63 -10 -110 -63 -155 -39 -33 -45 -42 -39 -65 5 -19
        19 -32 49 -45 l42 -18 36 40 c32 36 41 41 99 48 72 8 100 30 100 79 0 31 58
        90 89 90 34 0 85 -45 113 -99 34 -65 36 -119 8 -216 -12 -39 -23 -110 -25
        -160 -5 -87 -5 -89 8 -45 26 87 52 126 140 210 196 186 254 247 275 290 24 48
        18 59 -28 60 -38 1 -101 33 -224 115 -151 100 -221 123 -316 104z m128 -44
        c29 -9 105 -51 173 -97 67 -44 143 -88 170 -98 27 -9 52 -19 55 -23 12 -11
        -56 -95 -128 -157 -40 -35 -99 -89 -132 -119 -56 -54 -58 -55 -52 -26 28 123
        12 203 -55 279 -50 56 -101 74 -152 52 -40 -16 -77 -60 -77 -90 0 -41 -27 -66
        -72 -66 -48 0 -102 -24 -128 -57 -16 -21 -22 -23 -41 -12 -22 11 -22 12 14 43
        55 48 70 80 72 150 1 48 6 69 23 91 12 15 22 38 22 51 0 19 5 24 24 24 14 0
        41 10 61 21 42 25 110 47 146 48 14 1 49 -6 77 -14z"/>
        </g>
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg
      
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function StablesIcon() {
  return (
    <svg
      
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="26"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >

      <g transform="translate(-3,26.5) scale(0.0300000,-0.0300000)">
      <path d="M305 793 c-105 -81 -193 -152 -197 -157 -4 -6 -8 -116 -8 -244 0
      -258 6 -289 59 -316 45 -24 637 -24 682 0 54 27 59 57 59 321 l0 238 -191 148
      c-106 82 -197 151 -203 153 -7 3 -97 -62 -201 -143z m375 -45 l170 -132 0
      -235 c0 -130 -4 -241 -8 -248 -18 -28 -70 -33 -348 -33 -281 0 -316 4 -336 34
      -4 6 -8 117 -8 247 l0 235 168 132 c92 72 173 131 180 131 7 1 89 -58 182
      -131z"/>
      <path d="M395 654 c-67 -26 -75 -27 -89 -14 -21 17 -60 -5 -50 -28 8 -18 8
      -27 -2 -109 -5 -42 -12 -58 -36 -78 -41 -35 -36 -73 15 -100 l37 -20 23 27
      c15 18 36 29 65 33 43 7 72 33 72 67 0 9 9 22 19 28 16 8 24 4 44 -20 37 -44
      41 -64 22 -139 -21 -86 -17 -174 8 -179 12 -3 17 3 17 19 0 48 42 107 139 197
      94 87 138 148 128 176 -3 7 -23 16 -44 19 -21 4 -70 27 -108 53 -127 85 -179
      99 -260 68z m130 -38 c19 -8 61 -33 95 -56 33 -22 79 -49 102 -59 l41 -17 -37
      -42 c-21 -23 -69 -69 -106 -102 l-67 -59 10 44 c14 61 -3 114 -49 155 -29 25
      -42 30 -63 25 -36 -9 -50 -23 -59 -58 -7 -25 -15 -32 -55 -42 -26 -7 -56 -20
      -66 -29 -35 -32 -44 -7 -11 30 23 27 30 44 30 78 0 27 6 48 15 56 8 7 15 21
      15 31 0 11 6 19 14 19 8 0 33 9 57 20 52 23 88 25 134 6z"/>
      </g>
    </svg>
  )
}


function SettingsIcon() {
  return (
    <svg
      
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function PanelLeftIcon() {
  return (
    <svg
      
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="9" x2="9" y1="3" y2="21" />
    </svg>
  )
}