import Link from 'next/link'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className='border-t border-divider bg-background'>
      <div className='mx-auto max-w-7xl px-6 py-12'>
        <div className='grid gap-8 md:grid-cols-4'>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-on-surface'>YourBrand</h3>

            <p className='max-w-xs text-sm text-on-surface-muted'>
              Building modern, data-driven healthcare intelligence tools.
            </p>

            <p className='text-xs text-on-surface-muted'>
              © {YEAR} YourBrand, Inc.
            </p>
          </div>

          {/* Column 1 */}
          <div>
            <h4 className='mb-4 text-sm font-semibold text-on-surface'>
              Product
            </h4>

            <ul className='space-y-2 text-sm text-on-surface-muted'>
              <li>
                <Link
                  href='/features'
                  className='hover:text-on-surface transition-colors'
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href='/pricing'
                  className='hover:text-on-surface transition-colors'
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href='/security'
                  className='hover:text-on-surface transition-colors'
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className='mb-4 text-sm font-semibold text-on-surface'>
              Company
            </h4>

            <ul className='space-y-2 text-sm text-on-surface-muted'>
              <li>
                <Link
                  href='/about'
                  className='hover:text-on-surface transition-colors'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/careers'
                  className='hover:text-on-surface transition-colors'
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='hover:text-on-surface transition-colors'
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className='mb-4 text-sm font-semibold text-on-surface'>
              Support
            </h4>

            <ul className='space-y-2 text-sm text-on-surface-muted'>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-on-surface transition-colors'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='/docs'
                  className='hover:text-on-surface transition-colors'
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy'
                  className='hover:text-on-surface transition-colors'
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
