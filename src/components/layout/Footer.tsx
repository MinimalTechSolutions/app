import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-minimal-black text-minimal-white">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Location & Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-minimal-gray-400">
              Location & Hours
            </h3>
            <div className="space-y-2">
              <address className="not-italic text-minimal-gray-300">
                Ipacaeta Street, N 992<br />
                Guarulhos,<br />
                São Paulo - SP | 017171-150
              </address>
              <div className="pt-2 text-minimal-gray-300">
                <p>9am - Midnight</p>
                <p>Seven days a week</p>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-minimal-gray-400">
              Policies
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:byteminimal@gmail.com"
                  className="text-minimal-gray-300 hover:text-minimal-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-minimal-gray-300 hover:text-minimal-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-minimal-gray-300 hover:text-minimal-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-minimal-gray-400">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:byteminimal@gmail.com"
                  className="text-minimal-gray-300 hover:text-minimal-white transition-colors"
                >
                  byteminimal@gmail.com
                </a>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-minimal-gray-300 hover:text-minimal-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <a
                  href="https://www.alpha-minimalbyte.vercel.app/creators"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-minimal-gray-300 hover:text-minimal-white transition-colors"
                >
                  Creators
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-minimal-gray-400">
              About
            </h3>
            <p className="text-minimal-gray-300 text-sm leading-relaxed">
              MTS-DAO: The unified core of Minimal Technology Solutions. 
              Complex imagination, minimalist execution.
            </p>
            <div className="pt-2">
              <a
                href="https://github.com/MinimalTechSolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-minimal-gray-300 hover:text-minimal-white transition-colors text-sm"
              >
                GitHub →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-minimal-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-minimal-gray-400">
              © {currentYear} Minimal Technology Solutions. Licensed under AGPL-3.0.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/lucasmulato"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-minimal-gray-400 hover:text-minimal-white transition-colors"
              >
                System Architect: Lucas H. Mulato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
