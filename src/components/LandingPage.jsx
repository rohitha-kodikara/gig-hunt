import Navbar from "./Navbar"

const LandingPage = () => {
  return (
   <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
 
      <main className="min-h-[calc(100vh-81px)] bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 px-6 py-28 text-center sm:py-36">
        <h1 className="mx-auto max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Find your next <span className="text-indigo-300">gig</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-indigo-100">
          Browse remote and onsite jobs in one place.
        </p>
        <button className="mt-8 rounded-lg bg-indigo-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-950/40 transition-colors hover:bg-indigo-400">
          Start browsing
        </button>
      </main>
    </div>
  )
}

export default LandingPage
