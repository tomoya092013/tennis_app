import './CreatePlayer.css';

import React, { useState } from 'react';

import { useCreatePlayer } from '../../hooks/useCreatePlayer';
import NavigateNewGameButton from './NavigateNewGameButton/NavigateNewGameButton';
import PlayerList from './PlayerList/PlayerList';

const CreatePlayer = () => {
  const [playerName, setPlayerName] = useState('');
  const { enabledCreatePlayerButton, createPlayer } = useCreatePlayer();
  const handleChangeCreatePlayer = (e: { target: { value: React.SetStateAction<string> } }) => {
    setPlayerName(e.target.value);
  };

  return (
    <div className="createPlayer">
      <input
        id="player"
        type="text"
        onChange={handleChangeCreatePlayer}
        value={playerName}
        placeholder="プレイヤー名を入力"
      />
      <button
        className="createPlayerButton"
        style={{ backgroundColor: enabledCreatePlayerButton(playerName) ? '#00ff7a' : '' }}
        disabled={!enabledCreatePlayerButton(playerName)}
        onClick={() => {
          createPlayer(playerName);
        }}
      >
        作成
      </button>
      <PlayerList />
      <NavigateNewGameButton />
    </div>
  );
};

export default CreatePlayer;
