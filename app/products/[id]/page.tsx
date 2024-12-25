"use client";

import { useParams, useSearchParams } from "next/navigation";
import { products } from "../../datas/productsData";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../types";


const ProductPage = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const product: Product | undefined  = products.find((prod) => prod.id.toString() === id);

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <main className="container mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <Link href={`/categories/${categoryId}`} className="text-blue-500 hover:underline">
          Retour aux produits
        </Link>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative w-full h-96">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            className="object-cover object-center rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Détails du produit</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300">
            Ajouter au panier
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;