import { useState } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certificates', label: 'Certifications' },
  { href: '#ojt', label: 'OJT' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  const linkClass =
    'text-sm font-medium text-slate-600 transition hover:text-navy'

  const mobileLinkClass =
    'rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-navy'

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-surface/90 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight text-navy"
          >
            EC<span className="text-orange">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="button button-primary px-5 py-2.5"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-slate-200 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="button button-primary mt-2 w-full"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
