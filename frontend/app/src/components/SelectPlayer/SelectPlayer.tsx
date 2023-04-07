import React from 'react';
import SelectPlayerTitle from './SelectPlayer/SelectPlayerTitle';
import './SelectPlayer.css';
import { useSettingNewGame, SINGLES } from '../../useSettingNewGame';
import SelectSingles from './SelectSingles/SelectSingles';
import SelectDoubles from './SelectDoubles/SelectDoubles';
import { Link } from 'react-router-dom';
import { useValidatePages } from '../../useValidatePage';
import { useCreatePlayer } from '../../useCreatePlayer';
import NavigateCreatePlayerButton from '../NavigateCreatePlayerButton/NavigateCreatePlayerButton';

const SelectPlayer = () => {
  const { gameType } = useSettingNewGame();
  const { useValidateCreatePlayer } = useValidatePages();
  useValidateCreatePlayer();

  return (
    <div className="selectPlayer">
      <SelectPlayerTitle />
      {gameType === SINGLES ? <SelectSingles /> : <SelectDoubles />}
      <div className='linkArea'>
        <NavigateCreatePlayerButton />
        <Link to="/">戻る</Link>
      </div>
    </div>
  );
};

export default SelectPlayer;
