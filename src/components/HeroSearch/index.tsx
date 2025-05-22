import { FaSearch } from "react-icons/fa";

const HeroSearch = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[215px] sm:h-[330px] bg-[url('/banner-bg.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-blue to-light-blue opacity-75 z-10" />

      <div className="relative z-20 p-4 text-white flex flex-col items-center">
        <h1 className="text-lg sm:text-4xl font-bold text-center">
          Já sabe por onde começar?
        </h1>
        <p className="mt-2 text-center">
          Encontre em nossa estante o que precisa para seu desenvolvimento!
        </p>
        <label className="mt-4 w-full flex relative justify-center items-center">
          <span className="absolute left-[11%] text-white pointer-events-none">
            <FaSearch size={24} />
          </span>
          <input
            type="text"
            placeholder="Qual será sua próxima leitura?"
            className="p-2 rounded-4xl border-1 border-white bg-transparent h-14 text-white placeholder:text-white text-center w-11/12 sm:w-11/12"
          />
        </label>
      </div>
    </section>
  );
};

export default HeroSearch;
