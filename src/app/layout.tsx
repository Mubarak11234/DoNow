// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My App',
  description: 'This is a sample app layout',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          {/* Add your navbar or header here */}
        </header>
        <main>{children}</main>
        <footer>
          {/* Add your footer here */}
        </footer>
      </body>
    </html>
  )
}
