import { Button } from '@components/common/Button/Button';

export const Categories = () => {
  return (
    <>
      <Button
        variant="outlined"
        location="categories"
        onClick={() => console.log('categories')}>
        All categories
      </Button>
    </>
  );
};
