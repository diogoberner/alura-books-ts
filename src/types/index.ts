export interface IBook {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  favorite: boolean;
  category: string;
  inactive: boolean;
  stock: number;
  imgURL: string;
  alt: string;
}

export interface IFooterLinks {
  title: string;
  href: string;
  icon: React.ElementType;
}
