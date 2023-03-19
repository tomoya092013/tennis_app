import React from 'react';
import { useSettingNewGame, SINGLES, DOUBLES } from '../../../../useSettingNewGame';

const SelectGameType = () => {
  const { gameType, selectSingles, selectDoubles } = useSettingNewGame();

  return (
    <>
      <h2>シングルス or ダブルス</h2>
      <div className="selecyGameTypeButton">
        <button style={{ backgroundColor: gameType === SINGLES ? '#ffff00' : '' }} onClick={() => selectSingles()}>
          シングルス
        </button>
        <button style={{ backgroundColor: gameType === DOUBLES ? '#ffff00' : '' }} onClick={() => selectDoubles()}>
          ダブルス
        </button>
      </div>
    </>
  );
};

export default SelectGameType;
