function SectionHeading({ label, title, description, className = '' }) {
  return (
    <div className={`mb-12 max-w-2xl ${className}`}>
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-orange" aria-hidden="true" />
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
          {label}
        </p>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-7 text-slate-600">{description}</p>
      )}
    </div>
  )
}

export default SectionHeading
