import React from 'react';
import { FiList,  FiEdit} from "react-icons/fi";
import FirstModal from '../../common/modal/FirstModal copy';
import { useState } from 'react';
function NoticeItem(title, content) {
  const [isOpen1, setIsOpen1] = useState(false);
  const onClickButton1 = () => {
    setIsOpen1(true);
};
  return (
    <div className='noticeBlock'>
      <div className='noticeHeader'>
        <p>공지 사항</p>
        <FiList className='emo' />
        <FiEdit className='emo' onClick={onClickButton1}/>
          {isOpen1 && ( 
            <FirstModal
                onClose={() => {
                setIsOpen1(false);
                }}
              />)}
      </div>
      <div className='noticeBody'>
          <div>
            <p className='noticeTitle'>{title}</p>
          </div>
          <div>
            <p className='noticeConent'>{content}</p>
          </div>
        </div>
    </div>
  )
}
export default NoticeItem;