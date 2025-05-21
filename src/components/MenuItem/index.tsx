import { Link } from "react-router-dom";

type MenuItemProps = {
  to: string;
  children: React.ReactNode;
} & React.LiHTMLAttributes<HTMLLIElement>;

const MenuItem = ({ children, to, ...props }: MenuItemProps) => {
  return (
    <Link to={to}>
      <li {...props}>{children}</li>
    </Link>
  );
};

export default MenuItem;
