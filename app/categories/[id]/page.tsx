"use client";

import React from "react";
import { useParams } from "next/navigation";
import ProductCard from "../../components/molecules/cards/productsCard/ProductCard";
import { Product } from "../../types";
import useFetch from "@/app/hooks/useFetch";

const CategoryPage = () => {
  const { id } = useParams();
  const { data: products , error, loading } = useFetch<Product[]>('https://fakestoreapi.com/products');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 font-bold">{error}</div>;
  }

  return (
    <main className="container mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-white">Produits de la catégorie {id}</h1>
        <p className="text-gray-400">
          Découvrez tous les produits disponibles dans la catégorie <strong>{id}</strong>.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products && products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            categoryId={parseInt(id as string, 10)}
          />
        ))}
      </section>
    </main>
  );
};

export default CategoryPage;
