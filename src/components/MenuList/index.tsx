const MenuList = ({ children }: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <nav className="hidden sm:flex">
      <ul className="flex items-center justify-evenly">{children}</ul>
    </nav>
  );
};

export default MenuList;
