import React from 'react';

const CompleteModal = ({ show, children }) => {
  return show && (
    <div className="modal modal-complete">
      <div className="modal__dialog">
        { children }
      </div>
    </div>
  );
};

export default CompleteModal;
