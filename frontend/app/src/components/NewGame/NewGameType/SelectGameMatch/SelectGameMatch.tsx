import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { gameMatchListState } from '../../../../store';
import { GameMatch } from '../../../../type';

const SelectGameMatch = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [gameMatchList, setGameMatchList] = useRecoilState<GameMatch[]>(gameMatchListState);

  const selectGameMatch = (onClickGameMatch: GameMatch) => {
    setSelectedButton(onClickGameMatch.id);
    const selectedGameMatch = { ...onClickGameMatch, isSelected: true };
    const newGameMatchList = gameMatchList.map((gameMatch) =>
      onClickGameMatch.id === gameMatch.id ? selectedGameMatch : { ...gameMatch, isSelected: false }
    );
    // console.log(newGameMatchList);
    setGameMatchList(newGameMatchList);
  };

  return (
    <>
      <h2>ゲーム数</h2>
      <div className="selectGameMatchButton">
        {gameMatchList.map((gameMatch: GameMatch) => (
          <button
            key={gameMatch.id}
            onClick={() => selectGameMatch(gameMatch)}
            style={{ backgroundColor: gameMatch.id === selectedButton ? '#ffff00' : '' }}
          >
            {gameMatch.selectGameMatch}ゲーム
          </button>
        ))}
      </div>
    </>
  );
};

export default SelectGameMatch;
