import React from 'react';
import invert from 'lodash/invert';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import StarIcon from '@material-ui/icons/Star';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import DevicesOutlinedIcon from '@material-ui/icons/DevicesOutlined';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import GavelOutlinedIcon from '@material-ui/icons/GavelOutlined';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import AudiotrackOutlinedIcon from '@material-ui/icons/AudiotrackOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import FunctionsOutlinedIcon from '@material-ui/icons/FunctionsOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import SportsBasketballOutlinedIcon from '@material-ui/icons/SportsBasketballOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import LocalFloristOutlinedIcon from '@material-ui/icons/LocalFloristOutlined';
import MovieCreationOutlinedIcon from '@material-ui/icons/MovieCreationOutlined';
import WcOutlinedIcon from '@material-ui/icons/WcOutlined';
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import AllInclusiveOutlinedIcon from '@material-ui/icons/AllInclusiveOutlined';
import ChromeReaderModeOutlinedIcon from '@material-ui/icons/ChromeReaderModeOutlined';
import ChildCareOutlinedIcon from '@material-ui/icons/ChildCareOutlined';
import BlurCircularOutlinedIcon from '@material-ui/icons/BlurCircularOutlined';
import IsoOutlinedIcon from '@material-ui/icons/IsoOutlined';

export const GENERAL_KNOWLEDGE = 'General Knowledge' as 'General Knowledge';
export const ENTERTAINMENT_BOOKS = 'Entertainment: Books' as 'Entertainment: Books';
export const ENTERTAINMENT_FILM = 'Entertainment: Film' as 'Entertainment: Film';
export const ENTERTAINMENT_MUSIC = 'Entertainment: Music' as 'Entertainment: Music';
export const ENTERTAINMENT_THEATER = 'Entertainment: Musicals & Theatres' as 'Entertainment: Musicals & Theatres';
export const ENTERTAINMENT_TV = 'Entertainment: Television' as 'Entertainment: Television';
export const ENTERTAINMENT_VIDEO_GAMES = 'Entertainment: Video Games' as 'Entertainment: Video Games';
export const ENTERTAINMENT_BOARD_GAMES = 'Entertainment: Board Games' as 'Entertainment: Board Games'; // more like bored games amirite
export const SCIENCE_NATURE = 'Science & Nature' as 'Science & Nature';
export const SCIENCE_COMPUTERS = 'Science: Computers' as 'Science: Computers';
export const SCIENCE_MATH = 'Science: Mathematics' as 'Science: Mathematics';
export const MYTHOLOGY = 'Mythology' as 'Mythology';
export const SPORTS = 'Sports' as 'Sports';
export const GEOGRAPHY = 'Geography' as 'Geography';
export const HISTORY = 'History' as 'History';
export const POLITICS = 'Politics' as 'Politics';
export const ART = 'Art' as 'Art';
export const CELEBRITIES = 'Celebrities' as 'Celebrities';
export const ANIMALS = 'Animals' as 'Animals';
export const VEHICLES = 'Vehicles' as 'Vehicles';
export const ENTERTAINMENT_COMICS = 'Entertainment: Comics' as 'Entertainment: Comics';
export const SCIENCE_GADGETS = 'Science: Gadgets' as 'Science: Gadgets';
export const ENTERTAINMENT_ANIME = 'Entertainment: Japanese Anime & Manga' as 'Entertainment: Japanese Anime & Manga';
export const ENTERTAINMENT_ANIMATION = 'Entertainment: Cartoon & Animations' as 'Entertainment: Cartoon & Animations';

export const categoriesByIds: Record<number, Category> = {
  10: ENTERTAINMENT_BOOKS,
  11: ENTERTAINMENT_FILM,
  12: ENTERTAINMENT_MUSIC,
  13: ENTERTAINMENT_THEATER,
  14: ENTERTAINMENT_TV,
  15: ENTERTAINMENT_VIDEO_GAMES,
  16: ENTERTAINMENT_BOARD_GAMES,
  17: SCIENCE_NATURE,
  18: SCIENCE_COMPUTERS,
  19: SCIENCE_MATH,
  20: MYTHOLOGY,
  21: SPORTS,
  22: GEOGRAPHY,
  23: HISTORY,
  24: POLITICS,
  25: ART,
  26: CELEBRITIES,
  27: ANIMALS,
  28: VEHICLES,
  29: ENTERTAINMENT_COMICS,
  30: SCIENCE_GADGETS,
  31: ENTERTAINMENT_ANIME,
  32: ENTERTAINMENT_ANIMATION,
  9: GENERAL_KNOWLEDGE,
};

export const iconsByCategory: Record<
  Category,
  (isActive: boolean) => React.ReactElement
> = {
  /* eslint-disable react/display-name */
  [ANIMALS]: (isActive: boolean): React.ReactElement => (
    <PetsOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [ART]: (isActive: boolean): React.ReactElement => (
    <PaletteOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [CELEBRITIES]: (isActive: boolean): React.ReactElement => (
    <StarIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [ENTERTAINMENT_ANIMATION]: (isActive: boolean): React.ReactElement => (
    <ChildCareOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [ENTERTAINMENT_ANIME]: (isActive: boolean): React.ReactElement => (
    <BlurCircularOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [ENTERTAINMENT_BOARD_GAMES]: (isActive: boolean): React.ReactElement => (
    <ChromeReaderModeOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [ENTERTAINMENT_BOOKS]: (isActive: boolean): React.ReactElement => (
    <MenuBookOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [ENTERTAINMENT_COMICS]: (isActive: boolean): React.ReactElement => (
    <ImportContactsOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [ENTERTAINMENT_FILM]: (isActive: boolean): React.ReactElement => (
    <MovieCreationOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [ENTERTAINMENT_MUSIC]: (isActive: boolean): React.ReactElement => (
    <AudiotrackOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [ENTERTAINMENT_THEATER]: (isActive: boolean): React.ReactElement => (
    <WcOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [ENTERTAINMENT_TV]: (isActive: boolean): React.ReactElement => (
    <TvOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [ENTERTAINMENT_VIDEO_GAMES]: (isActive: boolean): React.ReactElement => (
    <SportsEsportsOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [GENERAL_KNOWLEDGE]: (isActive: boolean): React.ReactElement => (
    <AllInclusiveOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [GEOGRAPHY]: (isActive: boolean): React.ReactElement => (
    <MapOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [HISTORY]: (isActive: boolean): React.ReactElement => (
    <HistoryOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [MYTHOLOGY]: (isActive: boolean): React.ReactElement => (
    <FunctionsOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [POLITICS]: (isActive: boolean): React.ReactElement => (
    <GavelOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [SCIENCE_COMPUTERS]: (isActive: boolean): React.ReactElement => (
    <ComputerOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [SCIENCE_GADGETS]: (isActive: boolean): React.ReactElement => (
    <DevicesOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [SCIENCE_MATH]: (isActive: boolean): React.ReactElement => (
    <IsoOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [SCIENCE_NATURE]: (isActive: boolean): React.ReactElement => (
    <LocalFloristOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [SPORTS]: (isActive: boolean): React.ReactElement => (
    <SportsBasketballOutlinedIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  [VEHICLES]: (isActive: boolean): React.ReactElement => (
    <DirectionsCarIcon color={isActive ? 'secondary' : 'disabled'} />
  ),
  /* eslint-enable react/display-name */
};

export const categories = Object.keys(iconsByCategory);
export const idsByCategory = invert(categoriesByIds);

export type Category =
  | typeof GENERAL_KNOWLEDGE
  | typeof ENTERTAINMENT_BOOKS
  | typeof ENTERTAINMENT_FILM
  | typeof ENTERTAINMENT_MUSIC
  | typeof ENTERTAINMENT_THEATER
  | typeof ENTERTAINMENT_TV
  | typeof ENTERTAINMENT_VIDEO_GAMES
  | typeof ENTERTAINMENT_BOARD_GAMES
  | typeof SCIENCE_NATURE
  | typeof SCIENCE_COMPUTERS
  | typeof SCIENCE_MATH
  | typeof MYTHOLOGY
  | typeof SPORTS
  | typeof GEOGRAPHY
  | typeof HISTORY
  | typeof POLITICS
  | typeof ART
  | typeof CELEBRITIES
  | typeof ANIMALS
  | typeof VEHICLES
  | typeof ENTERTAINMENT_COMICS
  | typeof SCIENCE_GADGETS
  | typeof ENTERTAINMENT_ANIME
  | typeof ENTERTAINMENT_ANIMATION;

export const EASY = 'EASY' as 'EASY';
export const MEDIUM = 'MEDIUM' as 'MEDIUM';
export const HARD = 'HARD' as 'HARD';
export const difficulties: Difficulty[] = [EASY, MEDIUM, HARD];
export type Difficulty = typeof EASY | typeof MEDIUM | typeof HARD;

export interface Question {
  question: string;
  options: Array<string>;
  correct_answer: string;
}
