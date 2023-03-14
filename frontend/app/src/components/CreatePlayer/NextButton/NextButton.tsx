import React from 'react';
// import { useCreatePlayer } from '../../../useCreatePlayer';

const NextButton = (props: string | '') => {
  // const { plaer1, player2 } = props;
  // const { createSinglesPlayer, enabledNextButton } = useCreatePlayer();
  return (
    <div>
      {/* <button
        style={{ backgroundColor: enabledNextButton(player1, player2) ? '#00ff7a' : '' }}
        disabled={!enabledNextButton(player1, player2)}
        onClick={() => createSinglesPlayer(player1, player2)}
      >
        次へ
      </button> */}
    </div>
  );
};

export default NextButton;
