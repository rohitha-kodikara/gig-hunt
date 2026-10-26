const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 px-6 text-center text-slate-100">
      <main className="max-w-lg">
        <p className="text-7xl font-bold tracking-tight text-indigo-300 sm:text-8xl">404</p>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg leading-8 text-indigo-100">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-lg bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-950/40 transition hover:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-300/40"
        >
          Back to home
        </a>
      </main>
    </div>
  )
}

export default NotFound
