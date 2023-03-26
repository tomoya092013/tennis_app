import React from 'react';
import { Player } from '../../../type';
import { useCreatePlayer } from '../../../useCreatePlayer';
import { useModalPointDetail } from '../../../useModalPointDetail';
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
          {serve !== null ? (
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
      {/* <OneGameScoreDisplayOfSingles /> */}
      {/* マップで出す */}

      {/* パターン1: 1~gameCountまでのnumber型の配列を作る */}
      {/* {[1, 2, 3].map(gameCount => <OneGameScoreDisplayOfSingles gameCount={gameCount} />)} */}

      {/* パターン2: 1~gameCountまでのnumber型の配列を作る
          まず各ゲームのスコアを格納する配列Xが必要(recoil)
      */}
      {/* 配列XをこのSinglesコンポーネントで展開する */}
      {/* 
      X.map(gameScore=>{
        // 1ゲームごとのスコア表示
        // 別コンポーネントに渡してあげてもいい
      }) 
      */}
      {singlesAllOneGameScore.map((_singlesOneGame, index) => (
        <OneGameScoreDisplayOfSingles key={index} gameOrder={index} />
      ))}
    </>
  );
};

export default Singles;
