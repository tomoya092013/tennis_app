import React from 'react';
import { useSettingNewGame } from '../../../../useSettingNewGame';

const NextButton = () => {
  const { enabledNextButton, enabledSettingNewGame } = useSettingNewGame();

  return (
    <button
      className="newGameNextButton"
      onClick={() => {
        enabledSettingNewGame();
      }}
      style={{ backgroundColor: enabledNextButton ? '#00ff7a' : '' }}
      disabled={!enabledNextButton}
    >
      次へ
    </button>
  );
};

export default NextButton;
