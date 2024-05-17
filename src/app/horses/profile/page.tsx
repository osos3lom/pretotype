"use client"
import { Badge } from "@/components/ui/badge";
import { CardTitle, CardHeader, CardContent, Card, CardDescription, CardFooter } from "@/components/ui/card";
import Sidebar from '@/components/sidebar';
import Image from "next/image";
import Calender from '@/components/calender/index'
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
export default function HoeseProfilePage() {
    const session = useSession({
        required: true,
        onUnauthenticated(){
          redirect('/login');
        },
      });
   
    

  return (
    <div className="flex flex-col mr-9">
        <div className='text-center'>{session?.data?.user?.email}</div>
      <button onClick={()=>signOut()}>تسجيل الخروج</button>     
        <Sidebar/>
        <div className="flex px-6 gap-3">
        <Card className="w-8/12 dark:bg-muted">
            <div className="w-full max-w-5xl mx-auto px-4 py-10 md:py-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                    <Image
                        alt="Horse"
                        className="w-full h-auto rounded-lg object-cover"
                        height={600}
                        src="https://i.ibb.co/wggsk6x/dragon.png"
                        style={{
                        aspectRatio: "800/600",
                        objectFit: "cover",
                        }}
                        width={800}
                    />
                    </div>
                    <div className="space-y-3">
                        <div>
                            <h1 className="text-4xl text-center font-bold">سفير المشعلية</h1>
                            <p className="text-gray-500 text-center dark:text-gray-400">خيل عربي أصيل</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <div>
                            <p className="text-sm text-gray-500 text-right mr-3 dark:text-gray-400">تاريخ الميلاد</p>
                            <p className="text-right mr-3">مايو 15, 2015</p>
                            </div>
                            <div>
                            <p className="text-sm text-right mr-3 text-gray-500 dark:text-gray-400">اللون</p>
                            <p className="text-right mr-3">أزرق</p>
                            </div>
                            
                            <div>
                            <p className="text-sm text-right mr-3 text-gray-500 dark:text-gray-400">اسم الأم</p>
                            <p className="text-right mr-3">شكلان ليدي</p>
                            </div>
                            <div>
                            <p className="text-sm text-right mr-3 text-gray-500 dark:text-gray-400">اسم الأب</p>
                            <p className="text-right mr-3">وادي الشقب</p>
                            </div>
                            
                            <div>
                            <p className="text-sm text-right mr-3 text-gray-500 dark:text-gray-400">المربي</p>
                            <p className="text-right mr-3">Brunelli Marcello Via Grossetana</p>
                            </div>
                            <div>
                            <p className="text-sm text-right mr-3 text-gray-500 dark:text-gray-400">الطول</p>
                            <div className="flex justify-end mr-3"><p> سم</p> <p > 160</p></div>              
                            </div>
                            <div>
                            <p className="text-sm text-right mr-3 text-gray-500 dark:text-gray-400">السايس</p>
                            <p className="text-right mr-3">حسين</p>
                            </div>
                            <div>
                            <p className="text-sm text-right mr-3 text-gray-500 dark:text-gray-400">رقم الشريحة</p>
                            <p className="text-right mr-3" >SA123456</p>
                            </div>
                            <div className="">
                            <p className="text-sm text-right mr-3 text-gray-500 dark:text-gray-400">البرامج </p>
                            <div className="flex justify-end gap-1"><Badge>تغذية عادية</Badge><Badge>تدريب </Badge><Badge>تشغيل </Badge></div>
                            </div>
                            <div className="">
                            <p className="text-sm text-right mr-3 text-gray-500 dark:text-gray-400">العنوان </p>
                            <p className="text-right mr-3" >مكة المكرمة, حدة, طريق مكة القديم</p>
                          </div>
                        </div>
                    </div>
                </div>                
            </div>
        </Card>
        <div className="flex-col w-4/12 my-px">
              <Card className="dark:bg-muted h-3/12">
                <CardHeader>
                    <CardTitle className="text-center">نبذة عامة</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-center">
                    سفير هو خيل عربي ذو أصول نبيلة وجمال فائق. يُعتبر الخيل العربي من أنقى سلالات الخيول في العالم، حيث يتميز بجسمه الأنيق ورأسه الجذاب وذيله الفاخر. يتمتع سفير بسمات مميزة تجعله يبرز بين الخيول  كما  يتمتع بقوة لافتة تجعله مرغوبًا لدى عشاق الخيول في جميع أنحاء العالم.
                    </CardDescription>
                </CardContent>
              </Card>
              <Card className="mt-3 dark:bg-muted h-3/12">
                <CardHeader>
                  <CardTitle className="text-center">معلومات المالك</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-3 items-center justify-between">
                  <span className="text-center">0512345789 </span>   
                  <span className="font-medium text-center text-sm text-gray-500 dark:text-gray-400">الجوال</span>
                  <span className="">مشعل الزايدي</span>  
                  <span className="font-medium text-sm text-gray-500 dark:text-gray-400">الاسم</span>  
                </CardContent>
              </Card>
              <Card className="h-3/12 mt-3 dark:bg-muted">
              <CardHeader>
                <CardTitle className="text-center">الإنجازات</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-3 items-center text-center justify-center">
               مسابقة مكة للخيل العربي:المركز الثالث
               </CardContent>
              </Card>
            </div>
        </div> 
      <div className="flex mx-6 py-6 gap-3">
      <div className="w-6/12">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                اخر التحديثات
              </CardTitle>
              <CardContent>
                <Table>
                  
                    <TableRow>
                      <TableHead className="text-center">الحالة </TableHead>
                      <TableHead>التاريخ</TableHead>
                      <TableHead>المستخدم</TableHead>
                      <TableHead>التحديث</TableHead>
                      <TableHead>الوقت</TableHead>
                    </TableRow>
                    <TableBody>                    
                        <TableCell>قبل 10د  </TableCell>
                        <TableCell>9/10/2024</TableCell>
                        <TableCell>ابراهيم</TableCell>
                        <TableCell>تسجيل دخول</TableCell>
                        <TableCell>7:20</TableCell>                    
                    </TableBody>
                    <TableBody>                    
                        <TableCell>قبل يوم  </TableCell>
                        <TableCell>8/10/2024</TableCell>
                        <TableCell>باسم</TableCell>
                        <TableCell>تسجيل خروج</TableCell>
                        <TableCell>16:00</TableCell>                    
                    </TableBody>
                    <TableBody>                    
                        <TableCell>قبل يوم  </TableCell>
                        <TableCell>8/10/2024</TableCell>
                        <TableCell>اسماعيل</TableCell>
                        <TableCell>تدريب مشي</TableCell>
                        <TableCell>7:00</TableCell>                    
                    </TableBody>               
                </Table>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
          <Card className="dark:bg-muted w-3/6 h-4/6">
              <CardHeader>
                <CardTitle className="text-center">ملفات الخيل</CardTitle>
              </CardHeader>
          </Card>
          <Card className="dark:bg-muted w-3/6">
          </Card>
      </div>
      <div className="flex px-6 py-6 gap-3">
            <Card className="w-9/12 ">
                <CardHeader>
                  <CardTitle className="flex justify-center">جدول الخيل </CardTitle>
                </CardHeader>
                <CardContent>
                  <Calender/>
                </CardContent>
            </Card>    
            <Card className="w-5/12">
            <CardHeader>
              <CardTitle className="text-center">
                الجدول اليومي
              </CardTitle>
              <CardContent>
                <Table>
                  
                    <TableRow>
                      <TableHead className="text-center">ملاحظات </TableHead>
                      <TableHead className="text-center">الحالة</TableHead>
                      <TableHead className="text-center">المسؤول</TableHead>
                      <TableHead className="text-center">المهمة</TableHead>
                      <TableHead>الوقت</TableHead>
                    </TableRow>
                    <TableRow>                    
                        <TableCell>1KG </TableCell>
                        <TableCell><Badge>تم</Badge></TableCell>
                        <TableCell>حسين</TableCell>
                        <TableCell> وجبة الصباح</TableCell>
                        <TableCell>5:20am</TableCell>                    
                    </TableRow>
                    <TableRow>                    
                        <TableCell> -</TableCell>
                        <TableCell><Badge>تم</Badge></TableCell>
                        <TableCell>باسم</TableCell>
                        <TableCell>تمرين الصباح</TableCell>
                        <TableCell>7:00am</TableCell>                    
                    </TableRow>
                    <TableRow>                    
                        <TableCell> -</TableCell>
                        <TableCell><Badge>تم</Badge></TableCell>
                        <TableCell>عبدالعزيز</TableCell>
                        <TableCell>فترة راحة </TableCell>
                        <TableCell>8:00am</TableCell>                    
                    </TableRow>
                    <TableRow>                    
                        <TableCell>-</TableCell>
                        <TableCell><Badge variant="secondary">تحت الاجراء</Badge> </TableCell>
                        <TableCell>اسماعيل</TableCell>
                        <TableCell>تدريب مشي</TableCell>
                        <TableCell>5:00pm</TableCell>                    
                    </TableRow>      
                    <TableRow>                    
                        <TableCell>-</TableCell>
                        <TableCell><Badge variant="secondary">تحت الاجراء</Badge></TableCell>
                        <TableCell>اسماعيل</TableCell>
                        <TableCell> عرض بروفة</TableCell>
                        <TableCell>6:00pm</TableCell>                    
                    </TableRow>            
                </Table>
              </CardContent>
            </CardHeader>
          </Card>   
      </div>
    </div>
  )
}

HoeseProfilePage.requireAuth = true
