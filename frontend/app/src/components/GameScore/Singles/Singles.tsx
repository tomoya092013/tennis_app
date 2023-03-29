import React from 'react';
import { Player } from '../../../type';
import { useCreatePlayer } from '../../../useCreatePlayer';
import { FIRST_SERVE, SECOND_SERVE, useModalPointDetail } from '../../../useModalPointDetail';
import OneGameScoreDisplayOfSingles from './OneGameScoreDisplayOfSingles/OneGameScoreDisplayOfSingles';
import GameCount from '../GameCount/GameCount';
import PlayerState from '../PlayerState/PlayerState';

const Singles = () => {
  const { singlesAllOneGameScore, backToServeResult } = useModalPointDetail();
  const { serve } = useModalPointDetail();
  const { playerList } = useCreatePlayer();
  if (playerList.length < 2) return null;
  const player1: Player = playerList[0];
  const player2: Player = playerList[1];

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
