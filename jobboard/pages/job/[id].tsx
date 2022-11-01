import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import { jobsData } from '../../components/jobs-data';
import { JobDetails } from '../../components/jobs-interfaces';
import bookmarkIcon from '../../assets/icons/bookmark.svg';
import shareIcon from '../../assets/icons/share.svg';
import placeIcon from '../../assets/icons/place.svg';
import arrowIcon from '../../assets/icons/arrow.svg';
import map from '../../assets/map.png';
import Link from 'next/link';
import { formatDistance } from 'date-fns';

export const getStaticPaths: GetStaticPaths = async () => {
  const paramsArray = jobsData.map((job) => ({ params: { id: job.id } }));
  return {
    paths: paramsArray,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const jobData = jobsData.find((job) => job.id === ((params as ParsedUrlQuery).id as string));
  return {
    props: {
      ...jobData,
    },
  };
};

export default function Job(props: JobDetails) {
  return (
    <div className="m-auto mt-6 flex w-11/12 max-w-[1258px] flex-col items-start justify-between gap-8 bg-white leading-tight text-dark-01 md:mt-[50px] lg:flex-row">
      <main className="max-w-[723px]">
        <div className="flex w-auto flex-col sm:flex-row sm:items-center">
          <h1 className="mr-auto text-[28px] font-bold tracking-wide">Job Details</h1>
          <hr className="mt-2 sm:hidden" />
          <div className="mt-6 flex gap-8 sm:mt-0">
            <div className="flex">
              <Image src={bookmarkIcon} alt="S" className="mr-4" />
              <span className="font-secondary text-lg tracking-tight">Save to my list</span>
            </div>
            <div className="flex">
              <Image src={shareIcon} alt=">" className="mr-4" />
              <span className="font-secondary text-lg tracking-tight">Share</span>
            </div>
          </div>
        </div>
        <hr className="mt-2 hidden sm:flex" />

        <button className="mt-[39px] hidden items-center justify-items-center rounded-lg bg-dark-01 py-[18px] px-[30px] text-xs uppercase text-white transition-all hover:bg-slate-800 hover:shadow-md sm:flex">
          Apply now
        </button>

        <div className="mt-8 flex flex-col justify-between xl:flex-row">
          <h2 className="max-w-[501px] text-2xl font-bold leading-tight tracking-tight">
            {props.title}
          </h2>
          <div className="mt-2 flex flex-row items-center justify-between xl:items-start">
            <div className="font-secondary text-[13px] font-light text-txt-dark/60 sm:font-secondary sm:text-lg sm:text-txt-dark/40 xl:hidden">
              Posted{' '}
              {formatDistance(new Date(`${props.createdAt}`), new Date(), { addSuffix: true })}
            </div>
            <div className="flex flex-col gap-1 text-right xl:gap-0 xl:text-left">
              <div className="text-lg tracking-tight text-txt-dark/80 xl:order-last">
                Brutto, per year
              </div>
              <div className="text-xl font-bold leading-tight tracking-tight">{`€ ${props.salary}`}</div>
            </div>
          </div>
        </div>

        <div className="mt-2 hidden font-secondary text-lg text-txt-dark/40 xl:block">
          Posted {formatDistance(new Date(`${props.createdAt}`), new Date(), { addSuffix: true })}
        </div>
        <div className="mt-2 text-lg leading-tight tracking-tight sm:font-secondary">
          {props.description}
        </div>

        <button className="m-auto mt-[39px] flex items-center rounded-lg bg-dark-01 py-[18px] px-[30px] text-xs uppercase text-white transition-all hover:bg-slate-800 hover:shadow-md sm:mx-0">
          Apply now
        </button>

        <div className="flex flex-col">
          <section className="mt-[135px] flex flex-col gap-2 overflow-x-auto sm:mt-[86px]">
            <h3 className="text-[28px] font-bold tracking-wide">Attached images</h3>
            <hr className="" />
            <div className="mt-[13px] flex flex-none gap-[10px]">
              {props.pictures.map((pic, index) => (
                <picture key={index} className="flex flex-none">
                  <source srcSet={pic} type="image/jpg" />
                  <img
                    className="h-[115px] w-[209px] rounded-lg object-cover"
                    src={pic}
                    alt="Photo"
                  />
                </picture>
              ))}
            </div>
          </section>

          <section className="mt-[63px] flex flex-col gap-2 sm:order-first sm:mt-[86px]">
            <h3 className="text-[28px] font-bold tracking-wide">Additional info</h3>
            <hr className="" />
            <div className="mt-2 font-secondary text-lg leading-tight tracking-tight">
              Employment type
            </div>
            <div className="flex gap-2">
              {props.employment_type.map((type, index) => (
                <div
                  key={index}
                  className="flex h-[49px] max-w-[222px] flex-auto items-center justify-center rounded-lg border border-solid border-[#55699E]/30 bg-[#A1B1DB]/30 px-2 text-center text-[16px] font-bold leading-none text-[#55699E]"
                >
                  {type}
                </div>
              ))}
            </div>

            <div className="mt-4 font-secondary text-lg leading-tight tracking-tight">Benefits</div>
            <div className="flex gap-2">
              {props.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex h-[49px] max-w-[222px] flex-auto items-center justify-center rounded-lg border border-solid border-[#FFCF00] bg-[#FFCF00]/20 px-2 text-center text-[16px] font-bold leading-none text-[#988B49]"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </section>
        </div>

        <Link
          href={'../../'}
          className="mt-[97px] mb-[168px] hidden w-[213px] items-center justify-center rounded-lg bg-[#384564]/10 py-[16px] pr-[3px] text-xs font-semibold uppercase text-dark-01 transition-all hover:bg-[#384564]/20 hover:shadow-md lg:flex 2xl:ml-[-90px]"
        >
          <Image src={arrowIcon} alt="<" className="mr-5 inline" />
          Return to job board
        </Link>

        <h3 className="mt-[86px] text-[28px] font-bold tracking-wide lg:hidden">Contacts</h3>
        <hr className="lg:hidden" />
      </main>

      <section className="relative mb-9 flex max-w-[402px] flex-none flex-col justify-between overflow-hidden rounded-lg bg-[#2A3047] text-white">
        <span className="absolute h-[273px] w-[273px] translate-y-[-12px] translate-x-[-77px] rounded-full bg-[#202336]"></span>
        <div className="relative m-auto mt-[31px] flex flex-col gap-2 px-16">
          <div className="text-[20px] font-bold leading-tight text-[##E7EAF0]">
            {props.name}
          </div>
          <div className="font-secondary text-lg leading-snug tracking-tight text-[#E8EBF3]">
            <Image src={placeIcon} alt="P" className="mr-2 inline -translate-y-1" />
            {props.address}
          </div>
          <div className="font-secondary text-lg leading-snug tracking-tight text-[#E8EBF3]">
            {`${props.phone}, ${props.email}`}
          </div>
        </div>
        <Image src={map} alt="P" className="relative mt-5 rounded-b-lg" />
      </section>
    </div>
  );
}
