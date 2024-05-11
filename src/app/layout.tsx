import Header from '@/components/Header'
import './globals.css'
import localFont from 'next/font/local'
const Lemonada = localFont({ src: './../font/Lemonada.woff' })
import { ThemeProvider } from "@/components/ThemeProvider"

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
        <Header/>
      {children}
      </ThemeProvider>
      </body>
    </html>
  )
}
