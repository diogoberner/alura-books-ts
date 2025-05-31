interface FooterTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const FooterTitle = ({ children, ...props }: FooterTitleProps) => {
  return (
    <h4 className="text-sm uppercase text-gray-400 mb-6" {...props}>
      {children}
    </h4>
  );
};

export default FooterTitle;
