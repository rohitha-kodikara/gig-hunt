import Navbar from "./Navbar"
import { fakeUserCredetials } from "../jobs"
import { useState } from "react"

const Login = () => {
 const[username, setUsername] = useState("")
 const[password, setPassword] = useState("")

 function handleLogin(e) {
    e.preventDefault()
    console.log("Logging in with:", username, password)
 }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
     

      <main className="flex min-h-[calc(100vh-81px)] items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 px-6 py-16">
        <section className="w-full max-w-md rounded-2xl border border-indigo-800 bg-indigo-950/80 p-8 shadow-2xl shadow-indigo-950/50 backdrop-blur sm:p-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300">Welcome back</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">Log in to GigHunt</h1>
            <p className="mt-3 text-base leading-6 text-indigo-100">
              Find your next opportunity and keep your applications moving.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="username" className="mb-2 block text-sm font-semibold text-indigo-100">
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                placeholder="Enter your username"
                className="w-full rounded-lg border border-indigo-700 bg-slate-900/70 px-4 py-3 text-base text-white placeholder:text-indigo-300/60 outline-none transition focus:border-indigo-300 focus:ring-4 focus:ring-indigo-500/25"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <label htmlFor="password" className="block text-sm font-semibold text-indigo-100">
                  Password
                </label>
                <a href="#forgot-password" className="text-sm font-medium text-indigo-300 hover:text-white">
                  Forgot password?
                </a>
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                className="w-full rounded-lg border border-indigo-700 bg-slate-900/70 px-4 py-3 text-base text-white placeholder:text-indigo-300/60 outline-none transition focus:border-indigo-300 focus:ring-4 focus:ring-indigo-500/25"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-500 px-5 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-950/40 transition hover:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-300/40"
            >
              Log in
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-indigo-100">
            New to GigHunt?{' '}
            <a href="#sign-up" className="font-semibold text-indigo-300 hover:text-white">
              Create an account
            </a>
          </p>
        </section>
      </main>
    </div>
  )
}

export default Login
