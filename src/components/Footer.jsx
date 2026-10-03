function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-slate-900">Elbert Cahanap</p>
          <p className="mt-1 text-sm text-slate-500">
            Aspiring Software & Web Developer
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:items-end">
          <a
            href="/Elbert-Cahanap-Resume.pdf?v=20261003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-navy transition hover:text-orange"
          >
            View Resume ↗
          </a>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Elbert Cahanap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
