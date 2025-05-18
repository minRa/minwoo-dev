'use client'

// app/layout.tsx
import './globals.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(prefersDark)
  }, [])

  return (
    <html lang="en" className={isDarkMode ? 'dark' : ''} suppressHydrationWarning>
      <Head>
        <title>Minwoo Na - Frontend Developer</title>
        <meta name="description" content="Senior Frontend Developer specializing in React, Next.js, and TypeScript. Building performant and accessible web experiences." />
        <meta name="keywords" content="frontend developer, react, next.js, typescript, web development, javascript" />
        <meta name="author" content="Minwoo Na" />
        <meta property="og:title" content="Minwoo Na - Frontend Developer" />
        <meta property="og:description" content="Senior Frontend Developer specializing in React, Next.js, and TypeScript." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://minwoo.dev" />
        <meta property="og:image" content="/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="font-sans antialiased dark:bg-gray-900 dark:text-white">
        <header className="bg-gray-900 dark:bg-gray-800 text-white p-6">
          <nav className="flex justify-between items-center max-w-4xl mx-auto">
            <div className="flex gap-4">
              <Link href="/" className="text-xl font-bold hover:text-gray-400 transition-colors">Minwoo Na</Link>
              <Link href="/projects" className="group">
                <span className="group-hover:scale-105 transition-transform hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 px-2 rounded-md">
                  Projects
                </span>
              </Link>
              <Link href="/resume" className="group">
                <span className="group-hover:scale-105 transition-transform hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 px-2 rounded-md">
                  Resume
                </span>
              </Link>
              <Link href="/contact" className="group">
                <span className="group-hover:scale-105 transition-transform hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 px-2 rounded-md">
                  Contact
                </span>
              </Link>
            </div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="px-4 py-2 rounded-lg transition-all hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-gray-900 flex items-center gap-2"
            >
              <span className="text-sm font-medium">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              <span className="text-xl">{isDarkMode ? '☀️' : '🌙'}</span>
            </button>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="text-center text-sm text-gray-400 mt-16 py-8 border-t border-gray-200 dark:border-gray-700">
          <p>© 2025 Minwoo Na. Built with Next.js & TypeScript</p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="https://github.com/minwoona1" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/minwoona1" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </footer>
      </body>
    </html>
  )
}
