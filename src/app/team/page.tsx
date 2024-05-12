"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { File, ListFilter, PlusCircle } from 'lucide-react'
import Sidebar from "@/components/sidebar"
import Link from 'next/link'
import React from 'react'
export default function TeamPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar/>    
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 sm:mr-3">
          <div className="grid mr-9 gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <DogIcon />
                <CardTitle className="text-m font-bold">جميع المستخدمين </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end">
                  <div className="text-2xl font-bold">9</div>
                </div>
                
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                
                <DogIcon />
                <CardTitle className="text-m font-bold">العملاء </CardTitle>
              </CardHeader>
                
              <CardContent>
                <div className="flex justify-end">
                  <div className="text-xs pt-3 text-gray-500 dark:text-gray-400 mr-2">فرد</div>
                  <div className="text-2xl font-bold">16</div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          
          <Tabs defaultValue="all">
            
            <div className="flex justify-center mr-9">              
              <div className="mr-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        تصفية
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel className='text-right'>تصفية بـ</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      الكل
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      الفريق
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      العملاء
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    تصدير
                  </span>
                  <File className="h-3.5 w-3.5" />
                </Button>
                <Button  size="sm" className="h-8 gap-1">
                  
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    <Link href="/team/new">ضافة عضو</Link>
                  </span>
                  <PlusCircle className="h-3.5 w-3.5" />
                </Button>
              </div>
              <TabsList>
                
                
                <TabsTrigger value="yard" className="sm:flex">
                  أخرى
                </TabsTrigger>
                <TabsTrigger value="stal">الفريق</TabsTrigger>
                <TabsTrigger value="mare">العملاء</TabsTrigger>                
                <TabsTrigger value="all">الكل</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent className="mr-9" value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle className='text-center'>المستخدمين</CardTitle>
                  <CardDescription className='text-center'>
                    قم بإدارةجميع المستخدمين واستعرض بياناتهم وتغيير أدوارهم
                  </CardDescription>
                </CardHeader>
                <CardContent >
                  <Table>
                    <TableHeader>
                        <TableRow>                        
                          <TableHead className="text-center">خيارات</TableHead>
                          <TableHead className="text-center">
                            بيانات التواصل
                          </TableHead>                           
                          <TableHead  className="text-center">
                            الدور
                          </TableHead>
                          <TableHead  className="text-center">
                            المستخدم
                          </TableHead>                      
                        </TableRow>
                      </TableHeader>
                    
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    عرض <strong>1-10</strong> من <strong>32</strong>{" "}
                    المستخدمين
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent className="mr-9" value="mare">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle className='text-center'>العملاء</CardTitle>
                  <CardDescription className='text-center'>
                    قم بإدارة بيانات العملاء واستعرض بياناتهم
                  </CardDescription>
                </CardHeader>
                <CardContent >
                  <Table>
                    <TableHeader>
                        <TableRow>                        
                          <TableHead className="text-center">خيارات</TableHead>
                          <TableHead className="text-center">
                            رقم التواصل
                          </TableHead>                           
                          <TableHead  className="text-center">
                            تاريخ الدخول
                          </TableHead>
                          <TableHead  className="text-center">
                            اسم العميل
                          </TableHead>                      
                        </TableRow>
                      </TableHeader>
                    
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    عرض <strong>1-10</strong> من <strong>32</strong>{" "}
                    العملاء
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent className="mr-9" value="stal">
              <Card >
                <CardHeader>
                  <CardTitle className='text-center'>الفريق</CardTitle>
                  <CardDescription className='text-center'>
                    قم بإدارة بيانات الفريق واستعرض بياناتهم
                  </CardDescription>
                </CardHeader>
                <CardContent >
                  <Table>
                    <TableHeader>
                      <TableRow>                        
                        <TableHead className="text-center">خيارات</TableHead>
                        <TableHead className="text-center">
                          رقم الجوال
                        </TableHead>                           
                        <TableHead  className="text-center">
                          الدور
                        </TableHead>
                        <TableHead  className="text-center">
                          اسم العضو
                        </TableHead>                      
                      </TableRow>
                    </TableHeader>
                    
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    عرض <strong>1-10</strong> من <strong>32</strong>{" "}
                    الخيول
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            
          </Tabs>
        </main>
    </div>

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




function HorseHeadIcon() {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round">
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


function DogIcon() {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="33" height="33" viewBox="0 0 1077 983"
      preserveAspectRatio="xMidYMid meet">

      <g transform="translate(0.000000,983.000000) scale(0.100000,-0.100000)"
      fill="#fff4dc" stroke="none">
      <path d="M4650 8953 c-445 -19 -982 -176 -1430 -419 -58 -31 -141 -75 -185
      -97 -44 -22 -98 -54 -120 -70 -39 -28 -42 -29 -129 -23 -146 11 -212 45 -398
      203 -64 55 -82 64 -144 78 -64 15 -76 15 -141 0 -40 -9 -77 -23 -84 -31 -6 -8
      -28 -14 -48 -14 -20 0 -59 -6 -87 -14 -111 -29 -180 -106 -208 -231 -15 -68
      -14 -73 8 -160 43 -164 107 -297 247 -511 106 -161 110 -136 -46 -289 -161
      -157 -208 -235 -250 -413 -14 -58 -16 -99 -11 -205 3 -73 10 -159 16 -192 6
      -33 13 -135 16 -227 9 -247 -15 -366 -113 -563 -52 -104 -110 -180 -211 -277
      -105 -102 -174 -148 -327 -224 -155 -76 -198 -121 -232 -244 -14 -52 -17 -104
      -17 -265 0 -186 2 -207 27 -303 15 -57 35 -121 43 -142 27 -67 117 -178 188
      -231 84 -64 146 -91 381 -169 105 -35 222 -76 260 -93 39 -16 105 -39 148 -50
      70 -18 85 -19 145 -8 119 23 184 83 274 251 67 127 112 186 217 290 89 89 120
      112 191 147 143 69 170 74 387 74 210 -1 298 8 446 45 145 36 220 68 316 131
      153 101 279 248 354 413 41 90 94 306 108 442 11 108 14 115 51 165 70 92 190
      198 263 233 60 29 78 32 142 31 106 -3 189 -38 308 -132 146 -116 291 -296
      406 -504 115 -210 217 -479 238 -628 29 -208 2 -453 -85 -767 -19 -69 -50
      -181 -69 -250 -114 -414 -199 -791 -234 -1040 -42 -307 -46 -370 -45 -715 1
      -417 21 -621 79 -822 22 -74 95 -146 173 -170 117 -35 222 -12 301 67 68 68
      88 135 107 350 18 213 30 291 64 425 85 327 266 681 503 979 264 332 551 605
      1307 1246 720 610 1053 933 1353 1312 101 127 273 377 349 503 139 234 272
      528 306 675 17 70 17 80 2 146 -39 171 -174 251 -425 252 -90 1 -151 9 -327
      42 -238 45 -650 223 -983 425 -176 107 -497 320 -760 506 -255 180 -652 444
      -810 538 -427 256 -860 423 -1275 492 -105 17 -396 42 -445 37 -11 -1 -49 -3
      -85 -5z m317 -602 c26 -5 86 -14 133 -21 236 -33 534 -137 810 -282 103 -54
      289 -163 455 -267 71 -44 594 -401 645 -441 19 -15 130 -91 245 -170 666 -453
      1084 -657 1602 -781 l181 -43 -46 -86 c-116 -218 -316 -500 -503 -711 -209
      -236 -621 -629 -949 -904 -52 -44 -97 -82 -100 -85 -3 -3 -32 -28 -65 -55 -33
      -28 -62 -52 -65 -55 -3 -3 -32 -28 -65 -55 -33 -28 -73 -62 -90 -76 -16 -15
      -100 -86 -185 -160 -85 -73 -157 -136 -160 -139 -3 -3 -41 -37 -85 -75 -69
      -61 -188 -173 -330 -312 -118 -115 -251 -262 -354 -388 -40 -49 -75 -91 -76
      -93 -1 -1 10 44 25 100 15 57 47 175 70 263 24 88 52 192 62 230 85 311 105
      401 133 625 19 147 19 235 0 363 -66 440 -247 866 -529 1241 -135 179 -271
      312 -438 427 -118 80 -210 122 -353 161 -104 27 -136 32 -240 31 -370 -1 -686
      -202 -963 -614 -62 -91 -79 -154 -92 -343 -18 -244 -83 -372 -228 -445 -84
      -42 -157 -52 -406 -55 -219 -3 -222 -3 -366 -40 -229 -60 -357 -123 -530 -263
      -109 -89 -202 -191 -303 -334 l-47 -67 -121 39 c-167 53 -259 90 -268 108 -5
      9 -11 56 -13 104 l-4 88 80 49 c278 167 513 415 650 684 48 93 112 284 146
      434 43 193 46 450 5 706 -8 55 -15 125 -15 156 l0 57 78 74 c201 192 310 363
      357 557 15 62 16 82 6 135 -7 34 -21 79 -32 101 l-20 39 23 -8 c13 -3 84 -9
      158 -12 121 -4 146 -2 238 21 90 22 120 35 229 102 421 256 822 416 1163 464
      47 7 103 16 125 20 56 11 364 12 422 1z"/>
      </g>
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









function ShareIcon() {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}



function TrashIcon() {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
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

function EyeIcon() {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function FileEditIcon() {
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
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  )
}