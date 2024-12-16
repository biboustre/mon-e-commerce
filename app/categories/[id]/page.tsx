"use client";

import React from "react";
import { useParams } from "next/navigation";
import { cardCategoriesHome } from "../../datas/cardCategoriesHomeData";

const CategoryPage = () => {
  const { id } = useParams();
  const category = cardCategoriesHome.find(
    (cat) => cat.id.toString() === id
  );

  if (!category) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-white">{category.title}</h1>
      <h2 className="text-white">La collections en question</h2>
    </div>
  );
};

export default CategoryPage;
