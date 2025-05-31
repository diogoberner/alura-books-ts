import FooterTitle from "./FooterTitle";
import FooterMenu from "./FooterMenu";
import type { IFooterLinks } from "../../types";
import { FaBook, FaCode } from "react-icons/fa";

const educationLinks: IFooterLinks[] = [
  {
    title: "Caelum",
    href: "https://www.caelum.com.br",
    icon: FaCode,
  },
  {
    title: "Casa do Código",
    href: "https://www.casadocodigo.com.br",
    icon: FaBook,
  },
];

const Education = () => {
  return (
    <nav>
      <FooterTitle>Educação</FooterTitle>
      <FooterMenu links={educationLinks} />
    </nav>
  );
};

export default Education;
