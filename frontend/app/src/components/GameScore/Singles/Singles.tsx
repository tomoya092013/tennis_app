import React from 'react';

import { FIRST_SERVE, SECOND_SERVE, useModalPointDetail } from '../../../hooks/useModalPointDetail';
import { useSelectGamePlayer } from '../../../hooks/useSelectGamePlayer';
import { GamePlayer } from '../../../type';
import GameCount from '../GameCount/GameCount';
import PlayerState from '../PlayerState/PlayerState';
import OneGameScoreDisplayOfSingles from './OneGameScoreDisplayOfSingles/OneGameScoreDisplayOfSingles';
import ServeData from '../ServeData/ServeDAta';
import { useInsertMatchData } from '../../../hooks/useInsertMatchData';

const Singles = () => {
  const { singlesAllOneGameScore, backToServeResult } = useModalPointDetail();
  const { serve } = useModalPointDetail();
  const { gamePlayerList } = useSelectGamePlayer();
  const { insertMatchData } = useInsertMatchData();
  if (gamePlayerList.length < 2) return null;
  const gamePlayer1: GamePlayer = gamePlayerList[0];
  const gamePlayer2: GamePlayer = gamePlayerList[1];

  return (
    <>
      <div className="gameScore">
        <PlayerState {...gamePlayer1} />
        <GameCount />
        <PlayerState {...gamePlayer2} />
        <div className="backToServeResult">
          {serve === FIRST_SERVE || serve === SECOND_SERVE ? (
            <button
              className="backToServeResultButton"
              onClick={() => {
                backToServeResult();
              }}
            >
              戻る
            </button>
          ) : null}
        </div>
      </div>
      {singlesAllOneGameScore.map((_singlesOneGame, index) => (
        <OneGameScoreDisplayOfSingles key={index} gameOrder={index} />
      ))}
      <ServeData />
      <button
        onClick={() => {
          insertMatchData();
        }}
      >
        試合データ追加
      </button>
    </>
  );
};

export default Singles;
