"use client";

import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../types";
import useFetch from "@/app/hooks/useFetch";

const ProductPage = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const {
    data: product,
    error,
    loading,
  } = useFetch<Product>(`https://fakestoreapi.com/products/${id}`);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500 font-bold">{error}</p>;
  }

  if (!product) {
    return <p>Produit non trouvé</p>;
  }   /*OU 
  if (loading || error || !product) {
    return (
      <div className="container mx-auto p-4">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500 font-bold">{error}</p>}
        {!loading && !error && !product && <p>Produit non trouvé</p>}
      </div>
    );
  }
  */

  return (
    <main className="container mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
        <Link
          href={`/categories/${categoryId}`}
          className="text-blue-500 hover:underline"
        >
          Retour aux produits
        </Link>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative w-full h-96">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              className="object-cover object-center rounded-lg shadow-lg"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Image non disponible</span>
            </div>
          )}
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Détails du produit
          </h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300">
            Ajouter au panier
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
