import { Link } from "react-router-dom";
import Education from "./Education";
import OnlineEducation from "./OnlineEducation";
import Comunity from "./Comunity";

const Footer = () => {
  return (
    <footer className="flex justify-between pt-4 pb-6 pl-6 border-t lg:pt-14 lg:pb-18 lg:px-6">
      <Link to="/">Grupo Alura</Link>
      <Education />
      <OnlineEducation />
      <Comunity />
    </footer>
  );
};

export default Footer;
