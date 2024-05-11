import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "./Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "إدارة البيانات",
    description:
      "يعمل النظام السحابي على جمع البيانات من مختلف الأقسام داخل المنشأة في قاعدة بيانات واحدة متكاملة. ويشمل ذلك المعلومات المالية والموارد البشرية سلاسل التوريد والمصروفات والدخل وغيرها.",
  },
  {
    icon: <MapIcon />,
    title: "عمليات مبسطة",
    description:
      "أتمتة المهام وسير العمل الروتيني. على سبيل المثال، يمكن أن يقوم بمعالجة الطلبات وإدارة المخزون ومعالجة المرتبات وتقديم التقارير المالية، مما يقلل من الأخطاء ويحسن الكفاءة",
  },
  {
    icon: <PlaneIcon />,
    title: "تحليل فوري",
    description:
      "يقدم تحليلات فورية وقدرات تقريرية من خلال جمع وتحليل البيانات من مختلف مجالات الأعمال. يتيح ذلك لاتخاذ القرارات الفورية والمستنيرة بسرعة",
  },
  {
    icon: <GiftIcon />,
    title: "تعاون كفريق",
    description:
      "يحسن التطبيق التعاون والتواصل عبر الأقسام من خلال توفير منصة للتواصل وحفظ المعلومات. مما يحسن التنسيق بين الأعضاء مما يحسن التوافق بين الأهداف وتحسين الأداء العام",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">      
        ما هو عنان؟
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        نظام يجمع بين إدارة البيانات المركزية، وتبسيط العمليات، وتوفير الرؤى الفورية، وتعزيز التعاون، لتحقيق تحول شامل في إدارة الأعمال.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <div className="my-auto">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
