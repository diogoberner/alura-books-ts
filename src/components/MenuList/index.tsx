const MenuList = ({ children }: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <nav className="hidden sm:flex items-center flex-1 xl:ml-8">
      <ul className="flex uppercase w-full justify-evenly xl:justify-start xl:gap-5 ">
        {children}
      </ul>
    </nav>
  );
};

export default MenuList;
