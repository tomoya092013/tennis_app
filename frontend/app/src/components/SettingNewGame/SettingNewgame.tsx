import React from 'react';
import NewGameTitle from './NewGameTitle/NewGameTitle';
import './SettingNewGame.css';
import SettingNewGameType from './SettingNewGameType/SettingNewGameType';
import NextButton from './SettingNewGameType/NextButton/NextButton';
import NavigateCreatePlayerButton from '../NavigateCreatePlayerButton/NavigateCreatePlayerButton';

const SettingNewgame = () => {
  return (
    <div className="newGame">
      <NewGameTitle />
      <SettingNewGameType />
      <div className='linkArea'>
        <NavigateCreatePlayerButton />
        <NextButton />
      </div>
    </div>
  );
};

export default SettingNewgame;
