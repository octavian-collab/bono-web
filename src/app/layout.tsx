import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bono · Contabilitate pentru antreprenori',
  description: 'Înființare SRL gratuit, contabilitate online, calculator taxe. Tot ce ai nevoie pentru SRL-ul tău, de pe telefon.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:ital,wght@0,500;0,600;1,500;1,600&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="has-grid">
        {children}
      </body>
    </html>
  )
}
