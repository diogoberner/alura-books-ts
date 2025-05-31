import FooterMenu from "./FooterMenu";
import FooterTitle from "./FooterTitle";
import {
  FaPodcast,
  FaUsers,
  FaMicrophoneAlt,
  FaBriefcase,
} from "react-icons/fa";

const comunityLinks = [
  {
    title: "Hipsters ponto Tech",
    href: "https://www.hipsters.tech",
    icon: FaPodcast,
  },
  {
    title: "Scuba Dev",
    href: "https://www.scuba.dev.br",
    icon: FaMicrophoneAlt,
  },
  {
    title: "Layers ponto Dev",
    href: "https://layers.dev",
    icon: FaPodcast,
  },
  {
    title: "Like a Boss",
    href: "https://likeaboss.com.br",
    icon: FaMicrophoneAlt,
  },
  {
    title: "Carreira sem Fronteira",
    href: "https://www.carreirasemfronteiras.com.br",
    icon: FaBriefcase,
  },
  {
    title: "Hipsters ponto Jobs",
    href: "https://hipsters.jobs",
    icon: FaBriefcase,
  },
  {
    title: "GUJ",
    href: "https://www.guj.com.br",
    icon: FaUsers,
  },
];

const Comunity = () => {
  return (
    <nav>
      <FooterTitle>Comunidade</FooterTitle>
      <FooterMenu links={comunityLinks} />
    </nav>
  );
};

export default Comunity;
