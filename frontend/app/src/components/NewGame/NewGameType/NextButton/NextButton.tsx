import React from 'react';
import { useRecoilValue } from 'recoil';
import { gameMatchIsSelectedState, gameTypeIsSelectedState, tieBreakSelectedState } from '../../../../store';

const NextButton = () => {
  const gameTypeIsSelected = useRecoilValue(gameTypeIsSelectedState);
  const gameMatchIsSelected = useRecoilValue(gameMatchIsSelectedState);
  const tieBreakIsSelected = useRecoilValue(tieBreakSelectedState);
  const checkSelected: boolean = gameTypeIsSelected && gameMatchIsSelected && tieBreakIsSelected;

  const clickNextButton = () => {
    if (!checkSelected) {
      alert('ゲームの種類を選択してください。');
      return;
    }
    alert('押す');
  };

  return (
    <button
      className="newGameNextButton"
      onClick={() => {
        clickNextButton();
      }}
      style={{ backgroundColor: checkSelected ? '#00ff7a' : '' }}
    >
      次へ
    </button>
  );
};

export default NextButton;
