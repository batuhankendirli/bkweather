interface Params {
  params: { id: number };
}

const City = ({ params }: Params) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">{params.id}</h1>
    </div>
  );
};

export default City;
