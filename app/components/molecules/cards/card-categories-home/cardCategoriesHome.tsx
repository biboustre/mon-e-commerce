import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Category } from "../../../../types/cardCategoriesHome";

interface CardCategoriesHomeProps {
  category: Category;
}

const CardCategoriesHome: React.FC<CardCategoriesHomeProps> = ({ category }) => {
  return (
    <section className="rounded overflow-hidden shadow-lg w-full bg-slate-800">
      {category.imageUrl ? (
        <div className="relative h-56">
          <Image
            src={category.imageUrl}
            alt={category.title}
            layout="fill"
            className="object-cover object-center"
          />
        </div>
      ) : (
        <div className="relative h-56 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Image non disponible</span>
        </div>
      )}
      <aside className="h-64 flex flex-col justify-between">
        <h1 className="font-bold text-xl mb-2 px-6 py-4">{category.title}</h1>
        <Link
          href={`/categories/${category.id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 flex items-center justify-center"
        >
          Voir la collection
        </Link>
      </aside>
      
    </section>
  );
};

export default CardCategoriesHome;
