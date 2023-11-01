import Link from 'next/link';

interface CityProps {
  name: string;
  code: number;
}

const City = ({ name, code }: CityProps) => {
  return (
    <Link href={`/city/${code}`} className="flex items-center p-2 bg-slate-200 text-cyan-900 border-2 rounded-lg group hover:bg-slate-800 hover:text-slate-200 duration-300">
      <span className="w-12 h-12 bg-cyan-800 text-slate-200 font-semibold flex items-center justify-center rounded-md text-xl group-hover:bg-slate-200 group-hover:text-cyan-900">{code}</span>
      <p className="flex-1 text-center text-lg font-medium">{name}</p>
    </Link>
  );
};

export default City;
