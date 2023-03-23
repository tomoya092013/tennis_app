import React, { useState } from 'react';
import { useCreatePlayer } from '../../../useCreatePlayer';

const SelectDoubles = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [player3, setPlayer3] = useState('');
  const [player4, setPlayer4] = useState('');
  const { enabledDoublesNextButton } = useCreatePlayer();

  const handleChangePlayer1 = (e: { target: { value: React.SetStateAction<string> } }) => {
    setPlayer1(e.target.value);
  };
  const handleChangePlayer2 = (e: { target: { value: React.SetStateAction<string> } }) => {
    setPlayer2(e.target.value);
  };
  const handleChangePlayer3 = (e: { target: { value: React.SetStateAction<string> } }) => {
    setPlayer3(e.target.value);
  };
  const handleChangePlayer4 = (e: { target: { value: React.SetStateAction<string> } }) => {
    setPlayer4(e.target.value);
  };
  return (
    <>
      <h2>ダブルス</h2>
      <div className="team1">
        <h2>チーム1</h2>
        <div>
          <label htmlFor="player1">プレイヤー1</label>
          <input id="player1" type="text" onChange={handleChangePlayer1} value={player1} />
        </div>
        <div>
          <label htmlFor="player2">プレイヤー2</label>
          <input id="player2" type="text" onChange={handleChangePlayer2} value={player2} />
        </div>
      </div>
      <div className="team2">
        <h2>チーム2</h2>
        <div>
          <label htmlFor="player3">プレイヤー3</label>
          <input id="player3" type="text" onChange={handleChangePlayer3} value={player3} />
        </div>
        <div>
          <label htmlFor="player4">プレイヤー4</label>
          <input id="player4" type="text" onChange={handleChangePlayer4} value={player4} />
        </div>
      </div>
      <button
        style={{ backgroundColor: enabledDoublesNextButton(player1, player2, player3, player4) ? '#00ff7a' : '' }}
        disabled={!enabledDoublesNextButton(player1, player2, player3, player4)}
        onClick={() => {}}
      >
        次へ
      </button>
    </>
  );
};

export default SelectDoubles;
