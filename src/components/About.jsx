import Section from './Section'
import SectionHeading from './SectionHeading'

const journey = [
  {
    year: '1st Year',
    focus: 'Programming Fundamentals',
    highlight: 'Multicab Digital Ticketing System (C)',
  },
  {
    year: '2nd Year',
    focus: 'Web & Database Development',
    highlight: 'Hotel Booking System (JavaScript & MySQL)',
  },
  {
    year: '3rd Year',
    focus: 'Full-Stack, AI & Networking',
    highlight: 'COT Inventory, Higaonon AI App & Networking 2',
  },
  {
    year: '4th Year',
    focus: 'Professional Readiness',
    highlight: 'NSync Mobile App & OJT Preparation',
  },
]

function About() {
  return (
    <Section id="about" variant="white">
      <SectionHeading
        label="About Me"
        title="From programming fundamentals to full-stack development."
      />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 text-base leading-8 text-slate-600">
          <p>
            I'm{' '}
            <strong className="font-semibold text-slate-900">
              Elbert Cahanap
            </strong>
            , a 4th-year Bachelor of Science in Information Technology student
            at Bukidnon State University. I chose Information Technology as
            my first-choice course because I wanted to understand how
            technology can be used to solve problems and build useful systems.
          </p>

          <p>
            My journey in IT started with{' '}
            <strong className="font-semibold text-slate-900">
              C programming
            </strong>
            , where I learned the fundamentals of programming, logical thinking,
            and problem-solving. As a final project, I developed a{' '}
            <strong className="font-semibold text-slate-900">
              Multicab Digital Ticketing System
            </strong>
            , which gave me my first experience turning programming concepts
            into a practical software solution.
          </p>

          <p>
            In my second year, I expanded my knowledge into
            <strong className="font-semibold text-slate-900">
              {' '}
              web development, Object-Oriented Programming, databases, and data
              structures and algorithms
            </strong>
            . Together with a partner, I developed a
            <strong className="font-semibold text-slate-900">
              {' '}
              Hotel Booking System using JavaScript and MySQL
            </strong>
            .
          </p>

          <p>
            My third year introduced more advanced technologies and challenged
            me to work across different parts of a system. I developed the
            <strong className="font-semibold text-slate-900">
              {' '}
              College of Technology Management Inventory System using the MERN
              stack
            </strong>
            , giving me hands-on experience with full-stack development.
          </p>

          <p>
            During the same period, I also worked on our
            <strong className="font-semibold text-slate-900">
              {' '}
              AI-powered translation application for the Higaonon language
            </strong>{' '}
            of Bukidnon. This project introduced me to applying artificial
            intelligence and language technologies to a real-world cultural and
            community need.
          </p>

          <p>
            In my third year, I also completed{' '}
            <strong className="font-semibold text-slate-900">
              Networking 2
            </strong>
            , which strengthened my understanding of how computers and services
            actually communicate. Through this subject, I gained practical
            knowledge in{' '}
            <strong className="font-semibold text-slate-900">
              switching, routing, VLANs, wireless networking, and network
              troubleshooting
            </strong>
            . I learned how to configure and secure network devices, understand
            traffic flow across a network, and apply Cisco networking concepts
            through hands-on labs. This also led me to complete the{' '}
            <strong className="font-semibold text-slate-900">
              Cisco CCNA: Switching, Routing, and Wireless Essentials
            </strong>{' '}
            course, which helped me connect software development with the
            infrastructure that applications run on.
          </p>

          <p>
            Now, as a fourth-year BSIT student preparing for my practicum, I
            am looking forward to applying what I have learned in a professional
            environment, gaining real-world experience, and continuing to grow
            as an IT professional.
          </p>
        </div>

        <div className="lg:pl-8">
          <div className="rounded-2xl border border-slate-200 bg-surface p-8">
            <h3 className="text-lg font-bold text-slate-900">
              Academic Journey
            </h3>

            <div className="mt-6 space-y-6">
              {journey.map((item, index) => (
                <div key={item.year} className="relative pl-6">
                  {index < journey.length - 1 && (
                    <span
                      className="absolute bottom-0 left-[7px] top-6 w-px bg-slate-200"
                      aria-hidden="true"
                    />
                  )}

                  <span
                    className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-navy bg-white"
                    aria-hidden="true"
                  />

                  <p className="text-xs font-semibold uppercase tracking-wider text-orange">
                    {item.year}
                  </p>

                  <p className="mt-1 font-medium text-slate-900">
                    {item.focus}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {item.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
