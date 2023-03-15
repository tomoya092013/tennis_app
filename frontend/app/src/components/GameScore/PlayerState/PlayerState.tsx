import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { enableAddServeState, modalShowState } from '../../../store';
import AddDetailShotResult from '../AddDetailShotResult/AddDetailShotResult';
// import { Player } from '../../../type';
import MissArea from '../MissArea/MissArea';
import PointArea from '../PointArea/PointArea';

// const PlayerState = (props: Player | null) => {
const PlayerState = (props: any) => {
  const enableAddServe = useRecoilValue(enableAddServeState);
  const setModalShow = useSetRecoilState(modalShowState);
  const openModal = () => {
    setModalShow(true);
  };
  return (
    <div className="player">
      <button
        className="playerName"
        style={{ backgroundColor: enableAddServe ? '#ffff00' : '' }}
        disabled={!enableAddServe}
        onClick={openModal}
      >
        {props !== null ? props.player.name : null}
      </button>
      <AddDetailShotResult />
      <div className="pointDetail">
        <PointArea />
        <MissArea />
      </div>
    </div>
  );
};

export default PlayerState;
