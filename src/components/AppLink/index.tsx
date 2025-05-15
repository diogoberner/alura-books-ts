import { Link } from "react-router-dom";

interface AppLinkProps {
  to: string;
  children: React.ReactNode;
}

const AppLink = ({ to, children }: AppLinkProps) => {
  const externalLink = to.startsWith("http") || to.startsWith("https");

  if (externalLink) {
    return (
      <a href="" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <Link to={to}>{children}</Link>;
};

export default AppLink;
