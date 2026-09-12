import './globals.css';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import localFont from 'next/font/local';
import { ThemeProvider } from "@/components/ThemeProvider";

// Primary professional font: IBM Plex Sans Arabic
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-primary',
  display: 'swap',
});

// Secondary font: Saudi Font (from C:\Users\osama\Documents\Saudi)
const saudiFont = localFont({
  src: [
    {
      path: '../font/Saudi-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/Saudi-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-saudi',
  display: 'swap',
});

export const metadata = {
  title: 'فرسان | FursanHub - منصة إدارة المرابط والاسطبلات',
  description: 'المنظومة الذكية المتكاملة لإدارة المرابط والاسطبلات والخيول العربية الأصيلة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className={`${ibmPlexArabic.variable} ${saudiFont.variable}`}>
      <body className={`${ibmPlexArabic.className} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
