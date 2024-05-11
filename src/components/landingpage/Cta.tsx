import { Button } from "../ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl text-center md:text-4xl font-bold ">
            أفكارك وجميع تفضيلاتك في منصة  موحدة
          </h2>
          <p className="text-muted-foreground text-center text-xl mt-4 mb-8 lg:mb-0">
          اتصال سلس عبر جميع الأجهزة والقنوات من خلال نظامنا الشامل، مما يوفر تجربة تتجاوز الحدود وتعزز إمكانية الوصول.
          </p>
        </div>

        <div className="flex justify-center lg:col-start-2">
          <Button className="w-full mr-3 md:mr-4 md:w-auto">حجز موعد للعرض توضيحي</Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            عرض جميع الخصائص
          </Button>
        </div>
      </div>
    </section>
  );
};
