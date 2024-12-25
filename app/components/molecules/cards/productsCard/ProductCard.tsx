import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../../../types';

interface ProductCardProps {
  product: Product;
  categoryId: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, categoryId }) => {
  return (
    <Link href={`/products/${product.id}?categoryId=${categoryId}`} className="block rounded overflow-hidden shadow-lg">
      <article>
        <figure className="w-full overflow-hidden h-52">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={300}
            className="object-cover object-center w-full h-full"
          />
        </figure>
        <figcaption className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{product.name}</h2>
        </figcaption>
      </article>
    </Link>
  );
};

export default ProductCard;