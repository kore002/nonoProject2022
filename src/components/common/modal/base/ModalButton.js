// import React, { useState } from 'react';
// import Modal from './Modal';

// const ModalButton = () => {
//     const [isOpen, setOpen] = useState(false);
//     const handleClick = () => {
//         setOpen(true);
//     };

//   return (
//     <div className="App">
//       <button onClick={handleClick}>모달 열기</button>
//       <Modal isOpen={isOpen}
//       onRequestClose={onModalClose} />
//     </div>
//   );
// };

// export default ModalButton;

// import React, { useState } from 'react'
// import Modal from './Modal'


// const ModalButton = () => {
//     const [modalOpen, setModalOpen] = useState(false)
//     const modalClose = () => {
//         setModalOpen(!modalOpen)

//     }

//     return (
//         <>
//         <button onClick={modalClose}>Modal</button>
//         { modalOpen && <Modal modalClose={modalClose}></Modal>}
//         </>

//     )
// }

// export default ModalButton;

import { useState } from 'react';

import styled from 'styled-components';
import FirstModal from './FirstModal';
import SecondModal from './SecondModal';

const ModalButton = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const onClickButton1 = () => {
        setIsOpen1(true);
    };

    const onClickButton2 = () => {
        setIsOpen2(true);
    };

    return (
        <ButtonWrap>
            <Button onClick={onClickButton1}>Click</Button>
            <Button className='blue' onClick={onClickButton2}>Click</Button>
            {isOpen1 && ( 
                <FirstModal
                    onClose={() => {
                        setIsOpen1(false);
                }}
            />)}

            {isOpen2 && ( 
                <SecondModal
                    onClose={() => {
                        setIsOpen2(false);
                }}
            />)}
        </ButtonWrap>
    );
}

const Button = styled.button`
    font-size: 14px;
    padding: 10px 20px;
    border: none;
    background-color: #fa9f98;
    border-radius: 10px;
    color: white;
    font-style: italic;
    font-weight: 200;
    cursor: pointer;
    &.blue {
        background-color: #6699FF;
        font-size: 14px;
        margin-left: 30px;
      }
    &:hover {
        background-color: #fac2be;
    }
`;

const ButtonWrap = styled.button`
    border: none;
    background-color: white;
    text-align: center;
    margin: 50px auto;
`;

export default ModalButton;