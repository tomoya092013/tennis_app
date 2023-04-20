import './SelectGamePlayers.css';

import React from 'react';
import { Link } from 'react-router-dom';

import { SINGLES, useSettingNewGame } from '../../hooks/useSettingNewGame';
import { useValidatePages } from '../../hooks/useValidatePage';
import SelectDoubles from './SelectDoubles/SelectDoubles';
import Singles from './Singles/Singles';
import SelectGamePlayersTitle from './SelectGamePlayersTitle/SelectGamePlayersTitle';

const SelectGamePlayers = () => {
  const { gameType } = useSettingNewGame();
  const { useValidateCreatePlayer } = useValidatePages();
  useValidateCreatePlayer();

  return (
    <div className="selectPlayer">
      <SelectGamePlayersTitle />
      {gameType === SINGLES ? <Singles /> : <SelectDoubles />}
      <div className="linkArea">
        <Link to="/">戻る</Link>
      </div>
    </div>
  );
};

export default SelectGamePlayers;
