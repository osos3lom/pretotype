import { Button } from "../ui/button";
import { buttonVariants } from "../ui/button";
import { HeroCards } from "./HeroCards";


export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-center space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
          تطبيق فرسان هب للخيل وأهلها                 
          </h1>
          
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          تطبيق فرسان هب تم تصميمه خصيصا لتلبية احتياجات الخيول وأصحابها وركابها 
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3"><a
            href="/signup" target="_blank">
            جرب التطبيق            
          </a></Button>
          <a
            href="/login"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            سجل الدخول
            
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
