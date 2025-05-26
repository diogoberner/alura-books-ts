import { FaHeart, FaRegHeart } from "react-icons/fa";
import type { IBook } from "../../types";
import { MdOutlineShoppingBag } from "react-icons/md";
import Button from "../Button";

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="flex flex-col w-[90%] lg:w-[70%] mx-auto p-4 bg-white rounded-lg shadow-md mb-6 relative lg:p-6 xl:p-12">
      <div className="mb-4 lg:mb-0">
        <h4 className="font-bold text-orange-alura mb-2 xl:text-3xl xl:mb-4">
          Sobre o livro:{" "}
        </h4>
        <h2 className="font-bold text-dark-blue text-lg mb-2 xl:mb-6">
          {book.title}
        </h2>
        <p className="text-sm mb-2">{book.description}</p>
        <p className="text-sm mb-4 xl:mb-10">Por: {book.author}</p>
        <p className="flex gap-2 items-end lg:flex-col lg:items-start">
          <span className="opacity-50 xl:text-sm">A partir de: </span>
          <span className="font-bold text-dark-blue text-2xl lg:text-4xl">
            {book.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              currency: "BRL",
              style: "currency",
            })}
          </span>
        </p>
      </div>
      <div className="flex items-end justify-between">
        <div className="flex lg:flex-row-reverse gap-5 lg:gap-8 lg:absolute lg:top-6 lg:right-6 xl:right-8 xl:top-12">
          {book.favorite ? (
            <FaHeart className="h-8 lg:h-12 w-8 lg:w-12 xl:w-8 xl:h-8 text-dark-blue lg:" />
          ) : (
            <FaRegHeart className="h-8 lg:h-12 w-8 lg:w-12 xl:w-8 xl:h-8 text-dark-blue lg:" />
          )}
          <MdOutlineShoppingBag className="h-8 lg:h-12 w-8 lg:w-12 xl:w-8 xl:h-8 text-dark-blue" />
        </div>
        <div className="lg:absolute bottom-6 right-6 xl:bottom-12 xl:right-8">
          <Button>Comprar</Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
