import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-minimal-gray-50 px-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* 404 Number */}
        <div className="space-y-4">
          <h1 className="text-9xl md:text-[12rem] font-bold text-minimal-black leading-none">
            404
          </h1>
          <div className="h-1 w-32 bg-minimal-black mx-auto" />
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Page Not Found
          </h2>
          <p className="text-xl text-minimal-gray-600 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link
            href="/"
            className="btn-primary flex items-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Additional Help */}
        <div className="pt-12 text-sm text-minimal-gray-500">
          <p>
            Need help?{' '}
            <a
              href="mailto:byteminimal@gmail.com"
              className="text-minimal-black underline hover:no-underline"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
