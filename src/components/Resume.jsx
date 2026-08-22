import Section from './Section'

function Resume() {
  return (
    <Section id="resume" variant="white">
      <div className="rounded-2xl bg-navy p-8 text-white shadow-xl lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
                Resume
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Want to know more about my experience?
            </h2>

            <p className="mt-5 leading-7 text-blue-100">
              View my resume for a concise overview of my education, technical
              skills, projects, and development experience.
            </p>
          </div>

          <div>
            <a
              href="/Elbert-Cahanap-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-orange px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-orange/90"
            >
              View My Resume
              <span className="ml-2" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Resume
