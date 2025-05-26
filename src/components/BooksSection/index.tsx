import type { IBook } from "../../types";
import Carrossel from "../Carrossel";

type BooksSectionProps = {
  children: string;
};

const books: IBook[] = [
  {
    id: "1",
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    description: "Uma épica aventura pela Terra Média.",
    price: 79.9,
    favorite: true,
    category: "Fantasia",
    inactive: false,
    stock: 12,
    imgURL: "/img/senhor-aneis.jpg",
    alt: "Capa do livro O Senhor dos Anéis",
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    description: "Um clássico distópico sobre vigilância e liberdade.",
    price: 42.0,
    favorite: false,
    category: "Ficção Científica",
    inactive: false,
    stock: 5,
    imgURL: "/img/1984.jpg",
    alt: "Capa do livro 1984",
  },
  {
    id: "3",
    title: "Dom Casmurro",
    author: "Machado de Assis",
    description:
      "O enigma do ciúme de Bentinho e a possível traição de Capitu.",
    price: 25.0,
    favorite: false,
    category: "Romance Clássico",
    inactive: false,
    stock: 7,
    imgURL: "/img/dom-casmurro.jpg",
    alt: "Capa do livro Dom Casmurro",
  },
  {
    id: "4",
    title: "A Coragem de Ser Imperfeito",
    author: "Brené Brown",
    description: "Como aceitar a vulnerabilidade e viver com ousadia.",
    price: 39.99,
    favorite: true,
    category: "Desenvolvimento Pessoal",
    inactive: false,
    stock: 9,
    imgURL: "/img/coragem-imperfeito.jpg",
    alt: "Capa do livro A Coragem de Ser Imperfeito",
  },
  {
    id: "5",
    title: "A Revolução dos Bichos",
    author: "George Orwell",
    description: "Uma sátira sobre poder e manipulação.",
    price: 36.0,
    favorite: false,
    category: "Ficção Política",
    inactive: false,
    stock: 3,
    imgURL: "/img/revolucao-bichos.jpg",
    alt: "Capa do livro A Revolução dos Bichos",
  },
  {
    id: "6",
    title: "O Hobbit",
    author: "J.R.R. Tolkien",
    description: "A jornada inesperada de Bilbo Bolseiro.",
    price: 49.9,
    favorite: true,
    category: "Fantasia",
    inactive: false,
    stock: 10,
    imgURL: "/img/hobbit.jpg",
    alt: "Capa do livro O Hobbit",
  },
  {
    id: "7",
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    description: "Uma fábula poética sobre amor, perda e infância.",
    price: 29.9,
    favorite: true,
    category: "Fábula",
    inactive: false,
    stock: 15,
    imgURL: "/img/pequeno-principe.jpg",
    alt: "Capa do livro O Pequeno Príncipe",
  },
  {
    id: "8",
    title: "Pai Rico, Pai Pobre",
    author: "Robert Kiyosaki",
    description: "Aprendizados sobre dinheiro e independência financeira.",
    price: 54.9,
    favorite: false,
    category: "Finanças Pessoais",
    inactive: false,
    stock: 8,
    imgURL: "/img/pai-rico.jpg",
    alt: "Capa do livro Pai Rico, Pai Pobre",
  },
  {
    id: "9",
    title: "Mindset",
    author: "Carol S. Dweck",
    description:
      "A nova psicologia do sucesso: mentalidade fixa vs. de crescimento.",
    price: 44.9,
    favorite: false,
    category: "Psicologia",
    inactive: false,
    stock: 6,
    imgURL: "/img/mindset.jpg",
    alt: "Capa do livro Mindset",
  },
  {
    id: "10",
    title: "A Bíblia Sagrada",
    author: "Diversos autores",
    description: "A palavra de Deus para edificação espiritual.",
    price: 89.9,
    favorite: true,
    category: "Religião",
    inactive: false,
    stock: 20,
    imgURL: "/img/biblia.jpg",
    alt: "Capa da Bíblia Sagrada",
  },
];

const BooksSection = ({ children }: BooksSectionProps) => {
  return (
    <section>
      <div className="font-bold text-orange-alura text-lg h-15 bg-white flex justify-center items-center">
        <h2>{children}</h2>
      </div>
      <div className="flex flex-col bg-gray-bg items-center">
        <Carrossel books={books} />
      </div>
    </section>
  );
};

export default BooksSection;
