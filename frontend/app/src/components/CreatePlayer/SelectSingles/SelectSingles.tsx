import React, { useState } from 'react';
import { useCreatePlayer } from '../../../useCreatePlayer';

const SelectSingles = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const { createSinglesPlayer, enabledSinglesNextButton } = useCreatePlayer();

  const handleChangePlayer1 = (e: { target: { value: React.SetStateAction<string> } }) => {
    setPlayer1(e.target.value);
  };
  const handleChangePlayer2 = (e: { target: { value: React.SetStateAction<string> } }) => {
    setPlayer2(e.target.value);
  };

  return (
    <>
      <h2>シングルス</h2>
      <div className="addPlayer">
        <label htmlFor="player1">プレイヤー1</label>
        <input id="player1" type="text" onChange={handleChangePlayer1} value={player1} />
      </div>
      <div className="addPlayer">
        <label htmlFor="player2">プレイヤー2</label>
        <input id="player2" type="text" onChange={handleChangePlayer2} value={player2} />
      </div>
      <button
        style={{ backgroundColor: enabledSinglesNextButton(player1, player2) ? '#00ff7a' : '' }}
        disabled={!enabledSinglesNextButton(player1, player2)}
        onClick={() => createSinglesPlayer(player1, player2)}
      >
        次へ
      </button>
      {/* <NextButton player_1={player1} player_2={player2} /> */}
    </>
  );
};

export default SelectSingles;
