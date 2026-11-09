import { useState } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certificates', label: 'Certifications' },
  { href: '#ojt', label: 'OJT' },
]

function Navbar({ isDark, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  const linkClass =
    'text-sm font-semibold text-slate-600 transition hover:text-navy'

  const mobileLinkClass =
    'rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-navy'

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-3.5">
          <a
            href="#home"
            onClick={closeMenu}
            className="rounded-lg text-xl font-bold tracking-tight text-navy transition hover:opacity-80"
          >
            EC<span className="text-orange">.</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
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

            <button
              type="button"
              onClick={onToggleTheme}
              className="theme-toggle rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:border-navy hover:text-navy"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span aria-hidden="true">{isDark ? '☀' : '☾'}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
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

              <button
                type="button"
                onClick={onToggleTheme}
                className="theme-toggle mt-2 flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:border-navy hover:text-navy"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <span aria-hidden="true">{isDark ? '☀' : '☾'}</span>
                {isDark ? 'Light mode' : 'Dark mode'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
