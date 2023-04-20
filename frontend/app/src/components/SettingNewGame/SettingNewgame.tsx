import './SettingNewGame.css';

import React from 'react';

import NewGameTitle from './NewGameTitle/NewGameTitle';
import NextButton from './SettingNewGameType/NextButton/NextButton';
import SettingNewGameType from './SettingNewGameType/SettingNewGameType';

const SettingNewgame = () => {
  return (
    <div className="newGame">
      <NewGameTitle />
      <SettingNewGameType />
      <NextButton />
    </div>
  );
};

export default SettingNewgame;
