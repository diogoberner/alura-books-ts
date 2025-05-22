const DropDownItem = ({ children }: React.LiHTMLAttributes<HTMLLIElement>) => {
  return (
    <li className="w-full py-4 px-6 bg-white hover:bg-gradient-to-br from-dark-blue to-light-blue hover:text-white">
      {children}
    </li>
  );
};

export default DropDownItem;
