import { FaRegHeart } from "react-icons/fa";
import type { IBook } from "../../types";
import { MdOutlineShoppingBag } from "react-icons/md";

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="w-[90%] mx-auto p-4 bg-white rounded-lg shadow-md mb-20">
      <div>
        <h4 className="font-bold text-orange-alura">Sobre o livro: </h4>
        <h2 className="font-bold text-dark-blue text-lg">{book.title}</h2>
        <p className="text-sm">{book.description}</p>
        <p className="text-sm">Por: {book.author}</p>
        <p>
          <span className="opacity-50">A partir de: </span>
          <span className="font-bold text-dark-blue text-2xl">
            {book.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              currency: "BRL",
              style: "currency",
            })}
          </span>
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <FaRegHeart className="h-8 w-8 text-dark-blue" />
          <MdOutlineShoppingBag className="h-8 w-8 text-dark-blue" />
        </div>
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default BookCard;
