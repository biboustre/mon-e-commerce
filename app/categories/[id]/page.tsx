"use client";

import React from "react";
import { useParams } from "next/navigation";
import { cardCategoriesHome } from "../../datas/cardCategoriesHomeData";
import { products } from "../../datas/productsData";
import ProductCard from "../../components/molecules/cards/productsCard/ProductCard";
import { Category, Product } from "../../types";

const CategoryPage = () => {
  const { id } = useParams();
  const category: Category | undefined = cardCategoriesHome.find(
    (cat) => cat.id.toString() === id
  );

  if (!category) {
    return <div>Produit non trouvé</div>;
  }

  const filteredProducts: Product[] = products.filter(
    (product) => product.category.toString() === id
  );

  return (
    <main className="container mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-white">{category.title}</h1>
        <p className="text-gray-400">
          Découvrez tous les produits disponibles dans la catégorie{" "}
          <strong>{category.title}</strong>.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            categoryId={category.id}
          />
        ))}
      </section>
    </main>
  );
};

export default CategoryPage;
