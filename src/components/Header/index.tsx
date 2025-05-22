import Logo from "../Logo";
import MenuItem from "../MenuItem";
import MenuList from "../MenuList";
import { MdOutlineMenu, MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleMenu = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <header className="flex gap-3 items-center w-full h-20 pr-8 sm:px-20">
      <button
        onClick={handleMenu}
        className={`${
          isClicked ? "bg-linear-to-br text-white" : "text-dark-blue"
        } flex items-center justify-center h-full w-20  from-dark-blue to-light-blue sm:hidden`}
      >
        <MdOutlineMenu size={40} />
      </button>
      <Logo />
      <MenuList>
        <MenuItem to="/">Programação</MenuItem>
        <MenuItem to="/">Favoritos</MenuItem>
        <MenuItem to="/">Minha Estante</MenuItem>
      </MenuList>
      <div className="flex items-center gap-6 text-dark-blue sm:gap-15">
        <Link to="/" className="sm:hidden">
          <FaRegHeart size={40} />
        </Link>
        <Link to="/">
          <MdOutlineShoppingBag size={40} />
        </Link>
        <Link to="/">
          <FaRegUserCircle size={40} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
