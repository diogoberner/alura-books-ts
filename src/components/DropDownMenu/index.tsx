type DropDownMenuProps = {
  open: boolean;
} & React.HTMLAttributes<HTMLUListElement>;

const DropDownMenu = ({ open }: DropDownMenuProps) => {
  return (
    <ul
      className={`absolute text-black left-0 mt-3 w-[180px] ${
        open ? "block" : "hidden"
      }`}
    >
      <li className="w-full py-4 px-6 hover:bg-gradient-to-br from-dark-blue to-light-blue hover:text-white">
        Programação
      </li>
      <li className="w-full py-4 px-6 hover:bg-gradient-to-br from-dark-blue to-light-blue hover:text-white">
        Front-End
      </li>
      <li className="w-full py-4 px-6 hover:bg-gradient-to-br from-dark-blue to-light-blue hover:text-white">
        Infraestrutura
      </li>
      <li className="w-full py-4 px-6 hover:bg-gradient-to-br from-dark-blue to-light-blue hover:text-white">
        Business
      </li>
      <li className="w-full py-4 px-6 hover:bg-gradient-to-br from-dark-blue to-light-blue hover:text-white">
        Design & UX
      </li>
    </ul>
  );
};

export default DropDownMenu;
