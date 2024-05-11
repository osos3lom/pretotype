

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="flex justify-center col-span-full xl:col-span-2">
          <a
            href="/"
            className="font-bold  text-xl flex"
          >
            
            فرسان هب التقنية
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-center text-lg">تابعنا على منصات التواصل</h3>
          <div className="flex justify-center">
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              TikTok
            </a>
          </div>

          <div className="flex justify-center">
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          <div className="flex justify-center">
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Instegram
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg text-center">المنصات</h3>
          <div className="flex justify-center">
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              الويب
            </a>
          </div>

          <div className="flex justify-center">
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              الجوال
            </a>
          </div>

          
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg text-center">عن المنتج</h3>
          <div className="flex justify-center">
            <a
              href="#features"
              className="opacity-60 hover:opacity-100"
            >
              الخصائص
            </a>
          </div>

          <div className="flex justify-center">
            <a
              href="#pricing"
              className="opacity-60 hover:opacity-100"
            >
              الأسعار
            </a>
          </div>

         
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg text-center">مجتمع الفروسية</h3>
          <div className="flex justify-center">
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Youtube
            </a>
          </div>

        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 صنعت الصفحة بحب عن طريق{" "}
          <a
            target="_blank"
            href="fursanhub.com"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            فرسان هب التقنية
          </a>
        </h3>
      </section>
    </footer>
  );
};
