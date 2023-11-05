'use client';
import Cloud from '@/public/cloud.png';
import Image from 'next/image';
import Link from 'next/link';
import { BiChevronLeft } from 'react-icons/bi';

const Error = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl mb-8">Üzgünüz! Bir şeyler ters gitti.</h1>
      <Image src={Cloud} alt="Sad cloud" className="w-80 h-auto mb-8" />
      <p className="text-xl mb-2">Görünüşe göre teknik sorunlar yaşıyoruz ve isteğinizi alamıyoruz.</p>
      <p className="text-xl mb-8">Lütfen daha sonra tekrar deneyin.</p>
      <Link href={'/'} className="flex gap-1 items-center text-lg">
        <BiChevronLeft className="text-2xl" />
        <p className="border-b-2 border-transparent hover:border-white duration-200">Ana sayfaya dön</p>
      </Link>
    </div>
  );
};

export default Error;
