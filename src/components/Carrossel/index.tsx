import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import type { IBook } from "../../types";
import BookCard from "../BookCard";

interface CarrosselProps {
  books: IBook[];
}

const Carrossel = ({ books }: CarrosselProps) => {
  // if (books.length < 3) {
  //   throw new Error(
  //     "O carrossel precisa de pelo menos 3 livros para funcionar corretamente."
  //   );
  // }

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentIndex((prev) => {
        if (books.length < 3) {
          return prev === 0 ? 1 : 0;
        }

        if (prev === books.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    },

    onSwipedRight: () => {
      setCurrentIndex((prev) => {
        if (books.length < 3) {
          return prev === 0 ? 1 : 0;
        }

        if (prev === 0) {
          return books.length - 1;
        }

        return prev - 1;
      });
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  let displayedBooks: IBook[] = [];

  if (books.length === 1) {
    displayedBooks = [books[0], books[0], books[0]];
  } else if (books.length === 2) {
    const prev = currentIndex === 0 ? books[1] : books[0];
    const current = books[currentIndex];
    const next = currentIndex === 0 ? books[1] : books[0];
    displayedBooks = [prev, current, next];
  } else {
    displayedBooks = [
      books[currentIndex - 1] ?? books[books.length - 1],
      books[currentIndex],
      books[currentIndex + 1] ?? books[0],
    ];
  }

  const handleClick = (index: number) => {
    if (index === 1) return;
    if (books.length < 3) {
      setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
      return;
    }
    if (index === 0) {
      setCurrentIndex((prev) => (prev === 0 ? books.length - 1 : prev - 1));
    } else if (index === 2) {
      setCurrentIndex((prev) => (prev === books.length - 1 ? 0 : prev + 1));
    }
  };

  if (!displayedBooks) return;
  return (
    <>
      <div
        {...handlers}
        className="flex h-[16rem] gap-5 items-center justify-center overflow-hidden mt-3 mb-12"
      >
        {displayedBooks.map((book, index) => (
          <img
            key={`${book.id}-${index}`}
            src={book.imgURL}
            className="w-[40%] h-full"
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <BookCard book={books[currentIndex]} />
    </>
  );
};

export default Carrossel;
