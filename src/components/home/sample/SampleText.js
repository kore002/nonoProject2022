import React from 'react';
// import { useSelector } from 'react-redux';
import Toastify from '../../common/toast/Toastify';
import ModalButton from '../../common/modal/base/ModalButton'
import './SampleText.css';

const SampleText = () => {
    // const inputData = useSelector(state => state.board.inputData)
    // const lastId = useSelector(state => state.board.lastId)

    return (
        <div className='listApi'>
          
            <Toastify />
            <ModalButton/>
        </div>
    );
};

export default SampleText;