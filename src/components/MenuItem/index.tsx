import { Link } from "react-router-dom";

type MenuItemProps = {
  to: string;
  children: React.ReactNode;
} & React.LiHTMLAttributes<HTMLLIElement>;

const MenuItem = ({ children, to, ...props }: MenuItemProps) => {
  return (
    <Link to={to}>
      <li
        className="relative px-2 py-3 hover:bg-gradient-to-br from-dark-blue to-light-blue hover:text-white"
        {...props}
      >
        {children}
      </li>
    </Link>
  );
};

export default MenuItem;
