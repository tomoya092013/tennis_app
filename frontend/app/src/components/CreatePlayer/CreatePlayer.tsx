import React from 'react';
import CreatePlayerTitle from './CreatePlayerTitle/CreatePlayerTitle';
import './CreatePlayer.css';
import { useSettingNewGame, SINGLES } from '../../useSettingNewGame';
import SelectSingles from './SelectSingles/SelectSingles';
import SelectDoubles from './SelectDoubles/SelectDoubles';
import { Link } from 'react-router-dom';
import { useValidatePages } from '../../useValidatePage';

const CreatePlayer = () => {
  const { gameType } = useSettingNewGame();
  const { useValidateCreatePlayer } = useValidatePages();
  useValidateCreatePlayer();

  return (
    <div className="createPlayer">
      <CreatePlayerTitle />
      {gameType === SINGLES ? <SelectSingles /> : <SelectDoubles />}
      <div>
        <Link to="/">戻る</Link>
      </div>
    </div>
  );
};

export default CreatePlayer;
