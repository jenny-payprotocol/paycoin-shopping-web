import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/globals.css'

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '45 920',
})

export const metadata: Metadata = {
  title: {
    default: 'Paycoin Shopping',
    template: '%s | Paycoin Shopping',
  },
  description: 'Paycoin Shopping Web Project',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
