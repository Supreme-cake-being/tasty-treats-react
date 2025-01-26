import { useFetch } from '@/src/hooks/useFetch';

export const usePopularRecipes = () => {
  const { data, loading, error } = useFetch('recipes/popular');

  return {
    recipes: data?.data,
    loading,
    error,
  };
};
