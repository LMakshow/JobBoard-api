import React from 'react';
import { JobDetails } from './jobs-interfaces';
import placeIcon from '../assets/icons/place.svg';
import bookmarkIcon from '../assets/icons/bookmark.svg';
import createStarsRating from '../utils/createStarsRating';
import { formatDistance } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

export default function JobCard(props: JobDetails) {
  return (
    <Link
      href={`/job/${props.id}`}
      className="mx-auto flex min-h-[164px] w-11/12 max-w-[1400px] overflow-hidden rounded-lg bg-[#EFF0F5] hover:bg-slate-100 md:bg-white px-4 py-4 md:py-6 shadow-md transition-all hover:cursor-pointer md:hover:bg-slate-50 hover:shadow-lg"
    >
      <picture className="flex flex-none mt-[45px] md:mt-0 mr-[19px] md:mr-[26px]">
        <source srcSet={props.pictures[0]} type="image/jpg" />
        <img
          className="h-[66px] w-[66px] md:h-[85px] md:w-[85px] rounded-full object-cover"
          src={props.pictures[0]}
          alt="Photo"
        />
      </picture>

      <section className="flex flex-auto flex-col md:flex-row">
        <div className="mr-auto flex flex-col gap-2">
          <div className="text-xl md:font-bold leading-tight tracking-tight text-txt-dark">{props.title}</div>
          <div className="flex tracking-wider text-txt-secondary">{`${props.name} • ${props.address}`}</div>
          <div className="flex">
            <Image src={placeIcon} alt="V" className="mr-2" />
            <div className="tracking-wider text-txt-secondary">{` ${props.location.lat}° Lat, ${props.location.long}° Long`}</div>
          </div>
        </div>

        <div className="flex mb-4 md:mb-0 order-first md:order-none">
          <div className="md:mx-8 flex h-auto w-[54px] md:w-24 flex-none items-center fill-gray-700 fill-gray-400">
            {createStarsRating(4)}
          </div>

          <div className="flex ml-auto md:w-36 flex-col justify-between">
            <Image className="hidden md:block ml-auto" src={bookmarkIcon} alt="V" />
            <div className="text-right text-sm md:text-base font-light tracking-wider text-txt-secondary">
              Posted{' '}
              {formatDistance(new Date(`${props.createdAt}`), new Date(), { addSuffix: true })}
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}
