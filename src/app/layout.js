import { Anton, Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-anton' })
const barlow = Barlow({ weight: ['300','400','500','600','700'], subsets: ['latin'], variable: '--font-barlow' })
const barlowC = Barlow_Condensed({ weight: ['400','600','700','800'], subsets: ['latin'], variable: '--font-barlow-c' })

export const metadata = {
  title: 'Mui — Personal Trainer Bangkok',
  description: 'I help women in Bangkok get in shape in 12 weeks. Personal training, home programs & online coaching.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${barlow.variable} ${barlowC.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
