import React from 'react';
import {
  Difficulty,
  Question,
  EASY,
  MEDIUM,
  HARD,
  Category,
  GENERAL_KNOWLEDGE,
  ENTERTAINMENT_BOOKS,
  ENTERTAINMENT_FILM,
  ENTERTAINMENT_MUSIC,
  ENTERTAINMENT_THEATER,
  ENTERTAINMENT_TV,
  ENTERTAINMENT_VIDEO_GAMES,
  ENTERTAINMENT_BOARD_GAMES,
  SCIENCE_NATURE,
  SCIENCE_COMPUTERS,
  SCIENCE_MATH,
  MYTHOLOGY,
  SPORTS,
  GEOGRAPHY,
  HISTORY,
  POLITICS,
  ART,
  CELEBRITIES,
  ANIMALS,
  VEHICLES,
  ENTERTAINMENT_COMICS,
  SCIENCE_GADGETS,
  ENTERTAINMENT_ANIME,
  ENTERTAINMENT_ANIMATION,
} from '../game-data';

export interface Store {
  isGameActive: boolean;
  points: number;
  timeRemaining: number;
  strikes: number;
  categories: Record<Category, boolean>;
  difficulties: Record<Difficulty, boolean>;
  currentQuestion: Question | null;
  currentAnswer?: {};
}

export const defaultStore: Store = {
  categories: {
    [ANIMALS]: true,
    [ART]: true,
    [CELEBRITIES]: true,
    [ENTERTAINMENT_ANIMATION]: true,
    [ENTERTAINMENT_ANIME]: false,
    [ENTERTAINMENT_BOARD_GAMES]: false,
    [ENTERTAINMENT_BOOKS]: true,
    [ENTERTAINMENT_COMICS]: false,
    [ENTERTAINMENT_FILM]: true,
    [ENTERTAINMENT_MUSIC]: true,
    [ENTERTAINMENT_THEATER]: false,
    [ENTERTAINMENT_TV]: true,
    [ENTERTAINMENT_VIDEO_GAMES]: false,
    [GENERAL_KNOWLEDGE]: true,
    [GEOGRAPHY]: true,
    [HISTORY]: true,
    [MYTHOLOGY]: true,
    [POLITICS]: true,
    [SCIENCE_COMPUTERS]: true,
    [SCIENCE_GADGETS]: false,
    [SCIENCE_MATH]: true,
    [SCIENCE_NATURE]: true,
    [SPORTS]: true,
    [VEHICLES]: false,
  },
  currentAnswer: undefined,
  currentQuestion: null,
  difficulties: {
    [EASY]: true,
    [HARD]: true,
    [MEDIUM]: true,
  },
  isGameActive: false,
  points: 0,
  strikes: 0,
  timeRemaining: 0,
};

export const StoreContext = React.createContext<{
  store: Store;
  dispatch: Function;
}>({ dispatch: () => ({}), store: defaultStore });
