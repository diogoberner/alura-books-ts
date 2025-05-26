import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({ variant = "primary", children }: ButtonProps) => {
  const buttonClasses = clsx("font-bold text-xl py-4 px-8 bg", {
    "bg-orange-alura text-white hover:bg-dark-orange": variant === "primary",
    "bg-transparent text-orange-alura border-2 border-orange-alura hover:text-dark-orange hover:border-dark-orange":
      variant === "secondary",
  });

  return <button className={buttonClasses}>{children}</button>;
};

export default Button;
