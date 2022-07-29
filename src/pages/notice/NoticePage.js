import React from 'react';

import Header from '../../components/common/header/Header';
import Sidebar from '../../components/common/sidebar/Sidebar';
import NoticeBody from '../../components/home/notice/NoticBody';

const NoticePage = () => {
    return (
        <div>
             <Sidebar />
            <div className='container'>
                 <Header />
                <NoticeBody />
            </div>
        </div>
    )
}


export default NoticePage;