import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import { jobsData } from '../../components/jobs-data';
import { JobDetails } from '../../components/jobs-interfaces';

export const getStaticPaths: GetStaticPaths = async () => {
  const paramsArray = jobsData.map(job => (
    { params: { id: job.id }}
  ));
  return {
    paths: paramsArray,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const jobData = jobsData.find(job => job.id === ((params as ParsedUrlQuery).id as string))
  return {
    props: {
      ...jobData
    }
  }
}

export default function Job(props: JobDetails) {
  return (
    <div className="flex w-11/12 max-w-[1400px] h-[164px] mx-auto px-4 py-6 bg-white rounded-lg overflow-hidden shadow-md hover:bg-slate-50 hover:shadow-lg hover:cursor-pointer transition-all">
      <picture className="mr-[26px]">
        <source srcSet={props.pictures[0]} type="image/jpg" />
        <img
          className="object-cover w-[85px] h-[85px] rounded-full"
          src={props.pictures[0]}
          alt="Photo"
        />
      </picture>
      <div className="flex flex-col gap-2 mr-auto">
        <div className="text-xl tracking-tight font-bold text-txt-dark">{props.title}</div>
        <div className="flex tracking-wider text-txt-secondary">{`${props.name} • ${props.address}`}</div>
        <div className="flex">
          <div className="tracking-wider text-txt-secondary">{` ${props.location.lat}° Lat, ${props.location.long}° Long`}</div>
        </div>
      </div>
      <div className='flex flex-col w-36 justify-between'>
        <div className="tracking-wider text-txt-secondary text-right">
          Posted
        </div>
      </div>
    </div>
  );
}
