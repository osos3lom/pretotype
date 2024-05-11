import { Badge } from "../ui/badge";
import { Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { LightBulbIcon } from "./Icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            مجانا
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              الأكثر شيوعا
            </Badge>
          </CardTitle>
          <div className="flex justify-end">
            <span className="text-muted-foreground mr-3 mt-2"> ريال/أول شهر</span>
            <span className="text-3xl font-bold">0</span>            
          </div>
          

          <CardDescription>
            احصل على تجربة مجانية لتطبيق الفروسية
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">
            <a
            href="/sign-up" target="_blank">
              ابدأ فترة التجربة
            </a>
          </Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex justify-end">
          <div className="space-y-4">
            {[" خمسة خيول", "4 GB تخزين بيانات حتى", "مشاركة الملفات"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex justify-end"
                >                  
                  <h3 className="mr-2">{benefit}</h3>
                  <Check className="text-green-500" />{" "}
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          
          <div>
            <CardTitle>نسختين ليلية وساطعة </CardTitle>
            <CardDescription className="text-md mt-2">
              تطبيق مريح للعينين في الصباح والمساء
            </CardDescription>
          </div>
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
