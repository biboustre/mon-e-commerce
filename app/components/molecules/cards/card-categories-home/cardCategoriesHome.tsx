import React from "react";
// import Image from "next/image";
import Link from "next/link";
// import { ApiCategory } from "../../../../types/cardCategoriesHome";

interface CardCategoriesHomeProps {
  category: string;
}

const CardCategoriesHome: React.FC<CardCategoriesHomeProps> = ({
  category,
}) => {
  return (
    <Link href={`/categories/${category}`} className="block rounded overflow-hidden shadow-lg">
      <article className="p-4 bg-slate-800 text-white">
        <h2 className="font-bold text-xl mb-2 capitalize">{category}</h2>
        <p className="text-gray-400">Voir les produits de la catégorie {category}</p>
      </article>
    </Link>
  );
};

export default CardCategoriesHome;
