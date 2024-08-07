import { Inter } from 'next/font/google'
import './ui/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lama Dev Next.js Admin Dashboard',
  description: 'Next.js Tutorial',
}

export default function RootLayout({ children }) {  //rootlaout ถ้าเพิ่มอะไรไปตรงนี้ ทุก ๆ component ก็จะแสดงเหมือนกัน 
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
