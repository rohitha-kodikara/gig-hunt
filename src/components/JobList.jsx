import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const JobList = () => {
  return (
    <div className="flex min-h-screen">
      <section className="w-1/2 border-r border-indigo-200 bg-indigo-100">
          <div className="flex gap-4 border-b border-indigo-200 bg-indigo-200/70 px-7 py-5 text-sm">
            <button className="rounded-full border border-indigo-200 bg-white px-5 py-2 text-indigo-700 transition-colors hover:border-indigo-400 hover:bg-indigo-50">
              All
            </button>
            <button className="rounded-full border border-indigo-500 bg-indigo-600 px-5 py-2 font-medium text-white shadow-sm shadow-indigo-200">
              Remote
            </button>
            <button className="rounded-full border border-indigo-200 bg-white px-5 py-2 text-indigo-700 transition-colors hover:border-indigo-400 hover:bg-indigo-50">
              Onsite
            </button>
          </div>

          <Link to="/app/jobs/1" className="block border-b border-indigo-200 px-7 py-4 transition-colors hover:bg-indigo-100">
            <p className="text-base font-medium text-slate-800">React developer</p>
            <p className="mt-1 text-sm text-slate-500">Nova Labs · Remote</p>
          </Link>
          <Link to="/app/jobs/2" className="block border-b border-indigo-200 bg-indigo-200/70 px-7 py-4">
            <p className="text-base font-medium text-indigo-950">Frontend intern</p>
            <p className="mt-1 text-sm text-indigo-600">Pixel Co · Remote</p>
          </Link>
          <Link to="/app/jobs/3" className="block border-b border-indigo-200 px-7 py-4 transition-colors hover:bg-indigo-100">
            <p className="text-base font-medium text-slate-800">UI engineer</p>
            <p className="mt-1 text-sm text-slate-500">Brightly · Remote</p>
          </Link>
      </section>
      <Outlet />
    </div>
  )
}

export default JobList
