import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 h-10">
      <img src="/logo.svg" className="h-full" />
      <img src="/alura-books-logo.svg" className="hidden sm:block" />
      <span className="sr-only">Logo da Alura Books</span>
    </Link>
  );
};

export default Logo;
