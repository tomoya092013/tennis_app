import React from 'react';
import NewGameTitle from './NewGameTitle/NewGameTitle';
import NewGameType from './NewGameType/NewGameType';
import './NewGame.css';

const Newgame = () => {
  return (
    <div className="newGame">
      <NewGameTitle />
      <NewGameType />
    </div>
  );
};

export default Newgame;
