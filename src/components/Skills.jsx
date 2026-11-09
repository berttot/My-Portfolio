import Section from './Section'
import SectionHeading from './SectionHeading'

const skillGroups = [
  {
    title: 'Programming',
    skills: ['C', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Laravel'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'MySQL', 'SQL'],
  },
  {
    title: 'Development',
    skills: [
      'REST APIs',
      'CRUD Operations',
      'JWT Authentication',
      'Responsive Design',
    ],
  },
  {
    title: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'Figma',
      'VS Code',
      'Postman',
      'MongoDB Compass',
      'XAMPP',
    ],
  },
]

function Skills() {
  return (
    <Section id="skills" variant="surface">
      <SectionHeading
        label="Technical Skills"
        title="Technologies I use to build solutions."
        description="My technical experience has developed through academic projects, system development, and continuous hands-on learning."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <article
            key={group.title}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
          >
            <div
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange to-navy"
              aria-hidden="true"
            />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange">
                  Skill set
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">
                  {group.title}
                </h3>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-navy transition group-hover:bg-navy group-hover:text-white">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              {group.skills.length}{' '}
              {group.skills.length === 1 ? 'skill' : 'skills'}
            </div>

            <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-200 pt-4">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600 ring-1 ring-slate-200 transition group-hover:bg-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Skills
