import React, { useRef } from 'react';
import useOutSideClick from '../useOutSideClick';
import ModalContainer from '../ModalContainer';

import './Modalcopy.css';
const Modal = ({ onClose, children }) => {
  const modalRef = useRef(null);
  const handleClose = () => {
    onClose ?.();
  };
  
  useOutSideClick(modalRef, handleClose);

  return (
    <ModalContainer>
      <div className='overlay'>
        <div className='ModalWrap'  ref={modalRef}>
          <div className='CloseButton' onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className='Contents'>{children}</div>
        </div>
      </div>
    </ModalContainer>
  );
}

export default Modal;




// /// Seconde Modal
// import React from 'react';
// import Modal from 'Modal';
// import styled from 'styled-components';

// const SecondModal = ({ onClose }) => {
//   return (
//     <Modal onClose={onCLose}>
//       <h1>Second Modal</h1>
//     </Modal>
//   );
// }

// export default SecondModal;


