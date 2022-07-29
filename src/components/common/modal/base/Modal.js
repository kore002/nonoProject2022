import React, { useRef } from 'react';
import styled from 'styled-components';
import useOutSideClick from '../useOutSideClick';
import ModalContainer from '../ModalContainer';

const Modal = ({ onClose, children }) => {
  const modalRef = useRef(null);
  const handleClose = () => {
    onClose ?.();
  };
  
  useOutSideClick(modalRef, handleClose);

  return (
    <ModalContainer>
      <Overlay>
        <ModalWrap ref={modalRef}>
          <CloseButton onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </CloseButton>
          <Contents>{children}</Contents>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(204, 153, 255, 0.5);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 600px;
  // height: fit-content;
  height : 600px;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  i {
    color: #5d5d5d;
    font-size: 30px;
  }
`;

const Contents = styled.div`
  margin: 50px 30px;
`;

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


