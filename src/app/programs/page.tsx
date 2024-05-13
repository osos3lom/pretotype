"use client"
import Sidebar from "@/components/sidebar"
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Check } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type notifications = {
  title: string,
  description: string,
};

type programs = {
    invoice: string,
    duration: string,
    paymentStatus: string,
    totalAmount: string,
    paymentMethod: string,
};
type TrainingTasks = {
  status: string,
  duration: string,
  paymentStatus: string,
  totalAmount: string,
  paymentMethod: string,
  time:string,
};
type Nuttasks = {
  status: string,
  duration: string,
  paymentStatus: string,
  totalAmount: string,
  paymentMethod: string,
  time:string,
};

const notifications = [
  {
    title: "تدريب الخيل سبلت على الممشى",
    description: "قبل ساعة واحدة",
  },
  {
    title: "تغذية سبلت على الريد ميل بكميات محددة",
    description: "فبل ساعتين",
  },
  {
    title: "إعطاء الخيل سبلت فترة من الراحة",
    description: "قبل قليل",
  },
]
const goals = [
  {
    title: "تدريب الخيل فزاع على القفز",
    description: "قبل ساعة واحدة",
  },
  {
    title: "تغذية فزاع على العلف بكميات محددة",
    description: "فبل ساعتين",
  },
  {
    title: "إعطاء الخيل فزاع فترة من الراحة",
    description: "قبل قليل",
  },
]

const programs = [
  {
    invoice: "تم",
    duration: "شهر ",
    paymentStatus: "سفير",
    totalAmount: "PROG001",
    paymentMethod: "تدريب الصحة",
  },
  {
    invoice: "قيد التنفيذ",
    duration: "ستة أشهر ",
    paymentStatus: "علياء",
    totalAmount: "PROG001",
    paymentMethod: "تدريب الصحة",
  },
  {
    invoice: "تم",
    duration: "أسبوعين ",
    paymentStatus: "سبليت",
    totalAmount: "PROG002",
    paymentMethod: "تدريب التحمل",
  },
  {
    invoice: "قيد التدريب",
    duration: "أسبوع ",
    paymentStatus: "فزاع",
    totalAmount: "PROG003",
    paymentMethod: "تدريب القفز",
  },
  {
    invoice: "تحت الإجراء",
    duration: "شهر ",
    paymentStatus: "سفير",
    totalAmount: "NUTR001",
    paymentMethod: "  تغذية عادية",
  },
  {
    invoice: "قيد الإجراء",
    duration: "شهر ",
    paymentStatus: "فزاع",
    totalAmount: "NUTR002",
    paymentMethod: " تغذية الأبطال",
  },
  {
    invoice: "قيد التنفيذ",
    duration: "شهر ",
    paymentStatus: "فايزة",
    totalAmount: "NUTR003",
    paymentMethod: "حمية التنزيل",
  },
]
const TrainingTasks = [
  {
    status: "تم",
    duration: "مطلق الحنيطي",
    paymentStatus: "سفير",
    totalAmount: "PROG001",
    paymentMethod: "تدريب الصحة",
    time:"10:00am"
  },
  {
    status: "قيد التنفيذ",
    duration: "الوليد الفرحان",
    paymentStatus: "علياء",
    totalAmount: "PROG001",
    paymentMethod: "تدريب الصحة",
    time:"10:00am"
  },
  {
    status: "تم",
    duration: " ابراهيم السالمي",
    paymentStatus: "سبليت",
    totalAmount: "PROG002",
    paymentMethod: "تدريب التحمل",
    time:"10:00am"
  },
  {
    status: "قيد التدريب",
    duration: " فيصل الكعيبي",
    paymentStatus: "فزاع",
    totalAmount: "PROG003",
    paymentMethod: "تدريب القفز",
    time:"10:00am"
  },
]

const Nuttasks = [
  
  {
    status: "تحت الإجراء",
    duration: "عمر الحوت",
    paymentStatus: "سفير",
    totalAmount: "NUTR001",
    paymentMethod: "  تغذية عادية",
    time:"10:00am"
  },
  {
    status: "قيد الإجراء",
    duration: "سمير العمودي",
    paymentStatus: "فزاع",
    totalAmount: "NUTR002",
    paymentMethod: " تغذية الأبطال",
    time:"10:00am"
  },
  {
    status: "قيد التنفيذ",
    duration: "سالم الواصل",
    paymentStatus: "فايزة",
    totalAmount: "NUTR003",
    paymentMethod: "حمية التنزيل",
    time:"10:00am"
  },
]
 

export default function ProgramsPage() {
  
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar/>
      <main className="flex mr-10 min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 sm:mr-3">
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
            <div className="grid gap-4 mr-9 md:grid-cols-2 lg:grid-cols-2">
          <Card>
              <CardHeader className="flex flex-row items-center justify-center pb-2 space-y-0">
                
                <CardTitle className="text-m text-right font-bold">البرامج </CardTitle>
              </CardHeader>
                
              <CardContent>
                <div className="flex justify-end">
                  <div className="text-xs pt-3 text-gray-500 dark:text-gray-400 mr-2">برنامج</div>
                  <div className="text-2xl font-bold">27</div>
                </div>
                <div className="flex justify-end">
                    <p className="text-xs text-gray-500 dark:text-gray-400">برامج جديدة خلال اخر 30 يوم</p>
                    <p className="text-xs text-right mr-3 justify-end text-green-500 dark:text-green-400 ml-2">+10</p>
                </div>
                
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-center pb-2 space-y-0">
               <CardTitle className="text-m font-bold"> الأهداف</CardTitle>
              </CardHeader>
                
              <CardContent>
                <div className="flex justify-end">
                  <div className="text-xs pt-3 text-gray-500 dark:text-gray-400 mr-2">هدف</div>
                  <div className="text-2xl font-bold">2</div>
                </div>
                <div className="flex justify-end">
                    <p className="text-xs text-gray-500 dark:text-gray-400">أهداف تم تحقيقها خلال اخر 30 يوم</p>
                    <p className="text-xs text-right  justify-end text-green-500 dark:text-green-400 ml-2">4</p>
                </div>
                
              </CardContent>
            </Card>
            </div>
            
        
    <Tabs defaultValue="account" className="w-full pr-6 pl-3">
      <TabsList className="grid w-full grid-cols-3">
        
        <TabsTrigger value="tasks">المهام</TabsTrigger>
        <TabsTrigger value="programs">البرامج</TabsTrigger>
        <TabsTrigger value="goals">الأهداف</TabsTrigger>
      </TabsList>
      <TabsContent value="goals">
        <div className="flex gap-4">        
          <Card>
            <CardHeader>
              <CardTitle className="text-right"> تدريب سبلت من أجل سباق التحمل</CardTitle>
              <CardDescription className="text-right">لديك 3 برامج لتحقيق الهدف</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className=" flex items-center space-x-4 rounded-md border p-4">
                  
                <div className="flex ">
                    
                  <div className="flex-1 ml-3 mr-9 ">
                  <p className="text-sm text-right font-medium leading-none">
                    السماح بالإشعارات
                  </p>
                  <p className="text-sm text-muted-foreground">
                      أرسل اشعارات بخصوص تحقيق الهدف
                  </p>

                    </div>
                    <Switch className="flex ml-auto" />
                    
                  </div>
                  
                </div>
                <div className="flex flex-col-reverse">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-end pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex justify-end h-2 w-2 rounded-full bg-sky-500" />
              <div className="">
                <p className="text-sm font-medium leading-none text-right">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground text-right">
                  {notification.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Check className="mr-2 h-4 w-4" /> التحديد على الكل بتم
                </Button>
              </CardFooter>
            </Card>
              <Card>
              <CardHeader>
                <CardTitle className="text-right">تدريب فزاع لتحقيق مركز في سباق القفز </CardTitle>
                <CardDescription className="text-right">لديك 3 برامج لتحقيق الهدف</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                  
                  <div className="flex ">
                    
                    <div className="flex-1 ml-3 mr-9 ">
                    <p className="text-sm text-right font-medium leading-none">
                      السماح بالإشعارات
                    </p>
                    <p className="text-sm text-muted-foreground">
                      أرسل اشعارات بخصوص تحقيق الهدف
                    </p>

                    </div>
                    <Switch className="flex ml-auto" />
                    
                  </div>
                  
                </div>
                <div className="flex flex-col-reverse">
          {goals.map((goals, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-end pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex justify-end h-2 w-2 rounded-full bg-sky-500" />
              <div className="">
                <p className="text-sm font-medium leading-none text-right">
                  {goals.title}
                </p>
                <p className="text-sm text-muted-foreground text-right">
                  {goals.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Check className="mr-2 h-4 w-4" /> التحديد على الكل بتم
                </Button>
              </CardFooter>
            </Card>
    </div>
      </TabsContent>
      <TabsContent value="programs">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">البرامج</CardTitle>
            <CardDescription className="text-center">
              اختر البرنامج من أجل إضافة مهمة أو عمل تغيير
            </CardDescription>
            <div>
              <Button >إضافة برنامج</Button>
            </div>
          </CardHeader>
          <Table>      
            <TableHeader>
              <TableRow>                
                <TableHead className="text-center">الحالة</TableHead>
                <TableHead className="text-center">المدة</TableHead>
                <TableHead className="text-center">الخيل</TableHead>
                <TableHead className="text-center">اسم البرنامج</TableHead>
                <TableHead className="w-[100px]">رمز البرنامج</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {programs.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="text-center font-medium">{invoice.invoice}</TableCell>
                  <TableCell className="text-center font-medium">{invoice.duration}</TableCell>
                  
                  <TableCell className="text-center">{invoice.paymentStatus}</TableCell>
                  <TableCell className="text-center">{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-center">{invoice.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>            
          </Table>         
        </Card>
      </TabsContent>
      <TabsContent value="tasks">
      <Card>
          <CardHeader>
            <CardTitle className="text-center">برنامج التغذية العادية </CardTitle>
            <CardDescription className="text-center">
              قم بإضافة مهمة أو قم بعمل تغيير
            </CardDescription>
            <div className="flex gap-3">
              <Button >إضافة مهمة</Button>
              <Button >تعديل البرنامج</Button>
            </div>            
          </CardHeader>
          <Table>      
            <TableHeader>
              <TableRow>                
                <TableHead className="text-center">الحالة</TableHead>
                <TableHead className="text-center">صاحب الخيل</TableHead>
                <TableHead className="text-center">الوقت </TableHead>
                <TableHead className="text-center">الخيول</TableHead>                
                <TableHead className="text-center"> المهمة</TableHead>                
                <TableHead className="w-[100px]">رمز البرنامج</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Nuttasks.map((invoice) => (
                <TableRow key={invoice.status}>
                  <TableCell className="text-center font-medium">{invoice.status}</TableCell>
                  <TableCell className="text-center font-medium">{invoice.duration}</TableCell>
                  <TableCell className="text-center font-medium">{invoice.time}</TableCell>
                  <TableCell className="text-center">{invoice.paymentStatus}</TableCell>
                  <TableCell className="text-center">{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-center">{invoice.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>          
        </Card>
        <Card className="mt-3">
        <CardHeader>
            <CardTitle className="text-center">برنامج التدريب </CardTitle>
            <CardDescription className="text-center">
              قم بإضافة مهمة أو قم بعمل تغيير
            </CardDescription>
            <div className="flex gap-3">
              <Button >إضافة مهمة</Button>
              <Button >تعديل البرنامج</Button>
            </div>            
          </CardHeader>
          <Table>      
            <TableHeader>
              <TableRow>                
                <TableHead className="text-center">الحالة</TableHead>
                <TableHead className="text-center">صاحب الخيل</TableHead>
                <TableHead className="text-center">الوقت</TableHead>
                <TableHead className="text-center">الخيول</TableHead>
                <TableHead className="text-center">اسم المهمة</TableHead>
                <TableHead className="w-[100px]">رمز البرنامج</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {TrainingTasks.map((invoice) => (
                <TableRow key={invoice.status}>
                  <TableCell className="text-center font-medium">{invoice.status}</TableCell>
                  <TableCell className="text-center font-medium">{invoice.duration}</TableCell>
                  <TableCell className="text-center">{invoice.time}</TableCell>
                  <TableCell className="text-center">{invoice.paymentStatus}</TableCell>
                  <TableCell className="text-center">{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-center">{invoice.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>            
          </Table>          
        </Card>
        
        

      </TabsContent>
    </Tabs>
    </div>
      </main>
      
  </div>
  )
}

