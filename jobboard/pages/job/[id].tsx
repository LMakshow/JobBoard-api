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
    <div className="flex max-w-[1258px] m-auto mt-[50px] justify-between bg-white leading-tight text-dark-01">
      <main className="w-[723px]">
        <div className="flex w-auto items-center gap-8">
          <h1 className="mr-auto text-[28px] font-bold tracking-wide">Job Details</h1>
          <div className="flex">
            <Image src={bookmarkIcon} alt="S" className="mr-4" />
            <span className="font-secondary text-lg tracking-tight">Save to my list</span>
          </div>
          <div className="flex">
            <Image src={shareIcon} alt=">" className="mr-4" />
            <span className="font-secondary text-lg tracking-tight">Share</span>
          </div>
        </div>
        <hr className="mt-2" />

        <button className="mt-[39px] flex items-center justify-items-center rounded-lg bg-dark-01 py-[18px] px-[30px] text-xs uppercase text-white transition-all hover:bg-slate-800 hover:shadow-md">
          Apply now
        </button>

        <div className="mt-8 flex justify-between">
          <h2 className="w-[501px] text-2xl font-bold leading-tight tracking-tight">
            Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d)
            für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)
          </h2>
          <div>
            <div className="text-xl font-bold leading-tight tracking-tight">€ 54 000—60 000</div>
            <div className="text-lg tracking-tight">Brutto, per year</div>
          </div>
        </div>

        <div className="mt-2 font-secondary text-lg text-txt-dark/40">Posted 2 days ago</div>
        <div className="mt-2 font-secondary text-lg leading-tight tracking-tight">
          At WellStar, we all share common goals. That’s what makes us so successful – and such an
          integral part of our communities. We want the same things, for our organization, for our
          patients, and for our colleagues. As the most integrated healthcare provider in Georgia,
          this means we pride ourselves on investing in the communities that we serve. We continue
          to provide innovative care models, focused on improving quality and access to healthcare.
        </div>

        <button className="mt-[39px] flex items-center rounded-lg bg-dark-01 py-[18px] px-[30px] text-xs uppercase text-white transition-all hover:bg-slate-800 hover:shadow-md">
          Apply now
        </button>

        <section className="mt-[86px] flex flex-col gap-2">
          <h3 className="text-[28px] font-bold tracking-wide">Additional info</h3>
          <hr className="" />
          <div className="mt-2 font-secondary text-lg leading-tight tracking-tight">
            Employment type
          </div>
          <div className="flex gap-2">
            <div className="flex h-[49px] w-[222px] items-center justify-center rounded-lg border border-solid border-[#55699E]/30 bg-[#A1B1DB]/30 text-center text-[16px] font-bold leading-none text-[#55699E]">
              Full time
            </div>
            <div className="flex h-[49px] w-[222px] items-center justify-center rounded-lg border border-solid border-[#55699E]/30 bg-[#A1B1DB]/30 text-center text-[16px] font-bold leading-none text-[#55699E]">
              Part time
            </div>
            <div className="flex h-[49px] w-[222px] items-center justify-center rounded-lg border border-solid border-[#55699E]/30 bg-[#A1B1DB]/30 text-center text-[16px] font-bold leading-none text-[#55699E]">
              Temporary
            </div>
          </div>

          <div className="mt-4 font-secondary text-lg leading-tight tracking-tight">Benefits</div>
          <div className="flex gap-2">
            <div className="flex h-[49px] w-[222px] items-center justify-center rounded-lg border border-solid border-[#FFCF00] bg-[#FFCF00]/20 text-center text-[16px] font-bold leading-none text-[#988B49]">
              Flexible schedule
            </div>
            <div className="flex h-[49px] w-[222px] items-center justify-center rounded-lg border border-solid border-[#FFCF00] bg-[#FFCF00]/20 text-center text-[16px] font-bold leading-none text-[#988B49]">
              Relocation assistance
            </div>
          </div>
        </section>

        <section className="mt-[86px] flex flex-col gap-2">
          <h3 className="text-[28px] font-bold tracking-wide">Attached images</h3>
          <hr className="" />
          <div className='flex gap-[10px] mt-[13px]'>
            <picture>
              <source srcSet={"https://picsum.photos/200/300"} type="image/jpg" />
              <img
                className="w-[209px] h-[115px] rounded-lg object-cover"
                src={"https://picsum.photos/200/300"}
                alt="Photo"
              />
            </picture>
            <picture>
              <source srcSet={"https://picsum.photos/200/300"} type="image/jpg" />
              <img
                className="w-[209px] h-[115px] rounded-lg object-cover"
                src={"https://picsum.photos/200/300"}
                alt="Photo"
              />
            </picture>
            <picture>
              <source srcSet={"https://picsum.photos/200/300"} type="image/jpg" />
              <img
                className="w-[209px] h-[115px] rounded-lg object-cover"
                src={"https://picsum.photos/200/300"}
                alt="Photo"
              />
            </picture>
          </div>
        </section>

        <Link href={"../../"} className="mt-[97px] ml-[-90px] mb-[168px] w-[213px] flex items-center font-semibold justify-center rounded-lg bg-[#384564]/10 py-[16px] pr-[3px] text-xs uppercase text-dark-01 transition-all hover:bg-[#384564]/20 hover:shadow-md">
        <Image src={arrowIcon} alt="<" className="mr-5 inline" />Return to job board
        </Link>
      </main>

      <section className="flex flex-col justify-between relative overflow-hidden h-[436px] w-[402px] rounded-lg bg-[#2A3047] text-white">
        <span className="absolute h-[273px] w-[273px] translate-y-[-12px] translate-x-[-77px] rounded-full bg-[#202336]"></span>
        <div className="relative m-auto mt-[31px] flex w-[277px] flex-col gap-2">
          <div className="text-[20px] text-[##E7EAF0] font-bold leading-tight">
            Department name. University Hospital Giessen.
          </div>
          <div className="font-secondary text-lg text-[#E8EBF3] leading-snug tracking-tight">
            <Image src={placeIcon} alt="P" className="mr-2 inline -translate-y-1" />
            AKH Wien, 1090 Wien, Währinger Gürtel 18-20
          </div>
          <div className="font-secondary text-lg text-[#E8EBF3] leading-snug tracking-tight">
            +43 (01) 40400-12090, post_akh_diz@akhwien.at
          </div>
        </div>
        <Image src={map} alt="P" className="relative rounded-b-lg" />
      </section>
    </div>
  );
}
