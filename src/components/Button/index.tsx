import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "regular" | "small" | "topic";
}

const Button = ({
  variant = "primary",
  size = "regular",
  children,
}: ButtonProps) => {
  const buttonClasses = clsx(
    "font-bold border-orange-alura bg border-2 text-nowrap",
    {
      "bg-orange-alura text-white hover:bg-dark-orange": variant === "primary",
      "bg-transparent text-orange-alura hover:text-dark-orange hover:border-dark-orange":
        variant === "secondary",
      "text-xl py-4 px-8": size === "regular",
      "text-xs py-1.5 px-3 sm:text-xl sm:py-4 sm:px-8": size === "small",
      "text-sm py-4 px-6": size === "topic",
    }
  );

  return <button className={buttonClasses}>{children}</button>;
};

export default Button;
