import { Anton, Archivo, IBM_Plex_Sans_Thai } from 'next/font/google'
import './globals.css'

const anton   = Anton({ weight: '400', subsets: ['latin'], variable: '--font-anton' })
const archivo = Archivo({ weight: ['400','500','700','900'], subsets: ['latin'], variable: '--font-archivo' })
const thai    = IBM_Plex_Sans_Thai({ weight: ['400','600','700'], subsets: ['thai'], variable: '--font-thai' })

export const metadata = {
  title: 'Mui — Personal Trainer Bangkok',
  description: 'Coaching designed around your body, goals, and lifestyle. Strength, conditioning & transformation in Bangkok.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${archivo.variable} ${thai.variable}`}>
      <body>{children}</body>
    </html>
  )
}
