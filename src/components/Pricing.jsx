import Navbar from "./Navbar"

const Pricing = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
    

      <main className="bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 px-6 py-16 sm:px-10 lg:px-16">
        <section className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300">
              Simple pricing
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Choose the plan that fits you
            </h1>
            <p className="mt-5 text-lg leading-8 text-indigo-100">
              Get the tools you need to find better opportunities and grow your career.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="flex flex-col rounded-2xl border border-indigo-800 bg-indigo-950/70 p-7 shadow-xl shadow-indigo-950/30">
              <h2 className="text-2xl font-semibold text-white">Starter</h2>
              <p className="mt-3 text-indigo-200">For getting started with your search.</p>
              <p className="mt-7 text-4xl font-bold text-white">
                Free <span className="text-base font-normal text-indigo-300">/ forever</span>
              </p>
              <ul className="mt-8 space-y-4 text-indigo-100">
                <li>✓ Browse all job listings</li>
                <li>✓ Save up to 5 jobs</li>
                <li>✓ Basic job alerts</li>
              </ul>
              <a href="#get-started" className="mt-9 rounded-lg border border-indigo-500 px-5 py-3 text-center font-semibold text-indigo-200 transition hover:bg-indigo-800 hover:text-white">
                Get started
              </a>
            </article>

            <article className="relative flex flex-col rounded-2xl border-2 border-indigo-400 bg-indigo-600 p-7 shadow-2xl shadow-indigo-950/50">
              <span className="absolute -top-3 left-7 rounded-full bg-indigo-200 px-3 py-1 text-xs font-bold uppercase tracking-wide text-indigo-950">
                Most popular
              </span>
              <h2 className="text-2xl font-semibold text-white">Professional</h2>
              <p className="mt-3 text-indigo-100">For focused and consistent job seekers.</p>
              <p className="mt-7 text-4xl font-bold text-white">
                $9 <span className="text-base font-normal text-indigo-100">/ month</span>
              </p>
              <ul className="mt-8 space-y-4 text-white">
                <li>✓ Unlimited saved jobs</li>
                <li>✓ Personalized job alerts</li>
                <li>✓ Application tracking</li>
              </ul>
              <a href="#start-professional" className="mt-9 rounded-lg bg-white px-5 py-3 text-center font-semibold text-indigo-700 transition hover:bg-indigo-50">
                Choose Professional
              </a>
            </article>

            <article className="flex flex-col rounded-2xl border border-violet-700 bg-violet-950/70 p-7 shadow-xl shadow-indigo-950/30">
              <h2 className="text-2xl font-semibold text-white">Career Plus</h2>
              <p className="mt-3 text-violet-200">For candidates ready to move faster.</p>
              <p className="mt-7 text-4xl font-bold text-white">
                $19 <span className="text-base font-normal text-violet-300">/ month</span>
              </p>
              <ul className="mt-8 space-y-4 text-violet-100">
                <li>✓ Everything in Professional</li>
                <li>✓ Resume improvement tips</li>
                <li>✓ Priority support</li>
              </ul>
              <a href="#start-career-plus" className="mt-9 rounded-lg border border-violet-400 px-5 py-3 text-center font-semibold text-violet-100 transition hover:bg-violet-800 hover:text-white">
                Choose Career Plus
              </a>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Pricing
