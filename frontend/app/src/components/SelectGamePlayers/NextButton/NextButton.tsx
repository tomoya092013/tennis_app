import React from 'react';
import { Player } from '../../../type';
import { useSelectGamePlayer } from '../../../hooks/useSelectGamePlayer';

type Props = {
  selectedGamePlayer1: Player;
  selectedGamePlayer2: Player;
};

const NextButton = ({ selectedGamePlayer1, selectedGamePlayer2 }: Props) => {
  const { enabledSinglesNextButton, setSinglesGamePlayer } = useSelectGamePlayer();

  return (
    <div>
      <button
        style={{
          backgroundColor: enabledSinglesNextButton(selectedGamePlayer1, selectedGamePlayer2) ? '#00ff7a' : '',
        }}
        disabled={!enabledSinglesNextButton(selectedGamePlayer1, selectedGamePlayer2)}
        onClick={() => setSinglesGamePlayer(selectedGamePlayer1, selectedGamePlayer2)}
      >
        次へ
      </button>
    </div>
  );
};

export default NextButton;
