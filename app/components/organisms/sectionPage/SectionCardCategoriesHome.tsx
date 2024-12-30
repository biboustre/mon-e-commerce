
import { Category } from "../../../types/cardCategoriesHome";
import CardCategoriesHome from "../../molecules/cards/card-categories-home/cardCategoriesHome";
import TitleDescription from "../../atoms/titles/TitleDescription";
import useFetch from "@/app/hooks/useFetch";

export default function SectionCardCategoriesHome() {
  const { data: category, error, loading } = useFetch<Category[]>("https://fakestoreapi.com/products");

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <TitleDescription title="nouveauté" />
      {error ? (
        <div className="text-red-500 font-bold">{error}</div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 px-1 gap-6 lg:px-28">
          {category && category.slice(0, 4).map((product: Category) => (
            <CardCategoriesHome key={product.id} category={product} />
          ))}
        </section>
      )}
    </section>
  );
}
