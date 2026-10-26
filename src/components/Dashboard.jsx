import { Link } from "react-router-dom"

const Dashboard = () => {
  const statistics = [
    {
      topic: 'Applications Sent',
      subtopic: 'this month',
      stat: '24',
      color: 'bg-blue-100 border-blue-200 text-blue-950',
      detailColor: 'text-blue-700',
    },
    {
      topic: 'Job list',
      subtopic: 'navigate to jobs',
      stat: '128',
      color: 'bg-emerald-100 border-emerald-200 text-emerald-950',
      detailColor: 'text-emerald-700',
    },
    {
      topic: 'Outdated Applications',
      subtopic: 'in the last 30 days',
      stat: '16',
      color: 'bg-violet-100 border-violet-200 text-violet-950',
      detailColor: 'text-violet-700',
    },
    {
      topic: 'Profile Views',
      subtopic: 'in the last 30 days',
      stat: '86',
      color: 'bg-amber-100 border-amber-200 text-amber-950',
      detailColor: 'text-amber-700',
    },
    {
      topic: 'Interviews',
      subtopic: 'upcoming this week',
      stat: '5',
      color: 'bg-rose-100 border-rose-200 text-rose-950',
      detailColor: 'text-rose-700',
    },
    {
      topic: 'Response Rate',
      subtopic: 'from your applications',
      stat: '68%',
      color: 'bg-cyan-100 border-cyan-200 text-cyan-950',
      detailColor: 'text-cyan-700',
    },
  ]

  return (
    <section className="min-h-full bg-slate-100 px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Overview
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-indigo-950">
            Welcome to your dashboard
          </h1>
          <p className="mt-2 text-base text-slate-600">
            Keep track of your job search at a glance.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 cursor-pointer xl:grid-cols-3">
          {statistics.map((item) => (
        
            item.topic === 'Job list' ? (
                <Link to="jobs" key={item.topic}>
              <article
                key={item.topic}
                className={`min-h-44  rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${item.color}`}
              >
                <p className="text-lg font-semibold">{item.topic}</p>
                <p className={`mt-2 text-sm font-medium ${item.detailColor}`}>
                {item.subtopic}
              </p>
              <p className="mt-6 text-4xl font-bold tracking-tight">{item.stat}</p>
            </article>
            </Link>
            ):(
                <article
                key={item.topic}
                className={`min-h-44  rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${item.color}`}
              >
                <p className="text-lg font-semibold">{item.topic}</p>
                <p className={`mt-2 text-sm font-medium ${item.detailColor}`}>
                {item.subtopic}
              </p>
              <p className="mt-6 text-4xl font-bold tracking-tight">{item.stat}</p>
            </article>
            )
            ))}
        </div>
      </div>
    </section>
  )
}

export default Dashboard
