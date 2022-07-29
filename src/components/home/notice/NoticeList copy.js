
import React from 'react';
import { useSelector } from 'react-redux';
import { FiList,  FiEdit} from "react-icons/fi";
import { useState } from 'react';
import NoticeModal from '../../common/modal/notice/NoticeModal';
import './NoticeList.css'
function NoticeList() {
    const inputData = useSelector(state => state.board.inputData)
    const lastId = useSelector(state => state.board.lastId)
    const [isOpen1, setIsOpen1] = useState(false);
   

    const onClickButton1 = () => {
        setIsOpen1(true);
    };


    return (
        <div className='noticeList'>
            
            { lastId !== 0 ?
                inputData.map(rowData => (
                    rowData.id !== '' && 
                    <div className='noticeBlock'>
                        <div className='noticeHeader'>
                             <p>공지사항</p>
                            <FiList className='emo' />
                            <FiEdit className='emo' onClick={onClickButton1}/>
                                {isOpen1 && ( 
                                    <NoticeModal
                                    onClose={() => {
                                    setIsOpen1(false);
                                    }}
                                />)}
                         </div>
                        <div className='noticeBody'>
                            <p className='noticeTitle'>{'공지사항 제목 입니다'}</p>
                            <hr/>
                            <p className='noticeConent'>{'내용입니다'}</p>
                        </div>
                    </div>,
                    <div className='noticeBlock'>
                        <div className='noticeHeader'>
                            <p>공지사항</p>
                            <FiList className='emo' />
                            <FiEdit className='emo' onClick={onClickButton1}/>
                                {isOpen1 && ( 
                                    <NoticeModal
                                    onClose={() => {
                                    setIsOpen1(false);
                                    }}
                                />)}
                        </div>
                        <div className='noticeBody'>
                            <p className='noticeTitle'>{rowData.title}</p>
                            <hr/>
                            <p className='noticeConent'>{rowData.content}</p>
                        </div>
                    </div>
                )) :
                <div>
                    <div className='noticeHeader'>
                        <p>공지사항</p>
                        <FiList className='emo' />
                        <FiEdit className='emo' onClick={onClickButton1}/>
                            {isOpen1 && ( 
                                <NoticeModal
                                onClose={() => {
                                setIsOpen1(false);
                                 }}
                            />)}
                    </div>
                    <div className='noticeBody'>
                        <div className='noticeTitle'>공지사항 제목 입니다</div>
                        <hr/>
                        <div className='noticeConent'>내용입니다</div>
                    </div>
                </div>
            }
      
        </div>
    )
}


export default NoticeList;