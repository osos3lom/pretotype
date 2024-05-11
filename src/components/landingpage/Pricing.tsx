import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "باقة المنشات",
    popular: 0,
    price: 4000,
    description:
      "نحلل تفضيلات المستخدم وسلوكه لتقديم ميزات مفصلة",
    buttonText: "تواصل مع المبيعات",
    benefitList: [
      "واجهة مستخدم قابلة للتخصيص",
      "تنصيب البرنامج في المنشأة",
      "صفحات مخصصة حسب الطلب",
      "دعم فني أول شهر",
      "تدريب على استخدام البرنامج",
    ],
  },
  {
    title: "الاشتراك",
    popular: 1,
    price: 30,
    description:
      "يمكنك الوصول إلى الميزات الأساسية",
    buttonText: "ابدأ باشتراك شهري",
    benefitList: [
      " حتى 25 خيل",
      "40 GB تخزين يصل الى",
      "نظام متكامل متطور باستمرار",
      "دعم فني مستمر",
      "عروض حصرية",
    ],
  },
  {
    title: "المجاني",
    popular: 0,
    price: 0,
    description:
      " نسخة تجريبية مجانية ولوحة معلومات تفاعلية",
    buttonText: "ابدأ التجربة",
    benefitList: [
      "حتى 5 خيول",
      "8 GB تخزين سحابي",
      "وصول لجميع الصفحات",
      
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
      احصل على وصول غير محدود 
       
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
      أطلق العنان لقوة إدارة الأعمال المبسطة من خلال ثلاثي النظام السحابي الخاص بنا يشعل الكفاءة للمؤسسات الناشئة، و يغذي التوسع بحلول قابلة للتطوير وعنان يدفع قادة الصناعة نحو نجاح لا مثيل له من خلال الميزات المتقدمة والتخصيص.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}     
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-center">
                {pricing.title}
              </CardTitle>
              
              <div className="flex justify-center">
                
                <span className="text-2xl mr-2 font-bold">ريال</span>
                <span className="text-2xl font-bold">{pricing.price}</span>
                
              </div>

              <CardDescription className="text-center">{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex justify-end">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex justify-end"
                  >
                    
                    <h3 className="mr-2">{benefit}</h3>
                    <Check className="text-green-500" />{" "}
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
