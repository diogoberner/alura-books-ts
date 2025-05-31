import type { IFooterLinks } from "../../types";
import FooterLinks from "./FooterLinks";

interface FooterMenuProps {
  links: IFooterLinks[];
}

const FooterMenu = ({ links }: FooterMenuProps) => {
  return (
    <ul className="flex flex-col gap-4">
      {links &&
        links.map((link) => (
          <FooterLinks href={link.href} icon={link.icon}>
            {link.title}
          </FooterLinks>
        ))}
    </ul>
  );
};

export default FooterMenu;
