import React from 'react';
import { useState } from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import Toastify from '../../toast/Toastify';
import './FirstModal.css';
import ToolkitTodo from '../../../home/toolkit/ToolkitTodo';
const FirstModal = ({ onClose }) => {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
 
  const onReset = () => {
    setText('');
    
  };

 
  return (
    <Modal onClose={onClose}>
      <h1>First Modal</h1>
      <Toastify />
      <ToolkitTodo />
      <input onChange={onChange} value={text}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
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

export default FirstModal;