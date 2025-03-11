"use client";

import React from "react";
import { useParams } from "next/navigation";
import ProductCard from "../../components/molecules/cards/productsCard/ProductCard";
import { Product } from "../../types";
import useFetch from "@/app/hooks/useFetch";
import Link from "next/link";

const Loading: React.FC = () => <div>Loading...</div>;

const Error: React.FC<{ message: string }> = ({ message }) => (
  <div className="text-red-500 font-bold">{message}</div>
);

const InvalidCategory: React.FC = () => <div>Invalid category ID</div>;

const NoProducts: React.FC = () => <div>Produit non trouvé</div>;

const CategoryPage = () => {
  const { id } = useParams();
  const {
    data: products,
    error,
    loading,
  } = useFetch<Product[]>(`https://fakestoreapi.com/products/category/${id}`);

  if (!id || Array.isArray(id)) {
    return <InvalidCategory />;
  }

  return (
    <main className="container mx-auto p-4">
      <header className="pt-8">
        <section className="pb-12 space-y-4">
          <h1 className="text-3xl font-bold text-white md:text-[45px]">
            Produits de la catégorie {id}
          </h1>
          <p className="text-gray-400">
            Découvrez tous les produits disponibles dans la catégorie{" "}
            <strong>{id}</strong>.
          </p>
        </section>
        <Link href="/#categories-home">Retour</Link>
      </header>

      {loading ? (
        <Loading />
      ) : error ? (
        <Error message={error} />
      ) : !products || !Array.isArray(products) ? (
        <NoProducts />
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} categoryId={id} />
          ))}
        </section>
      )}
    </main>
  );
};

export default CategoryPage;