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

          <div className="flex flex-wrap gap-3">
            <a
              href="/Elbert-Cahanap-Resume.pdf?v=20261003"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-accent px-6 py-3"
            >
              View My Resume
              <span className="ml-2" aria-hidden="true">
                ↗
              </span>
            </a>
            <a
              href="/Elbert-Cahanap-Resume.pdf?v=20261003"
              download="Elbert-Cahanap-Resume.pdf"
              className="button border border-white/30 bg-white/10 px-6 py-3 text-white hover:bg-white/20"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Resume
