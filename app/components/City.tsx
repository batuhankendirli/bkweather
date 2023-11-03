import Link from 'next/link';

interface CityProps {
  name: string;
  code: number;
}

const City = ({ name, code }: CityProps) => {
  return (
    <Link
      href={`/city/${code}`}
      className="flex items-center p-2 bg-white text-color-tertiary border-2 rounded-full group hover:bg-color-tertiary hover:text-white duration-300"
    >
      <span className="w-12 h-12 bg-color-tertiary text-white font-semibold font-inter flex items-center justify-center rounded-full text-xl group-hover:bg-white group-hover:text-color-tertiary">
        {code}
      </span>
      <p className="flex-1 text-center text-lg font-medium">{name}</p>
    </Link>
  );
};

export default City;
