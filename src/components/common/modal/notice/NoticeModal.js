import React from 'react';
import { useState } from 'react';
import Modal from './Modal';
import { useDispatch } from 'react-redux'
import { save } from '../../../../features/sample/noticeSlice';
import './NoticeModal.css';
const NoticeModal = ({ onClose }) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch()
    
    // toolkit으로 입력값 저장
    const onSave = () => {
      const inputData = {
          id: '',
          title: title,
          content: content
      }
      dispatch(save(inputData))
      setTitle('')
      setContent('')
      onClose()
  }

  const handleTitle = (event) => {
    setTitle(event.target.value)
  }
  const handleContent = (event) => {
    setContent(event.target.value)
  }

  return (
    <Modal>
      <div>
            <h2>글 작성</h2>
            <div>
                <div>
                    <input type='text' className='inputTitle' placeholder='제목을 입력하세요' onChange={handleTitle} value={title} />
                </div>
                <div>
                    <textarea className='inputContent' placeholder= '내용을 입력하세요' onChange={handleContent} value={content} />
                </div>
                <div>
                    <button type='button' onClick={onSave}>submit</button>
                </div>
            </div>
        </div>
    </Modal>
  );

  }
export default NoticeModal;