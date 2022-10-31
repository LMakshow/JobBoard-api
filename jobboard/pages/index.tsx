import Head from 'next/head';
import JobCard from '../components/JobCard';
import { JobDetails, JobDetailsRes } from '../components/jobs-interfaces';
import { jobsData } from '../components/jobs-data';
import Link from 'next/link';

export async function getStaticProps() {
  return {
    props: {
      jobsData,
    },
  };
}

const Home = ({ jobsData }: { jobsData: JobDetailsRes }) => {
  return (
    <div className="bg-[#E6E9F2] pt-7 flex flex-col gap-2 h-min-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {jobsData.map((job: JobDetails) => (
        <Link key={job.id} href={`/jobs/${job.id}`}>
          <JobCard {...job}></JobCard>
        </Link>
      ))}
    </div>
  );
};

export default Home;
