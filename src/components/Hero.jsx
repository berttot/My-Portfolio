import profile from '../assets/profile.png'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-surface px-6 pb-20 pt-32 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-navy/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-orange" aria-hidden="true" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
              4th-Year BSIT Student
            </p>
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Elbert
            <br />
            <span className="text-navy">Cahanap</span>
          </h1>

          <p className="mt-5 text-xl font-semibold text-slate-700 sm:text-2xl">
            Aspiring Software & Web Developer
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I am a BSIT student at Bukidnon State University with hands-on
            experience developing academic projects involving software, web
            applications, databases, mobile applications, and emerging
            technologies.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
            Currently preparing for my OJT, I am looking forward to applying
            what I have learned in a professional environment while continuing
            to learn, contribute, and grow.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-navy-dark hover:shadow-md"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-navy hover:text-navy"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-slate-200 pt-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Education
              </p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                BS Information Technology
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                University
              </p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                Bukidnon State University
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Focus
              </p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                Software & Web Development
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="relative rounded-[2rem] bg-gradient-to-tr from-navy to-orange p-1.5 shadow-2xl">
              <div className="flex h-[340px] w-[300px] items-center justify-center overflow-hidden rounded-[1.7rem] bg-white p-5 sm:h-[420px] sm:w-[360px] sm:p-7">
                <img
                  src={profile}
                  alt="Elbert Cahanap"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Current Status
              </p>
              <p className="mt-1 text-sm font-bold text-navy">
                Preparing for OJT
              </p>
            </div>

            <div className="absolute -right-5 top-8 rounded-2xl bg-navy px-5 py-4 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                Degree
              </p>
              <p className="mt-1 text-sm font-bold text-white">BSIT</p>
            </div>

            <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-orange/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-navy/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
