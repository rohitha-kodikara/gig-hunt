import React from 'react'

const Sidebar = () => {
  return (
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
  )
}

export default Sidebar
