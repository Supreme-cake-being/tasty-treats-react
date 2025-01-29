import { useFetch } from '@hooks/useFetch';

export const useCategories = () => {
  const { data, loading, error } = useFetch('categories');

  return {
    categories: data?.data,
    loading,
    error,
  };
};
