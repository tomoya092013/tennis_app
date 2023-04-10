import React from 'react';
import { GamePlayer } from '../../../type';
import { useSelectPlayer } from '../../../useSelectPlayer';
import { FIRST_SERVE, SECOND_SERVE, useModalPointDetail } from '../../../useModalPointDetail';
import OneGameScoreDisplayOfSingles from './OneGameScoreDisplayOfSingles/OneGameScoreDisplayOfSingles';
import GameCount from '../GameCount/GameCount';
import PlayerState from '../PlayerState/PlayerState';

const Singles = () => {
  const { singlesAllOneGameScore, backToServeResult } = useModalPointDetail();
  const { serve } = useModalPointDetail();
  const { playerList } = useSelectPlayer();
  if (playerList.length < 2) return null;
  const player1: GamePlayer = playerList[0];
  const player2: GamePlayer = playerList[1];

  return (
    <>
      <div className="gameScore">
        <PlayerState {...player1} />
        <GameCount />
        <PlayerState {...player2} />
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
    </>
  );
};

export default Singles;
