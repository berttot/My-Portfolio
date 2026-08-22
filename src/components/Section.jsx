function Section({ id, variant = 'surface', children, className = '' }) {
  const backgrounds = {
    surface: 'bg-surface',
    white: 'bg-white',
  }

  return (
    <section
      id={id}
      className={`px-6 py-24 lg:px-8 ${backgrounds[variant]} ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

export default Section
