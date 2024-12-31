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
    // <section className="rounded overflow-hidden shadow-lg w-full bg-slate-800 flex flex-col">
    //   {category.imageUrl ? (
    //     <div className="relative h-56">
    //       <Image
    //         src={category.imageUrl}
    //         alt={category.title}
    //         layout="fill"
    //         className="object-cover object-center"
    //       />
    //     </div>
    //   ) : (
    //     <div className="relative h-56 bg-gray-200 flex items-center justify-center">
    //       <span className="text-gray-500">Image non disponible</span>
    //     </div>
    //   )}
    //   <aside className="flex flex-grow flex-col justify-between">
    //     <h1 className="font-bold text-xl px-6 pt-2">{category.title}</h1>
    //     <Link
    //       href={`/categories/${category}`}
    //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 flex items-center justify-center"
    //     >
    //       Voir la collection
    //     </Link>
    //   </aside>
    // </section>
    <Link href={`/categories/${category}`} className="block rounded overflow-hidden shadow-lg">
      <article className="p-4 bg-slate-800 text-white">
        <h2 className="font-bold text-xl mb-2 capitalize">{category}</h2>
        <p className="text-gray-400">Voir les produits de la catégorie {category}</p>
      </article>
    </Link>
  );
};

export default CardCategoriesHome;
