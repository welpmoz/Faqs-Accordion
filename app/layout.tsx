import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import { colors } from './styles'
import Image from 'next/image'

const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Faq Accordion',
  description: 'Generated by create next app',
}

const variants = {
  text: [
    `text-[#ffffff]`, `text-[#f9f0ff]`,
    `text-[#8c6991]`, `text-[#2f1533]`,
  ],
  background: [
    `bg-[#ffffff]`, `bg-[#f9f0ff]`,
    `bg-[#8c6991]`, `bg-[#2f1533]`,
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <div className={`bg-${colors.lightPink}`}>
          <div className={`flex flex-col items-center justify-center min-h-screen relative`}>
            <div className={`absolute top-0`}>
              <Image
                src={`/assets/images/background-pattern-mobile.svg`}
                alt='background'
                width={100}
                height={100}
                className={`w-screen md:hidden`}
                priority
              />

              <Image
                src={`/assets/images/background-pattern-desktop.svg`}
                alt='background'
                width={100}
                height={100}
                className={`w-auto h-auto hidden md:block`}
                priority
              />
            </div>

            <div className={`relative z-10`}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
