import React from 'react';
import { useSettingNewGame, WITH_TIEBREAK, WITHOUT_TIEBREAK } from '../../../../useSettingNewGame';

const SelectTieBreak = () => {
  const { tieBreak, selectWithTieBreak, selectWithoutTieBreak } = useSettingNewGame();

  return (
    <>
      <h2>タイブレーク</h2>
      <div className="selectTieBreakButton">
        <button
          onClick={() => selectWithTieBreak()}
          style={{ backgroundColor: tieBreak === WITH_TIEBREAK ? '#ffff00' : '' }}
        >
          {WITH_TIEBREAK}
        </button>
        <button
          onClick={() => selectWithoutTieBreak()}
          style={{ backgroundColor: tieBreak === WITHOUT_TIEBREAK ? '#ffff00' : '' }}
        >
          {WITHOUT_TIEBREAK}
        </button>
      </div>
    </>
  );
};

export default SelectTieBreak;
