import React from 'react';
import { JobDetails } from './jobs-interfaces';
import placeIcon from '../assets/icons/place.svg';
import bookmarkIcon from '../assets/icons/bookmark.svg';
import createStarsRating from '../utils/createStarsRating';
import { formatDistance } from 'date-fns';
import Image from 'next/image';

export default function JobCard(props: JobDetails) {
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
          <Image src={placeIcon} alt="V" className="mr-2" />
          <div className="tracking-wider text-txt-secondary">{` ${props.location.lat}° Lat, ${props.location.long}° Long`}</div>
        </div>
      </div>
      <div className="flex flex-none w-24 h-auto mx-8 items-center fill-gray-700 fill-gray-400">
        {createStarsRating(4)}
      </div>
      <div className='flex flex-col w-36 justify-between'>
        <Image className="ml-auto" src={bookmarkIcon} alt="V" />
        <div className="tracking-wider text-txt-secondary text-right">
          Posted {formatDistance(new Date(`${props.createdAt}`), new Date(), { addSuffix: true })}
        </div>
      </div>
    </div>
  );
}
