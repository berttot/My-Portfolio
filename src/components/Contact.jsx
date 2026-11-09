import Section from './Section'
import SectionHeading from './SectionHeading'

function Contact() {
  return (
    <Section id="contact" variant="surface">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          label="Contact"
          title="Let's connect."
          description="If you're looking for an aspiring software and web developer for an internship, practicum, or future opportunity, I'd be glad to connect."
          className="mb-0"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:elbertcahanap27@gmail.com"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-lg"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-navy">Email</p>
              <span className="text-lg text-orange" aria-hidden="true">↗</span>
            </div>
            <p className="mt-2 break-all text-sm text-slate-600 group-hover:text-slate-900">
              elbertcahanap27@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/berttot"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-lg"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-navy">GitHub</p>
              <span className="text-lg text-orange" aria-hidden="true">↗</span>
            </div>
            <p className="mt-2 text-sm text-slate-600 group-hover:text-slate-900">
              View my repositories ↗
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-lg"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-navy">LinkedIn</p>
              <span className="text-lg text-orange" aria-hidden="true">↗</span>
            </div>
            <p className="mt-2 text-sm text-slate-600 group-hover:text-slate-900">
              Connect with me ↗
            </p>
          </a>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-navy">Location</p>
            <p className="mt-2 text-sm text-slate-600">
              Bukidnon, Philippines
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contact
