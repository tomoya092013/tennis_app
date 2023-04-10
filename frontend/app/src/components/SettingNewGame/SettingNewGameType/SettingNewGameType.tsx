import React from 'react';
import SelectGameSet from './SelectGameMatch/SelectGameMatch';
import SelectGameType from './SelectGameType/SelectGameType';
import SelectTieBreak from './SelectTieBreak/SelectTieBreak';

const SettingNewGameType = () => {
  return (
    <div>
      <SelectGameType />
      <SelectGameSet />
      <SelectTieBreak />
    </div>
  );
};

export default SettingNewGameType;
