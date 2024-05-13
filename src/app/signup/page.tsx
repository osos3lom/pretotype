import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export default function SignUpPage() {
  return (
    <Card className="mx-auto mt-12 max-w-sm sm:mt-32 sm:bg-muted">
      <CardHeader>
        <CardTitle className="text-xl text-center">تسجيل جديد</CardTitle>
        <CardDescription className="text-center">
          أدخل بياناتك لإكمال التسجيل في التطبيق
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="last-name" className="text-center">الاسم الأخير</Label>
              <Input className="text-center" id="last-name" placeholder="اللقب" required />
            </div>
            <div className="grid gap-2">
              <Label className="text-center" htmlFor="first-name">الإسم الأول</Label>
              <Input className="text-center" id="first-name" placeholder="الاسم الكريم" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="last-name" className="text-center">مجال الفروسية</Label>
              <div className="flex flex-col items-center space-x-2">
                <div className="flex gap-3">
                  <div className="flex gap-1 mb-2">                  
                    <label
                      htmlFor="terms2"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      تعليم 
                    </label>
                    <Checkbox id="terms2"  />
                  </div>
                  <div className="flex gap-1 mb-2">                  
                    <label
                      htmlFor="terms2"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      انتاج 
                    </label>
                    <Checkbox id="terms2"  />
                  </div>
                </div>
                <div className="flex justify-start mb-1">                  
                  <label
                    htmlFor="terms2"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    رياضة 
                  </label>
                  <Checkbox id="terms2"  />
                </div>               

              </div>
            </div>
            <div className="grid gap-2 my-auto mx-auto">
            <Label htmlFor="last-name" className="text-center">حجم المنشأة</Label>
              <Select>  
                <SelectTrigger className="flex">
                  <SelectValue className="text-center" placeholder="حجم الفريق" />
                </SelectTrigger>                         
                <SelectContent>
                  <SelectItem value="1-5">1-5</SelectItem>
                  <SelectItem value="5-25">5-25</SelectItem>
                  <SelectItem value="26-49">26-49</SelectItem>
                  <SelectItem value="50+">50+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label className="text-center" htmlFor="email">البريد الإلكتروني</Label>
            <Input
              id="email"
              className="text-center"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-center">كلمة المرور</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            إنشاء حساب جديد
          </Button>          
        </div>
        <div className="mt-4 text-center text-sm">
          لديك حساب؟
          <Link href="#" className="underline mr-3">
            سجل الدخول
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}