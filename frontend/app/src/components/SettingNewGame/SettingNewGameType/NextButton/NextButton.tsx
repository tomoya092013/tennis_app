import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSettingNewGame } from '../../../../useSettingNewGame';

const NextButton = () => {
  const { enabledNextButton } = useSettingNewGame();
  const navigate = useNavigate();
  const clickNextButton = () => navigate('./createPlayer');

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
