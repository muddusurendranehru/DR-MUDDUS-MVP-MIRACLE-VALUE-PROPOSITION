import type { ReactNode } from 'react'
import Link from 'next/link'

interface BlogLayoutProps {
  children: ReactNode
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
      {/* Blog Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-green-700 hover:text-green-800 transition">
              🏥 HOMA Clinic
            </Link>
            <nav className="flex gap-4 items-center">
              <Link href="/blog" className="text-gray-600 hover:text-green-600 transition font-medium">
                Blog
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-green-600 transition font-medium">
                Packages
              </Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-green-600 transition font-medium">
                Dashboard
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </div>

      {/* Blog Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-2">
            © {new Date().getFullYear()} HOMA Clinics Private Limited. All Rights Reserved.
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <Link href="/disclaimer" className="text-gray-400 hover:text-white transition">
              Disclaimer
            </Link>
            <Link href="/pricing" className="text-gray-400 hover:text-white transition">
              Pricing
            </Link>
            <Link href="/" className="text-gray-400 hover:text-white transition">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

