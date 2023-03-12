import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { gameTypeListState } from '../../../../store';
import { GameType } from '../../../../type';

const SelectGameType = () => {
  const [gameTypeList, setGameTypeList] = useRecoilState(gameTypeListState);
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const selectGame = (onClickGameType: GameType) => {
    setSelectedButton(onClickGameType.id);
    const selectedGameType = { ...onClickGameType, isSelected: true };
    const newGameTypeList: GameType[] = gameTypeList.map((gameType) =>
      gameType.id === onClickGameType.id ? selectedGameType : { ...gameType, isSelected: false }
    );
    // console.log(newGameTypeList);
    setGameTypeList(newGameTypeList);
  };

  return (
    <>
      <h2>シングルス or ダブルス</h2>
      <div className="selecyGameTypeButton">
        {gameTypeList.map((gameType: GameType) => (
          <button
            key={gameType.id}
            onClick={() => selectGame(gameType)}
            style={{ backgroundColor: gameType.id === selectedButton ? '#ffff00' : '' }}
          >
            {gameType.selectGame}
          </button>
        ))}
      </div>
    </>
  );
};

export default SelectGameType;
