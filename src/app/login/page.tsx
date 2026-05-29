import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  return (
    <div className="w-full my-auto lg:grid lg:min-h-[600px] lg:grid-cols-1 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">

          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">تسجيل الدخول</h1>
            <p className="text-balance text-muted-foreground">
              أدخل بيانات الدخول
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-right">البريد الالكتروني</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="text-center"
              />
            </div>
            <div className="grid gap-2">
              <Label className="text-right" htmlFor="password">كلمة المرور</Label>
              <Input className="text-center" id="password" type="password" />
              <Link
                href="/forgot-password"
                className="ml-auto inline-block text-sm underline"
              >
                نسيت كلمة المرور؟
              </Link>
            </div>
            <Button asChild>
              <Link href="/dashboard">تسجيل الدخول</Link>
            </Button>
          </div>

          <div className="mt-4 text-center text-sm">
            ليس لديك حساب؟{" "}
            <Link href="/signup" className="underline">
              تسجيل جديد
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}

export default LoginPage
