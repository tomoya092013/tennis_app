import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreatePlayer from './components/CreatePlayer/CreatePlayer';
import SettingNewgame from './components/SettingNewGame/SettingNewgame';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SettingNewgame />} />
        <Route path="/createPlayer" element={<CreatePlayer />} />
      </Routes>
      {/* <SettingNewgame />
      <CreatePlayer/> */}
    </div>
  );
};

export default App;
