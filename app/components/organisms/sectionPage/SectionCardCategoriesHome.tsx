import React from 'react';
import { Category } from '../../../types/cardCategoriesHome';
import CardCategories from '../../molecules/cards/card-categories-home/cardCategoriesHome';
import { cardCategoriesHome } from '../../../datas/cardCategoriesHomeData';



export default function SectionCardCategoriesHome() {
  return (
    <section className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10 px-1 md:px-4">
      {cardCategoriesHome.map((category: Category) => (
        <CardCategories key={category.id} category={category} />
      ))}
    </section>
  );
}