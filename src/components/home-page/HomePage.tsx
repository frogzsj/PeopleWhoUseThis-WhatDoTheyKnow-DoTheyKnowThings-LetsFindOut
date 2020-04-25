import React from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  categories,
  difficulties,
  iconsByCategory,
  Difficulty,
  Category,
} from '../../game-data';
import {
  StoreContext,
  toggleDifficulty,
  toggleCategory,
  setIsGameActive,
} from '../../store';
import './HomePage.scss';
import PlayButton from './PlayButton';

const DifficultyButton = withStyles({
  label: {
    fontFamily: 'Fredoka One',
    letterSpacing: 3,
  },
})(Button);

const listStyles = makeStyles((theme) => ({
  /* stylelint-disable selector-type-no-unknown */
  listitem: {
    cursor: 'pointer',
    paddingRight: '75px',
  },

  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },

  secondaryaction: {
    paddingRight: '0',
    right: '0',
  },

  subheader: {
    textAlign: 'center',
  } /* eslint-disable-line */
  /* stylelint-enable  selector-type-no-unknown */
}));

function HomePage(): React.ReactElement {
  const listClasses = listStyles();
  const { store, dispatch } = React.useContext(StoreContext);
  const [isDifficultyHovered, setIsDifficultyHovered] = React.useState(false);

  const getDifficultyButtonProps = (
    difficulty: Difficulty
  ): { variant: 'contained' | 'outlined'; color: 'primary' | 'default' } =>
    store.difficulties[difficulty]
      ? { color: 'primary', variant: 'contained' }
      : { color: 'default', variant: 'outlined' };

  return (
    <div className="HomePage-wrapper">
      <div className="HomePage-logo">
        <div className="HomePage-logo-jd">JD SALINGER</div>
        <div className="HomePage-logo-presents">PRESENTS</div>
        <div className="HomePage-logo-peeps">PEOPLE WHO USE THIS</div>
        <div className="HomePage-logo-what">WHAT DO THEY KNOW?</div>
        <div className="HomePage-logo-do">DO THEY KNOW THINGS??</div>
        <div className="HomePage-logo-lets">{"LET'S FIND OUT!"}</div>
      </div>

      <div className="HomePage-play-btn-wrapper">
        <PlayButton
          onClick={(): void => {
            dispatch(setIsGameActive(true));
          }}
        />
      </div>

      <div
        className="HomePage-difficulty"
        onMouseEnter={(): void => {
          setIsDifficultyHovered(true);
        }}
        onMouseLeave={(): void => {
          setIsDifficultyHovered(false);
        }}
      >
        <div className="HomePage-difficulty-main">
          <div className="HomePage-difficulty-label">DIFFICULTY</div>
          <ButtonGroup color="primary" size="large">
            {difficulties.map((difficulty) => (
              <DifficultyButton
                key={`${difficulty}-settings-btn`}
                onClick={(): void => {
                  dispatch(toggleDifficulty(difficulty));
                }}
                {...getDifficultyButtonProps(difficulty)}
              >
                {difficulty}
              </DifficultyButton>
            ))}
          </ButtonGroup>
        </div>
        <div
          className={classNames('HomePage-difficulty-info', {
            'HomePage-difficulty-info-open': isDifficultyHovered,
          })}
        >
          <div className="HomePage-difficulty-info-line">
            Easy questions are worth 1pt
          </div>
          <div className="HomePage-difficulty-info-line">
            Medium questions are worth 2pt
          </div>
          <div className="HomePage-difficulty-info-line">
            Hard questions are worth 4pt
          </div>
        </div>
      </div>

      <div className="HomePage-category">
        <div className="HomePage-category-label">CATEGORIES</div>
        <List className={listClasses.root}>
          <ListSubheader className={listClasses.subheader}>
            The more categories selected, the high the multiplier value
          </ListSubheader>
          {categories.map((category: string) => {
            return (
              <ListItem
                button
                className={listClasses.listitem}
                key={category}
                onClick={(): void => {
                  dispatch(toggleCategory(category as Category));
                }}
              >
                <ListItemIcon>
                  {iconsByCategory[category as Category](
                    store.categories[category as Category]
                  )}
                </ListItemIcon>
                <ListItemText>{category}</ListItemText>
                <ListItemSecondaryAction
                  className={listClasses.secondaryaction}
                >
                  <Switch
                    checked={store.categories[category as Category]}
                    onChange={(): void => {
                      dispatch(toggleCategory(category as Category));
                    }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
}

export default HomePage;
