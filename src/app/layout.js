import './globals.css'

export const metadata = {
  title: 'Mui — Personal Trainer Bangkok',
  description: 'Coaching designed around your body, goals, and lifestyle. Strength, conditioning & transformation in Bangkok.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;700;900&family=IBM+Plex+Sans+Thai:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
