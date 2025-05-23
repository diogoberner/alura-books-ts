import DropDownItem from "./DropDownItem";

type DropDownMenuProps = {
  open: boolean;
} & React.HTMLAttributes<HTMLUListElement>;

const DropDownMenu = ({ open }: DropDownMenuProps) => {
  return (
    <ul
      className={`z-30 absolute text-dark-blue left-0 sm:mt-3 w-[300px] sm:w-[180px] ${
        open ? "block" : "hidden"
      }`}
    >
      <DropDownItem>Programação</DropDownItem>
      <DropDownItem>Front-End</DropDownItem>
      <DropDownItem>Mobile</DropDownItem>
      <DropDownItem>Infraestrutura</DropDownItem>
      <DropDownItem>Business</DropDownItem>
      <DropDownItem>Design & UX</DropDownItem>
    </ul>
  );
};

export default DropDownMenu;
