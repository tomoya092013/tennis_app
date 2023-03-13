import React from 'react';
import NewGameTitle from './NewGameTitle/NewGameTitle';
import './SettingNewGame.css';
import SettingNewGameType from './SettingNewGameType/SettingNewGameType';

const SettingNewgame = () => {
  return (
    <div className="newGame">
      <NewGameTitle />
      <SettingNewGameType />
    </div>
  );
};

export default SettingNewgame;
