
import { Link, Outlet,useLocation,  useSearchParams } from 'react-router-dom'
import {jobs} from "../jobs"


const jobTypes = ["all", "remote", "onsite"]

const JobList = () => {
const location = useLocation();
   const [searchParams, setSearchParams] = useSearchParams()

  const selectedType = searchParams.get('type') || 'all'

  const filteredJobs =
    selectedType === 'all'
      ? jobs
      : jobs.filter((job) => job.type === selectedType)

  const handleTypeChange = (type) => {
    setSearchParams({ type })
  }


  return (
    <div className="flex min-h-screen">
      <section className="w-1/2 border-r border-indigo-200 bg-indigo-100">
          <div className="flex gap-4 border-b border-indigo-200 bg-indigo-200/70 px-7 py-5 text-sm">
            {jobTypes.map((type) => (
              <button
                key={type}
                className={`rounded-full border px-5 py-2 font-medium transition-colors ${
                  selectedType === type
                    ? "border-indigo-500 bg-indigo-600 text-white shadow-sm shadow-indigo-200"
                    : "border-indigo-200 bg-white text-indigo-700 hover:border-indigo-400 hover:bg-indigo-50"
                }`}
                onClick={() => handleTypeChange(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          
          </div>
        {
          filteredJobs.map((job) => (
            <Link key={job.id} to={
              {
              pathname: `/app/jobs/${job.id}`,
              search: location.search,
            }} className="hover:text-yellow-50 hover:bg-blue-600  block border-b border-indigo-200 px-7 py-4 transition-colors ">
              <p className="text-base font-medium ">{job.title}</p>
              <p className="mt-1 text-sm ">{job.company} · {job.type}</p>
            </Link>
          ))
        }
       

      </section>
      <Outlet />
    </div>
  )
}

export default JobList
