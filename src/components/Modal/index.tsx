interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Modal = ({ children, ...props }: ModalProps) => {
  return (
    <div
      {...props}
      className="fixed inset-0 flex items-center justify-center z-20 backdrop-contrast-25 max-w-screen"
    >
      {children}
    </div>
  );
};

export default Modal;
