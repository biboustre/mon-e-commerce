import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../../../types';

interface ProductCardProps {
  product: Product;
  categoryId: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, categoryId }) => {
  const imageUrl = product.imageUrl || "/images/parfum-rose.jpg"; // Utilisez une image de remplacement si l'URL est vide

  return (
    <Link href={`/products/${product.id}?categoryId=${categoryId}`} className="block bg-orange-900 rounded overflow-hidden shadow-lg">
      <article>
        <figure className="w-full overflow-hidden h-52">
          <Image
            src={imageUrl}
            alt={product.title}
            width={400}
            height={300}
            className="object-cover object-center w-full h-full"
          />
        </figure>
        <figcaption className="px-6 py-4">
          <h2 className="font-bold text-xl text-gray-400 mb-2">{product.title}</h2>
          <p className="text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">{product.description}</p>
        </figcaption>
      </article>
    </Link>
  );
};

export default ProductCard;