'use client';
import { ThemeToggler } from '@/components/ThemeToggler';
import Sidebar from '@/components/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react'

export default function DashboardPage() {
  const session = useSession({
    required: true,
    onUnauthenticated(){
      redirect('/login');
    },
  });
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className='text-center'>{session?.data?.user?.email}</div>
      <button onClick={()=>signOut()}>تسجيل الخروج</button>      
      <Sidebar/>
      <main className="flex mr-10 min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 sm:mr-12">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <DogIcon />
                <CardTitle className="text-m font-bold">عدد الخيول</CardTitle>
              </CardHeader>
                
              <CardContent>
                <div className="flex justify-end">
                  <div className="text-xs pt-3 text-gray-500 dark:text-gray-400 mr-2">خيل</div>
                  <div className="text-2xl font-bold">70</div>
                </div>
                <div className="flex justify-end">
                    <p className="text-xs text-gray-500 dark:text-gray-400">خيول جديدة خلال اخر 30 يوم</p>
                    <p className="text-xs text-right mr-3 justify-end text-green-500 dark:text-green-400 ml-2">+10</p>
                </div>
                
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                
                <DollarSignIcon  />
                <CardTitle className="text-m font-bold">المصروفات</CardTitle>
              </CardHeader>
                
              <CardContent>
                <div className="flex justify-end">
                  <div className="text-xs pt-3 text-gray-500 dark:text-gray-400 mr-2">ريال</div>
                  <div className="text-2xl font-bold">9,049</div>
                </div>
                <div className="flex justify-end">
                    <p className="text-xs text-gray-500 dark:text-gray-400">مصاريف خلال اخر 30 يوم</p>
                    <p className="text-xs text-right mr-3 justify-end text-red-500 dark:text-red-400 ml-2">-2,300</p>
                </div>
                
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                
                <DogIcon />
                <CardTitle className="text-m font-bold">المخزون </CardTitle>
              </CardHeader>
                
              <CardContent>
                <div className="flex justify-end">
                  <div className="text-xs pt-3 text-gray-500 dark:text-gray-400 mr-2">كيس علف</div>
                  <div className="text-2xl font-bold">946</div>
                </div>
                <div className="flex justify-end">
                    <p className="text-xs text-gray-500 dark:text-gray-400">خيول جديدة خلال اخر 30 يوم</p>
                    <p className="text-xs text-right mr-3 justify-end text-green-500 dark:text-green-400 ml-2">+10</p>
                </div>
                
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <UsersIcon />
                <CardTitle className="text-m font-bold">العملاء</CardTitle>
                     
                
              </CardHeader>
              <CardContent>
                <div className="flex mt-2 justify-end">
                  <div className="text-xs pt-3 text-gray-500 dark:text-gray-400 mr-2">عميل</div>
                  <div className="text-2xl font-bold">20</div>
                </div>
                <div className="flex justify-end">
                    <p className="text-xs text-gray-500 dark:text-gray-400">عملاء جدد خلال اخر 30 يوم</p>
                    <p className="text-xs text-right mr-3 justify-end text-green-500 dark:text-green-400 ml-2">+6</p>
                </div>
      
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <DollarSignIcon  />
                <CardTitle className="text-m font-bold">الإيرادات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end">
                  <div className="text-2xl font-bold">SAR 2,231.89</div>
                </div>
                <div className="flex justify-end">
                
                  <p className="text-xs mr-1 text-gray-500 dark:text-gray-400">خلال اخر 30 يوم</p>
                  <p className="text-xs text-green-500 dark:text-green-400">+20.1%</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CalendarDaysIcon />
                <CardTitle className="text-m font-medium">الحجوزات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex  justify-end">
                  <div className="text-xs pt-3 text-gray-500 dark:text-gray-400 mr-2">حجز</div>
                  <div className="text-2xl font-bold">20</div>
                </div>
                <div className="flex justify-end">
                    <p className="text-xs text-gray-500 dark:text-gray-400">حجوزات خلال اخر 30 يوم</p>
                    <p className="text-xs text-right mr-1 justify-end text-green-500 dark:text-green-400 ml-1">+6</p>
                </div>
      
              </CardContent>
            </Card>
          </div>         
          
          <div className="grid gap-4 md:grid-cols-2">
            <Card >
              <CardHeader >
                <CardTitle className="text-right">فعاليات قادمة</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-right">الحضور</TableHead>
                      <TableHead className="text-right">التاريخ</TableHead>
                      <TableHead className="text-right">الفعالية</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                    <TableCell>
                        <div className="flex items-center ">
                          <Avatar className="ml-1">
                            <AvatarImage alt="Avatar" src="#" />
                            <AvatarFallback>مشاري</AvatarFallback>
                          </Avatar>
                          <Avatar className="ml-1"> 
                            <AvatarImage alt="Avatar" src="/#" />
                            <AvatarFallback>يزن</AvatarFallback>
                          </Avatar>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">مايو 15, 2024</TableCell>
                      
                      <TableCell className="font-medium text-right">دورة ادارة الخيل بالطائف</TableCell>
                      
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center">
                          <Avatar className="ml-1">
                            <AvatarImage alt="Avatar" src="/#" />
                            <AvatarFallback>باسم</AvatarFallback>
                          </Avatar>
                          <Avatar className="ml-1 ">
                            <AvatarImage alt="Avatar" src="/#" />
                            <AvatarFallback>ريان</AvatarFallback>
                          </Avatar>
                          
                        </div>
                      </TableCell>
                      <TableCell className="text-right">يونيو 1, 2024</TableCell>
                      <TableCell className="font-medium text-right"> اسطبل المنار</TableCell>
                     
                      
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-right">أحدث الخيول القادمة</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-center">تاريخ القدوم</TableHead>
                      <TableHead className="text-center">النوع</TableHead>
                      <TableHead className="text-center">الخيل</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>ابريل 20, 2024</TableCell>
                      
                      <TableCell className="text-center">جزيري</TableCell>
                      <TableCell className="font-medium">
                        <div className="flex justify-end mr-4 gap-2">
                         <span>سبحة</span>                              
                        </div>
                      </TableCell>
                      
                    </TableRow>
                    <TableRow>
                      <TableCell>April 15, 2023</TableCell>
                      <TableCell className="text-center">انجليزي</TableCell>
                      
                      <TableCell className="font-medium">
                        <div className="flex justify-end mr-4">
                           <span>كونيت</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <div className="relative group">
                <img
                  alt="Horse Image"
                  className="aspect-[3/2] object-cover rounded-t-lg w-full"
                  height={400}
                  src="https://i.ibb.co/wggsk6x/dragon.png"
                  width={600}
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    className="bg-gray-900 text-gray-50 hover:bg-gray-900/80 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80"
                    size="icon"
                    variant="ghost"
                  >
                    <EyeIcon />
                    <span className="sr-only">عرض</span>
                  </Button>
                  <Button
                    className="bg-gray-900 text-gray-50 hover:bg-gray-900/80 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80"
                    size="icon"
                    variant="ghost"
                  >
                    <FileEditIcon />
                    <span className="sr-only">تعديل</span>
                  </Button>
                  <Button
                    className="bg-gray-900 text-gray-50 hover:bg-gray-900/80 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80"
                    size="icon"
                    variant="ghost"
                  >
                    <TrashIcon />
                    <span className="sr-only">إزالة من القائمة</span>
                  </Button>
                  <Button
                    className="bg-gray-900 text-gray-50 hover:bg-gray-900/80 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80"
                    size="icon"
                    variant="ghost"
                  >
                    <ShareIcon />
                    <span className="sr-only">مشاركة</span>
                  </Button>
                </div>
              </div>
              <CardContent className="flex justify-start">
                <CardTitle >سفير</CardTitle>
                </CardContent>
            </Card>
            <Card>
              <div className="relative group">
                <img
                  alt="Horse Image"
                  className="aspect-[3/2] object-cover rounded-t-lg w-full"
                  height={400}
                  src="https://i.ibb.co/wggsk6x/dragon.png"
                  width={600}
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    className="bg-gray-900 text-gray-50 hover:bg-gray-900/80 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80"
                    size="icon"
                    variant="ghost"
                  >
                    <EyeIcon />
                    <span className="sr-only">View</span>
                  </Button>
                  <Button
                    className="bg-gray-900 text-gray-50 hover:bg-gray-900/80 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80"
                    size="icon"
                    variant="ghost"
                  />
                </div>
              </div>
            </Card>
          </div>
        </main>
      
    </div>
  )
}

DashboardPage.requireAuth = true


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