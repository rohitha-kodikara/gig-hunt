const AppScreen = () => {
  return (
    <div className="grid min-h-screen grid-cols-[200px_1fr_1fr] bg-slate-50 text-slate-900">
      {/* Sidebar */}
      <aside className="border-r border-indigo-950 bg-indigo-950 p-5 text-sm text-indigo-100">
        <p className="mb-6 text-lg font-semibold text-white">
          Gig<span className="text-indigo-300">Hunt</span>
        </p>
        <nav className="flex flex-col gap-1">
          <a href="#" className="rounded-lg bg-indigo-800 px-3 py-2 font-medium text-white">
            Jobs
          </a>
          <a href="#" className="rounded-lg px-3 py-2 text-indigo-200 hover:bg-indigo-900 hover:text-white">
            Saved
          </a>
        </nav>
      </aside>

      {/* Job list */}
      <section className="border-r border-indigo-200 bg-indigo-50">
        <div className="flex gap-3 border-b border-indigo-200 bg-indigo-100/70 p-4 text-xs">
          <button className="rounded-full border border-indigo-200 bg-white px-3 py-1 text-indigo-700 transition-colors hover:border-indigo-400 hover:bg-indigo-50">
            All
          </button>
          <button className="rounded-full border border-indigo-500 bg-indigo-600 px-3 py-1 font-medium text-white shadow-sm shadow-indigo-200">
            Remote
          </button>
          <button className="rounded-full border border-indigo-200 bg-white px-3 py-1 text-indigo-700 transition-colors hover:border-indigo-400 hover:bg-indigo-50">
            Onsite
          </button>
        </div>

        <a href="#" className="block border-b border-indigo-200 px-4 py-3 transition-colors hover:bg-indigo-100">
          <p className="text-sm font-medium text-slate-800">React developer</p>
          <p className="text-xs text-slate-500">Nova Labs · Remote</p>
        </a>
        <a href="#" className="block border-b border-indigo-200 bg-indigo-200/70 px-4 py-3">
          <p className="text-sm font-medium text-indigo-950">Frontend intern</p>
          <p className="text-xs text-indigo-600">Pixel Co · Remote</p>
        </a>
        <a href="#" className="block border-b border-indigo-200 px-4 py-3 transition-colors hover:bg-indigo-100">
          <p className="text-sm font-medium text-slate-800">UI engineer</p>
          <p className="text-xs text-slate-500">Brightly · Remote</p>
        </a>
      </section>

      {/* Job detail */}
      <section className="bg-violet-50 p-6 text-sm">
        <button className="mb-5 rounded-lg border border-indigo-200 bg-white px-3 py-1.5 text-xs font-medium text-indigo-700 transition-colors hover:border-indigo-400 hover:bg-indigo-50">
          ← Back
        </button>
        <h2 className="text-xl font-semibold text-indigo-950">Frontend intern</h2>
        <p className="mt-1 text-indigo-600">Pixel Co · Remote · $15/hr</p>
        <p className="mt-4 text-slate-500">Job id from the URL: 12</p>
      </section>
    </div>
  )
}



export default AppScreen
