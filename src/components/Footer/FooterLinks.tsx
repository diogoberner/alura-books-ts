interface FooterLinksProps {
  href: string;
  children: React.ReactNode;
  icon: React.ElementType;
}

const FooterLinks = ({ href, children, icon: Icon }: FooterLinksProps) => {
  return (
    <ul className="text-gray-600">
      <a href={href} className="flex items-center gap-2">
        <Icon />
        <span className="text-sm">{children}</span>
      </a>
    </ul>
  );
};

export default FooterLinks;
