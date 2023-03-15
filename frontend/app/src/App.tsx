import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreatePlayer from './components/CreatePlayer/CreatePlayer';
import GameScore from './components/GameScore/GameScore';
import SettingNewgame from './components/SettingNewGame/SettingNewgame';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SettingNewgame />} />
        <Route path="/createPlayer" element={<CreatePlayer />} />
        <Route path="/gameScore" element={<GameScore />} />
      </Routes>
      {/* <SettingNewgame />
      <CreatePlayer/> */}
    </div>
  );
};

export default App;
