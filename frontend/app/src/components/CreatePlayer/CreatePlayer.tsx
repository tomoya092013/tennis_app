import React from 'react';
import CreatePlayerTitle from './CreatePlayerTitle/CreatePlayerTitle';
import './CreatePlayer.css';
import { useSettingNewGame, SINGLES } from '../../useSettingNewGame';
import SelectSingles from './SelectSingles/SelectSingles';
import SelectDoubles from './SelectDoubles/SelectDoubles';
import { Link } from 'react-router-dom';
// import NextButton from './NextButton/NextButton';

const CreatePlayer = () => {
  const { gameType } = useSettingNewGame();
  return (
    <div className="createPlayer">
      <CreatePlayerTitle />
      {gameType === SINGLES ? <SelectSingles /> : <SelectDoubles />}
      {/* <NextButton /> */}
      <div>
        <Link to="/">戻る</Link>
      </div>
    </div>
  );
};

export default CreatePlayer;
