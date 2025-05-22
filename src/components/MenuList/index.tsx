const MenuList = ({ children }: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <nav className="hidden sm:flex items-center justify-evenly flex-1">
      <ul className="flex uppercase gap-10">{children}</ul>
    </nav>
  );
};

export default MenuList;
