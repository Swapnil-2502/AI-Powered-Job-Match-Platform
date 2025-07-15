import axios from "../api/axios";
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar";


const JobListings = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        const fetchJobs = async () => {
            try{
                const jobs = await axios("/jobs")
                setJobs(jobs.data)
            }
            catch(error){
                console.error('Failed to fetch jobs:', error);
            }
        }
        fetchJobs()
    },[])

  return (
        <>
        <Navbar />
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Available Job Listings</h2>
            <div className="grid gap-4">
                {jobs.map((job) => (
                <div key={job._id} className="p-4 border rounded-lg shadow">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-gray-600">{job.company} – {job.location}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                        <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        {skill}
                        </span>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </div>
        </>
    );
  
}

export default JobListings