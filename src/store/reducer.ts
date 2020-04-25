import { defaultStore, Store } from './store';
import {
  Actions,
  isSetIsGameActiveAction,
  isToggleCategoryAction,
  isToggleDifficultyAction,
  isToggleAllCategoriesAction,
  isSetCurrentQuestionAction,
} from './actions';
import { Category } from '../game-data';

export const reducer = (
  store: Store = defaultStore,
  action: Actions
): Store => {
  if (isToggleAllCategoriesAction(action)) {
    const updatedCategories = { ...store.categories };
    Object.keys(updatedCategories).forEach((key: string) => {
      const category = key as Category;
      updatedCategories[category] = action.payload;
    });

    return {
      ...store,
      categories: updatedCategories,
    };
  }

  if (isSetIsGameActiveAction(action)) {
    return { ...store, isGameActive: action.payload };
  }

  if (isToggleCategoryAction(action)) {
    return {
      ...store,
      categories: {
        ...store.categories,
        [action.payload]: !store.categories[action.payload],
      },
    };
  }

  if (isToggleDifficultyAction(action)) {
    return {
      ...store,
      difficulties: {
        ...store.difficulties,
        [action.payload]: !store.difficulties[action.payload],
      },
    };
  }

  if (isSetCurrentQuestionAction(action)) {
    return {
      ...store,
      currentQuestion: action.payload,
    };
  }

  return store;
};
