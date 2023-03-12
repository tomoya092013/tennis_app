import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { TieBreakListState } from '../../../../store';
import { TieBreak } from '../../../../type';
import '../../NewGame.css';

const SelectTieBreak = () => {
  const [tieBreakButton, seTieBreakButton] = useState<number | null>(null);
  const [tieBreakList, setTieBreakList] = useRecoilState(TieBreakListState);

  const selectTieBreak = (onClickTieBreak: TieBreak) => {
    seTieBreakButton(onClickTieBreak.id);
    const selectedTieBreak = { ...onClickTieBreak, isSelected: true };
    const newTieBreakList = tieBreakList.map((tieBreak) =>
      tieBreak.id === onClickTieBreak.id ? selectedTieBreak : { ...tieBreak, isSelected: true }
    );
    setTieBreakList(newTieBreakList);
  };

  return (
    <>
      <h2>タイブレーク</h2>
      <div className="selectTieBreakButton">
        {tieBreakList.map((tieBreak) => (
          <button
            key={tieBreak.id}
            onClick={() => {
              selectTieBreak(tieBreak);
            }}
            style={{ backgroundColor: tieBreak.id === tieBreakButton ? '#ffff00' : '' }}
          >
            {tieBreak.selectTieBreak}
          </button>
        ))}
      </div>
    </>
  );
};

export default SelectTieBreak;
