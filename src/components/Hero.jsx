import heroPhoto from '../assets/hero.jpg'

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-surface px-6 pb-20 pt-28 lg:px-8 lg:pb-28 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-navy/[0.06] to-transparent lg:block" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-navy/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange/70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              Open for OJT
            </p>
          </div>

          <h1 className="text-5xl font-bold leading-[1.02] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Elbert
            <span className="block text-navy">Cahanap</span>
          </h1>

          <p className="mt-6 text-xl font-semibold text-slate-700 sm:text-2xl">
            Aspiring Software & Web Developer
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            BSIT student at Bukidnon State University building software, web
            apps, databases, and mobile projects — ready to bring that work
            into a professional team.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="button button-primary px-6 py-3.5"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="button button-secondary px-6 py-3.5"
            >
              Get In Touch
            </a>

            <a
              href="/Elbert-Cahanap-Resume.pdf?v=20261003"
              download="Elbert-Cahanap-Resume.pdf"
              className="button button-secondary px-6 py-3.5"
            >
              Download Resume
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Education
              </dt>
              <dd className="mt-2 text-sm font-semibold leading-5 text-slate-700">
                BS Information Technology
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                University
              </dt>
              <dd className="mt-2 text-sm font-semibold leading-5 text-slate-700">
                Bukidnon State University
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Focus
              </dt>
              <dd className="mt-2 text-sm font-semibold leading-5 text-slate-700">
                Software & Web Development
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto mb-6 w-full max-w-[280px] pb-4 sm:max-w-[300px] lg:mb-0 lg:ml-auto lg:mr-4">
          <div
            className="absolute -right-2 top-5 hidden h-[82%] w-[90%] rounded-3xl bg-navy/90 lg:block"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-3 -left-3 hidden h-16 w-16 rounded-2xl bg-orange/80 lg:block"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-slate-100 shadow-xl ring-1 ring-slate-200">
            <img
              src={heroPhoto}
              alt="Elbert Cahanap, BSIT student and aspiring software developer"
              className="h-[320px] w-full object-cover object-[center_16%] sm:h-[360px] lg:h-[400px]"
            />
          </div>

          <div className="absolute -bottom-4 left-1/2 flex w-[calc(100%+1.5rem)] -translate-x-1/2 justify-center gap-2">
            <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Status
              </p>
              <p className="text-xs font-bold text-navy">Preparing for OJT</p>
            </div>
            <div className="rounded-xl bg-navy px-3 py-2 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-200">
                Degree
              </p>
              <p className="text-xs font-bold text-white">BSIT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
