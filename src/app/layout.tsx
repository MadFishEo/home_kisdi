import type { Metadata } from 'next'
import { Noto_Sans_KR, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'KISDI - 한국정보통신학술개발연구원',
  description: '대한민국의 정보통신 정책을 선도하는 전문 연구기관입니다. 디지털 경제, 미디어, 네트워크 사회의 변화를 분석하고 정책 방향을 제시합니다.',
  keywords: ['ICT정책', '디지털경제', '정보통신', 'KISDI', '한국정보통신학술개발연구원', '방송통신'],
  openGraph: {
    title: 'KISDI - 한국정보통신학술개발연구원',
    description: '대한민국의 정보통신 정책을 선도하는 전문 연구기관입니다.',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('darkMode')==='true'){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${notoSansKR.variable} ${inter.variable} font-sans min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
