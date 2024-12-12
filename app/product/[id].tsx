import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Category } from "../types/cardCategoriesHome";
import { cardCategoriesHome } from "../datas/cardCategoriesHomeData";
import Image from "next/image";

interface CategoryPageProps {
  category: Category;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{category.title}</h1>
      <Image
        src={category.imageUrl}
        alt={category.title}
        className="w-full h-auto mt-4"
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = cardCategoriesHome.map((category) => ({
    params: { id: category.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = cardCategoriesHome.find(
    (cat) => cat.id.toString() === params?.id
  );

  if (!category) {
    return { notFound: true };
  }

  return {
    props: {
      category,
    },
  };
};

export default CategoryPage;
