import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Category } from "../../../../types/cardCategoriesHome";

interface CardCategoriesHomeProps {
  category: Category;
}

const CardCategories: React.FC<CardCategoriesHomeProps> = ({ category }) => {
  return (
    <section className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        src={category.imageUrl}
        alt={category.title}
        width={400}
        height={300}
        className="w-full"
      />
      <h1 className="font-bold text-xl mb-2 px-6 py-4">{category.title}</h1>
      <section className="px-6 pt-4 pb-2">
        <Link href={`/categories/${category.id}`} passHref className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Voir la collection
        </Link>
      </section>
    </section>
  );
};

export default CardCategories;
