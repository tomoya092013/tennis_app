import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GameScore from './components/GameScore/GameScore';
import CountRally from './components/Modal/CountRally/CountRally';
import Course from './components/Modal/Course/Course';
import ForeOrBack from './components/Modal/ForeOrBack/ForeOrBack';
import MissResult from './components/Modal/MissResult/MissResult';
import Modal from './components/Modal/Modal';
import PoachCourse from './components/Modal/PoachCouse/PoachCourse';
import Serve from './components/Modal/Serve/Serve';
import ServeResult from './components/Modal/ServeResult/ServeResult';
import ShotType from './components/Modal/ShotType/ShotType';
import SettingNewgame from './components/SettingNewGame/SettingNewgame';
import CreatePlayer from './components/CreatePlayer/CreatePlayer';
import SelectGamePlayers from './components/SelectGamePlayers/SelectGamePlayers';
import MatchList from './components/MatchData/MatchList';
import MatchData from './components/MatchData/MatchData';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/match" element={<MatchList />} />
        <Route path="/match/:matchId" element={<MatchData />} />
        <Route path="/" element={<CreatePlayer />} />
        <Route path="/settingNewGame" element={<SettingNewgame />} />
        <Route path="/selectGamePlayers" element={<SelectGamePlayers />} />
        <Route path="/gameScore" element={<GameScore />} />
        <Route path="/modal" element={<Modal />}>
          <Route path="/modal/serve" element={<Serve />} />
          <Route path="/modal/serveResult" element={<ServeResult />} />
          <Route path="/modal/foreOrBack" element={<ForeOrBack />} />
          <Route path="/modal/shotType" element={<ShotType />} />
          <Route path="/modal/course" element={<Course />} />
          <Route path="/modal/poachCourse" element={<PoachCourse />} />
          <Route path="/modal/countRally" element={<CountRally />} />
          <Route path="/modal/missResult" element={<MissResult />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
