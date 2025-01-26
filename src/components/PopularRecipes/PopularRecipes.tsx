import { usePopularRecipes } from '@/src/hooks/recipes/usePopularRecipes';
import {
  SectionTitle,
  RecipeList,
  Recipe,
  Image,
  Title,
  Description,
} from './PopularRecipes.styled';

interface Recipe {
  _id: string;
  preview: string;
  title: string;
  description: string;
}

export const PopularRecipes = () => {
  const { recipes, loading, error } = usePopularRecipes();

  console.log(recipes, loading, error);

  return (
    <>
      <SectionTitle>Popular recipes</SectionTitle>

      <RecipeList>
        {recipes?.map(({ _id, preview, title, description }: Recipe) => (
          <Recipe key={_id}>
            <Image src={preview} alt={title} />

            <div>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </div>
          </Recipe>
        ))}
      </RecipeList>
    </>
  );
};
