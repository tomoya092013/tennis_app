import React from 'react';

import { useCreatePlayer } from '../../../hooks/useCreatePlayer';

const NavigateNewGameButton = () => {
  const { navigateNewGame } = useCreatePlayer();
  return (
    <button
      className="navigateNewGame"
      onClick={() => {
        navigateNewGame();
      }}
    >
      New Game
    </button>
  );
};

export default NavigateNewGameButton;
