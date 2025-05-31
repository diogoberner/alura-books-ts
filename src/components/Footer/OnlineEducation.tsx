import FooterMenu from "./FooterMenu";
import FooterTitle from "./FooterTitle";
import {
  FaGlobe,
  FaSchool,
  FaMusic,
  FaLanguage,
  FaProductHunt,
  FaBuilding,
} from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";

const onlineEducationLinks = [
  { title: "Alura", href: "https://www.alura.com.br/", icon: FaBuilding },
  {
    title: "Alura para Empresas",
    href: "https://www.alura.com.br/empresas",
    icon: HiOfficeBuilding,
  },
  {
    title: "Alura LATAM",
    href: "https://latam.alura.com",
    icon: FaGlobe,
  },
  {
    title: "Alura Start",
    href: "https://www.alurastart.com.br",
    icon: FaSchool,
  },
  {
    title: "MusicDot",
    href: "https://www.musicdot.com.br",
    icon: FaMusic,
  },
  {
    title: "Alura Língua",
    href: "https://www.aluralingua.com.br",
    icon: FaLanguage,
  },
  {
    title: "PM3",
    href: "https://www.cursospm3.com.br",
    icon: FaProductHunt,
  },
];

const OnlineEducation = () => {
  return (
    <nav>
      <FooterTitle>Educação Online</FooterTitle>
      <FooterMenu links={onlineEducationLinks} />
    </nav>
  );
};

export default OnlineEducation;
