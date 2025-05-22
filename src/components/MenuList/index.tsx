const MenuList = ({ children }: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <nav className="hidden sm:flex items-center justify-evenly flex-1">
      <ul className="flex uppercase w-full justify-evenly">{children}</ul>
    </nav>
  );
};

export default MenuList;
