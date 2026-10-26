import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center gap-8 border-b border-indigo-900 bg-indigo-950 px-6 py-5 text-base shadow-lg shadow-indigo-950/20 sm:px-10">
        <span className="text-xl font-bold tracking-tight text-white">
          Gig<span className="text-indigo-300">Hunt</span>
        </span>
        <span className="flex-1"></span>
        <a href="#" className="font-semibold text-indigo-300 transition-colors hover:text-white">Home</a>
        <a href="#" className="text-indigo-100 transition-colors hover:text-white">Pricing</a>
        <a href="#" className="text-indigo-100 transition-colors hover:text-white">About</a>
        <button className="rounded-lg border border-indigo-600 bg-indigo-900 px-5 py-2 font-semibold text-white transition-colors hover:border-indigo-400 hover:bg-indigo-800">
          Log in
        </button>
      </nav>
  )
}

export default Navbar
