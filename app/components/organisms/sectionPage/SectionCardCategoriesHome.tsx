import React from 'react';
import { Category } from '../../../types/cardCategoriesHome';
import Card from '../../molecules/cards/card-categories-home/cardCategoriesHome';
import { cardCategoriesHome } from '../../../datas/cardCategoriesHomeData';



export default function SectionCardCategoriesHome() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
      {cardCategoriesHome.map((category: Category) => (
        <Card key={category.id} category={category} />
      ))}
    </section>
  );
}