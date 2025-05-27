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
  return (
    <section
      className={`${
        variant === "primary"
          ? "bg-dark-blue text-white flex"
          : "bg-white text-dark-blue"
      } flex-col gap-5 items-start justify-center p-[10%] lg:flex-row lg:text-left lg:py-30 lg:px-37.5 xl:px-[25%] xl:py-[5%]`}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-lg lg:text-2xl font-medium">{title}</h2>
        <p className="text-wrap font-light xl:w-[90%]">{paragraph}</p>
      </div>
      <div className="flex gap-2">{children}</div>
    </section>
  );
};

export default BannerSection;
