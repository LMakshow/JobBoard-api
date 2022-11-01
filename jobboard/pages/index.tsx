import Head from 'next/head';
import JobCard from '../components/JobCard';
import { JobDetails, JobDetailsRes } from '../components/jobs-interfaces';
import { useEffect, useState } from 'react';
import { NetworkError, Preloader } from '../components/Preloader';

const Home = () => {
  const [jobsData, setJobsData] = useState(null as null | JobDetailsRes) 
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
      .then((res) => res.json())
      .then((data) => {
        setJobsData(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="bg-[#E6E9F2] py-7 flex flex-col gap-2 h-min-screen">
      <Head>
        <title>Job Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading && <Preloader />}
      {jobsData && jobsData.length && !isLoading && jobsData.map((job: JobDetails) => (
        <JobCard key={job.id} {...job}></JobCard>
      ))}
      {!isLoading && jobsData && !jobsData.length && <NetworkError message="No data fetched. Probably too many requests?" />}
    </div>
  );
};

export default Home;
