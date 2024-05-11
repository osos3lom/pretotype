import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "خدمات وتوصيات شخصية للأعمال",
    description:
      "بخبرات فريقنا التقني يمكننا تحليل تفضيلات المستخدم وسلوكه لتقديم توصيات مخصصة، سواء كان ذلك يقترح ميزات أو محتوى أو منتجات جديدة بناءً على الاهتمامات الفردية وأنماط الاستخدام.",
    icon: <ChartIcon />,
  },
  {
    title: "واجهة مستخدم قابلة للتخصيص",
    description:
      "نعطي العملاء القدرة على تخصيص واجهة التطبيق الخاصة بهم وفقًا لتفضيلاتهم، مثل ضبط التخطيط وأنظمة الألوان وأحجام الخطوط ومواضع الأدوات، مما يضمن تجربة مخصصة وسهلة الاستخدام حقًا.",
    icon: <WalletIcon />,
  },
  {
    title: "إشعارات وتنبيهات مخصصة",
    description:
      "نعمل على تنفيذ إعدادات الإشعارات الذكية التي تسمح للمستخدمين بتخصيص التردد والمحتوى وطريقة تسليم الإشعارات بناءً على تفضيلاتهم وأولوياتهم، مما يضمن حصولهم على المعلومات ذات الصلة دون الشعور بالإرهاق.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="flex justify-end gap-8 place-items-center">
        <div>
          <h2 className="text-3xl text-center md:text-4xl font-bold">
             خدمات مخصصة للعملاء والمنشات
          </h2>

          <p className="text-muted-foreground text-center text-xl mt-4 mb-8 ">
          استمتع بتجربة الكمال المصممة خصيصًا مع خيارنا المخصص، المصمم لتلبية تفضيلاتك الفريدة والارتقاء بتجربتك إلى آفاق جديدة
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-end items-start gap-4">                  
                  <div className="flex justify-end">
                    <CardDescription className="text-md text-center mr-3 my-auto">
                      {description}
                    </CardDescription>
                    <CardTitle className="text-center my-auto">{title}</CardTitle>                    
                  </div>
                  <div className="flex justify-center mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};
