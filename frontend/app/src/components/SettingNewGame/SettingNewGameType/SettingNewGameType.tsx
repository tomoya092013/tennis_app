import React from 'react';
import NextButton from './NextButton/NextButton';
import SelectGameSet from './SelectGameMatch/SelectGameMatch';
import SelectGameType from './SelectGameType/SelectGameType';
import SelectTieBreak from './SelectTieBreak/SelectTieBreak';

const SettingNewGameType = () => {
  return (
    <div>
      <SelectGameType />
      <SelectGameSet />
      <SelectTieBreak />
      <NextButton />
    </div>
  );
};

export default SettingNewGameType;
