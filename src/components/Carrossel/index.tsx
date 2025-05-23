type CarrosselProps = {
  children: string;
};

const Carrossel = ({ children }: CarrosselProps) => {
  return (
    <>
      <div className="font-bold text-orange-alura text-lg h-15 bg-white flex justify-center items-center">
        <h2>{children}</h2>
      </div>
      <section className="flex flex-col bg-gray-bg"></section>
    </>
  );
};

export default Carrossel;
