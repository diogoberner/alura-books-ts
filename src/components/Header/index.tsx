import AppLink from "../AppLink";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <AppLink to="/">
        <Logo src="/logo.svg" alt="logo da AluraBooks" />
        <Logo src="/alura-books-logo.svg" alt="logo da AluraBooks" />
      </AppLink>
    </header>
  );
};

export default Header;
