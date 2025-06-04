import clsx from "clsx";

interface BannerSectionProps {
  title: string;
  paragraph: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const BannerSection = ({
  title,
  paragraph,
  children,
  variant = "primary",
}: BannerSectionProps) => {
  const sectionClasses = clsx(
    "flex flex-col gap-5 items-start justify-center p-[10%] lg:flex-row lg:text-left lg:justify-between lg:items-center",
    {
      "bg-dark-blue text-white flex lg:py-30 lg:px-37.5 xl:px-[25%] xl:py-[5%]":
        variant === "primary",
      "bg-white text-dark-blue pt-7 pb-13 xl:py-16 px-[20%]":
        variant === "secondary",
    }
  );

  return (
    <section className={sectionClasses}>
      <div className="flex flex-col gap-2 xl:gap-6">
        <h2 className="text-lg lg:text-2xl font-medium xl:text-nowrap">
          {title}
        </h2>
        <p className="text-wrap font-light xl:w-[90%]">{paragraph}</p>
      </div>
      <div className="flex gap-2 w-full">{children}</div>
    </section>
  );
};

export default BannerSection;
