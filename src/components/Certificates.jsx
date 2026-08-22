import Section from './Section'
import SectionHeading from './SectionHeading'

const certificates = [
  {
    title: 'Technopreneurship Certificate',
    provider: 'Wadhwani Foundation',
    category: 'Entrepreneurship',
    file: '/certificates/wadhwani-technopreneurship-1.pdf',
  },
  {
    title: 'Technopreneurship Certificate',
    provider: 'Wadhwani Foundation',
    category: 'Entrepreneurship',
    file: '/certificates/wadhwani-technopreneurship-2.pdf',
  },
  {
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    provider: 'Cisco',
    category: 'Networking',
    file: '/certificates/cisco-ccna-switching-routing-wireless.pdf',
  },
  {
    title: 'Python Essentials 1',
    provider: 'Cisco',
    category: 'Programming',
    file: '/certificates/cisco-python-essentials-1.pdf',
  },
  {
    title: 'Software Development Webinar',
    provider: 'Department of Information and Communications Technology',
    category: 'Software Development',
    file: '/certificates/dict-software-development.pdf',
  },
  {
    title: 'Project Management Webinar',
    provider: 'Department of Information and Communications Technology',
    category: 'Project Management',
    file: '/certificates/dict-project-management.pdf',
  },
  {
    title: 'AI Learning Webinar',
    provider: 'Department of Information and Communications Technology',
    category: 'Artificial Intelligence',
    file: '/certificates/dict-ai-learning.pdf',
  },
  {
    title: 'AI Learning Webinar',
    provider: 'Bukidnon State University',
    category: 'Artificial Intelligence',
    file: '/certificates/buksu-ai-learning.pdf',
  },
]

function Certificates() {
  return (
    <Section id="certificates" variant="white">
      <SectionHeading
        label="Certifications"
        title="Continuous learning beyond the classroom."
        description="Certifications and training programs that have contributed to my technical, professional, and entrepreneurial development."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {certificates.map((certificate, index) => (
          <article
            key={`${certificate.title}-${index}`}
            className="group rounded-2xl border border-slate-200 bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/10 text-navy">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3 19 6.5v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9v-5L12 3Z"
                  />
                </svg>
              </div>

              <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">
                {certificate.category}
              </span>
            </div>

            <div className="mt-5">
              <h3 className="text-lg font-bold leading-6 text-slate-900">
                {certificate.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-500">
                {certificate.provider}
              </p>
            </div>

            <a
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-orange"
            >
              View Certificate
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Certificates
