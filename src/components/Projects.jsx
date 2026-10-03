import { useState } from 'react'
import Section from './Section'
import SectionHeading from './SectionHeading'

const projects = [
  {
    title: 'College of Technology Management Inventory System',
    category: 'Web Application Development',
    image: '/projects/cot-inventory/cot-inventory.png',
    github: 'https://github.com/berttot/COT-Inventory-Management-System.git',
    screenshots: [
      '/projects/cot-inventory/cot-inventory.png',
      '/projects/cot-inventory/dashboard.png',
      '/projects/cot-inventory/manageusers.png',
      '/projects/cot-inventory/manageinventory.png',
      '/projects/cot-inventory/requestlogs.png',
      '/projects/cot-inventory/systemlogs.png',
    ],
    description:
      'A web-based inventory management system developed for the College of Technology. The system provides tools for managing inventory, users, requests, and system activities through role-based access.',
    technologies: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Tailwind CSS',
    ],
    highlights: [
      'Developed a web-based inventory management system',
      'Implemented role-based access and user management',
      'Developed inventory and request management functionality',
      'Implemented system logs and activity tracking',
    ],
  },
  {
    title: 'NSync Mobile Application',
    category: 'Mobile Application Development',
    image: '/projects/nsync/nsync1.png',
    github: 'https://github.com/berttot/Nsync-Mobile-App.git',
    screenshots: [
      '/projects/nsync/nsync1.png',
      '/projects/nsync/nsync2.png',
      '/projects/nsync/nsync3.png',
      '/projects/nsync/nsync4.png',
      '/projects/nsync/nsync5.png',
      '/projects/nsync/nsync6.png',
    ],
    description:
      'A mobile-first team workspace application designed for collaboration and task management. NSync provides role-based dashboards, boards, tasks, and workspace management for teams.',
    technologies: [
      'React Native',
      'Expo',
      'Expo Router',
      'TypeScript',
      'Firebase',
      'Firestore',
    ],
    highlights: [
      'Implemented authentication for sign-in and sign-up',
      'Developed role-based user and admin experiences',
      'Created dashboards, boards, and task management features',
      'Integrated Firebase Authentication and Firestore',
      'Designed a responsive mobile experience',
    ],
  },
  {
    title: 'Hotel Booking System',
    category: 'Web Development',
    image: '/projects/hotel-booking/home.png',
    screenshots: [
      '/projects/hotel-booking/home.png',
      '/projects/hotel-booking/rooms.png',
      '/projects/hotel-booking/sign-in.png',
    ],
    description:
      'A web-based hotel booking system developed to manage hotel reservations and related information using JavaScript and a relational database.',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
    highlights: [
      'Developed as a collaborative project',
      'Implemented database-driven functionality',
      'Applied web development concepts',
      'Worked with a relational database',
    ],
  },
  {
    title: 'Multicab Digital Ticketing System',
    category: 'System Development',
    image: '/projects/multicab/ticket1.png',
    screenshots: [
      '/projects/multicab/ticket1.png',
      '/projects/multicab/ticket2.png',
    ],
    description:
      'A digital ticketing system designed for multicab transportation. The project was developed using C programming and served as an early practical application of programming fundamentals.',
    technologies: ['C Programming'],
    executable:
      '/projects/multicab/Multicab_Digital_Ticketing_System.exe',
    highlights: [
      'Applied fundamental programming concepts',
      'Designed a practical ticketing workflow',
      'Applied problem-solving and logical programming',
      'Developed the system as a complete project',
    ],
  },
  {
    title: 'ProSeeds',
    category: 'UI/UX Design',
    image: '/projects/proseeds/main.png',
    imagePosition: 'top',
    figma:
      'https://www.figma.com/design/vDCYamp1OUBlZIKeI9bpaK/ProSeeds?node-id=0-1&t=vcpnyRWNMCvk8JcM-1',
    screenshots: ['/projects/proseeds/main.png'],
    description:
      'A mobile app UI design for an online seeds marketplace. ProSeeds connects buyers and sellers of agricultural seeds through a clean, nature-inspired interface designed in Figma.',
    technologies: ['Figma', 'UI/UX Design', 'Mobile Design', 'Prototyping'],
    highlights: [
      'Designed mobile app screens for an online seeds marketplace',
      'Created a cohesive green and earth-tone brand identity',
      'Applied user-centered layout and visual hierarchy',
      'Prototyped key user flows in Figma',
    ],
  },
  {
    title: 'FlexiEarn',
    category: 'UI/UX Design',
    image: '/projects/flexiearn/main.png',
    imagePosition: 'top',
    figma:
      'https://www.figma.com/design/E0ObNdirO0pwzHGDosCEAJ/FlexiEarn?node-id=0-1&t=LUxNo1xFcxT0nljR-1',
    screenshots: ['/projects/flexiearn/main.png'],
    description:
      'A web platform UI design for a flexible job marketplace. FlexiEarn helps users find freelance and part-time work with a bold, professional landing page and intuitive navigation designed in Figma.',
    technologies: ['Figma', 'UI/UX Design', 'Web Design', 'Prototyping'],
    highlights: [
      'Designed a responsive landing page for a job marketplace platform',
      'Built navigation, hero section, and category browsing layouts',
      'Used consistent typography and color systems',
      'Created interactive design prototypes in Figma',
    ],
  },
]

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)

  const openGallery = (project) => {
    setSelectedProject(project)
    setCurrentImage(0)
  }

  const closeGallery = () => {
    setSelectedProject(null)
    setCurrentImage(0)
  }

  const nextImage = () => {
    setCurrentImage((current) =>
      current === selectedProject.screenshots.length - 1 ? 0 : current + 1
    )
  }

  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0 ? selectedProject.screenshots.length - 1 : current - 1
    )
  }

  return (
    <Section id="projects" variant="white">
      <SectionHeading
        label="Selected Projects"
        title="Projects, backed by hands-on experience."
        description="A selection of applications, systems, and UI/UX designs I have developed through academic projects, Figma prototyping, experimentation, and hands-on learning across software, web, mobile, databases, and artificial intelligence."
      />

      <div className="space-y-8">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-surface transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
              <div className="relative h-56 overflow-hidden bg-slate-100 sm:h-64 lg:h-full lg:min-h-[320px]">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                    project.imagePosition === 'top'
                      ? 'object-top'
                      : project.imagePosition === 'bottom'
                        ? 'object-bottom'
                        : 'object-center'
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute left-6 top-6">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-navy shadow-sm backdrop-blur-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-10">
                <span className="text-sm font-semibold uppercase tracking-wider text-orange">
                  {project.category}
                </span>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold text-slate-900">
                    Key Highlights
                  </p>

                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-navy ring-1 ring-slate-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-primary"
                    >
                      View in Figma
                    </a>
                  )}

                  {project.screenshots?.length > 0 && (
                    <button
                      type="button"
                      onClick={() => openGallery(project)}
                      className={`button ${
                        project.figma
                          ? 'button-secondary'
                          : 'button-primary'
                      }`}
                    >
                      {project.figma ? 'View Preview' : 'View Screenshots'}
                    </button>
                  )}

                  {project.executable && (
                    <a
                      href={project.executable}
                      download
                      className="button button-secondary border-orange text-orange hover:bg-orange hover:text-white"
                    >
                      Download for Testing
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-secondary"
                    >
                      GitHub Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeGallery}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeGallery}
              className="absolute -right-2 -top-12 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-slate-800 shadow-lg transition hover:bg-slate-100"
              aria-label="Close screenshot gallery"
            >
              ×
            </button>

            <div className="overflow-hidden rounded-2xl bg-slate-900 shadow-2xl">
              <img
                src={selectedProject.screenshots[currentImage]}
                alt={`${selectedProject.title} screenshot ${currentImage + 1}`}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>

            {selectedProject.screenshots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-bold text-slate-800 shadow-lg transition hover:bg-white"
                  aria-label="Previous screenshot"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-bold text-slate-800 shadow-lg transition hover:bg-white"
                  aria-label="Next screenshot"
                >
                  ›
                </button>
              </>
            )}

            <div className="mt-4 flex items-center justify-between text-sm text-white">
              <p className="font-medium">{selectedProject.title}</p>
              <p>
                {currentImage + 1} / {selectedProject.screenshots.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}

export default Projects
