
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
   
    // notice 모달 전달 true = 모달open
    const onClickButton1 = () => {
        setIsOpen1(true);
    };
    // 신규 notice 추가
    const noticeUpdate = () =>{
        if(lastId !== 0)
            {   return(
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
                            <p className='noticeTitle'>{rowData.title}</p>
                            <hr/>
                            <p className='noticeConent'>{rowData.content}</p>
                        </div>
                    </div>
                )))
            }
    }
    

    return ( 
        // 고정 공지사항 생성 블럭
        <div className='noticeList'>
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
                    </div>
                    {/* 추가 notice 불러오기 */}
                  {noticeUpdate()} 
        </div>
    )
}


export default NoticeList;