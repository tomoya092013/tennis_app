import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalShowState } from '../../../store';
import Serve from './Serve/Serve';

const AddDetailShotResult = () => {
  const modalShow = useRecoilValue(modalShowState);

  if (modalShow) {
    return (
      <div className="overlay">
        <div className="content">
          <Serve />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default AddDetailShotResult;
