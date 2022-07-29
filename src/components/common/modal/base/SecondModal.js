import React from 'react';

import Modal from './Modal';
import styled from 'styled-components';

const SecondModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <h1>Second Modal</h1>
      <Button onClick={onClose}>Close</Button>
    </Modal>
  );
}

const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #898989;
  }
`;

export default SecondModal;
