import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalShowState, player1_MissListState, singlesGameScoreState } from '../../../../store';
import { GameScore, PointOrMiss } from '../../../../type';

const Serve = () => {
  const setModalShow = useSetRecoilState(modalShowState);
  const [singlesGameScore, setSinglesGameScore] = useRecoilState(singlesGameScoreState);
  const [pointOrMissList, setPointOrMissList] = useRecoilState(player1_MissListState);

  const closeModal = () => {
    setModalShow(false);
  };

  const addDoubleFault = () => {
    const newPointOrMiss: PointOrMiss = {
      shotType: 'Df',
    };
    // const newPointOrMissList:PointOrMiss[] ={[...pointOrMissList, newPointOrMiss]}
    setPointOrMissList([...pointOrMissList, newPointOrMiss]);

    // console.log([pointOrMissList]);
    // console.log(singlesGameScore);
    // console.log(singlesGameScore.player_1.miss);

    // setSinglesGameScore({ ...singlesGameScore, player_1.miss: newPointOrMiss } });
    // setSinglesGameScore({ ...singlesGameScore, player_1: { miss: newPointOrMiss } });

    // setSinglesGameScore({
    //   ...singlesGameScore
    //   player_1: { ...player1, miss: setPointOrMissList([...pointOrMissList, newPointOrMiss]) },
    //   player_2: { ...player2 },
    // });
  };

  return (
    <div>
      <div>
        <button className="serveDetailButton">ファーストサーブ</button>
      </div>
      <div>
        <button className="serveDetailButton">セカンドサーブ</button>
      </div>
      <div>
        <button className="serveDetailButton" onClick={() => addDoubleFault()}>
          ダブルフォルト
        </button>
      </div>
      <div>
        <button onClick={closeModal} className="serveBuckButton">
          戻る
        </button>
      </div>
    </div>
  );
};

export default Serve;
