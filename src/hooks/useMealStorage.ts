import { create } from 'zustand';
import { computed } from 'zustand-computed-state';
import { MealRequestResponse } from '@/api/meal/body/meal-request-response';

interface MealState {
  mealItems: MealRequestResponse[];
  setMealItems: (newMealItems: MealRequestResponse[]) => void;
  itemToDelete: string;
  setItemToDelete: (item: string) => void;
}

export const useMealStore = create<MealState>()(
  computed((set, get) => ({
    mealItems: [],
    itemToDelete: null,
    setMealItems: newMealItems => {
      set(state => ({
        ...state,
        mealItems: newMealItems,
      }));
    },
    setItemToDelete: item => {
      set(state => ({ ...state, itemToDelete: item }));
    },
  })),
);
