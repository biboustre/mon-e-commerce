import { Category } from '../types/cardCategoriesHome';

interface Product {
  id: number;
  name: string;
  category: Category['id'];
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Musc Blanc",
    category: 1,
    imageUrl: "/images/parfum-rose.jpg",
  },
  {
    id: 2,
    name: "Musc Noir",
    category: 1,
    imageUrl: "/images/parfum-coeur.jpg",
  },
  {
    id: 3,
    name: "Encent Oud",
    category: 2,
    imageUrl: "/images/encen.jpg",
  },
  {
    id: 4,
    name: "Encent",
    category: 2,
    imageUrl: "/images/encen-2.jpg",
  },
  {
    id: 5,
    name: "Déodorant Frais",
    category: 3,
    imageUrl: "/images/axe-1.jpg",
  },
  {
    id: 6,
    name: "Déodorant doux",
    category: 3,
    imageUrl: "/images/axe-2.jpg",
  },
];