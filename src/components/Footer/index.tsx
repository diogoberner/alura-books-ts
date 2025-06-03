import { Link } from "react-router-dom";
import Education from "./Education";
import OnlineEducation from "./OnlineEducation";
import Comunity from "./Comunity";

const Footer = () => {
  return (
    <footer className="flex pt-4 pb-6 pl-6 border-t lg:pt-14 lg:pb-18 lg:px-6 xl:pt-14 xl:px-[12%]">
      <Link to="/">Grupo Alura</Link>
      <div className="hidden justify-between flex-1 lg:flex lg:pl-25 xl:pl-30">
        <Education className="pl-5 xl:border-l border-l-gray-500" />
        <OnlineEducation className="pl-5 xl:border-l border-l-gray-500" />
        <Comunity className="pl-5 xl:border-l border-l-gray-500" />
      </div>
    </footer>
  );
};

export default Footer;
