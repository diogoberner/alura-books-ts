import { FaSearch } from "react-icons/fa";
import Input from "../Input";

const HeroSearch = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[215px] sm:h-[330px] bg-[url('/banner-bg.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-blue to-light-blue opacity-75 z-10" />

      <div className="relative z-20 p-4 text-white flex flex-col items-center">
        <h1 className="text-lg sm:text-4xl font-bold text-center">
          Já sabe por onde começar?
        </h1>
        <p className="mt-2 text-center mb-4">
          Encontre em nossa estante o que precisa para seu desenvolvimento!
        </p>
        <Input type="text" placeholder="Qual será sua próxima leitura?">
          <FaSearch size={24} />
        </Input>
      </div>
    </section>
  );
};

export default HeroSearch;
