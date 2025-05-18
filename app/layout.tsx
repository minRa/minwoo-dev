// app/layout.tsx
import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-800">
        <header className="bg-gray-900 text-white p-4">
          <nav className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/resume">Resume</Link>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
        <footer className="text-center text-sm text-gray-500 mt-10 p-4">
          © 2025 Minwoo Na
        </footer>
      </body>
    </html>
  )
}
