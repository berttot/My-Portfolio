import Section from './Section'
import SectionHeading from './SectionHeading'

function Education() {
  return (
    <Section id="education" variant="surface">
      <SectionHeading
        label="Education"
        title="Academic foundation."
        description="My studies have given me a foundation in programming, software development, databases, web technologies, and emerging areas of information technology."
      />

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-10">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange to-navy" />
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange">
              Bachelor of Science in Information Technology
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              Bukidnon State University
            </h3>

            <p className="mt-2 text-slate-500">4th-Year Student</p>
          </div>

          <span className="rounded-full bg-navy/10 px-4 py-2 text-xs font-bold text-navy">
            BSIT
          </span>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-8">
          <p className="leading-7 text-slate-600">
            Throughout my BSIT studies, I have developed practical experience
            through academic projects involving programming, web development,
            databases, application development, and artificial intelligence.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-6">
            {[
              'Programming',
              'Web Development',
              'Databases',
              'Object-Oriented Programming',
              'Data Structures',
              'Web Application Development',
              'Mobile Development',
              'Artificial Intelligence',
            ].map((area) => (
              <span
                key={area}
                className="rounded-full bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600 ring-1 ring-slate-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Education
