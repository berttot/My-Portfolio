function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-6 py-24 text-center">
      <div className="max-w-lg">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">
          Page not found
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900">
          This page does not exist.
        </h1>
        <p className="mt-5 leading-7 text-slate-600">
          The link may be incorrect or the page may have moved. You can return
          to the portfolio homepage and continue exploring.
        </p>
        <a href="/" className="button button-primary mt-8 px-6 py-3.5">
          Back to Homepage
        </a>
      </div>
    </main>
  )
}

export default NotFound
