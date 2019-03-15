import React from 'react';
import { createPortal } from 'react-dom';

const Modal = props => createPortal(
  <div className="modal">
    <div className="modal__body">
      <div className="modal__title">
        <h2>{props.title}</h2>
      </div>
      <div className="modal__content">
        {props.content}
      </div>
      <div className="modal__actions">
        {props.actions}
      </div>
    </div>
  </div>,
  document.getElementById('modal')
);

export default Modal;
