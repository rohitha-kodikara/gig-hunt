import React from 'react'
import { useParams } from 'react-router-dom';
import {jobs} from "../jobs"

const JobDetails = () => {
  const params = useParams();
  const job = jobs.find((j) => j.id === parseInt(params.jobId));
  return (
    <section className="bg-slate-200 p-6 text-sm w-1/2">
        <div className="rounded-2xl border border-slate-300 bg-gray-100 p-6 shadow-sm">
          <button className="mb-5 rounded-lg border border-gray-300 bg-gray-100 px-5 py-2 font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-200">
            ← Back
          </button>
          <h2 className="text-xl font-semibold text-indigo-950">{job.title}</h2>
          <p className="mt-1 text-indigo-600">{job.company} · {job.type} · {job.pay}</p>
          <p className="mt-4 text-slate-500">Job id from the URL: {job.id}</p>
          <p className="mt-4 text-slate-500">Job description: {job.description}</p>
        </div>
      </section>
  )
}

export default JobDetails
