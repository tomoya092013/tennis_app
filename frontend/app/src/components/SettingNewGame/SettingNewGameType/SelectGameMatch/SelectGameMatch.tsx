import React from 'react';
import { useSettingNewGame, FIVE_GAMES, SEVEN_GAMES, NINE_GAMES } from '../../../../useSettingNewGame';

const SelectGameMatch = () => {
  const { gameMatch, selectFiveGames, selectSevenGames, selectNineGames } = useSettingNewGame();

  return (
    <>
      <h2>ゲーム数</h2>
      <div className="selectGameMatchButton">
        <button
          onClick={() => selectFiveGames()}
          style={{ backgroundColor: gameMatch === FIVE_GAMES ? '#ffff00' : '' }}
        >
          {FIVE_GAMES}ゲーム
        </button>
        <button
          onClick={() => selectSevenGames()}
          style={{ backgroundColor: gameMatch === SEVEN_GAMES ? '#ffff00' : '' }}
        >
          {SEVEN_GAMES}ゲーム
        </button>
        <button
          onClick={() => selectNineGames()}
          style={{ backgroundColor: gameMatch === NINE_GAMES ? '#ffff00' : '' }}
        >
          {NINE_GAMES}ゲーム
        </button>
      </div>
    </>
  );
};

export default SelectGameMatch;
