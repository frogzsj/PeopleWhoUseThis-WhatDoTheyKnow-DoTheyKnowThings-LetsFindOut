import { Category, Difficulty, Question } from '../game-data';

export interface Action {
  type: string;
}

export const SET_IS_GAME_ACTIVE = 'SET_IS_GAME_ACTIVE';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';
export const TOGGLE_DIFFICULTY = 'TOGGLE_DIFFICULTY';
export const TOGGLE_ALL_CATEGORIES = 'TOGGLE_ALL_CATEGORIES';
export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';

export interface SetIsGameActiveAction extends Action {
  payload: boolean;
}
export interface ToggleCategoryAction extends Action {
  payload: Category;
}
export interface ToggleDifficultyAction extends Action {
  payload: Difficulty;
}
export interface ToggleAllCategoriesAction extends Action {
  payload: boolean;
}
export interface SetCurrentQuestionAction extends Action {
  payload: Question | null;
}

export const setIsGameActive = (
  isGameActive: boolean
): SetIsGameActiveAction => ({
  payload: isGameActive,
  type: SET_IS_GAME_ACTIVE,
});
export const toggleCategory = (category: Category): ToggleCategoryAction => ({
  payload: category,
  type: TOGGLE_CATEGORY,
});
export const toggleDifficulty = (
  difficulty: Difficulty
): ToggleDifficultyAction => ({
  payload: difficulty,
  type: TOGGLE_DIFFICULTY,
});
export const toggleAllCategories = (
  enable: boolean
): ToggleAllCategoriesAction => ({
  payload: enable,
  type: TOGGLE_ALL_CATEGORIES,
});
export const setCurrentQuestion = (
  question: Question | null
): SetCurrentQuestionAction => ({
  payload: question,
  type: SET_CURRENT_QUESTION,
});

export const isSetIsGameActiveAction = (
  action: Action
): action is SetIsGameActiveAction =>
  action != null && action.type === SET_IS_GAME_ACTIVE;

export const isToggleCategoryAction = (
  action: Action
): action is ToggleCategoryAction =>
  action != null && action.type === TOGGLE_CATEGORY;

export const isToggleDifficultyAction = (
  action: Action
): action is ToggleDifficultyAction =>
  action != null && action.type === TOGGLE_DIFFICULTY;

export const isToggleAllCategoriesAction = (
  action: Action
): action is ToggleAllCategoriesAction =>
  action != null && action.type === TOGGLE_ALL_CATEGORIES;

export const isSetCurrentQuestionAction = (
  action: Action
): action is SetCurrentQuestionAction =>
  action != null && action.type === SET_CURRENT_QUESTION;

export type Actions =
  | SetIsGameActiveAction
  | ToggleCategoryAction
  | ToggleDifficultyAction
  | ToggleAllCategoriesAction
  | SetCurrentQuestionAction;
