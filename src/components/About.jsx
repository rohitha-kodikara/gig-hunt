import Navbar from "./Navbar"

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
     

      <main className="flex min-h-[calc(100vh-81px)] items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 px-6 py-16">
      <section className="w-full max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300">
          About GigHunt
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Your next opportunity starts here.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-indigo-100">
          GigHunt makes it easy to discover remote and onsite jobs in one simple place.
          We connect talented people with opportunities that fit their goals.
        </p>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
          <div className="rounded-xl border border-indigo-800 bg-indigo-900/50 p-5">
            <h2 className="text-lg font-semibold text-white">Simple search</h2>
            <p className="mt-2 text-sm leading-6 text-indigo-200">
              Find relevant roles without the extra noise.
            </p>
          </div>
          <div className="rounded-xl border border-indigo-800 bg-indigo-900/50 p-5">
            <h2 className="text-lg font-semibold text-white">Flexible work</h2>
            <p className="mt-2 text-sm leading-6 text-indigo-200">
              Explore remote, onsite, and flexible opportunities.
            </p>
          </div>
          <div className="rounded-xl border border-indigo-800 bg-indigo-900/50 p-5">
            <h2 className="text-lg font-semibold text-white">Your growth</h2>
            <p className="mt-2 text-sm leading-6 text-indigo-200">
              Take the next step toward work you enjoy.
            </p>
          </div>
        </div>

        <a
          href="#jobs"
          className="mt-10 inline-flex rounded-lg bg-indigo-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-950/40 transition hover:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-300/40"
        >
          Explore jobs
        </a>
        </section>
      </main>
    </div>
  )
}

export default About
