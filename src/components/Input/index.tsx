import clsx from "clsx";

interface InputProps {
  type: string;
  placeholder: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Input = ({
  type,
  placeholder,
  children,
  variant = "primary",
}: InputProps) => {
  const inputClasses = clsx(
    "p-2 rounded-4xl border-1 bg-transparent h-14 text-center w-11/12 sm:w-11/12",
    {
      "border-white text-white placeholder:text-white": variant === "primary",
      "border-dark-blue text-dark-blue placeholder:text-dark-blue":
        variant === "secondary",
    }
  );

  return (
    <label className="mt-4 w-full flex relative justify-center items-center">
      <span
        className={clsx(
          "absolute pointer-events-none",
          "left-8 sm:left-6",
          variant === "primary" ? "text-white" : "text-dark-blue"
        )}
      >
        {children}
      </span>
      <input type={type} placeholder={placeholder} className={inputClasses} />
    </label>
  );
};

export default Input;
