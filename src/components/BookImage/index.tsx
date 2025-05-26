import type { IBook } from "../../types";

interface BookImageProps {
  index: number;
  book: IBook;
  onClick: () => void;
}

const BookImage = ({ index, book, onClick }: BookImageProps) => {
  if (index === 0 || index === 2) {
    return (
      <div className="w-[40%] aspect-[2/3] lg:shadow-md lg:w-[25%]">
        <img
          key={`${book.id}-${index}`}
          src={book.imgURL}
          className="w-full h-full object-cover"
          onClick={onClick}
        />
      </div>
    );
  } else {
    return (
      <div className="w-[40%] aspect-[2/3] lg:shadow-md">
        <img
          key={`${book.id}-${index}`}
          src={book.imgURL}
          className="w-full h-full object-cover"
          onClick={onClick}
        />
      </div>
    );
  }
};

export default BookImage;
