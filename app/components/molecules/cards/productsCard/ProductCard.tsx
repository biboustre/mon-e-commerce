import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../../../types';

interface ProductCardProps {
  product: Product;
  categoryId: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, categoryId }) => {
  return (
    <Link href={`/products/${product.id}?categoryId=${categoryId}`} className="block rounded overflow-hidden shadow-lg">
      <article>
        <figure className="w-full overflow-hidden h-52">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl || '/axe-1.jpg'} // Utilisez une image de remplacement si l'URL est vide
              alt={product.title}
              width={400}
              height={300}
              className="object-cover object-center w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Image non disponible</span>
            </div>
          )}
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