'use client';
import Skeleton from 'react-loading-skeleton';

const Loading = () => {
  return (
    <div>
      <nav className="h-[75px] flex justify-between items-center mb-4 py-4 border-b-2 border-color-fourth border-opacity-10">
        <Skeleton height={30} width={108} />
        <Skeleton height={41} className="w-[100px] sm:w-[209px]" />
      </nav>
      <div className="h-[84px] flex justify-between items-center mb-2">
        <div className="flex items-center gap-2 sm:gap-3">
          <Skeleton height={50} width={50} circle />
          <Skeleton height={40} width={45} />
        </div>
        <div>
          <Skeleton height={36} className="w-[120px] sm:w-[200px]" />
          <p className="flex items-center justify-end">
            <Skeleton height={25} width={80} />
          </p>
          <p className="flex items-center justify-end">
            <Skeleton height={20} width={70} />
          </p>
        </div>
      </div>
      <div className="mb-12 flex gap-2">
        <Skeleton height={28} width={65} />
        <Skeleton height={28} width={90} />
        <Skeleton height={28} width={42} />
        <Skeleton height={28} width={62} />
      </div>
      <div className="h-[320px] mb-32 px-6 sm:px-0">
        <Skeleton height={320} borderRadius={'1.5rem'} />
      </div>
      <div className="h-[248px] flex gap-3 overflow-x-hidden pb-2">
        <Skeleton height={240} width={320} borderRadius={'1.5rem'} />
        <Skeleton height={240} width={160} borderRadius={'1.5rem'} />
        <Skeleton height={240} width={160} borderRadius={'1.5rem'} />
        <Skeleton height={240} width={160} borderRadius={'1.5rem'} />
        <Skeleton height={240} width={160} borderRadius={'1.5rem'} />
        <Skeleton height={240} width={160} borderRadius={'1.5rem'} />
      </div>
    </div>
  );
};

export default Loading;
