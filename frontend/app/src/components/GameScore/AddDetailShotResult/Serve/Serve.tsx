import React from 'react';
import { useSetRecoilState } from 'recoil';
import { modalShowState } from '../../../../store';

const Serve = () => {
  const setModalShow = useSetRecoilState(modalShowState);
  const closeModal = () => {
    setModalShow(false);
  };
  return (
    <div>
      <div>
        <button className="serveButton">ファーストサーブ</button>
      </div>
      <div>
        <button className="serveButton">セカンドサーブ</button>
      </div>
      <div>
        <button className="serveButton">ダブルフォルト</button>
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
