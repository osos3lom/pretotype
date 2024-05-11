import Image from "next/image";
import Link from "next/link";
export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
        <Link href="/" className="flex items-center">
          <div className='w-fit ml-5'>

                      <Image
                      src="https://i.ibb.co/ZKkG3ZX/logo.png"
                      alt="logo"
                      className="invert dark:filter-none"
                      height={100}
                      width={1000}
                      />
                  </div>
                                  
                </Link>
            <div/>
          <div className="bg-green-0 flex flex-col items-center my-auto justify-between">
            <div className="pb-3 ">
              <h2 className="text-center text-3xl md:text-4xl font-bold">
                آفاق الفرسان التقنية
              </h2>
              <p className="text-xl text-center items-center text-muted-foreground md:text-2xl mt-4">
              تأسست الشركة من أجل ربط عادات وتقاليد الفروسية مع التكنولوجيا من أجل تعزيز علاقة الفارس والحصان لتتجاوز الحدود الممكنة وخلق عالم يتم الاعتزاز برفيق الدرب من الخيول وفهمه وتمكينه للوصول إلى أقصى إمكاناته.
              </p>
            </div>            
          </div>
        </div>
      </div>
    </section>
  );
};
