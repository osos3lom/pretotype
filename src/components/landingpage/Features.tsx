import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
  
}

const features: FeatureProps[] = [
  {
    title: "تصميم يستجيب لجميع الأجهزة",
    description:
      "لتصميم سريع الاستجابة هو أسلوب لتطوير الويب يضمن تكيف مواقع الويب بسلاسة مع أحجام الشاشات والأجهزة المختلفة، مما يوفر تجربة مشاهدة مثالية للمستخدمين.",
    
  },
  {
    title: "واجهة مستخدم بديهية",
    description:
      "استمتع بتجربة التنقل السلس والتحكم السهل من خلال واجهة المستخدم سهلة الاستخدام، مما يمكّن المستخدمين من تحقيق أقصى قدر من الإنتاجية والكفاءة مع كل نقرة.",
  },
  {
    title: "رؤية مدعومة بالذكاء الاصطناعي",
    description:
      "أطلق العنان لمستقبل ابتكارات الأجهزة المحمولة من خلال تطبيقنا القادم للهاتف، وتسخير قوة الذكاء الاصطناعي لتوفير رؤى مستقبلية تتوقع احتياجاتك، وتخصيص تجربتك، وإحداث ثورة في طريقة تفاعلك مع التكنولوجيا.",
    
  },
];

const featureList: string[] = [
  "وضع ساطع/ليلي ",
  "حفظ البيانات",
  "التحصيل",
  "إدارة العمليات",
  "مشاركة الملفات",
  "واجهة مستخدم مبسطة",
  "تصميم متناسق",
  "تقويم",
  "متطور باستمرار",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        الخصائص                 
      </h2>

      <div className="flex justify-center flex-wrap gap-4">
        {featureList.map((feature: string) => (
          <div key={feature} className="flex justify-center">
            <Badge
              variant="secondary"
              className="text-sm text-center"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description }: FeatureProps) => (
          <Card key={title}>            
            <CardHeader>
              <CardTitle className="text-center">{title}</CardTitle>
            </CardHeader>            
            <CardContent className="text-center">{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
