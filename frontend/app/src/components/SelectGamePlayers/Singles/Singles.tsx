import React from 'react';

import DropDownPlayerList from '../DropDownPlayerList/DropDownPlayerList';

const Singles = () => {
  return (
    <>
      <h2>シングルス</h2>
      <DropDownPlayerList />
      {/* <button
        style={{ backgroundColor: enabledSinglesNextButton(player1, player2) ? '#00ff7a' : '' }}
        disabled={!enabledSinglesNextButton(player1, player2)}
        onClick={() => createSinglesPlayer(player1, player2)}
      >
        次へ
      </button> */}
    </>
  );
};

export default Singles;
