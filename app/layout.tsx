import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist, Rubik } from 'next/font/google'
import UserMenu from '@/components/navbar/UserMenu'
import RegisterModal from '@/components/modals/RegisterModal'
import LoginModal from '@/components/modals/LoginModal'
import Footer from '@/components/footer/Footer'

const URBfont = Urbanist({ subsets: ['latin'] })
const RUBfont = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={URBfont.className}>
        <Navbar />
        {children}
        <RegisterModal />
        <LoginModal />
      </body>
      <Footer />
    </html>
  )
}
