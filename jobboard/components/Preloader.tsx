import Image from 'next/image';
import networkError from '../assets/icons/network-error.svg';

export function Preloader() {
  return (
    <div className="absolute top-1/2 text-xl left-1/2 flex w-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-3 rounded-lg bg-slate-200 p-5">
      Loading data{' '}
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

interface NetworkErrorProps {
  message: string;
}

export function NetworkError(props: NetworkErrorProps) {
  return (
    <div className="flex">
      <div className="flex justify-center w-full gap-3">
        <Image src={networkError} alt="X" />
        <div className="text-lg">{props.message}</div>
      </div>
    </div>
  );
}
