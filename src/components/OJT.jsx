import Section from './Section'
import SectionHeading from './SectionHeading'

const strengths = [
  'Programming fundamentals',
  'Web development experience',
  'Experience across frontend, backend, and databases',
  'Mobile application development',
  'Problem-solving mindset',
  'Willingness to learn and adapt',
]

function OJT() {
  return (
    <Section id="ojt" variant="surface">
      <SectionHeading
        label="OJT / Practicum"
        title="Ready to turn academic experience into real-world experience."
        description="As a fourth-year BSIT student, I am preparing for my practicum and looking for an opportunity to apply what I have learned in a professional setting."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6 text-base leading-8 text-slate-600">
          <p>
            I am particularly interested in opportunities involving
            <strong className="font-semibold text-slate-900">
              {' '}
              software development, web development, and application development
            </strong>
            , while remaining open to learning new technologies and contributing
            to different areas of IT.
          </p>

          <p>
            My goal is not only to complete my required practicum but to become
            a productive member of the team, learn professional development
            practices, and gain experience working on real-world systems.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange to-navy" />
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-900">
              What I can bring
            </p>
            <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-bold text-orange">
              Ready to learn
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {strengths.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm leading-5 text-slate-600"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy text-xs text-white">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default OJT
