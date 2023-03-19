import React from 'react';
import { Outlet } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
// import { modalShowState } from '../../store';
import './Modal.css';

const Modal = () => {
  // const modalShow = useRecoilValue(modalShowState);

  // if (modalShow) {
  return (
    <div className="overlay">
      <div className="content">
        {/* <Serve /> */}
        <Outlet />
      </div>
    </div>
  );
  // } else {
  //   return null;
  // }
};

export default Modal;
