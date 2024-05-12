import './globals.css'
import localFont from 'next/font/local'
const Lemonada = localFont({ src: './../font/Lemonada.woff' })
import { ThemeProvider } from "@/components/ThemeProvider";
import SessionProvider from '@/app/SessionProvider'
export const metadata = {
  title: 'FursanPreto',
  description: 'Equestrian Future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" suppressHydrationWarning>
      
      <body className={Lemonada.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            >
        <SessionProvider>
          {children}
        </SessionProvider>
        
      </ThemeProvider>
      </body>
    </html>
  )
}
