import { create } from 'zustand';
import { useShallow } from 'zustand/shallow';

interface State {
  title: string;
  category: string;
  time: string;
  area: string;
  ingridient: string;
}

interface Actions {
  setTitle: (title: State['title']) => void;
  setCategory: (category: State['category']) => void;
  setTime: (time: State['time']) => void;
  setArea: (area: State['area']) => void;
  setIngridient: (ingridient: State['ingridient']) => void;
  reset: () => void;
}

const initialState = {
  title: '',
  category: '',
  time: '',
  area: '',
  ingridient: '',
};

export const useFiltersStore = create<State & Actions>(set => ({
  ...initialState,
  setTitle: title => set(() => ({ title: title })),
  setCategory: category => set(() => ({ category: category })),
  setTime: time => set(() => ({ time: time })),
  setArea: area => set(() => ({ area: area })),
  setIngridient: ingridient => set(() => ({ ingridient: ingridient })),
  reset: () => set(initialState),
}));

export const useFilters = () => {
  const state = useFiltersStore(useShallow(state => state));

  return {
    ...state,
  };
};
