import React from 'react';
import { Outlet } from 'react-router-dom';
import './Modal.css';

const Modal = () => {
  return (
    <div className="overlay">
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Modal;
