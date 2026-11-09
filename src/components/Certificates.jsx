import { useState } from 'react'
import Section from './Section'
import SectionHeading from './SectionHeading'

const certificates = [
  {
    title: 'Career Service Examination (Professional Level)',
    provider: 'Civil Service Commission',
    category: 'Eligibility',
    file: '/certificates/csc-career-service-professional.pdf',
    image: '/certificates/previews/csc-career-service-professional.jpg',
  },
  {
    title: 'TOPCIT Level 3',
    provider: 'Institute for Information & Communications Technology Promotion',
    category: 'ICT Competency',
    file: '/certificates/topcit-level-3.pdf',
    image: '/certificates/previews/topcit-level-3.jpg',
  },
  {
    title: 'Introduction to AI Literacy and Responsible Use',
    provider: 'Commission on Higher Education / Mapúa University',
    category: 'Artificial Intelligence',
    file: '/certificates/ai-literacy-responsible-use.pdf',
    image: '/certificates/previews/ai-literacy-responsible-use.jpg',
  },
  {
    title: 'Technopreneurship Certificate',
    provider: 'Wadhwani Foundation',
    category: 'Entrepreneurship',
    file: '/certificates/wadhwani-technopreneurship-1.pdf',
    image: '/certificates/previews/wadhwani-technopreneurship-1.jpg',
  },
  {
    title: 'Technopreneurship Certificate',
    provider: 'Wadhwani Foundation',
    category: 'Entrepreneurship',
    file: '/certificates/wadhwani-technopreneurship-2.pdf',
    image: '/certificates/previews/wadhwani-technopreneurship-2.jpg',
  },
  {
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    provider: 'Cisco',
    category: 'Networking',
    file: '/certificates/cisco-ccna-switching-routing-wireless.pdf',
    image: '/certificates/previews/cisco-ccna-switching-routing-wireless.jpg',
  },
  {
    title: 'Python Essentials 1',
    provider: 'Cisco',
    category: 'Programming',
    file: '/certificates/cisco-python-essentials-1.pdf',
    image: '/certificates/previews/cisco-python-essentials-1.jpg',
  },
  {
    title: 'Software Development Webinar',
    provider: 'Department of Information and Communications Technology',
    category: 'Software Development',
    file: '/certificates/dict-software-development.pdf',
    image: '/certificates/previews/dict-software-development.jpg',
  },
  {
    title: 'Project Management Webinar',
    provider: 'Department of Information and Communications Technology',
    category: 'Project Management',
    file: '/certificates/dict-project-management.pdf',
    image: '/certificates/previews/dict-project-management.jpg',
  },
  {
    title: 'AI Learning Webinar',
    provider: 'Department of Information and Communications Technology',
    category: 'Artificial Intelligence',
    file: '/certificates/dict-ai-learning.pdf',
    image: '/certificates/previews/dict-ai-learning.jpg',
  },
  {
    title: 'AI Learning Webinar',
    provider: 'Bukidnon State University',
    category: 'Artificial Intelligence',
    file: '/certificates/buksu-ai-learning.pdf',
    image: '/certificates/previews/buksu-ai-learning.jpg',
  },
]

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const closeViewer = () => setSelectedCertificate(null)

  return (
    <Section id="certificates" variant="white">
      <SectionHeading
        label="Certifications"
        title="Continuous learning beyond the classroom."
        description="Certifications and training programs that have contributed to my technical, professional, and entrepreneurial development."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <article
            key={`${certificate.title}-${index}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-surface transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
          >
            <button
              type="button"
              onClick={() => setSelectedCertificate(certificate)}
              className="relative block aspect-[4/3] w-full overflow-hidden bg-slate-100"
              aria-label={`Preview ${certificate.title}`}
            >
              <img
                src={certificate.image}
                alt={`${certificate.title} from ${certificate.provider}`}
                loading="lazy"
                className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
              />

              <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-orange shadow-sm">
                {certificate.category}
              </span>
            </button>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold leading-6 text-slate-900">
                {certificate.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-500">
                {certificate.provider}
              </p>

              <button
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-orange"
              >
                View Certificate
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeViewer}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeViewer}
              className="absolute -right-2 -top-12 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-slate-800 shadow-lg transition hover:bg-slate-100"
              aria-label="Close certificate viewer"
            >
              ×
            </button>

            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} from ${selectedCertificate.provider}`}
                loading="lazy"
                className="max-h-[75vh] w-full object-contain"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-white">
              <div>
                <p className="font-medium">{selectedCertificate.title}</p>
                <p className="text-white/70">{selectedCertificate.provider}</p>
              </div>

              <a
                href={selectedCertificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-accent"
              >
                Open PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}

export default Certificates
