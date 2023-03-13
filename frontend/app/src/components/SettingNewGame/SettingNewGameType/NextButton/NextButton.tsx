import React from 'react';
import { useSettingNewGame } from '../../useSettingNewGame';

const NextButton = () => {
  const { enabledNextButton } = useSettingNewGame();
  const clickNextButton = () => console.log('おした');

  return (
    <button
      className="newGameNextButton"
      onClick={() => {
        clickNextButton();
      }}
      style={{ backgroundColor: enabledNextButton ? '#00ff7a' : '' }}
      disabled={!enabledNextButton}
    >
      次へ
    </button>
  );
};

export default NextButton;
