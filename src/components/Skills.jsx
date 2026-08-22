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

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
          >
            <h3 className="text-lg font-bold text-slate-900">{group.title}</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Skills
