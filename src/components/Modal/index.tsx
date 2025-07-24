import { useContext } from "react";
import { ModalContext } from "../../context";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Modal = ({ children, ...props }: ModalProps) => {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  return (
    <>
      {isOpen && (
        <div
          {...props}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 flex items-center justify-center z-20 backdrop-contrast-25 max-w-screen max-h-screen"
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
