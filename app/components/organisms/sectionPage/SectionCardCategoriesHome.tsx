
import React from "react";
import { Category } from "../../../types/cardCategoriesHome";
import { cardCategoriesHome } from "../../../datas/cardCategoriesHomeData";
import CardCategoriesHome from "../../molecules/cards/card-categories-home/cardCategoriesHome";
import TitleDescription from "../../atoms/titles/TitleDescription";

export default function SectionCardCategoriesHome() {
  return (
    <section>
      <TitleDescription title="nouveauté" />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 px-1 gap-6 lg:px-28 ">
        {cardCategoriesHome.map((category: Category) => (
          <CardCategoriesHome key={category.id} category={category} />
        ))}
      </section>
    </section>
  );
}
