import { Button } from '@components/common/Button/Button';

import { useCategories } from '@/src/hooks/filters/useCategories';
import { useFilters } from '@/src/hooks/zustand/useFiltersStore';
import { CategoriesBox, CategoriesList } from './Categories.styled';

interface ICategories {
  _id: string;
  name: string;
}

export const Categories = () => {
  const { categories } = useCategories();

  const { category, setCategory } = useFilters();

  return (
    <CategoriesBox>
      <Button
        variant="outlined"
        location="categories"
        active={category === ''}
        onClick={() => setCategory('')}>
        All categories
      </Button>

      <CategoriesList>
        {categories?.map(({ _id, name }: ICategories) => (
          <Button
            key={_id}
            variant="text"
            location="categories"
            active={category === name}
            onClick={() => setCategory(name)}>
            {name}
          </Button>
        ))}
      </CategoriesList>
    </CategoriesBox>
  );
};
