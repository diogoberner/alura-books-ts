import clsx from "clsx";

interface InputProps {
  type: string;
  placeholder: string;
  children: React.ReactNode; // ícone
  variant?: "primary" | "secondary";
}

const Input = ({
  type,
  placeholder,
  children,
  variant = "primary",
}: InputProps) => {
  const wrapperClasses = clsx(
    "w-full flex items-center gap-3 px-[10%] py-1 h-12 lg:h-14 lg:py-3 rounded-4xl border-1",
    {
      "border-white text-white placeholder:text-white": variant === "primary",
      "border-dark-blue text-dark-blue placeholder:text-dark-blue":
        variant === "secondary",
      "lg:px-[25%]": type !== "email",
    }
  );

  const inputClasses = clsx(
    "bg-transparent min-w-full h-full focus:outline-none text-base ",
    {
      "text-white placeholder:text-white": variant === "primary",
      "text-dark-blue placeholder:text-dark-blue": variant === "secondary",
    }
  );

  return (
    <label className={wrapperClasses}>
      <span className="pointer-events-none flex justify-center items-center">
        {children}
      </span>
      <input type={type} placeholder={placeholder} className={inputClasses} />
    </label>
  );
};

export default Input;
