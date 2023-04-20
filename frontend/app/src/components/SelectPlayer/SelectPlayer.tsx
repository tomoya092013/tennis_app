import './SelectPlayer.css';

import React from 'react';
import { Link } from 'react-router-dom';

import { useCreatePlayer } from '../../hooks/useCreatePlayer';
import { SINGLES, useSettingNewGame } from '../../hooks/useSettingNewGame';
import { useValidatePages } from '../../hooks/useValidatePage';
import SelectDoubles from './SelectDoubles/SelectDoubles';
import SelectPlayerTitle from './SelectPlayer/SelectPlayerTitle';
import SelectSingles from './SelectSingles/SelectSingles';

const SelectPlayer = () => {
  const { gameType } = useSettingNewGame();
  const { useValidateCreatePlayer } = useValidatePages();
  useValidateCreatePlayer();

  return (
    <div className="selectPlayer">
      <SelectPlayerTitle />
      {gameType === SINGLES ? <SelectSingles /> : <SelectDoubles />}
      <div className="linkArea">
        <Link to="/">戻る</Link>
      </div>
    </div>
  );
};

export default SelectPlayer;
