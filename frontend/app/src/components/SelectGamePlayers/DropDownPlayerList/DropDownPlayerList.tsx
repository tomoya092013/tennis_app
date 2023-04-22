import React, { useState } from 'react';
import { useGetPlayerList } from '../../../hooks/useGetPlayerList';
import { Player } from '../../../type';
import NextButton from '../NextButton/NextButton';

const DropDownPlayerList = () => {
  const defaultPlayer: Player = { id: 0, name: '' };
  const { playerList } = useGetPlayerList();
  const [selectedGamePlayer1, setSelectedGamePlayer1] = useState<Player>(defaultPlayer);
  const [selectedGamePlayer2, setSelectedGamePlayer2] = useState<Player>(defaultPlayer);
  const [selectedPlayerId1, setSelectedPlayerId1] = useState<number>(0);
  const [selectedPlayerId2, setSelectedPlayerId2] = useState<number>(0);

  const handleChange1 = (e: { target: { value: any } }) => {
    setSelectedPlayerId1(e.target.value);
    const selectPlayer1 = playerList.filter((player) => player.id.toString() === e.target.value);
    setSelectedGamePlayer1(selectPlayer1[0]);
  };

  const handleChange2 = (e: { target: { value: any } }) => {
    setSelectedPlayerId2(e.target.value);
    const selectPlayer2 = playerList.filter((player) => player.id.toString() === e.target.value);
    setSelectedGamePlayer2(selectPlayer2[0]);
  };

  const disabledSelectPlayer = (playerListId: number, selectedPlayerId: number): boolean => {
    if (playerListId.toString() !== selectedPlayerId.toString()) return false;
    return playerListId.toString() === selectedPlayerId.toString();
  };

  return (
    <>
      <div className="addPlayer">
        <label htmlFor="player1">プレイヤー1</label>
        <select onChange={handleChange1} id="player1">
          <option value="">選択してください</option>
          {playerList.map((player) => {
            return (
              <option key={player.id} value={player.id} disabled={disabledSelectPlayer(player.id, selectedPlayerId2)}>
                {player.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="addPlayer">
        <label htmlFor="player2">プレイヤー2</label>
        <select onChange={handleChange2} id="player2">
          <option value="">選択してください</option>
          {playerList.map((player) => {
            return (
              <option key={player.id} value={player.id} disabled={disabledSelectPlayer(player.id, selectedPlayerId1)}>
                {player.name}
              </option>
            );
          })}
        </select>
      </div>
      <NextButton selectedGamePlayer1={selectedGamePlayer1} selectedGamePlayer2={selectedGamePlayer2} />
    </>
  );
};

export default DropDownPlayerList;
