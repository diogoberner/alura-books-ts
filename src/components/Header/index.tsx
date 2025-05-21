import Logo from "../Logo";
import MenuItem from "../MenuItem";
import MenuList from "../MenuList";
import { MdOutlineMenu, MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleMenu = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <header className="flex gap-3 items-center w-full h-20 pr-8">
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
        <MenuItem to="/">Estante</MenuItem>
      </MenuList>
      <div className="flex items-center justify-end gap-6 flex-1 text-dark-blue">
        <FaRegHeart size={40} className="sm:hidden" />
        <MdOutlineShoppingBag size={40} />
        <FaRegUserCircle size={40} />
      </div>
    </header>
  );
};

export default Header;
